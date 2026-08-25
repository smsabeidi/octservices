import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/kafka/shared/Nav";
import { Footer } from "@/components/kafka/shared/Footer";
import { ContactForm } from "@/components/kafka/shared/ContactForm";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * /contact — rebuilt from the source page markup (framer-gjCGB scope,
 * shared-css-60395012.css).
 *
 * Layout, per section:
 *   main  .framer-w2m7qw  bg #fff, column, w-full, gap 0.
 *   Hero  .framer-137cub0 bg #fff, column centered, padding 200px 36px 36px;
 *         tablet + phone 160px 24px 24px. Inner .framer-whzz4d max-w 1440px.
 *         .framer-1solh6y row gap 20px → phone column gap 41px.
 *   Image .framer-1y4rx04 height auto, aspect-ratio 1312/745, image absolutely
 *         positioned inset 0 with object-fit cover.
 *   Content .framer-wvlvdq bg #fff, row, items-start, padding 80px 36px;
 *         tablet 80px 24px; phone column 80px 24px. Inner .framer-1luz02t
 *         row gap 20px max-w 1440px → phone column gap 60px. Two flex-1
 *         columns: details (.framer-13uikms → .framer-dxffml, column gap 60px)
 *         and the form (.framer-1bk8tsk).
 *   Map   .framer-hdjusp-container w-full h 600px wrapping the Google Maps
 *         embed iframe from the source.
 *
 * Type presets:
 *   h6 rgrid2   16px / 120% / -0.02em / w400 / #101010
 *   h1 hwn8r2   66px desktop, 56px tablet, 48px phone / 110% / w400,
 *               tracking -0.02em (phone 0.02em)
 *   h5 1vgyccl  20px desktop, 19px tablet, 18px phone / 130% / w500 / -0.02em
 *   a  g4bnyl   #101010 → hover rgba(16,16,16,0.5), underline 1px, offset 4px,
 *               decoration color rgba(16,16,16,0.8)
 *
 * All copy lives in the `contact` dictionary namespace; the form is a client
 * component and receives its strings as a typed prop from here.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
  };
}

const HERO_IMAGE = "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png";

const h5 =
  "w-full whitespace-pre-wrap text-[20px] font-medium leading-[1.3] tracking-[-0.02em] max-[1199px]:text-[19px] max-[809px]:text-[18px]";

/* preset g4bnyl — the underline only appears on hover. */
const linkClass =
  "text-ink transition-colors duration-200 hover:text-[rgba(16,16,16,0.5)] hover:underline hover:decoration-[rgba(16,16,16,0.8)] hover:decoration-[1px] hover:underline-offset-[4px]";

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    /* .framer-2pql55 / .framer-1c2jsdy / .framer-1kw1q67 */
    <div className="relative flex h-min w-full flex-none flex-col items-center gap-5">
      <h5 className={`${h5} text-[rgba(16,16,16,0.5)]`}>{label}</h5>
      {/* .framer-1f6u5wt / .framer-1oucp8p / .framer-16nunp9 */}
      <div className="relative flex h-min w-full flex-none flex-col items-center gap-2">
        {children}
      </div>
    </div>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.contact;

  return (
    <>
      <Nav t={dict.chrome} locale={locale} tone="light" />

      {/* .framer-w2m7qw */}
      <main className="relative flex h-min w-full flex-none flex-col items-center gap-0 overflow-clip bg-paper text-ink">
        {/* Hero — .framer-137cub0 */}
        <section className="relative flex h-min w-full flex-none flex-col items-center justify-center gap-0 overflow-clip bg-paper px-9 pt-[200px] pb-9 max-[1199px]:px-6 max-[1199px]:pt-[160px] max-[1199px]:pb-6">
          {/* .framer-whzz4d */}
          <div className="relative flex h-min w-full max-w-[1440px] flex-none flex-col items-center justify-center gap-0">
            {/* .framer-1solh6y */}
            <div className="relative flex h-min w-full flex-none flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[41px]">
              {/* .framer-rdboh0 */}
              <div className="relative flex h-min w-px flex-[1_0_0px] flex-col items-center justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
                <h6 className="w-full whitespace-pre-wrap text-[16px] leading-[1.2] font-normal tracking-[-0.02em] text-ink">
                  {t.hero.eyebrow}
                </h6>
                <h1 className="w-full whitespace-pre-wrap text-[66px] leading-[1.1] font-normal tracking-[-0.02em] text-ink max-[1199px]:text-[56px] max-[809px]:text-[48px] max-[809px]:tracking-[0.02em]">
                  {t.hero.heading}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Image — .framer-1y4rx04, aspect-ratio 1312 / 745 */}
        <section className="relative flex aspect-[1312/745] h-auto w-full flex-none flex-col items-center justify-center gap-16 overflow-clip max-[1199px]:gap-12 max-[809px]:gap-16">
          <div className="absolute inset-0 rounded-[inherit]">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              sizes="100vw"
              priority
              className="block h-full w-full object-cover object-center"
            />
          </div>
        </section>

        {/* Content — .framer-wvlvdq */}
        <section className="relative flex h-min w-full flex-none flex-row items-start justify-center gap-5 overflow-clip bg-paper px-9 py-20 max-[1199px]:px-6 max-[809px]:flex-col">
          {/* .framer-1luz02t */}
          <div className="relative flex h-min w-px max-w-[1440px] flex-[1_0_0px] flex-row items-start justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none max-[809px]:flex-col max-[809px]:gap-[60px]">
            {/* .framer-13uikms */}
            <div className="relative flex h-min w-px flex-[1_0_0px] flex-row items-center justify-start gap-[110px] max-[1199px]:gap-[82px] max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-16">
              {/* .framer-dxffml */}
              <div className="relative flex h-min w-px flex-[1_0_0px] flex-col items-center justify-center gap-[60px] overflow-clip">
                <DetailBlock label={t.details.talk.label}>
                  <h5 className={`${h5} text-ink`}>
                    <a
                      href="mailto:info@octservices.com"
                      target="_blank"
                      rel="noopener"
                      className={linkClass}
                    >
                      {t.details.talk.email}
                    </a>
                  </h5>
                  <h5 className={`${h5} text-ink`}>
                    <a
                      href="tel:+45121231289"
                      target="_blank"
                      rel="noopener"
                      className={linkClass}
                    >
                      {t.details.talk.phone}
                    </a>
                  </h5>
                </DetailBlock>

                <DetailBlock label={t.details.hours.label}>
                  <h5 className={`${h5} text-ink`}>{t.details.hours.days}</h5>
                  <h5 className={`${h5} text-ink`}>{t.details.hours.time}</h5>
                </DetailBlock>

                <DetailBlock label={t.details.address.label}>
                  <h5 className={`${h5} text-ink`}>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener"
                      className={linkClass}
                    >
                      {t.details.address.line1}
                    </a>
                  </h5>
                  <h5 className={`${h5} text-ink`}>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener"
                      className={linkClass}
                    >
                      {t.details.address.line2}
                    </a>
                  </h5>
                </DetailBlock>
              </div>
            </div>

            {/* .framer-1bk8tsk */}
            <ContactForm t={t.form} />
          </div>
        </section>

        {/* Map — .framer-hdjusp-container */}
        <div className="relative h-[600px] w-full flex-none">
          <iframe
            title={t.map.title}
            src="https://maps.google.com/maps?q=Warsaw&z=15&output=embed"
            className="h-full w-full border-0"
          />
        </div>
      </main>

      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}
