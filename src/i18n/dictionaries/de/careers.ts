/**
 * careers namespace — German.
 *
 * Mirrors en/careers.ts: the three openings rendered at
 * /[locale]/careers/[slug] together with the static labels of the job page
 * template. `slug` and `image` are not copy — a slug is a route and must stay
 * identical in every language, and every language shows the same photograph.
 * The meta card values render uppercase via CSS, not in the data.
 */
import type { Job } from "../en/careers";

const jobs: Job[] = [
  {
    slug: "project-manager",
    eyebrow: "OFFENE STELLE",
    title: "Projektmanager",
    summary: "Übersetzungsprojekte vom Angebot bis zur Lieferung koordinieren: Umfang, Terminplanung, Zuweisung der Übersetzer und Kundenkommunikation.",
    type: "Vollzeit",
    location: "Remote",
    image: {
      src: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
      width: 1312,
      height: 745,
      aspectRatio: 1.7610738255033558,
    },
    blocks: [
      { type: "heading", text: "Stellenbeschreibung" },
      { type: "paragraph", text: "Der Projektmanager führt Übersetzungsprojekte für Kunden aus Einwanderung, Bildung und Wirtschaft von der ersten Anfrage bis zur Lieferung." },
      { type: "paragraph", text: "Sie klären, was die empfangende Stelle benötigt, legen Umfang und Frist fest, weisen die passenden Übersetzer zu und halten Dateien, Glossare und Liefertermine in Ordnung. Ihre Arbeit erlaubt es Übersetzern und Revisoren, sich auf die Sprache zu konzentrieren, während jeder Auftrag im Zeitplan bleibt." },
      { type: "paragraph", text: "Die Stelle passt zu jemandem, der methodisch arbeitet, unter Termindruck ruhig bleibt, auf Details achtet und eine Laufbahn in der Sprachbranche aufbauen möchte." },
      { type: "paragraph", text: "Vorerfahrung in einer Agentur ist hilfreich, aber nicht Bedingung. Eine Einarbeitung in unsere Werkzeuge und unseren Qualitätsprozess erhalten Sie von uns." },
      { type: "heading", text: "Aufgaben" },
      {
        type: "list",
        items: [
          "Projekte kalkulieren und Umfang, Format und Frist bestätigen.",
          "Übersetzer nach Sprachpaar und Fachgebiet zuweisen.",
          "Übersetzung, Revision und Lieferung terminlich planen.",
          "Fristen, Dateiformate und Lieferanforderungen nachhalten.",
          "Vor Arbeitsbeginn die Anforderungen der empfangenden Stelle klären.",
          "Übersetzer und Revisoren zu Beginn jedes Auftrags briefen.",
          "Kundenglossare und Styleguides aktuell halten.",
          "Translation Memories für wiederkehrende Kunden pflegen.",
          "Kundenfragen zu Ablauf und Bearbeitungszeit beantworten.",
          "Die Richtigkeitsbestätigung zur Unterschrift vorbereiten.",
          "Auf Wunsch notarielle Beglaubigung und Apostille organisieren.",
          "Kundenunterlagen streng vertraulich behandeln.",
          "Kundenrückmeldungen erfassen und nachverfolgen.",
          "Rechnungsstellung und Übersetzerakten unterstützen.",
        ],
      },
      { type: "heading", text: "Qualifikationen" },
      {
        type: "list",
        items: [
          "Bachelorabschluss oder einschlägige Berufsqualifikation.",
          "Erfahrung in der Projektkoordination ist erwünscht.",
          "Erfahrung in einer Übersetzungsagentur oder einem Sprachteam ist von Vorteil.",
          "Sicher in Terminplanung und Prioritätensetzung.",
          "Ausgeprägte Sorgfalt im Detail.",
          "Fähigkeit, klare und professionelle E-Mails zu schreiben.",
          "Sicherer Umgang mit Übersetzungsmanagement- und CAT-Tools.",
          "Fähigkeit, viele Aufträge und wechselnde Prioritäten zu steuern.",
          "Professioneller und respektvoller Kommunikationsstil.",
          "Ausgeprägtes Verantwortungs- und Vertraulichkeitsbewusstsein.",
          "Sehr gute Englischkenntnisse sind Voraussetzung.",
          "Eine zweite Fremdsprache ist ausdrücklich erwünscht.",
        ],
      },
      { type: "heading", text: "Weitere Leistungen" },
      {
        type: "list",
        items: [
          "Vollständige Einarbeitung und praktische Toolschulung.",
          "Unterstützung durch erfahrene Übersetzer und Projektleitungen.",
          "Entwicklungswege in eine Senior- oder Leitungsrolle.",
          "Freundliches und professionelles Arbeitsumfeld.",
          "Hybrides Arbeiten nach der Einarbeitungszeit.",
          "Private Gesundheitsvorsorge.",
          "Bezahlter Urlaub und Sonderurlaub.",
          "Ausstattung und Homeoffice-Zuschuss.",
          "Regelmäßige Teamcalls und Firmenevents.",
          "Zugang zu internen Schulungen und Branchenressourcen.",
        ],
      },
    ],
    meta: [
      { label: "Gehaltsspanne:", value: "2.500–3.400 $ pro Monat" },
      { label: "Abteilung:", value: "Projektmanagement" },
      { label: "Arbeitszeit:", value: "Montag bis Freitag, 09:00 bis 18:00 Uhr" },
      { label: "Art:", value: "Vollzeit" },
    ],
    seo: {
      title: "Projektmanager · Global Language Solutions",
      description: "Übersetzungsprojekte bei Global Language Solutions koordinieren, vom Angebot über die Zuweisung der Übersetzer bis zur bestätigten Lieferung.",
      ogImage: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
    },
  },
  {
    slug: "senior-translator",
    eyebrow: "OFFENE STELLE",
    title: "Senior-Übersetzer",
    summary: "Unterlagen aus Einwanderung, Bildung und Wirtschaft in Ihre Muttersprache übersetzen und die Terminologie für Schlüsselkunden steuern.",
    type: "Vollzeit",
    location: "Remote",
    image: {
      src: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "paragraph", text: "Wir suchen einen erfahrenen Senior-Übersetzer für Dokumente, bei denen Genauigkeit reale Folgen für den Kunden hat." },
      { type: "paragraph", text: "In dieser Rolle übersetzen Sie Personenstandsurkunden, Notenspiegel und Diplome, Verträge, Unternehmensunterlagen und Richtlinien sowie Marketinginhalte, die für einen Zielmarkt angepasst und nicht wörtlich übertragen werden müssen." },
      { type: "paragraph", text: "Sie arbeiten direkt mit Projektmanagern, Revisoren und, bei größeren Kunden, mit den Prüfern des Kunden zusammen. Die Stelle verlangt tiefes Fachwissen und den disziplinierten Einsatz von Glossaren und Translation Memory." },
      { type: "paragraph", text: "Der oder die Richtige überträgt Sinn statt Wörter, spricht Mehrdeutigkeiten im Original früh an und liefert Arbeit, die die empfangende Stelle ohne Rückfrage annimmt." },
      { type: "heading", text: "Aufgaben" },
      {
        type: "list",
        items: [
          "Aus dem Ausgangsdokument in Ihre Muttersprache übersetzen.",
          "Nach Glossar und Styleguide des Kunden arbeiten.",
          "Personenstandsurkunden, Notenspiegel, Verträge und Richtlinien bearbeiten.",
          "Siegel, Stempel und Unterschriften in beglaubigten Arbeiten wiedergeben.",
          "Rückfragen zu unklarem, unvollständigem oder beschädigtem Original stellen.",
          "Formatierung und Layout originalgetreu halten.",
          "Terminologie in Glossaren und Translation Memory pflegen.",
          "Auf Anfrage Übersetzungen von Kollegen gegen das Original revidieren.",
          "Die Richtigkeit der von Ihnen erstellten Übersetzungen bestätigen.",
          "Projektmanager zu realistischen Bearbeitungszeiten beraten.",
          "Marketing- und Webinhalte für einen Zielmarkt anpassen.",
          "Auf Wunsch Stegreifübersetzung und Rückübersetzung unterstützen.",
          "Nachwuchsübersetzer begleiten und Probeübersetzungen bewerten.",
          "Jedes Kundendokument vertraulich behandeln.",
        ],
      },
      { type: "heading", text: "Qualifikationen" },
      {
        type: "list",
        items: [
          "Studienabschluss in Übersetzung oder gleichwertige Ausbildung.",
          "Oder Abschluss in einem anderen Fach mit zwei Jahren Übersetzungspraxis.",
          "Oder fünf Jahre nachgewiesene professionelle Übersetzungsarbeit.",
          "Mindestens drei Jahre in Ihrem Fachgebiet.",
          "Muttersprachliche oder nahezu muttersprachliche Zielsprache.",
          "Ausgezeichnetes Verständnis der Ausgangssprache.",
          "ATA-Zertifizierung oder ein vergleichbarer Nachweis ist von Vorteil.",
          "Sicher im Umgang mit CAT-Tools und Terminologiesoftware.",
          "Vertraut mit den Revisionsanforderungen der ISO 17100.",
          "Sorgfältige Recherche und dokumentiertes Vorgehen bei Begriffen.",
          "Fähigkeit, vereinbarte Fristen ohne Erinnerung einzuhalten.",
          "Hohes Maß an Berufsethik und Vertraulichkeit.",
        ],
      },
      { type: "heading", text: "Weitere Leistungen" },
      {
        type: "list",
        items: [
          "Wettbewerbsfähige Vergütung mit regelmäßiger Überprüfung.",
          "Stetige Arbeit in Ihrem Sprachpaar und Fachgebiet.",
          "Dokumente, die den Menschen wichtig sind, die sie schicken.",
          "Weiterbildung und fachliche Terminologieschulungen.",
          "Vollständig remote arbeiten.",
          "Private Gesundheitsvorsorge und Wellnessleistungen.",
          "Bezahlter Urlaub und zusätzlicher Sonderurlaub.",
          "Zugang zu Referenzquellen und gemeinsamen Termbanken.",
          "Unterstützung bei Zertifizierungen und Branchenveranstaltungen.",
          "Klarer Weg in Revisions- und Leitungsrollen.",
        ],
      },
    ],
    meta: [
      { label: "Gehaltsspanne:", value: "5.000–7.500 $ pro Monat" },
      { label: "Abteilung:", value: "Übersetzung" },
      { label: "Arbeitszeit:", value: "Montag bis Freitag, 09:00 bis 18:00 Uhr" },
      { label: "Art:", value: "Vollzeit" },
    ],
    seo: {
      title: "Senior-Übersetzer · Global Language Solutions",
      description: "Eine Senior-Übersetzerstelle bei Global Language Solutions: Arbeit in Ihre Muttersprache an Unterlagen, auf die Kunden angewiesen sind.",
      ogImage: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
    },
  },
  {
    slug: "quality-reviewer",
    eyebrow: "OFFENE STELLE",
    title: "Qualitätsprüfer",
    summary: "Übersetzungen vor der Lieferung gegen das Original auf Richtigkeit, Vollständigkeit, Terminologie und Format prüfen.",
    type: "Vollzeit",
    location: "Remote",
    image: {
      src: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "heading", text: "Stellenbeschreibung" },
      { type: "paragraph", text: "Als Qualitätsprüfer führen Sie die unabhängige Revision durch, die jede beglaubigte Übersetzung durchläuft. Dazu gehören der Abgleich mit dem Original, Terminologie- und Formatprüfungen und klare Rückmeldung an den Übersetzer." },
      { type: "paragraph", text: "Sie arbeiten eng mit Übersetzern und Projektmanagern zusammen, damit jede Akte vollständig, im Einklang mit dem Kundenglossar und für die empfangende Stelle annehmbar herausgeht." },
      { type: "paragraph", text: "Die Rolle passt zu einem gründlichen Sprachprofi, der ein Problem lieber vor der Lieferung findet als danach erklärt, und der Freude an präziser Arbeit hat." },
      { type: "heading", text: "Aufgaben" },
      {
        type: "list",
        items: [
          "Jede Übersetzung vollständig mit dem Ausgangsdokument vergleichen.",
          "Terminologie gegen Kundenglossar und Termbank prüfen.",
          "Namen, Daten, Zahlen und Aktenzeichen verifizieren.",
          "Prüfen, dass Siegel, Stempel und Unterschriften wiedergegeben sind.",
          "Prüfen, dass Formatierung und Layout dem Original folgen.",
          "Klare, konkrete Rückmeldung an den Übersetzer geben.",
          "Wiederkehrende Probleme erfassen und in Schulungen einbringen.",
          "Die in ISO 17100 beschriebenen Revisionsschritte anwenden.",
          "Dateien für Bestätigung und Lieferung freigeben.",
          "Glossare und Styleguides nach jedem Projekt aktualisieren.",
          "Kundenmaterial streng vertraulich behandeln.",
          "An Qualitätsrunden und Abstimmungsterminen im Team teilnehmen.",
        ],
      },
      { type: "heading", text: "Qualifikationen" },
      {
        type: "list",
        items: [
          "Abschluss in Übersetzung, Sprachwissenschaft oder verwandtem Fach.",
          "Nachgewiesene Erfahrung im professionellen Übersetzen oder Revidieren.",
          "Muttersprachliche oder nahezu muttersprachliche Zielsprache.",
          "Ausgezeichnete schriftliche Beherrschung beider Arbeitssprachen.",
          "Scharfer Blick für Auslassung, Fehlübersetzung und Uneinheitlichkeit.",
          "Praktische Kenntnis des Revisionsprozesses nach ISO 17100.",
          "Sicher mit CAT-Tools und QA-Prüfprogrammen.",
          "Fähigkeit, sachliche und nützliche Rückmeldung zu geben.",
          "Fachwissen in juristischen, medizinischen oder akademischen Texten.",
          "Sicheres Verständnis von Vertraulichkeit und Berufsethik.",
        ],
      },
      { type: "heading", text: "Weitere Leistungen" },
      {
        type: "list",
        items: [
          "Strukturierte Einarbeitung und Mentoring durch erfahrene Kollegen.",
          "Klare Möglichkeiten für Entwicklung und Aufstieg.",
          "Unterstützendes und kollegiales Arbeitsumfeld.",
          "Flexible Arbeitsmodelle, wo es passt.",
          "Private Gesundheitsvorsorge und Wellnessangebote.",
          "Bezahlter Urlaub und zusätzliche freie Tage.",
          "Zugang zu Termbanken und Referenzquellen.",
          "Regelmäßige Teamevents und Gelegenheiten zum Netzwerken.",
        ],
      },
    ],
    meta: [
      { label: "Gehaltsspanne:", value: "3.800–5.000 $ pro Monat" },
      { label: "Abteilung:", value: "Qualität" },
      { label: "Arbeitszeit:", value: "Montag bis Freitag, 09:00 bis 18:00 Uhr" },
      { label: "Art:", value: "Vollzeit" },
    ],
    seo: {
      title: "Qualitätsprüfer · Global Language Solutions",
      description: "Die unabhängige Revision jeder beglaubigten Übersetzung von Global Language Solutions durchführen und jede Datei mit ihrem Original abgleichen.",
      ogImage: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
    },
  },
];

export const careers = {
  /** Page metadata for a /careers/<slug> that matches no opening. */
  meta: {
    fallbackTitle: "Karriere · Global Language Solutions",
  },
  /** Static labels of the job page template — the same on all three pages. */
  jobPage: {
    /** Pill at the foot of the sticky summary card; it links to /contact. */
    apply: "Kontakt aufnehmen",
  },
  /** The "Join us" block repeated at the foot of every job page. */
  joinUs: {
    eyebrow: "KARRIERE",
    title: "Kommen Sie zu uns",
    description: "Kommen Sie zu Global Language Solutions, einem Team aus Übersetzern und Koordinatoren, das Unterlagen bearbeitet, auf die Menschen und Behörden warten.",
    /** Row link through to one of the other openings. */
    viewJob: "Stelle ansehen",
  },
  /** The three openings, in source order. */
  jobs,
};
