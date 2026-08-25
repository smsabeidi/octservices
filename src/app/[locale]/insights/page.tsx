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
 * /insights — rebuilt verbatim from the kafka.framer.wiki extraction
 * (pages/insights/sections/01-main.{html,txt} + css/shared-css-416a33e1.css).
 *
 * Source layout, page scope .framer-WshT6:
 * - .framer-zfkeui (Main) — bg #fff, column, place-content center, gap 0,
 *   width 100%, padding 0, overflow clip.
 * - .framer-9byt5s (Hero) — bg #fff, column, centered, width 100%,
 *   padding 200px 36px 36px; <=1199px and <=809px: 160px 24px 24px.
 *   - .framer-km0sgg (Padding) — column, centered, width 100%, max-width 1440px.
 *   - .framer-18tq3wp (Top) — row, gap 20px, centered, overflow clip;
 *     <=809px: column, gap 41px.
 *   - .framer-1oeo7o6 (Top Content) — column, flex 1 0 0, width 1px,
 *     align-items flex-start, gap 20px; <=809px: flex none, width 100%.
 *   - .framer-us27cn > h6 preset rgrid2 — Schibsted Grotesk 16px / 120%,
 *     weight 400, -0.02em, #101010 (identical at all three breakpoints).
 *   - .framer-1s63d5l (width 100%, max-width 1000px) > h1 preset hwn8r2 —
 *     66px desktop / 56px tablet / 48px phone, 110%, weight 400,
 *     letter-spacing -0.02em, phone 0.02em, #101010.
 * - .framer-1iojdg2 (Image) — width 100%, height auto,
 *   aspect-ratio 1.9328859060402686 (= 1440/745), image object-fit cover.
 * - .framer-fdbn65 (Content) — bg #fff, row, justify-content center,
 *   align-items flex-start, gap 20px, padding 80px 36px;
 *   <=1199px 80px 24px; <=809px column, 80px 24px.
 *   - .framer-wz1u2o (Padding) — column, flex 1 0 0, width 1px,
 *     max-width 1440px, align-items flex-start, gap 40px;
 *     <=809px flex none, width 100%, gap 60px.
 *   - .framer-10oov2n (width 100%, max-width 1000px) > h2 preset rf5nl2 —
 *     48 / 42 / 38px, 110%, weight 400, -0.02em, #101010.
 *   - .framer-122btif — grid, repeat(3, minmax(50px, 1fr)) desktop /
 *     repeat(2, …) tablet / repeat(1, …) phone, grid-auto-rows minmax(0, 1fr),
 *     justify-content center, gap 20px.
 *   - .framer-kkra6r (card link) — flex wrap, justify-content flex-start,
 *     align-items center, place-self start, gap 30px, width 100%,
 *     text-decoration none.
 *   - .framer-rs7zpw-container — flex 1 0 0, width 1px, height auto, relative.
 *
 * Card component, scope .framer-UhG53 (text presets scoped .framer-dhG4e /
 * .framer-NPS7x):
 * - .framer-24wi89 — cursor pointer, column, place-content center,
 *   align-items center, gap 24px, overflow clip (inline width 100%).
 * - .framer-rqju0a (Image) — row, centered, gap 10px, width 100%,
 *   overflow hidden.
 * - .framer-sparxi — aspect-ratio 0.883227, flex 1 0 0, width 1px,
 *   overflow clip; <img> object-fit cover, object-position center.
 * - .framer-1s1u82a (Content) — column, centered, gap 8px, width 100%.
 * - .framer-1fe03lj > h5 preset 1vgyccl — 20 / 19 / 18px, 130%, weight 500,
 *   -0.02em, #101010, text-align left.
 * - .framer-102sa6o > h5 same preset, -webkit-line-clamp 2,
 *   white-space pre-line, colour rgba(16, 16, 16, 0.5).
 * - .framer-xvo3s6 > h6 preset rgrid2 — 16px / 120%, weight 400, -0.02em,
 *   colour rgba(16, 16, 16, 0.8), text-align left.
 *
 * No hover or variant rules exist for the card in the source CSS — the only
 * pointer affordance is cursor: pointer. Entrance animations are intentionally
 * omitted (added by a later shared pass).
 *
 * All copy comes from dict.insights (src/i18n/dictionaries/en/insights.ts);
 * the source text-align: left rules become text-start so the cards mirror in
 * Arabic.
 */

const HERO_IMAGE = "/kafka/img/Qjk4bSH5NQP9U8oyL1XDb1o228.png";

type Params = { params: Promise<{ locale: string }> };

type Article = Dictionary["insights"]["articles"][number];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);
  const { title, description } = dict.insights.index.meta;
  return { title, description };
}

/* .framer-UhG53.framer-24wi89 — the "Post Card" component, one DOM for all
   three breakpoints (the source ships identical Desktop/Tablet/Phone copies). */
