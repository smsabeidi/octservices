import type { AboutDict } from "../en/about";

/**
 * about namespace — Arabic.
 *
 * List order is load bearing: `services.items`, `team.members`,
 * `process.steps` and `career.jobs` are paired by position with image paths and
 * job routes held in the components, so entries stay in the English order.
 *
 * Role titles are kept identical to the ones in the careers namespace, so the
 * three openings listed here match the pages they link to.
 */
export const about: AboutDict = {
  meta: {
    title: "OCT Services",
    // The "\n " after the first sentence is in the English source and is kept.
    description:
      "الأشخاص والعملية والمعيار وراء كل ترجمة تسلّمها OCT Services.\n اقرأ كيف ينتقل المستند من عرض السعر إلى شهادة موقّعة.",
  },

  hero: {
    eyebrow: "من نحن",
    heading: "شريكك لترجمات دقيقة ومقبولة",
    lead: "نترجم لمقدمي الطلبات والطلاب والمحامين والشركات، في الأزواج اللغوية التي يحتاجونها.",
  },

  mission: {
    eyebrow: "مهمتنا",
    /** Solid run, then the 50% run. The two read as one sentence in order. */
    headingLead: "مهمتنا هي ",
    headingRest:
      "إزالة حاجز اللغة، ليُفهم كل ملف وطلب واتفاق تمامًا كما كُتب.",
  },

  founder: {
    eyebrow: "فكرتنا التأسيسية",
    heading: "شرط واحد يحكم كل شيء.",
    standard: {
      eyebrow: "المعيار الذي نعمل به",
      paragraphOne: "لكل مستند جهة يقصدها.",
      paragraphTwo:
        "نعمل انطلاقًا مما ستقبله الجهة المستلمة، ونبني كل مشروع على هذا الأساس.",
    },
    metrics: [
      { value: "1,000+", label: "عملاء خدمناهم" },
      { value: "40+", label: "لغات نغطيها" },
    ],
  },

  services: {
    eyebrow: "خدماتنا",
    /* the two U+2028 line separators of the source are kept, at the same joint */
    heading: "ما نترجمه،\u2028\u2028وما تحصل عليه.",
    cta: "تحدّث إلينا عن مستنداتك",
    items: [
      {
        number: "001",
        title: "الترجمة المعتمدة",
        body: "سجلات الميلاد والزواج والشرطة، مُعدّة وفق شروط التقديم السارية.",
      },
      {
        number: "002",
        title: "السجلات الأكاديمية",
        body: "شهادات التخرج وكشوف الدرجات والمقررات، مترجمة حرفيًا ليقيّمها المُقيّم.",
      },
      {
        number: "003",
        title: "ترجمة الأعمال",
        body: "الاتفاقيات والقوائم المالية ومواد الامتثال، متسقة بفضل مسرد خاص بالعميل.",
      },
      {
        number: "004",
        title: "الترجمة الشفوية",
        body: "مترجمون للمواعيد وجلسات الاستماع والاجتماعات، حضوريًا أو عبر اتصال عن بُعد.",
      },
    ],
  },

  team: {
    eyebrow: "فريقنا",
    heading: "تعرّف على فريقنا",
    headingTablet: "الأشخاص وراء كل ترجمة.",
    members: [
      {
        name: "مدير مشاريع",
        role: "النطاق والمواعيد وشروط التقديم",
      },
      {
        name: "مترجم أول",
        role: "الترجمة إلى اللغة الأم، بحسب المجال",
      },
      {
        name: "مراجع مستقل",
        role: "يقارن كل ترجمة بمستندها المصدر",
      },
      {
        name: "أخصائي مصطلحات",
        role: "المسارد وأدلة الأسلوب وذاكرة الترجمة",
      },
      {
        name: "مترجم شفوي",
        role: "تتابعية وفورية، حضوريًا وعن بُعد",
      },
      {
        name: "منسق عملاء",
        role: "عروض الأسعار والسرية وتداول المستندات",
      },
    ],
  },

  process: {
    eyebrow: "كيف نعمل",
    /** The manual break falls between these two halves; trailing space kept. */
    headingLineOne: "عملية مبنية على ",
    headingLineTwo: "ما يحظى بالقبول.",
    headingTablet: "عملية مبنية على ما يحظى بالقبول.",
    cta: "اطلب عرض سعر",
    steps: [
      {
        title: "مراجعة المستندات",
        body: "ننظر في الملفات المصدر، ونتحقق من الجهة التي سيذهب إليها الملف، ونعرض نطاقًا وموعدًا ثابتين.",
      },
      {
        title: "الترجمة",
        body: "يذهب العمل إلى لغوي يترجم إلى لغته هو ويعرف الموضوع.",
      },
      {
        title: "المراجعة المستقلة",
        body: "يقرأ المراجع الترجمة إلى جانب المصدر، متحققًا من الأسماء والأرقام والمصطلحات والتنسيق.",
      },
      {
        title: "التسليم والاعتماد",
        body: "تصل الملفات بالصيغة المطلوبة، مع شهادة دقة موقّعة ومؤرخة.",
      },
    ],
  },

  career: {
    eyebrow: "الوظائف",
    heading: "انضم إلينا",
    intro:
      "انضم إلى OCT Services، فريق من اللغويين والمنسقين يتولى مستندات ينتظرها أفراد ومؤسسات.",
    employmentType: "دوام كامل",
    location: "عن بُعد",
    cta: "عرض الوظيفة",
    jobs: [
      { title: "مدير مشاريع" },
      { title: "مترجم أول" },
      { title: "مراجع جودة" },
    ],
  },
};
