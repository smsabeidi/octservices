import type { ChromeDict } from "../en/chrome";

/**
 * chrome namespace — Spanish.
 *
 * Mirrors en/chrome.ts key for key. Route paths and contact details are not
 * here: they live in src/content/site.ts and are the same in every language.
 */
export const chrome: ChromeDict = {
  /** Accessible name on the wordmark links in the nav and the footer. */
  logoLabel: "Global Language Solutions",

  /** Strapline carried over from the previous build. No page renders it today. */
  tagline: "Traducción certificada, interpretación y localización.",

  /** Nav labels, keyed by route. The hrefs live in src/content/site.ts. */
  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    insights: "Perspectivas",
    contact: "Contacto",
  },

  /** Label inside the nav pill. Rolls up on hover, so it is kept short. */
  cta: "Pedir presupuesto",

  /** Accessible name on the phone-only hamburger, per state. */
  menu: {
    open: "Abrir menú",
    close: "Cerrar menú",
  },

  /** Accessible name on the language switcher; the endonym follows it. */
  languageLabel: "Idioma",

  footer: {
    // Same shape as the English source: the two characters after the comma are
    // U+2028 LINE SEPARATOR, so the heading sets over three lines with a blank
    // one in the middle. Written as escapes because the literals are invisible.
    heading: "Servicios lingüísticos para trámites,\u2028\u2028contratos y solicitudes.",
    body: "Traducción certificada e interpretación, preparadas para que la oficina que recibe sus documentos pueda aceptarlos.",

    /** Column heading above the email and phone number. */
    talkToUs: "Hablemos",

    address: {
      label: "Dirección",
      // An address, not copy: identical in every language.
      lines: ["6137 Lincolnia Rd", "Alexandria, VA 22312"],
    },

    workingHours: {
      label: "Horario de atención",
      lines: ["De lunes a sábado", "De 09:00 a 18:00"],
    },

    /** Heading above the numbered link list. Rendered uppercase via CSS. */
    menuLabel: "Menú",

    terms: "Condiciones de uso",
    copyright: "© 2026 Global Language Solutions",
  },
};
