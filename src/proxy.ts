import { NextRequest, NextResponse } from "next/server";
import { LOCALE_COOKIE, defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";

/**
 * Locale routing (Next.js proxy convention, formerly middleware).
 *
 * Every page lives under a locale segment (/en/about, /fr/about, ...). A request
 * without one is redirected to the best match for the visitor, chosen in this
 * order:
 *   1. a language they previously picked by hand (cookie)
 *   2. their device/browser languages (Accept-Language)
 *   3. English
 *
 * Only the first visit pays the redirect; after that the cookie decides.
 */

const PUBLIC_FILE = /\.(?:svg|png|jpe?g|gif|webp|avif|ico|mp4|webm|woff2?|ttf|otf|txt|xml|json|pdf)$/i;

/**
 * Parse Accept-Language into locales ordered by quality, then return the first
 * one we actually publish. Matches on the primary subtag, so "fr-CA" hits "fr".
 */
function fromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="));
      const quality = q ? Number.parseFloat(q.slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .filter((entry) => entry.tag.length > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    if (tag === "*") break;
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next internals, API routes, and anything that looks like a real file.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const first = segments[1];

  // Already localised: remember the locale so manual switches persist.
  if (first && isLocale(first)) {
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      response.cookies.set(LOCALE_COOKIE, first, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale: Locale =
    (saved && isLocale(saved) ? saved : null) ??
    fromAcceptLanguage(request.headers.get("accept-language")) ??
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals and files with an extension.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

export { locales };
