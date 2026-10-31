import type { Locale } from './locales';
import { MUSEUM_PHOTO_LABEL } from './ui-strings';

// Permission-based museum images require a visible, clickable source credit.
export function museumImageCredit(data: { imageSourceUrl?: string }, locale: Locale) {
  if (!data.imageSourceUrl) return null;
  try {
    const url = new URL(data.imageSourceUrl);
    if (url.protocol !== 'https:' || !['mobilephonemuseum.com', 'www.mobilephonemuseum.com'].includes(url.hostname)) return null;
    return { href: data.imageSourceUrl, label: MUSEUM_PHOTO_LABEL[locale] };
  } catch {
    return null;
  }
}
