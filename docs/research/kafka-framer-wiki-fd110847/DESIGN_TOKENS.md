# Design Tokens — extracted via static CSS + live computed styles (v2, corrected)

## Corrections vs v1
The first pass mis-read the page tone. Ground truth from the source CSS and live render:
- **body background is rgb(16,16,16) (dark)** with white text; light sections paint
  white/cream over it. The home hero and footer sit on the dark body.
- The site uses **two font families**: Schibsted Grotesk (400/500/700 ± italic)
  AND Inter (400/600/700/900 ± italic) — both Google families, self-served by
  Framer as unicode-range subsets. We serve them via next/font/google.
- Interior pages use a **"Black" nav variant** (dark wordmark logo on light bar);
  the home page uses **"Transparent"** (white wordmark over the dark hero).

## Palette
| Token | Value |
|---|---|
| ink / body bg | #101010 |
| paper | #ffffff |
| cream | #fcfbf7 |
| faded ink | rgb(16 16 16 / 0.5) on light, rgb(255 255 255 / 0.5) on dark |
| hairline | rgb(16 16 16 / 0.2) |

## Breakpoints (Framer)
- Desktop ≥ 1200px · Tablet 810–1199px · Phone ≤ 809px
- Framer ships all three variants in the DOM, gated by media queries; the clone
  collapses them to one DOM with responsive classes at the same breakpoints.

## Type scale (desktop, from computed styles)
84 / 48 / 30 / 24 / 12 px at 1.1–1.2 leading, uniform -0.02em tracking.
Per-element family (Schibsted vs Inter) follows the source CSS class rules.

## Logo wordmarks
The nav/footer "KAFKA™" logo is an image asset in two colorways:
white `VbWAIl6...svg` (Transparent nav) and black `VIHf5EA0...svg` (Black nav).
