# Behaviours (v2)

## Confirmed on the reference
- No smooth-scroll library. Native scroll.
- **Trusted-by logo marquee**: 8 fictional client wordmarks rendered as
  CSS `mask-image` data-URI SVGs tinted via background-color, in an infinite
  horizontal ticker (hydrated at runtime — invisible to static HTML). Extracted
  to `docs/research/.../extract/logos-index.json` + public/kafka/logos/.
- **Entrance animations**: Framer applies appear effects (opacity + translateX
  offsets of 60–100px observed in inline styles). Deferred to a shared pass —
  not per-section approximations.
- **Footer contains a background video** (o9llhmt5io9I7YuFKtGeefHaXI.mp4,
  2.7MB, autoplay/loop/muted) present on every page.
- Two-tone rich-text headings (solid ink + faded span) are a recurring motif.

## Implemented interactions
Nav scroll/backdrop + mobile menu (chrome unit) · FAQ accordion (faq unit) ·
logo marquee loop (trusted unit) · per-element hover rules from source :hover CSS.
