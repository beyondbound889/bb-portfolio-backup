/**
 * SINGLE SOURCE OF TRUTH for all site copy.
 * Every factual claim here is grounded in public sources (LinkedIn, Amazon.in
 * Beyond Bound listing, the Beyond Bound brand). Items marked  // TODO(verify)
 * are NOT yet confirmed — replace or remove them before launch. Nothing in this
 * file is a fabricated biographical claim; descriptive/vision copy is written in
 * the founder's voice and aligned to his real positioning.
 *
 * To move to a CMS later (e.g. Sanity), swap these exports for fetched data.
 */
import type {
  NavItem,
  Credential,
  JourneyStage,
  FocusArea,
  Metric,
  Insight,
  Value,
  MediaItem,
} from "@/types";

export const site = {
  name: "Priyanshu Chauhan",
  role: "Founder & Director, Beyond Bound®",
  email: "founder@beyondbound.co",
  linkedin: "https://www.linkedin.com/in/priyanshu-chauhan-963981212/",
  company: "https://beyondbound.co",
  product: "https://www.amazon.in/Beyond-Bound-Glycomics-Metabolism-Capsules/dp/B0GFP3VFPT",
  url: "https://beyondbound.co",
  location: "India",
  tagline:
    "Building evidence-led healthcare India can actually trust — measured, not marketed.",
};

export const nav: NavItem[] = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Journey", href: "#journey" },
  { label: "Focus", href: "#focus" },
  { label: "Beyond Bound", href: "#beyond-bound" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Founder & Director — Beyond Bound®",
  headline: ["Evidence-led healthcare", "India can actually trust."],
  sub: "I’m Priyanshu Chauhan — a healthcare founder building evidence-driven wellness products that earn trust the slow way: by measuring them. Beyond Bound® starts with metabolic health, where small, steady changes quietly decide long-term outcomes.",
  credentials: [
    { label: "Founder & Director", sub: "Beyond Bound®" },
    { label: "MBA", sub: "K J Somaiya, Mumbai" },
    { label: "B.Sc Agriculture", sub: "MJP Rohilkhand" },
    { label: "Metabolic Wellness", sub: "Glycomics™" },
  ] as Credential[],
  primaryCta: { label: "Explore the work", href: "#beyond-bound" },
  secondaryCta: { label: "Connect", href: "#contact" },
};

export const philosophy = {
  eyebrow: "Why I started building",
  title: "Good health shouldn’t depend on guesswork.",
  body: [
    "I came to healthcare from the soil, not the spreadsheet. A degree in agricultural science taught me that living systems respond to inputs slowly and honestly — you cannot rush a crop, and you cannot fake a harvest. Time at Patanjali Ayurved and in market research showed me the other side: how India actually buys wellness, and how often it’s sold a promise no one ever measured.",
    "Those two lessons became Beyond Bound. India is quietly becoming a metabolic-health country — irregular meals, more sugar, more sitting — and most of the answers on the shelf are either aggressive or unproven. I wanted to build the opposite: gentle, daily, science-led support that respects the body’s own rhythm.",
    "So I started with the hardest thing to fake — my own glucose curve. I wear a continuous monitor, eat the same meals with and without our formulation, and publish what I see. If a product can’t hold up to being measured on the founder first, it has no business being sold to anyone.",
  ],
};

/**
 * EFFICACY — the founder "creed" beat (carried over from the source material's
 * "Proving it on myself first" section). The self-observation idea already runs
 * through `philosophy`, `journey` and `beyondBound`; this block exists to give it
 * one memorable, human moment (the creed line + real footage). It does NOT repeat
 * the glucose data — that is `CGMSection`'s job. Copy is the founder's own; no new
 * factual claim is introduced here.
 */
