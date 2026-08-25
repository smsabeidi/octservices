import type { AboutDict } from "../en/about";

/**
 * about namespace — Spanish.
 *
 * Mirrors en/about.ts key for key, section by section:
 *   meta → hero → mission → founder → services → team → process → career
 *
 * Image paths, route slugs and external URLs stay in the components, and the
 * list entries below are paired with them by position, so the order of
 * `services.items`, `team.members`, `process.steps` and `career.jobs` is the
 * order of the English source.
 */
export const about: AboutDict = {
  /** Page-level <head> copy. */
  meta: {
    title: "OCT Services",
    description:
      "Las personas, el proceso y el estándar que hay detrás de cada traducción de OCT Services.\n Vea cómo pasa un documento del presupuesto al certificado firmado.",
  },

  hero: {
    eyebrow: "SOBRE NOSOTROS",
    heading: "Su aliado para traducciones exactas y aceptadas",
    lead: "Traducimos para solicitantes, estudiantes, abogados y empresas, en las combinaciones que necesitan.",
  },

  mission: {
    eyebrow: "NUESTRA MISIÓN",
    /** One sentence in two tints: the lead is solid, the rest is 50%. */
    headingLead: "Nuestra misión es ",
    headingRest:
      "eliminar el idioma como obstáculo, para que cada trámite, solicitud y acuerdo se entienda exactamente como está escrito.",
  },

  founder: {
    eyebrow: "NUESTRA IDEA FUNDACIONAL",
    heading: "Un requisito lo determina todo.",
    standard: {
      eyebrow: "EL ESTÁNDAR QUE APLICAMOS",
      /** The two paragraphs are separated by a double <br /> in the markup. */
      paragraphOne: "Todo documento tiene un destino.",
      paragraphTwo:
        "Partimos de lo que aceptará el organismo receptor y construimos cada proyecto en torno a ello.",
    },
    /** Rendered on either side of the vertical rule, in this order. */
    metrics: [
      { value: "1,000+", label: "CLIENTES ATENDIDOS" },
      { value: "40+", label: "Idiomas cubiertos" },
    ],
  },

  services: {
    eyebrow: "NUESTROS SERVICIOS",
    /* the clauses are separated by two U+2028 line separators, as in the source */
    heading: "Qué traducimos,\u2028\u2028y qué recibe usted.",
    cta: "Hablemos de sus documentos",
    /** Order matches the image list in the Services component. */
    items: [
      {
        number: "001",
        title: "Traducción certificada",
        body: "Actas de nacimiento, matrimonio y antecedentes penales, preparadas según los requisitos que apliquen.",
      },
      {
        number: "002",
        title: "Expedientes académicos",
        body: "Títulos, certificados de notas y programas, traducidos literalmente para que los valore el evaluador.",
      },
      {
        number: "003",
        title: "Traducción empresarial",
        body: "Acuerdos, estados financieros y material de cumplimiento, unificados por un glosario de cliente.",
      },
      {
        number: "004",
        title: "Interpretación",
        body: "Intérpretes para citas, audiencias y reuniones, presenciales o por conexión remota.",
      },
    ],
  },

  team: {
    eyebrow: "NUESTRO EQUIPO",
    /** Desktop and phone show `heading`; the tablet step shows `headingTablet`. */
    heading: "Conozca al equipo",
    headingTablet: "Las personas detrás de cada traducción.",
    /** Order matches the portrait list in the Team component. */
    members: [
      {
        name: "Gestor de proyectos",
        role: "Alcance, plazos y requisitos de presentación",
      },
      {
        name: "Traductor sénior",
        role: "Traducción a lengua materna, por especialidad",
      },
      {
        name: "Revisor independiente",
        role: "Coteja cada traducción con su documento original",
      },
      {
        name: "Terminólogo",
        role: "Glosarios, guías de estilo y memorias de traducción",
      },
      {
        name: "Intérprete",
        role: "Consecutiva y simultánea, presencial y remota",
      },
      {
        name: "Coordinador de clientes",
        role: "Presupuestos, confidencialidad y gestión documental",
      },
    ],
  },

  process: {
    eyebrow: "CÓMO TRABAJAMOS",
    /** Desktop and phone keep the manual line break between these two halves. */
    headingLineOne: "Un proceso diseñado según ",
    headingLineTwo: "lo que se acepta.",
    /** The tablet step sets the same sentence on one line. */
    headingTablet: "Un proceso diseñado según lo que se acepta.",
    cta: "Pedir presupuesto",
    steps: [
      {
        title: "Revisión documental",
        body: "Vemos los originales, comprobamos a quién va dirigido el expediente y presupuestamos alcance y fecha cerrados.",
      },
      {
        title: "Traducción",
        body: "El trabajo va a un lingüista que traduce a su propia lengua y conoce la materia.",
      },
      {
        title: "Revisión independiente",
        body: "Un revisor lee la traducción junto al original y comprueba nombres, cifras, terminología y formato.",
      },
      {
        title: "Entrega y certificación",
        body: "Los archivos llegan en el formato solicitado, con el certificado de exactitud firmado y fechado.",
      },
    ],
  },

  career: {
    eyebrow: "EMPLEO",
    heading: "Únase al equipo",
    intro:
      "Únase a OCT Services, un equipo de lingüistas y coordinadores que trata documentos que personas e instituciones están esperando.",
    /** Shared by every opening in the list. */
    employmentType: "Tiempo completo",
    location: "Remoto",
    cta: "Ver puesto",
    /** Order matches the job route list in the Career component. */
    jobs: [
      { title: "Gestor de proyectos" },
      { title: "Traductor sénior" },
      { title: "Revisor de calidad" },
    ],
  },
};
