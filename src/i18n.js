import { init, register, locale as _locale, _ } from 'svelte-i18n';

// Register locales – lazy load JSON
register('en', () => import('./locales/en.json'));
register('nb', () => import('./locales/nb.json'));

// Set a default locale on startup
init({
  fallbackLocale: 'en',
  initialLocale: 'en'   // <-- changed from null to 'en'
});
export const t = _;   // translation helper
export const locale = _locale;

