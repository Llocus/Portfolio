import { Providers } from "../providers";
import { Box } from "@chakra-ui/react";
import { type Locale } from "../utils/dictionaries";
import { TranslatedHeader } from "../components/TranslatedHeader";
import { TranslatedMobileNav } from "../components/TranslatedMobileNav";
import { TranslatedFooter } from "../components/TranslatedFooter";
import { i18n } from "../../i18n-config";
import type { Metadata } from 'next';
import { AnimatedBackground } from "../components/AnimatedBackground";
import { siteConfig } from "../data/siteConfig";
import { TranslatedAgeVerificationCamera } from "../components/TranslatedAgeVerificationCamera";

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang;

  const metadata =
    siteConfig.translations[lang]?.metadata ||
    siteConfig.translations.pt.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export async function generateStaticParams() {
  const locales = i18n.locales;
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <TranslatedAgeVerificationCamera lang={lang} />
          <AnimatedBackground />
          <Box
            minH="100vh"
            display="flex"
            flexDirection="column"
            color="white"
            position="relative"
          >
            <TranslatedHeader lang={lang} />
            <TranslatedMobileNav lang={lang} />
            <Box as="main" flex="1">
              {children}
            </Box>
            <TranslatedFooter lang={lang} />
          </Box>
        </Providers>
      </body>
    </html>
  );
}