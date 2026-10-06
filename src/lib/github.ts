import config from '../data/projects.json';

export interface Repo {
  name: string;
  description: string;
  language: string;
  stack: string;
  status: 'active' | 'complete' | 'learning';
  url: string;
  demo: string;
  updated?: string;
}

async function fetchRepo(repo: string) {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  if (import.meta.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${import.meta.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${config.github}/${repo}`, {
    headers,
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`GitHub returned ${res.status} for ${repo}`);
  return res.json();
}

let cached: Promise<Repo[]> | undefined;

export function getRepos(): Promise<Repo[]> {
  cached ??= Promise.all(
    config.repos.map(async (r) => {
      let gh: Record<string, any> = {};
      try {
        gh = await fetchRepo(r.repo);
      } catch (err) {
        console.warn(`[projects] ${(err as Error).message}; using local data`);
      }
      return {
        name: gh.name ?? r.repo,
        description: r.description || gh.description || '',
        language: gh.language ?? '',
        stack: r.stack,
        status: r.status as Repo['status'],
        url: gh.html_url ?? `https://github.com/${config.github}/${r.repo}`,
        demo: r.demo || gh.homepage || '',
        updated: gh.pushed_at?.slice(0, 10),
      };
    }),
  );
  return cached;
}

export const tracks = config.tracks;
