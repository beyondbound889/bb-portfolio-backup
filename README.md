# Priyanshu Chauhan — Founder Website

The personal site of **Priyanshu Chauhan**, Founder & Director of **Beyond Bound®** — a
preventive-healthcare brand whose flagship product is **Glycomics™** (natural glucose-metabolism
support). Built to establish authority, credibility, and trust for partnerships, retail/distribution,
speaking, and press.

> **Design thesis.** Everything is built around one true idea from the company itself: a *stable,
> measured glucose curve*. The recurring thin animated line ("SteadyLine") is the literal Glycomics
> promise — *no spike, a steady post-meal pattern*. The palette (warm paper + **petrol** `#0E5C57` +
> **sprout** `#2FA37C`) comes from the real Beyond Bound logo (black "bb" + teal sprout), not generic
> SaaS blue. Monospace type is used for data/labels because the founder's credibility rests on things
> that are *measured*.

---

## 1. Tech stack

| Layer       | Choice                                  |
|-------------|------------------------------------------|
| Framework   | **Next.js 15** (App Router) + React 19   |
| Language    | **TypeScript** (strict)                  |
| Styling     | **Tailwind CSS** v3.4 (CSS-variable theme tokens) |
| Animation   | **Framer Motion** 11                     |
| Icons       | **lucide-react**                         |
| Forms       | **React Hook Form** + **Zod** validation |
| Email       | **Web3Forms** (with graceful `mailto:` fallback) |
| Theme       | **next-themes** (light/dark)             |
| Command bar | **cmdk** (`⌘K` / `Ctrl+K` / `/`)         |
| Fonts       | **Geist** + **Geist Mono** (`geist` pkg) + **Inter** (`next/font/google`) |
| SEO         | Next Metadata API, JSON-LD, sitemap, robots, OG image |
| Hosting     | **Vercel** (zero-config)                 |
| Analytics   | **Google Analytics 4** + **Microsoft Clarity** (env-gated) |

> A full CMS (e.g. Sanity) was intentionally **not** wired in yet — all copy lives in one typed file
> (`lib/content.ts`) so it's trivial to edit now and straightforward to swap for a CMS later. See
> `LEFTOVER.md`.

---

## 2. Run it locally

**Prerequisites:** Node.js **18.18+** (Node 20 or 22 recommended) and npm.

```bash
# 1. install
npm install

# 2. set environment variables
cp .env.example .env.local
#    then open .env.local and fill in the keys you have (all optional to start)

# 3. start the dev server
npm run dev
# open http://localhost:3000

# 4. production build (what Vercel runs)
npm run build
npm run start
```

> If `npm install` warns about a Next.js security advisory, run `npm install next@latest` to take the
> newest patched 15.x. This project was verified to **build successfully** on `next@15.5.19`.

---

## 3. Environment variables

All are **optional** — the site runs without them. Put them in `.env.local` (local) and in the Vercel
dashboard (production). See `.env.example`.

| Variable                      | What it does                                              | Where to get it |
|-------------------------------|-----------------------------------------------------------|------------------|
| `NEXT_PUBLIC_WEB3FORMS_KEY`   | Makes the contact form submit via Web3Forms. **If empty, the form falls back to opening a pre-filled email to `founder@beyondbound.co`** — so it always works. | https://web3forms.com (free, paste your access key) |
| `NEXT_PUBLIC_GA_ID`           | Google Analytics 4 (e.g. `G-XXXXXXX`). Loads only if set. | analytics.google.com |
| `NEXT_PUBLIC_CLARITY_ID`      | Microsoft Clarity heatmaps. Loads only if set.            | clarity.microsoft.com |
| `NEXT_PUBLIC_SITE_URL`        | Canonical URL for metadata / sitemap / OG.                | `https://beyondbound.co` |

---

## 4. Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset auto-detects **Next.js**. No build settings to change.
4. Add the environment variables from §3 under **Settings → Environment Variables**.
5. Deploy. Then add your domain (`beyondbound.co` or a subdomain like `founder.beyondbound.co`) under
   **Settings → Domains**.

> The contact email is **founder@beyondbound.co** throughout (you already own the domain).

---

## 5. Project structure

