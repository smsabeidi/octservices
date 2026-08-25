# Page Topology — kafka.framer.wiki

Reference platform: Framer (237 `data-framer-name` nodes, 863 DOM elements on `/`).
Captured at 1280px viewport.

## Route inventory (13, from sitemap.xml)

| Source path | Local route | Template |
|---|---|---|
| `/` | `src/app/page.tsx` | Home (9 sections) |
| `/about` | `src/app/about/page.tsx` | About |
| `/contact` | `src/app/contact/page.tsx` | Contact |
| `/insights` | `src/app/insights/page.tsx` | Index |
| `/insights/<4 slugs>` | `src/app/insights/[slug]/page.tsx` | Article (SSG) |
| `/careers/<3 slugs>` | `src/app/careers/[slug]/page.tsx` | Job (SSG) |
| `/terms-and-conditions` | `src/app/terms-and-conditions/page.tsx` | Legal |
| `/404` | `src/app/404/page.tsx` + `not-found.tsx` | Error |

`/careers` has no index on the source site (returns 404); job pages are reached
from the About page. That behaviour is preserved.

## Homepage sections (measured heights at 1280px)

| # | Section | Reference | Clone | Tone |
|---|---|---|---|---|
| 1 | Hero | 720 | 641 | paper |
| 2 | Trusted | 293 | 189 | paper |
| 3 | About | 582 | 616 | paper |
| 4 | Services | 1741 | 1283 | cream |
| 5 | Legal Expertise | 1269 | 1200 | paper |
| 6 | How we work | 1062 | 882 | paper |
| 7 | Legal Matters | 3260 | 3053 | cream |
| 8 | Testimonial | 848 | 841 | paper |
| 9 | FAQ | 484 | 788 | paper |

Total scroll height: reference 11232px, clone 10064px. Deltas are attributable
to placeholder media slots and differing copy lengths, not layout drift.

## About page — real section structure (v2 correction)
Hero, Mission, Founder, Services, How we work (x2), Career (job listings link
to the three /careers/* pages from here). The v1 build approximated this page;
the v2 rebuild follows the carved sections in extract/sections-about.json.

## Chrome
- Header: 91px. Two variants: "Transparent" (home, white logo/links over dark
  hero) and "Black" (interior pages, dark logo on light bar).
- Footer: 973px, ink background, background video, numbered nav, contact + working-hours block, terms link, Framer credit.
