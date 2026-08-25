/**
 * Infinite horizontal logo marquee for the "TRUSTED BY" strip.
 *
 * Source: kafka.framer.wiki home, section 01-trusted (Framer Ticker).
 * - 8 client logo marks extracted as SVG mask shapes (/kafka/logos/logo-N.svg),
 *   tinted #101010 (token-08b5aeaa) via CSS mask + background-color — the source
 *   does the same thing: .framer-RGHBB..framer-rcjwN set
 *   `mask: url('data:image/svg+xml,…') alpha no-repeat center/auto` over
 *   `background-color: var(--token-08b5aeaa…, #101010)`.
 * - `center/auto` on a viewBox-only SVG (intrinsic ratio, no intrinsic size)
 *   resolves to `contain` per CSS Backgrounds §3.9, hence maskSize: contain.
 * - Item boxes are 106px wide with per-logo heights (from .framer-6g7f7p etc.);
 *   each mask SVG keeps its own viewBox ratio (106/29, 107/31, 96/31, 77/39,
 *   115/24, 103/31, 123/31, 134/29) so it letterboxes exactly like the source.
 * - Gap between items: 100px desktop / 80px tablet / 60px phone.
 * - Edge fade via mask gradient on the ticker container (.framer-1vwz2mm).
 * - Loop speed is not recoverable from CSS; smooth 30s linear loop used.
 */

const FADE_MASK =
  "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 22.8448%, rgb(0,0,0) 51.7241%, rgba(0,0,0,0.8) 85.7759%, rgba(0,0,0,0) 100%)";

const LOGOS: { src: string; w: number; h: number }[] = [
  { src: "/kafka/logos/logo-0.svg", w: 106, h: 29 },
  { src: "/kafka/logos/logo-1.svg", w: 106, h: 31 },
  { src: "/kafka/logos/logo-2.svg", w: 106, h: 34 },
  { src: "/kafka/logos/logo-3.svg", w: 106, h: 54 },
  { src: "/kafka/logos/logo-4.svg", w: 106, h: 22 },
  { src: "/kafka/logos/logo-5.svg", w: 106, h: 32 },
  { src: "/kafka/logos/logo-6.svg", w: 106, h: 27 },
  { src: "/kafka/logos/logo-7.svg", w: 106, h: 22 },
];

/* One run of the 8 logos; the track holds two runs and translates by -50%
 * (each run carries the seam gap as padding-right) for a seamless wrap. */
const RUN_CLASS =
  "m-0 flex list-none items-center gap-[100px] p-0 pe-[100px] max-[1199px]:gap-[80px] max-[1199px]:pe-[80px] max-[809px]:gap-[60px] max-[809px]:pe-[60px]";

function LogoRun({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className={RUN_CLASS}>
      {LOGOS.map((logo, i) => (
        <li
          key={logo.src}
          className="ticker-item relative shrink-0 grow-0"
          aria-posinset={hidden ? undefined : i + 1}
          aria-setsize={hidden ? undefined : LOGOS.length}
        >
          <div
            style={{
              width: logo.w,
              height: logo.h,
              backgroundColor: "#101010",
              WebkitMaskImage: `url(${logo.src})`,
              maskImage: `url(${logo.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export function LogoTicker() {
  return (
    <div
      className="relative flex w-full overflow-hidden"
      style={{ WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK }}
    >
      <style>{`@keyframes kafka-logo-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div
        data-marquee
        className="flex w-max shrink-0 animate-[kafka-logo-marquee_30s_linear_infinite] will-change-transform motion-reduce:animate-none"
      >
        <LogoRun />
        <LogoRun hidden />
      </div>
    </div>
  );
}
