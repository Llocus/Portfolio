import ResumePageClient from "../../resume-page";
import { getDictionary, type Locale } from "../../utils/dictionaries";

export default async function ResumePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return <ResumePageClient dictionary={dictionary} />;
}
