// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain once Cloudflare Workers deploy is set up —
  // used only to build absolute canonical/OG URLs in <head>.
  site: 'https://mobile-history.example',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});