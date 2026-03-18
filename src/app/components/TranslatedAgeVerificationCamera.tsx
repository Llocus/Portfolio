import { getDictionary, type Locale } from "../utils/dictionaries";
import AgeVerificationModal from "./AgeVerificationCamera";

export async function TranslatedAgeVerificationCamera({ lang }: { lang: Locale }) {
    const dictionary = await getDictionary(lang);
    return <AgeVerificationModal uiTranslations={dictionary.ui} />;
}