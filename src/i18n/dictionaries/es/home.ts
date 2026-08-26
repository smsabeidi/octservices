import type { HomeDict } from "../en/home";
import type { Translated } from "./index";

/**
 * home namespace — Spanish.
 *
 * `en/home.ts` is declared `as const`, so its type pins every string to the
 * English literal. `Translated<HomeDict>` keeps the shape — every key, every
 * nesting level and every list length — and relaxes only the literals. See the
 * note in ./index.ts.
 *
 * Structural characters are carried over from the source: the U+2028 LINE
 * SEPARATOR pairs that break headings are written as `\u2028` escapes, the
 * headings the design splits across two elements stay in two keys, and the
 * deliberate trailing spaces are kept.
 *
 * Asset paths stay in the components — they are not copy.
 */
export const home: Translated<HomeDict> = {
  /** Section 00 — full-viewport video hero. */
  hero: {
    intro:
      "Traducciones certificadas e intérpretes para los trámites, solicitudes y acuerdos de los que dependen las personas.",
    /** In-page anchor link down to the services section. */
    servicesLinkLabel: "Nuestros servicios",
    heading: "Traducción para documentos que importan.",
  },

  /** Section 01 — "CONFÍAN EN NOSOTROS" strip above the client logo marquee. */
  trusted: {
    eyebrow: "CONFÍAN EN NOSOTROS",
  },

  /**
   * Section 02 — about statement.
   * One h2 built from three runs: a solid opening, a faded continuation ending
   * in the U+2028 pair, then a faded closing sentence after two `<br/>`s. The
   * first two keys are concatenated in order, so the split falls inside
   * "traducción certificada" the way the English splits "certified translation".
   */
  about: {
    eyebrow: "SOBRE NOSOTROS",
    headingLead: "Global Language Solutions ofrece traducción ",
    headingFaded: "certificada para inmigración, educación y empresa. \u2028\u2028",
    headingFadedClosing:
      "Cada expediente se prepara para la oficina o institución que debe aceptarlo.",
  },

  /** Section 03 — service list with an image per row. */
  services: {
    eyebrow: "NUESTROS SERVICIOS",
    /** Two display lines separated by the source's U+2028 pair. */
    heading: "Traducción y servicios\u2028\u2028lingüísticos con plazos reales.",
    ctaLabel: "Díganos qué necesita traducir",
    items: [
      {
        no: "001",
        title: "Traducción certificada",
        body: "Actas del registro civil y declaraciones juradas para trámites migratorios, con certificado de exactitud firmado.",
      },
      {
        no: "002",
        title: "Expedientes académicos",
        body: "Certificados de notas, diplomas y programas de estudio para evaluadores de credenciales y oficinas de admisiones.",
      },
      {
        no: "003",
        title: "Traducción empresarial",
        body: "Contratos, documentación societaria y políticas a cargo de lingüistas especializados en la materia.",
      },
      {
        no: "004",
        title: "Interpretación",
        body: "Interpretación consecutiva y simultánea, presencial o remota, para audiencias y reuniones.",
      },
    ],
  },

  /** Section 04 — language expertise: heading row, four stats, portrait. */
  expertise: {
    eyebrow: "EXPERIENCIA LINGÜÍSTICA",
    heading: "Traducción certificada, revisada y lista para presentar.",
    /** Right-aligned standfirst opposite the heading. */
    summary: "Lingüistas cualificados, revisión independiente, certificación firmada.",
    stats: [
      {
        value: "1,000+",
        label: "CLIENTES ATENDIDOS",
        copy: "Particulares, familias, estudiantes y empresas que necesitan que sus documentos se acepten entre idiomas y fronteras.",
      },
      {
        value: "40+",
        label: "IDIOMAS CUBIERTOS",
        copy: "Lingüistas cualificados que traducen a su lengua materna, en las combinaciones que más nos piden los clientes.",
      },
      {
        value: "10+",
        label: "Años de experiencia",
        copy: "Trabajo documental para particulares, instituciones y empresas, construido combinación a combinación.",
      },
      {
        value: "100%",
        label: "Revisión independiente",
        copy: "Ninguna traducción sale avalada por un solo lingüista. Un segundo lingüista cualificado la coteja con el original.",
      },
    ],
  },

  /** Section 05 — the four step process. */
  howWeWork: {
    eyebrow: "CÓMO TRABAJAMOS",
    /** Heading breaks across a `<br/>` that is hidden at tablet width. */
    headingLineOne: "Cada traducción sigue",
    headingLineTwo: "los mismos cuatro pasos.",
    ctaLabel: "Envíenos sus documentos",
    steps: [
      {
        title: "Revisión documental",
        body: "Leemos sus documentos, confirmamos qué exige el organismo receptor y acordamos alcance y plazo.",
      },
      {
        title: "Traducción",
        body: "Un lingüista cualificado con la especialidad adecuada traduce a su lengua materna.",
      },
      {
        title: "Revisión independiente",
        body: "Un segundo lingüista coteja la traducción con el original: exactitud, terminología y formato.",
      },
      {
        title: "Entrega y certificación",
        body: "Entregamos en el formato requerido con un Certificado de Exactitud de la Traducción firmado.",
      },
    ],
  },

  /** Section 06 — "QUÉ TRADUCIMOS": four alternating project cards. */
  practiceAreas: {
    eyebrow: "QUÉ TRADUCIMOS",
    heading: "Trabajo lingüístico que debe ser aceptado.",
    ctaLabel: "Ver nuestros servicios",
    items: [
      {
        marker: "01",
        title: "Trámites migratorios",
        tags: ["Actas civiles", "Antecedentes penales", "Declaraciones juradas"],
      },
      {
        marker: "02",
        title: "Expedientes académicos",
        tags: ["Certificados de notas", "Diplomas", "Programas de estudio"],
      },
      {
        marker: "03",
        title: "Empresa y derecho",
        tags: ["Contratos", "Documentación societaria", "Cumplimiento"],
      },
      {
        marker: "04",
        title: "Interpretación",
        tags: ["Consecutiva", "Simultánea", "Remota y presencial"],
      },
    ],
  },

  /** Section 07 — single pull quote beside a portrait. */
  testimonials: {
    eyebrow: "TESTIMONIO",
    /** Two display lines separated by the source's U+2028 pair. */
    heading: "Lo que dicen los clientes\u2028\u2028del expediente terminado.",
    attribution: "ABOGADO DE INMIGRACIÓN",
    quote:
      "“Expedientes completos, todos los sellos y timbres reflejados, certificación firmada. No nos ha vuelto ninguno.”",
    ctaLabel: "Hable con un gestor de proyectos",
  },

  /** Section 08 — accordion of five questions. */
  faq: {
    eyebrow: "PREGUNTAS DE LOS CLIENTES",
    /** Heading breaks across a hard `<br/>`; the trailing space is deliberate. */
    headingLineOne: "Respuestas antes de ",
    headingLineTwo: "enviar un archivo",
    items: [
      {
        question: "¿Qué exigen los organismos receptores?",
        answer:
          "Una traducción completa de todo el documento, con los sellos y timbres reflejados, y una declaración de exactitud firmada por el traductor.",
      },
      {
        question: "¿Qué incluye la certificación?",
        answer:
          "Cada traducción lleva un Certificado de Exactitud de la Traducción, firmado y fechado, y gestionamos notarización y apostilla cuando un organismo las pide.",
      },
      {
        question: "¿Cómo se fijan el precio y el plazo?",
        answer:
          "Primero leemos los documentos y luego confirmamos por escrito un precio cerrado y una fecha de entrega. Las actas breves suelen estar listas en pocos días.",
      },
      {
        question: "¿Cómo se protege la confidencialidad?",
        answer:
          "Solo ven los archivos los lingüistas asignados a su proyecto, cada uno con un acuerdo de confidencialidad. Es lo normal, no un extra.",
      },
      {
        question: "¿Realizan evaluaciones de credenciales?",
        answer:
          "No. Eso lo hacen evaluadores como los miembros de NACES, que exigen una traducción certificada al inglés de cada expediente. Esa parte la aportamos nosotros.",
      },
    ],
  },
};
