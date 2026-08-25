/**
 * Site footer — rebuilt from the source Desktop/Tablet/Phone Framer variants
 * (identical DOM; only layout differs per breakpoint, expressed here with
 * responsive classes).
 *
 * Source CSS (framer-02LF5 scope): dark (#101010) column, gap 80px, padding
 * 80px 24px 36px. Three 1440px-max rows:
 *   1) heading/body | contact columns | numbered menu links (row → column
 *      below 1200px; contact columns go row-of-3 on tablet only)
 *   2) giant white wordmark (object-fit cover in a wide box that crops the
      mark's padding away; aspect 8.8 for the 215x43 OCT Services wordmark,
      4.7 for the 136x43 source mark) + 360x240 video
 *      (row → column on tablet only)
 *   3) terms | email | copyright (row of three flex-1 cells at every width)
 *
 * Strings arrive as `t` (the chrome namespace) and links are built against
 * `locale`, both handed down by the page. Both are required. This is a server
 * component with no pathname to fall back on, so an omitted `locale` emitted
 * bare hrefs ("/about") for every link in the footer; the proxy then answers
 * with a redirect to whichever language the visitor's cookie holds, which
 * silently moves a reader off the language they are actually reading. Typing
 * both props as required turns that into a build error.
 */

import Link from "next/link";
import { footerNav, localePath, routes, site } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

const LOGO_WHITE = "/logo/oct-services-white.svg";
const VIDEO = "/kafka/video/o9llhmt5io9I7YuFKtGeefHaXI.mp4";

/* Text presets from the source CSS bundle */
const h3Text =
  "text-[30px] leading-[1.2] tracking-[-0.02em] font-normal max-[1199px]:text-[28px] max-[809px]:text-[26px]";
const h5Text =
  "text-[20px] leading-[1.3] tracking-[-0.02em] font-medium max-[1199px]:text-[19px] max-[809px]:text-[18px]";
const h6Text = "text-[16px] leading-[1.2] tracking-[-0.02em]";
const h4Text =
  "text-[24px] uppercase leading-[1.2] tracking-[-0.02em] max-[1199px]:text-[22px] max-[809px]:text-[20px]";
/* Link preset (framer-styles-preset-1xxvbtb): white, hover → 80% white with a
   1px white underline offset 4px */
const linkStyle =
  "text-white transition-colors hover:text-white/80 hover:underline hover:decoration-white hover:decoration-1 hover:underline-offset-4";

function Arrow() {
  return (
    <svg
      viewBox="0 0 13.526 11.251"
      className="h-[12px] w-[14px] overflow-visible"
      aria-hidden="true"
      data-flip-rtl
    >
      <path
        d="M 13.36 6.032 L 8.298 11.095 C 8.077 11.306 7.727 11.302 7.511 11.086 C 7.294 10.87 7.29 10.52 7.502 10.299 L 11.604 6.197 L 0.587 6.197 C 0.38 6.206 0.185 6.1 0.079 5.923 C -0.026 5.745 -0.026 5.524 0.079 5.346 C 0.185 5.169 0.38 5.063 0.587 5.072 L 11.606 5.072 L 7.503 0.97 C 7.355 0.829 7.295 0.619 7.347 0.421 C 7.398 0.224 7.553 0.069 7.75 0.018 C 7.948 -0.033 8.158 0.026 8.299 0.174 L 13.361 5.236 C 13.466 5.341 13.526 5.485 13.526 5.634 C 13.526 5.783 13.466 5.927 13.361 6.032 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-none flex-col items-center gap-5 min-[810px]:max-[1199px]:w-px min-[810px]:max-[1199px]:flex-[1_0_0px]">
      <p className={`w-full whitespace-pre-wrap ${h5Text} text-white/50`}>{label}</p>
      <div className="flex w-full flex-col items-center gap-2">{children}</div>
    </div>
  );
}

