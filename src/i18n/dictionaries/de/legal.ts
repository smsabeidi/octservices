/**
 * legal namespace — German.
 *
 * Mirrors en/legal.ts: the terms page body as the same ordered list of
 * sections, and the 404 copy. The `mailto:` href on the permission paragraph
 * and the home button's route stay in the components.
 */
import type { TermsSection } from "../en/legal";

/** Sections 1 to 8, in the order the page renders them. */
const termsSections: TermsSection[] = [
  {
    heading: "1. Geltungsbereich dieser Bedingungen",
    intro: [
      "Diese Bedingungen gelten für alle, die diese Website nutzen, auch für Personen, die Kontakt aufnehmen, ohne Kunde zu werden.",
      "Das umfasst:",
    ],
    items: [
      "Die Nutzung der auf dieser Website veröffentlichten Seiten, Texte, Bilder und Downloads.",
      "Anfragen, Angebotsanforderungen und alle Unterlagen, die Sie uns bei der Frage nach Preis oder Termin senden.",
      "Arbeiten, die wir daraufhin ausführen und für die zusätzlich das schriftliche Angebot und die Vereinbarung gelten, die wir dafür ausstellen. Weichen beide voneinander ab, geht die Vereinbarung vor.",
    ],
    outro: [
      "Mit der Nutzung der Website nehmen Sie diese Bedingungen an. Wenn Sie sie nicht annehmen, nutzen Sie die Website bitte nicht und senden Sie keine Unterlagen darüber.",
    ],
  },
  {
    heading: "2. Informationen auf dieser Website",
    intro: ["Was Sie hier lesen, sind allgemeine Informationen. Sie sind nicht:"],
    items: [
      "Rechts-, Einwanderungs-, Bildungs- oder Finanzberatung zu Ihrer Lage.",
      "Die Zusage, dass eine bestimmte Stelle ein bestimmtes Dokument annimmt.",
      "Eine Garantie für eine Frist, eine Bearbeitungsdauer oder ein Ergebnis.",
      "Ein Angebot; dieses erstellen wir schriftlich, sobald wir die Ausgangsdateien gesehen haben.",
      "Ein Versprechen, dass jede Leistung in jedem Sprachpaar verfügbar ist.",
    ],
    outro: [
      "Einreichungsanforderungen ändern sich; klären Sie zeitkritische Punkte daher mit uns oder mit der betreffenden Stelle.",
    ],
  },
  {
    heading: "3. Vertraulichkeit von Anfragen und Unterlagen",
    intro: [
      "Alles, was Sie uns senden, von der ersten Anfrage bis zum vollständigen Satz von Personenstandsurkunden, wird vertraulich behandelt.",
      "Zugriff haben nur die Übersetzer und Projektmitarbeiter, die an Ihrer Akte arbeiten, und jeder von ihnen ist zur Verschwiegenheit verpflichtet. Unterlagen werden nur so lange aufbewahrt, wie wir sie benötigen.",
      "Wenn Sie eine Geheimhaltungsvereinbarung benötigen, unterzeichnen wir sie.",
    ],
  },
  {
    heading: "4. Ausgangsmaterial und Anforderungen empfangender Stellen",
    intro: [
      "Sie bestätigen, dass Sie berechtigt sind, uns das eingereichte Material zu senden, und dass es vollständig und lesbar ist. Wir übersetzen das Dokument, das uns vorliegt; eine fehlende Seite oder ein unlesbarer Stempel zeigt sich daher in der fertigen Akte.",
      "Zu klären, was die empfangende Stelle verlangt, liegt bei Ihnen, und wir helfen, wo wir können. Sagen Sie uns, für wen die Übersetzung bestimmt ist und ob eine Bestätigung, eine notarielle Beglaubigung, eine Apostille, eine bestimmte Namensschreibweise oder ein festes Format verlangt wird, dann arbeiten wir danach. Ist die Anforderung unklar, bereiten wir die Akte nach dem Standard auf, den diese Dokumentart üblicherweise verlangt.",
    ],
  },
  {
    heading: "5. Geistiges Eigentum",
    intro: [
      "Texte, Bilder und Gestaltung dieser Website gehören OCT Services oder seinen Lizenzgebern. Sie dürfen nicht:",
    ],
    items: [
      "Seiten dieser Website als eigene erneut veröffentlichen.",
      "Unseren Namen oder unser Wortzeichen verwenden, um eine Partnerschaft oder Empfehlung nahezulegen.",
      "Material dieser Seiten weiterverkaufen oder weiterverbreiten.",
      "Von uns erstellte Arbeiten als Arbeit eines anderen Anbieters ausgeben.",
      "Eine gelieferte Übersetzung oder die dazu ausgestellte Richtigkeitsbestätigung verändern.",
    ],
    contact: {
      before: "Für die Erlaubnis, Material dieser Website zu verwenden, schreiben Sie uns an",
      email: "info@octservices.com",
      after: ". Wir antworten schriftlich.",
    },
  },
  {
    heading: "6. Haftungsbeschränkung",
    intro: [
      "Wir stehen für die Arbeit ein, die wir liefern. Enthält eine Übersetzung einen Fehler, sagen Sie uns Bescheid, und wir berichtigen ihn auf unsere Kosten. Nicht verantwortlich sind wir für:",
    ],
    items: [
      "Entscheidungen, die eine Behörde, ein Arbeitgeber oder eine Institution zu Ihrer Akte trifft.",
      "Verzögerungen durch unvollständiges, unleserliches oder verspätetes Ausgangsmaterial.",
      "Schäden aus einer Anforderung, die uns vor Arbeitsbeginn nicht mitgeteilt wurde.",
      "Störungen dieser Website oder der Dienste, auf denen sie beruht.",
    ],
    outro: [
      "Nichts in diesen Bedingungen beschränkt eine Haftung, die gesetzlich nicht beschränkt werden kann. Darüber hinaus ist unsere Haftung für ein Projekt auf das dafür gezahlte Honorar begrenzt.",
    ],
  },
  {
    heading: "7. Links zu anderen Websites",
    intro: [
      "Diese Website verlinkt auf Behördenseiten, Zeugnisbewertungsstellen und andere Organisationen, weil diese Quellen nützlich sind. Wir haben keinen Einfluss auf sie; Inhalte, Bedingungen und Datenschutzpraxis liegen bei ihnen.",
      "Von einer empfangenden Stelle veröffentlichte Anforderungen sollten stets an der Quelle geprüft werden.",
    ],
  },
  {
    heading: "8. Anwendbares Recht und Änderungen dieser Bedingungen",
    intro: [
      "Für diese Bedingungen gilt das Recht der Rechtsordnung, in der OCT Services niedergelassen ist; für Streitigkeiten sind die Gerichte dieser Rechtsordnung zuständig.",
      "Gewährt Ihnen das örtliche Recht Rechte, die vertraglich nicht abbedungen werden können, bleiben diese bestehen, und nichts hier schmälert sie. Für einzelne Projekte können zusätzlich schriftlich mit Ihnen vereinbarte Bedingungen gelten.",
      "Wir aktualisieren diese Bedingungen, wenn sich unsere Leistungen, Abläufe oder Pflichten ändern.",
      "Maßgeblich ist die auf dieser Seite veröffentlichte Fassung.",
    ],
  },
];

