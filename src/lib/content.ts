import { getCollection } from 'astro:content';

const svgs = import.meta.glob('/src/diagrams/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export function diagram(file: string): string {
  const svg = svgs[`/src/diagrams/${file}.svg`];
  if (!svg) throw new Error(`Missing diagram: src/diagrams/${file}.svg`);
  return svg;
}

export async function getCompanies() {
  const [companies, work] = await Promise.all([getCollection('companies'), getCollection('work')]);
  return companies
    .sort((a, b) => a.data.order - b.data.order)
    .map((c) => ({
      slug: c.id,
      ...c.data,
      projects: work
        .filter((w) => w.data.company === c.id)
        .sort((a, b) => a.data.order - b.data.order)
        .map((w) => ({ slug: w.id.split('/').pop()!, ...w.data })),
    }));
}

export async function getSecurity() {
  const entries = await getCollection('security');
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const securityTypes = [
  { type: 'contest', name: 'Competitive audits', empty: 'No contest results published yet.' },
  { type: 'report', name: 'Audit reports', empty: 'No audit reports published yet.' },
  { type: 'writeup', name: 'Vulnerability write-ups', empty: 'No write-ups published yet. They appear here after disclosure.' },
  { type: 'oss', name: 'Open-source security contributions', empty: 'No open-source security contributions listed yet.' },
] as const;

export function formatDate(d: Date | string, style: 'month' | 'day' = 'month'): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    ...(style === 'day' ? { day: 'numeric' } : {}),
    timeZone: 'UTC',
  });
}
