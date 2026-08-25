/**
 * chrome namespace — English source of truth.
 *
 * Every string the site chrome renders: the nav, the call to action, the phone
 * menu toggle and the whole footer. Route paths and contact details are NOT
 * here — they are the same in every language and live in src/content/site.ts.
 */
export const chrome = {
  /** Accessible name on the wordmark links in the nav and the footer. */
  logoLabel: "OCT Services",

  /**
   * Strapline carried over from the previous build. No page renders it today;
   * it is kept so the copy is not lost in the move out of the content layer.
   */
  tagline: "Certified translation, interpreting and localisation.",

  /**
   * Nav labels, keyed by route. `nav` and `footerNav` in src/content/site.ts
   * hold the order and the hrefs and point at these keys, so a translator never
   * sees a URL and can never break one.
   */
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    insights: "Insights",
    contact: "Contact",
  },

  /** Label inside the nav pill. Rolls up on hover, so keep it short. */
  cta: "Request a quote",

  /** Accessible name on the phone-only hamburger, per state. */
  menu: {
    open: "Open menu",
    close: "Close menu",
  },

  /**
   * Accessible name on the language switcher button. Rendered as
   * "<languageLabel>: <endonym>", e.g. "Language: Deutsch" — the endonym is
   * always the language's own name, so only this prefix is translated.
   */
  languageLabel: "Language",

  footer: {
    // Verbatim from the source: the two characters after "for" are U+2028 LINE
    // SEPARATOR (Framer's soft line break), not spaces. Browsers treat U+2028 as
    // a forced line break, so the heading sets over three lines with a blank one
    // in the middle. Written as escapes because the literals are invisible.
    heading: "Language services for filings,\u2028\u2028contracts and applications.",
    body: "Certified translation and interpreting, prepared so the office receiving your documents can accept them.",

    /** Column heading above the email and phone number. */
    talkToUs: "Talk to us",

    address: {
      label: "Address",
      lines: ["100 Example Street ", "Example City 00000"],
    },

    workingHours: {
      label: "Working hours",
      lines: ["Monday to Saturday", "09:00 to 18:00"],
    },

    /** Heading above the numbered link list. Rendered uppercase via CSS. */
    menuLabel: "Menu",

    terms: "Terms of Use",
    copyright: "© 2026 OCT Services",
  },
};

export type ChromeDict = typeof chrome;
