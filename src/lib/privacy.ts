export const PRIVACY_KEY = 'mobile-history:privacy';
export const PRIVACY_MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export function privacyChoice(): boolean | null {
  try {
    const value = JSON.parse(localStorage.getItem(PRIVACY_KEY) || 'null');
    if (value?.version === 1 && typeof value.theme === 'boolean' && typeof value.at === 'number' && value.at <= Date.now() && Date.now() - value.at < PRIVACY_MAX_AGE) return value.theme;
  } catch {}
  return null;
}
