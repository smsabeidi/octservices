import Link from "next/link";
import { Nav } from "@/components/kafka/shared/Nav";
import { Footer } from "@/components/kafka/shared/Footer";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * 404 — rebuilt 1:1 from the source /404 page's "Main" section, which sits
 * between the Black nav and the footer.
 *
 * Source CSS (framer-zn3h6 scope, bundle shared-css-518b0860.css):
 *   main .framer-7qn9fn   → column, centered, w:100%
 *   About .framer-1lmwsu9 → row, centered, gap 20px, height 80vh, bg #fff,
 *                           padding 120px 36px 80px
 *                           (≤1199px: 120px 24px 80px; ≤809px: column)
 *   .framer-1xqf77c       → column, justify-center, items-start, gap 20px,
 *                           flex 1 0 0, w:1px, max-w 1440px
 *                           (≤809px: flex none, w:100%, gap 60px)
 *   Content .framer-5phi7o → row, items-center, justify-start, gap 110px
 *                           (tablet 82px, phone 64px), w:100%
 *   .framer-zz1047        → flex 1 0 0, w:1px  (holds the headline)
 *   .framer-1hsvb6t       → w:100%             (holds the sub-line)
 *
 * Type presets:
 *   rf5nl2 (h2) 48px → 42px (tablet) → 38px (phone) / 400 / 110% / -0.02em
 *   rgrid2 (h6) 16px / 400 / 120% / -0.02em
 *
 * Button (framer-aTWT5 "Black"): bg #101010, radius 99px, padding 12px 16px,
 * gap 10px, w:min-content; its label sits in a 19px-high clipped window
 * holding two copies — on hover the source flips justify-content from
 * flex-start to flex-end, which reads as the stack sliding up by 19 + 10px.
 *
 * Locale: Next renders this boundary without route params, so `params` is
 * optional and is only ever supplied by the sibling /404 route, which passes
 * its own params through and is correct in all five languages.
 *
 * KNOWN LIMITATION. When Next renders this boundary itself — a `notFound()`
 * from a page, e.g. /ar/insights/<unknown-slug> — there are no params and the
 * page falls back to English: English copy inside the `<html lang="ar"
 * dir="rtl">` shell the layout produced, with the nav, the footer and the home
 * button all pointing at /en. A reader who mistypes a URL is quietly moved to
 * a different language.
 *
 * The obvious fix is to read the locale off the request, either from a header
 * stamped by the proxy or from the LOCALE_COOKIE. Both were measured and both
 * are too expensive as things stand: touching `headers()` or `cookies()`
 * anywhere in this segment opts the entire segment out of static generation,
 * taking the site from 68 prerendered pages to none — every page then
 * server-rendered per request to fix a path only bad URLs reach.
 *
 * Fixing it properly means either enabling PPR (so the request-bound read can
 * sit behind a Suspense boundary while the rest still prerenders), or handing
 * this boundary a client component that resolves the locale from
 * `usePathname()` and is given all five locales' `chrome` and `legal.notFound`
 * namespaces as props — roughly 5KB more in each route's payload. That is a
 * product decision, so it is written down here rather than made silently.
 */

export default async function NotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  let locale: Locale = defaultLocale;
  try {
    const resolved = await params;
    if (resolved?.locale && isLocale(resolved.locale)) locale = resolved.locale;
  } catch {
    // No params to resolve at this point in the tree: stay on the fallback.
  }
  const dict = await getDictionary(locale);
  const t = dict.legal.notFound;

  return (
    <>
      <Nav t={dict.chrome} locale={locale} />

      <main className="relative flex w-full flex-col items-center overflow-clip bg-paper text-ink">
        <section className="relative flex h-[80vh] w-full flex-row items-center justify-center gap-5 overflow-clip bg-paper px-9 pt-[120px] pb-20 max-[1199px]:px-6 max-[809px]:flex-col">
          <div className="relative flex w-px max-w-[1440px] flex-[1_0_0px] flex-col items-start justify-center gap-5 overflow-clip max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-[60px]">
            <div className="relative flex w-full flex-row items-center justify-start gap-[110px] max-[1199px]:gap-[82px] max-[809px]:gap-[64px]">
              <div className="relative w-px flex-[1_0_0px] break-words">
                <h2 className="text-[48px] leading-[1.1] font-normal tracking-[-0.02em] text-ink max-[1199px]:text-[42px] max-[809px]:text-[38px]">
                  {t.heading}
                </h2>
              </div>
            </div>

            <div className="relative w-full break-words">
              <h6 className="text-[16px] leading-[1.2] font-normal tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
                {t.lead}
              </h6>
            </div>

            <div className="relative w-auto flex-none">
              <Link
                href={`/${locale}`}
                className="group flex max-w-full cursor-pointer flex-row items-center justify-center gap-[10px] overflow-clip rounded-[99px] bg-ink px-4 py-3"
              >
                {/* 19px window; the two-copy stack slides up by 19 + 10 (gap) on hover */}
                <span className="flex h-[19px] w-min flex-col items-center overflow-clip">
                  <span className="flex flex-col items-center gap-[10px] transition-transform duration-300 ease-out group-hover:-translate-y-[29px]">
                    <span className="block h-[19px] whitespace-pre-wrap text-[16px] leading-[19px] tracking-[-0.02em] text-white">
                      {t.homeLinkLabel}
                    </span>
                    <span className="block h-[19px] whitespace-pre-wrap text-[16px] leading-[19px] tracking-[-0.02em] text-white">
                      {t.homeLinkLabel}
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}
