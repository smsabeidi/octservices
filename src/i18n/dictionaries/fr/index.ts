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
 * French dictionary.
 *
 * Typed against the English `Dictionary`, so a missing, misspelled or extra key
 * is a build error rather than a blank string in production.
 *
 * One wrinkle has to be worked around here. `home` and `contact` are declared
 * `as const` in the English source, so their copy enters `Dictionary` as string
 * *literal* types — `Dictionary["home"]["hero"]["heading"]` is the type
 * `"Translation for documents that matter."`, not `string`. No translation can
 * satisfy that, in any language. `Widen` maps those literals back to `string`
 * while leaving the key structure, the readonly modifiers and, because it is a
 * homomorphic mapped type, the tuple lengths of the `as const` arrays exactly as
 * English declares them: drop an item from `home.services.items` or misspell a
 * key and this file still fails to compile. It is applied only to the two
 * namespaces that need it, so the discriminated unions elsewhere (the `type`
 * tags on insight blocks and job blocks) keep their literal types.
 */
type Widen<T> = T extends string
  ? string
  : T extends object
    ? { [K in keyof T]: Widen<T[K]> }
    : T;

const french: Omit<Dictionary, "home" | "contact"> & {
  home: Widen<Dictionary["home"]>;
  contact: Widen<Dictionary["contact"]>;
} = {
  meta,
  chrome,
  home,
  about,
  contact,
  insights,
  careers,
  legal,
};

/**
 * The assertion re-narrows `home` and `contact` to the literal types the English
 * `as const` produced. It is safe by construction — `french` has just been
 * checked against the full English key structure — and it is only needed because
 * `getDictionary` types every locale as `Dictionary`.
 */
export const dictionary = french as Dictionary;
