# Asset Manifest (v2 — full asset clone)

Per the owner's explicit direction (2026-08-23), the source site's media assets
are now included verbatim in the repository.

## Inventory (public/kafka/)
- img/  — 24 raster/SVG images from framerusercontent.com (largest source
  renditions from srcset), original filenames preserved
- video/ — 1 background video (2.7MB mp4, footer)
- logos/ — 8 client-logo SVG masks recovered from runtime computed styles
- icon/ — favicon SVG · og/ — social preview PNG
- Total ≈ 7.5MB. URL→local mapping with intrinsic dimensions:
  `extract/asset-map.json`.

## Licensing note
These files are the Kafka Framer template's demo assets. Including and
publishing them assumes the owner holds rights to use the template's content
(e.g. a template license). Flagged at build time; decision recorded here.

## Fonts
Schibsted Grotesk and Inter served via next/font/google (same upstream
families Framer self-hosts; glyph-identical, so no font files are vendored).
