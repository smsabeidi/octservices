import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * ABOUT — Services (source section `framer-1wh4ri0`, "Services").
 *
 * Same Framer component as the home services list (`m5Bdm`), but this instance
 * sits on #fff rather than #fcfbf7.
 *
 * Source CSS:
 *   section — #fff, column, gap 80px, padding 80px 36px (80px 24px below 1200px).
 *   inner   — max-width 1440px, column, gap 60px.
 *   top     — row, gap 20px; phone: column, gap 60px.
 *   list    — column, gap 36px (48px tablet), 1px rgba(16,16,16,0.2) rule per row.
 *   row     — image column + content column, gap 20px;
 *             desktop: the picture fills half the image column (a 2px flex spacer
 *             takes the rest); tablet: fills it; phone: stacked, gap 32px.
 *   content — number + (title, body), gap 60px (32px tablet, 16px phone).
 */

/* One image per service, in the same order as `about.services.items`. */
const SERVICE_IMAGES = [
  "/kafka/img/Unj4zrUK7oJ6Ma2mUvFNpF17P1U.png",
  "/kafka/img/9TGdyV5TPmEmHtmnA4gxULCrIL0.png",
  "/kafka/img/5c2WmHLzjnU1fC8Mp9z1mGaVgjE.png",
  "/kafka/img/5c2WmHLzjnU1fC8Mp9z1mGaVgjE.png",
] as const;

/* Exact `sizes` from the source markup */
const IMG_SIZES =
  "(min-width: 1200px) max(max((min(100vw - 72px, 1440px) - 20px) / 2, 1px) / 2, 1px), (max-width: 809.98px) max(min(100vw - 48px, 1440px), 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 48px, 1440px) - 20px) / 2, 1px)";

export function Services({
  t,
  locale,
}: {
  t: Dictionary["about"]["services"];
  locale: Locale;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 overflow-clip bg-white px-9 py-20 text-[#101010] max-[1199px]:px-6">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[60px]">
        <div className="flex w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[60px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            <h2 className="w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {/* the source copy separates the clauses with two U+2028 line separators */}
              {t.heading}
            </h2>
          </div>
          <div className="flex flex-[1_0_0px] flex-row items-end justify-end gap-2.5 self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
            <ArrowLink href={`/${locale}/contact`}>{t.cta}</ArrowLink>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-9 min-[810px]:max-[1199px]:gap-12">
          {t.items.map((s, i) => (
            <div key={s.number} className="contents">
              <div className="h-px w-full flex-none bg-[rgba(16,16,16,0.2)]" />
              <article className="flex w-full flex-row items-start justify-center gap-5 max-[809px]:flex-col max-[809px]:gap-8">
                <div className="flex min-w-0 flex-[1_0_0px] flex-row items-center overflow-clip max-[809px]:w-full max-[809px]:flex-none">
                  <div className="relative h-[280px] min-w-0 flex-[1_0_0px] overflow-clip">
                    <Image
                      src={SERVICE_IMAGES[i]}
                      alt=""
                      fill
                      sizes={IMG_SIZES}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="hidden h-0.5 min-w-0 flex-[1_0_0px] min-[1200px]:block" aria-hidden="true" />
                </div>
                <div className="flex min-w-0 flex-[1_0_0px] flex-row items-start gap-[60px] min-[810px]:max-[1199px]:gap-8 max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-4">
                  <h4 className="whitespace-pre-wrap text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[22px] max-[809px]:text-[20px]">
                    {s.number}
                  </h4>
                  <div className="flex min-w-0 flex-[1_0_0px] flex-col items-start gap-2.5">
                    {/* preset g9rymp carries text-transform: uppercase */}
                    <h4 className="w-full whitespace-pre-wrap break-words text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[22px] max-[809px]:text-[20px]">
                      {s.title}
                    </h4>
                    <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)]">
                      {s.body}
                    </h6>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
