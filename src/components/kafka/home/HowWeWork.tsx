import { Fragment } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * HOW WE WORK — cloned from kafka.framer.wiki home, section 05.
 * Source markup: framer-1vb4m76 ("How we work") in shared-css-6ef7f0ce.css.
 * Desktop >=1200 / tablet 810-1199 / phone <=809.
 */

/* arrow glyph: svg-1790061921_764 (14x12 box inside a 24x24 padded tile) */
function Arrow() {
  return (
    <svg viewBox="0 0 13.526 11.251" className="h-3 w-[14px]" aria-hidden="true" data-flip-rtl>
      <path
        d="M 13.36 6.032 L 8.298 11.095 C 8.077 11.306 7.727 11.302 7.511 11.086 C 7.294 10.87 7.29 10.52 7.502 10.299 L 11.604 6.197 L 0.587 6.197 C 0.38 6.206 0.185 6.1 0.079 5.923 C -0.026 5.745 -0.026 5.524 0.079 5.346 C 0.185 5.169 0.38 5.063 0.587 5.072 L 11.606 5.072 L 7.503 0.97 C 7.355 0.829 7.295 0.619 7.347 0.421 C 7.398 0.224 7.553 0.069 7.75 0.018 C 7.948 -0.033 8.158 0.026 8.299 0.174 L 13.361 5.236 C 13.466 5.341 13.526 5.485 13.526 5.634 C 13.526 5.783 13.466 5.927 13.361 6.032 Z"
        fill="rgb(16, 16, 16)"
      />
    </svg>
  );
}

export function HowWeWork({
  t,
  locale,
}: {
  t: Dictionary["home"]["howWeWork"];
  locale: string;
}) {
  return (
    <section className="relative flex w-full flex-col items-center gap-20 overflow-clip bg-paper px-9 py-20 text-[#101010] max-[1199px]:px-6">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-20">
        {/* Top: eyebrow + heading left, button bottom-right */}
        <div className="flex w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[60px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            <h2 className="w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.headingLineOne}{" "}
              <br className="min-[810px]:max-[1199px]:hidden" />
              {t.headingLineTwo}
            </h2>
          </div>
          <div className="flex flex-[1_0_0px] flex-row items-end justify-end gap-2.5 self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
            {/* Button — Framer component sLa2B, "Black" variant */}
            <a
              href={`/${locale}/contact`}
              className="group relative flex h-min max-w-full cursor-pointer flex-row items-center justify-center gap-2 overflow-clip pb-1 no-underline"
            >
              <h5 className="whitespace-pre-wrap text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[rgb(16,16,16)] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                {t.ctaLabel}
              </h5>
              {/* Arrow: 24px window over a 2-tile strip; default shows the -45deg tile, hover slides to the straight tile */}
              <div className="relative h-6 w-6 overflow-clip">
                <div className="flex w-max -translate-x-8 rtl:translate-x-8 flex-row items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-0">
                  <div className="flex h-6 w-6 flex-none items-center justify-center p-1.5">
                    <Arrow />
                  </div>
                  <div className="flex h-6 w-6 flex-none -rotate-45 items-center justify-center p-1.5">
                    <Arrow />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 start-0 z-[1] h-px w-full bg-[rgba(16,16,16,0.5)] transition-[height] duration-300 group-hover:h-0.5" />
            </a>
          </div>
        </div>

        {/* Content: image left, 4 step rows right */}
        <div className="flex w-full flex-row items-start justify-center gap-12 max-[809px]:flex-col max-[809px]:gap-[49px]">
          <div className="relative aspect-[0.8567415730337079] flex-[1_0_0px] overflow-clip max-[809px]:w-full max-[809px]:flex-none">
            <Image
              src="/kafka/img/Ju8A5viMRN546D58tj5DGHfN2g.png"
              alt=""
              fill
              sizes="(min-width: 1200px) max((min(100vw - 72px, 1440px) - 48px) / 2, 1px), (max-width: 809.98px) min(100vw - 48px, 1440px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 48px, 1440px) - 48px) / 2, 1px)"
              className="object-cover object-center"
            />
          </div>
          <div className="z-[1] flex flex-[1_0_0px] flex-col items-center gap-9 max-[809px]:w-full max-[809px]:flex-none">
            {t.steps.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <div className="h-px w-full flex-none overflow-clip bg-[rgba(16,16,16,0.2)]" />
                )}
                <div className="flex w-full flex-row items-start justify-center gap-5 max-[809px]:flex-col">
                  <h5 className="min-w-0 flex-[1_0_0px] whitespace-pre-wrap break-words text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[19px] max-[809px]:w-full max-[809px]:flex-none max-[809px]:text-[18px]">
                    {step.title}
                  </h5>
                  <h6 className="min-w-0 flex-[1_0_0px] whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)] max-[809px]:w-full max-[809px]:flex-none">
                    {step.body}
                  </h6>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
