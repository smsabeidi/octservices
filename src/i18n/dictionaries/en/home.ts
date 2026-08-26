/**
 * home namespace — English source of truth.
 *
 * Every string rendered by the nine sections of the home page lives here,
 * grouped by section in the order the page renders them. Copy is verbatim from
 * the cloned markup: the U+2028 LINE SEPARATOR pairs that Framer used to break
 * headings are kept as `\u2028` escapes, and headings that the design splits
 * across two elements (a solid run followed by a faded one, or two lines around
 * a `<br/>`) are kept as separate keys so translators can re-break them without
 * touching the markup.
 *
 * Asset paths (images, video, logos) deliberately stay in the components —
 * they are not copy and must not drift per language.
 */
export const home = {
  /** Section 00 — full-viewport video hero. */
  hero: {
    intro:
      "Certified translations and interpreters for the filings, applications and agreements people depend on.",
    /** In-page anchor link down to the services section. */
    servicesLinkLabel: "Our services",
    heading: "Translation for documents that matter.",
  },

  /** Section 01 — "TRUSTED BY" strip above the client logo marquee. */
  trusted: {
    eyebrow: "TRUSTED BY",
  },

  /**
   * Section 02 — about statement.
   * The heading is one h2 built from three runs: a solid opening, a faded
   * continuation ending in the U+2028 pair, then a faded closing sentence
   * after two `<br/>`s.
   */
  about: {
    eyebrow: "ABOUT US",
    headingLead: "Global Language Solutions provides certified ",
    headingFaded: "translation for immigration, education and business. \u2028\u2028",
    headingFadedClosing:
      "Every file is prepared for the office or institution that has to accept it.",
  },

  /** Section 03 — service list with an image per row. */
  services: {
    eyebrow: "OUR SERVICES",
    /** Two display lines separated by the source's U+2028 pair. */
    heading: "Translation and language\u2028\u2028services for real deadlines.",
    ctaLabel: "Tell us what you need translated",
    items: [
      {
        no: "001",
        title: "Certified Translation",
        body: "Civil records and affidavits for immigration filings, with a signed certificate of accuracy.",
      },
      {
        no: "002",
        title: "Academic Records",
        body: "Transcripts, diplomas and syllabi prepared for credential evaluators and admissions offices.",
      },
      {
        no: "003",
        title: "Business Translation",
        body: "Contracts, corporate records and policies handled by linguists with subject matter background.",
      },
      {
        no: "004",
        title: "Interpreting",
        body: "Consecutive and simultaneous interpreting, on site or remote, for hearings and meetings.",
      },
    ],
  },

  /** Section 04 — language expertise: heading row, four stats, portrait. */
  expertise: {
    eyebrow: "LANGUAGE EXPERTISE",
    heading: "Certified translation, revised and ready to file.",
    /** Right-aligned standfirst opposite the heading. */
    summary: "Qualified linguists, independent revision, signed certification.",
    stats: [
      {
        value: "1,000+",
        label: "CLIENTS SUPPORTED",
        copy: "Individuals, families, students and companies who need their documents accepted across languages and borders.",
      },
      {
        value: "40+",
        label: "LANGUAGES COVERED",
        copy: "Qualified linguists translating into their native language, across the pairs our clients most often need.",
      },
      {
        value: "10+",
        label: "Years of Practice",
        copy: "Document work for private clients, institutions and companies, built up one language pair at a time.",
      },
      {
        value: "100%",
        label: "Independent Revision",
        copy: "No translation leaves on one linguist’s word. A second qualified linguist checks it against the source.",
      },
    ],
  },

  /** Section 05 — the four step process. */
  howWeWork: {
    eyebrow: "HOW WE WORK",
    /** Heading breaks across a `<br/>` that is hidden at tablet width. */
    headingLineOne: "Every translation follows",
    headingLineTwo: "the same four steps.",
    ctaLabel: "Send us your documents",
    steps: [
      {
        title: "Document Review",
        body: "We read your documents, confirm what the receiving authority requires, and agree scope and deadline.",
      },
      {
        title: "Translation",
        body: "A qualified linguist with the right subject background translates into their native language.",
      },
      {
        title: "Independent Revision",
        body: "A second linguist checks the translation against the source for accuracy, terminology and format.",
      },
      {
        title: "Delivery and Certification",
        body: "We deliver in the required format with a signed Certificate of Translation Accuracy.",
      },
    ],
  },

  /** Section 06 — "WHAT WE TRANSLATE": four alternating project cards. */
  practiceAreas: {
    eyebrow: "WHAT WE TRANSLATE",
    heading: "Language work that has to be accepted.",
    ctaLabel: "Explore our services",
    items: [
      {
        marker: "01",
        title: "Immigration Filings",
        tags: ["Civil Records", "Police Records", "Affidavits"],
      },
      {
        marker: "02",
        title: "Academic Records",
        tags: ["Transcripts", "Diplomas", "Course Descriptions"],
      },
      {
        marker: "03",
        title: "Business & Legal",
        tags: ["Contracts", "Corporate Records", "Compliance"],
      },
      {
        marker: "04",
        title: "Interpreting",
        tags: ["Consecutive", "Simultaneous", "Remote & On Site"],
      },
    ],
  },

  /** Section 07 — single pull quote beside a portrait. */
  testimonials: {
    eyebrow: "TESTIMONIAL",
    /** Two display lines separated by the source's U+2028 pair. */
    heading: "What clients say about\u2028\u2028the finished file.",
    attribution: "IMMIGRATION ATTORNEY",
    quote:
      "“Complete files, every seal and stamp accounted for, certification signed. Nothing has come back to us.”",
    ctaLabel: "Speak to a project manager",
  },

  /** Section 08 — accordion of five questions. */
  faq: {
    eyebrow: "QUESTIONS CLIENTS ASK",
    /** Heading breaks across a hard `<br/>`; the trailing space is deliberate. */
    headingLineOne: "Answers before ",
    headingLineTwo: "you send a file",
    items: [
      {
        question: "What do receiving authorities require?",
        answer:
          "A complete translation of the whole document, with seals and stamps represented, and a signed statement of accuracy from the translator.",
      },
      {
        question: "What does certification include?",
        answer:
          "Each translation carries a Certificate of Translation Accuracy, signed and dated, plus notarisation and apostille support where a body asks for it.",
      },
      {
        question: "How are cost and turnaround set?",
        answer:
          "We read the documents first, then confirm a fixed price and a delivery date in writing. Most short civil records are ready within a few days.",
      },
      {
        question: "How are my documents kept confidential?",
        answer:
          "Files are seen only by the linguists assigned to your project, each under a non disclosure agreement. Confidentiality is standard, not an extra.",
      },
      {
        question: "Do you carry out credential evaluations?",
        answer:
          "No. Evaluators such as NACES members do that, and they require a certified English translation of each transcript. That is the part we provide.",
      },
    ],
  },
} as const;

export type HomeDict = typeof home;