export const efficacy = {
  eyebrow: "First-hand efficacy",
  title: "Proving it on myself first.",
  creed: "What I won’t test on myself, I will never ask anyone else to trust.",
  creedBy: "Priyanshu Chauhan — Founder & Director, Beyond Bound®",
  body: [
    "Before asking anyone to trust Beyond Bound, I wanted to understand the problem in my own body. For months I’ve worn a continuous glucose monitor, watching how ordinary decisions — food, sleep, movement, stress — move my own metabolism.",
    "What began as curiosity became conviction. Health isn’t built through claims or advertising; it’s built through understanding, consistency, and change you can measure.",
    "That habit still sets the standard for everything we build.",
  ],
  badge: "Founder self-observation",
  caption:
    "Founder self-observation footage. Same meals, same routine — the formulation is the only variable being evaluated. This is not a clinical claim.",
  clips: ["/video/efficacy-1.mp4", "/video/efficacy-2.mp4", "/video/efficacy-3.mp4"],
  poster: "/video/efficacy-poster.jpg",
};

export const journey: JourneyStage[] = [
  {
    index: "01",
    title: "Roots in agricultural science",
    period: "B.Sc Agriculture",
    body: "Trained at Mahatma Jyotiba Phule Rohilkhand University, where the first principle was simple: living systems reward patience and punish shortcuts.",
    proof: "MJP Rohilkhand University",
  },
  {
    index: "02",
    title: "Industry & market research",
    period: "Early career",
    body: "Hands-on exposure to how India makes and sells wellness — including time connected to Patanjali Ayurved and consumer/market research work that mapped real buying behaviour.",
    proof: "Patanjali Ayurved · Allied Market Research",
  },
  {
    index: "03",
    title: "MBA at K J Somaiya",
    period: "Postgraduate",
    body: "An MBA from the K J Somaiya Institute of Management, Mumbai — turning a science instinct into the discipline of building a company, a brand, and a business model.",
    proof: "K J Somaiya Institute of Management",
  },
  {
    index: "04",
    title: "Founding Beyond Bound®",
    period: "Founder & Director", // TODO(verify): exact founding year
    body: "Started Beyond Bound on one belief: people deserve health solutions they can trust. A registered brand focused on metabolic wellness for everyday Indian life.",
    proof: "Beyond Bound® — registered brand",
  },
  {
    index: "05",
    title: "Glycomics™ — from formulation to self-observation",
    period: "Flagship product",
    body: "Developed Glycomics, a natural glucose-metabolism support formulation, and pressure-tested it on the founder first using a continuous glucose monitor — now running multiple ‘Self-Observation’ seasons.",
    proof: "Live on Amazon.in · Self-Observation Season 2",
  },
  {
    index: "06",
    title: "Showcasing the research story",
    period: "Industry stage",
    body: "Presented at the Biotechnology Industry Research Assistance Council (BIRAC) stall at CHEMTECH — putting an early-stage Indian wellness product into a serious research-and-industry room.",
    proof: "BIRAC · CHEMTECH",
  },
  {
    index: "07",
    title: "Building people, not just product",
    period: "Ongoing",
    body: "Runs an internship and live-project program, giving students real work on a real healthcare brand instead of classroom abstractions.",
    proof: "Beyond Bound Internship / Live-Project Program",
  },
  {
    index: "08",
    title: "What’s next",
    period: "2025 →", // TODO(verify): roadmap specifics
    body: "Deepening the evidence base, widening the metabolic-wellness range, and proving that an honest, measured Indian healthcare brand can scale without overclaiming.",
  },
];

