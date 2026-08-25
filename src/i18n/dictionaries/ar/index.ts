import { meta } from "./meta";
import { chrome } from "./chrome";
import { home } from "./home";
import { about } from "./about";
import { contact } from "./contact";
import { insights } from "./insights";
import { careers } from "./careers";
import { legal } from "./legal";
import type { Dictionary } from "../en";

/**
 * ar dictionary — Modern Standard Arabic, rendered right to left.
 *
 * Typed as `Dictionary`, so a missing or misspelled key fails the build.
 *
 * `home` and `contact` are the exception: `en/home.ts` and `en/contact.ts` end
 * in `as const`, which pins every one of their strings to a literal type that
 * only the English wording can satisfy. Those two are checked in their own
 * files against `Translated<HomeDict>` / `Translated<ContactDict>` — same keys,
 * same tuple lengths, string leaves widened — and asserted here, because no
 * translation of an `as const` namespace can be assignable to it directly.
 */
export const dictionary: Dictionary = {
  meta,
  chrome,
  home: home as unknown as Dictionary["home"],
  about,
  contact: contact as unknown as Dictionary["contact"],
  insights,
  careers,
  legal,
};
