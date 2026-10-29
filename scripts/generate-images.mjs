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
  // Same badge + timeline glyph as LogoMark/favicon, scaled up, for one consistent brand mark
  // across the header, the favicon, and this share image.
  return `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="badge" x1="0" y1="0" x2="176" y2="176">
        <stop offset="0" stop-color="#fb923c" />
        <stop offset="1" stop-color="#c2410c" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stop-color="#f97316" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#f97316" stop-opacity="0" />
      </radialGradient>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fill-opacity="0.04" />
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="#0a0a0a" />
    <rect width="1200" height="630" fill="url(#dots)" />
    <rect x="0" y="0" width="1200" height="8" fill="#ea580c" />

    <circle cx="208" cy="251" r="170" fill="url(#glow)" />
    <g transform="translate(120,163)">
      <rect width="176" height="176" rx="44" fill="url(#badge)" />
      <path d="M55 36v104" stroke="#fff7ed" stroke-width="8.25" stroke-linecap="round" opacity="0.65" />
      <circle cx="55" cy="47" r="12.375" fill="#fff7ed" />
      <circle cx="55" cy="88" r="12.375" fill="#fff7ed" />
      <circle cx="55" cy="129" r="12.375" fill="#fff7ed" />
      <path d="M82.5 49.5h49.5M82.5 88h33M82.5 126.5h55" stroke="#fff7ed" stroke-width="9.625" stroke-linecap="round" />
    </g>

    <text x="360" y="300" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#fafafa">${siteName}</text>
    <text x="360" y="350" font-family="Arial, sans-serif" font-size="30" fill="#a3a3a3">${tagline}</text>
    <text x="360" y="400" font-family="Arial, sans-serif" font-size="22" fill="#fb923c">1998 — ${new Date().getFullYear()}</text>
  </svg>`;
}

async function renderOg() {
  const svg = ogSvg({ siteName: 'Мобільна Історія', tagline: 'Таймлайн етапних телефонів' });
  await sharp(Buffer.from(svg)).png().toFile(path.join(root, 'public/og-image.png'));
  console.log('og-image.png written');
}

await renderFavicons();
await renderOg();