export const focusAreas: FocusArea[] = [
  {
    icon: "Activity",
    title: "Metabolic wellness",
    body: "Daily, non-aggressive support for healthy glucose balance — built for irregular, modern Indian routines rather than extreme protocols.",
    impact: "Glycomics™ — the flagship product line",
  },
  {
    icon: "LineChart",
    title: "Evidence & self-observation",
    body: "Continuous-glucose-monitor experiments on the founder first: same meals, with and without the formulation, published openly.",
    impact: "Self-Observation, now in Season 2",
  },
  {
    icon: "FlaskConical",
    title: "Formulation & product development",
    body: "Nature-inspired, science-led ingredients turned into a stable, repeatable consumer product — not a one-off lab promise.",
    impact: "From bench to a shippable 60-count pack",
  },
  {
    icon: "Leaf",
    title: "Ayurveda, met with modern evidence",
    body: "Respecting traditional Indian wellness knowledge while holding it to contemporary measurement and honest labelling.",
    impact: "Engagement with the All India Institute of Ayurveda",
  },
  {
    icon: "ShieldCheck",
    title: "Brand & trust building",
    body: "A registered healthcare brand built on careful claims — the discipline of saying only what can be defended.",
    impact: "Beyond Bound® — a brand people can question",
  },
  {
    icon: "Users",
    title: "Entrepreneurship & mentorship",
    body: "Translating a science-and-business education into a working company, and bringing students into the build through real projects.",
    impact: "Internship & live-project program",
  },
];

export const beyondBound = {
  eyebrow: "The company",
  title: "Beyond Bound®",
  lede: "A science-led wellness brand for everyday India — starting where the quiet damage starts: metabolism.",
  mission:
    "Make trustworthy, science-led wellness a default — not a luxury — for people who want to stay ahead of their health rather than react to it.",
  vision:
    "An India where metabolic care is normal, measured, and affordable, and where ‘natural’ and ‘evidence-based’ are no longer opposites.",
  approachTitle: "The approach: measure first, market second",
  approach: [
    "Start with the body’s own rhythm, not a crash protocol.",
    "Test on the founder before anyone else, with real instruments.",
    "Say only what can be defended — careful claims, honest labels.",
    "Publish the observations, including the unremarkable ones.",
  ],
  product: {
    name: "Glycomics™",
    type: "Natural Glucose Metabolism Support · 60 capsules",
    desc: "A thoughtfully designed wellness supplement made with nature-inspired, science-led ingredients, formulated to support metabolic health and healthy glucose balance as part of a balanced lifestyle — without extreme or aggressive approaches.",
    observation:
      "In the founder’s own continuous-glucose self-observation: same food, with Glycomics — a steadier post-meal pattern, no sudden drop, no hypoglycemia.",
    cta: { label: "View on Amazon.in", href: site.product },
  },
  // Required compliance note for a wellness supplement — keep this honest.
  disclaimer:
    "Glycomics™ is a wellness supplement intended to support metabolic health as part of a balanced lifestyle. It is not intended to diagnose, treat, cure, or prevent any disease. Self-observation reflects one individual’s experience and is not a clinical claim.",
};

/**
 * IMPACT — Honest by design.
 * Only `verified: true` items are confirmed from public sources. The
 * `verified: false` items are placeholders with neutral defaults — REPLACE the
 * numbers with Priyanshu's real figures before launch (see LEFTOVER.md), or the
 * <Impact> component can be told to hide unverified metrics.
 */
export const metrics: Metric[] = [
  { value: 1, suffix: "", label: "Flagship product", note: "Glycomics™, live on Amazon.in", verified: true },
  { value: 2, suffix: "", label: "Self-observation seasons", note: "Founder-led CGM experiments", verified: true },
  { value: 60, suffix: "", label: "Capsules per pack", note: "A full monthly cycle", verified: true },
  { value: 1, suffix: "", label: "Industry showcase", note: "BIRAC · CHEMTECH", verified: true },
  // TODO(verify): replace with real numbers from Priyanshu
  { value: 0, suffix: "+", label: "Customers supported", note: "Add real figure", verified: false },
  { value: 0, suffix: "+", label: "Interns mentored", note: "Add real figure", verified: false },
];

/**
 * INSIGHTS — these summarise Priyanshu's REAL public LinkedIn updates and link
 * out to them. They are not invented articles. Replace `href` with the specific
 * post/article URLs, or wire a CMS, when ready.
 */
