# AUDIT_REPORT.md
**Project:** Priyanshu Chauhan — Beyond Bound® founder portfolio
**Repo:** `beyondbound889/bb-portfolio`
**Audit date:** 25 June 2026 · **Pass:** Phase 6 (cinematic hero + ecosystem)
**Method:** full clone, every config + the content layer + all preservation‑candidate sections read; baseline `tsc --noEmit` and `next build` both run and **pass** before any change.

> This is a *selective reconstruction* audit, not a redesign brief. The codebase
> is mature and mostly strong; the report separates what is genuinely good from a
> small set of real, specific issues.

---

## 0. Stack (as‑built, verified from `package.json` / configs)

| Area | Reality |
|---|---|
| Framework | **Next.js 15.5.19**, App Router, `reactStrictMode` |
| UI runtime | **React 19.0.0** |
| Language | **TypeScript 5.7.3**, `strict: true`, path alias `@/*` |
| Styling | **Tailwind 3.4.17**, `darkMode: "class"`, **rgb‑channel tokens** |
| Motion | **Framer Motion 11.18.2** (no GSAP / ScrollTrigger / Lenis present) |
| Theming | `next-themes` 0.4.4 (light/dark) |
| Fonts | Geist + Geist Mono (self‑hosted via `geist`), **Inter via `next/font/google`** |
| Forms | `react-hook-form` + `zod`, Web3Forms (mailto fallback) |
| Icons | `lucide-react` |
| Analytics | GA4 + Microsoft Clarity (env‑gated) |
| Content | Single source of truth in `lib/content.ts` (CMS‑shaped) |

---

## 1. Existing strengths (keep these)

1. **A real content layer.** `lib/content.ts` is the single source of truth, typed against `types/index.ts`, written with explicit honesty discipline (`// TODO(verify)` markers, no fabricated biographical claims, compliance disclaimers for a wellness product). This is rare and valuable.
2. **SEO is already strong.** `metadata` with OpenGraph + Twitter, a `Person` JSON‑LD block, `app/sitemap.ts`, `app/robots.ts`, a static OG image. Nothing here needs rescuing.
3. **Accessibility floor is real.** Global `:focus-visible`, a thorough `prefers-reduced-motion` block, and — importantly — **every animated component already guards on `useReducedMotion()`**. This is consistent, not decorative.
4. **A proper design‑token system.** Colours are defined as space‑separated RGB channels (`--petrol: 14 92 87`) so Tailwind's `rgb(var(--petrol) / <alpha-value>)` alpha utilities work (`bg-petrol/5`, `text-sprout/80`). Light + dark are both defined.
5. **Reusable primitives.** `Reveal`, `Stagger`/`StaggerItem`, `Section`/`Eyebrow`, `ParallaxImage`, `CountUp`, `SteadyLine` — a small, coherent motion/layout toolkit reused across sections.
6. **Polished interaction layer.** `PremiumCursor` (fine‑pointer only, respects inputs), `AmbientBackground` (orbs + mouse spotlight), `ScrollProgress`, a `cmdk` command palette (⌘K), theme toggle.
7. **Strong individual sections.** `BeyondBound`, `Impact`, `Footer`, `EnhancedJourneySection`, `CGMSection` are all well‑built with good token usage and dark‑mode glassmorphism (see PRESERVATION_REPORT.md for scores).
8. **It builds clean.** Baseline `tsc --noEmit` → 0 errors. Baseline `next build` → compiles, lints, prerenders 6/6 routes.

---

## 2. Existing weaknesses / issues (the real list)

### 2.1 Hero (highest priority — now addressed)
- The previous hero was a **static split layout** (copy + rotating photo stack + typewriter). It was competent, but it did **not** use the supplied video and did **not** communicate *Founder · Builder · Operator* cinematically in the first 5 seconds, which the brief makes the #1 goal.
- **There was no hero → content transition.** The hero ended and the next section began with a hard cut — the opposite of the Sahil‑Bloom / Seed "one continuous story" feel.

### 2.2 Hero video asset (now addressed)
- Source `Hero_Section.mp4` is **31 MB at ~20.8 Mbps, 1080p/30** — unusable as a web hero (mobile data + LCP). No poster, no WebM, no mobile variant existed.

