import type { ContactDict } from "../en/contact";
import type { Translated } from "./index";

/**
 * contact namespace — Spanish.
 *
 * `en/contact.ts` is declared `as const`, so its type pins every string to the
 * English literal. `Translated<ContactDict>` keeps the shape and relaxes only
 * the literals — see the note in ./index.ts.
 *
 * The email address, the phone number and the street address are not copy and
 * stay byte identical, trailing space included.
 */
export const contact: Translated<ContactDict> = {
  meta: {
    title: "OCT Services",
    description:
      "Envíe a OCT Services sus documentos, sus idiomas y su plazo, y le responderemos por escrito con un alcance y una fecha cerrados.",
  },

  hero: {
    eyebrow: "CONTACTO",
    heading: "Díganos qué necesita y para cuándo.",
  },

  /** The three stacked blocks in the left column of the content section. */
  details: {
    talk: {
      label: "Hablemos",
      email: "info@octservices.com",
      phone: "+45 121 231 289",
    },
    hours: {
      label: "Horario de atención",
      days: "De lunes a viernes",
      time: "De 09:00 a 18:00",
    },
    address: {
      label: "Dirección",
      line1: "ul. Św Jacka 21 ",
      line2: "38-102 Warszawa",
    },
  },

  /** Every visible string in ContactForm. */
  form: {
    name: {
      label: "Nombre",
      placeholder: "Nombre completo",
    },
    email: {
      label: "Correo",
      placeholder: "Correo electrónico",
    },
    message: {
      label: "Mensaje",
      placeholder: "Documentos, idiomas y plazo",
    },
    submit: "Enviar mensaje",
  },

  /** Accessible name for the Google Maps iframe. */
  map: {
    title: "Mapa",
  },
};
