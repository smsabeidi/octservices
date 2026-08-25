import { meta } from "./meta";
import { chrome } from "./chrome";
import { home } from "./home";
import { about } from "./about";
import { contact } from "./contact";
import { insights } from "./insights";
import { careers } from "./careers";
import { legal } from "./legal";

/**
 * English dictionary — the source of truth for every other language.
 * Other locales are typed as `Dictionary`, so a missing key fails the build.
 */
export const dictionary = {
  meta,
  chrome,
  home,
  about,
  contact,
  insights,
  careers,
  legal,
};

export type Dictionary = typeof dictionary;
