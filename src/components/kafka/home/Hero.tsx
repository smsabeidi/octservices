import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Home Hero — cloned from kafka.framer.wiki (section "Hero").
 * Dark full-viewport section: background video + bottom gradient overlay,
 * right-aligned intro paragraph + "Our services" arrow link mid-section,
 * enormous display heading bottom-left.
 *
 * Source geometry (shared-css-6ef7f0ce.css):
 * - section: 100vh, padding 123px 36px 36px (tablet/phone: 123px 24px 24px), flex col center
 * - inner "Padding": max-w 1440px, flex col, justify space-between
 * - h1 preset: 84px / 110% / -0.02em (tablet 78px; phone 48px, +0.02em), weight 400
 * - h5 preset: 20px / 130% / -0.02em, weight 500 (tablet 19px, phone 18px)
 * - gradient: linear-gradient(180deg, #10101000 0%, #101010cc 100%), z-2 (video z-1, text z-4)
 */

function ArrowGlyph() {
  // Inline SVG symbol #svg143165498_767 from the source markup (14x12 render size).
  return (
    <svg
      viewBox="0 0 13.526 11.251"
      overflow="visible"
      aria-hidden="true"
      data-flip-rtl
      className="h-[12px] w-[14px]"
    >
      <path
        d="M 13.36 6.032 L 8.298 11.095 C 8.077 11.306 7.727 11.302 7.511 11.086 C 7.294 10.87 7.29 10.52 7.502 10.299 L 11.604 6.197 L 0.587 6.197 C 0.38 6.206 0.185 6.1 0.079 5.923 C -0.026 5.745 -0.026 5.524 0.079 5.346 C 0.185 5.169 0.38 5.063 0.587 5.072 L 11.606 5.072 L 7.503 0.97 C 7.355 0.829 7.295 0.619 7.347 0.421 C 7.398 0.224 7.553 0.069 7.75 0.018 C 7.948 -0.033 8.158 0.026 8.299 0.174 L 13.361 5.236 C 13.466 5.341 13.526 5.485 13.526 5.634 C 13.526 5.783 13.466 5.927 13.361 6.032 Z"
        fill="rgb(255, 255, 255)"
      />
    </svg>
  );
}

export function Hero({ t }: { t: Dictionary["home"]["hero"] }) {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-clip px-9 pt-[123px] pb-9 max-[1199px]:px-6 max-[1199px]:pb-6">
      {/* Padding container: fills the section, distributes rows top / middle / bottom */}
      <div className="relative flex h-px w-full max-w-[1440px] flex-[1_0_0px] flex-col items-center justify-between">
        {/* 2px top spacer (framer-ytd6mu) */}
        <div aria-hidden className="relative z-[4] h-[2px] w-full overflow-clip" />

        {/* Text row: left spacer (desktop only) pushes the intro to the right half */}
        <div className="relative z-[4] flex h-min w-full flex-row items-center justify-center gap-5">
          <div
            aria-hidden
            className="h-[2px] w-px flex-[1_0_0px] overflow-clip max-[1199px]:hidden"
          />
          <div className="flex h-min w-px flex-[1_0_0px] flex-col items-start justify-center gap-8">
            <div className="flex h-min w-full flex-row items-center justify-center gap-[10px] overflow-clip">
              <h5 className="h-auto w-px flex-[1_0_0px] text-[20px] leading-[1.3] font-medium tracking-[-0.02em] break-words whitespace-pre-wrap text-white max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                {t.intro}
              </h5>
            </div>
            {/* "Our services" arrow link */}
            <a
              href="#services"
              className="group relative flex h-min max-w-full cursor-pointer flex-row items-center justify-center gap-2 overflow-clip pb-1 no-underline"
            >
              <h5 className="relative min-w-0 flex-1 whitespace-pre-wrap text-[20px] leading-[1.3] font-medium tracking-[-0.02em] text-white max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                {t.servicesLinkLabel}
              </h5>
              {/* 24x24 window over two arrows; idle shows the -45deg arrow, hover slides to the straight one */}
              <div className="relative h-6 w-6 overflow-clip">
                <div className="flex h-6 w-[56px] -translate-x-8 rtl:translate-x-8 flex-row items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-0">
                  <div className="flex h-6 w-6 flex-none items-center justify-center gap-[10px] overflow-clip p-[6px]">
                    <ArrowGlyph />
                  </div>
                  <div className="flex h-6 w-6 flex-none -rotate-45 items-center justify-center gap-[10px] overflow-clip p-[6px]">
                    <ArrowGlyph />
                  </div>
                </div>
              </div>
              {/* underline stroke: 1px white/50, thickens to 2px on hover */}
              <div
                aria-hidden
                className="absolute bottom-0 start-0 z-[1] h-px w-full overflow-clip bg-[rgba(255,255,255,0.5)] transition-[height] duration-300 ease-out group-hover:h-[2px]"
              />
            </a>
          </div>
        </div>

        {/* Title row: h1 left, spacer right (desktop only) */}
        <div className="relative flex h-min w-full flex-row items-center justify-center gap-5">
          <h1 className="relative z-[4] h-auto w-px flex-[1_0_0px] text-[84px] leading-[1.1] font-normal tracking-[-0.02em] break-words whitespace-pre-wrap text-white max-[1199px]:text-[78px] max-[809px]:text-[48px] max-[809px]:tracking-[0.02em]">
            {t.heading}
          </h1>
          <div
            aria-hidden
            className="h-[2px] w-px flex-[1_0_0px] overflow-clip max-[1199px]:hidden"
          />
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        aria-hidden
        className="absolute top-0 start-0 z-[2] h-full w-full overflow-clip bg-[linear-gradient(180deg,#10101000_0%,#101010cc_100%)]"
      />

      {/* Background video */}
      <div className="absolute top-0 start-0 z-[1] h-full w-full">
        <video
          src="/kafka/video/o9llhmt5io9I7YuFKtGeefHaXI.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="block h-full w-full object-cover [object-position:50%_50%]"
        />
      </div>
    </section>
  );
}
