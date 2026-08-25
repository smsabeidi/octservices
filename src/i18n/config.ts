/**
 * Locale configuration.
 *
 * The site is served in five languages. Locale is chosen from the visitor's
 * device/browser languages on first visit (see src/middleware.ts) and can be
 * overridden manually, in which case the choice is remembered in a cookie.
 */

export const locales = ["en", "fr", "ar", "es", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Text direction per locale. Arabic is right to left. */
export const direction: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fr: "ltr",
  ar: "rtl",
  es: "ltr",
  de: "ltr",
};

/** Endonyms: each language named in its own language, as a reader expects. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
  es: "Español",
  de: "Deutsch",
};

/** Short labels for the compact switcher in the header. */
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
  es: "ES",
  de: "DE",
};

/** BCP 47 tags used for html lang and hreflang. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  ar: "ar",
  es: "es",
  de: "de",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isRtl(locale: Locale): boolean {
  return direction[locale] === "rtl";
}

/** Cookie holding a manual language choice, so it survives later visits. */
export const LOCALE_COOKIE = "oct_locale";

