import type { APIRoute } from 'astro';
import { getCompanies } from '../lib/content';

export const GET: APIRoute = async ({ site }) => {
  const companies = await getCompanies();
  const paths = [
    '/',
    '/security',
    '/work',
    '/projects',
    '/writing',
    '/about',
    '/contact',
    ...companies.flatMap((c) => [`/work/${c.slug}`, ...c.projects.map((p) => `/work/${c.slug}/${p.slug}`)]),
  ];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
