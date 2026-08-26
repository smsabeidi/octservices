/**
 * legal namespace — English source of truth.
 *
 * Covers the two legal/utility routes:
 *   /terms-and-conditions  → the hero and the whole body of the terms page
 *   /404 and the not-found boundary → the 404 headline, sub-line and button
 *
 * The terms body is stored as an ordered list of sections rather than as one
 * blob, so a translator sees the same numbered structure the page renders and
 * cannot lose a bullet list. The page flattens `intro → items → outro → contact`
 * back into the single run of paragraphs and lists the markup expects, so the
 * DOM is identical whatever the language.
 *
 * Deliberately excluded, because they are not copy: the `mailto:` href on the
 * permission paragraph (an address, not text) and the home button's route,
 * which the page builds from the active locale.
 */

/** The one paragraph on the terms page that carries an inline mailto link. */
export type TermsContact = {
  /** Runs before the link. The space before the link is added by the markup. */
  before: string;
  /** Visible link label. */
  email: string;
  /** Runs after the link, punctuation included. */
  after: string;
};

/**
 * One numbered section of the terms page. Rendered in this order:
 * heading, `intro` paragraphs, `items` as a bullet list, `outro` paragraphs,
 * then `contact`. Every field after `intro` is optional because the source
 * sections differ in shape.
 */
export type TermsSection = {
  /** Numbered heading. The source page sets these as paragraphs, not headings. */
  heading: string;
  intro: string[];
  items?: string[];
  outro?: string[];
  contact?: TermsContact;
};

/** Sections 1 to 8, in the order the page renders them. */
const termsSections: TermsSection[] = [
  {
    heading: "1. Scope of These Terms",
    intro: [
      "These terms apply to everyone who uses this website, including people who get in touch without becoming clients.",
      "This covers:",
    ],
    items: [
      "Use of the pages, text, images and downloads published on this website.",
      "Enquiries, quotation requests, and any documents you send us while asking for a price or a date.",
      "Work we go on to carry out, which is also governed by the written quotation and agreement we issue for it. Where the two differ, that agreement takes precedence.",
    ],
    outro: [
      "Using the site means you accept these terms. If you do not accept them, please do not use the site or send material through it.",
    ],
  },
  {
    heading: "2. Information on This Website",
    intro: ["What you read here is general information. It is not:"],
    items: [
      "Legal, immigration, academic or financial advice on your situation.",
      "Confirmation that a particular authority will accept a particular document.",
      "A guarantee of a deadline, a processing time or an outcome.",
      "A quotation, which we issue in writing once we have seen the source files.",
      "A promise that every service is available in every language pair.",
    ],
    outro: [
      "Filing requirements change, so check anything time sensitive with us or with the authority concerned.",
    ],
  },
  {
    heading: "3. Confidentiality of Enquiries and Documents",
    intro: [
      "Everything you send us, from a first enquiry to a full set of civil records, is treated as confidential.",
      "Access is limited to the linguists and project staff working on your file, and each of them is bound by confidentiality terms. Files are retained only as long as we need them.",
      "We sign a non disclosure agreement where you need one.",
    ],
  },
  {
    heading: "4. Source Material and Receiving Authority Requirements",
    intro: [
      "You confirm that you are entitled to send us the material you submit, and that it is complete and legible. We translate the document in front of us, so a missing page or an unreadable stamp shows up in the finished file.",
      "Confirming what the receiving authority requires is your responsibility, and we help where we can. Tell us who the translation is for, and whether they ask for certification, notarisation, an apostille, a particular spelling of a name or a set format, and we will work to that requirement. Where the requirement is unclear, we prepare the file to the standard that document type normally calls for.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    intro: [
      "The text, images and layout of this site belong to OCT Services or to its licensors. You may not:",
    ],
    items: [
      "Republish pages from this site as your own.",
      "Use our name or wordmark to imply a partnership or an endorsement.",
      "Resell or redistribute material taken from these pages.",
      "Present work we produced as the work of another provider.",
      "Alter a delivered translation or the Certificate of Translation Accuracy issued with it.",
    ],
    contact: {
      before: "For permission to reproduce material from this site, write to us at",
      email: "info@octservices.com",
      after: ". We will answer in writing.",
    },
  },
  {
    heading: "6. Limitation of Liability",
    intro: [
      "We stand behind the work we deliver. If a translation contains an error, tell us and we will correct it at our own cost. We are not responsible for:",
    ],
    items: [
      "Decisions an authority, employer or institution makes about your file.",
      "Delays caused by incomplete, illegible or late source material.",
      "Loss arising from a requirement that was not shared with us before work began.",
      "Interruptions to this website or to services it depends on.",
    ],
    outro: [
      "Nothing in these terms limits liability that cannot be limited by law. Beyond that, our liability for a project is limited to the fees paid for it.",
    ],
  },
  {
    heading: "7. Links to Other Websites",
    intro: [
      "This site links to government pages, credential evaluators and other organisations because those sources are useful. We do not control them, and their content, terms and privacy practices are their own.",
      "Requirements published by a receiving authority should always be checked at source.",
    ],
  },
  {
    heading: "8. Governing Law and Changes to These Terms",
    intro: [
      "These terms are governed by the law of the jurisdiction in which OCT Services is established, and any dispute is for the courts of that jurisdiction.",
      "Where local law gives you rights that cannot be set aside by agreement, those rights stand and nothing here reduces them. Individual projects may also carry terms agreed with you in writing.",
      "We update these terms when our services, our processes or our obligations change.",
      "The current version is the one published on this page.",
    ],
  },
];

export const legal = {
  /** /terms-and-conditions */
  terms: {
    /** Page-level <head> copy (was the static `metadata` export on the page). */
    meta: {
      title: "Terms of Use — Global Language Solutions",
    },

    hero: {
      eyebrow: "TERMS AND CONDITIONS",
      title: "Terms of Use",
      lastUpdated: "Last updated: August 2026",
    },

    /** The paragraphs that open the body, above section 1. */
    intro: [
      "Global Language Solutions is owned and operated by OCT Services.",
      "Global Language Solutions is a translation and interpreting company. We do not practise law and we do not give legal advice.",
      "At Global Language Solutions, the documents you send us and the enquiries you make are handled with care and kept confidential.",
      "These terms set out the basis on which you may use this website, and what you can expect when you request a quotation, send documents for translation, or book an interpreter. Please read them before you contact us.",
    ],

    sections: termsSections,
  },

  /** /404 and the not-found boundary. */
  notFound: {
    meta: {
      title: "Global Language Solutions",
    },
    heading: "404 PAGE NOT FOUND",
    lead: "We could not find this page in any language.",
    /** Label on the pill button back to the localised home page. */
    homeLinkLabel: "Back to homepage",
  },
};

export type LegalDict = typeof legal;
