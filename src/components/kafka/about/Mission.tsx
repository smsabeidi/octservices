import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * ABOUT — Mission (source section `framer-1rfehh8`, "Mission").
 *
 * Source CSS:
 *   section — #fff, row, items flex-start, gap 20px, padding 80px 36px
 *             (80px 24px below 1200px); phone: column.
 *   inner   — flex 1, row, gap 20px, max-width 1440px;
 *             phone: column, gap 60px, width 100%.
 *   right   — row, gap 110px (82px tablet, 64px phone).
 *   h6      — preset rgrid2, rgba(16,16,16,0.5).
 *   h2      — preset rf5nl2 (48 / 42 / 38px, lh 110%); the trailing clause is
 *             wrapped in a span tinted rgba(16,16,16,0.5).
 */
export function Mission({ t }: { t: Dictionary["about"]["mission"] }) {
  return (
    <section className="flex w-full flex-row items-start justify-center gap-5 overflow-clip bg-white px-9 py-20 text-[#101010] max-[1199px]:px-6 max-[809px]:flex-col">
      <div className="flex min-w-0 max-w-[1440px] flex-[1_0_0px] flex-row items-start justify-center gap-5 max-[809px]:w-full max-[809px]:flex-none max-[809px]:flex-col max-[809px]:gap-[60px]">
        <div className="min-w-0 flex-[1_0_0px] max-[809px]:w-full max-[809px]:flex-none">
          <h6 className="whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
            {t.eyebrow}
          </h6>
        </div>
        <div className="flex min-w-0 flex-[1_0_0px] flex-row items-center justify-start gap-[110px] min-[810px]:max-[1199px]:gap-[82px] max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-16">
          <div className="min-w-0 flex-[1_0_0px] max-[809px]:w-full max-[809px]:flex-none">
            <h2 className="whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.headingLead}
              <span className="text-[rgba(16,16,16,0.5)]">
                {t.headingRest}
              </span>
            </h2>
            {/* Ownership disclosure. Set to the section's h6 preset so it reads
                as a footnote to the mission statement, not a second heading. */}
            <p className="mt-8 whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.ownership}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
