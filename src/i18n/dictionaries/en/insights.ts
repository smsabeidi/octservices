/**
 * insights namespace — English source of truth.
 *
 * Holds the /insights index copy and the four articles served at
 * /insights/[slug], moved here verbatim from the components and from the old
 * src/content/kafka/articles.ts.
 *
 * Source page -> slug mapping, from the kafka.framer.wiki extraction:
 *   insight-contracts  -> building-stronger-contracts-for-long-term-security
 *   insight-disputes   -> resolving-disputes-with-clarity
 *   insight-protection -> understanding-legal-protection
 *   insight-modern     -> modern-legal-services-today
 *
 * NOT TRANSLATABLE, in any locale: `slug` is a URL identifier and must stay
 * byte identical in every language, or a shared link, a bookmark or a search
 * result breaks the moment the reader switches locale. The same holds for
 * `date.iso` (a machine readable datetime attribute), `image` and the
 * `src`/`width`/`height`/`ratio` of an inline image block, which are asset
 * paths and pixel dimensions rather than copy. Everything else on this page is
 * translated.
 */

/**
 * Rich-text blocks inside an article body, mirroring the Framer rich-text run
 * inside section "Content" (framer-cyc02i): h2 = preset rf5nl2, p = preset
 * wzscdi, quote = preset p7zyfh (blockquote). Keep the block sequence and
 * approximate string lengths intact when translating.
 */
export type InsightsBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  /**
   * Inline rich-text image (`img.framer-text.framer-image`). Only
   * modern-legal-services-today has one. `width`/`height` are the source img
   * attributes (the rendered box, capped by max-width: 100%); `ratio` is its
   * inline `aspect-ratio`, which wins because the CSS forces height: auto.
   * Carries no copy — leave it untouched when translating.
   */
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      ratio: string;
    };

export type InsightsArticle = {
  /** NOT TRANSLATABLE — URL identifier, identical in every language. */
  slug: string;
  /** Hero <h1>, and the card title in both the index and the related grid. */
  title: string;
  /** Hero standfirst, and the card description in both grids. */
  description: string;
  /** <title> and <meta name="description"> for the article page. */
  meta: { title: string; description: string };
  date: {
    /** Hero eyebrow, written out in full: "February 6, 2026". */
    full: string;
    /** /insights card label: the topic, then the short date. */
    indexCard: string;
    /** Related-grid card label: the short date on its own. */
    relatedCard: string;
    /** NOT TRANSLATABLE — the <time datetime> value. */
    iso: string;
  };
  /** NOT TRANSLATABLE — artwork and its intrinsic pixel size. */
  image: { src: string; width: number; height: number };
  body: InsightsBlock[];
};

