/**
 * chrome namespace — German.
 *
 * Mirrors en/chrome.ts key for key. Route paths and contact details are NOT
 * here — they are the same in every language and live in src/content/site.ts.
 */
export const chrome = {
  /** Accessible name on the wordmark links in the nav and the footer. */
  logoLabel: "Global Language Solutions",

  /** Strapline carried over from the previous build. No page renders it today. */
  tagline: "Beglaubigte Übersetzung, Dolmetschen und Lokalisierung.",

  /** Nav labels, keyed by route. The order and the hrefs live in site.ts. */
  nav: {
    home: "Startseite",
    about: "Über uns",
    services: "Leistungen",
    insights: "Fachbeiträge",
    contact: "Kontakt",
  },

  /** Label inside the nav pill. Rolls up on hover, so keep it short. */
  cta: "Angebot anfordern",

  /** Accessible name on the phone-only hamburger, per state. */
  menu: {
    open: "Menü öffnen",
    close: "Menü schließen",
  },

  /** Accessible name on the language switcher; the endonym follows it. */
  languageLabel: "Sprache",

  footer: {
    // The two characters after "Anträge," are U+2028 LINE SEPARATOR, exactly as
    // in the English source: browsers treat U+2028 as a forced line break, so
    // the heading sets over three lines with a blank one in the middle.
    heading: "Sprachdienste für Anträge,\u2028\u2028Verträge und Bewerbungen.",
    body: "Beglaubigte Übersetzungen und Dolmetschen, so vorbereitet, dass die empfangende Stelle Ihre Unterlagen annehmen kann.",

    /** Column heading above the email and phone number. */
    talkToUs: "Kontakt",

    // A postal address is not copy: it stays byte identical in every language,
    // trailing space included.
    address: {
      label: "Adresse",
      lines: ["6137 Lincolnia Rd", "Alexandria, VA 22312"],
    },

    workingHours: {
      label: "Geschäftszeiten",
      lines: ["Montag bis Samstag", "09:00 bis 18:00 Uhr"],
    },

    /** Heading above the numbered link list. Rendered uppercase via CSS. */
    menuLabel: "Menü",

    terms: "Nutzungsbedingungen",
    copyright: "© 2026 Global Language Solutions",
  },
};