### 2.3 `app/globals.css` is heavily layered and has small defects
`globals.css` is 565 lines of stacked "Phase 3 / 4 / 5" additions. Specific, real issues:
- **`.btn-shine` is defined twice** (Phase‑2 sweep vs. Phase‑5 keyframe `shine`) — the later definition wins; the earlier is dead weight.
- **The custom scrollbar block is defined twice.**
- **An invalid selector**: `:global(.dark) .journey-chapter:hover .chapter-year { … }` — `:global()` is styled‑jsx syntax, not valid plain CSS; browsers drop the rule. Harmless but dead.
- Several very broad guards (`section { contain: layout style }`, `.dark section { border-color … }`, attribute/`[class*="…"]` suppressors) are blunt instruments worth revisiting.
- **None of this blocks the build**; it's cleanup, not breakage.

### 2.4 The uploaded `globals.css` is **not** drop‑in compatible (important)
The `globals.css` provided with the brief uses **hex tokens** (`--paper: #F7F4EF`) and a large parallel set of hand‑authored component classes (`.hero-*`, `.card`, `.metric-*`, `.timeline-*`, …). The live repo's Tailwind colour system needs **RGB channels**. Pasting the uploaded file would:
- break **every** alpha utility in the codebase (`bg-paper/50` → `rgb(#F7F4EF / 0.5)` is invalid CSS),
- introduce a **second, duplicate styling system** competing with the Tailwind‑utility components,
- silently shift the brand palette (`#F7F4EF` vs the live `#FAFAF8`, etc.).
→ **Decision:** do **not** replace. Keep the repo's token format; extend it in RGB‑channel form only. See PRESERVATION_REPORT.md §Design system and `STYLE_ADDITIONS.optional.css`.

### 2.5 Content gaps (owner‑supplied, carried from `LEFTOVER.md`)
Founding year, real impact numbers (currently hidden, not faked), specific LinkedIn/article URLs, real press/personal details. These are deliberately left honest rather than invented and remain outstanding.

### 2.6 Build‑time Google Fonts dependency
`next/font/google` (Inter) fetches at build time, so **fully offline builds fail** at the font step (this is why the sandbox build temporarily stubbed Inter; it builds fine on Vercel). Optional hardening: self‑host Inter to remove the network dependency entirely.

---

## 3. Broken UI / UX
- No *hard* broken UI was found in the read set. The principal UX defect was the **missing narrative transition** out of the hero (§2.1) and a non‑cinematic hero — both addressed this pass.

## 4. Responsive
- Sections use responsive Tailwind throughout; `EnhancedJourneySection` and `InstagramVideoSection` have documented mobile handling. The new Hero is built mobile‑first (`100svh` to dodge the mobile URL‑bar jump, `clamp()` type, chips/scroll‑indicator hidden on `< sm`). **A full per‑breakpoint audit of all 18 sections was not performed this pass** — flagged for a dedicated responsive pass (brief Phase 13).

## 5. Animation
- Quality is good and **consistently reduced‑motion‑safe**. The brief asks for GSAP + ScrollTrigger; this pass **deliberately did not add GSAP** — see HANDOFF.md → "Motion system decision". Scroll storytelling is delivered with the Framer Motion already in the bundle (`useScroll`/`useTransform`), avoiding a second animation runtime and React‑19 interop risk.

## 6. Accessibility
- Solid floor (focus ring, reduced motion, semantic sections). Opportunities: the new Ecosystem ships a full non‑animated fallback; continue to ensure every decorative media element is `aria-hidden` (the new hero video is).

## 7. SEO
- Already strong (§1.2). No remediation required. If `Ecosystem` is added to the nav, that's a one‑line content change (optional).

## 8. Performance
- Baseline `/` bundle after this pass: **83.6 kB / 227 kB First Load JS** — reasonable for a motion‑heavy site. Hero video reduced **31 MB → 4.6 MB (mp4) / 3.0 MB (webm) / 1.8 MB (720p mobile)** + posters. Recommendations: self‑host Inter (§2.6); verify poster intrinsic size to avoid CLS; **run Lighthouse on the deployed URL** (not possible in this environment — flagged honestly, brief Phase 14).

---

## 9. Verification performed this pass
- `npx tsc --noEmit` — **0 errors** (baseline and with all new code).
- `next build` — **compiles, lints, prerenders 6/6 routes** (Inter temporarily stubbed only because Google Fonts is unreachable in the build sandbox; `layout.tsx` restored byte‑for‑byte via `git checkout` afterward).

See **HANDOFF.md** for the full change log and the step‑by‑step integration + verification procedure, and **PRESERVATION_REPORT.md** for the keep/extend/rebuild decisions.