export function Footer({
  t,
  locale,
}: {
  t: Dictionary["chrome"];
  locale: string;
}) {
  const f = t.footer;

  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-ink px-6 pt-20 pb-9 text-white">
      {/* Row 1: heading | contact | menu */}
      <div className="flex w-full max-w-[1440px] flex-row items-start justify-center gap-20 overflow-clip max-[1199px]:flex-col">
        {/* Heading + body */}
        <div className="flex w-px flex-[1_0_0px] flex-col items-start gap-5 overflow-clip max-[1199px]:w-full max-[1199px]:flex-none">
          <h3 className={`w-full whitespace-pre-wrap text-white ${h3Text}`}>
            {f.heading}
          </h3>
          <p className={`w-full max-w-[363px] whitespace-pre-wrap ${h6Text} text-white/80`}>
            {f.body}
          </p>
        </div>

        {/* Contact columns (stacked on desktop, row of 3 on tablet, stacked on phone) */}
        <div className="flex w-px flex-[1_0_0px] flex-col items-center gap-[60px] max-[1199px]:w-full max-[1199px]:flex-none min-[810px]:max-[1199px]:flex-row">
          <ContactBlock label={f.talkToUs}>
            <p className={`w-full whitespace-pre-wrap ${h5Text}`}>
              <a
                href={site.emailHref}
                target="_blank"
                rel="noopener"
                className={linkStyle}
              >
                {site.email}
              </a>
            </p>
            <p className={`w-full whitespace-pre-wrap ${h5Text}`}>
              <a
                href={site.phoneHref}
                target="_blank"
                rel="noopener"
                className={linkStyle}
              >
                {site.phone}
              </a>
            </p>
          </ContactBlock>

          <ContactBlock label={f.address.label}>
            {f.address.lines.map((line) => (
              <p key={line} className={`w-full whitespace-pre-wrap ${h5Text}`}>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className={linkStyle}
                >
                  {line}
                </a>
              </p>
            ))}
          </ContactBlock>

          <ContactBlock label={f.workingHours.label}>
            {f.workingHours.lines.map((line) => (
              <p key={line} className={`w-full whitespace-pre-wrap ${h5Text} text-white`}>
                {line}
              </p>
            ))}
          </ContactBlock>
        </div>

        {/* Numbered menu */}
        <div className="flex w-px flex-[1_0_0px] flex-col items-start gap-5 max-[1199px]:w-full max-[1199px]:flex-none">
          <p className={`w-full whitespace-pre-wrap text-start ${h5Text} text-white/50`}>
            {f.menuLabel}
          </p>
          <div className="flex w-full flex-col items-center gap-8">
            {footerNav.map((l, i) => (
              <Link
                key={l.key}
                href={localePath(l.href, locale)}
                className="group relative flex w-full cursor-pointer flex-row items-center justify-between overflow-clip pb-1"
              >
                <span className={`w-[100px] flex-none whitespace-pre-wrap ${h4Text} text-white`}>
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="flex w-px flex-[1_0_0px] flex-row items-center justify-between">
                  <span className={`whitespace-pre-wrap text-start ${h4Text} text-white`}>
                    {t.nav[l.key]}
                  </span>
                  {/* 24px window over two arrows; strip slides right→left on hover */}
                  <span className="flex h-6 w-6 flex-none flex-row items-center overflow-clip text-white">
                    <span className="flex -translate-x-8 rtl:translate-x-8 flex-row items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-0">
                      <span className="flex h-6 w-6 flex-none items-center justify-center p-[6px]">
                        <Arrow />
                      </span>
                      <span className="flex h-6 w-6 flex-none items-center justify-center p-[6px]">
                        <Arrow />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-0 start-0 z-[1] h-px w-full bg-white/50 transition-[height] duration-300 group-hover:h-[2px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: giant wordmark + video */}
      <div className="flex w-full max-w-[1440px] flex-row items-center justify-center gap-10 overflow-clip min-[810px]:max-[1199px]:flex-col">
        <Link
          href={localePath(routes.home, locale)}
          aria-label={t.logoLabel}
          className="relative block aspect-[8.8] w-px flex-[1_0_0px] cursor-pointer overflow-clip min-[810px]:max-[1199px]:w-full min-[810px]:max-[1199px]:flex-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG wordmark stretched to a 4.7 aspect box, per source */}
          <img
            src={LOGO_WHITE}
            alt=""
            width={215}
            height={43}
            className="absolute inset-0 block h-full w-full object-cover object-center"
          />
        </Link>
        <div className="h-[240px] w-[360px] flex-none min-[810px]:max-[1199px]:w-full">
          <video
            src={VIDEO}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="block h-full w-full bg-transparent object-cover [object-position:50%_50%]"
          />
        </div>
      </div>

      {/* Row 3: terms | email | copyright.
          Three equal columns share the width on tablet and up. Below 810px the
          80px gaps leave each column too narrow for its own text (a longer
          translation such as "Nutzungsbedingungen" needs ~160px against ~56px
          available), so the row stacks and the columns run full width. */}
      <div className="flex w-full max-w-[1440px] flex-row items-start justify-center gap-20 overflow-clip max-[809px]:flex-col max-[809px]:items-start max-[809px]:gap-3">
        <p className={`w-px flex-[1_0_0px] whitespace-pre-wrap ${h6Text} text-white/80 max-[809px]:w-full max-[809px]:flex-none`}>
          <Link href={localePath(routes.terms, locale)} className={linkStyle}>
            {f.terms}
          </Link>
        </p>
        <p className={`w-px flex-[1_0_0px] whitespace-pre-wrap text-start ${h6Text} text-white/80 max-[809px]:w-full max-[809px]:flex-none`}>
          <a
            href={site.emailHref}
            target="_blank"
            rel="noopener"
            className={linkStyle}
          >
            {site.email}
          </a>
        </p>
        <p className={`w-px flex-[1_0_0px] whitespace-pre-wrap text-end ${h6Text} text-white/80 max-[809px]:w-full max-[809px]:flex-none max-[809px]:text-start`}>
          {f.copyright}
        </p>
      </div>
    </footer>
  );
}
