# LEFTOVER — open items & facts to confirm

Two kinds of things live here: **(A) facts only Priyanshu can confirm** (left as `TODO(verify)` in code,
never fabricated), and **(B) features intentionally deferred** this round.

---

## A. Facts to confirm / provide

Each maps to a spot in `lib/content.ts`. Until confirmed, the site either omits the item or uses neutral,
defensible language — nothing invented.

| # | Needed | Where in `lib/content.ts` | Current state |
|---|--------|---------------------------|----------------|
| A1 | **Beyond Bound founding year** | `journey[3].period` | Says "Founder & Director" (no year) |
| A2 | **Real impact numbers** — customers supported, interns mentored, units sold, retail partners, etc. | `metrics[]` (`verified:false` rows) | Hidden until real values added |
| A3 | **Specific LinkedIn/article URLs** for the 3 Insights cards | `insights[].href` | All point to his LinkedIn profile root |
| A4 | **Real press / podcasts / interviews / features** (with links) | `media[]` | Only BIRAC·CHEMTECH + AIIA (both verified) |
| A5 | **Personal interests** — books, fitness, travel, hobbies (real ones) | `personal.items[]` | Defensible-but-generic; replace with real |
| A6 | **Exact education years / titles**, and whether to name prior roles (Patanjali, Allied Market Research) explicitly | `journey[1]`, `hero.credentials` | Named cautiously; confirm he's comfortable |
| A7 | **Full product range** beyond Glycomics™ (if any) | `beyondBound.product` | Only Glycomics™ shown |
| A8 | **Preferred headshot for the hero** | `Hero.tsx` `src` | Using the studio portrait |
| A9 | **Sub-brand "SHSTRA"** seen once on LinkedIn — real? worth featuring? | n/a (omitted) | Left out pending confirmation |
| A10 | **Tagline sign-off** — confirm "measured, not marketed" is on-brand | `site.tagline`, footer | Provisional |

> **How to apply:** open `lib/content.ts`, find the line, replace the string. For A2, set the real number
> and change that row's `verified` to `true` (or just set a non-zero `value`), and the metric appears.

---

## B. Features intentionally deferred

| # | Feature | Notes / how to add |
|---|---------|--------------------|
| B1 | **Sanity CMS** for Insights/Articles | Currently flat data in `lib/content.ts`. To add: create a Sanity project, model `post` (title, slug, excerpt, body, cover, publishedAt), install `next-sanity`, and replace the `insights` import with a fetch. Structure is already CMS-shaped. |
| B2 | **Individual article pages** | `app/insights/[slug]/page.tsx` with MDX or Sanity + `generateStaticParams` + per-post metadata/OG. |
| B3 | **Dynamic OG images** per section/article | Use `next/og` `ImageResponse` in an `opengraph-image.tsx`. A static `og.png` ships now. |
| B4 | **Form anti-spam** | Add a honeypot input + Cloudflare Turnstile / hCaptcha to the Web3Forms payload. |
| B5 | **Analytics custom events** | Wrap CTA + form-submit handlers to push GA4 events. |
| B6 | **i18n (Hindi)** | Not requested; `next-intl` if ever needed for an India-first audience. |
| B7 | **Newsletter capture** | If he wants to build an audience (à la Sahil Bloom), add an email-capture block wired to a provider. |
| B8 | **Real favicon / app icons** | Add `app/icon.png` + `app/apple-icon.png`. A sprout-mark favicon would match the nav logo. |
| B9 | **Testimonials / endorsements** | No verified quotes exist yet; add a section once real ones are collected. |
| B10 | **Lighthouse/axe audit on prod URL** | Run after first deploy; tune hero image CLS if flagged. |

---

## C. Known constraints

- **Google Fonts at build time:** `next/font/google` (Inter) needs network during build. Fine on Vercel;
  if building fully offline, self-host Inter or switch body to Geist (see `STATUS.md`).
- **Next.js version:** verified on `15.5.19`. If `npm install` flags a newer security patch, run
  `npm install next@latest` (stay on 15.x).
- **Favicon:** default Next icon until B8 is done.

---

## D. Design ideas parked for a future pass (optional polish)

- A subtle scroll-linked "draw" of the SteadyLine across section dividers (currently per-section).
- Magnetic hover on the primary CTA (kept restrained for executive tone — deliberate).
- A small live "now" strip in the hero pulling his latest LinkedIn post (needs an API/CMS).
- Active-theory-style cursor/hover flourishes were considered and **rejected** as off-brand for a
  healthcare-trust positioning — noted so no one re-litigates it accidentally.
