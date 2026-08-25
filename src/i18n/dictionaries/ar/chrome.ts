import type { ChromeDict } from "../en/chrome";

/**
 * chrome namespace — Arabic.
 *
 * Nav labels are keyed by route, so the translator never touches an href. The
 * postal address stays as written: an address is delivered by a postal service,
 * not read as prose, and is left in its original form in every locale.
 */
export const chrome: ChromeDict = {
  /** Accessible name on the wordmark links in the nav and the footer. */
  logoLabel: "OCT Services",

  tagline: "ترجمة معتمدة وترجمة شفوية وتوطين.",

  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    insights: "رؤى",
    contact: "تواصل معنا",
  },

  /** Label inside the nav pill. Rolls up on hover, so keep it short. */
  cta: "اطلب عرض سعر",

  menu: {
    open: "فتح القائمة",
    close: "إغلاق القائمة",
  },

  languageLabel: "اللغة",

  footer: {
    // The two characters after the comma are U+2028 LINE SEPARATOR, exactly as
    // in the English source: a forced break that sets the heading over three
    // lines with a blank one in the middle. Written as escapes because the
    // literals are invisible. The Arabic is broken at the same grammatical
    // joint, so the second line still opens a coordinated list.
    heading: "خدمات لغوية للملفات،\u2028\u2028والعقود والطلبات.",
    body: "ترجمة معتمدة وترجمة شفوية، تُجهَّز لتقبلها الجهة التي تستلم مستنداتك.",

    talkToUs: "تحدّث إلينا",

    address: {
      label: "العنوان",
      // Postal address: not copy. Kept byte identical, trailing space included.
      lines: ["100 Example Street ", "Example City 00000"],
    },

    workingHours: {
      label: "ساعات العمل",
      lines: ["من الاثنين إلى السبت", "09:00 إلى 18:00"],
    },

    menuLabel: "القائمة",

    terms: "شروط الاستخدام",
    copyright: "© 2026 OCT Services",
  },
};
