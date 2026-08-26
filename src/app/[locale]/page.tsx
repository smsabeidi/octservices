import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Nav } from "@/components/kafka/shared/Nav";
import { Footer } from "@/components/kafka/shared/Footer";
import { Hero } from "@/components/kafka/home/Hero";
import { Trusted } from "@/components/kafka/home/Trusted";
import { About } from "@/components/kafka/home/About";
import { Services } from "@/components/kafka/home/Services";
import { Expertise } from "@/components/kafka/home/Expertise";
import { HowWeWork } from "@/components/kafka/home/HowWeWork";
import { DocumentTypes } from "@/components/kafka/home/DocumentTypes";
import { Testimonials } from "@/components/kafka/home/Testimonials";
import { Faq } from "@/components/kafka/home/Faq";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const t = dict.home;

  return (
    <>
      <Nav t={dict.chrome} locale={locale} />
      <main>
        <Hero t={t.hero} />
        <Trusted t={t.trusted} />
        <About t={t.about} />
        <Services t={t.services} locale={locale} />
        <Expertise t={t.expertise} />
        <HowWeWork t={t.howWeWork} locale={locale} />
        <DocumentTypes t={t.documentTypes} locale={locale} />
        <Testimonials t={t.testimonials} locale={locale} />
        <Faq t={t.faq} />
      </main>
      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}
