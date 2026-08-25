"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  isLocale,
  localeNames,
  localeShortNames,
  locales,
  type Locale,
} from "@/i18n/config";

/**
 * Language switcher.
 *
 * The visitor's language is detected from their device on first visit; this
 * lets them override it. Swapping the locale keeps them on the same page rather
 * than dropping them on the home page, which is the single most common failure
 * of language switchers. The choice is remembered by middleware via cookie.
 *
 * `label` is the translated word for "Language" (chrome.languageLabel), handed
 * down by the nav. The option names themselves are endonyms — each language
 * named in its own language — so they are never translated.
 */
export function LanguageSwitcher({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const segments = (pathname || "/").split("/");
  const current: Locale = isLocale(segments[1]) ? segments[1] : "en";

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function switchTo(next: Locale) {
    const parts = (pathname || "/").split("/");
    if (isLocale(parts[1])) parts[1] = next;
    else parts.splice(1, 0, next);
    setOpen(false);
    router.push(parts.join("/") || `/${next}`);
    router.refresh();
  }

  const ink = tone === "dark" ? "text-white" : "text-ink";
  const panelBg = tone === "dark" ? "bg-ink text-white" : "bg-paper text-ink";
  const border = tone === "dark" ? "border-white/20" : "border-[rgba(16,16,16,0.2)]";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${localeNames[current]}`}
        className={`flex items-center gap-1 text-[16px] leading-[1.2] tracking-[-0.02em] opacity-70 transition-opacity hover:opacity-100 ${ink}`}
      >
        <span>{localeShortNames[current]}</span>
        <span aria-hidden className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute top-[calc(100%+10px)] end-0 z-50 min-w-[150px] overflow-hidden rounded-[12px] border ${border} ${panelBg} py-1 shadow-[0_10px_30px_rgba(0,0,0,0.12)]`}
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === current}
                lang={l}
                dir={l === "ar" ? "rtl" : "ltr"}
                onClick={() => switchTo(l)}
                className={`block w-full px-4 py-2 text-start text-[16px] leading-[1.4] tracking-[-0.02em] transition-opacity ${
                  l === current ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {localeNames[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
