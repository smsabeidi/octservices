import type { LegalDict, TermsSection } from "../en/legal";

/**
 * legal namespace — Spanish.
 *
 * Covers /terms-and-conditions and the 404 boundary. The terms body keeps the
 * same numbered structure as the English source, so the page flattens
 * `intro → items → outro → contact` into the same run of paragraphs and lists
 * and the DOM is identical whatever the language.
 *
 * The `mailto:` href on the permission paragraph and the home button's route
 * are not copy and stay in the components.
 */

/** Sections 1 to 8, in the order the page renders them. */
const termsSections: TermsSection[] = [
  {
    heading: "1. Alcance de estas condiciones",
    intro: [
      "Estas condiciones se aplican a todas las personas que usan este sitio web, incluidas las que se ponen en contacto sin llegar a ser clientes.",
      "Esto abarca:",
    ],
    items: [
      "El uso de las páginas, textos, imágenes y descargas publicados en este sitio web.",
      "Las consultas, las solicitudes de presupuesto y cualquier documento que nos envíe al pedir un precio o una fecha.",
      "El trabajo que después realizamos, que se rige además por el presupuesto y el contrato escritos que emitimos. Si ambos difieren, prevalece ese contrato.",
    ],
    outro: [
      "Usar el sitio implica que acepta estas condiciones. Si no las acepta, no use el sitio ni envíe material a través de él.",
    ],
  },
  {
    heading: "2. Información de este sitio web",
    intro: ["Lo que lee aquí es información general. No es:"],
    items: [
      "Asesoramiento jurídico, migratorio, académico o financiero sobre su situación.",
      "La confirmación de que un organismo concreto aceptará un documento concreto.",
      "La garantía de un plazo, de un tiempo de tramitación o de un resultado.",
      "Un presupuesto, que emitimos por escrito una vez vistos los originales.",
      "La promesa de que todos los servicios estén disponibles en toda combinación de idiomas.",
    ],
    outro: [
      "Los requisitos de presentación cambian, así que consulte lo urgente con nosotros o con el organismo correspondiente.",
    ],
  },
  {
    heading: "3. Confidencialidad de consultas y documentos",
    intro: [
      "Todo lo que nos envía, desde una primera consulta hasta un conjunto completo de actas del registro civil, se trata como confidencial.",
      "El acceso se limita a los lingüistas y al personal de proyecto que trabaja en su expediente, y todos ellos están sujetos a obligaciones de confidencialidad. Los archivos se conservan solo el tiempo que los necesitamos.",
      "Firmamos un acuerdo de confidencialidad cuando usted lo necesite.",
    ],
  },
  {
    heading: "4. Material original y requisitos del organismo receptor",
    intro: [
      "Usted confirma que está facultado para enviarnos el material que aporta y que este es completo y legible. Traducimos el documento que tenemos delante, de modo que una página que falte o un sello ilegible se reflejan en el archivo final.",
      "Confirmar qué exige el organismo receptor es responsabilidad suya, y le ayudamos en lo que podemos. Díganos para quién es la traducción y si piden certificación, notarización, apostilla, una grafía concreta de un nombre o un formato determinado, y trabajaremos conforme a ese requisito. Cuando el requisito no esté claro, preparamos el archivo según el estándar que ese tipo de documento suele exigir.",
    ],
  },
  {
    heading: "5. Propiedad intelectual",
    intro: [
      "El texto, las imágenes y el diseño de este sitio pertenecen a OCT Services o a sus licenciantes. Usted no puede:",
    ],
    items: [
      "Republicar páginas de este sitio como propias.",
      "Usar nuestro nombre o nuestro logotipo para dar a entender una alianza o un respaldo.",
      "Revender o redistribuir material tomado de estas páginas.",
      "Presentar un trabajo nuestro como obra de otro proveedor.",
      "Alterar una traducción entregada o el Certificado de Exactitud de la Traducción emitido con ella.",
    ],
    contact: {
      before: "Para obtener permiso para reproducir material de este sitio, escríbanos a",
      email: "info@octservices.com",
      after: ". Le responderemos por escrito.",
    },
  },
  {
    heading: "6. Limitación de responsabilidad",
    intro: [
      "Respondemos del trabajo que entregamos. Si una traducción contiene un error, díganoslo y lo corregiremos a nuestro cargo. No respondemos de:",
    ],
    items: [
      "Las decisiones que un organismo, un empleador o una institución tome sobre su expediente.",
      "Los retrasos causados por material original incompleto, ilegible o entregado tarde.",
      "Las pérdidas derivadas de un requisito que no se nos comunicó antes de empezar el trabajo.",
      "Las interrupciones de este sitio web o de los servicios de los que depende.",
    ],
    outro: [
      "Nada en estas condiciones limita la responsabilidad que la ley no permite limitar. Más allá de eso, nuestra responsabilidad por un proyecto se limita a los honorarios pagados por él.",
    ],
  },
  {
    heading: "7. Enlaces a otros sitios web",
    intro: [
      "Este sitio enlaza a páginas oficiales, evaluadores de credenciales y otras organizaciones porque son fuentes útiles. No los controlamos, y su contenido, sus condiciones y sus prácticas de privacidad son suyos.",
      "Los requisitos publicados por un organismo receptor deben comprobarse siempre en origen.",
    ],
  },
  {
    heading: "8. Ley aplicable y cambios en estas condiciones",
    intro: [
      "Estas condiciones se rigen por la ley de la jurisdicción en la que OCT Services está establecida, y cualquier disputa corresponde a los tribunales de esa jurisdicción.",
      "Cuando la ley local le otorgue derechos que no puedan excluirse por contrato, esos derechos se mantienen y nada de lo aquí dispuesto los reduce. Los proyectos concretos pueden tener además condiciones acordadas con usted por escrito.",
      "Actualizamos estas condiciones cuando cambian nuestros servicios, nuestros procesos o nuestras obligaciones.",
      "La versión vigente es la publicada en esta página.",
    ],
  },
];

export const legal: LegalDict = {
  /** /terms-and-conditions */
  terms: {
    /** Page-level <head> copy. */
    meta: {
      title: "Condiciones de uso — Global Language Solutions",
    },

    hero: {
      eyebrow: "TÉRMINOS Y CONDICIONES",
      title: "Condiciones de uso",
      lastUpdated: "Actualizado: agosto de 2026",
    },

    /** The paragraphs that open the body, above section 1. */
    intro: [
      "Global Language Solutions es propiedad de OCT Services, que la opera.",
      "Global Language Solutions es una empresa de traducción e interpretación. No ejercemos la abogacía ni prestamos asesoramiento jurídico.",
      "En Global Language Solutions, los documentos que nos envía y las consultas que nos plantea se tratan con cuidado y de forma confidencial.",
      "Estas condiciones establecen la base sobre la que puede usar este sitio web y qué puede esperar cuando pide un presupuesto, envía documentos para traducir o contrata un intérprete. Léalas antes de ponerse en contacto con nosotros.",
    ],

    sections: termsSections,
  },

  /** /404 and the not-found boundary. */
  notFound: {
    meta: {
      title: "Global Language Solutions",
    },
    heading: "404 PÁGINA NO ENCONTRADA",
    lead: "No hemos encontrado esta página en ningún idioma.",
    /** Label on the pill button back to the localised home page. */
    homeLinkLabel: "Volver al inicio",
  },
};
