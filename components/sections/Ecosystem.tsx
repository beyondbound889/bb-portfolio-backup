"use client";

/**
 * ECOSYSTEM — "How Beyond Bound works" (Phase 10)
 * ────────────────────────────────────────────────────────────────────────
 * The brief's most-ambitious ask: a Seed-style, sticky-scroll "exploded
 * architecture" that becomes the most memorable section of the site.
 *
 * Implementation notes
 *   • A tall outer track + a `sticky` stage. scrollYProgress over the track
 *     drives a continuous `activeFloat` (0 → N-1). Each layer is a depth
 *     plane whose scale / y / blur / opacity / tilt derive from how far it is
 *     from the front — that is the "exploded, layered" depth, done with CSS
 *     3-D transforms (no WebGL, no extra deps → robust + light).
 *   • Cursor moves the whole stack a few degrees (parallax pointer feel);
 *     a radial "lighting" glow shifts from petrol → sprout as you descend.
 *   • prefers-reduced-motion collapses everything to a plain, accessible
 *     vertical list — no pinning, no tilt, no scrub.
 *
 * On the labels: the brief listed Vision / Strategy / Systems / AI / Execution
 * / Impact. Five are kept verbatim as the mono kickers; the generic "AI" layer
 * — which isn't part of a healthcare-trust brand's real value chain — was
 * replaced with "Science", in keeping with the brief's own rule that nothing
 * be generic. The original six are in ALT_KICKERS for a one-line swap.
 */

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type Layer = {
  kicker: string;
  title: string;
  body: string;
  facets: string[];
};

const LAYERS: Layer[] = [
  {
    kicker: "Vision",
    title: "An India that measures its health",
    body: "A country where metabolic care is normal, measured and affordable — and where ‘natural’ and ‘evidence-based’ stop being opposites.",
    facets: ["Preventive by default", "Affordable", "Honest by design"],
  },
  {
    kicker: "Strategy",
    title: "Measure first, market second",
    body: "Start from the body’s own rhythm, not a crash protocol. Say only what can be defended. Earn trust the slow way — by proving it.",
    facets: ["No overclaiming", "Careful labels", "Trust compounds"],
  },
  {
    kicker: "Systems",
    title: "The self-observation engine",
    body: "The founder wears a continuous glucose monitor and eats the same meals with and without the formulation — then publishes what the data shows, dull results included.",
    facets: ["CGM protocol", "Same-meal A/B", "Published openly"],
  },
  {
    kicker: "Science",
    title: "Tradition, held to instruments",
    body: "Nature-inspired, science-led ingredients turned into a stable, repeatable product — traditional knowledge measured by modern instruments, not nostalgia.",
    facets: ["Evidence-aligned", "AIIA engagement", "Repeatable formulation"],
  },
  {
    kicker: "Execution",
    title: "Glycomics™, shipping",
    body: "From bench to a shippable 60-count pack — a natural glucose-metabolism support, live on Amazon.in and now running its second self-observation season.",
    facets: ["Live on Amazon.in", "60 capsules", "Self-Observation S2"],
  },
  {
    kicker: "Impact",
    title: "Proof you can question",
    body: "Early-stage and honest about it: a registered brand, a measured product, and an industry-stage showing — milestones counted, never inflated.",
    facets: ["Registered brand", "BIRAC · CHEMTECH", "Built in the open"],
  },
];

// Brief's original labels, kept for a one-line swap if you prefer them.
// const ALT_KICKERS = ["Vision","Strategy","Systems","AI","Execution","Impact"];

const N = LAYERS.length;
const EASE = [0.16, 1, 0.3, 1] as const;

/* A single depth plane in the stack. Each instance derives its own transforms
 * from how far it sits from the front (`rel` = index − activeFloat). */
