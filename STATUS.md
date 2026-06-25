# STATUS — Priyanshu Chauhan founder website

_Knowledge-transfer doc. Read this first if you're picking the project up._

Last updated: build verified on `next@15.5.19` (compiles clean, all routes static-generate).

---

## ✅ Done (this build)

### Foundation
- [x] Next.js 15 App Router + React 19 + TypeScript (strict) project scaffold
- [x] Tailwind v3.4 with a CSS-variable token system (light + dark)
- [x] Brand-true palette derived from the real Beyond Bound logo (petrol + sprout + warm paper)
- [x] Fonts: Geist + Geist Mono (`geist` pkg) and Inter (`next/font/google`)
- [x] `lib/content.ts` single source of truth for all copy (typed)
- [x] **`npm run build` passes** — TypeScript + lint + static generation all green

### Chrome / global
- [x] Sticky Navbar that condenses on scroll; mobile slide-in menu
- [x] Scroll progress bar
- [x] Dark/light theme toggle (next-themes, no flash)
- [x] Command palette (cmdk) — `⌘K`, `Ctrl+K`, and `/`
- [x] Signature element: `SteadyLine` animated glucose-curve SVG (hero + product card)

### Sections (all 12)
- [x] Hero (portrait, thesis headline, credential chips, CTAs, SteadyLine)
- [x] Philosophy ("Why I started building")
- [x] Journey (8-stage numbered timeline)
- [x] Focus / Areas of Focus (6 cards w/ proof lines)
- [x] Beyond Bound (mission, vision, approach, Glycomics™ card, self-observation, disclaimer)
- [x] Impact (count-up metrics; unverified ones hidden)
- [x] Insights (3 cards → real LinkedIn)
- [x] Values (5 principles)
- [x] Media (BIRAC·CHEMTECH, AIIA)
- [x] Personal ("Beyond the work")
- [x] Vision ("Healthcare in 2035")
- [x] Contact (RHF + Zod form → Web3Forms, mailto fallback)
- [x] Footer

### SEO / infra
- [x] Metadata API (title template, description, keywords, canonical)
- [x] OpenGraph + Twitter card + generated `og.png` (1200×630)
- [x] JSON-LD `Person` + `Organization` schema
- [x] `sitemap.xml` + `robots.txt`
- [x] GA4 + Microsoft Clarity components (render only when env keys set)
- [x] Accessibility floor: focus rings, reduced-motion, keyboard nav, semantic HTML

### Assets
- [x] 5 founder photos placed and renamed semantically
- [x] Branded OG share image generated

---

## 🔜 Planned next (recommended order)

1. **Drop in the real facts** Priyanshu confirms (see `LEFTOVER.md` §A) — founding year, impact
   numbers, real article/press links, personal interests.
2. **Real Insights/Articles** — either paste specific LinkedIn post URLs into `lib/content.ts`
   `insights[]`, or wire **Sanity CMS** (see `LEFTOVER.md` §B) so he can publish without code.
3. **Per-article pages** — if going the blog route, add `app/insights/[slug]/page.tsx` with MDX or
   Sanity content + per-article OG images.
4. **`og` per-section / dynamic OG** via `next/og` (`ImageResponse`) if desired.
5. **Form hardening** — add a honeypot field + (optional) hCaptcha/Turnstile to Web3Forms.
6. **Analytics events** — fire a GA event on contact-form submit and Glycomics CTA click.
7. **Lighthouse / axe pass** on the deployed URL; tune any CLS on the hero image.

---

## 🧠 Things the next dev should know

- **Edit copy in `lib/content.ts` only.** Components read from it; don't hardcode strings in JSX.
- **`SHOW_UNVERIFIED` flag** in `components/sections/Impact.tsx` controls whether placeholder metrics
  appear. Keep it `false` until real numbers exist.
- **Fonts & offline builds:** `next/font/google` (Inter) needs network at build time. CI/Vercel have
  it. If you ever build fully offline, self-host Inter via `next/font/local` or switch body to Geist.
- **Theme tokens** are RGB triples in `app/globals.css` consumed as `rgb(var(--token) / <alpha>)`.
  Add new colors there + in `tailwind.config.ts`, not inline.
- **The SteadyLine** is the one "bold" element — keep everything else quiet (design intent).
- **Do not** invent biography or numbers. Honesty guardrails are described in `README.md` §8.
