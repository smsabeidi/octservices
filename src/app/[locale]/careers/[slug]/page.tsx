import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/kafka/shared/Nav";
import { Footer } from "@/components/kafka/shared/Footer";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Dictionary } from "@/i18n/dictionaries/en";

/*
 * /careers/[slug] — rebuilt from the kafka.framer.wiki extraction
 * (pages/careers-*\/sections/01-main.{html,txt} + shared-css-4fac1772.css).
 * Framer ships Desktop/Tablet/Phone DOM variants of the same strings; they are
 * collapsed here into one DOM with responsive arbitrary variants
 * (min 1200 desktop / 810-1199 tablet / max 809 phone).
 *
 * Source layout (framer-caPFX scope):
 * - Main (framer-8ke9n6): #fff, column, centered, gap 0.
 * - Hero (framer-zz4c3b): #fff, padding 200px 36px 36px (tablet/phone
 *   160px 24px 24px); Padding (framer-1n2gapn) max-w 1440px; Top
 *   (framer-1cogdpv) row gap 20px, phone column gap 41px. Left column
 *   (framer-12rm223) flex 1, gap 20px: eyebrow h6 preset rgrid2 and h1 preset
 *   hwn8r2. Right column (framer-2wxieq) flex 1, self-stretch, justify/align
 *   flex-end so the standfirst h5 (preset 1vgyccl, rgba(16,16,16,0.5)) hangs
 *   off the bottom; phone it unsets self-stretch and goes full width.
 * - Image (framer-ssr7x0): full-bleed, height auto with the image's own
 *   intrinsic aspect-ratio inline (1312/745 for project-manager, 1440/745 for
 *   the other two), img absolutely positioned, object-cover.
 * - Content (framer-cgqnn4): #fff, row, align-items flex-start, padding
 *   80px 36px (tablet/phone 80px 24px), phone column. Padding (framer-riynjd)
 *   max-w 1440px gap 20px, phone column gap 60px. Two equal flex-1 columns:
 *   the rich text (framer-nbvq5n > framer-qusnyv, gap 110px desktop / 82px
 *   tablet / 64px phone) and the summary card.
 * - Rich text: h2 preset rf5nl2 (48/42/38px, 110%, w400, -0.02em, #101010),
 *   p and li preset wzscdi (20px desktop / 18px tablet+phone, 1.4em, w500,
 *   -0.02em, rgba(16,16,16,0.5)). Vertical rhythm is Framer's
 *   `margin-top: var(--framer-paragraph-spacing, 0)` on :not(:first-child):
 *   40px before an h2, 20px before a p, and 0 before a ul (the ul carries no
 *   preset, so the property falls back to 0). Lists are padding-inline-start
 *   2ch with an absolutely positioned "•" and no gap between items.
 * - Summary card (framer-1g4vra): #101010, sticky top 130px (relative on
 *   phone), column gap 32px, padding 24px, z-index 1. Four label/value rows
 *   (framer-60wkni, -1xunykg, -u8af2u, -e0btd5): row, gap 32px, each side
 *   flex 1 — label h6 preset rgrid2 at rgba(255,255,255,0.5), value h4 preset
 *   g9rymp (24/22/20px, 120%, w400, uppercase, #fff) right-aligned on
 *   desktop+tablet and left-aligned on phone, where the rows stack (the first
 *   row narrows to gap 12px, the other three keep 32px — reproduced as-is).
 *   The source alignment is physical; it is written here as text-end/text-start
 *   so the card mirrors in Arabic.
 *   1px rgba(255,255,255,0.1) dividers sit between rows.
 * - CTA (framer-1cs0sot): white pill, radius 99px, padding 12px 16px, full
 *   width. Its label sits in a 19px clipped window (framer-hdci7e) holding two
 *   copies 10px apart; justify-content flips flex-start -> flex-end on hover.
 *   Reproduced here as an equivalent translate so it can tween.
 * - Career (framer-px08ru): #fff, column gap 80px (phone 40px), padding
 *   80px 36px (tablet/phone 80px 24px); Padding (framer-1u4owxt) max-w 1440px
 *   gap 60px; Top (framer-14s00nj) row gap 20px, phone column. Rows list
 *   (framer-zvxmhj) gap 20px; each row (framer-surxhu) is content + a 1px
 *   rgba(16,16,16,0.2) rule, with the meta group (framer-ey51r2) holding two
 *   250px columns (180px tablet, full width phone) and the "View job" link.
 * - "View job" (framer-19v2dne): row gap 8px, width min-content,
 *   padding-bottom 4px, 1px underline (framer-4gp9ql) at rgba(16,16,16,0.5)
 *   that thickens to 2px on hover, and a 24x24 clipped arrow window
 *   (framer-jkwkkr) holding two 24x24 arrows 8px apart — justify-content
 *   flips flex-end -> flex-start on hover, swapping the rotated arrow for the
 *   straight one. Reproduced here as an equivalent translate so it can tween.
 */

