# Phase 5 Handoff — Priyanshu Chauhan Portfolio
**Session date:** June 23 2026  
**Engineer:** Arav (intern, Beyond Bound)  
**Status:** All critical fixes + upgrades delivered as file patches.  
Apply by copying changed files to repo and pushing to Vercel.

---

## What was done in this session

### 1. "Preventive" word removed across the site
- `lib/content.ts`: all `preventive` → `evidence-led` / removed
- `components/sections/Hero.tsx`: `"Preventive healthcare"` → `"Evidence-led healthcare"`
- `components/sections/FutureVisionSection.tsx`: "Preventive, not reactive" → "Proactive, not reactive"
- Typewriter words updated with more precise messaging

### 2. EnhancedJourneySection — Complete redesign
**Problem:** Old numbered block cards looked template-y and "steps presentation" generic  
**Solution:** New alternating left/right editorial layout
- Large typographic year display (`'16`, `'20`, `'23` etc.) — ghosted, reveals on hover
- Thin centre spine line on desktop only (responsive: hidden on mobile)
- Content alternates sides: odd chapters left text + right year, even chapters right text + left year
- On mobile collapses to single column flow
- Smooth staggered scroll reveals per chapter
- No numbered blocks, no cards, purely editorial type-driven
- Dark mode fully compatible

### 3. InstagramVideoSection — Upgraded
**Problem:** Small video, poor layout, placeholder too tall  
**Solution:**
- Full editorial header row (eyebrow / headline / body / CTA button in one line)
- Large embed container (min-height 640px) — Instagram reel is now center stage
- Side annotation cards show CGM Season 02 and methodology
- Responsive: side cards hidden on mobile, header stacks vertically
- CTA is now a pill button (not underline link)

### 4. CredentialsBelt — Premium redesign
**Problem:** Ugly 1px-background-gap grid trick, bad stat section  
**Solution:**
- Credentials now rendered as pill-shaped tags with emoji + label + sub + year
- Pills wrap naturally, centered, with hover shimmer animation
- Stats section: editorial layout with large colored numbers (petrol/sprout alternating)
- Bottom accent bar animation on stat card hover
- Fully dark-mode compatible
- No more boxes/cards for credentials

### 5. PhilosophyQuoteSection — Lessons card fix
**Problem:** Cards using `1px gap + background` trick looked cut off  
**Solution:** Replaced with proper border-radius cards with gap, hover lift, petrol glow

### 6. CGMSection — Enhanced layout  
- Added header flex with "Season 2" callout stat card (petrol tinted)
- Added 4-up metadata strip (Protocol / Variable / Device / Source)
- Better disclaimer copy

### 7. globals.css — Phase 5 premium additions
- Credential pill shimmer on hover (CSS ::after pseudo)
- Journey chapter left accent line on hover
- `.btn-shine` keyframe animation for primary CTA buttons
- Premium custom scrollbar (petrol colored)
- Dark mode section border refinements
- Instagram embed height overrides

---

## Critical bugs still to fix (requires env access / Vercel)

### A. Font loading fix (IMPORTANT)
The build fails locally due to no internet access for Google Fonts.  
**Fix:** In `app/layout.tsx`, the Inter font fetch will work on Vercel (it caches).  
No change needed unless you want to add a fallback.  
**If deploying fresh:** Vercel always has internet access, this only fails locally.

### B. FutureVisionSection image
Currently uses `background-image: url('/images/priyanshu-rooftop.png')`.  
If the image is missing, section will show dark overlay only.  
**Verify:** `public/images/priyanshu-rooftop.png` exists in repo.

### C. Instagram Reel embed
The Instagram embed script only loads when in viewport.  
**Known issue:** First load on slow connections may show placeholder for ~2-3s.  
**No fix needed** — this is intentional lazy loading.

---

## Remaining upgrades for next Claude session

### Priority 1 — New "Glycomics Product Showcase" section
Pull images from `https://beyondbound.co/` (product shots, packaging).  
Create a dark card section between BeyondBound and Impact.  
Design: Full-width dark section like FutureVision but for the product.  
```
Layout:
 ─────────────────────────────────
 [Product image left] | [Right: large name + claims + Amazon CTA]
 ─────────────────────────────────
 Three proof pillars below (CGM tested / Ayurvedic basis / 60 capsules)
```

### Priority 2 — Hero sub copy
Current: generic "science-led wellness products"  
Should match reference website more closely.  
Suggest: "Building metabolic wellness India can measure — starting where quiet damage begins."

### Priority 3 — Insights section  
Add a real LinkedIn posts fetcher or at minimum 2-3 real posts with real URLs.  
Check `lib/content.ts` → `insights` array for `href` values — verify they point to real posts.

### Priority 4 — Contact section
`NEXT_PUBLIC_WEB3FORMS_KEY` env var — add to Vercel dashboard.  
Without it, contact form falls back to mailto: (working fallback).

### Priority 5 — New "Proof Wall" section (inspired by FutureVision)
Use the dark parallax overlay approach for a "What makes us different" moment.  
Three pillars (like FutureVision) but about the product / brand differentiators.  
Place between HealthcareGap and InstagramVideoSection.

---

## Files changed in this session

```
components/sections/Hero.tsx              — "Evidence-led healthcare" + new typewriter words
components/sections/EnhancedJourneySection.tsx  — Complete redesign (alternating editorial)
components/sections/InstagramVideoSection.tsx   — Larger video, editorial header
components/sections/CredentialsBelt.tsx         — Premium pills + editorial stats
components/sections/PhilosophyQuoteSection.tsx  — Lessons card spacing fix  
components/sections/CGMSection.tsx              — Enhanced layout + metadata strip
components/sections/FutureVisionSection.tsx     — "Proactive" word fix
lib/content.ts                                  — All "preventive" → evidence/metabolic
app/globals.css                                 — Phase 5 premium animations
```

---

## Deploy instructions

```bash
# 1. Confirm all files are saved
git status

# 2. Build check (requires internet for font fetch on Vercel)
npm run build

# 3. Push to GitHub
git add -A
git commit -m "Phase 5: premium redesign — journey, instagram, credentials, word fixes"
git push origin main

# 4. Vercel auto-deploys on push to main
# Check: https://priyanshu-chauhan.vercel.app/
```

---

## Design system quick reference

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--petrol` | `#0E5C57` | `#5AC4B8` | Primary brand color |
| `--sprout` | `#2FA37C` | `#4AC59A` | Secondary accent |
| `--ink` | `#0E1B1A` | `#EDF2F0` | Headings |
| `--slate` | `#51635F` | `#9CB0AA` | Body copy |
| `--paper` | `#FAFAF8` | `#0B1413` | Page background |
| `--surface` | `#FFFFFF` | `#101C1A` | Card backgrounds |
| `--line` | `#E2E7E4` | `#1F302D` | Borders |

Fonts: `font-display` = Geist, `font-mono` = Geist Mono  
Type scale: `tracking-tightest` = `-0.04em`, used for all display headings

---

## Known working sections (do not break)
- Hero (rotating photo stack, typewriter, credentials grid)
- BeyondBound (product card, Glycomics dark card)
- FutureVisionSection (parallax, green pillars, white text)
- Contact (Web3Forms with mailto: fallback)
- Navbar (command palette, dark/light toggle, scroll progress)