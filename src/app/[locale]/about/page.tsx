import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/kafka/shared/Nav";
import { Footer } from "@/components/kafka/shared/Footer";
import { Hero } from "@/components/kafka/about/Hero";
import { Mission } from "@/components/kafka/about/Mission";
import { Founder } from "@/components/kafka/about/Founder";
import { Services } from "@/components/kafka/about/Services";
import { Team } from "@/components/kafka/about/Team";
import { Process } from "@/components/kafka/about/Process";
import { Career } from "@/components/kafka/about/Career";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/* title + description live in the about namespace; the English copy is
   verbatim from the source page metadata */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = (await getDictionary(locale)).about;

  return { title: meta.title, description: meta.description };
}

/**
 * /about — rebuilt from the source page markup
 * (pages/about/sections/01-main--0*.{html,txt}, css/shared-css-8205f450.css).
 *
 * Section order, matching `sections.json`:
 *   1.0 Hero        framer-p11fvt   #fff
 *   1.1 Mission     framer-1rfehh8  #fff
 *   1.2 Founder     framer-1x8ter7  #fcfbf7
 *   1.3 Services    framer-1wh4ri0  #fff
 *   1.4 Team        framer-fhfm1q   #fcfbf7
 *   1.5 How we work framer-1ktwpe1  #fff
 *   1.6 Career      framer-1cvzals  #fff
 *
 * Every section paints its own light background: the document body is #101010.
 * Breakpoints throughout: desktop >=1200, tablet 810-1199, phone <=809.
 */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.about;

  return (
    <>
      <Nav t={dict.chrome} locale={locale} tone="light" />
      <main className="flex w-full flex-col bg-white">
        <Hero t={t.hero} />
        <Mission t={t.mission} />
        <Founder t={t.founder} />
        <Services t={t.services} locale={locale} />
        <Team t={t.team} />
        <Process t={t.process} locale={locale} />
        <Career t={t.career} locale={locale} />
      </main>
      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}