function Plane({
  layer,
  index,
  activeFloat,
}: {
  layer: Layer;
  index: number;
  activeFloat: MotionValue<number>;
}) {
  const rel = useTransform(activeFloat, (v) => v - index); // 0 = front, +ve = passed
  const y = useTransform(rel, (r) => r * -54);
  const scale = useTransform(rel, (r) => Math.max(0.78, 1 - Math.abs(r) * 0.12));
  const rotateX = useTransform(rel, (r) => r * 5);
  const opacity = useTransform(rel, (r) =>
    Math.abs(r) < 0.001 ? 1 : Math.max(0, 1 - Math.abs(r) * 0.5)
  );
  const filter = useTransform(rel, (r) => `blur(${Math.min(Math.abs(r) * 2.2, 7)}px)`);
  const zIndex = useTransform(rel, (r) => Math.round(100 - Math.abs(r) * 10));

  return (
    <motion.div
      style={{ y, scale, rotateX, opacity, filter, zIndex }}
      className="absolute inset-x-0 top-1/2 mx-auto w-full max-w-md -translate-y-1/2 will-change-transform"
    >
      <div className="rounded-2xl border border-paper/12 bg-paper/[0.06] p-5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sprout">
            {String(index + 1).padStart(2, "0")} · {layer.kicker}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-sprout/80" />
        </div>
        <p className="mt-3 font-display text-lg font-semibold leading-snug text-paper">
          {layer.title}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {layer.facets.map((f) => (
            <span
              key={f}
              className="rounded-full border border-paper/12 px-2.5 py-1 font-mono text-[10px] text-paper/65"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Ecosystem() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Continuous 0 → N-1 used to drive the depth planes smoothly.
  const activeFloat = useTransform(scrollYProgress, [0, 1], [0, N - 1]);
  useMotionValueEvent(activeFloat, "change", (v) => {
    const i = Math.min(N - 1, Math.max(0, Math.round(v)));
    setActive((prev) => (prev === i ? prev : i));
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Pointer tilt (subtle). Springed for a premium, weighty feel.
  const tiltX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  function onPointerMove(e: React.PointerEvent) {
    if (reduce) return;
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltY.set(px * 10);
    tiltX.set(py * -8);
  }
  function onPointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  // Lighting glow shifts petrol → sprout as you descend.
  const glow = [
    "rgba(14,92,87,0.55)",
    "rgba(18,110,103,0.55)",
    "rgba(26,122,116,0.5)",
    "rgba(36,150,120,0.5)",
    "rgba(47,163,124,0.5)",
    "rgba(77,196,154,0.5)",
  ][active];

  /* ── Reduced-motion / no-JS-friendly fallback: a plain vertical list ── */
  if (reduce) {
    return (
      <section
        id="ecosystem"
        aria-label="Beyond Bound ecosystem"
        className="bg-ink px-6 py-24 text-paper sm:py-32"
      >
        <div className="mx-auto w-full max-w-shell">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-sprout">
            <span className="h-px w-6 bg-sprout" /> The ecosystem
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
            How Beyond Bound actually works
          </h2>
          <ol className="mt-12 space-y-5">
            {LAYERS.map((l, i) => (
              <li
                key={l.kicker}
                className="rounded-2xl border border-paper/12 bg-paper/[0.05] p-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sprout">
                  {String(i + 1).padStart(2, "0")} · {l.kicker}
                </span>
                <p className="mt-2 font-display text-xl font-semibold">{l.title}</p>
                <p className="mt-2 max-w-2xl text-paper/70">{l.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section id="ecosystem" aria-label="Beyond Bound ecosystem" className="bg-paper">
      {/* Tall track gives us ~1 viewport of scroll per layer */}
      <div ref={trackRef} style={{ height: `${N * 92}vh` }} className="relative">
        {/* Pinned stage */}
        <div
          ref={stageRef}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="sticky top-0 flex h-[100svh] min-h-[640px] items-center overflow-hidden bg-ink text-paper"
        >
          {/* Shifting lighting */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{ background: `radial-gradient(60% 55% at 72% 42%, ${glow} 0%, transparent 70%)` }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          <div
            aria-hidden
            className="dot-grid pointer-events-none absolute inset-0 opacity-[0.5]"
          />

          <div className="relative mx-auto grid w-full max-w-shell items-center gap-10 px-6 sm:px-10 lg:grid-cols-[0.92fr_1.08fr]">
            {/* LEFT: rail + the active layer's full copy (crossfades) */}
            <div>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-sprout">
                <span className="h-px w-6 bg-sprout" /> The ecosystem
              </p>
              <h2 className="mt-5 max-w-md font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest">
                How Beyond Bound actually works
              </h2>

              {/* Rail */}
              <div className="mt-9 flex gap-5">
                <div className="relative w-px shrink-0 bg-paper/15">
                  <motion.div
                    className="absolute left-0 top-0 w-px origin-top bg-sprout"
                    style={{ height: "100%", scaleY: railScale }}
                  />
                </div>
                <ul className="flex flex-col gap-3">
                  {LAYERS.map((l, i) => (
                    <li
                      key={l.kicker}
                      className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                        i === active ? "text-paper" : "text-paper/35"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")} · {l.kicker}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active copy */}
              <div className="mt-9 min-h-[150px] max-w-md">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <p className="font-display text-2xl font-semibold leading-snug text-paper">
                    {LAYERS[active].title}
                  </p>
                  <p className="mt-3 leading-relaxed text-paper/70">
                    {LAYERS[active].body}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: the exploded depth stack */}
            <div
              className="relative h-[380px] sm:h-[440px]"
              style={{ perspective: 1200 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
              >
                {LAYERS.map((l, i) => (
                  <Plane key={l.kicker} layer={l} index={i} activeFloat={activeFloat} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Progress counter */}
          <div className="absolute bottom-6 left-6 z-10 font-mono text-[11px] tracking-widest text-paper/50 sm:left-10">
            {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
