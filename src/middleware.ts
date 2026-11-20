import { defineMiddleware } from 'astro:middleware';
import { legacyLanguageTarget } from './lib/legacy-language-url.mjs';

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  const target = import.meta.env.DEV && legacyLanguageTarget(url);
  return target ? redirect(target.toString(), 301) : next();
});
