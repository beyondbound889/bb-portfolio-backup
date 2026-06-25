# PRESERVATION_REPORT.md

**Project:** Priyanshu Chauhan — Beyond Bound® founder portfolio
**Pass:** Phase 6 (cinematic hero + ecosystem + IA reorder)
**Rule applied:** Anything scoring **8/10 or above is enhanced, not rebuilt.** Every rebuild below carries a documented reason. This is a 70% enhancement / 30% reconstruction pass, not a from-scratch redesign.

The scores are a build-quality judgement (code health + design + on-brand fit + responsiveness + a11y), not a popularity rating. They exist to justify the keep/extend/rebuild decision for each asset.

---

## A. Sections — keep / extend / rebuild

| Section / file | Score | Decision | Reason |
|---|---|---|---|
| `lib/content.ts` (single source of truth) | **9.5** | **KEEP** | Clean, typed, the spine of the whole site. Every new section reads from it. Touching it would ripple everywhere for no gain. Only *additive* edits suggested (optional `nav` entry for Ecosystem). |
| `BeyondBound.tsx` | **9** | **KEEP + light enhance** | Brief explicitly flags this as a strong section. Structure, content and brand references preserved. No rebuild. |
| `Impact.tsx` (metrics / graph) | **9** | **KEEP** | Animated counters + scroll reveals already present and on-brand. Brief says do not redesign graph sections for the sake of it. Preserved as-is. |
| `Footer.tsx` | **9** | **KEEP** | Functional, well-structured, responsive. Brief says preserve architecture. Untouched. |
| `EnhancedJourneySection.tsx` | **8.5** | **KEEP** | Already redesigned in Phase 5 (editorial alternating timeline). Above threshold — left intact. |
| `CGMSection.tsx` / `GlucoseChart.tsx` | **8.5** | **KEEP** | Real product storytelling with a live-feeling chart. On-brand for a glucose/Glycomics™ founder. Preserved. |
| SEO stack — metadata, Person JSON-LD, `sitemap`, `robots` | **9** | **KEEP** | Correct and complete. No change. |
| `Hero.tsx` (original) | **7** | **REBUILD (justified)** | The single weakest high-traffic surface: static split layout, rotating photo + typewriter, **no video, no cinematic entrance, no hero→content hand-off**. Brief names hero rebuild as highest priority and supplies a video specifically for it. Original preserved at `Hero.legacy.tsx.bak`. |
| `app/page.tsx` (section order) | **7.5** | **REBUILD (justified, order only)** | No section deleted. Re-sequenced to the brief's narrative IA and to slot in Ecosystem. Original preserved at `page.legacy.tsx.bak`. |
| **Ecosystem** | **—** | **NEW (Phase 10)** | Did not exist. Required by brief as the signature sticky-scroll section. Built fresh; content brand-adapted. |

---

## B. Components worth preserving

| Component | Score | Decision |
|---|---|---|
| `ui/Reveal.tsx` (Reveal / Stagger / StaggerItem) | **9** | **KEEP** — clean Framer Motion primitives, reused by the new sections too. |
| `ui/Section.tsx` (Section / Eyebrow) | **9** | **KEEP** — consistent section shell. |
| `ui/ParallaxImage.tsx` | **8.5** | **KEEP** |
| `CountUp`, `SteadyLine` | **9** | **KEEP** — signature motion, used by metrics. |
| `Navbar`, `CommandPalette` (⌘K), `ScrollProgress`, `ThemeToggle` | **8.5** | **KEEP** — premium navigation already in place. |
| `PremiumCursor`, `AmbientBackground` | **8** | **KEEP** — perceived-quality layer; no change needed. |

No component was rebuilt. The new Hero and Ecosystem **consume** these primitives rather than reinventing them — which is why they needed zero changes to `globals.css`.

---

## C. Animations worth preserving

Kept because each already serves storytelling, hierarchy or perceived quality:

