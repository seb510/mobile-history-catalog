// Rasterizes the hand-authored SVG logo (public/favicon.svg) into the PNG sizes browsers/social
// crawlers actually need. Run manually with `npm run gen:images` whenever the logo changes —
// these are static, hand-curated brand assets like everything else in this project, not a build
// step that needs to run on every `astro build`.
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const faviconSvg = readFileSync(path.join(root, 'public/favicon.svg'));

async function renderFavicons() {
  await sharp(faviconSvg).resize(32, 32).png().toFile(path.join(root, 'public/favicon-32.png'));
  await sharp(faviconSvg).resize(180, 180).png().toFile(path.join(root, 'public/apple-touch-icon.png'));
  console.log('favicon-32.png, apple-touch-icon.png written');
}

function ogSvg({ siteName, tagline }) {
  return `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0a0a0a" />
    <rect x="0" y="0" width="1200" height="10" fill="#f97316" />
    <g transform="translate(120,205)">
      <rect x="9" y="3" width="90" height="126" rx="20" stroke="#f97316" stroke-width="9" fill="none" />
      <rect x="54" y="25" width="18" height="7" rx="3.5" fill="#f97316" />
      <rect x="36" y="88" width="15" height="30" rx="4.5" fill="#f97316" />
      <rect x="55.5" y="67" width="15" height="51" rx="4.5" fill="#f97316" />
      <rect x="75" y="79" width="15" height="39" rx="4.5" fill="#f97316" />
    </g>
    <text x="300" y="300" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#fafafa">${siteName}</text>
    <text x="300" y="350" font-family="Arial, sans-serif" font-size="30" fill="#a3a3a3">${tagline}</text>
    <text x="300" y="400" font-family="Arial, sans-serif" font-size="22" fill="#f97316">1998 — ${new Date().getFullYear()}</text>
  </svg>`;
}

async function renderOg() {
  const svg = ogSvg({ siteName: 'Мобільна Історія', tagline: 'Таймлайн етапних телефонів' });
  await sharp(Buffer.from(svg)).png().toFile(path.join(root, 'public/og-image.png'));
  console.log('og-image.png written');
}

await renderFavicons();
await renderOg();
