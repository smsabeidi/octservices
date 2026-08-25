import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/kafka/shared/Nav";
import { Footer } from "@/components/kafka/shared/Footer";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Dictionary } from "@/i18n/dictionaries/en";

/*
 * /insights/[slug] — rebuilt from the kafka.framer.wiki extraction
 * (pages/insight-*\/sections/01-main.{html,txt} + shared-css-b9746f6f.css).
 * Framer ships Desktop/Tablet/Phone DOM variants of identical content; they are
 * collapsed here into one DOM with responsive arbitrary variants.
 *
 * Source layout (framer-VBkMY scope):
 * - Main (framer-1oxax5h): #fff, column, centered, gap 0.
 * - Hero (framer-kr8lva): #fff, padding 200px 36px 60px (tablet/phone
 *   160px 24px 24px); Padding (framer-lgsyfc) max-w 1440px; Top (framer-xwf2t1)
 *   row gap 20px, phone column gap 41px; Top Content (framer-bumt66) column
 *   gap 20px, flex 1, max-w 945px, phone full width. All three text blocks are
 *   centre-aligned: date h6 preset rgrid2 (16px/120%, w400, -0.02em, #101010),
 *   h1 preset hwn8r2 (66/56/48px, 110%, w400, -0.02em; phone ls +0.02em),
 *   standfirst h5 preset 1vgyccl (20/19/18px, 130%, w500, -0.02em) at
 *   rgba(16,16,16,0.5).
 * - Image (framer-1wnmz8t): full-bleed, aspect-ratio = the image's own
 *   intrinsic ratio (1440/745 for three articles, 1312/745 for insight-modern),
 *   img absolutely positioned, object-cover.
 * - Content (framer-cyc02i): #fff, column gap 60px, padding 80px 36px
 *   (tablet/phone 80px 24px). Padding (framer-llga57) max-w 800px, align-items
 *   flex-start. Rich text (framer-o1b78): h2 preset rf5nl2 (48/42/38px, 110%,
 *   w400, -0.02em, #101010), p preset wzscdi (20px desktop / 18px tablet+phone,
 *   1.4em, w500, -0.02em, rgba(16,16,16,0.5)), blockquote preset p7zyfh
 *   (Inter 16px italic, 1.8em, ls 0, #999, padding-inline-start 22px plus a 2px
 *   #ddd full-height rule from :before), and — on insight-modern only — one
 *   inline img.framer-image (656x372, aspect-ratio 1312/745, no paragraph
 *   spacing because its preset 5rfsyi declares none). Vertical rhythm comes from
 *   Framer's `margin-top: var(--framer-paragraph-spacing)` on :not(:first-child):
 *   40px before an h2, 20px before a p or blockquote. Trailing 1px divider
 *   (framer-18j7kco) at rgba(16,16,16,0.2).
 * - Other (framer-1iefe2c): #fff, column gap 80px, padding 80px 36px
 *   (tablet/phone 80px 24px); Padding (framer-kgmfx9) max-w 1440px gap 60px;
 *   Top (framer-8ivhjr) row gap 20px, phone column gap 60px. Card grid
 *   (framer-1gdo7df) 3 cols desktop / 2 tablet / 1 phone, gap 20px; card
 *   (framer-24wi89) column gap 24px, image (framer-sparxi) aspect-ratio
 *   0.883227, content (framer-1s1u82a) gap 8px, description (framer-102sa6o)
 *   white-space pre-line and -webkit-line-clamp 2.
 * - "View all" button (framer-19v2dne): row gap 8px, width min-content,
 *   padding-bottom 4px, 1px underline (framer-4gp9ql) at rgba(16,16,16,0.5)
 *   that thickens to 2px on hover, and a 24x24 clipped arrow window
 *   (framer-jkwkkr) holding two 24x24 arrows 8px apart — justify-content
 *   flips flex-end -> flex-start on hover, swapping the rotated arrow for the
 *   straight one. Reproduced here as an equivalent translate so it can tween.
 *
 * All copy comes from dict.insights (src/i18n/dictionaries/en/insights.ts).
 * The arrow sprite inside that 24x24 window is laid out in flow, exactly like
 * the eight other arrow links on the site, so one rule covers all of them: at
 * rest the strip is pushed off-window by `-translate-x-8`, and because a block
 * that overflows an RTL container overflows to the *left*, Arabic needs the
 * opposite sign — hence `rtl:translate-x-8`. The hover state resolves to
 * translate 0 in both directions. The arrows carry data-flip-rtl and mirror.
 */

type Params = { params: Promise<{ locale: string; slug: string }> };

type Article = Dictionary["insights"]["articles"][number];

/* Preset rgrid2 — 16px/120%, w400, -0.02em. */
const H6 = "text-[16px] font-normal leading-[1.2] tracking-[-0.02em]";
/* Preset 1vgyccl — 20/19/18px, 130%, w500, -0.02em. */
const H5 =
  "text-[20px] font-medium leading-[1.3] tracking-[-0.02em] max-[1199px]:text-[19px] max-[809px]:text-[18px]";
