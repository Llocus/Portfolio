import { getDictionary, type Locale } from "../utils/dictionaries";
import { Footer } from "./Footer";

export async function TranslatedFooter({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  return <Footer uiTranslations={dictionary.ui} />;
}