import type { Dictionary } from "@/i18n/dictionaries/en";

// Home "About" section — cloned from kafka.framer.wiki (section: framer-hjjnyf "About").
// Source rules: shared-css-6ef7f0ce.css
//   .framer-hjjnyf   bg #fff; row; place-content: flex-start center; align-items: flex-start;
//                    gap 20px; width 100%; padding 80px 36px; overflow clip
//                    (tablet+phone padding 80px 24px; phone flex-direction column)
//   .framer-11lh7b0  max-width 1440px; row; flex 1 0 0; width 1px; gap 20px;
//                    place-content: flex-start center; align-items: flex-start
//                    (phone: column, flex none, gap 60px, width 100%)
//   .framer-o9lobj   flex 1 0 0; width 1px; white-space pre-wrap; word-break break-word
//                    (phone: flex none, width 100%)
//   .framer-19rdyap  row; flex 1 0 0; width 1px; place-content: center flex-start;
//                    align-items center; gap 110px (tablet 82px, phone 64px)
//                    (phone: flex none, width 100%)
//   .framer-1jivpao  flex 1 0 0; width 1px; white-space pre-wrap; word-break break-word
//   presets: rgrid2 (h6) 16px/120%/-0.02em/400 · rf5nl2 (h2) 48|42|38px /110%/-0.02em/400
//            both "Schibsted Grotesk"; base color #101010
// Entrance/scroll-in animation on the RichTextContainers is intentionally omitted (shared pass).

const FADED = "text-[rgba(16,16,16,0.5)]"; // --token-3a65ce05-55e7-40a8-9690-ebd72deb7b45

// .framer-o9lobj / .framer-1jivpao share this RichTextContainer box.
const RICH_TEXT_BOX =
  "relative h-auto w-px [flex:1_0_0] whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]";

export function About({ t }: { t: Dictionary["home"]["about"] }) {
  return (
    <section
      id="about"
      className="relative flex w-full flex-none flex-row items-start justify-center gap-5 overflow-clip bg-paper px-9 py-20 text-ink max-[1199px]:px-6 max-[809px]:flex-col"
    >
      <div className="relative flex w-px flex-row items-start justify-center gap-5 overflow-clip [flex:1_0_0] max-w-[1440px] max-[809px]:w-full max-[809px]:flex-col max-[809px]:gap-[60px] max-[809px]:[flex:none]">
        {/* .framer-o9lobj — RichTextContainer holding the eyebrow */}
        <div className={`${RICH_TEXT_BOX} max-[809px]:w-full max-[809px]:[flex:none]`}>
          <h6 className={`text-[16px] font-normal leading-[1.2] tracking-[-0.02em] ${FADED}`}>
            {t.eyebrow}
          </h6>
        </div>

        {/* .framer-19rdyap "Content" */}
        <div className="relative flex w-px flex-row items-center justify-start gap-[110px] [flex:1_0_0] max-[1199px]:gap-[82px] max-[809px]:w-full max-[809px]:gap-16 max-[809px]:[flex:none]">
          {/* .framer-1jivpao — RichTextContainer holding the headline */}
          <div className={RICH_TEXT_BOX}>
            <h2 className="text-[48px] font-normal leading-[1.1] tracking-[-0.02em] text-[#101010] max-[1199px]:text-[42px] max-[809px]:text-[38px]">
              {t.headingLead}
              <span className={FADED}>{t.headingFaded}</span>
              <br />
              <br />
              <span className={FADED}>{t.headingFadedClosing}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
