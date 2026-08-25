import type { AboutDict } from "../en/about";

/**
 * about namespace — French.
 *
 * Same seven sections and the same key structure as the English source, in the
 * order the page renders them: meta -> hero -> mission -> founder -> services ->
 * team -> process -> career.
 *
 * List entries are paired with images and routes by position, so the order of
 * `services.items`, `team.members`, `process.steps` and `career.jobs` matches
 * the English source exactly. `\u2028` is U+2028 LINE SEPARATOR and `\u00A0` a
 * non-breaking space; both are written as escapes because the literals are
 * invisible. The trailing spaces on `mission.headingLead` and
 * `process.headingLineOne` are deliberate: the markup concatenates each pair.
 */
export const about: AboutDict = {
  /** Page-level <head> copy. The "\n " is verbatim from the English source. */
  meta: {
    title: "OCT Services",
    description:
      "Les personnes, la méthode et l’exigence derrière chaque traduction livrée par OCT Services.\n Découvrez le parcours d’un document, du devis au certificat signé.",
  },

  hero: {
    eyebrow: "À PROPOS",
    heading: "Votre partenaire pour des traductions exactes et acceptées",
    lead: "Nous traduisons pour les demandeurs, étudiants, avocats et entreprises, dans les combinaisons dont ils ont besoin.",
  },

  mission: {
    eyebrow: "NOTRE MISSION",
    /** One sentence in two tints: the lead is solid, the rest is 50%. */
    headingLead: "Notre mission est ",
    headingRest:
      "de lever l’obstacle de la langue, pour que chaque dossier, chaque demande et chaque accord soit compris exactement tel qu’il est rédigé.",
  },

  founder: {
    eyebrow: "NOTRE IDÉE FONDATRICE",
    heading: "Une exigence détermine tout.",
    standard: {
      eyebrow: "L’EXIGENCE QUI NOUS GUIDE",
      /** The two paragraphs are separated by a double <br /> in the markup. */
      paragraphOne: "Chaque document a une destination.",
      paragraphTwo:
        "Nous partons de ce que l’organisme destinataire acceptera, et construisons chaque projet autour de cette exigence.",
    },
    /** Rendered on either side of the vertical rule, in this order. */
    metrics: [
      { value: "1\u00A0000+", label: "CLIENTS SERVIS" },
      { value: "40+", label: "Langues couvertes" },
    ],
  },

  services: {
    eyebrow: "NOS SERVICES",
    /* the clauses are separated by two U+2028 line separators, as in English */
    heading: "Ce que nous traduisons,\u2028\u2028et ce que vous recevez.",
    cta: "Parlons de vos documents",
    /** Order matches the image list in the Services component. */
    items: [
      {
        number: "001",
        title: "Traduction certifiée",
        body: "Naissance, mariage, casier judiciaire\u00A0: des actes préparés selon les exigences de dépôt applicables.",
      },
      {
        number: "002",
        title: "Documents académiques",
        body: "Diplômes, relevés de notes et programmes, traduits littéralement pour que l’organisme d’évaluation puisse juger.",
      },
      {
        number: "003",
        title: "Traduction d’entreprise",
        body: "Contrats, états financiers et documents de conformité, tenus cohérents par un glossaire client.",
      },
      {
        number: "004",
        title: "Interprétation",
        body: "Des interprètes pour vos rendez-vous, audiences et réunions, sur place ou par liaison à distance.",
      },
    ],
  },

  team: {
    eyebrow: "NOTRE ÉQUIPE",
    /** Desktop and phone show `heading`; the tablet step shows `headingTablet`. */
    heading: "Notre équipe",
    headingTablet: "Les personnes derrière chaque traduction.",
    /** Order matches the portrait list in the Team component. */
    members: [
      {
        name: "Chef de projet",
        role: "Périmètre, délais et exigences de dépôt",
      },
      {
        name: "Traducteur senior",
        role: "Traduction vers la langue maternelle, par domaine",
      },
      {
        name: "Réviseur indépendant",
        role: "Vérifie chaque traduction sur son document source",
      },
      {
        name: "Terminologue",
        role: "Glossaires, guides de style et mémoires de traduction",
      },
      {
        name: "Interprète",
        role: "Consécutive et simultanée, sur place et à distance",
      },
      {
        name: "Coordinateur client",
        role: "Devis, confidentialité et gestion des documents",
      },
    ],
  },

  process: {
    eyebrow: "NOTRE MÉTHODE",
    /** Desktop and phone keep the manual line break between these two halves. */
    headingLineOne: "Une méthode construite autour ",
    headingLineTwo: "de ce qui est accepté.",
    /** The tablet step sets the same sentence on one line. */
    headingTablet: "Une méthode construite autour de ce qui est accepté.",
    cta: "Demander un devis",
    steps: [
      {
        title: "Examen des documents",
        body: "Nous examinons les fichiers source, vérifions à qui le dossier est destiné et chiffrons un périmètre et une date fermes.",
      },
      {
        title: "Traduction",
        body: "Le travail est confié à un linguiste qui traduit vers sa propre langue et connaît le domaine.",
      },
      {
        title: "Révision indépendante",
        body: "Un réviseur lit la traduction en regard du document source et contrôle noms, chiffres, terminologie et mise en page.",
      },
      {
        title: "Livraison et certification",
        body: "Les fichiers arrivent au format demandé, avec le certificat d’exactitude signé et daté.",
      },
    ],
  },

  career: {
    eyebrow: "CARRIÈRES",
    heading: "Rejoignez-nous",
    intro:
      "Rejoignez OCT Services, une équipe de linguistes et de coordinateurs au service de documents que des personnes et des institutions attendent.",
    /** Shared by every opening in the list. */
    employmentType: "Temps plein",
    location: "À distance",
    cta: "Voir le poste",
    /** Order matches the job route list in the Career component. */
    jobs: [
      { title: "Chef de projet" },
      { title: "Traducteur senior" },
      { title: "Réviseur qualité" },
    ],
  },
};