/** Canonical order, matching the /insights listing. */
const articles: InsightsArticle[] = [
  {
    slug: "building-stronger-contracts-for-long-term-security",
    title: "What makes a certified translation acceptable",
    description:
      "What a receiving authority checks when a translation is certified, and how a document is prepared so that it is accepted the first time.",
    meta: {
      title: "What makes a certified translation acceptable · Global Language Solutions",
      description:
        "Why certification is the smallest part of the work, and what a reviewer is actually checking when a translated document reaches them.",
    },
    date: {
      full: "February 6, 2026",
      indexCard: "Certified Translation · Feb 6, 2026",
      relatedCard: "Feb 6, 2026",
      iso: "2026-02-06T00:00:00.000Z",
    },
    image: { src: "/kafka/img/vDyRaUb0I8ybD7E9tD2v84BoLNU.png", width: 1440, height: 745 },
    body: [
      { type: "h2", text: "More Than a Stamped Page" },
      { type: "p", text: "A certified translation is often imagined as an ordinary translation with a stamp added at the end. In practice the certification is the smallest part of the work, and everything that gives it weight happens before the signature." },
      { type: "p", text: "It is a complete rendering of a document into the target language, delivered with a signed statement that the translation is accurate and that the translator is competent to make it." },
      { type: "p", text: "Certified translations are not only needed for visa filings. They are asked for by universities, credential evaluators, courts, licensing boards, banks, employers and registry offices." },
      { type: "p", text: "Applicants, students, attorneys, admissions officers, human resources teams and company secretaries all end up handling them at some point." },
      { type: "p", text: "The purpose of certification is not ceremony. It gives the person reading the file a reason to treat the translation as a reliable substitute for a document they cannot read themselves." },
      { type: "h2", text: "Start with the Receiving Authority" },
      { type: "p", text: "Requirements come from the institution that receives the file." },
      { type: "p", text: "A consulate, a university, a court and a credential evaluator can each ask for something different from the same certificate." },
      { type: "p", text: "Some want the certification on the translator’s letterhead. Others want the source document attached to the translation, a signature in ink, notarisation of the translator’s signature, or delivery as a single searchable PDF with the pages in a set order." },
      { type: "p", text: "Where a checklist or a page of guidance exists, it should be read before the work starts rather than after the file has come back unaccepted." },
      { type: "p", text: "A translation is only useful if the authority reading it accepts it." },
      { type: "h2", text: "What the Certification Statement Says" },
      { type: "p", text: "A Certificate of Translation Accuracy is a short statement, but every element in it is there for a reason." },
      { type: "p", text: "It identifies the document, names the source and target languages, and confirms that the translation is complete and accurate." },
      { type: "p", text: "It also states that the translator is competent to translate that language pair, and it carries a name, a signature and a date. Filings made with United States immigration authorities are governed by 8 CFR 103.2(b)(3), which sets out exactly this requirement." },
      { type: "p", text: "The certification does not have to come from an attorney." },
      { type: "p", text: "It also does not have to come from an agency approved by a government body, because no approval scheme of that kind exists for translators preparing documents to be filed." },
      { type: "p", text: "What matters is that a competent translator is willing to put a name to the accuracy of the work and can answer a question about it later." },
      { type: "h2", text: "Translate the Document Completely" },
      { type: "p", text: "Nothing may be left out." },
      { type: "p", text: "A certified translation reproduces every element of the source document, including headers, footnotes, handwritten additions and text printed in the margin." },
      { type: "p", text: "Summaries are not certified translations. A translator who drops a line because it looks routine has changed the document, and the reader has no way of knowing what went missing." },
      { type: "p", text: "Where part of the source is illegible, that is recorded in the translation at the point it occurs rather than guessed at or quietly skipped." },
      { type: "p", text: "Reviewers compare the two documents side by side. Anything visible on the source page is expected to have a counterpart on the translated page." },
      { type: "h2", text: "Represent Seals, Stamps and Signatures" },
      { type: "p", text: "Official documents are covered in markings." },
      { type: "p", text: "Round seals, revenue stamps, registrar signatures, embossed marks, apostille certificates and stamped reference numbers all carry information about where a document came from and who issued it." },
      { type: "p", text: "These are represented rather than ignored. A bracketed note describing the seal, followed by a translation of the text inside it, tells the reader what sits on the original page." },
      { type: "p", text: "Signatures are marked as signatures, with the name transcribed underneath where it is legible." },
      { type: "p", text: "A translation showing only the body text of a certificate looks thin next to an original covered in stamps, and a file that looks incomplete is a common reason for it to come back." },
      { type: "h2", text: "Keep Names and Dates Consistent" },
      { type: "p", text: "Personal names, place names and institution names have to be handled the same way across every document in a set." },
      { type: "p", text: "A birth certificate, a marriage certificate and a police record may each spell the same name differently in the source." },
      { type: "p", text: "The translation follows the spelling used in the applicant’s passport, with a note wherever the source differs. A reviewer who sees two spellings and no explanation has to treat them as two people." },
      { type: "p", text: "Dates need the same care. A date written as 03/04/2024 means March in one country and April in another, so numeric dates are normally written out in the convention of the target language." },
      { type: "p", text: "Numbers, grades, currencies and units of measurement are carried across as they appear, without conversion, unless the receiving authority has asked for one." },
      { type: "h2", text: "Why Machine Translation Is Rejected" },
      { type: "p", text: "Machine output on its own is not a certified translation." },
      { type: "p", text: "United States immigration authorities reject translations produced by machine without human certification, and universities and evaluators apply the same rule for the same reason." },
      { type: "p", text: "Nobody can honestly sign a statement of accuracy for text they did not produce and cannot vouch for. The signature is the whole point of the exercise." },
      { type: "p", text: "ISO 17100, the international standard for translation services, likewise places raw machine output with light post editing outside its scope." },
      { type: "p", text: "Software has a place in professional work, in terminology lookup, consistency checks and translation memory. It does not have a place as the sole author of a document being filed." },
      { type: "h2", text: "The Role of a Second Linguist" },
      { type: "p", text: "Accuracy is easier to claim than to demonstrate." },
      { type: "p", text: "ISO 17100 requires that a translation be revised by a second qualified linguist, who checks it against the source before it is delivered to the client." },
      { type: "p", text: "The reviser compares the two documents for accuracy, completeness, terminology and formatting, and catches the things a translator stops seeing after several hours inside the same file." },
      { type: "p", text: "Our process follows the revision requirement set out in that standard. Every certified translation is checked by a second linguist before it leaves." },
      { type: "p", text: "The cost of that check is small next to the cost of a filing that has to be made twice." },
      { type: "h2", text: "Notarisation and Apostille Are Separate" },
      { type: "p", text: "Certification, notarisation and apostille are three different things." },
      { type: "p", text: "Certification is the translator’s signed statement about the translation itself." },
      { type: "p", text: "Notarisation is a notary confirming the identity of the person who signed that statement. It says nothing about the quality of the translation." },
      { type: "p", text: "An apostille authenticates a public document for use in another country that is party to the Hague Convention, and it applies to the source document rather than to the translation of it." },
      { type: "p", text: "Most receiving authorities ask only for certification. Where one asks for more, it is worth confirming which of the three is meant before paying for all of them." },
      { type: "quote", text: "“A translation is not finished when it reads well. It is finished when the authority receiving it can accept it without asking a question.”" },
      { type: "h2", text: "Check the File Before Sending" },
      { type: "p", text: "A short review at the end prevents most problems." },
      { type: "p", text: "Confirm that every page of the source has a translated counterpart, that names match the passport, and that the certification carries a signature and a date." },
      { type: "p", text: "Confirm that the file format matches what was asked for, that the pages are in order, and that a copy of the source document is attached where the receiving authority expects to find it." },
      { type: "p", text: "Questions cost less before submission than after. Asking a translator to confirm a detail is a normal part of the process." },
      { type: "h2", text: "A Document That Holds Up" },
      { type: "p", text: "Acceptance is the only measure that counts. Everything else is preparation." },
      { type: "p", text: "When a translation is complete, consistent, correctly certified and formatted the way the recipient expects, the person reviewing it can move straight on to the substance of the application." },
      { type: "p", text: "The strongest certified translations are unremarkable. They draw no attention to the translator, they ask the reader to interpret nothing, and they answer the questions a reviewer would otherwise have to raise. That is what makes them useful." },
      { type: "p", text: "People send us documents that decide a visa, a university place or a job offer. That is the standard the work is held to." },
    ],
  },
  {
    slug: "resolving-disputes-with-clarity",
    title: "Translating academic records for credential evaluation",
    description:
      "How transcripts, diplomas and course records are translated for admissions offices and credential evaluators, and where translation ends.",
    meta: {
      title: "Translating academic records for credential evaluation · Global Language Solutions",
      description:
        "Credential evaluators need a certified English translation before they can assess a transcript. Where translation ends and evaluation begins.",
    },
    date: {
      full: "May 18, 2026",
      indexCard: "Academic Translation · May 18, 2026",
      relatedCard: "May 18, 2026",
      iso: "2026-05-18T00:00:00.000Z",
    },
    image: { src: "/kafka/img/5B0yTzRf3jvC8kbEfBqbcccLFBw.png", width: 1440, height: 745 },
    body: [
      { type: "h2", text: "Two Steps, Not One" },
      { type: "p", text: "Applicants often assume that a credential evaluation includes translation. It does not. Evaluators such as World Education Services and Educational Credential Evaluators, both members of NACES, require certified English translations of foreign language records before they will begin work." },
      { type: "p", text: "The two steps answer different questions. A translation says what a document states, completely and in English. An evaluation says what that document is worth in the education system of the receiving country: which qualification it corresponds to, how the grades convert, and whether the issuing institution is recognised. One is a language service and the other is an assessment." },
      { type: "p", text: "Global Language Solutions provides the translation. We do not evaluate credentials and we do not issue equivalency statements. Knowing which of the two you are buying at the start usually saves a round of correspondence and a week of waiting." },
      { type: "h2", text: "What an Evaluator Needs to See" },
      { type: "p", text: "Evaluators publish their document requirements, and those requirements are specific." },
      { type: "p", text: "Most ask for a complete, literal, word for word English translation of every academic document, prepared by a qualified translator rather than by the applicant, a relative or the institution’s own office staff." },
      { type: "p", text: "Literal is the operative word here." },
      { type: "p", text: "The translation should not adapt a course title into the nearest local equivalent, convert a mark into a percentage, or describe a qualification as a bachelor’s degree because it resembles one. Those judgements belong to the evaluator, and making them early takes the decision out of their hands." },
      { type: "p", text: "The translator’s job is to make the document readable in English without changing anything it says." },
      { type: "p", text: "Where the two roles stay separate, the evaluation moves faster and is far less likely to be questioned." },
      { type: "h2", text: "Gather the Records First" },
      { type: "p", text: "Most delays begin with an incomplete set." },
      { type: "p", text: "A typical file holds the degree certificate or diploma, the full academic transcript or mark sheets for every year of study, and in some cases course descriptions or a syllabus." },
      { type: "p", text: "Some institutions issue a separate document for each academic year, some issue one consolidated statement at the end, and some issue both. A missing year is noticed immediately, because an evaluator reads the record as a sequence rather than as a pile of pages." },
      { type: "p", text: "Records are best requested from the institution in their original language, rather than in an English version the institution prepares itself, unless the evaluator specifically accepts institutional translations." },
      { type: "p", text: "Where a document has been reissued, replaced or corrected, both versions are worth keeping, because an evaluator may ask why a date or a grade changed between them." },
      { type: "h2", text: "Transcripts Carry More Than Grades" },
      { type: "p", text: "A transcript is a dense document and very little on it is decorative." },
      { type: "p", text: "It sets out course titles, credit values, contact hours, marks, the grading scale in use, academic years, semesters, the language of instruction and often a summary of the qualification awarded." },
      { type: "p", text: "All of it is translated." },
      { type: "p", text: "The grading scale printed on the reverse of a transcript is easy to overlook and it is one of the most important elements on the page, because it tells the evaluator what a given mark actually means. A translation that reproduces the marks but omits the scale leaves the evaluator hunting for it." },
      { type: "p", text: "Tables are kept as tables, with rows aligned to the original." },
      { type: "h2", text: "Grades and Credits Stay as They Are" },
      { type: "p", text: "Numbers are carried across, not converted." },
      { type: "p", text: "A mark of 4.5 on a five point scale stays a 4.5 on a five point scale. A credit expressed in local units stays in local units." },
      { type: "p", text: "Converting a grade inside the translation removes the evaluator’s ability to run their own conversion and check it against the scale." },
      { type: "p", text: "The same applies to the qualification itself. A degree title is translated, not reclassified." },
      { type: "p", text: "Where a term has no clean English counterpart, the usual approach is to translate it plainly and, where it helps the reader, keep the original wording in brackets beside it." },
      { type: "p", text: "That gives the evaluator both the meaning and the source term to work from." },
      { type: "quote", text: "“A translation tells the reader what a document says. An evaluation tells them what it is worth. Confusing the two costs applicants weeks.”" },
      { type: "h2", text: "Diplomas, Seals and Issuing Bodies" },
      { type: "p", text: "A diploma is a short document carrying a great deal of authority." },
      { type: "p", text: "The text is usually brief, but the page also holds the institution’s seal, a registration or serial number, the signatures of a rector or dean, and sometimes a ministry stamp confirming that the institution is recognised by the state." },
      { type: "p", text: "Each of those elements is carried into the translation, with the wording inside a seal translated and a short bracketed note recording where it sits on the page." },
      { type: "p", text: "Institution names need care. The official English name a university uses for itself is preferred where one exists, with the original name kept alongside it so the evaluator can match the two records." },
      { type: "p", text: "Where a university has since been renamed or merged, a short translator’s note is more useful to the reader than silence." },
      { type: "h2", text: "Course Descriptions and Syllabi" },
      { type: "p", text: "Some evaluations go deeper than the transcript." },
      { type: "p", text: "Applicants seeking professional licensing, credit transfer or admission to a graduate programme are often asked for course descriptions, contact hours, laboratory components, reading lists or a full syllabus for each subject studied." },
      { type: "p", text: "These are long documents and usually the largest part of the cost, so it is worth confirming exactly which courses have to be covered before the work begins." },
      { type: "p", text: "Terminology consistency matters more here than anywhere else in the file. A subject named one way in the transcript and another way in the syllabus reads to an evaluator as two different courses." },
      { type: "p", text: "A glossary built from the transcript keeps the two documents aligned." },
      { type: "h2", text: "Sending Documents to the Evaluator" },
      { type: "p", text: "Delivery requirements vary and they are not negotiable." },
      { type: "p", text: "Some evaluators accept a PDF uploaded by the applicant. Others require the translation to be sent directly by the provider that prepared it, or to arrive in a sealed envelope together with records sent by the issuing institution." },
      { type: "p", text: "The certification statement travels with the translation, signed and dated, and most evaluators also want the record in its original language attached so the two can be checked against each other." },
      { type: "p", text: "Reading the delivery instructions before ordering avoids paying twice for the same file." },
      { type: "h2", text: "Planning Around the Deadline" },
      { type: "p", text: "Academic deadlines do not move." },
      { type: "p", text: "An application depends on a chain of steps: the institution issues the records, a translator prepares and certifies them, the evaluator completes a report, and an admissions office finally reads it. Every step in that chain has its own turnaround time." },
      { type: "p", text: "The step applicants control least is the first one." },
      { type: "p", text: "Requesting records early, translating them as a complete set rather than in pieces, and confirming the evaluator’s requirements before work starts is the most reliable way to arrive on time." },
    ],
  },
  {
    slug: "understanding-legal-protection",
    title: "Preparing documents for an immigration filing",
    description:
      "How civil records, police certificates and supporting letters are translated and certified for a filing that has to be accepted.",
    meta: {
      title: "Preparing documents for an immigration filing · Global Language Solutions",
      description:
        "Civil records, police certificates and affidavits, prepared and certified so that an immigration filing is not sent back for more evidence.",
    },
    date: {
      full: "June 29, 2026",
      indexCard: "Immigration · Jun 29, 2026",
      relatedCard: "Jun 29, 2026",
      iso: "2026-06-29T00:00:00.000Z",
    },
    image: { src: "/kafka/img/Qjk4bSH5NQP9U8oyL1XDb1o228.png", width: 1440, height: 745 },
    body: [
      { type: "h2", text: "Before the Filing Is Assembled" },
      { type: "p", text: "An immigration filing is built from documents that were never designed to travel. A birth certificate issued forty years ago in one country has to be read by an officer in another, in a different language, alongside twenty other pages, in a matter of minutes." },
      { type: "p", text: "The translation is what makes that possible. It has to be complete, accurate and certified, and it has to follow the original closely enough that a reader can move between them without effort." },
      { type: "p", text: "Most trouble in this area is not caused by translation. It is caused by preparation: a page missing from a set, a name spelled two ways, a seal left undescribed, a certification without a date. Any one of those can turn a decision into a request for more evidence." },
      { type: "p", text: "Working backwards from what the officer has to see removes nearly all of them." },
      { type: "h2", text: "One Rule Governs the Translation" },
      { type: "p", text: "Filings made in the United States are governed by a short and specific rule. Any document in a foreign language must be accompanied by a full English translation together with a signed certification from the translator." },
      { type: "p", text: "The certification states that the translation is complete and accurate and that the translator is competent to translate from the source language into English. That requirement is set out at 8 CFR 103.2(b)(3)." },
      { type: "p", text: "It does not have to be prepared by an attorney, and no government body operates an approval scheme or keeps a list of agencies that an applicant is obliged to choose from." },
      { type: "p", text: "What is not accepted is a translation produced by software alone. Machine only translations are rejected, and no responsible translator will put a signature to output they did not write." },
      { type: "p", text: "Other countries set their own rules, and sworn or court appointed translators are required in some of them, so the destination decides the route the document takes." },
      { type: "quote", text: "“The document has to be accepted, not admired. Every decision taken while preparing it is made with that in mind.”" },
      { type: "h2", text: "Civil Records Are the Core of Most Files" },
      { type: "p", text: "Most filings rest on a small number of civil records." },
      { type: "p", text: "Birth certificates, marriage certificates, divorce decrees, death certificates, adoption orders, name change orders and household registration extracts appear again and again, in every format a registry office has ever used." },
      { type: "p", text: "Some are printed forms with handwritten entries. Some are extracts from a register. Some are recent reissues of a much older record, carrying two sets of dates and two sets of stamps on the same page." },
      { type: "p", text: "The translation follows the document as it was issued. A reissued certificate is translated as a reissued certificate, including the note explaining why it was reissued." },
      { type: "p", text: "Where the source is faint, damaged or partly illegible, the translation notes it in the position where the problem appears rather than filling the gap." },
      { type: "h2", text: "Every Marking on the Page" },
      { type: "p", text: "Officers read the whole page." },
      { type: "p", text: "Seals, stamps, revenue labels, registration numbers, marginal annotations, correction notes and signatures all carry information about who issued a document and when." },
      { type: "p", text: "Every one of them appears in the translated file. Wording inside a seal is translated in place, and the seal is identified in brackets so the officer can match it to the original." },
      { type: "p", text: "A signature is identified as one. Where the name beneath it can be read it is transcribed, and where it cannot the translation records that it was illegible." },
      { type: "p", text: "Blank fields are not silently dropped. A field left empty on the original is shown as empty, because an absent entry can matter as much as a completed one." },
      { type: "p", text: "Set beside an original crowded with official marks, a translated page carrying only the main text invites the question of what happened to the rest." },
      { type: "h2", text: "Names That Match Across the File" },
      { type: "p", text: "A filing is read as one document, not as a stack of separate ones." },
      { type: "p", text: "Names transliterated from another script can be spelled several defensible ways, and different registry offices in the same country will have chosen differently over the years." },
      { type: "p", text: "The passport spelling is the anchor. Translations follow it, and a translator’s note records every place where the source document spells the name another way." },
      { type: "p", text: "Places, institutions and issuing authorities are handled the same way, decided once and applied across the whole set rather than settled again on each page." },
      { type: "p", text: "Dates written only in numbers are written out in full, because 05/06 means one month in the country of issue and a different one in the country of filing." },
      { type: "h2", text: "Police Records, Affidavits and Letters" },
      { type: "p", text: "Supporting documents are less standardised and often harder to prepare." },
      { type: "p", text: "Police clearance certificates, court records, employment letters, bank statements, affidavits of support and letters from family members are written by people rather than by a form designer." },
      { type: "p", text: "They can be long, informal or repetitive, and they sometimes use phrasing with no direct English counterpart. The translation stays close to the source instead of tidying it into better prose." },
      { type: "p", text: "Where an affidavit was sworn before a notary or a commissioner, the notarial block and its stamp are part of the document and are translated along with it." },
      { type: "p", text: "Letters written to support a filing carry more weight when they are specific, and a translation cannot add detail that the original does not contain." },
      { type: "h2", text: "Format, Delivery and Confidentiality" },
      { type: "p", text: "How a file looks affects how quickly it is read." },
      { type: "p", text: "Translations are usually delivered as PDFs that mirror the source layout page for page, with the translation of each source page appearing in the same order as the original." },
      { type: "p", text: "The signed certification sits at the front or the back of the set, and the original is included alongside it wherever the receiving office expects to see both." },
      { type: "p", text: "Confidentiality applies throughout. Documents of this kind carry addresses, identity numbers and family details, and they are handled under a non disclosure agreement as a matter of course." },
      { type: "h2", text: "Building In Time" },
      { type: "p", text: "Filing dates are fixed long before the documents are ready." },
      { type: "p", text: "Records have to be requested from registry offices abroad, sometimes reissued, sometimes apostilled, and only then translated and certified. Each of those steps runs on its own timetable, and only the last of them is under the applicant’s control." },
      { type: "p", text: "Sending the full set at once, with the deadline stated, gives a translator the context to keep names and terminology consistent and to flag a missing document while there is still time to obtain it." },
    ],
  },
  {
    slug: "modern-legal-services-today",
    title: "Terminology management in long term business translation",
    description:
      "How glossaries, translation memory and a style guide keep terminology consistent across a company’s documents over the years.",
    meta: {
      title: "Terminology management in long term business translation · Global Language Solutions",
      description:
        "What a company gets back from settling its terminology once and keeping the record current across every document that follows.",
    },
    date: {
      full: "April 24, 2026",
      indexCard: "Terminology · Apr 24, 2026",
      relatedCard: "Apr 24, 2026",
      iso: "2026-04-24T00:00:00.000Z",
    },
    image: { src: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png", width: 1312, height: 745 },
    body: [
      { type: "h2", text: "Consistency Is the Product" },
      { type: "p", text: "A company that translates one document has a translation task. A company that translates continuously has a terminology problem. Product names, job titles, legal entity names, contract definitions, warranty language and internal process names recur across hundreds of files, and each of them can be rendered in several defensible ways." },
      { type: "p", text: "Any of those renderings may be correct on its own. The difficulty appears when a term is translated one way in a distribution agreement, another way in the product manual that agreement refers to, and a third way on the website a customer reads before signing. Nothing on the page tells the reader whether they are looking at one thing or three, and in a contract that ambiguity has a price." },
      { type: "p", text: "Terminology management is the practice of settling those questions once, recording the decision, and applying it to everything that follows. It is unglamorous work and it is most of the difference between a supplier and a language partner." },
      { type: "h2", text: "Where Inconsistency Comes From" },
      { type: "image", src: "/kafka/img/dW7lQMtwln30YCc5d986Pg7YGE.png", width: 656, height: 372, ratio: "1312 / 745" },
      { type: "p", text: "Inconsistency is rarely the result of a careless translator. It is the result of a translator working without access to what was decided last time." },
      { type: "p", text: "A few ordinary situations produce it." },
      { type: "p", text: "A company sends work to different providers over several years. A provider brings in more linguists as volumes rise. A source text changes wording between versions. A new market opens, and the same English term arrives in a second target language with no reference point to work from." },
      { type: "p", text: "Reviewers inside the client organisation add their own preferences, and those preferences stay in one person’s head rather than in a document a translator can read before starting." },
      { type: "p", text: "None of this is unusual. All of it is solvable with a glossary, a translation memory and a written record of who decides." },
      { type: "h2", text: "The Glossary Is a Client Document" },
      { type: "p", text: "A glossary is a list of terms with an approved translation for each one." },
      { type: "p", text: "A useful glossary holds more than a pair of words. It carries a short definition, the context the term appears in, a note on any wording that must not be used, and, where the client has a firm preference, the reason behind it." },
      { type: "p", text: "It belongs to the client. When the glossary sits with the client rather than inside a provider’s system, it travels with them, and a change of provider stops being a change of vocabulary." },
      { type: "p", text: "Building one need not be a project in itself. Most glossaries start with fifty terms drawn from the first substantial document and grow as questions come up." },
      { type: "h2", text: "Translation Memory and What It Does" },
      { type: "p", text: "A translation memory is a database of previously translated segments, stored alongside their source text and offered back when the same or a similar segment appears again." },
      { type: "p", text: "For material that repeats, which describes most contracts, policies, financial statements and product documentation, the effect is direct. Repeated sentences are translated once and reused consistently, a revised document only needs attention where the source has actually changed, and cost falls as the memory grows." },
      { type: "p", text: "It is not machine translation. A translation memory returns text a qualified linguist wrote and approved for that client, which is why it can be relied on and why it has to be maintained." },
      { type: "p", text: "A memory holding an error will reproduce that error faithfully across every future document until someone corrects it at the source." },
      { type: "h2", text: "A Style Guide Covers What a Glossary Cannot" },
      { type: "p", text: "Some decisions are not about individual words." },
      { type: "p", text: "Whether the company addresses customers formally or informally, how numbers, dates and currencies are written, whether English product names stay untranslated, how headings are capitalised and how legal entity names appear are all settled once and written down." },
      { type: "p", text: "In languages that distinguish formal from informal address, that single choice colours the tone of every sentence a customer reads, and it is not a decision a translator should be taking alone." },
      { type: "p", text: "A style guide of two pages, kept current, removes more inconsistency than any amount of review after the fact." },
      { type: "h2", text: "Who Decides the Right Term" },
      { type: "p", text: "The hardest terminology questions are not linguistic." },
      { type: "p", text: "When a term has two plausible translations, the choice often depends on how the company positions itself in that market, what its local sales team already says, or what a regulator expects to see on the page. A translator cannot answer that from the source document." },
      { type: "p", text: "The practical answer is a named reviewer in the target market with the authority to decide, and a short route for the translator to reach them with a specific question." },
      { type: "p", text: "Once a decision is made it goes into the glossary with a date against it, so the same question is not reopened by a different linguist a year later." },
      { type: "quote", text: "“Terminology work is cheap while a document is being written and expensive once it is sitting in front of a customer.”" },
      { type: "h2", text: "Keeping the Assets Current" },
      { type: "p", text: "A glossary and a memory are working assets rather than deliverables." },
      { type: "p", text: "They need maintenance: new terms added as products and policies change, retired terms marked as retired, corrections applied at the source instead of in one file, and duplicates removed before they multiply." },
      { type: "p", text: "Review is easiest when it happens alongside the translation work. A reviser checking a document against its source is already looking at the terms in context, and a note from that pass is worth more than a separate audit six months later." },
      { type: "p", text: "Clients should be able to ask for their glossary and their memory at any time, in a standard format, without a conversation about who owns them." },
      { type: "h2", text: "What Consistency Is Worth" },
      { type: "p", text: "Consistent terminology is not a matter of tidiness. It shortens legal review, because a lawyer reading a translated contract can match the defined terms to the ones they approved last time." },
      { type: "p", text: "It shortens internal approval, because a reviewer in the target market is checking new material rather than rereading decisions already taken. It lowers cost, because repeated content is not paid for twice. It reduces risk, because a term carrying a regulatory meaning keeps that meaning across every document that uses it." },
      { type: "p", text: "Over a long relationship these effects compound. The first project pays for the glossary. Every project after it collects the return." },
    ],
  },
];

export const insights = {
  /** /insights — the listing page. */
  index: {
    meta: {
      title: "Global Language Solutions",
      description:
        "Practical writing on certified translation, academic records, immigration filings and terminology, from the linguists who prepare them.",
    },
    hero: {
      eyebrow: "INSIGHTS",
      title: "Practical guidance on documents and language",
    },
    latest: {
      heading: "Explore our latest writing",
    },
  },

  /** /insights/[slug] — the furniture around an article. */
  article: {
    /** <title> used when a slug matches no article. */
    metaTitleFallback: "Insight · Global Language Solutions",
    related: {
      eyebrow: "INSIGHTS",
      heading: "Explore our latest insights",
      viewAll: "View all",
    },
  },

  articles,
};

export type InsightsDict = typeof insights;
