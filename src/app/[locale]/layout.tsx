import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Schibsted_Grotesk, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { ScrollReveal } from "@/components/kafka/shared/ScrollReveal";
import { direction, htmlLang, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-schibsted",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Schibsted Grotesk and Inter carry no Arabic glyphs. IBM Plex Sans Arabic is a
 * grotesque with matching proportions, so the Arabic pages keep the same voice
 * rather than falling back to a system serif.
 */
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const { title, description } = dict.meta;

  // Tell search engines about every language version of this page.
  const languages = Object.fromEntries(
    locales.map((l) => [htmlLang[l], `/${l}`])
  );

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://octservices.vercel.app"
    ),
    title,
    description,
    alternates: { canonical: `/${locale}`, languages },
    openGraph: {
      type: "website",
      locale: htmlLang[locale],
      title,
      description,
      images: ["/logo/og-gls.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo/og-gls.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typed = locale as Locale;
  const dir = direction[typed];

  return (
    <html
      lang={htmlLang[typed]}
      dir={dir}
      className={`${schibsted.variable} ${inter.variable} ${plexArabic.variable}`}
      data-locale={typed}
    >
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