type Params = { params: Promise<{ locale: string; slug: string }> };

/** Every string on this page comes out of the careers namespace. */
type CareersDict = Dictionary["careers"];
type Job = CareersDict["jobs"][number];
type JobBlock = Job["blocks"][number];

/* Preset rgrid2 — 16px/120%, w400, -0.02em (all three breakpoints). */
const H6 = "text-[16px] font-normal leading-[1.2] tracking-[-0.02em]";
/* Preset hwn8r2 — 66/56/48px, 110%, w400; phone flips the tracking positive. */
const H1 =
  "text-[66px] font-normal leading-[1.1] tracking-[-0.02em] max-[1199px]:text-[56px] max-[809px]:text-[48px] max-[809px]:tracking-[0.02em]";
/* Preset rf5nl2 — 48/42/38px, 110%, w400, -0.02em, #101010. */
const H2 =
  "text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-ink max-[1199px]:text-[42px] max-[809px]:text-[38px]";
/* Preset g9rymp — 24/22/20px, 120%, w400, -0.02em, uppercase. */
const H4 =
  "text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] max-[1199px]:text-[22px] max-[809px]:text-[20px]";
/* Preset 1vgyccl — 20/19/18px, 130%, w500, -0.02em. */
const H5 =
  "text-[20px] font-medium leading-[1.3] tracking-[-0.02em] max-[1199px]:text-[19px] max-[809px]:text-[18px]";
/* Preset wzscdi — 20px desktop / 18px tablet+phone, 1.4em, w500, -0.02em. */
const BODY =
  "text-[20px] font-medium leading-[1.4] tracking-[-0.02em] text-[rgba(16,16,16,0.5)] max-[1199px]:text-[18px]";

/**
 * The [locale] layout generates one set of params per language, so this runs
 * once for each of them. Slugs are routes: every dictionary carries the same
 * three, and the pages differ only in the copy they render.
 */
export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  if (!isLocale(locale)) return [];
  const dict = await getDictionary(locale);
  return dict.careers.jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const job = dict.careers.jobs.find((entry) => entry.slug === slug);
  if (!job) return { title: dict.careers.meta.fallbackTitle };
  return {
    title: job.seo.title,
    description: job.seo.description,
    openGraph: {
      type: "website",
      title: job.seo.title,
      description: job.seo.description,
      url: `https://kafka.framer.wiki/careers/${job.slug}`,
      images: [job.seo.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: job.seo.title,
      description: job.seo.description,
      images: [job.seo.ogImage],
    },
  };
}

