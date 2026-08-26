/**
 * contact namespace — French.
 *
 * Covers /contact: the hero, the three detail blocks beside the form, every
 * field label and placeholder in ContactForm, the submit button and the
 * accessible name of the embedded map.
 *
 * Not copy, and therefore identical to the English source: the email address,
 * the phone number and the two postal address lines (an address is delivered,
 * not read, so it stays in its original form, trailing space included).
 *
 * `\u00A0` below is U+00A0, the non-breaking space French sets before a colon.
 */
export const contact = {
  meta: {
    title: "Global Language Solutions",
    description:
      "Envoyez à Global Language Solutions vos documents, vos langues et votre délai\u00A0: nous vous répondrons par écrit avec un périmètre et une date fermes.",
  },

  hero: {
    eyebrow: "NOUS CONTACTER",
    heading: "Dites-nous ce qu’il vous faut, et pour quand.",
  },

  /** The three stacked blocks in the left column of the content section. */
  details: {
    talk: {
      label: "Nous joindre",
      email: "info@octservices.com",
      phone: "+1 332 400 6423",
    },
    hours: {
      label: "Horaires",
      days: "Du lundi au vendredi",
      time: "9h00 à 18h00",
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
      label: "Nom",
      placeholder: "Nom complet",
    },
    email: {
      label: "E-mail",
      placeholder: "Adresse e-mail",
    },
    message: {
      label: "Message",
      placeholder: "Documents, langues et délai",
    },
    submit: "Envoyer le message",
  },

  /** Accessible name for the Google Maps iframe. */
  map: {
    title: "Carte",
  },
} as const;
