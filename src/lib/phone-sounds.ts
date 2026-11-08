import type { Locale } from './locales';

export interface PhoneSoundClip {
  src: `/sounds/${string}`;
  credit: string;
  rights: string;
  sourceUrl?: string;
  note: Record<Locale, string>;
}

// Startup sounds are keyed by the exact brand name used in phone frontmatter.
export const PHONE_STARTUP_SOUNDS: Partial<Record<string, PhoneSoundClip>> = {};

// Signature ringtones or melodies are keyed by phone slug.
export const PHONE_SIGNATURE_SOUNDS: Partial<Record<string, PhoneSoundClip>> = {};
