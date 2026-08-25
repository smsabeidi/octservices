import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * LEGAL MATTERS — cloned from kafka.framer.wiki home, section 06.
 * Source markup: framer-1fa8l6d ("Legal Matters") in shared-css-6ef7f0ce.css.
 * Desktop >=1200 / tablet 810-1199 / phone <=809.
 *
 * Layout (per source CSS):
 * - section (framer-1fa8l6d): #fcfbf7, flex col, gap 80px (40px phone),
 *   padding 80px 36px (80px 24px below 1200).
 * - inner (framer-z3hsi0): max-width 1440px, flex col, gap 80px (60px phone), overflow clip.
 * - Top (framer-1flvy47): row, items-center, gap 20px; phone: column, gap 60px.
 *   Left half: eyebrow + h2 (gap 20). Right half: arrow button, bottom-right
 *   (phone: full width, left-aligned).
 * - 4 project rows (framer-1qo8ole/-1smwyhz/-9uumkt/-10zsa26): row, items-start,
 *   gap 20px, each child flex 1 0 0. Card and year label alternate sides:
 *   rows 1/3 = card then year (end-aligned); rows 2/4 = year (start-aligned)
 *   then card. Phone: column; card first (order 0), year after (order 1),
 *   start-aligned. Card containers carry z-index 1. The source describes these
 *   as left and right; they are expressed here in reading order so the whole
 *   block mirrors in Arabic.
 * - Card (Framer component qOHMf): image (aspect 1.01095, object-cover) over a
 *   row of title h5 (flex 1) + tag list (flex 1, col, gap 4px, right-aligned).
 *   Tablet/phone use the "S" variant: title/tags stack, left-aligned.
 */

type PracticeArea = Dictionary["home"]["practiceAreas"]["items"][number];

/** Row layout facts, positionally matched to home.practiceAreas.items. */
type ProjectLayout = {
  img: string;
  /**
   * Year label placement on desktop/tablet, in reading order rather than in
   * physical sides: "start" puts the year before the card, "end" after it. The
   * source calls these left and right, but the rows are mirrored wholesale in
   * Arabic — the DOM order below and the text-start/text-end alignment both
   * follow the writing direction — so naming them left and right would invite
   * someone to "correct" the logical alignment back to a physical one.
   */
  yearSide: "start" | "end";
  /** row 3's year label carries a trailing empty paragraph in the source */
  yearTrailingBreak?: boolean;
};

const PROJECT_LAYOUT: readonly ProjectLayout[] = [
  {
    img: "/kafka/img/W5j9nq5fKAE7pC3koIiniWE8yP8.png",
    yearSide: "end",
  },
  {
    img: "/kafka/img/wsGNlyuOkIdU6Vf8VoUlYjuvmC4.png",
    yearSide: "start",
  },
  {
    img: "/kafka/img/nmXZOsPpIlQjIHmg5uwOA5NJcI.png",
    yearSide: "end",
    yearTrailingBreak: true,
  },
  {
    img: "/kafka/img/uKY0y11Igx9LzVoeZBuszZASoU.png",
    yearSide: "start",
  },
] as const;

/* Exact image `sizes` from the source markup (half the shell on desktop/tablet,
   full width on phone). Intrinsic files are 1312x1096. */
const IMG_SIZES =
  "(min-width: 1200px) max((min(100vw - 72px, 1440px) - 20px) / 2, 1px), (max-width: 809.98px) min(100vw - 48px, 1440px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 48px, 1440px) - 20px) / 2, 1px)";

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

/** Year marker column beside a card (h6, 16px, rgba(16,16,16,0.8)). */
function YearLabel({
  project,
  layout,
}: {
  project: PracticeArea;
  layout: ProjectLayout;
}) {
  // rows whose year trails the card are end-aligned on desktop/tablet, and
  // start-aligned on phone where the row stacks
  const align =
    layout.yearSide === "end" ? "text-end max-[809px]:text-start" : "text-start";
  return (
    <div className="min-w-0 flex-[1_0_0px] whitespace-pre-wrap break-words max-[809px]:w-full max-[809px]:flex-none max-[809px]:order-1">
      <h6
        className={`text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)] ${align}`}
      >
        {project.marker}
      </h6>
      {layout.yearTrailingBreak && (
        <p className="text-[12px] font-normal leading-[1.2] tracking-[-0.02em]">
          <br />
        </p>
      )}
    </div>
  );
}

/** Project card — Framer component qOHMf ("L" desktop / "S" tablet+phone variants collapsed). */
function ProjectCard({ project, img }: { project: PracticeArea; img: string }) {
  return (
    <div className="z-[1] min-w-0 flex-[1_0_0px] max-[809px]:w-full max-[809px]:flex-none">
      <div className="flex w-full flex-col items-center gap-5">
        <div className="relative aspect-[1.01095] w-full flex-none overflow-clip">
          <Image
            src={img}
            alt=""
            fill
            sizes={IMG_SIZES}
            className="object-cover object-center"
          />
        </div>
        {/* Top Content: title + tags; stacks (S variant) below 1200 */}
        <div className="flex w-full flex-row items-start justify-center gap-5 max-[1199px]:flex-col">
          <h5 className="min-w-0 flex-[1_0_0px] whitespace-pre-wrap break-words text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#101010] max-[1199px]:w-full max-[1199px]:flex-none max-[1199px]:text-[19px] max-[809px]:text-[18px]">
            {project.title}
          </h5>
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center justify-center gap-1 overflow-clip max-[1199px]:w-full max-[1199px]:flex-none">
            {project.tags.map((tag) => (
              <p
                key={tag}
                className="w-full whitespace-pre-wrap break-words text-end text-[12px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)] max-[1199px]:text-start"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalMatters({
  t,
  locale,
}: {
  t: Dictionary["home"]["practiceAreas"];
  locale: string;
}) {
  return (
    <section className="flex w-full flex-col items-center gap-20 bg-[#fcfbf7] px-9 py-20 text-[#101010] max-[1199px]:px-6 max-[809px]:gap-10">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-20 overflow-clip max-[809px]:gap-[60px]">
        {/* Top: eyebrow + heading left, button bottom-right */}
        <div className="flex w-full flex-row items-center justify-center gap-5 max-[809px]:flex-col max-[809px]:gap-[60px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            <h2 className="w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.heading}
            </h2>
          </div>
          <div className="flex min-w-0 flex-[1_0_0px] flex-row items-end justify-end gap-2.5 self-stretch max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none max-[809px]:justify-start max-[809px]:self-auto">
            {/* Button — Framer component sLa2B, "Black" variant */}
            <a
              href={`/${locale}/contact`}
              className="group relative flex h-min max-w-full flex-none cursor-pointer flex-row items-center justify-center gap-2 overflow-clip pb-1 no-underline"
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

        {/* Project rows: card and year alternate sides; phone stacks card-then-year */}
        {t.items.map((project, i) => {
          const layout = PROJECT_LAYOUT[i];
          return (
            <div
              key={project.marker}
              className="flex w-full flex-row items-start justify-center gap-5 max-[809px]:flex-col"
            >
              {layout.yearSide === "start" && (
                <YearLabel project={project} layout={layout} />
              )}
              <ProjectCard project={project} img={layout.img} />
              {layout.yearSide === "end" && (
                <YearLabel project={project} layout={layout} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
