import { getPhonesForLocale, slugOf } from '../lib/phones';
import type { Locale } from '../lib/locales';

export const prerender = true;

interface SearchPhone {
  slug: string;
  brand: string;
  model: string;
  year: number;
  milestone: string;
}

async function buildIndex(locale: Locale): Promise<SearchPhone[]> {
  const phones = await getPhonesForLocale(locale);
  return phones.map((phone) => ({
    slug: slugOf(phone),
    brand: phone.data.brand,
    model: phone.data.model,
    year: phone.data.year,
    milestone: phone.data.milestone ?? '',
  }));
}

export async function GET() {
  const index: Record<Locale, SearchPhone[]> = {
    uk: await buildIndex('uk'),
    ru: await buildIndex('ru'),
    en: await buildIndex('en'),
  };

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
