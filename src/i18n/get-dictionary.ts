import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

/**
 * Dictionary loader.
 *
 * English is the source of truth: every other locale is typed against it, so a
 * missing or misspelled key is a build error rather than a blank string in
 * production. Dictionaries are imported dynamically so a page only ships the
 * language it renders.
 */
const loaders: Record<Locale, () => Promise<{ dictionary: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  fr: () => import("./dictionaries/fr"),
  ar: () => import("./dictionaries/ar"),
  es: () => import("./dictionaries/es"),
  de: () => import("./dictionaries/de"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = loaders[locale] ?? loaders.en;
  const mod = await load();
  return mod.dictionary;
}
