import 'server-only';
import { siteConfig } from '../data/siteConfig';

export type Locale = 'pt' | 'en' | 'es';

const dictionaries = {
  en: () => Promise.resolve(siteConfig.translations.en),
  pt: () => Promise.resolve(siteConfig.translations.pt),
  es: () => Promise.resolve(siteConfig.translations.es),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.en();
};
