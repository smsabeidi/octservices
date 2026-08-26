"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

/*
 * FAQ — eyebrow + two line heading + five independently toggling questions.
 * Source layout: kafka.framer.wiki home, section [data-framer-name="FAQ"]
 * (framer-i66c04). Question text sits in the section artifact; answers are not
 * in the SSR markup (closed accordion) and came from the RCj_GmkAF/dSti5MRjt
 * props of the framer-x60c8b "Question" instances in the site's own page module
 * (framerusercontent.com/sites/397zzfLIA2AaskarX4p7nA/cS2HE11ha….CHHB2k4Y.mjs).
 * Copy is Global Language Solutions'; the five item structure and every class are unchanged.
 * Each item toggles independently: the parent (framer-p32pd2) keeps no state,
 * each Question holds its own Question/Answer variant, so several can be open.
 */

export function Faq({ t }: { t: Dictionary["home"]["faq"] }) {
  // Source component defaults every item to the closed ("Question") variant;
  // items open/close independently of each other.
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    // .framer-i66c04: bg #fff, flex row centered, padding 80px 36px;
    // tablet 80px 24px; phone: column, gap 40px, padding 80px 24px
    <section className="flex w-full items-center justify-center gap-5 bg-paper px-9 py-20 text-ink max-[1199px]:px-6 max-[809px]:flex-col max-[809px]:gap-10">
      {/* .framer-1qehi8e: row, gap 20px, max-width 1440px; phone: column, gap 40px */}
      <div className="flex w-full max-w-[1440px] flex-row items-start justify-center gap-5 max-[809px]:flex-col max-[809px]:gap-10">
        {/* Top Content (.framer-hws8ql): column, gap 20px, flex 1; phone: full width */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-5 max-[809px]:w-full max-[809px]:flex-none">
          {/* h6 preset rgrid2, color rgba(16,16,16,0.5) */}
          <h6 className="whitespace-pre-wrap text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
            {t.eyebrow}
          </h6>
          {/* h2 preset rf5nl2: 48px / 42px tablet / 38px phone, 110%, -0.02em */}
          <h2 className="whitespace-pre-wrap text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-ink max-[1199px]:text-[42px] max-[809px]:text-[38px]">
            {t.headingLineOne}
            <br />
            {t.headingLineTwo}
          </h2>
        </div>

        {/* Accordion (.framer-1kbomjl-container -> .framer-p32pd2): column, gap 20px, 1px dividers */}
        <div className="min-w-0 flex-1 max-[809px]:w-full max-[809px]:flex-none">
          <div className="flex w-full flex-col items-start gap-5 overflow-clip">
            {t.items.map((item, i) => {
              const isOpen = open.has(i);
              return (
                <div key={item.question} className="contents">
                  {i > 0 && (
                    // divider (.framer-11kotnf etc.): 1px, rgba(16,16,16,0.2)
                    <div className="h-px w-full bg-[rgba(16,16,16,0.2)]" aria-hidden />
                  )}
                  {/* Question component root (.framer-x60c8b): column, cursor pointer,
                      tabindex=0 in source; whole item is the tap target — onTap opens,
                      and the Answer variant overrides onTap to close */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer flex-col items-start"
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(i);
                      }
                    }}
                  >
                    {/* Question row (.framer-16ik5ae): row, centered, gap 20px, overflow clip */}
                    <div className="flex w-full items-center justify-center gap-5 overflow-clip">
                      {/* .framer-1hwfjk4: flex 1 0 0, width 1px */}
                      <div className="min-w-0 flex-1 text-start">
                        {/* h5 preset 1vgyccl: 20px / 19px tablet / 18px phone, 130%, -0.02em, 500 */}
                        <h5 className="whitespace-pre-wrap text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-ink max-[1199px]:text-[19px] max-[809px]:text-[18px]">
                          {item.question}
                        </h5>
                      </div>
                      {/* Plus (.framer-juhir9): 32x32, two 24x2 strokes; the vertical
                          stroke rotates 90deg -> 180deg when open (+ becomes -).
                          `left-1/2` is physical on purpose: paired with
                          -translate-x-1/2 it centres the stroke, and a centred
                          element lands in the same place in either direction.
                          Swapping it for start-1/2 would break the pairing. */}
                      <span aria-hidden className="relative block h-8 w-8 shrink-0 overflow-clip">
                        <span className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-ink" />
                        <span
                          className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-ink transition-transform duration-[400ms] ease-out ${
                            isOpen ? "rotate-180" : "rotate-90"
                          }`}
                        />
                      </span>
                    </div>
                    {/* Answer reveal (.framer-1bio68y) — source mounts it only in the
                        Answer variant and animates with a 0.4s spring; approximated with
                        a 400ms grid-template-rows reveal. 12px component gap via pt-3. */}
                    <div
                      aria-hidden={!isOpen}
                      className="grid w-full transition-[grid-template-rows,opacity] duration-[400ms] ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        {/* h6 preset rgrid2, color rgba(16,16,16,0.8) */}
                        <h6 className="whitespace-pre-wrap pt-3 text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)]">
                          {item.answer}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
