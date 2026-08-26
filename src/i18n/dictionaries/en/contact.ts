/**
 * contact namespace — English source of truth.
 *
 * Covers /contact: the hero, the three detail blocks beside the form, every
 * field label and placeholder in ContactForm, the submit button, and the
 * accessible name of the embedded map.
 *
 * Deliberately excluded, because they are not copy:
 *   - form field `name` attributes ("Name", "mail", "Message") and the
 *     honeypot names, which are wire format for the form backend;
 *   - the mailto:, tel: and maps.google.com hrefs, which are addresses
 *     rather than text and stay in the component.
 */
export const contact = {
  meta: {
    title: "Global Language Solutions",
    description:
      "Send Global Language Solutions your documents, languages and deadline, and we will come back with a fixed scope and date in writing.",
  },

  hero: {
    eyebrow: "GET IN TOUCH",
    heading: "Tell us what you need and by when.",
  },

  /** The three stacked blocks in the left column of the content section. */
  details: {
    talk: {
      label: "Talk to us",
      email: "info@octservices.com",
      phone: "+1 332 400 6423",
    },
    hours: {
      label: "Working hours",
      days: "Monday to Friday",
      time: "09:00 to 18:00",
    },
    address: {
      label: "Address",
      line1: "6137 Lincolnia Rd",
      line2: "Alexandria, VA 22312",
    },
  },

  /** Every visible string in ContactForm. */
  form: {
    name: {
      label: "Name",
      placeholder: "Full name",
    },
    email: {
      label: "Email",
      placeholder: "Email address",
    },
    message: {
      label: "Message",
      placeholder: "Documents, languages and deadline",
    },
    submit: "Send message",
  },

  /** Accessible name for the Google Maps iframe. */
  map: {
    title: "Map",
  },
} as const;

export type ContactDict = typeof contact;
