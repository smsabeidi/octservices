"use client";

/**
 * Site nav — rebuilt from the source "Transparent" (home) and "Black"
 * (interior pages) Framer variants.
 *
 * Source CSS (framer-DcVjm scope):
 *   root: row, centered, gap 20px, padding 24px 36px, overflow clip, position
 *   relative (NOT sticky/fixed — the bar scrolls away with the page).
 *   inner: flex 1, max-width 1440px, gap 20px → two flex-1 halves
 *   (logo | links + pill), links gap 24px, link text 16px/120%/-0.02em at
 *   opacity .7, pill 12px 16px radius 99px with a two-line label roll-up.
 *
 * Strings arrive as `t` (the chrome namespace) and links are built against
 * `locale`, both handed down by the page. Both are required: a missing `t`
 * used to fall back to English on every locale, and a missing `locale` used to
 * emit unprefixed hrefs that the proxy answers with a redirect — which drops
 * the visitor's language whenever their cookie disagrees with the URL. Typing
 * them as required turns either mistake into a build error.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { localePath, nav, routes } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

/* OCT Services wordmark. Same construction as the source KAFKA mark — Inter
   SemiBold caps on a 43px box, 2px left inset, raised TM at the trailing edge —
   set at a 22px cap height so the longer name lands at 215x43 (5:1). */
const LOGO_WHITE = "/logo/oct-services-white.svg";
const LOGO_BLACK = "/logo/oct-services-ink.svg";

const linkText =
  "whitespace-pre-wrap text-[16px] leading-[1.2] tracking-[-0.02em] opacity-70 transition-opacity duration-200 hover:opacity-100";

function BookPill({
  label,
  href,
  transparent,
  className = "",
  onClick,
}: {
  label: string;
  href: string;
  transparent: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex cursor-pointer flex-row items-center gap-[10px] overflow-clip rounded-[99px] px-4 py-3 ${
        transparent ? "bg-paper" : "bg-ink"
      } ${className}`}
    >
      {/* 19px-high window; the stack slides up by 19 + 10 (gap) on hover */}
      <span className="flex h-[19px] flex-col items-center overflow-clip">
        <span className="flex flex-col items-center gap-[10px] transition-transform duration-300 ease-out group-hover:-translate-y-[29px]">
          <span
            className={`whitespace-pre-wrap text-[16px] leading-[19px] tracking-[-0.02em] ${
              transparent ? "text-ink" : "text-white"
            }`}
          >
            {label}
          </span>
          <span
            className={`whitespace-pre-wrap text-[16px] leading-[19px] tracking-[-0.02em] ${
              transparent ? "text-ink" : "text-white"
            }`}
          >
            {label}
          </span>
        </span>
      </span>
    </Link>
  );
}

export function Nav({
  t,
  locale,
  tone,
}: {
  t: Dictionary["chrome"];
  locale: string;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const home = localePath(routes.home, locale);

  // tone="dark" → "Transparent" variant (white wordmark + white links over the
  // dark home hero); tone="light" → "Black" variant (dark wordmark + dark text
  // on a white bar). When no tone is passed, resolve per route like the source
  // site: home is Transparent, every interior page is Black.
  const transparent = tone !== undefined ? tone === "dark" : pathname === home;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const ink = transparent ? "text-white" : "text-ink";
  const switcherTone = transparent ? "dark" : "light";

  return (
    <nav
      className={`relative z-50 flex w-full flex-row items-center justify-center gap-5 overflow-x-clip px-9 py-6 min-[810px]:max-[1199px]:gap-3 min-[810px]:max-[1199px]:px-4 ${
        transparent ? "bg-transparent" : "bg-paper"
      }`}
    >
      <div className="flex w-full max-w-[1440px] flex-[1_0_0px] flex-row items-center gap-5 min-[810px]:max-[1199px]:gap-2">
        {/* Logo half */}
        <div className="flex flex-[1_0_0px] flex-row items-center justify-start gap-[10px]">
          <Link
            href={home}
            aria-label={t.logoLabel}
            className="relative block h-[43px] w-[215px] cursor-pointer overflow-clip max-[560px]:h-[34px] max-[560px]:w-[170px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG wordmark, no optimization needed */}
            <img
              src={transparent ? LOGO_WHITE : LOGO_BLACK}
              alt=""
              width={215}
              height={43}
              className="block h-full w-full object-cover object-center"
            />
          </Link>
        </div>

        {/* Menu half: links left, pill right (space-between) */}
        <div className="flex flex-[1_0_0px] flex-row items-center justify-between">
          <div className="flex flex-[1_0_0px] flex-row items-center justify-start gap-6 min-[810px]:max-[1199px]:gap-3 max-[809px]:hidden">
            {nav.map((l) => {
              const href = localePath(l.href, locale);
              return (
                <Link
                  key={l.key}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className="flex cursor-pointer flex-row items-center gap-[10px]"
                >
                  <span className={`${linkText} ${ink}`}>{t.nav[l.key]}</span>
                </Link>
              );
            })}
          </div>

          {/* Language choice sits immediately before the call to action. */}
          <div className="flex flex-row items-center gap-5 max-[809px]:hidden">
            <LanguageSwitcher label={t.languageLabel} tone={switcherTone} />
            <BookPill
              label={t.cta}
              href={localePath(routes.cta, locale)}
              transparent={transparent}
            />
          </div>

          {/* Phone-only hamburger. No phone nav variant exists in the source
              markup; this interaction is owned by the chrome unit. */}
          <button
            type="button"
            aria-label={open ? t.menu.close : t.menu.open}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`ms-auto hidden h-10 w-10 flex-col items-center justify-center gap-[5px] max-[809px]:flex ${ink}`}
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`fixed inset-0 top-[91px] z-40 hidden max-[809px]:block ${
            transparent ? "bg-ink" : "bg-paper"
          }`}
        >
          <div className="flex flex-col gap-6 px-9 pt-10">
            {nav.map((l) => (
              <Link
                key={l.key}
                href={localePath(l.href, locale)}
                onClick={() => setOpen(false)}
                className={`text-[26px] leading-[1.2] tracking-[-0.02em] opacity-70 transition-opacity hover:opacity-100 ${ink}`}
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <div className="mt-4 flex flex-row items-center gap-5">
              <BookPill
                label={t.cta}
                href={localePath(routes.cta, locale)}
                transparent={transparent}
                className="self-start"
                onClick={() => setOpen(false)}
              />
              <LanguageSwitcher label={t.languageLabel} tone={switcherTone} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
