import type { Dictionary } from "../en";

import { meta } from "./meta";
import { chrome } from "./chrome";
import { home } from "./home";
import { about } from "./about";
import { contact } from "./contact";
import { insights } from "./insights";
import { careers } from "./careers";
import { legal } from "./legal";

/**
 * German dictionary.
 *
 * The English dictionary is the source of truth, so this file is checked
 * against it: `Translated<Dictionary>` is `Dictionary` with every string leaf
 * widened from its English literal to `string`. Key names, nesting, optional
 * fields and array lengths are still enforced exactly, so a missing or
 * misspelled key — or a list that has gained or lost an entry — is a build
 * error. Only the words are allowed to differ, which is the point of a
 * translation.
 *
 * The widening is needed because `en/home.ts` and `en/contact.ts` are declared
 * `as const`: without it, `Dictionary` would pin those two namespaces to the
 * English wording itself and no translation could ever satisfy it.
 */
type Translated<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : { [K in keyof T]: Translated<T[K]> };

const de: Translated<Dictionary> = {
  meta,
  chrome,
  home,
  about,
  contact,
  insights,
  careers,
  legal,
};

/** `get-dictionary.ts` types every locale module as `{ dictionary: Dictionary }`. */
export const dictionary = de as Dictionary;
