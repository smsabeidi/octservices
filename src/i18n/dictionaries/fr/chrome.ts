import type { ChromeDict } from "../en/chrome";

/**
 * chrome namespace — French.
 *
 * Route paths and contact details are not here; they live in src/content/site.ts
 * and are the same in every language. The postal address lines are an address,
 * not copy, and are kept byte identical to the English source, trailing space
 * included.
 */
export const chrome: ChromeDict = {
  logoLabel: "OCT Services",

  tagline: "Traduction certifiée, interprétation et localisation.",

  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    insights: "Ressources",
    contact: "Contact",
  },

  cta: "Demander un devis",

  menu: {
    open: "Ouvrir le menu",
    close: "Fermer le menu",
  },

  languageLabel: "Langue",

  footer: {
    // Same structure as the English source: the two characters after the comma
    // are U+2028 LINE SEPARATOR, so the heading sets over three lines with a
    // blank one in the middle. Written as escapes because the literals are
    // invisible.
    heading: "Services linguistiques pour vos dossiers,\u2028\u2028contrats et demandes.",
    body: "Traduction certifiée et interprétation, préparées pour que l’organisme destinataire puisse accepter vos documents.",

    talkToUs: "Nous joindre",

    address: {
      label: "Adresse",
      lines: ["100 Example Street ", "Example City 00000"],
    },

    workingHours: {
      label: "Horaires",
      lines: ["Du lundi au samedi", "9h00 à 18h00"],
    },

    menuLabel: "Menu",

    terms: "Conditions d’utilisation",
    copyright: "© 2026 OCT Services",
  },
};
