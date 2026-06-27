# Beyond Bound — Phase 7 Redesign · Implementation Summary (Increment 1)

## The honest framing

The destination repo (`bb-portfolio-backup`) was **already ~95% of a finished merge** of the three
source sites — it differs from `priyanshu-chauhan` by only two modified files plus an `Ecosystem`
section and the hero video. So the path to "the best possible version" is **refinement, not rebuild.**

The two highest-leverage levers for "world-class founder site that feels like one intentional product"
are **(a) the narrative architecture** and **(b) one consistent motion language** — plus closing the one
genuinely-missing *emotional* beat. That is exactly what this increment does, and it is **verified**
(`tsc` clean, `next build` green) rather than asserted. A full per-section visual redesign is a
multi-increment effort; this is increment 1 (foundation + biggest wins), with a ranked roadmap below.

---

## What changed (all verified compiling)

### New section — `components/sections/FirstHandEfficacy.tsx`
The site already says, in several places, that the founder tests on himself first — but it was **missing
the single most memorable trust line** in either source site and the cinematic self-observation moment.
This new section turns that idea into one human beat:

- The creed, verbatim and authentic: *"What I won't test on myself, I will never ask anyone else to trust."*
- Real founder self-observation footage (three muted, looping, inline clips) with a "Founder self-observation" badge.
- A short, tightened narrative (the CGM habit → conviction → standard for everything built).

It is built **entirely on the house primitives** (`Section`/`Eyebrow`/`Reveal`/`SteadyLine`), brand
tokens (petrol/sprout/ink/slate), and the house easing — so it reads as native, not imported. It is
**reduced-motion-safe** (no autoplay; poster shown) and the clips **only play while on screen**
(IntersectionObserver). Crucially it does **not** show the glucose chart — that stays the job of the
adjacent `CGMSection`. The deliberate sequence is **story (creed) → evidence (data)**.

Copy lives in `lib/content.ts` (`export const efficacy`), consistent with the repo's single-source-of-truth
discipline. No new factual claim was introduced; it carries the founder's own words and keeps the
"not a clinical claim" honesty note.

### Self-observation media — `public/video/efficacy-{1,2,3}.mp4` (+ `efficacy-poster.jpg`)
The source clips were **~25 MB raw**. Re-encoded to web grade (H.264, 480×480, audio stripped,
`+faststart`): **~370 KB total** for all three + a 12 KB poster. (VP9/WebM came out *larger* at this
size, so WebM was dropped — mp4 is smaller here and universal.)

### New information architecture — `app/page.tsx`
Re-sequenced into one continuous founder story. **No section was deleted**; only the order changed and
the new beat was inserted. Movements:

| # | Movement | Sections |
|---|----------|----------|
| I | Open | Hero → CredentialsBelt |
| II | The frame | PhilosophyQuoteSection (*"Trust is harder to earn"*) |
| III | The problem | HealthcareGap (the insight) |
| IV | The person | Philosophy (why) → EnhancedJourneySection (the road) |
| V | **The conviction** | **FirstHandEfficacy** (creed + footage) ← new |
| VI | Company + system | BeyondBound → Ecosystem (signature sticky-scroll, pulled forward) |
| VII | The evidence | CGMSection → Impact |
| VIII | The breadth | Focus → InstagramVideoSection |
| IX | Voice + validation | Insights → Values → Media |
| X | Human + horizon | Personal → FutureVisionSection |
| XI | Contact | Contact → Footer |

**Why this beats the old order (and the original brief order):** the old build buried the signature
`Ecosystem` moment at position ~9 behind seven text sections; the insight/problem arrived *after* the
journey; and proof/voice beats were scattered. The new spine is **hook → problem → person → conviction →
product/system → evidence → breadth → voice → human → vision → contact** — each movement sets up the next,
and the first big interactive payoff (Ecosystem) now arrives right after the company is introduced.