```
.
├─ app/
│  ├─ layout.tsx        # fonts, SEO metadata, OpenGraph, JSON-LD (Person/Org), theme, analytics
│  ├─ page.tsx          # composes all sections in order
│  ├─ globals.css       # design tokens (light/dark), base type, signature styles
│  ├─ sitemap.ts        # /sitemap.xml
│  └─ robots.ts         # /robots.txt
├─ components/
│  ├─ nav/              # Navbar, ScrollProgress, ThemeToggle, CommandPalette
│  ├─ sections/         # Hero, Philosophy, Journey, Focus, BeyondBound, Impact,
│  │                    # Insights, ValuesMedia, PersonalVision, Contact, Footer
│  ├─ ui/               # Reveal/Stagger, CountUp, SteadyLine (signature), Section, Icon
│  ├─ Analytics.tsx     # GA4 + Clarity (only render when env keys present)
│  └─ ThemeProvider.tsx
├─ lib/
│  ├─ content.ts        # ⭐ SINGLE SOURCE OF TRUTH for all copy/data
│  └─ utils.ts          # cn() class helper
├─ types/index.ts       # shared TypeScript types
├─ public/
│  ├─ images/           # the 5 founder photos (renamed semantically)
│  └─ og/og.png         # 1200×630 social share image (generated)
├─ .env.example
├─ tailwind.config.ts
├─ next.config.mjs
└─ tsconfig.json
```

---

## 6. Editing content (no code needed)

**Everything** — headlines, the journey timeline, focus cards, product copy, metrics, insights, values,
contact reasons — lives in **`lib/content.ts`**. Open it, edit the strings, save. It's fully typed, so
your editor will warn you if a field is missing.

Items that still need Priyanshu's real input are marked with `// TODO(verify)` in that file and listed
in **`LEFTOVER.md`**. Nothing in the file is a fabricated biographical claim.

### Swapping the photos
Drop replacements into `public/images/` using the same names, or change the `src` paths in the section
components (`Hero.tsx`, `Philosophy.tsx`, `BeyondBound.tsx`, `PersonalVision.tsx`).

| File | Used in |
|------|---------|
| `priyanshu-portrait.png` | Hero (studio portrait) + OG image |
| `priyanshu-window.png`   | Philosophy (thoughtful) |
| `priyanshu-desk.png`     | Beyond Bound (with product) |
| `priyanshu-rooftop.png`  | Future Vision (background) |
| `priyanshu-office.png`   | spare — not currently placed |

---

## 7. Sections (in order)

1. **Hero** — name, thesis headline, animated SteadyLine, credential chips, CTAs, portrait
2. **Philosophy** — "Why I started building" (agriculture → Ayurveda → MBA → measured prevention)
3. **Journey** — numbered timeline (a true sequence, hence the numbers)
4. **Focus** — "Areas of focus" (six cards, each with a real proof line)
5. **Beyond Bound** — company mission/vision/approach + Glycomics™ product card + self-observation
6. **Impact** — count-up metrics (only honest/verified ones shown — see §8)
7. **Insights** — field notes linking to his real LinkedIn updates
8. **Values** — operating principles
9. **Media** — BIRAC·CHEMTECH showcase, AIIA engagement
10. **Personal** — "Beyond the work" (humanising, defensible)
11. **Vision** — "What does healthcare look like in 2035?"
12. **Contact** — validated form + email + LinkedIn

---

## 8. Honesty / compliance notes (important)

This site is about a **real person and a real wellness product**, so two guardrails were built in:

- **No fabricated numbers.** The Impact section shows only verified milestones. Vanity placeholders
  (customers, interns) are **hidden** by default (`SHOW_UNVERIFIED = false` in `Impact.tsx`) until you
  put real figures into `lib/content.ts`.
- **Careful product claims.** Glycomics™ copy mirrors the cautious, non-overclaiming language from the
  official listing, and the Beyond Bound section includes a standard supplement disclaimer (not a
  medical claim). Keep this disclaimer in place.

---

## 9. Accessibility & quality floor

- Keyboard navigable; visible focus rings; `⌘K` command palette; semantic landmarks.
- `prefers-reduced-motion` fully respected (animations collapse to instant).
- Responsive from 320px up; mobile menu; dark mode.
- Images via `next/image` (AVIF/WebP, lazy except the hero).

---

## 10. Handoff files

- **`STATUS.md`** — what's done, what's planned next, knowledge-transfer for the next person.
- **`LEFTOVER.md`** — every unfinished item and every fact that needs Priyanshu's confirmation.
