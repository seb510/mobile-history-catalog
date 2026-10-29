import type { APIRoute } from 'astro';
import { indexablePaths, xmlEscape } from '../lib/search-index';

export const GET: APIRoute = async ({ site }) => {
  const urls = await indexablePaths(site!);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${xmlEscape(url)}</loc></url>`).join('\n')}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