export const insights: Insight[] = [
  {
    kind: "Self-observation",
    title: "Season 2: same food, with Glycomics",
    excerpt:
      "What a continuous glucose monitor shows when the only variable that changes is the formulation — a steadier post-meal curve, no sudden drop.",
    href: site.linkedin,
    source: "LinkedIn · Beyond Bound®",
  },
  {
    kind: "Perspective",
    title: "Why metabolic health is India’s quiet epidemic",
    excerpt:
      "Irregular meals, more sugar, more sitting. The case for gentle, daily, measured prevention over aggressive intervention.",
    href: site.linkedin,
    source: "LinkedIn · Beyond Bound®",
  },
  {
    kind: "Field note",
    title: "Ayurveda, meet the glucose monitor",
    excerpt:
      "Holding traditional wellness knowledge to modern measurement — and why that combination, done honestly, is the opportunity.",
    href: site.linkedin,
    source: "LinkedIn · Beyond Bound®",
  },
];

export const values: Value[] = [
  { icon: "Microscope", title: "Research first", body: "If it can’t be measured, it isn’t a claim — it’s marketing." },
  { icon: "ShieldCheck", title: "Integrity", body: "Say only what can be defended. Label honestly. Publish the dull results too." },
  { icon: "Sprout", title: "Evidence-driven", body: "Tradition earns its place by surviving modern measurement, not by nostalgia." },
  { icon: "Hourglass", title: "Long-term thinking", body: "Health compounds quietly. Build for the decade, not the launch week." },
  { icon: "Gauge", title: "Measure, don’t guess", body: "Test on the founder first, with real instruments, before anyone else." },
];

export const media: MediaItem[] = [
  {
    kind: "Showcase",
    title: "BIRAC stall at CHEMTECH",
    context:
      "Presented Beyond Bound’s product at the Biotechnology Industry Research Assistance Council stall — an industry-and-research stage for early Indian innovation.",
  },
  {
    kind: "Engagement",
    title: "All India Institute of Ayurveda",
    context:
      "Connected with India’s apex Ayurveda institution as part of building an evidence-aligned wellness brand.",
  },
  // TODO(verify): add real interviews, podcasts, features with links as they happen.
];

export const personal = {
  eyebrow: "Beyond the work",
  title: "The founder, off the label",
  // These are written to be defensible from what's public (agri roots, the
  // quantified-self habit). TODO(verify): confirm/expand with Priyanshu's real
  // interests, books, travel, etc. — see LEFTOVER.md.
  items: [
    {
      icon: "Sprout",
      title: "Grown, not manufactured",
      body: "An agricultural-science background that still shapes how he thinks about health — slow, living, systemic.",
    },
    {
      icon: "Activity",
      title: "The quantified self",
      body: "Wears a glucose monitor by choice; treats his own body as the first, most honest test subject.",
    },
    {
      icon: "BookOpen",
      title: "A student of the field",
      body: "Reads across nutrition, metabolic science, and Indian traditional wellness — and brings students along through live projects.",
    },
  ],
};

export const vision = {
  eyebrow: "Future vision",
  question: "What does healthcare look like in 2035?",
  answer: [
    "Preventive, not reactive. We’ll stop waiting for a diagnosis to start paying attention.",
    "Measured, not marketed. Wellness products will be expected to show their evidence — and ‘natural’ will have to mean ‘proven’, too.",
    "And it will be Indian on its own terms: traditional knowledge, held to modern instruments, made affordable and ordinary.",
  ],
  closing: "That’s the India I’m building Beyond Bound for.",
};

export const contact = {
  eyebrow: "Contact",
  title: "Let’s build something worth trusting.",
  sub: "Open to partnerships, retail and distribution, speaking, and serious conversations about evidence-led healthcare.",
  reasons: ["Partnership", "Speaking / Event", "Business opportunity", "Press / Media", "Other"],
};