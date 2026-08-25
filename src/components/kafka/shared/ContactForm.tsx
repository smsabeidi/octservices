"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Contact form — rebuilt from the source /contact "Content" section
 * (framer-1bk8tsk form inside the framer-gjCGB scope).
 *
 * Source CSS:
 *   form (.framer-1bk8tsk): bg #fcfbf7, column, flex 1 0 0 (w 1px), gap 20px,
 *   padding 20px, overflow hidden; phone: flex none, width 100%.
 *   name/email row (.framer-edwxcw): row, gap 20px; phone: column.
 *   field wrap (.framer-jtn4jv / .framer-ukpbqu): column, flex 1 0 0, w 1px,
 *   gap 10px; phone: flex none, width 100%.
 *   message wrap (.framer-y7mtus): column, flex none, width 100%, gap 10px.
 *   label p (preset 137jsv7): 12px/120%/-0.02em, uppercase, #101010, pre.
 *   inputs (.framer-737eer / .framer-1qzw5yl): bg #fff, h 40px, border 1px
 *   solid #8888881a, focus border #101010cc, padding 12px 16px, Schibsted
 *   Grotesk 16px/1.2 w500, letter-spacing 0, placeholder #10101033.
 *   textarea (.framer-16wonnh): same tokens, height auto, min-height 250px,
 *   resize vertical, white-space break-spaces.
 *   button (.framer-dhmsn0): h 60px, width 100% (inline style), bg #101010,
 *   centered row; label preset rgrid2 (16px/120%/-0.02em) in #fff.
 *
 * The source posts to Framer's form backend; the extracted markup captures
 * only the pre-submit DOM, so submission is inert here (no invented copy).
 *
 * This is a client component, so it cannot read the dictionary itself: every
 * visible string arrives as the `t` prop from the /contact page. The `name`
 * attributes are the form backend's wire format, not copy, so they stay put.
 */

const wrapClass =
  "relative flex w-full items-center border border-[#8888881a] bg-paper transition-colors duration-200 focus-within:border-[#101010cc]";

const inputClass =
  "h-full w-full min-w-0 bg-transparent px-4 text-[16px] font-medium leading-[1.2] tracking-[0em] text-ink outline-none placeholder:text-[#10101033]";

const labelClass =
  "whitespace-pre-wrap text-[12px] uppercase leading-[1.2] tracking-[-0.02em] text-ink";

/* Framer's honeypot inputs, reproduced in source order. */
const HONEYPOTS = [
  "website",
  "company",
  "message",
  "subject",
  "title",
  "description",
  "feedback",
  "notes",
  "details",
  "remarks",
  "comments",
];

export function ContactForm({ t }: { t: Dictionary["contact"]["form"] }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
      }}
      className="relative flex w-px flex-1 flex-col items-start gap-5 overflow-hidden bg-cream p-5 max-[809px]:w-full max-[809px]:flex-none"
    >
      {/* .framer-edwxcw */}
      <div className="flex w-full flex-row items-center justify-center gap-5 max-[809px]:flex-col">
        {/* .framer-jtn4jv */}
        <label className="flex w-px flex-1 flex-col items-start gap-[10px] max-[809px]:w-full max-[809px]:flex-none">
          <p className={labelClass}>{t.name.label}</p>
          <div className={`${wrapClass} h-10`}>
            <input
              type="text"
              required
              name="Name"
              placeholder={t.name.placeholder}
              className={inputClass}
            />
          </div>
        </label>
        {/* .framer-ukpbqu */}
        <label className="flex w-px flex-1 flex-col items-start gap-[10px] max-[809px]:w-full max-[809px]:flex-none">
          <p className={labelClass}>{t.email.label}</p>
          <div className={`${wrapClass} h-10`}>
            <input
              type="email"
              required
              name="mail"
              placeholder={t.email.placeholder}
              className={inputClass}
            />
          </div>
        </label>
      </div>
      {/* .framer-y7mtus */}
      <label className="flex w-full flex-none flex-col items-start gap-[10px]">
        <p className={labelClass}>{t.message.label}</p>
        <div className={`${wrapClass} min-h-[250px] items-stretch`}>
          <textarea
            required
            name="Message"
            placeholder={t.message.placeholder}
            className={`${inputClass} min-h-[250px] resize-y py-3 whitespace-break-spaces`}
          />
        </div>
      </label>
      {/* .framer-4h9fnt-container */}
      <div className="w-full">
        <button
          type="submit"
          className="flex h-[60px] w-full cursor-pointer flex-row items-center justify-center bg-ink transition-opacity duration-200 hover:opacity-90"
        >
          <h6 className="whitespace-pre-wrap text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-white">
            {t.submit}
          </h6>
        </button>
      </div>
      {HONEYPOTS.map((name) => (
        <input
          key={name}
          type="text"
          name={name}
          tabIndex={-1}
          autoComplete="one-time-code"
          aria-hidden="true"
          className="absolute scale-0"
          defaultValue=""
        />
      ))}
    </form>
  );
}
