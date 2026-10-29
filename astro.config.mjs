// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';
import nodeCommonjs from './scripts/vite-node-commonjs.mjs';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const siteUrl = new URL(env.SITE_URL || 'https://mobile-history.example');
if (!['http:', 'https:'].includes(siteUrl.protocol) || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password) {
  throw new Error('SITE_URL must be an HTTP(S) origin without a path, credentials or query.');
}
if (env.SEO_INDEXABLE === 'true' && (siteUrl.protocol !== 'https:' || /(^localhost$|\.example$|^127\.)/.test(siteUrl.hostname))) {
  throw new Error('SEO_INDEXABLE=true requires a real HTTPS production SITE_URL.');
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl.origin,
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss(), nodeCommonjs()],
  },
});
