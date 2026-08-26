/**
 * CONTENT LAYER — the language neutral half of the site chrome.
 *
 * Every user visible string the nav and the footer render now lives in the
 * `chrome` namespace of the dictionaries (src/i18n/dictionaries/<locale>/).
 * What stays here is the material that reads the same in all five languages:
 * the contact details, the maps link, and the internal route table. Keeping the
 * hrefs out of the dictionaries means a translator is never handed a URL, and
 * so can never break one.
 *
 * Email, phone and postal address are the real contact details.
 */

/** Route keys; the label for each one is `chrome.nav[key]` in the dictionary. */
export type NavKey = "home" | "about" | "services" | "insights" | "contact";

export type NavRoute = { key: NavKey; href: string };

export const site = {
  email: "info@octservices.com",
  emailHref: "mailto:info@octservices.com",
  phone: "+1 332 400 6423",
  phoneHref: "tel:+13324006423",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=6137+Lincolnia+Rd+Alexandria+VA+22312",
  /** Same address as an embeddable map, for the iframe on /contact. */
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=6137+Lincolnia+Rd,+Alexandria,+VA+22312&z=15&output=embed",
};

/** Internal destinations that are linked from the chrome but are not nav items. */
export const routes = {
  home: "/",
  cta: "/contact",
  terms: "/terms-and-conditions",
};

export const nav: NavRoute[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/#services" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
];

export const footerNav: NavRoute[] = [
  // Rendered uppercase via CSS; keep the labels as short as the source set.
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/#services" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
];

/**
 * Prefix an internal path with the active locale: "/about" → "/fr/about".
 * Same rule the proxy applies, so a link built here never triggers a redirect.
 *
 * `locale` is required. It used to be optional, returning the path untouched
 * when it was missing, which meant a caller that forgot to pass one emitted
 * bare hrefs; the proxy answers those with a redirect to whatever language the
 * visitor's cookie holds, so a reader could click a link on an Arabic page and
 * land on the English one. There is no safe default, so the type demands it.
 */
export function localePath(href: string, locale: string): string {
  return `/${locale}${href === "/" ? "" : href}`;
}
