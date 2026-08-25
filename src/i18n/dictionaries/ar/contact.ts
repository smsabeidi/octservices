import type { ContactDict } from "../en/contact";
import type { Translated } from "./translated";

/**
 * contact namespace — Arabic.
 *
 * The email address, the phone number and the two address lines are not copy:
 * they are addresses, and they stay exactly as the English source has them,
 * trailing space included. `ContactDict` is const-asserted in English, so it is
 * widened through `Translated` — see ./translated.ts.
 */
export const contact: Translated<ContactDict> = {
  meta: {
    title: "OCT Services",
    description:
      "أرسل إلى OCT Services مستنداتك ولغاتك وموعدك النهائي، وسنعود إليك بنطاق وموعد ثابتين كتابةً.",
  },

  hero: {
    eyebrow: "تواصل معنا",
    heading: "أخبرنا بما تحتاجه وبموعد تسليمه.",
  },

  details: {
    talk: {
      label: "تحدّث إلينا",
      email: "info@octservices.com",
      phone: "+45 121 231 289",
    },
    hours: {
      label: "ساعات العمل",
      days: "من الاثنين إلى الجمعة",
      time: "09:00 إلى 18:00",
    },
    address: {
      label: "العنوان",
      line1: "ul. Św Jacka 21 ",
      line2: "38-102 Warszawa",
    },
  },

  form: {
    name: {
      label: "الاسم",
      placeholder: "الاسم الكامل",
    },
    email: {
      label: "البريد الإلكتروني",
      placeholder: "بريدك الإلكتروني",
    },
    message: {
      label: "الرسالة",
      placeholder: "المستندات واللغات والموعد النهائي",
    },
    submit: "إرسال الرسالة",
  },

  map: {
    title: "خريطة",
  },
};
