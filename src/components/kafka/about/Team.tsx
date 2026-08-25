import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * ABOUT — Team (source section `framer-fhfm1q`, "How we work" / OUR TEAM).
 *
 * Source CSS:
 *   section — #fcfbf7, column, gap 80px, padding 80px 36px (80px 24px below 1200px).
 *   inner   — max-width 1440px, column, gap 80px.
 *   top     — row, gap 20px; phone: column, gap 60px.
 *   grid    — 3 cols desktop / 2 tablet / 1 phone, gap 40px 20px (49px on phone),
 *             cards aligned to the start of their track.
 *   card    — column, gap 20px; portrait aspect-ratio 0.830585 (427x514);
 *             info column gap 4px; social row gap 10px with 32x32 hit areas
 *             holding 16x16 icons. The source gives each hit area an inline
 *             background-color of #101010 — both icon SVGs are white fills, so
 *             the black tile is what makes them visible on the #fcfbf7 section.
 *
 * The heading has two DOM variants in the source: desktop and phone render
 * "Meet our team", tablet renders "Legal clarity built on strategy and trust."
 */

/* One portrait per member, in the same order as `about.team.members`. */
const MEMBER_IMAGES = [
  "/kafka/img/Mqj6PsUtUI2q4G9drVGwf3ID32o.png",
  "/kafka/img/IJqvEFKbgGPH7FeFmvKhZQenL8.png",
  "/kafka/img/n5sCK4sSvVJAbfN5JT6q8RDsGM.png",
  "/kafka/img/AEsiYZIV1bdvzu82fMFCFhVVSY.png",
  "/kafka/img/2FT1fr8cOSxVXYua23QUzjyaLw.png",
  "/kafka/img/59DOispOMwQAN70y5Jljy5WHlY.png",
] as const;

const SOCIALS = [
  { href: "https://www.linkedin.com/", icon: "/kafka/img/l9aiHzsUhg0p3GoU33gqgEtzEM.svg" },
  { href: "https://x.com/aidan_creates", icon: "/kafka/img/VRXYBtwdQl8CV7WMKzkqXVFnI.svg" },
] as const;

/* one of three columns on desktop, two on tablet, full width on phone */
const IMG_SIZES =
  "(min-width: 1200px) calc((min(100vw - 72px, 1440px) - 40px) / 3), (min-width: 810px) and (max-width: 1199.98px) calc((min(100vw - 48px, 1440px) - 20px) / 2), (max-width: 809.98px) min(100vw - 48px, 1440px)";

export function Team({ t }: { t: Dictionary["about"]["team"] }) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 overflow-clip bg-[#fcfbf7] px-9 py-20 text-[#101010] max-[1199px]:px-6">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-20">
        <div className="flex w-full flex-row items-center justify-center gap-5 overflow-clip max-[809px]:flex-col max-[809px]:gap-[60px]">
          <div className="flex min-w-0 flex-[1_0_0px] flex-col items-center gap-5 max-[809px]:w-full max-[809px]:flex-none">
            <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.5)]">
              {t.eyebrow}
            </h6>
            {/* desktop + phone copy */}
            <h2 className="w-full whitespace-pre-wrap break-words text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] min-[810px]:max-[1199px]:hidden max-[809px]:text-[38px]">
              {t.heading}
            </h2>
            {/* tablet copy */}
            <h2 className="hidden w-full whitespace-pre-wrap break-words text-[42px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] min-[810px]:max-[1199px]:block">
              {t.headingTablet}
            </h2>
          </div>
          <div aria-hidden="true" className="h-0.5 min-w-0 flex-[1_0_0px] max-[809px]:hidden" />
        </div>

        <div className="grid w-full justify-center gap-x-5 gap-y-10 [grid-auto-rows:minmax(0,1fr)] [grid-template-columns:repeat(3,minmax(50px,1fr))] [grid-template-rows:repeat(2,minmax(0,1fr))] min-[810px]:max-[1199px]:[grid-template-columns:repeat(2,minmax(50px,1fr))] min-[810px]:max-[1199px]:[grid-template-rows:repeat(3,minmax(0,1fr))] max-[809px]:gap-[49px] max-[809px]:[grid-template-columns:repeat(1,minmax(50px,1fr))]">
          {t.members.map((m, i) => (
            <article key={m.name} className="flex w-full flex-col items-start justify-start gap-5 self-start">
              <div className="relative aspect-[427/514] w-full flex-none overflow-clip">
                <Image
                  src={MEMBER_IMAGES[i]}
                  alt=""
                  fill
                  sizes={IMG_SIZES}
                  className="object-cover object-center"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-1 overflow-clip">
                {/* preset g9rymp carries text-transform: uppercase */}
                <h4 className="w-full whitespace-pre-wrap break-words text-[24px] font-normal uppercase leading-[1.2] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[22px] max-[809px]:text-[20px]">
                  {m.name}
                </h4>
                <h6 className="w-full whitespace-pre-wrap break-words text-[16px] font-normal leading-[1.2] tracking-[-0.02em] text-[rgba(16,16,16,0.8)]">
                  {m.role}
                </h6>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-2.5 overflow-clip">
                {SOCIALS.map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    rel="noopener"
                    className="relative block h-8 w-8 cursor-pointer overflow-clip bg-[#101010] no-underline transition-opacity duration-200 hover:opacity-80"
                  >
                    {/* left-1/2 is physical on purpose: with -translate-x-1/2 it
                        centres the icon in its 32x32 tile, which is the same
                        position in both directions. start-1/2 would break it. */}
                    <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2 overflow-clip">
                      <Image src={s.icon} alt="" width={16} height={16} className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
