"use client";

import { useEffect } from "react";

/**
 * Shared scroll-entrance pass.
 *
 * The source site animates blocks in as they enter the viewport (Framer applies
 * an opacity/translate pre-state to RichTextContainers and media). Rather than
 * editing every section component, this observes top-level section children and
 * toggles a single class; the transition itself lives in globals.css.
 *
 * Respects prefers-reduced-motion, and no-ops safely if IntersectionObserver
 * is unavailable (elements simply stay visible).
 */
export function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    const targets = new Set<Element>();
    document.querySelectorAll("main section").forEach((section) => {
      const kids = section.querySelectorAll(":scope > *, :scope > * > *");
      (kids.length ? kids : [section]).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.height > 24 && r.height < 2400) targets.add(el);
      });
    });
    if (!targets.size) return;

    targets.forEach((el) => el.classList.add("kf-reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("kf-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );

    targets.forEach((el) => {
      // Anything already on screen at load reveals immediately (no flash).
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("kf-in");
      else io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