export default async function JobPage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.careers;
  const job = t.jobs.find((entry) => entry.slug === slug);
  if (!job) notFound();

  /** Every other opening, in source order — the related-roles list. */
  const related = t.jobs.filter((entry) => entry.slug !== slug);

  return (
    <>
      <Nav t={dict.chrome} locale={locale} />
      {/* framer-8ke9n6 */}
      <main className="relative flex w-full flex-col items-center justify-center overflow-clip bg-paper text-ink">
        {/* Hero — framer-zz4c3b */}
        <section className="relative flex w-full flex-col items-center justify-center overflow-clip bg-paper px-9 pt-[200px] pb-9 max-[1199px]:px-6 max-[1199px]:pt-[160px] max-[1199px]:pb-6">
          {/* framer-1n2gapn */}
          <div className="relative flex h-min w-full max-w-[1440px] flex-none flex-col items-center justify-center">
            {/* framer-1cogdpv */}
            <div className="relative flex h-min w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[41px]">
              {/* framer-12rm223 */}
              <div className="relative flex h-min w-px flex-[1_0_0] flex-col items-center justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
                <div className="relative h-auto w-full flex-none">
                  <h6 className={`${H6} text-ink`}>{job.eyebrow}</h6>
                </div>
                <div className="relative h-auto w-full flex-none">
                  <h1 className={`${H1} text-ink`}>{job.title}</h1>
                </div>
              </div>
              {/* framer-2wxieq */}
              <div className="relative flex h-auto w-px flex-[1_0_0] flex-row items-end justify-end gap-[10px] self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
                <h5 className={`${H5} h-auto w-px flex-[1_0_0] text-[rgba(16,16,16,0.5)]`}>
                  {job.summary}
                </h5>
              </div>
            </div>
          </div>
        </section>

        {/* Image — framer-ssr7x0 */}
        <section
          className="relative flex w-full flex-none flex-col items-center justify-center gap-16 overflow-clip max-[1199px]:min-[810px]:gap-12"
          style={{ aspectRatio: String(job.image.aspectRatio) }}
        >
          <Image
            src={job.image.src}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </section>

        {/* Content — framer-cgqnn4 */}
        <section className="relative flex h-min w-full flex-row items-start justify-center gap-5 overflow-clip bg-paper px-9 py-20 max-[1199px]:px-6 max-[809px]:flex-col">
          {/* framer-riynjd */}
          <div className="relative flex h-min w-px max-w-[1440px] flex-[1_0_0] flex-row items-start justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none max-[809px]:flex-col max-[809px]:gap-[60px]">
            {/* framer-nbvq5n */}
            <div className="relative flex h-min w-px flex-[1_0_0] flex-row items-center justify-start gap-[110px] max-[1199px]:gap-[82px] max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-16">
              <RichText blocks={job.blocks} />
            </div>
            <SummaryCard job={job} t={t.jobPage} locale={locale} />
          </div>
        </section>

        {/* Career — framer-px08ru */}
        <section className="relative flex h-min w-full flex-none flex-col items-center justify-center gap-20 bg-paper px-9 py-20 max-[1199px]:px-6 max-[809px]:gap-10">
          {/* framer-1u4owxt */}
          <div className="relative flex h-min w-full max-w-[1440px] flex-none flex-col items-center justify-center gap-[60px] overflow-clip">
            {/* framer-14s00nj */}
            <div className="relative flex h-min w-full flex-none flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col">
              {/* framer-cucbf8 */}
              <div className="relative flex h-min w-px flex-[1_0_0] flex-col items-center justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
                <div className="relative h-auto w-full flex-none">
                  <h6 className={`${H6} text-[rgba(16,16,16,0.5)]`}>{t.joinUs.eyebrow}</h6>
                </div>
                <div className="relative h-auto w-full flex-none">
                  <h2 className={H2}>{t.joinUs.title}</h2>
                </div>
              </div>
              {/* framer-fhlq1s */}
              <div className="relative flex h-[100px] w-px flex-[1_0_0] flex-row items-start justify-start gap-[10px] max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none">
                <h5 className={`${H5} h-auto w-px flex-[1_0_0] text-[rgba(16,16,16,0.8)]`}>
                  {t.joinUs.description}
                </h5>
              </div>
            </div>
            {/* framer-zvxmhj */}
            <div className="relative flex h-min w-full flex-none flex-col items-center justify-start gap-5">
              {related.map((other) => (
                <RelatedRole
                  key={other.slug}
                  job={other}
                  t={t.joinUs}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}

/**
 * The job body. Spacing follows Framer's `:not(:first-child)` rule, which reads
 * `--framer-paragraph-spacing` off the element's own preset: 40px above an h2,
 * 20px above a p, and 0 above a ul (no preset on the list, so it falls back).
 */
function RichText({ blocks }: { blocks: JobBlock[] }) {
  return (
    /* framer-qusnyv */
    <div className="relative h-auto w-px flex-[1_0_0]">
      {blocks.map((block, i) => {
        const first = i === 0;
        if (block.type === "heading") {
          return (
            <h2 key={`${block.type}-${i}`} className={`${H2} ${first ? "" : "mt-10"}`}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p key={`${block.type}-${i}`} className={`${BODY} ${first ? "" : "mt-5"}`}>
              {block.text}
            </p>
          );
        }
        return (
          <ul key={`${block.type}-${i}`} className="relative m-0 list-none p-0">
            {block.items.map((item) => (
              <li
                key={item}
                className={`${BODY} relative list-none ps-[2ch] before:absolute before:start-0 before:content-['•']`}
              >
                <p>{item}</p>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

/** The sticky black card: four label/value rows over the "Get in touch" pill. */
function SummaryCard({
  job,
  t,
  locale,
}: {
  job: Job;
  t: CareersDict["jobPage"];
  locale: Locale;
}) {
  return (
    /* framer-1g4vra */
    <div className="sticky top-[130px] z-[1] flex h-min w-px flex-[1_0_0] flex-col items-center justify-start gap-8 overflow-clip bg-ink p-6 max-[809px]:relative max-[809px]:top-auto max-[809px]:w-full max-[809px]:flex-none">
      {job.meta.map((row, i) => (
        <Fragment key={row.label}>
          {/* framer-60wkni / -1xunykg / -u8af2u / -e0btd5 */}
          <div
            className={`relative flex h-min w-full flex-none flex-row items-start justify-start gap-8 overflow-clip max-[809px]:flex-col ${
              i === 0 ? "max-[809px]:gap-3" : ""
            }`}
          >
            <div className="relative h-auto w-px flex-[1_0_0] max-[809px]:w-full max-[809px]:flex-none">
              <h6 className={`${H6} text-[rgba(255,255,255,0.5)]`}>{row.label}</h6>
            </div>
            <div className="relative h-auto w-px flex-[1_0_0] max-[809px]:w-full max-[809px]:flex-none">
              <h4 className={`${H4} text-end text-white max-[809px]:text-start`}>{row.value}</h4>
            </div>
          </div>
          {/* framer-1ffhvhu / -4lsmou / -1hg9jrf */}
          {i < job.meta.length - 1 && (
            <div className="relative h-px w-full flex-none overflow-clip bg-[rgba(255,255,255,0.1)]" />
          )}
        </Fragment>
      ))}
      <GetInTouchButton label={t.apply} href={`/${locale}/contact`} />
    </div>
  );
}

/**
 * framer-1cs0sot — white pill whose label lives in a 19px clipped window. The
 * source flips `justify-content` on hover; a translate gives the same swap with
 * a tween the layout property can't produce.
 */
function GetInTouchButton({ label, href }: { label: string; href: string }) {
  return (
    /* framer-1pwpcl3-container */
    <div className="relative h-auto w-full flex-none">
      <Link
        href={href}
        className="group relative flex w-full cursor-pointer flex-row items-center justify-center gap-[10px] overflow-clip rounded-[99px] bg-white px-4 py-3 no-underline"
      >
        {/* framer-hdci7e */}
        <span className="relative flex h-[19px] w-min flex-none flex-col items-center overflow-clip">
          <span className="flex flex-col items-center gap-[10px] transition-transform duration-300 ease-out group-hover:-translate-y-[29px]">
            <span className={`${H6} whitespace-pre-wrap text-ink`}>{label}</span>
            <span aria-hidden="true" className={`${H6} whitespace-pre-wrap text-ink`}>
              {label}
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
}

/** One row of the "Join us" list: title, type, location, "View job", rule. */
function RelatedRole({
  job,
  t,
  locale,
}: {
  job: Job;
  t: CareersDict["joinUs"];
  locale: Locale;
}) {
  return (
    /* framer-4qgwri */
    <div className="relative flex h-min w-full flex-none flex-row flex-wrap items-center justify-start gap-[30px]">
      {/* framer-surxhu */}
      <div className="relative flex h-min w-px flex-[1_0_0] flex-col items-center justify-center gap-5 overflow-clip">
        {/* framer-yv03nb */}
        <div className="relative flex h-min w-full flex-none flex-row items-center justify-center gap-5 max-[809px]:flex-col">
          {/* framer-qomcof */}
          <h5 className={`${H5} relative h-auto w-px flex-[1_0_0] text-[rgba(16,16,16,0.8)] max-[809px]:w-full max-[809px]:flex-none`}>
            {job.title}
          </h5>
          {/* framer-ey51r2 */}
          <div className="relative flex h-min max-w-full flex-none flex-row flex-wrap items-center justify-center gap-[10px] overflow-clip max-[809px]:w-full max-[809px]:flex-col max-[809px]:items-start">
            <h5 className={`${H5} relative h-auto w-[250px] flex-none text-ink max-[1199px]:w-[180px] max-[809px]:w-full`}>
              {job.type}
            </h5>
            <h5 className={`${H5} relative h-auto w-[250px] flex-none text-ink max-[1199px]:w-[180px] max-[809px]:w-full`}>
              {job.location}
            </h5>
            {/* framer-e7hqsx-container */}
            <div className="relative h-auto w-auto flex-none">
              <ViewJobLink href={`/${locale}/careers/${job.slug}`} label={t.viewJob} />
            </div>
          </div>
        </div>
        {/* framer-hi4nhq */}
        <div className="relative h-px w-full flex-none overflow-clip bg-[rgba(16,16,16,0.2)]" />
      </div>
    </div>
  );
}

/**
 * framer-19v2dne — text plus a 24x24 clipped window holding two arrows 8px
 * apart. The source flips the window's `justify-content` from flex-end to
 * flex-start on hover; the equivalent translate below tweens instead.
 */
function ViewJobLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative flex h-min max-w-full cursor-pointer flex-row items-center justify-center gap-2 overflow-clip pb-1 no-underline"
    >
      <span className={`${H5} relative h-auto w-auto flex-none whitespace-pre-wrap text-ink`}>
        {label}
      </span>
      {/* framer-jkwkkr */}
      <span className="relative flex h-6 w-6 flex-none flex-row items-center overflow-clip">
        <span className="flex w-max -translate-x-8 rtl:translate-x-8 flex-row items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-0">
          {/* framer-1f6uivc */}
          <span className="flex h-6 w-6 flex-none items-center justify-center overflow-clip p-1.5">
            <Arrow />
          </span>
          {/* framer-1j5bpca */}
          <span className="flex h-6 w-6 flex-none -rotate-45 items-center justify-center overflow-clip p-1.5">
            <Arrow />
          </span>
        </span>
      </span>
      {/* framer-4gp9ql */}
      <span className="absolute bottom-0 start-0 z-[1] h-px w-full overflow-clip bg-[rgba(16,16,16,0.5)] transition-[height] duration-300 ease-out group-hover:h-0.5" />
    </Link>
  );
}

/** svg-1790061921_764 — 14x12 arrow, viewBox 0 0 13.526 11.251, fill #101010. */
function Arrow() {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 13.526 11.251"
      data-flip-rtl
      aria-hidden="true"
      focusable="false"
      className="w-[14px] shrink-0"
    >
      <path
        fill="#101010"
        d="M 13.36 6.032 L 8.298 11.095 C 8.077 11.306 7.727 11.302 7.511 11.086 C 7.294 10.87 7.29 10.52 7.502 10.299 L 11.604 6.197 L 0.587 6.197 C 0.38 6.206 0.185 6.1 0.079 5.923 C -0.026 5.745 -0.026 5.524 0.079 5.346 C 0.185 5.169 0.38 5.063 0.587 5.072 L 11.606 5.072 L 7.503 0.97 C 7.355 0.829 7.295 0.619 7.347 0.421 C 7.398 0.224 7.553 0.069 7.75 0.018 C 7.948 -0.033 8.158 0.026 8.299 0.174 L 13.361 5.236 C 13.466 5.341 13.526 5.485 13.526 5.634 C 13.526 5.783 13.466 5.927 13.361 6.032 Z"
      />
    </svg>
  );
}
