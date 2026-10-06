import { XMLParser } from 'fast-xml-parser';
import config from '../data/feeds.json';
import fallback from '../data/writing-fallback.json';

export interface Article {
  title: string;
  url: string;
  date: string;
  platform: string;
  excerpt: string;
  categories: string[];
  topic: string;
}

type Raw = Omit<Article, 'topic'>;

const parser = new XMLParser({ ignoreAttributes: false });

function text(html: unknown): string {
  return String(html ?? '')
    .replace(/<figure[\s\S]*?<\/figure>/g, ' ')
    .replace(/<h[1-6][\s\S]*?<\/h[1-6]>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerpt(s: string, max = 170): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

async function fetchFeed(url: string, platform: string): Promise<Raw[]> {
  const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`${platform} feed returned ${res.status}`);
  const doc = parser.parse(await res.text());
  const items = [].concat(doc?.rss?.channel?.item ?? []) as Record<string, any>[];
  if (!items.length) throw new Error(`${platform} feed is empty`);
  return items.map((i) => ({
    title: text(i.title),
    url: String(i.link).split('?')[0],
    date: new Date(i.pubDate).toISOString().slice(0, 10),
    platform,
    excerpt: excerpt(text(i['content:encoded'] ?? i.description)),
    categories: [].concat(i.category ?? []).map((c: unknown) => text(c)),
  }));
}

const key = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().slice(0, 60);

function topicOf(a: Raw): string {
  for (const t of config.topics as { name: string; title?: string; categories?: string }[]) {
    if (t.title && new RegExp(t.title, 'i').test(a.title)) return t.name;
    if (t.categories && a.categories.some((c) => new RegExp(t.categories!, 'i').test(c))) return t.name;
  }
  return 'Other';
}

let cached: Promise<Article[]> | undefined;

export function getArticles(): Promise<Article[]> {
  cached ??= load();
  return cached;
}

// Medium post URLs end in a hex id, which survives title and slug edits.
const postId = (url: string) => decodeURI(url).match(/-([0-9a-f]{8,16})\/?$/)?.[1] ?? url;

const small = new Set(['a', 'an', 'and', 'in', 'of', 'on', 'or', 'the', 'to', 'for', 'with']);
function titleFromSlug(url: string): string {
  const slug = decodeURI(new URL(url).pathname).replace(/^\/|-[0-9a-f]{8,16}\/?$/g, '');
  return slug
    .split('-')
    .map((w, i) => (i > 0 && small.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

// RSS feeds only carry the newest posts, so the sitemap is used to find older ones.
async function fetchSitemap(url: string, platform: string): Promise<Raw[]> {
  const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`${platform} sitemap returned ${res.status}`);
  const doc = parser.parse(await res.text());
  const urls = [].concat(doc?.urlset?.url ?? []) as { loc: string; lastmod?: string }[];
  return urls
    .filter((u) => /-[0-9a-f]{8,16}\/?$/.test(decodeURI(u.loc)))
    .map((u) => ({
      title: titleFromSlug(u.loc),
      url: u.loc,
      date: String(u.lastmod ?? '').slice(0, 10),
      platform,
      excerpt: '',
      categories: [],
    }));
}

async function loadPlatform(f: { platform: string; url: string; sitemap?: string }): Promise<Raw[]> {
  const local = (fallback as Raw[]).filter((a) => a.platform === f.platform);
  const [rss, map] = await Promise.all([
    fetchFeed(f.url, f.platform).catch((err) => {
      console.warn(`[writing] ${err.message}; using local list for ${f.platform}`);
      return [] as Raw[];
    }),
    f.sitemap
      ? fetchSitemap(f.sitemap, f.platform).catch((err) => {
          console.warn(`[writing] ${err.message}`);
          return [] as Raw[];
        })
      : Promise.resolve([] as Raw[]),
  ]);

  const byId = new Map<string, Raw>();
  for (const a of [...rss, ...local, ...map]) if (!byId.has(postId(a.url))) byId.set(postId(a.url), a);
  const added = map.filter((a) => byId.get(postId(a.url)) === a);
  if (added.length) console.warn(`[writing] ${added.length} ${f.platform} post(s) not in the local list: ${added.map((a) => a.url).join(', ')}`);
  return [...byId.values()];
}

async function load(): Promise<Article[]> {
  const feeds = config.feeds.filter((f) => f.url).sort((a, b) => a.priority - b.priority);
  const lists = await Promise.all(feeds.map(loadPlatform));
  const hidden = new Set((config.hide as string[]).map(postId));

  // Feeds are ordered by priority, so the first copy of a cross-posted
  // article (Hashnode before Substack before Medium) is the one kept.
  const seen = new Map<string, Raw>();
  for (const a of lists.flat()) {
    if (hidden.has(postId(a.url))) continue;
    if (!seen.has(key(a.title))) seen.set(key(a.title), a);
  }

  return [...seen.values()]
    .map((a) => ({ ...a, topic: topicOf(a) }))
    .sort((a, b) => b.date.localeCompare(a.date));
}
