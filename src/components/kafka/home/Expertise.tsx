import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * "LEGAL EXPERTISE" stats section — white section with heading row,
 * stats column (4 numbers with dividers) and a portrait image.
 *
 * Source: kafka.framer.wiki home, section 01-main--04-legal-expertise.
 * - Section (.framer-beeqsk): bg #fff, flex column centered, gap 80px,
 *   padding 80px 36px desktop / 80px 24px tablet+phone, overflow clip.
 * - Wrapper (.framer-1sg37cd): max-width 1440px, column, gap 60px.
 * - Top (.framer-1g5y2h3): row, gap 20px; phone: column, gap 60px.
 *   - Top Content (.framer-19sz60): flex 1, column, gap 20px; phone: full width.
 *     - Eyebrow (rgrid2 h6): 16px/1.2, -0.02em, rgba(16,16,16,0.5).
 *     - Heading (rf5nl2 h2): 48px desktop / 42px tablet / 38px phone,
 *       line-height 110%, -0.02em, #101010.
 *   - Right (.framer-6cbcxe): flex 1, row, bottom/right aligned, self-stretch;
 *     phone: full width, left aligned. Desktop-only 2px spacer
 *     (.framer-1esh7a4, hidden on tablet+phone) pushes text to right half.
 *     Text right-aligned desktop/tablet, left-aligned phone.
 * - Content (.framer-gm0i19): row, gap 48px, items start; phone: column,
 *   gap 49px, image (order 0) above stats (order 1).
 *   - Stats (.framer-1ntntu4): z-1, flex 1, max-width 464px, column, gap 36px;
 *     phone: full width. Divider rows (.framer-12d2dtw etc.): 1px, #10101033.
 *   - Stat item (.framer-EGQeN.framer-1vf4whv): column, gap 28px.
 *     - Number: Schibsted Grotesk 400 64px, line-height 1em, -0.01em, #101010
 *       (source renders it via a matrix text animation component; entrance
 *       animation skipped per shared pass).
 *     - Text (.framer-w4p8xq): column, gap 12px.
 *       - Label (g9rymp h4): 24px desktop / 22px tablet / 20px phone,
 *         line-height 120%, -0.02em, uppercase, rgba(16,16,16,0.5).
 *       - Copy (rgrid2 h6): 16px/1.2, -0.02em, rgba(16,16,16,0.8).
 *   - Image (.framer-1bg6smm): flex 1, aspect-ratio 646/754, object cover;
 *     phone: full width, first.
 */

type StatCopy = Dictionary["home"]["expertise"]["stats"][number];

function Stat({ value, label, copy }: StatCopy) {
  return (
    <div className="relative flex w-full flex-col items-start justify-center gap-[28px]">
      <div className="relative z-[3] w-full overflow-hidden">
        <div className="text-[64px] font-normal leading-[1em] tracking-[-0.01em] text-[rgb(16,16,16)]">
          {value}
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start justify-center gap-[12px]">
        <h4 className="relative whitespace-pre-wrap text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)] max-[1199px]:text-[22px] max-[809px]:text-[20px]">
          {label}
        </h4>
        <h6 className="relative w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)]">
          {copy}
        </h6>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="relative h-px w-full flex-none overflow-clip bg-[#10101033]" />;
}

export function Expertise({ t }: { t: Dictionary["home"]["expertise"] }) {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-[80px] overflow-clip bg-paper px-[36px] py-[80px] max-[1199px]:px-[24px]">
      <div className="relative flex w-full max-w-[1440px] flex-col items-center justify-center gap-[60px]">
        {/* Top */}
        <div className="relative flex w-full flex-row items-center justify-center gap-[20px] max-[809px]:flex-col max-[809px]:gap-[60px]">
          {/* Top Content */}
          <div className="relative flex w-px flex-[1_0_0] flex-col items-center justify-center gap-[20px] max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="relative w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            <h2 className="relative w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.heading}
            </h2>
          </div>
          {/* Right content */}
          <div className="relative flex w-px flex-[1_0_0] flex-row items-end justify-end self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
            {/* desktop-only spacer (hidden tablet + phone in source) */}
            <div className="relative h-[2px] w-px flex-[1_0_0] overflow-clip max-[1199px]:hidden" />
            <h6 className="relative w-px flex-[1_0_0] whitespace-pre-wrap break-words text-end text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[#101010] max-[809px]:text-start">
              {t.summary}
            </h6>
          </div>
        </div>
        {/* Content: stats + image */}
        <div className="relative flex w-full flex-row items-start justify-center gap-[48px] max-[809px]:flex-col max-[809px]:gap-[49px]">
          {/* Stats column */}
          <div className="relative z-[1] flex w-px max-w-[464px] flex-[1_0_0] flex-col items-center justify-center gap-[36px] max-[809px]:order-1 max-[809px]:w-full max-[809px]:flex-none">
            <Stat {...t.stats[0]} />
            <Divider />
            <Stat {...t.stats[1]} />
            <Divider />
            <Stat {...t.stats[2]} />
            <Divider />
            <Stat {...t.stats[3]} />
          </div>
          {/* Image */}
          <div className="relative aspect-[646/754] w-px flex-[1_0_0] overflow-clip max-[809px]:w-full max-[809px]:flex-none">
            <Image
              src="/kafka/img/M5oBh2KSjcSMsrrhFyIradzlA.png"
              alt=""
              fill
              sizes="(min-width: 1200px) max((min(100vw - 72px, 1440px) - 48px) / 2, 1px), (max-width: 809.98px) min(100vw - 48px, 1440px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 48px, 1440px) - 48px) / 2, 1px)"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
