/**
 * careers namespace — English source of truth.
 *
 * Carries the three openings rendered at /[locale]/careers/[slug] together with
 * the static labels of the job page template. Copy here is translated; `slug`
 * and `image` are not — a slug is a route and must stay identical in every
 * language, and every language shows the same photograph. The meta card values
 * render uppercase via CSS (text preset g9rymp), not in the data.
 */

export type JobBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type JobMetaRow = { label: string; value: string };

export type Job = {
  /** Route segment. Identical across languages. */
  slug: string;
  /** Hero eyebrow above the role title. */
  eyebrow: string;
  title: string;
  /** Hero standfirst, right-hand column. */
  summary: string;
  /** Shown on the related-roles rows at the foot of every job page. */
  type: string;
  location: string;
  /** Asset, not copy: the same file in every language. */
  image: { src: string; width: number; height: number; aspectRatio: number };
  /** Rich-text body: headings, paragraphs and bulleted lists in source order. */
  blocks: JobBlock[];
  /** Rows of the sticky black summary card. */
  meta: JobMetaRow[];
  seo: { title: string; description: string; ogImage: string };
};

const jobs: Job[] = [
  {
    slug: "legal-assistant",
    eyebrow: "JOIN US",
    title: "Project Manager",
    summary: "Coordinate translation projects from quote to delivery: scope, scheduling, linguist assignment, and client communication.",
    type: "Full time",
    location: "Remote",
    image: {
      src: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
      width: 1312,
      height: 745,
      aspectRatio: 1.7610738255033558,
    },
    blocks: [
      { type: "heading", text: "Job description" },
      { type: "paragraph", text: "The Project Manager runs translation projects for immigration, education and business clients from first enquiry through to delivery." },
      { type: "paragraph", text: "You will establish what the receiving office needs, set the scope and the deadline, assign the right linguists, and keep files, glossaries and delivery dates in order. Your work lets translators and revisers concentrate on the language while every job stays on schedule." },
      { type: "paragraph", text: "This position suits someone who is methodical, calm under a deadline, attentive to detail, and interested in building a career in language services." },
      { type: "paragraph", text: "Previous agency experience is helpful but not essential. Training on our tools and quality process is provided." },
      { type: "heading", text: "Job responsibilities" },
      {
        type: "list",
        items: [
          "Quote projects and confirm scope, format, and deadline.",
          "Assign linguists by language pair and subject.",
          "Schedule translation, revision, and delivery stages.",
          "Track deadlines, file formats, and delivery requirements.",
          "Confirm what the receiving authority requires before work starts.",
          "Brief translators and revisers at the start of each job.",
          "Keep client glossaries and style guides current.",
          "Maintain translation memories across recurring clients.",
          "Answer client questions about process and turnaround.",
          "Prepare the Certificate of Translation Accuracy for signature.",
          "Arrange notarisation and apostille support when asked.",
          "Handle client documents under strict confidentiality.",
          "Log client feedback and follow through on it.",
          "Support invoicing and linguist records.",
        ],
      },
      { type: "heading", text: "Qualifications" },
      {
        type: "list",
        items: [
          "Bachelor’s degree or relevant professional qualification.",
          "Previous project coordination experience is preferred.",
          "Experience in a translation agency or language services team is an advantage.",
          "Strong scheduling and priority setting skills.",
          "Excellent attention to detail.",
          "Ability to write clear and professional emails.",
          "Confidence using translation management and CAT tools.",
          "Ability to manage many jobs and shifting priorities.",
          "Professional and respectful communication style.",
          "Strong sense of responsibility and confidentiality.",
          "English proficiency is required.",
          "A second language is strongly preferred.",
        ],
      },
      { type: "heading", text: "Other benefits" },
      {
        type: "list",
        items: [
          "Full onboarding and practical tools training.",
          "Support from experienced linguists and project leads.",
          "Opportunities to grow into a senior or lead project role.",
          "Friendly and professional working environment.",
          "Hybrid work options after the onboarding period.",
          "Private healthcare package.",
          "Paid vacation and personal leave.",
          "Equipment and home office allowance.",
          "Regular team calls and company events.",
          "Access to internal training and industry resources.",
        ],
      },
    ],
    meta: [
      { label: "Compensation range:", value: "$2,500–$3,400 per month" },
      { label: "Department:", value: "Project Management" },
      { label: "Work schedule:", value: "Monday to Friday, 09:00 to 18:00" },
      { label: "Type:", value: "Full time" },
    ],
    seo: {
      title: "Project Manager · Global Language Solutions",
      description: "Coordinate translation projects at Global Language Solutions, from quote and scope through linguist assignment to certified delivery.",
      ogImage: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png",
    },
  },
  {
    slug: "corporate-lawyer",
    eyebrow: "JOIN US",
    title: "Senior Translator",
    summary: "Translate immigration, academic and commercial documents into your native language, and guide terminology for key accounts.",
    type: "Full time",
    location: "Remote",
    image: {
      src: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "paragraph", text: "We are looking for an experienced Senior Translator to work on documents where accuracy carries real consequences for the client." },
      { type: "paragraph", text: "In this role, you will translate civil records, transcripts and diplomas, contracts, corporate records and policies, and marketing content that has to be adapted for a target market rather than rendered literally." },
      { type: "paragraph", text: "You will work directly with project managers, revisers and, on larger accounts, the client’s own reviewers. The position requires deep subject knowledge alongside disciplined use of glossaries and translation memory." },
      { type: "paragraph", text: "The successful candidate will translate meaning rather than words, raise ambiguity in the source early, and produce work that the authority receiving it will accept without question." },
      { type: "heading", text: "Job responsibilities" },
      {
        type: "list",
        items: [
          "Translate into your native language from the source document.",
          "Work to the client’s glossary and style guide.",
          "Handle civil records, transcripts, contracts and policies.",
          "Represent seals, stamps and signatures in certified work.",
          "Raise queries on unclear, incomplete or damaged source text.",
          "Keep formatting and layout faithful to the original.",
          "Maintain terminology in glossaries and translation memory.",
          "Revise a colleague’s translation against the source when asked.",
          "Certify the accuracy of the translations you complete.",
          "Advise project managers on a realistic turnaround for a job.",
          "Adapt marketing and web content for a target market.",
          "Support sight translation and back translation on request.",
          "Mentor junior translators and assess sample tests.",
          "Handle every client document in confidence.",
        ],
      },
      { type: "heading", text: "Qualifications" },
      {
        type: "list",
        items: [
          "Degree in translation, or equivalent training.",
          "Or a degree in another field with two years of translating.",
          "Or five years of documented professional translation work.",
          "At least three years within your specialist subject.",
          "Native or near native command of the target language.",
          "Excellent comprehension of the source language.",
          "ATA certification or a comparable credential is an advantage.",
          "Confident with CAT tools and terminology software.",
          "Familiarity with the revision requirements of ISO 17100.",
          "Careful research habits and a documented approach to terms.",
          "Ability to meet agreed deadlines without reminders.",
          "High standard of professional integrity and confidentiality.",
        ],
      },
      { type: "heading", text: "Other benefits" },
      {
        type: "list",
        items: [
          "Competitive compensation with regular review.",
          "Steady work in your language pair and subject.",
          "Documents that matter to the people who send them.",
          "Professional development and specialist terminology training.",
          "Fully remote working.",
          "Private healthcare and wellness benefits.",
          "Paid vacation and additional personal leave.",
          "Access to reference resources and shared termbases.",
          "Support for professional certification and industry events.",
          "Clear pathway toward reviser and lead linguist roles.",
        ],
      },
    ],
    meta: [
      { label: "Compensation range:", value: "$5,000–$7,500 per month" },
      { label: "Department:", value: "Translation" },
      { label: "Work schedule:", value: "Monday to Friday, 09:00 to 18:00" },
      { label: "Type:", value: "Full time" },
    ],
    seo: {
      title: "Senior Translator · Global Language Solutions",
      description: "A senior translator role at Global Language Solutions, working into your native language on files that clients depend on.",
      ogImage: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png",
    },
  },
  {
    slug: "legal-associate",
    eyebrow: "JOIN US",
    title: "Quality Reviewer",
    summary: "Check translations against the source for accuracy, completeness, terminology and format before they reach the client.",
    type: "Full time",
    location: "Remote",
    image: {
      src: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
      width: 1440,
      height: 745,
      aspectRatio: 1.9328859060402686,
    },
    blocks: [
      { type: "heading", text: "Job description" },
      { type: "paragraph", text: "As a Quality Reviewer, you carry out the independent revision that every certified translation goes through. Your work covers comparison against the source, terminology and formatting checks, and clear feedback to the translator." },
      { type: "paragraph", text: "You will work closely with translators and project managers so that every file leaves complete, consistent with the client’s glossary, and acceptable to the authority receiving it." },
      { type: "paragraph", text: "This role suits a meticulous linguist who would rather catch a problem before delivery than explain it afterwards, and who takes satisfaction in precise work." },
      { type: "heading", text: "Job responsibilities" },
      {
        type: "list",
        items: [
          "Compare each translation against the source document in full.",
          "Check terminology against the client glossary and termbase.",
          "Verify names, dates, figures and reference numbers.",
          "Confirm that seals, stamps and signatures are represented.",
          "Check that formatting and layout follow the source.",
          "Return clear, specific feedback to the translator.",
          "Record recurring issues and feed them into training.",
          "Apply the revision steps set out in ISO 17100.",
          "Approve files for certification and delivery.",
          "Update glossaries and style guides after each project.",
          "Handle client material in strict confidence.",
          "Join quality reviews and calibration sessions with the team.",
        ],
      },
      { type: "heading", text: "Qualifications" },
      {
        type: "list",
        items: [
          "Degree in translation, linguistics, or a related field.",
          "Proven experience translating or revising professionally.",
          "Native or near native fluency in the target language.",
          "Excellent written command of both working languages.",
          "Sharp eye for omission, mistranslation and inconsistency.",
          "Working knowledge of the ISO 17100 revision process.",
          "Confident with CAT tools and quality assurance checkers.",
          "Ability to give feedback that is useful and not personal.",
          "Subject knowledge in legal, medical or academic material.",
          "Strong grasp of confidentiality and professional ethics.",
        ],
      },
      { type: "heading", text: "Other benefits" },
      {
        type: "list",
        items: [
          "Structured training and mentorship from senior linguists.",
          "Clear opportunities for career development and promotion.",
          "Supportive and collaborative working environment.",
          "Flexible working arrangements where appropriate.",
          "Private healthcare and wellness support.",
          "Paid vacation and additional personal days.",
          "Access to termbases and reference resources.",
          "Regular team events and professional networking opportunities.",
        ],
      },
    ],
    meta: [
      { label: "Compensation range:", value: "$3,800–$5,000 per month" },
      { label: "Department:", value: "Quality" },
      { label: "Work schedule:", value: "Monday to Friday, 09:00 to 18:00" },
      { label: "Type:", value: "Full time" },
    ],
    seo: {
      title: "Quality Reviewer · Global Language Solutions",
      description: "Carry out the independent revision on every certified translation Global Language Solutions delivers, checking each file against its source.",
      ogImage: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png",
    },
  },
];

export const careers = {
  /** Page metadata for a /careers/<slug> that matches no opening. */
  meta: {
    fallbackTitle: "Careers · Global Language Solutions",
  },
  /** Static labels of the job page template — the same on all three pages. */
  jobPage: {
    /** Pill at the foot of the sticky summary card; it links to /contact. */
    apply: "Get in touch",
  },
  /** The "Join us" block repeated at the foot of every job page. */
  joinUs: {
    eyebrow: "CAREER",
    title: "Join us",
    description: "Join Global Language Solutions, a team of linguists and coordinators handling documents that people and institutions are waiting on.",
    /** Row link through to one of the other openings. */
    viewJob: "View job",
  },
  /** The three openings, in source order. */
  jobs,
};

export type CareersDict = typeof careers;