/* Preset rf5nl2 — 48/42/38px, 110%, w400, -0.02em, #101010. */
const H2 =
  "text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-ink max-[1199px]:text-[42px] max-[809px]:text-[38px]";
/* Preset wzscdi — 20px desktop / 18px tablet+phone, 1.4em, w500, rgba(16,16,16,0.5). */
const BODY =
  "text-[20px] font-medium leading-[1.4] tracking-[-0.02em] text-[rgba(16,16,16,0.5)] max-[1199px]:text-[18px]";

function getArticle(articles: Article[], slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/**
 * Related cards under "Explore our latest insights": every other article,
 * in canonical order — matches each source page's related list exactly.
 */
function getRelatedArticles(articles: Article[], slug: string): Article[] {
  return articles.filter((a) => a.slug !== slug);
}

/**
 * The [locale] layout enumerates the locales, so Next runs this once per set of
 * params the parent produced — i.e. once per language — and each run returns
 * the full param shape for this route, locale included. Slugs are URL
 * identifiers and are identical in every language, but they are still read
 * from that locale's own dictionary so the two can never drift apart.
 */
export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const dict = await getDictionary(isLocale(locale) ? locale : defaultLocale);
  return dict.insights.articles.map((article) => ({ locale, slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);
  const article = getArticle(dict.insights.articles, slug);
  if (!article) return { title: dict.insights.article.metaTitleFallback };
  return {
    title: article.meta.title,
    description: article.meta.description,
    openGraph: {
      type: "website",
      title: article.meta.title,
      description: article.meta.description,
      url: `https://kafka.framer.wiki/insights/${article.slug}`,
      images: [{ url: article.image.src }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
      images: [article.image.src],
    },
  };
}

/** Source arrow glyph (svgs/svg-03-365e214b.svg), 14x12 at #101010. */
function Arrow() {
  return (
    <svg
      viewBox="0 0 13.526 11.251"
      aria-hidden="true"
      data-flip-rtl
      className="h-[12px] w-[14px] shrink-0"
    >
      <path
        d="M 13.36 6.032 L 8.298 11.095 C 8.077 11.306 7.727 11.302 7.511 11.086 C 7.294 10.87 7.29 10.52 7.502 10.299 L 11.604 6.197 L 0.587 6.197 C 0.38 6.206 0.185 6.1 0.079 5.923 C -0.026 5.745 -0.026 5.524 0.079 5.346 C 0.185 5.169 0.38 5.063 0.587 5.072 L 11.606 5.072 L 7.503 0.97 C 7.355 0.829 7.295 0.619 7.347 0.421 C 7.398 0.224 7.553 0.069 7.75 0.018 C 7.948 -0.033 8.158 0.026 8.299 0.174 L 13.361 5.236 C 13.466 5.341 13.526 5.485 13.526 5.634 C 13.526 5.783 13.466 5.927 13.361 6.032 Z"
        fill="#101010"
      />
    </svg>
  );
}

/** "View all" link — underline thickens and the arrow swaps on hover. */
function ViewAllButton({ locale, label }: { locale: string; label: string }) {
  return (
    <Link
      href={`/${locale}/insights`}
      className="group relative flex max-w-full cursor-pointer flex-row items-center justify-center gap-2 overflow-clip pb-1 no-underline"
    >
      <div className={`${H5} whitespace-pre-wrap text-ink`}>{label}</div>
      <div className="relative h-6 w-6 overflow-clip">
        <div className="flex h-6 w-[56px] -translate-x-8 rtl:translate-x-8 flex-row items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-0">
          <div className="flex h-6 w-6 items-center justify-center p-1.5">
            <Arrow />
          </div>
          <div className="flex h-6 w-6 -rotate-45 items-center justify-center p-1.5">
            <Arrow />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 start-0 z-[1] h-px w-full bg-[rgba(16,16,16,0.5)] transition-all duration-300 group-hover:h-0.5" />
    </Link>
  );
}

export default async function InsightPage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.insights;

  const article = getArticle(t.articles, slug);
  if (!article) notFound();

  const related = getRelatedArticles(t.articles, slug);

  return (
    <>
      <Nav t={dict.chrome} locale={locale} />
      <main className="relative flex w-full flex-col items-center justify-center bg-paper text-ink">
        {/* Hero — framer-kr8lva */}
        <section className="relative flex w-full flex-col items-center justify-center overflow-clip bg-paper px-9 pb-[60px] pt-[200px] max-[1199px]:px-6 max-[1199px]:pb-6 max-[1199px]:pt-40">
          <div className="relative flex w-full max-w-[1440px] flex-col items-center justify-center">
            <div className="relative flex w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[41px]">
              <div className="relative flex w-px max-w-[945px] flex-[1_0_0px] flex-col items-center justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
                <h6 className={`${H6} w-full text-center text-ink`}>
                  <time dateTime={article.date.iso}>{article.date.full}</time>
                </h6>
                <h1 className="w-full text-center text-[66px] font-normal leading-[1.1] tracking-[-0.02em] text-ink max-[1199px]:text-[56px] max-[809px]:text-[48px] max-[809px]:tracking-[0.02em]">
                  {article.title}
                </h1>
                <h5 className={`${H5} w-full text-center text-[rgba(16,16,16,0.5)]`}>
                  {article.description}
                </h5>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image — framer-1wnmz8t, intrinsic aspect ratio */}
        <section
          className="relative w-full overflow-clip"
          style={{ aspectRatio: `${article.image.width} / ${article.image.height}` }}
        >
          <Image
            src={article.image.src}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </section>

        {/* Body — framer-cyc02i */}
        <section className="relative flex w-full flex-col items-center justify-center gap-[60px] overflow-clip bg-paper px-9 py-20 max-[1199px]:px-6">
          <div className="relative flex w-full max-w-[800px] flex-col items-start justify-center gap-5 max-[809px]:gap-[60px]">
            <article className="w-full">
              {article.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className={`${H2} mt-10 first:mt-0`}>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    /* Preset p7zyfh: padding-inline-start 22px + a 2px #ddd rule
                       (border-radius 1px, full height) drawn by :before. */
                    <blockquote
                      key={i}
                      className="relative mt-5 ps-[22px] first:mt-0"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute start-0 top-0 block h-full w-0.5 rounded-[1px] bg-[#ddd]"
                      />
                      <p
                        className="text-[16px] font-normal italic leading-[1.8] tracking-[0em] text-[#999]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {block.text}
                      </p>
                    </blockquote>
                  );
                }
                if (block.type === "image") {
                  /* img.framer-text.framer-image — max-width 100%, height auto,
                     display block. Its preset (5rfsyi) defines no
                     --framer-paragraph-spacing, so margin-top resolves to 0. */
                  return (
                    <Image
                      key={i}
                      src={block.src}
                      alt=""
                      width={block.width}
                      height={block.height}
                      sizes="(max-width: 809px) calc(100vw - 48px), (max-width: 1199px) calc(100vw - 48px), 656px"
                      className="block h-auto max-w-full"
                      style={{ aspectRatio: block.ratio }}
                    />
                  );
                }
                return (
                  <p key={i} className={`${BODY} mt-5 first:mt-0`}>
                    {block.text}
                  </p>
                );
              })}
            </article>
          </div>
          {/* framer-18j7kco */}
          <div className="relative h-px w-full overflow-clip bg-[rgba(16,16,16,0.2)]" />
        </section>

        {/* Related — framer-1iefe2c */}
        <section className="relative flex w-full flex-col items-center justify-center gap-20 overflow-clip bg-paper px-9 py-20 max-[1199px]:px-6">
          <div className="relative flex w-full max-w-[1440px] flex-col items-center justify-center gap-[60px]">
            <div className="relative flex w-full flex-row items-center justify-center gap-5 max-[809px]:flex-col max-[809px]:gap-[60px]">
              <div className="relative flex w-px flex-[1_0_0px] flex-col items-center justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
                <h6 className={`${H6} w-full text-[rgba(16,16,16,0.5)]`}>
                  {t.article.related.eyebrow}
                </h6>
                <h2 className={`${H2} w-full`}>{t.article.related.heading}</h2>
              </div>
              {/* framer-1y4dhyc — phone: align-self unset, justify-content flex-start */}
              <div className="relative flex w-px flex-[1_0_0px] flex-row items-end justify-end gap-[10px] self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
                <ViewAllButton locale={locale} label={t.article.related.viewAll} />
              </div>
            </div>

            <div className="relative grid w-full grid-cols-3 gap-5 max-[1199px]:grid-cols-2 max-[809px]:grid-cols-1">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/insights/${post.slug}`}
                  className="relative flex w-full flex-row flex-wrap items-center justify-start gap-[30px] self-start no-underline"
                >
                  <div className="w-px flex-[1_0_0px]">
                    <div className="relative flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-clip">
                      <div className="relative flex w-full flex-row items-center justify-center gap-[10px] overflow-hidden">
                        <div className="relative w-px flex-[1_0_0px] overflow-clip aspect-[0.883227]">
                          <Image
                            src={post.image.src}
                            alt=""
                            fill
                            sizes="(min-width: 1200px) 33vw, (min-width: 810px) 50vw, 100vw"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="relative flex w-full flex-col items-center justify-center gap-2">
                        <h5 className={`${H5} w-full text-start text-ink`}>{post.title}</h5>
                        {/* framer-102sa6o — -webkit-line-clamp: 2 */}
                        <h5
                          className={`${H5} line-clamp-2 w-full whitespace-pre-line text-start text-[rgba(16,16,16,0.5)]`}
                        >
                          {post.description}
                        </h5>
                        <h6 className={`${H6} w-full text-start text-[rgba(16,16,16,0.8)]`}>
                          {post.date.relatedCard}
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}
