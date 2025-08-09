import { getDictionary, type Locale } from "../utils/dictionaries";
import { MobileNav } from "./MobileNav";

export async function TranslatedMobileNav({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  return <MobileNav lang={lang} uiTranslations={dictionary.ui} />;
}
