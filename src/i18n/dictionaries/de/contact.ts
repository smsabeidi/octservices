/**
 * contact namespace — German.
 *
 * Mirrors en/contact.ts key for key, `as const` included, so the array and
 * object shapes stay identical to the English source of truth.
 *
 * Not copy, so not translated: the email address, the phone number and the
 * postal address, which stay byte identical (trailing space included).
 */
export const contact = {
  meta: {
    title: "Global Language Solutions",
    description:
      "Senden Sie Global Language Solutions Ihre Unterlagen, Sprachen und Frist, und Sie erhalten schriftlich einen festen Umfang und Termin.",
  },

  hero: {
    eyebrow: "SCHREIBEN SIE UNS",
    heading: "Sagen Sie uns, was Sie brauchen und bis wann.",
  },

  /** The three stacked blocks in the left column of the content section. */
  details: {
    talk: {
      label: "Kontakt",
      email: "info@octservices.com",
      phone: "+1 332 400 6423",
    },
    hours: {
      label: "Geschäftszeiten",
      days: "Montag bis Freitag",
      time: "09:00 bis 18:00 Uhr",
    },
    address: {
      label: "Adresse",
      line1: "6137 Lincolnia Rd",
      line2: "Alexandria, VA 22312",
    },
  },

  /** Every visible string in ContactForm. */
  form: {
    name: {
      label: "Name",
      placeholder: "Vor- und Nachname",
    },
    email: {
      label: "E-Mail",
      placeholder: "E-Mail-Adresse",
    },
    message: {
      label: "Nachricht",
      placeholder: "Unterlagen, Sprachen und Frist",
    },
    submit: "Nachricht senden",
  },

  /** Accessible name for the Google Maps iframe. */
  map: {
    title: "Karte",
  },
} as const;
