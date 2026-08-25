import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * ABOUT — How we work (source section `framer-1ktwpe1`).
 *
 * Source CSS:
 *   section — #fff, column, gap 80px, padding 80px 36px (80px 24px below 1200px).
 *   inner   — max-width 1440px, column, gap 80px.
 *   top     — row, gap 20px; phone: column, gap 60px. The CTA sits bottom-right.
 *   content — row, gap 20px; phone: column, gap 49px (image first).
 *   image   — flex 1, aspect-ratio 0.8567 (610x712).
 *   steps   — flex 1, column, gap 36px; each step is a row (title | body, gap 20px)
 *             with a 1px rgba(16,16,16,0.2) rule between; phone stacks the row.
 *
 * The heading has two DOM variants: desktop/phone keep the manual line break,
 * tablet renders the sentence on one line.
 */

const IMG_SIZES =
  "(min-width: 1200px) max((min(100vw - 72px, 1440px) - 20px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 48px, 1440px) - 20px) / 2, 1px), (max-width: 809.98px) min(100vw - 48px, 1440px)";

export function Process({
  t,
  locale,
}: {
  t: Dictionary["about"]["process"];
  locale: Locale;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 overflow-clip bg-white px-9 py-20 text-[#101010] max-[1199px]:px-6">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-20">
        <div className="flex w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[60px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            {/* desktop + phone copy (manual line break) */}
            <h2 className="w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] min-[810px]:max-[1199px]:hidden max-[809px]:text-[38px]">
              {t.headingLineOne}
              <br />
              {t.headingLineTwo}
            </h2>
            {/* tablet copy */}
            <h2 className="hidden w-full whitespace-pre-wrap break-words text-[42px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] min-[810px]:max-[1199px]:block">
              {t.headingTablet}
            </h2>
          </div>
          <div className="flex flex-[1_0_0px] flex-row items-end justify-end gap-2.5 self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
            <ArrowLink href={`/${locale}/contact`}>{t.cta}</ArrowLink>
          </div>
        </div>

        <div className="flex w-full flex-row items-start justify-center gap-5 max-[809px]:flex-col max-[809px]:gap-[49px]">
          <div className="relative min-w-0 flex-[1_0_0px] overflow-clip max-[809px]:order-0 max-[809px]:w-full max-[809px]:flex-none">
            <div className="relative aspect-[610/712] w-full">
              <Image
                src="/kafka/img/Ju8A5viMRN546D58tj5DGHfN2g.png"
                alt=""
                fill
                sizes={IMG_SIZES}
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="relative z-[1] flex min-w-0 flex-[1_0_0px] flex-col items-center gap-9 max-[809px]:order-1 max-[809px]:w-full max-[809px]:flex-none">
            {t.steps.map((s, i) => (
              <div key={s.title} className="contents">
                {i > 0 && <div className="h-px w-full flex-none bg-[rgba(16,16,16,0.2)]" />}
                <div className="flex w-full flex-row items-start justify-center gap-5 max-[809px]:flex-col">
                  <div className="min-w-0 flex-[1_0_0px] max-[809px]:w-full max-[809px]:flex-none">
                    <h5 className="whitespace-pre-wrap break-words text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                      {s.title}
                    </h5>
                  </div>
                  <div className="min-w-0 flex-[1_0_0px] max-[809px]:w-full max-[809px]:flex-none">
                    <h6 className="whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)]">
                      {s.body}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