function PostCard({ post, locale }: { post: Article; locale: string }) {
  return (
    <Link
      href={`/${locale}/insights/${post.slug}`}
      className="relative flex h-min w-full flex-row flex-wrap content-center items-center justify-start gap-[30px] self-start justify-self-start p-0 no-underline"
    >
      {/* .framer-rs7zpw-container */}
      <div className="relative h-auto w-px flex-[1_0_0px]">
        {/* .framer-24wi89 */}
        <div className="relative flex h-min w-full cursor-pointer flex-col content-center items-center justify-center gap-6 overflow-clip p-0">
          {/* .framer-rqju0a */}
          <div className="relative flex h-min w-full flex-row items-center justify-center gap-[10px] overflow-hidden p-0">
            {/* .framer-sparxi */}
            <div className="relative aspect-[0.883227] w-px flex-[1_0_0px] overflow-clip">
              <Image
                src={post.image.src}
                alt=""
                fill
                sizes="(min-width: 1200px) 33vw, (min-width: 810px) 50vw, 100vw"
                className="block h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* .framer-1s1u82a */}
          <div className="relative flex h-min w-full flex-col content-center items-center justify-center gap-2 p-0">
            {/* .framer-1fe03lj > h5 preset 1vgyccl */}
            <h5 className="relative w-full text-start text-[20px] leading-[1.3] font-medium tracking-[-0.02em] whitespace-pre-wrap break-words text-ink max-[1199px]:text-[19px] max-[809px]:text-[18px]">
              {post.title}
            </h5>
            {/* .framer-102sa6o > h5 preset 1vgyccl, rgba(16,16,16,0.5), clamp 2 */}
            <h5 className="relative line-clamp-2 h-auto w-full overflow-clip text-start text-[20px] leading-[1.3] font-medium tracking-[-0.02em] break-words whitespace-pre-line text-[rgba(16,16,16,0.5)] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
              {post.description}
            </h5>
            {/* .framer-xvo3s6 > h6 preset rgrid2, rgba(16,16,16,0.8) */}
            <h6 className="relative w-full text-start text-[16px] leading-[1.2] font-normal tracking-[-0.02em] whitespace-pre-wrap break-words text-[rgba(16,16,16,0.8)]">
              {post.date.indexCard}
            </h6>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function InsightsPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.insights;

  return (
    <>
      <Nav t={dict.chrome} locale={locale} />

      {/* .framer-zfkeui — Main */}
      <main className="relative flex h-min w-full flex-col content-center items-center justify-center gap-0 overflow-clip bg-paper p-0 text-ink">
        {/* .framer-9byt5s — Hero */}
        <section className="relative flex h-min w-full flex-col content-center items-center justify-center gap-0 overflow-clip bg-paper px-9 pt-[200px] pb-9 max-[1199px]:px-6 max-[1199px]:pt-[160px] max-[1199px]:pb-6">
          {/* .framer-km0sgg — Padding */}
          <div className="relative flex h-min w-full max-w-[1440px] flex-col content-center items-center justify-center gap-0 p-0">
            {/* .framer-18tq3wp — Top */}
            <div className="relative flex h-min w-full flex-row content-center items-center justify-center gap-5 overflow-clip p-0 max-[809px]:flex-col max-[809px]:gap-[41px]">
              {/* .framer-1oeo7o6 — Top Content */}
              <div className="relative flex h-min w-px flex-[1_0_0px] flex-col content-start items-start justify-center gap-5 p-0 max-[809px]:w-full max-[809px]:flex-none">
                {/* .framer-us27cn > h6 preset rgrid2 */}
                <h6 className="relative w-full text-[16px] leading-[1.2] font-normal tracking-[-0.02em] whitespace-pre-wrap break-words text-ink">
                  {t.index.hero.eyebrow}
                </h6>
                {/* .framer-1s63d5l > h1 preset hwn8r2 */}
                <div className="relative h-auto w-full max-w-[1000px] whitespace-pre-wrap break-words">
                  <h1 className="text-[66px] leading-[1.1] font-normal tracking-[-0.02em] text-ink max-[1199px]:text-[56px] max-[809px]:text-[48px] max-[809px]:tracking-[0.02em]">
                    {t.index.hero.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* .framer-1iojdg2 — Image (inline aspect-ratio 1.9328859060402686 = 1440/745;
            flex column, gap 64px desktop+phone / 48px tablet — inert here because the
            single child is the absolutely-positioned background-image wrapper) */}
        <section className="relative flex aspect-[1440/745] h-auto w-full flex-col content-center items-center justify-center gap-16 overflow-clip p-0 min-[810px]:max-[1199px]:gap-12">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            sizes="100vw"
            priority
            className="block h-full w-full object-cover object-center"
          />
        </section>

        {/* .framer-fdbn65 — Content */}
        <section className="relative flex h-min w-full flex-row content-start items-start justify-center gap-5 overflow-clip bg-paper px-9 py-20 max-[1199px]:px-6 max-[809px]:flex-col">
          {/* .framer-wz1u2o — Padding */}
          <div className="relative flex h-min w-px max-w-[1440px] flex-[1_0_0px] flex-col content-start items-start justify-center gap-10 p-0 max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-[60px]">
            {/* .framer-10oov2n > h2 preset rf5nl2 */}
            <div className="relative h-auto w-full max-w-[1000px] whitespace-pre-wrap break-words">
              <h2 className="text-[48px] leading-[1.1] font-normal tracking-[-0.02em] text-ink max-[1199px]:text-[42px] max-[809px]:text-[38px]">
                {t.index.latest.heading}
              </h2>
            </div>

            {/* .framer-122btif */}
            <div className="relative grid h-min w-full justify-center gap-5 p-0 [grid-auto-rows:minmax(0,1fr)] [grid-template-columns:repeat(3,minmax(50px,1fr))] max-[1199px]:[grid-template-columns:repeat(2,minmax(50px,1fr))] max-[809px]:[grid-template-columns:repeat(1,minmax(50px,1fr))]">
              {t.articles.map((post) => (
                <PostCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}
