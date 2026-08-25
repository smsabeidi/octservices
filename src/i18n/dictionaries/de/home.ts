/**
 * home namespace — German.
 *
 * Mirrors en/home.ts key for key and section for section, `as const` included.
 * The U+2028 LINE SEPARATOR pairs that break the display headings are kept as
 * `\u2028` escapes at the point the German sentence breaks naturally, and the
 * headings the design splits across two elements (a solid run followed by a
 * faded one, or two lines around a `<br/>`) are re-broken in German so the
 * halves still read as one sentence when concatenated in order.
 *
 * Asset paths stay in the components — they are not copy.
 */
export const home = {
  /** Section 00 — full-viewport video hero. */
  hero: {
    intro:
      "Beglaubigte Übersetzungen und Dolmetscher für Anträge, Bewerbungen und Verträge, auf die Menschen angewiesen sind.",
    /** In-page anchor link down to the services section. */
    servicesLinkLabel: "Unsere Leistungen",
    heading: "Übersetzungen für Dokumente, die zählen.",
  },

  /** Section 01 — client logo marquee strip. */
  trusted: {
    eyebrow: "UNSERE KUNDEN",
  },

  /**
   * Section 02 — about statement.
   * One h2 built from three runs: a solid opening, a faded continuation ending
   * in the U+2028 pair, then a faded closing sentence after two `<br/>`s.
   */
  about: {
    eyebrow: "ÜBER UNS",
    headingLead: "OCT Services erstellt beglaubigte ",
    headingFaded: "Übersetzungen für Einwanderung, Bildung und Wirtschaft. \u2028\u2028",
    headingFadedClosing:
      "Jedes Dokument wird für die Behörde oder Institution vorbereitet, die es annehmen muss.",
  },

  /** Section 03 — service list with an image per row. */
  services: {
    eyebrow: "UNSERE LEISTUNGEN",
    /** Two display lines separated by the source's U+2028 pair. */
    heading: "Übersetzung und Sprachdienste\u2028\u2028für Fristen, die feststehen.",
    ctaLabel: "Sagen Sie uns, was übersetzt werden soll",
    items: [
      {
        no: "001",
        title: "Beglaubigte Übersetzung",
        body: "Personenstandsurkunden und eidesstattliche Versicherungen für Einwanderungsanträge, mit unterzeichneter Richtigkeitsbestätigung.",
      },
      {
        no: "002",
        title: "Bildungsnachweise",
        body: "Notenspiegel, Diplome und Modulbeschreibungen für Zeugnisbewertungsstellen und Zulassungsstellen.",
      },
      {
        no: "003",
        title: "Wirtschaftsübersetzung",
        body: "Verträge, Unternehmensunterlagen und Richtlinien, bearbeitet von Übersetzern mit Fachhintergrund.",
      },
      {
        no: "004",
        title: "Dolmetschen",
        body: "Konsekutiv- und Simultandolmetschen, vor Ort oder remote, für Anhörungen und Termine.",
      },
    ],
  },

  /** Section 04 — language expertise: heading row, four stats, portrait. */
  expertise: {
    eyebrow: "SPRACHKOMPETENZ",
    heading: "Beglaubigte Übersetzungen, revidiert und einreichfertig.",
    /** Right-aligned standfirst opposite the heading. */
    summary: "Qualifizierte Übersetzer, unabhängige Revision, unterzeichnete Bestätigung.",
    stats: [
      {
        value: "1.000+",
        label: "BETREUTE KUNDEN",
        copy: "Privatpersonen, Familien, Studierende und Unternehmen, deren Unterlagen über Sprachen und Grenzen hinweg anerkannt werden müssen.",
      },
      {
        value: "40+",
        label: "ABGEDECKTE SPRACHEN",
        copy: "Qualifizierte Übersetzer, die in ihre Muttersprache arbeiten, in den Sprachpaaren, die unsere Kunden am häufigsten brauchen.",
      },
      {
        value: "10+",
        label: "Jahre Praxis",
        copy: "Dokumentenarbeit für Privatkunden, Institutionen und Unternehmen, Sprachpaar für Sprachpaar aufgebaut.",
      },
      {
        value: "100%",
        label: "Unabhängige Revision",
        copy: "Keine Übersetzung verlässt uns ungeprüft. Ein zweiter qualifizierter Übersetzer gleicht sie mit dem Original ab.",
      },
    ],
  },

  /** Section 05 — the four step process. */
  howWeWork: {
    eyebrow: "SO ARBEITEN WIR",
    /** Heading breaks across a `<br/>` that is hidden at tablet width. */
    headingLineOne: "Jede Übersetzung durchläuft",
    headingLineTwo: "dieselben vier Schritte.",
    ctaLabel: "Senden Sie uns Ihre Unterlagen",
    steps: [
      {
        title: "Dokumentenprüfung",
        body: "Wir lesen Ihre Unterlagen, klären die Anforderungen der empfangenden Stelle und vereinbaren Umfang und Frist.",
      },
      {
        title: "Übersetzung",
        body: "Ein qualifizierter Übersetzer mit passendem Fachhintergrund überträgt in seine Muttersprache.",
      },
      {
        title: "Unabhängige Revision",
        body: "Ein zweiter Übersetzer prüft die Übersetzung gegen das Original auf Richtigkeit, Terminologie und Format.",
      },
      {
        title: "Lieferung und Bestätigung",
        body: "Wir liefern im geforderten Format, mit unterzeichneter Richtigkeitsbestätigung.",
      },
    ],
  },

  /** Section 06 — four alternating project cards. */
  practiceAreas: {
    eyebrow: "WAS WIR ÜBERSETZEN",
    heading: "Spracharbeit, die angenommen werden muss.",
    ctaLabel: "Unsere Leistungen ansehen",
    items: [
      {
        marker: "01",
        title: "Einwanderungsanträge",
        tags: ["Personenstandsurkunden", "Führungszeugnisse", "Eidesstattliche Versicherungen"],
      },
      {
        marker: "02",
        title: "Bildungsnachweise",
        tags: ["Notenspiegel", "Diplome", "Modulbeschreibungen"],
      },
      {
        marker: "03",
        title: "Wirtschaft & Recht",
        tags: ["Verträge", "Unternehmensunterlagen", "Compliance"],
      },
      {
        marker: "04",
        title: "Dolmetschen",
        tags: ["Konsekutiv", "Simultan", "Remote & vor Ort"],
      },
    ],
  },

  /** Section 07 — single pull quote beside a portrait. */
  testimonials: {
    eyebrow: "KUNDENSTIMME",
    /** Two display lines separated by the source's U+2028 pair. */
    heading: "Was Kunden über die\u2028\u2028fertige Akte sagen.",
    attribution: "ANWALT FÜR MIGRATIONSRECHT",
    quote:
      "„Vollständige Akten, jedes Siegel und jeder Stempel erfasst, Bestätigung unterschrieben. Nichts kam je zurück.“",
    ctaLabel: "Mit einem Projektmanager sprechen",
  },

  /** Section 08 — accordion of five questions. */
  faq: {
    eyebrow: "FRAGEN UNSERER KUNDEN",
    /** Heading breaks across a hard `<br/>`; the trailing space is deliberate. */
    headingLineOne: "Antworten, bevor ",
    headingLineTwo: "Sie Unterlagen senden",
    items: [
      {
        question: "Was verlangen die empfangenden Stellen?",
        answer:
          "Eine vollständige Übersetzung des gesamten Dokuments, mit allen Siegeln und Stempeln, sowie eine unterzeichnete Richtigkeitserklärung des Übersetzers.",
      },
      {
        question: "Was umfasst die Bestätigung?",
        answer:
          "Jede Übersetzung erhält eine unterzeichnete und datierte Richtigkeitsbestätigung, dazu Hilfe bei notarieller Beglaubigung und Apostille, wenn eine Stelle das verlangt.",
      },
      {
        question: "Wie werden Preis und Bearbeitungszeit festgelegt?",
        answer:
          "Wir sehen die Unterlagen zuerst durch und bestätigen dann schriftlich Festpreis und Liefertermin. Kurze Personenstandsurkunden sind meist in wenigen Tagen fertig.",
      },
      {
        question: "Wie werden meine Unterlagen vertraulich behandelt?",
        answer:
          "Ihre Unterlagen sehen nur die Ihrem Projekt zugewiesenen Übersetzer, jeder unter Geheimhaltungsvereinbarung. Vertraulichkeit ist Standard, kein Aufpreis.",
      },
      {
        question: "Führen Sie Zeugnisbewertungen durch?",
        answer:
          "Nein. Das tun Bewertungsstellen wie die NACES-Mitglieder; sie verlangen dafür eine beglaubigte englische Übersetzung jedes Notenspiegels. Diesen Teil liefern wir.",
      },
    ],
  },
} as const;
