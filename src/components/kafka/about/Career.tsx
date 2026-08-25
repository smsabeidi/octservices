import { ArrowLink } from "./ArrowLink";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * ABOUT — Career (source section `framer-1cvzals`).
 *
 * Source CSS:
 *   section — #fff, column, gap 80px (40px phone), padding 80px 36px
 *             (80px 24px below 1200px).
 *   inner   — max-width 1440px, column, gap 60px.
 *   top     — row, items flex-start, gap 20px; phone: column. The intro column
 *             is 100px tall on desktop/tablet, min-content on phone.
 *   list    — column, gap 20px; each entry is a wrap row (gap 30px) holding a
 *             card that stacks its content over a 1px rgba(16,16,16,0.2) rule.
 *   entry   — title (flex 1) | meta row (min-content, gap 10px); phone: column.
 *   meta    — "Full time" and location are fixed 250px columns
 *             (180px tablet, 100% phone), followed by the View job link.
 */

/* One job route per opening, in the same order as `about.career.jobs`. */
const JOB_PATHS = [
  "/careers/legal-assistant",
  "/careers/corporate-lawyer",
  "/careers/legal-associate",
] as const;

const metaCell =
  "w-[250px] whitespace-pre-wrap break-words text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[rgb(16,16,16)] min-[810px]:max-[1199px]:w-[180px] max-[1199px]:text-[19px] max-[809px]:w-full max-[809px]:text-[18px]";

export function Career({
  t,
  locale,
}: {
  t: Dictionary["about"]["career"];
  locale: Locale;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 bg-white px-9 py-20 text-[#101010] max-[1199px]:px-6 max-[809px]:gap-10">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[60px] overflow-clip">
        <div className="flex w-full flex-row items-start justify-center gap-5 overflow-clip max-[809px]:flex-col">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            <h2 className="w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.heading}
            </h2>
          </div>
          <div className="flex h-[100px] min-w-0 flex-[1_0_0px] flex-row items-start justify-start gap-2.5 max-[809px]:h-min max-[809px]:w-full max-[809px]:flex-none">
            <div className="min-w-0 flex-[1_0_0px]">
              <h5 className="whitespace-pre-wrap break-words text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[rgba(16,16,16,0.8)] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                {t.intro}
              </h5>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-start gap-5">
          {t.jobs.map((job, i) => (
            <div key={JOB_PATHS[i]} className="flex w-full flex-row flex-wrap items-center justify-start gap-[30px]">
              <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 overflow-clip">
                <div className="flex w-full flex-row items-center justify-center gap-5 max-[809px]:flex-col">
                  <div className="min-w-0 flex-[1_0_0px] max-[809px]:w-full max-[809px]:flex-none">
                    <h5 className="whitespace-pre-wrap break-words text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[rgba(16,16,16,0.8)] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                      {job.title}
                    </h5>
                  </div>
                  <div className="flex w-min flex-row items-center justify-center gap-2.5 overflow-clip max-[809px]:w-full max-[809px]:flex-col max-[809px]:content-start max-[809px]:items-start">
                    <h5 className={metaCell}>{t.employmentType}</h5>
                    <h5 className={metaCell}>{t.location}</h5>
                    <ArrowLink href={`/${locale}${JOB_PATHS[i]}`}>{t.cta}</ArrowLink>
                  </div>
                </div>
                <div className="h-px w-full flex-none bg-[rgba(16,16,16,0.2)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
