/**
 * home namespace — French.
 *
 * Same nine sections, same key structure and same array lengths as the English
 * source. Structural characters are preserved: the U+2028 LINE SEPARATOR pairs
 * that break the display headings are kept as `\u2028` escapes, and the split
 * headings (`headingLead` + `headingFaded`, `headingLineOne` + `headingLineTwo`)
 * keep their trailing spaces so the two halves still read as one sentence when
 * the markup concatenates them.
 *
 * `\u00A0` is a non-breaking space, required in French before `: ; ? !` and
 * inside guillemets. Written as an escape because the literal is invisible.
 *
 * Asset paths stay in the components, exactly as in English.
 */
export const home = {
  /** Section 00 — full-viewport video hero. */
  hero: {
    intro:
      "Traductions certifiées et interprètes pour les dossiers, demandes et accords dont dépendent nos clients.",
    /** In-page anchor link down to the services section. */
    servicesLinkLabel: "Nos services",
    heading: "La traduction des documents qui comptent.",
  },

  /** Section 01 — "ILS NOUS FONT CONFIANCE" strip above the client logo marquee. */
  trusted: {
    eyebrow: "ILS NOUS FONT CONFIANCE",
  },

  /**
   * Section 02 — about statement.
   * One h2 in three runs: solid opening, faded continuation ending in the
   * U+2028 pair, then the faded closing sentence.
   */
  about: {
    eyebrow: "À PROPOS",
    headingLead: "Global Language Solutions assure la traduction ",
    headingFaded: "certifiée pour l’immigration, les études et l’entreprise. \u2028\u2028",
    headingFadedClosing:
      "Chaque dossier est préparé pour l’organisme ou l’institution qui doit l’accepter.",
  },

  /** Section 03 — service list with an image per row. */
  services: {
    eyebrow: "NOS SERVICES",
    /** Two display lines separated by the U+2028 pair. */
    heading: "Traduction et services linguistiques\u2028\u2028pour de vraies échéances.",
    ctaLabel: "Dites-nous ce que vous devez traduire",
    items: [
      {
        no: "001",
        title: "Traduction certifiée",
        body: "Actes d’état civil et déclarations sous serment pour les dossiers d’immigration, avec certificat d’exactitude signé.",
      },
      {
        no: "002",
        title: "Documents académiques",
        body: "Relevés de notes, diplômes et programmes préparés pour les organismes d’évaluation et les services d’admission.",
      },
      {
        no: "003",
        title: "Traduction d’entreprise",
        body: "Contrats, documents de société et politiques internes, confiés à des linguistes spécialistes du domaine.",
      },
      {
        no: "004",
        title: "Interprétation",
        body: "Interprétation consécutive et simultanée, sur place ou à distance, pour audiences et réunions.",
      },
    ],
  },

  /** Section 04 — language expertise: heading row, four stats, portrait. */
  expertise: {
    eyebrow: "EXPERTISE LINGUISTIQUE",
    heading: "Traduction certifiée, révisée et prête à déposer.",
    /** Right-aligned standfirst opposite the heading. */
    summary: "Linguistes qualifiés, révision indépendante, certification signée.",
    stats: [
      {
        value: "1\u00A0000+",
        label: "CLIENTS ACCOMPAGNÉS",
        copy: "Particuliers, familles, étudiants et entreprises dont les documents doivent être acceptés d’une langue et d’un pays à l’autre.",
      },
      {
        value: "40+",
        label: "LANGUES COUVERTES",
        copy: "Des linguistes qualifiés traduisant vers leur langue maternelle, dans les combinaisons les plus demandées.",
      },
      {
        value: "10+",
        label: "Années de pratique",
        copy: "Traitement de documents pour particuliers, institutions et entreprises, une combinaison de langues à la fois.",
      },
      {
        value: "100\u00A0%",
        label: "Révision indépendante",
        copy: "Aucune traduction ne part sur la seule parole d’un linguiste. Un second linguiste qualifié la vérifie sur le document source.",
      },
    ],
  },

  /** Section 05 — the four step process. */
  howWeWork: {
    eyebrow: "NOTRE MÉTHODE",
    /** Heading breaks across a `<br/>` that is hidden at tablet width. */
    headingLineOne: "Chaque traduction suit",
    headingLineTwo: "les quatre mêmes étapes.",
    ctaLabel: "Envoyez-nous vos documents",
    steps: [
      {
        title: "Examen des documents",
        body: "Nous lisons vos documents, vérifions les exigences de l’organisme destinataire et fixons le périmètre et le délai.",
      },
      {
        title: "Traduction",
        body: "Un linguiste qualifié, spécialiste du domaine, traduit vers sa langue maternelle.",
      },
      {
        title: "Révision indépendante",
        body: "Un second linguiste compare la traduction au document source\u00A0: exactitude, terminologie et mise en forme.",
      },
      {
        title: "Livraison et certification",
        body: "Nous livrons au format demandé, avec un certificat d’exactitude de la traduction signé.",
      },
    ],
  },

  /** Section 06 — "CE QUE NOUS TRADUISONS": four alternating project cards. */
  practiceAreas: {
    eyebrow: "CE QUE NOUS TRADUISONS",
    heading: "Un travail linguistique qui doit être accepté.",
    ctaLabel: "Découvrir nos services",
    items: [
      {
        marker: "01",
        title: "Dossiers d’immigration",
        tags: ["Actes d’état civil", "Casier judiciaire", "Déclarations sous serment"],
      },
      {
        marker: "02",
        title: "Documents académiques",
        tags: ["Relevés de notes", "Diplômes", "Descriptifs de cours"],
      },
      {
        marker: "03",
        title: "Entreprise & droit",
        tags: ["Contrats", "Documents de société", "Conformité"],
      },
      {
        marker: "04",
        title: "Interprétation",
        tags: ["Consécutive", "Simultanée", "À distance & sur place"],
      },
    ],
  },

  /** Section 07 — single pull quote beside a portrait. */
  testimonials: {
    eyebrow: "TÉMOIGNAGE",
    /** Two display lines separated by the U+2028 pair. */
    heading: "Ce que nos clients disent\u2028\u2028du dossier livré.",
    attribution: "AVOCAT EN IMMIGRATION",
    quote:
      "«\u00A0Des dossiers complets, chaque sceau et chaque tampon pris en compte, la certification signée. Rien ne nous est revenu.\u00A0»",
    ctaLabel: "Parler à un chef de projet",
  },

  /** Section 08 — accordion of five questions. */
  faq: {
    eyebrow: "QUESTIONS DE NOS CLIENTS",
    /** Heading breaks across a hard `<br/>`; the trailing space is deliberate. */
    headingLineOne: "Des réponses avant ",
    headingLineTwo: "d’envoyer un dossier",
    items: [
      {
        question: "Qu’exigent les organismes destinataires\u00A0?",
        answer:
          "Une traduction complète de l’intégralité du document, sceaux et tampons restitués, accompagnée d’une déclaration d’exactitude signée par le traducteur.",
      },
      {
        question: "Que comprend la certification\u00A0?",
        answer:
          "Chaque traduction porte un certificat d’exactitude, signé et daté, avec prise en charge de la légalisation notariale et de l’apostille lorsqu’un organisme les demande.",
      },
      {
        question: "Comment sont fixés le prix et le délai\u00A0?",
        answer:
          "Nous lisons d’abord les documents, puis confirmons par écrit un prix ferme et une date de livraison. La plupart des actes d’état civil courts sont prêts en quelques jours.",
      },
      {
        question: "Comment mes documents restent-ils confidentiels\u00A0?",
        answer:
          "Vos fichiers ne sont vus que par les linguistes affectés à votre projet, tous liés par un accord de confidentialité. La confidentialité est la règle, pas une option.",
      },
      {
        question: "Réalisez-vous des évaluations de diplômes\u00A0?",
        answer:
          "Non. Ce travail revient aux organismes d’évaluation, comme les membres de NACES, qui exigent une traduction certifiée en anglais de chaque relevé. C’est cette partie que nous assurons.",
      },
    ],
  },
} as const;
