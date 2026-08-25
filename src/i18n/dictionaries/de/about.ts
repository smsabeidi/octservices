/**
 * about namespace — German.
 *
 * Mirrors en/about.ts key for key, in the order the page renders:
 *   meta -> hero -> mission -> founder -> services -> team -> process -> career
 *
 * Image paths, route slugs and external URLs stay in the components. The list
 * entries below are paired with them by position, so the order of
 * `services.items`, `team.members`, `process.steps` and `career.jobs` is the
 * same as in the English source.
 */
export const about = {
  /** Page-level <head> copy. */
  meta: {
    title: "OCT Services",
    description:
      "Die Menschen, der Prozess und der Anspruch hinter jeder Übersetzung von OCT Services.\n Lesen Sie, wie ein Dokument vom Angebot bis zur unterzeichneten Bestätigung läuft.",
  },

  hero: {
    eyebrow: "ÜBER UNS",
    heading: "Ihr Partner für korrekte und anerkannte Übersetzungen",
    lead: "Wir übersetzen für Antragsteller, Studierende, Anwälte und Unternehmen, in den Sprachpaaren, die sie brauchen.",
  },

  mission: {
    eyebrow: "UNSERE MISSION",
    /** One sentence in two tints: the lead is solid, the rest is 50%. */
    headingLead: "Unsere Mission ist es, ",
    headingRest:
      "Sprache als Hindernis zu beseitigen, damit jeder Antrag, jede Bewerbung und jeder Vertrag genau so verstanden wird, wie er geschrieben steht.",
  },

  founder: {
    eyebrow: "UNSERE GRÜNDUNGSIDEE",
    heading: "Eine Anforderung prägt alles.",
    standard: {
      eyebrow: "WORAN WIR UNS MESSEN",
      /** The two paragraphs are separated by a double <br /> in the markup. */
      paragraphOne: "Jedes Dokument hat ein Ziel.",
      paragraphTwo:
        "Wir denken von dem her, was die empfangende Stelle annimmt, und bauen jedes Projekt darauf auf.",
    },
    /** Rendered on either side of the vertical rule, in this order. */
    metrics: [
      { value: "1.000+", label: "BETREUTE KUNDEN" },
      { value: "40+", label: "Abgedeckte Sprachen" },
    ],
  },

  services: {
    eyebrow: "UNSERE LEISTUNGEN",
    /* the source copy separates the clauses with two U+2028 line separators */
    heading: "Was wir übersetzen,\u2028\u2028und was Sie erhalten.",
    cta: "Sprechen Sie mit uns über Ihre Unterlagen",
    /** Order matches the image list in the Services component. */
    items: [
      {
        number: "001",
        title: "Beglaubigte Übersetzung",
        body: "Geburts- und Heiratsurkunden sowie Führungszeugnisse, aufbereitet nach den geltenden Einreichungsanforderungen.",
      },
      {
        number: "002",
        title: "Bildungsnachweise",
        body: "Abschlusszeugnisse, Notenübersichten und Modulbeschreibungen, wörtlich übersetzt zur Bewertung.",
      },
      {
        number: "003",
        title: "Wirtschaftsübersetzung",
        body: "Verträge, Jahresabschlüsse und Compliance-Material, konsistent gehalten durch ein Kundenglossar.",
      },
      {
        number: "004",
        title: "Dolmetschen",
        body: "Dolmetscher für Termine, Anhörungen und Besprechungen, vor Ort oder per Videoverbindung.",
      },
    ],
  },

  team: {
    eyebrow: "UNSER TEAM",
    /** Desktop and phone show `heading`; the tablet step shows `headingTablet`. */
    heading: "Lernen Sie uns kennen",
    headingTablet: "Die Menschen hinter jeder Übersetzung.",
    /** Order matches the portrait list in the Team component. */
    members: [
      {
        name: "Projektmanager",
        role: "Umfang, Fristen und Einreichungsanforderungen",
      },
      {
        name: "Senior-Übersetzer",
        role: "Übersetzung in die Muttersprache, nach Fachgebiet",
      },
      {
        name: "Unabhängiger Revisor",
        role: "Prüft jede Übersetzung gegen ihr Ausgangsdokument",
      },
      {
        name: "Terminologe",
        role: "Glossare, Styleguides und Translation Memory",
      },
      {
        name: "Dolmetscher",
        role: "Konsekutiv und simultan, vor Ort und remote",
      },
      {
        name: "Kundenbetreuung",
        role: "Angebote, Vertraulichkeit und Dokumentenverwaltung",
      },
    ],
  },

  process: {
    eyebrow: "SO ARBEITEN WIR",
    /** Desktop and phone keep the manual line break between these two halves. */
    headingLineOne: "Ein Prozess, ausgerichtet auf ",
    headingLineTwo: "das, was angenommen wird.",
    /** The tablet step sets the same sentence on one line. */
    headingTablet: "Ein Prozess, ausgerichtet auf das, was angenommen wird.",
    cta: "Angebot anfordern",
    steps: [
      {
        title: "Dokumentenprüfung",
        body: "Wir sehen die Ausgangsdateien durch, klären, an wen sie gehen, und nennen festen Umfang und Termin.",
      },
      {
        title: "Übersetzung",
        body: "Die Arbeit geht an einen Übersetzer, der in seine eigene Sprache arbeitet und das Fach kennt.",
      },
      {
        title: "Unabhängige Revision",
        body: "Ein Revisor liest die Übersetzung neben dem Original und prüft Namen, Zahlen, Terminologie und Layout.",
      },
      {
        title: "Lieferung und Bestätigung",
        body: "Die Dateien kommen im gewünschten Format, mit unterzeichneter und datierter Richtigkeitsbestätigung.",
      },
    ],
  },

  career: {
    eyebrow: "KARRIERE",
    heading: "Kommen Sie zu uns",
    intro:
      "Kommen Sie zu OCT Services, einem Team aus Übersetzern und Koordinatoren, das Unterlagen bearbeitet, auf die Menschen und Behörden warten.",
    /** Shared by every opening in the list. */
    employmentType: "Vollzeit",
    location: "Remote",
    cta: "Stelle ansehen",
    /** Order matches the job route list in the Career component. */
    jobs: [
      { title: "Projektmanager" },
      { title: "Senior-Übersetzer" },
      { title: "Qualitätsprüfer" },
    ],
  },
};
