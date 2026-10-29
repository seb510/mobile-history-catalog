import type { APIRoute } from 'astro';
import { searchEnabled } from '../lib/search-index';

export const GET: APIRoute = ({ site }) => new Response(
  searchEnabled
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
