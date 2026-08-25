import { Fragment } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * OUR SERVICES — cloned from kafka.framer.wiki home, section 03.
 * Source markup: framer-1wu74tr ("Services") in shared-css-6ef7f0ce.css.
 * Desktop >=1200 / tablet 810-1199 / phone <=809.
 *
 * Layout (per source CSS):
 * - section: #fcfbf7, padding 80px 36px (24px side padding below 1200).
 * - list: rows separated by 1px rgba(16,16,16,0.2) dividers, gap 36px (48px on tablet).
 * - row (Framer component m5Bdm): image column + content column, gap 20px.
 *   Desktop: image occupies half the left column (a 2px flex spacer fills the rest).
 *   Tablet: image fills the left column. Phone: stacked column, gap 32px.
 */

/* Row artwork, positionally matched to home.services.items. Asset paths are not
   copy, so they stay here rather than in the dictionary. */
const SERVICE_IMAGES = [
  "/kafka/img/Unj4zrUK7oJ6Ma2mUvFNpF17P1U.png",
  "/kafka/img/9TGdyV5TPmEmHtmnA4gxULCrIL0.png",
  "/kafka/img/5c2WmHLzjnU1fC8Mp9z1mGaVgjE.png",
  "/kafka/img/5c2WmHLzjnU1fC8Mp9z1mGaVgjE.png",
] as const;

/* Exact image `sizes` from the source markup (image is a quarter of the shell on
   desktop — half of the left column — half on tablet, full width on phone). */
const IMG_SIZES =
  "(min-width: 1200px) max(max((min(100vw - 72px, 1440px) - 20px) / 2, 1px) / 2, 1px), (max-width: 809.98px) max(min(100vw - 48px, 1440px), 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 48px, 1440px) - 20px) / 2, 1px)";

/* arrow glyph: svg-1790061921_764 (14x12 box inside a 24x24 padded tile) */
function Arrow() {
  return (
    <svg
      viewBox="0 0 13.526 11.251"
      className="h-3 w-[14px] flex-none"
      aria-hidden="true"
      data-flip-rtl
    >
      <path
        d="M 13.36 6.032 L 8.298 11.095 C 8.077 11.306 7.727 11.302 7.511 11.086 C 7.294 10.87 7.29 10.52 7.502 10.299 L 11.604 6.197 L 0.587 6.197 C 0.38 6.206 0.185 6.1 0.079 5.923 C -0.026 5.745 -0.026 5.524 0.079 5.346 C 0.185 5.169 0.38 5.063 0.587 5.072 L 11.606 5.072 L 7.503 0.97 C 7.355 0.829 7.295 0.619 7.347 0.421 C 7.398 0.224 7.553 0.069 7.75 0.018 C 7.948 -0.033 8.158 0.026 8.299 0.174 L 13.361 5.236 C 13.466 5.341 13.526 5.485 13.526 5.634 C 13.526 5.783 13.466 5.927 13.361 6.032 Z"
        fill="rgb(16, 16, 16)"
      />
    </svg>
  );
}

export function Services({
  t,
  locale,
}: {
  t: Dictionary["home"]["services"];
  locale: string;
}) {
  return (
    <section
      id="services"
      className="flex w-full flex-col items-center gap-20 overflow-clip bg-[#fcfbf7] px-9 py-20 text-[#101010] max-[1199px]:px-6"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[60px]">
        {/* Top: eyebrow + heading left, button bottom-right */}
        <div className="flex w-full flex-row items-center justify-center gap-5 max-[809px]:flex-col max-[809px]:gap-[60px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full flex-none whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            {/* The source copy separates the two lines with two U+2028 LINE SEPARATORs. */}
            <h2 className="w-full flex-none whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.heading}
            </h2>
          </div>
          <div className="flex flex-[1_0_0px] flex-row items-end justify-end gap-2.5 self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
            {/* Button — Framer component sLa2B, "Black" variant */}
            <a
              href={`/${locale}/contact`}
              className="group relative flex h-min max-w-full cursor-pointer flex-row items-center gap-2 overflow-clip pb-1"
            >
              <h5 className="min-w-0 flex-1 whitespace-pre-wrap text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[rgb(16,16,16)] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                {t.ctaLabel}
              </h5>
              {/* Arrow: 24px window over a 2-tile strip; default shows the -45deg tile, hover slides to the straight tile */}
              <div className="relative h-6 w-6 flex-none overflow-clip">
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

        {/* Service rows: divider above each entry */}
        <div className="flex w-full flex-col items-center gap-9 min-[810px]:max-[1199px]:gap-12">
          {t.items.map((service, i) => (
            <Fragment key={service.no}>
              <div className="h-px w-full flex-none bg-[rgba(16,16,16,0.2)]" />
              <article className="flex w-full flex-none flex-row items-start justify-center gap-5 max-[809px]:flex-col max-[809px]:gap-8">
                {/* Image column: on desktop the picture takes half of it, a flex spacer the rest */}
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
                {/* Content column: number + (title, description) */}
                <div className="flex min-w-0 flex-[1_0_0px] flex-row items-start gap-[60px] min-[810px]:max-[1199px]:gap-8 max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-4">
                  <h4 className="min-w-0 flex-1 whitespace-pre-wrap text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[22px] max-[809px]:text-[20px]">
                    {service.no}
                  </h4>
                  <div className="flex min-w-0 flex-[1_0_0px] flex-col items-start gap-2.5">
                    <h4 className="w-full min-w-0 flex-1 whitespace-pre-wrap break-words text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[22px] max-[809px]:text-[20px]">
                      {service.title}
                    </h4>
                    <h6 className="w-full flex-none whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)]">
                      {service.body}
                    </h6>
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
