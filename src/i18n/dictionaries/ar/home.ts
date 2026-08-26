import type { HomeDict } from "../en/home";
import type { Translated } from "./translated";

/**
 * home namespace — Arabic.
 *
 * Structure follows the English source exactly, section by section. Two things
 * are load bearing and are preserved rather than translated:
 *
 *   - the `\u2028\u2028` pairs inside `services.heading`, `about.headingFaded`
 *     and `testimonials.heading`, which are the forced line breaks the design
 *     sets its display type on. The Arabic is re-broken at a grammatical joint
 *     so each line still reads as a unit;
 *   - the trailing spaces on `about.headingLead` and `faq.headingLineOne`,
 *     which are the only thing separating a solid run from the faded run that
 *     follows it.
 *
 * `HomeDict` is const-asserted in English, so it is widened through
 * `Translated` — see ./translated.ts. Key names and array lengths are still
 * enforced.
 */
export const home: Translated<HomeDict> = {
  /** Section 00 — full-viewport video hero. */
  hero: {
    intro:
      "ترجمات معتمدة ومترجمون شفويون للملفات والطلبات والاتفاقات التي يعتمد عليها الناس.",
    servicesLinkLabel: "خدماتنا",
    heading: "ترجمة للمستندات التي يُعتدّ بها.",
  },

  /** Section 01 — strip above the client logo marquee. */
  trusted: {
    eyebrow: "موضع ثقة",
  },

  /**
   * Section 02 — about statement. The three runs concatenate into one
   * sentence: «توفّر Global Language Solutions ترجمة معتمدة لأغراض الهجرة والتعليم
   * والأعمال.» then, after the break, the closing sentence.
   */
  about: {
    eyebrow: "من نحن",
    headingLead: "توفّر Global Language Solutions ترجمة معتمدة ",
    headingFaded: "لأغراض الهجرة والتعليم والأعمال. \u2028\u2028",
    headingFadedClosing: "ويُجهَّز كل ملف للجهة أو المؤسسة التي عليها قبوله.",
  },

  /** Section 03 — service list with an image per row. */
  services: {
    eyebrow: "خدماتنا",
    heading: "ترجمة وخدمات لغوية\u2028\u2028تلتزم بالمواعيد الفعلية.",
    ctaLabel: "أخبرنا بما تحتاج إلى ترجمته",
    items: [
      {
        no: "001",
        title: "الترجمة المعتمدة",
        body: "سجلات مدنية وإقرارات مشفوعة بيمين لملفات الهجرة، مع شهادة دقة موقّعة.",
      },
      {
        no: "002",
        title: "السجلات الأكاديمية",
        body: "كشوف درجات وشهادات ومقررات مُعدّة لجهات تقييم المؤهلات ومكاتب القبول.",
      },
      {
        no: "003",
        title: "ترجمة الأعمال",
        body: "عقود وسجلات مؤسسية وسياسات يتولاها لغويون ذوو خلفية في المجال.",
      },
      {
        no: "004",
        title: "الترجمة الشفوية",
        body: "ترجمة تتابعية وفورية، حضوريًا أو عن بُعد، لجلسات الاستماع والاجتماعات.",
      },
    ],
  },

  /** Section 04 — language expertise: heading row, four stats, portrait. */
  expertise: {
    eyebrow: "الخبرة اللغوية",
    heading: "ترجمة معتمدة، مراجَعة وجاهزة للتقديم.",
    summary: "لغويون مؤهلون، ومراجعة مستقلة، واعتماد موقّع.",
    stats: [
      {
        value: "1,000+",
        label: "عملاء دعمناهم",
        copy: "أفراد وعائلات وطلاب وشركات يحتاجون إلى قبول مستنداتهم عبر اللغات والحدود.",
      },
      {
        value: "40+",
        label: "لغات نغطيها",
        copy: "لغويون مؤهلون يترجمون إلى لغتهم الأم، في الأزواج اللغوية التي يطلبها عملاؤنا أكثر من غيرها.",
      },
      {
        value: "10+",
        label: "سنوات من الممارسة",
        copy: "عمل على المستندات لعملاء أفراد ومؤسسات وشركات، بُني زوجًا لغويًا بعد آخر.",
      },
      {
        value: "100%",
        label: "مراجعة مستقلة",
        copy: "لا تخرج أي ترجمة بناءً على رأي لغوي واحد. يقارنها لغوي مؤهل ثانٍ بالنص المصدر.",
      },
    ],
  },

  /** Section 05 — the four step process. */
  howWeWork: {
    eyebrow: "كيف نعمل",
    /** The two halves read as one sentence across the `<br/>`. */
    headingLineOne: "تمرّ كل ترجمة",
    headingLineTwo: "بالخطوات الأربع نفسها.",
    ctaLabel: "أرسل إلينا مستنداتك",
    steps: [
      {
        title: "مراجعة المستندات",
        body: "نقرأ مستنداتك، ونتأكد مما تطلبه الجهة المستلمة، ونتفق على النطاق والموعد النهائي.",
      },
      {
        title: "الترجمة",
        body: "يتولى الترجمة لغوي مؤهل ذو خلفية في المجال، ينقلها إلى لغته الأم.",
      },
      {
        title: "المراجعة المستقلة",
        body: "يقارن لغوي ثانٍ الترجمة بالنص المصدر من حيث الدقة والمصطلحات والتنسيق.",
      },
      {
        title: "التسليم والاعتماد",
        body: "نسلّم بالصيغة المطلوبة مع شهادة دقة ترجمة موقّعة.",
      },
    ],
  },

  /** Section 06 — four alternating project cards. */
  documentTypes: {
    eyebrow: "ما نترجمه",
    heading: "عمل لغوي لا بد أن يحظى بالقبول.",
    ctaLabel: "استكشف خدماتنا",
    items: [
      {
        marker: "01",
        title: "ملفات الهجرة",
        tags: ["سجلات مدنية", "سجلات الشرطة", "إقرارات مشفوعة بيمين"],
      },
      {
        marker: "02",
        title: "السجلات الأكاديمية",
        tags: ["كشوف الدرجات", "الشهادات", "توصيفات المقررات"],
      },
      {
        marker: "03",
        title: "مستندات الأعمال والمستندات القانونية",
        tags: ["العقود", "السجلات المؤسسية", "الامتثال"],
      },
      {
        marker: "04",
        title: "الترجمة الشفوية",
        tags: ["تتابعية", "فورية", "عن بُعد وحضوريًا"],
      },
    ],
  },

  /** Section 07 — single pull quote beside a portrait. */
  testimonials: {
    eyebrow: "رأي عميل",
    heading: "ما يقوله العملاء عن\u2028\u2028الملف بعد إنجازه.",
    attribution: "محامي هجرة",
    quote:
      "“ملفات كاملة، وكل ختم وطابع في موضعه، والاعتماد موقّع. لم يُرَدّ إلينا شيء.”",
    ctaLabel: "تحدّث إلى مدير مشاريع",
  },

  /** Section 08 — accordion of five questions. */
  faq: {
    eyebrow: "أسئلة يطرحها العملاء",
    /** Breaks across a hard `<br/>`; the trailing space is deliberate. */
    headingLineOne: "إجابات قبل أن ترسل ",
    headingLineTwo: "ملفك",
    items: [
      {
        question: "ما الذي تطلبه الجهات المستلمة؟",
        answer:
          "ترجمة كاملة للمستند بأكمله، مع تمثيل الأختام والطوابع، وبيان دقة موقّع من المترجم.",
      },
      {
        question: "ماذا يشمل الاعتماد؟",
        answer:
          "تحمل كل ترجمة شهادة دقة ترجمة موقّعة ومؤرخة، إضافة إلى دعم التوثيق والأبوستيل حين تطلبهما جهة ما.",
      },
      {
        question: "كيف تُحدَّد التكلفة ومدة الإنجاز؟",
        answer:
          "نقرأ المستندات أولًا، ثم نؤكد سعرًا ثابتًا وموعد تسليم كتابةً. ومعظم السجلات المدنية القصيرة جاهزة خلال أيام قليلة.",
      },
      {
        question: "كيف تُحفظ سرية مستنداتي؟",
        answer:
          "لا يطّلع على الملفات سوى اللغويين المكلفين بمشروعك، وكل منهم مرتبط باتفاق عدم إفشاء. السرية قاعدة لا خدمة إضافية.",
      },
      {
        question: "هل تجرون تقييم المؤهلات؟",
        answer:
          "لا. تتولى ذلك جهات مثل أعضاء NACES، وهي تشترط ترجمة إنجليزية معتمدة لكل كشف درجات. وهذا هو الجزء الذي نقدمه.",
      },
    ],
  },
};
