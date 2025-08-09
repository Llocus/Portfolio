import { getDictionary, type Locale } from "../utils/dictionaries";
import { Header } from "./Header";

export async function TranslatedHeader({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  return <Header lang={lang} uiTranslations={dictionary.ui} />;
}
