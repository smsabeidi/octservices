/**
 * about namespace — English source of truth.
 *
 * Every string rendered by /about and its seven section components lives here,
 * grouped by section in the order the page renders them:
 *   meta → hero → mission → founder → services → team → process → career
 *
 * Only copy moves into this file. Image paths, route slugs and external URLs
 * stay in the components, and the list entries below are paired with them by
 * position, so the order of `services.items`, `team.members`, `process.steps`
 * and `career.jobs` must be kept when translating.
 */
export const about = {
  /** Page-level <head> copy (was the static `metadata` export on the page). */
  meta: {
    title: "OCT Services",
    description:
      "The people, the process and the standard behind every translation OCT Services delivers.\n Read how a document moves from quote to signed certificate.",
  },

  hero: {
    eyebrow: "ABOUT US",
    heading: "Your partner for accurate and accepted translations",
    lead: "We translate for applicants, students, attorneys and companies, in the language pairs they need.",
  },

  mission: {
    eyebrow: "OUR MISSION",
    /** The heading is one sentence in two tints: the lead is solid, the rest is 50%. */
    headingLead: "Our mission is ",
    headingRest:
      "to remove language as an obstacle, so that every filing, application and agreement is understood exactly as written.",
  },

  founder: {
    eyebrow: "OUR FOUNDING IDEA",
    heading: "One requirement shapes everything.",
    standard: {
      eyebrow: "THE STANDARD WE WORK TO",
      /** The two paragraphs are separated by a double <br /> in the markup. */
      paragraphOne: "Every document has a destination.",
      paragraphTwo:
        "We work backwards from what the receiving authority will accept, and build each project around that.",
    },
    /** Rendered on either side of the vertical rule, in this order. */
    metrics: [
      { value: "1,000+", label: "CLIENTS SERVED" },
      { value: "40+", label: "Languages Covered" },
    ],
  },

  services: {
    eyebrow: "OUR SERVICES",
    /* the source copy separates the clauses with two U+2028 line separators */
    heading: "What we translate,  and what you receive.",
    cta: "Talk to us about your documents",
    /** Order matches the image list in the Services component. */
    items: [
      {
        number: "001",
        title: "Certified Translation",
        body: "Birth, marriage and police records prepared to the filing requirements that apply.",
      },
      {
        number: "002",
        title: "Academic Records",
        body: "Degree certificates, mark sheets and syllabi, translated literally for the evaluator to assess.",
      },
      {
        number: "003",
        title: "Business Translation",
        body: "Agreements, financial statements and compliance material, kept consistent by a client glossary.",
      },
      {
        number: "004",
        title: "Interpreting",
        body: "Interpreters for appointments, hearings and meetings, in person or over a remote link.",
      },
    ],
  },

  team: {
    eyebrow: "OUR TEAM",
    /** Desktop and phone show `heading`; the tablet step shows `headingTablet`. */
    heading: "Meet our team",
    headingTablet: "The people behind every translation.",
    /** Order matches the portrait list in the Team component. */
    members: [
      {
        name: "Project Manager",
        role: "Scope, deadlines and filing requirements",
      },
      {
        name: "Senior Translator",
        role: "Native language translation, by subject field",
      },
      {
        name: "Independent Reviser",
        role: "Checks every translation against its source document",
      },
      {
        name: "Terminologist",
        role: "Glossaries, style guides and translation memory",
      },
      {
        name: "Interpreter",
        role: "Consecutive and simultaneous, on site and remote",
      },
      {
        name: "Client Coordinator",
        role: "Quotes, confidentiality and document handling",
      },
    ],
  },

  process: {
    eyebrow: "HOW WE WORK",
    /** Desktop and phone keep the manual line break between these two halves. */
    headingLineOne: "A process built around ",
    headingLineTwo: "what gets accepted.",
    /** The tablet step sets the same sentence on one line. */
    headingTablet: "A process built around what gets accepted.",
    cta: "Request a quote",
    steps: [
      {
        title: "Document Review",
        body: "We look at the source files, check who the file is going to, and quote a fixed scope and date.",
      },
      {
        title: "Translation",
        body: "The work goes to a linguist who translates into their own language and knows the subject.",
      },
      {
        title: "Independent Revision",
        body: "A reviser reads the translation beside the source, checking names, figures, terminology and layout.",
      },
      {
        title: "Delivery and Certification",
        body: "Files arrive in the format asked for, with the certificate of accuracy signed and dated.",
      },
    ],
  },

  career: {
    eyebrow: "CAREER",
    heading: "Join us",
    intro:
      "Join OCT Services, a team of linguists and coordinators handling documents that people and institutions are waiting on.",
    /** Shared by every opening in the list. */
    employmentType: "Full time",
    location: "Remote",
    cta: "View job",
    /** Order matches the job route list in the Career component. */
    jobs: [
      { title: "Project Manager" },
      { title: "Senior Translator" },
      { title: "Quality Reviewer" },
    ],
  },
};

export type AboutDict = typeof about;
