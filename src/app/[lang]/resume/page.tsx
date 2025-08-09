import ResumePageClient from "../../resume-page";
import { getDictionary, type Locale } from "../../utils/dictionaries";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function ResumePage(props: PageProps) {
  const resolvedParams = await props.params;
  const { lang } = resolvedParams;

  const dictionary = await getDictionary(lang);

  return <ResumePageClient dictionary={dictionary} />;
}
