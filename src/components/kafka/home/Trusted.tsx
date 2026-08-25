import type { Dictionary } from "@/i18n/dictionaries/en";
import { LogoTicker } from "./LogoTicker";

/**
 * "TRUSTED BY" strip — white section with small label and logo marquee.
 *
 * Source: kafka.framer.wiki home, section 01-trusted.
 * - Section (.framer-194dae): bg #fff, flex column centered,
 *   padding 80px 36px desktop / 80px 24px tablet+phone.
 * - Inner wrapper (.framer-1070v6c): max-width 1440px, column, gap 60px.
 * - Label preset (rgrid2 h6): Schibsted Grotesk 400 16px, -0.02em,
 *   line-height 120%, color rgba(16,16,16,0.5).
 */
export function Trusted({ t }: { t: Dictionary["home"]["trusted"] }) {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-clip bg-paper px-[36px] py-[80px] max-[1199px]:px-[24px]">
      <div className="relative flex w-full max-w-[1440px] flex-col items-center justify-center gap-[60px]">
        <h6 className="relative whitespace-pre-wrap text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
          {t.eyebrow}
        </h6>
        <LogoTicker />
      </div>
    </section>
  );
}