- Scroll-reveal / stagger entrances (`Reveal`, `Stagger`) — hierarchy + pacing.
- Animated metric counters (`CountUp`) — makes numbers land.
- `SteadyLine` draw-on — signature brand motion.
- ⌘K command palette open/close — navigation.
- Theme transition — perceived quality.

The shared easing `[0.16, 1, 0.3, 1]` is the house curve and was reused in the new work for continuity, not replaced.

**Animations added this pass (Phase 6), each tied to a brief-approved purpose:**

| Added motion | Where | Purpose served |
|---|---|---|
| Scroll-linked video scale + drift, copy lift/fade, gradient melt-to-paper | Hero → next section | **Storytelling** + **navigation** — the "no hard cut" hand-off the brief demands. |
| Idle Ken-Burns on video | Hero | **Perceived quality** — keeps a short loop from feeling static. |
| Sticky-scroll depth planes (per-layer y / scale / rotateX / blur / z) | Ecosystem | **Storytelling** + **hierarchy** — the exploded-architecture reveal. |
| Pointer tilt (spring) + shifting petrol→sprout lighting | Ecosystem | **Engagement** + **perceived quality**. |
| Left-rail progress + active-copy crossfade | Ecosystem | **Navigation** (where am I in the six layers). |

Every one of the above maps to one of the five allowed objectives (storytelling / hierarchy / navigation / engagement / perceived-quality). Nothing decorative-only was added. Both new sections ship a full `prefers-reduced-motion` fallback (Hero → static poster; Ecosystem → plain vertical list).

---

## D. Visual patterns worth preserving

- **Token system:** rgb-channel CSS custom properties (`--paper: 250 250 248`) consumed via Tailwind `bg-paper/50` alpha utilities. **KEEP — do not swap to the uploaded hex tokens** (see §F).
- Petrol / sprout / ink / paper palette — the brand DNA. Preserved everywhere.
- Editorial serif display + mono eyebrows — preserved.
- Card + hairline-border + soft-shadow language — preserved (brief: evaluate existing cards before rebuilding → verdict: keep).
- Dark-mode contract via `next-themes` class strategy — preserved.

---

## E. Code worth preserving

- `lib/content.ts` data contract — **9.5**, untouchable spine.
- The Framer-Motion-only motion stack — deliberately **kept**; GSAP/ScrollTrigger were **not** added. Framer Motion 11 is already present, React 19-safe, and `useScroll`/`useTransform` cover all scroll storytelling needed here. Adding GSAP would mean a second animation runtime, more bundle, more surface for bugs — net negative against this brief.
- Path alias `@/*`, TS strict config, Tailwind config with rgb-channel tokens — preserved.

---

## F. The one trap, called out explicitly

The uploaded `globals.css` is a **hex-token + hand-authored-component** stylesheet (`--paper: #F7F4EF`, `.hero-video-wrapper`, `.btn-primary`, …). The live repo's `globals.css` uses **space-separated rgb channels** so Tailwind can do `/opacity`.

**Dropping the uploaded file in would break every `bg-paper/50`-style utility across the entire site.** So:

- **globals.css → score 7.5 → KEEP + EXTEND, do NOT replace.**
- The genuinely useful *new* tokens from the uploaded file (deeper petrols, lighter sprout, amber accents) were converted to rgb-channel format and parked in **`STYLE_ADDITIONS.optional.css`** as an optional, clearly-marked appendix you can paste at the end of `globals.css` if/when you want them. Nothing depends on it.

Existing `globals.css` defects noted in the audit (duplicate `.btn-shine`, an invalid `:global(.dark)` selector) are documented in `AUDIT_REPORT.md §2.3` for a future cleanup pass; they are non-breaking and were left untouched this pass to avoid scope creep.

---

### Bottom line

Rebuilt: **Hero** (justified — weakest surface, video supplied) and **page order** (justified — narrative IA). Added: **Ecosystem** (required new section). **Everything else above 8/10 was preserved**, and the new work was built to plug into the existing primitives and token system rather than replace them.
