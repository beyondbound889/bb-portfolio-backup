"use client";

/**
 * TrustBanner — a horizontal auto-scrolling ticker of trust signals.
 * Competitor site has none of this. This establishes credibility at a glance.
 */

import { motion, useReducedMotion } from "framer-motion";

const ITEMS = [
  "🌱 B.Sc Agriculture · MJP Rohilkhand University",
  "🏛️ MBA Healthcare Management · K J Somaiya Mumbai",
  "🔬 Patanjali Ayurved · Corporate Experience",
  "📊 Allied Market Research · Market Intelligence",
  "🏆 BIRAC Stall · CHEMTECH Industry Showcase",
  "🩺 All India Institute of Ayurveda · Engagement",
  "📦 Glycomics™ · Live on Amazon.in",
  "📈 CGM Self-observation · 2 Seasons of Data",
  "🌿 Beyond Bound® · Registered Brand",
];

export function TrustBanner() {
  const reduce = useReducedMotion();
  const doubled = [...ITEMS, ...ITEMS]; // seamless loop

  return (
    <div className="relative overflow-hidden border-y border-line bg-mist/60 py-3.5 dark:bg-surface/30">
      {/* Fade masks at edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-mist/80 to-transparent dark:from-surface/30" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-mist/80 to-transparent dark:from-surface/30" />

      <motion.div
        className="flex w-max gap-12"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-slate"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}