### One motion language — 5 section files
The imported (alpha-92-derived) sections used a **different entrance easing** (`[0.22, 1, 0.36, 1]`) than
the rest of the site (`[0.16, 1, 0.3, 1]`). All **10 instances across 5 files** were normalized to the
house curve, so every reveal now shares one feel. Files touched: `HealthcareGap`, `EnhancedJourneySection`,
`PhilosophyQuoteSection`, `CredentialsBelt`, `InstagramVideoSection`. (Two standard material curves used in
tiny UI transitions were intentionally left — they're conventional and not jarring.)

### Brand consistency — `PhilosophyQuoteSection.tsx`
Fixed the lone **"Founder & CEO"** signature to **"Founder & Director"** (every other surface, including
`layout.tsx` metadata and JSON-LD, says "Director").

### CSS cleanup — `app/globals.css` (566 → 542 lines)
Removed two verified defects (both non-breaking dead code): the **duplicate first `.btn-shine` block**
(the later Phase-5 definition is canonical and already won by source order) and an **invalid
`:global(.dark)` rule** (styled-jsx syntax that plain CSS drops; the component handles that styling via
its own styled-jsx). *Note:* the repo's own `AUDIT_REPORT.md` also claimed a "duplicate scrollbar block" —
that was **incorrect** (only one exists), so nothing was removed there.

---

## Files

**Created (5):** `components/sections/FirstHandEfficacy.tsx`, `public/video/efficacy-1.mp4`,
`efficacy-2.mp4`, `efficacy-3.mp4`, `efficacy-poster.jpg`.

**Modified (8):** `app/page.tsx`, `app/globals.css`, `lib/content.ts`,
`components/sections/{CredentialsBelt,EnhancedJourneySection,HealthcareGap,InstagramVideoSection,PhilosophyQuoteSection}.tsx`.

**Removed:** none. (`layout.tsx` was temporarily aliased only to verify an offline build, then restored
byte-for-byte via git.)

---

## Verification performed

- **`npx tsc --noEmit` (strict): 0 errors** with all changes.
- **`npx next build`: green** — compiled in ~26s, lint + type validity pass, **6/6 static routes prerendered.**
- **Bundle:** `/` is **84.6 kB / 228 kB First Load JS** — essentially unchanged from the documented baseline
  (~84/227) **despite adding a section**, i.e. no bundle bloat.
- Build note: `next/font/google` (Inter) needs network at build time, which the local sandbox lacks; this is
  the repo's known, **Vercel-safe** condition (the build was verified by temporarily aliasing Inter→Geist,
  then restoring). See "Recommended next" for the permanent fix.

**Not yet verified (needs a browser / deployed URL):** live visual QA, per-breakpoint responsive audit, and
Lighthouse/axe. These are honestly out of scope for a sandbox and are scheduled below.

---

## Judgment calls & flags (challenging the existing build, and my own work)

1. **`CredentialsBelt` stats duplicate `Impact`.** Both render the same four metrics (1 product, 2 seasons,
   60 capsules, 1 showcase). I **kept both** this pass rather than cut one blind, because the right call
   depends on seeing them rendered. **Recommendation:** either drop `<Impact />` (one line in `page.tsx`) or
   repurpose Impact for *different* (qualitative) impact. → top of the roadmap.
2. **`PhilosophyQuoteSection` is really two beats.** It bundles the *"Trust is harder to earn"* quote **and**
   a "Key Insights / Lessons Learned" block. I placed it early (II) because the **quote** is the strongest
   hook there; its "Lessons" tail rides along earlier than ideal. **Recommendation:** split it — quote stays
   at II, Lessons moves to movement IX beside `Insights`.
3. **Two "insights" surfaces.** `PhilosophyQuoteSection`'s "Key Insights" (aphorisms) vs the `Insights`
   section (LinkedIn posts). They can coexist (principles vs writing) but the naming should be differentiated.
4. **Content still pending owner facts** (unchanged, honest by design): founding year, real impact numbers,
   specific article URLs, real press/personal details (see the repo's `LEFTOVER.md`). Nothing was fabricated.

---

## What I deliberately did NOT do this increment (and why)

A complete world-class build is iterative and must be *seen* to be trusted. Rewriting all 19 sections blind
in one pass and calling it production-grade would be dishonest. So this increment locked the architecture +
motion + the missing beat (all verifiable), and left the following as **scoped, reviewable next increments**:

## Recommended next (ranked)

1. **Resolve CredentialsBelt ↔ Impact duplication** (cut or differentiate). *Small.*
2. **Split `PhilosophyQuoteSection`** into a pure quote interstitial (II) + "Lessons" near Insights (IX). *Small.*
3. **Self-host Inter** via `next/font/local` (drop the build-time Google-Fonts dependency; removes the one
   build caveat and improves LCP). *Small.*
4. **Hero polish pass** — tighten the video→content hand-off and mobile `100svh` behavior on real devices. *Medium.*
5. **Responsive sweep** across all 19 sections at 360 / 768 / 1024 / 1440 (the prior build never did a full
   per-breakpoint audit). *Medium.*
6. **Accessibility + Lighthouse/axe pass** on the deployed URL; tune any hero-poster CLS. *Medium.*
7. **Optional deeper craft:** scroll-linked section dividers, refined `Ecosystem` depth, magnetic CTA. *Larger.*

Say the word and I'll execute these in order, each delivered the same way: real, type-checked, build-verified.

---

## How to review, test, and deploy

**Apply (drop-in):** from your repo root, extract the tarball over the working tree, then install/run:
```bash
tar xzf phase7-changes.tar.gz        # writes the 8 modified + 5 new files to the right paths
npm install
npm run dev                          # review at http://localhost:3000
```
**Or review as a patch first:** `phase7-code.patch` contains every code change (no binaries) for a PR/diff
review (`git apply phase7-code.patch`), then add the four files under `public/video/` from the tarball.

**Build & deploy:**
```bash
npm run build                        # green on Vercel (Google Fonts reachable there)
```
Push to your connected branch (Vercel auto-deploys), or `vercel --prod`. No env-var changes are required for
these changes. Recommended: after first deploy, run Lighthouse and add items 5–6 above.
