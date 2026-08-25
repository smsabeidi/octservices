import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import NotFound from "../not-found";

/** Source meta.json for /404 carries the site-wide title. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.legal.notFound.meta.title };
}

/**
 * Explicit /404 route, mirroring the source site's addressable 404 page.
 *
 * Unlike the not-found boundary this route does get params, so it hands them to
 * the shared component and the page renders in the visitor's language. An
 * unknown segment is not redirected to notFound() here — that would only render
 * this same screen — the component falls back to English instead.
 */
export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <NotFound params={params} />;
}
