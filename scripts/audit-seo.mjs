import fs from 'node:fs';
import path from 'node:path';
import { loadEnv } from 'vite';

const root = path.resolve('dist');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const pages = new Map();
const issues = [];
for (const file of walk(root).filter((file) => file.endsWith('.html'))) {
  const html = fs.readFileSync(file, 'utf8');
  const pathname = '/' + path.relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  if (!canonical || !title || !description || !robots) issues.push(`${pathname}: missing core metadata`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) issues.push(`${pathname}: expected exactly one H1`);
  for (const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { issues.push(`${pathname}: invalid JSON-LD`); }
  }
  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => ({ locale: match[1], url: match[2] }));
  pages.set(pathname, { canonical, title, robots, alternates });
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urls.length || new Set(urls).size !== urls.length) issues.push('Sitemap empty or duplicated');
const titles = new Set();
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const page = pages.get(pathname);
  if (!page || page.canonical !== url) issues.push(`${pathname}: sitemap must contain existing self-canonical pages only`);
  if (pathname.includes('404')) issues.push(`${pathname}: error page in sitemap`);
  if (titles.has(page?.title)) issues.push(`${pathname}: duplicate indexable title`);
  titles.add(page?.title);
}
// /favorites/ (personal localStorage data) and /search/ (query-param results) are always noindex,
// regardless of SEO_INDEXABLE — same as 404 — because they are excluded from indexablePaths().
const alwaysNoindex = (pathname) => pathname.includes('404') || /\/(favorites|search)\/$/.test(pathname);
for (const [pathname, page] of pages) {
  if (pathname.includes('404') && !page.robots?.includes('noindex')) issues.push(`${pathname}: error page must be noindex`);
  for (const alt of page.alternates) {
    const target = pages.get(new URL(alt.url).pathname);
    if (!target || target.canonical !== alt.url) issues.push(`${pathname}: alternate targets a missing or noncanonical translation`);
    if (!target?.alternates.some((reverse) => reverse.url === page.canonical)) issues.push(`${pathname}: alternate lacks reciprocal link`);
  }
}
const enabled = loadEnv('production', process.cwd(), '').SEO_INDEXABLE === 'true';
const robotsTxt = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (enabled ? !robotsTxt.includes('Sitemap:') || robotsTxt.includes('Disallow: /') : !robotsTxt.includes('Disallow: /')) issues.push('robots.txt does not match indexing mode');
for (const [pathname, page] of pages) {
  if (enabled && !alwaysNoindex(pathname) ? page.robots?.includes('noindex') : !page.robots?.includes('noindex')) issues.push(`${pathname}: incorrect robots mode`);
}
if (issues.length) { console.error(issues.join('\n')); process.exitCode = 1; }
else console.log(`SEO audit passed: ${pages.size} HTML pages, ${urls.length} canonical sitemap URLs, indexing ${enabled ? 'enabled' : 'disabled'}.`);