export const legal = {
  /** /terms-and-conditions */
  terms: {
    /** Page-level <head> copy. */
    meta: {
      title: "Nutzungsbedingungen — Global Language Solutions",
    },

    hero: {
      eyebrow: "ALLGEMEINE BEDINGUNGEN",
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: August 2026",
    },

    /** The paragraphs that open the body, above section 1. */
    intro: [
      "Global Language Solutions gehört OCT Services und wird von OCT Services betrieben.",
      "Bei Global Language Solutions werden die Unterlagen, die Sie uns senden, und Ihre Anfragen sorgfältig und vertraulich behandelt.",
      "Diese Bedingungen regeln, auf welcher Grundlage Sie diese Website nutzen dürfen und was Sie erwarten können, wenn Sie ein Angebot anfordern, Unterlagen zur Übersetzung senden oder einen Dolmetscher buchen. Bitte lesen Sie sie, bevor Sie uns kontaktieren.",
    ],

    sections: termsSections,
  },

  /** /404 and the not-found boundary. */
  notFound: {
    meta: {
      title: "Global Language Solutions",
    },
    heading: "404 SEITE NICHT GEFUNDEN",
    lead: "Diese Seite konnten wir in keiner Sprache finden.",
    /** Label on the pill button back to the localised home page. */
    homeLinkLabel: "Zur Startseite",
  },
};
