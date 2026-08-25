import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * ABOUT — Hero (source section `framer-p11fvt`, "Hero").
 *
 * Source CSS:
 *   section — #fff, column, centered, padding 200px 36px 36px
 *             (160px 24px 24px below 1200px).
 *   inner   — max-width 1440px, width 100%.
 *   top     — row, gap 20px, items centered; phone: column, gap 41px.
 *   left    — flex 1, column, gap 20px.
 *   right   — flex 1, row, justify/align flex-end, self stretch;
 *             phone: full width, justify flex-start, self auto.
 *   h6      — preset rgrid2 (16px / 120% / -0.02em), #101010.
 *   h1      — preset hwn8r2 (66 / 56 / 48px, lh 110%, -0.02em).
 *   p       — no preset, so the Framer engine default applies: Inter, 16px,
 *             lh 1.2em, letter-spacing 0, colour #000; max-width 389px.
 */
export function Hero({ t }: { t: Dictionary["about"]["hero"] }) {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-clip bg-white px-9 pb-9 pt-[200px] text-[#101010] max-[1199px]:px-6 max-[1199px]:pb-6 max-[1199px]:pt-[160px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center">
        <div className="flex w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[41px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[#101010]">
              {t.eyebrow}
            </h6>
            {/* NB: the phone step of preset hwn8r2 flips letter-spacing to +0.02em */}
            <h1 className="w-full whitespace-pre-wrap break-words text-[66px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[56px] max-[809px]:text-[48px] max-[809px]:tracking-[0.02em]">
              {t.heading}
            </h1>
          </div>
          <div className="flex flex-[1_0_0px] flex-row items-end justify-end gap-2.5 self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
            <p className="min-w-0 max-w-[389px] flex-[1_0_0px] whitespace-pre-wrap break-words font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[1.2em] tracking-normal text-black">
              {t.lead}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
