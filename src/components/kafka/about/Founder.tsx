import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * ABOUT — Founder (source section `framer-1x8ter7`, "Founder").
 *
 * Source CSS:
 *   section  — #fcfbf7, column, gap 80px, padding 80px 36px (80px 24px below 1200px).
 *   padding  — two stacked max-width 1440px blocks, gap 60px each.
 *   content  — row, items flex-start, gap 20px; phone: column.
 *   text col — flex 1, column, space-between, self stretch;
 *              tablet/phone: gap 80px, height min-content (phone order 1).
 *   metrics  — row, gap 20px, centered; tablet/phone: column.
 *   divider  — 1px rgba(16,16,16,0.2), self-stretch vertical;
 *              tablet/phone: full width, 1px tall.
 *   number   — Schibsted Grotesk 64px, lh 1em, ls -0.01em, #101010.
 *   label    — preset g9rymp (24 / 22 / 20px, lh 120%), text-transform uppercase,
 *              rgba(16,16,16,0.5) — the source copy is mixed case, the CSS uppercases it.
 *   image    — flex 1, aspect-ratio 0.8333 (560x672); phone: full width, order 0.
 */

/* Framer `sizes` for the portrait: half the shell on desktop/tablet, full on phone */
const IMG_SIZES =
  "(min-width: 1200px) max((min(100vw - 72px, 1440px) - 20px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 48px, 1440px) - 20px) / 2, 1px), (max-width: 809.98px) min(100vw - 48px, 1440px)";

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-7">
      <div className="relative z-[3] block h-auto w-auto whitespace-normal text-[64px] font-normal leading-[1em] tracking-[-0.01em] text-[#101010]">
        {value}
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-3">
        <h4 className="h-auto w-auto whitespace-pre-wrap text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)] max-[1199px]:text-[22px] max-[809px]:text-[20px]">
          {label}
        </h4>
      </div>
    </div>
  );
}

export function Founder({ t }: { t: Dictionary["about"]["founder"] }) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 overflow-clip bg-[#fcfbf7] px-9 py-20 text-[#101010] max-[1199px]:px-6">
      {/* Block 1 — eyebrow + heading */}
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[60px]">
        <div className="flex w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[60px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            <h2 className="w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.heading}
            </h2>
          </div>
          {/* empty right-hand spacer (hidden on phone in the source) */}
          <div
            aria-hidden="true"
            className="h-[10px] min-w-0 flex-[1_0_0px] max-[809px]:hidden"
          />
        </div>
      </div>

      {/* Block 2 — copy + metrics beside the portrait */}
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[60px] overflow-clip">
        <div className="flex w-full flex-row items-start justify-start gap-5 max-[809px]:flex-col">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-start justify-between self-stretch overflow-clip min-[810px]:max-[1199px]:h-min min-[810px]:max-[1199px]:justify-start min-[810px]:max-[1199px]:gap-20 min-[810px]:max-[1199px]:self-auto max-[809px]:order-1 max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-center max-[809px]:gap-20 max-[809px]:self-auto">
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <h5 className="w-full whitespace-pre-wrap break-words text-start text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[rgba(16,16,16,0.5)] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                {t.standard.eyebrow}
              </h5>
              <h3 className="w-full whitespace-pre-wrap break-words text-start text-[30px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgb(16,16,16)] max-[1199px]:text-[28px] max-[809px]:text-[26px]">
                {t.standard.paragraphOne}
                <br />
                <br />
                {t.standard.paragraphTwo}
              </h3>
            </div>

            <div className="flex w-full flex-row items-center justify-center gap-5 overflow-clip min-[810px]:max-[1199px]:flex-col max-[809px]:flex-col">
              <div className="min-w-0 flex-[1_0_0px] min-[810px]:max-[1199px]:w-full min-[810px]:max-[1199px]:flex-none max-[809px]:w-full max-[809px]:flex-none">
                <Metric {...t.metrics[0]} />
              </div>
              <div
                aria-hidden="true"
                className="w-px self-stretch overflow-clip bg-[rgba(16,16,16,0.2)] min-[810px]:max-[1199px]:h-px min-[810px]:max-[1199px]:w-full min-[810px]:max-[1199px]:self-auto max-[809px]:h-px max-[809px]:w-full max-[809px]:self-auto"
              />
              <div className="min-w-0 flex-[1_0_0px] min-[810px]:max-[1199px]:w-full min-[810px]:max-[1199px]:flex-none max-[809px]:w-full max-[809px]:flex-none">
                <Metric {...t.metrics[1]} />
              </div>
            </div>
          </div>

          <div className="relative min-w-0 flex-[1_0_0px] overflow-clip max-[809px]:order-0 max-[809px]:w-full max-[809px]:flex-none">
            <div className="relative aspect-[560/672] w-full">
              <Image
                src="/kafka/img/LCTlNhXTsK3xTfEZqhyjY8Z8k.png"
                alt=""
                fill
                sizes={IMG_SIZES}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
