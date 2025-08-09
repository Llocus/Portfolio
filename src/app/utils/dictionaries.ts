import 'server-only';
import { siteConfig } from '../data/siteConfig';

export type Locale = 'pt' | 'en';

const dictionaries = {
  en: () => Promise.resolve(siteConfig.translations.en),
  pt: () => Promise.resolve(siteConfig.translations.pt),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.pt();
};
