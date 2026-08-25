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
 * Structural mirror of an English type with its string literals widened.
 *
 * `en/home.ts` and `en/contact.ts` are declared `as const`, so `Dictionary`
 * pins those two namespaces to the English string literals and no translation
 * can satisfy them as written. `Translated<T>` reproduces the English type key
 * for key — same nesting, same readonly tuples, same tuple lengths — and
 * relaxes only the string literals. A missing, misspelled or extra key still
 * fails the build, and so does a list that gains or loses an entry.
 *
 * The other six namespaces are typed directly against their English type in
 * their own file, so they need no widening.
 */
export type Translated<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : { [K in keyof T]: Translated<T[K]> };

/**
 * es dictionary.
 *
 * Typed as `Dictionary`, so every namespace is checked against the English
 * source of truth. `home` and `contact` are narrowed back from their widened
 * type; the check that matters has already happened in their own files.
 */
export const dictionary: Dictionary = {
  meta,
  chrome,
  home: home as Dictionary["home"],
  about,
  contact: contact as Dictionary["contact"],
  insights,
  careers,
  legal,
};
