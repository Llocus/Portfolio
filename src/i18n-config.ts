export const i18n = {
  locales: ['pt', 'en'],
  defaultLocale: 'en',
} as const;

export type Locale = (typeof i18n)['locales'][number];