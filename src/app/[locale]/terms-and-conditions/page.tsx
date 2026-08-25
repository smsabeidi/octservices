import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/kafka/shared/Nav";
import { Footer } from "@/components/kafka/shared/Footer";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * /terms-and-conditions — rebuilt 1:1 from the source page's "Main" section.
 *
 * Source CSS (framer-WYjmf scope, bundle shared-css-3760679f.css):
 *   main .framer-6ld3hx   → column, centered, w:100%, bg #fff
 *   Hero .framer-1n6mwkq  → column, centered, padding 200px 36px 60px
 *                           (≤1199px: 160px 24px 24px), bg #fff
 *   Padding .framer-1gfgfoc → column, centered, w:100%, max-w 1440px
 *   Top .framer-12mw286   → row, items-start, gap 20px
 *                           (≤809px: column, gap 41px)
 *   Top Content .framer-fcpkpj → column, gap 20px, flex 1 0 0, w:1px,
 *                           max-w 945px (≤809px: flex none, w:100%)
 *   Content .framer-7ci9qo → column, items-start, gap 60px,
 *                           padding 80px 36px (≤1199px: 80px 24px), bg #fff
 *   Padding .framer-1yq4cyt → column, items-start, gap 20px, max-w 900px
 *
 * Type presets:
 *   rgrid2 (h6) 16px / 400 / 120% / -0.02em / #101010
 *   hwn8r2 (h1) 66px → 56px (tablet) → 48px (phone) / 400 / 110%,
 *               letter-spacing -0.02em, but +0.02em at ≤809px (source)
 *   wzscdi (p)  20px → 18px (tablet+phone) / 500 / 1.4em / -0.02em,
 *               colour rgba(16,16,16,.5), paragraph spacing 20px,
 *               font-feature-settings "blwf"/"cv03"/"cv04"/"cv09"/"cv11" on
 *   g4bnyl (a)  #101010, hover rgba(16,16,16,.5) + underline
 *               (offset 4px, thickness 1px, colour #101010cc)
 *
 * Block structure follows the extracted page text one for one; the copy lives
 * in the `legal` dictionary namespace, and the section numbers run 1 to 8 (the
 * source page carried a duplicated "6.").
 */

type Terms = Dictionary["legal"]["terms"];
type Contact = NonNullable<Terms["sections"][number]["contact"]>;

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  /** The one paragraph carrying an inline mailto link. */
  | ({ kind: "contact" } & Contact);

/**
 * Flatten the dictionary's numbered sections back into the single run of
 * paragraphs and lists the source markup renders, so the DOM never changes
 * shape between languages.
 */
function toBlocks(t: Terms): Block[] {
  const blocks: Block[] = t.intro.map((text) => ({ kind: "p", text }));

  for (const section of t.sections) {
    blocks.push({ kind: "p", text: section.heading });
    for (const text of section.intro) blocks.push({ kind: "p", text });
    if (section.items) blocks.push({ kind: "ul", items: section.items });
    for (const text of section.outro ?? []) blocks.push({ kind: "p", text });
    if (section.contact) blocks.push({ kind: "contact", ...section.contact });
  }

  return blocks;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.legal.terms.meta.title };
}

/** li: list-style none + absolutely positioned bullet, indent 2ch (source rule). */
const LI = "relative list-none ps-[2ch] before:absolute before:start-0 before:content-['•']";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const t = dict.legal.terms;
  const content = toBlocks(t);

  return (
    <>
      <Nav t={dict.chrome} locale={locale} />

      <main className="relative flex w-full flex-col items-center overflow-clip bg-paper text-ink">
        {/* Hero */}
        <section className="relative flex w-full flex-col items-center overflow-clip bg-paper px-9 pt-[200px] pb-[60px] max-[1199px]:px-6 max-[1199px]:pt-[160px] max-[1199px]:pb-6">
          <div className="relative flex w-full max-w-[1440px] flex-col items-center">
            <div className="relative flex w-full flex-row items-start gap-5 max-[809px]:flex-col max-[809px]:gap-[41px]">
              <div className="relative flex w-px max-w-[945px] flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
                <h6 className="w-full break-words text-[16px] leading-[1.2] font-normal tracking-[-0.02em] text-ink">
                  {t.hero.eyebrow}
                </h6>
                <h1 className="w-full break-words text-[66px] leading-[1.1] font-normal tracking-[-0.02em] text-ink max-[1199px]:text-[56px] max-[809px]:text-[48px] max-[809px]:tracking-[0.02em]">
                  {t.hero.title}
                </h1>
                <h6 className="w-full break-words text-[16px] leading-[1.2] font-normal tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
                  {t.hero.lastUpdated}
                </h6>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative flex w-full flex-col items-start gap-[60px] overflow-clip bg-paper px-9 py-20 max-[1199px]:px-6">
          <div className="relative flex w-full max-w-[900px] flex-col items-start gap-5 max-[809px]:gap-[60px]">
            {/* Paragraph spacing 20px between top-level blocks (source: --framer-paragraph-spacing). */}
            <div
              className="w-full text-[20px] leading-[1.4] font-medium tracking-[-0.02em] break-words text-[rgba(16,16,16,0.5)] max-[1199px]:text-[18px] [&>*:not(:first-child)]:mt-5"
              style={{
                fontFeatureSettings:
                  '"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on',
              }}
            >
              {content.map((block, i) => {
                if (block.kind === "ul") {
                  return (
                    <ul key={i}>
                      {block.items.map((item) => (
                        <li key={item} className={LI}>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.kind === "contact") {
                  return (
                    <p key={i}>
                      {block.before}{" "}
                      <a
                        href="mailto:info@octservices.com"
                        rel="noopener"
                        className="font-bold text-ink transition-colors duration-200 hover:text-[rgba(16,16,16,0.5)] hover:underline hover:decoration-[rgba(16,16,16,0.8)] hover:decoration-[1px] hover:underline-offset-[4px]"
                      >
                        {block.email}
                      </a>
                      {block.after}
                    </p>
                  );
                }
                return <p key={i}>{block.text}</p>;
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer t={dict.chrome} locale={locale} />
    </>
  );
}
