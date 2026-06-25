"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * HealthcareGap
 *
 * Editorial section surfacing the core market insight:
 * India's metabolic health crisis + a credibility gap, not a product gap.
 *
 * Placement: between Philosophy and InstagramVideoSection.
 * Content sourced from "Section 5 — Healthcare Gap" in the content deck.
 */

const SIGNALS = [
  {
    stat: "↑",
    label: "Metabolic disorders",
    note: "Rising across India despite more products on the shelf",
  },
  {
    stat: "?",
    label: "Verified claims",
    note: "Most wellness labels make promises no one has measured",
  },
  {
    stat: "0",
    label: "Trusted brands",
    note: "No focused metabolic-health brand people could turn to",
  },
];

export function HealthcareGap() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-10%" });

  return (
    <Section id="insight" tint>
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Left — headline + body */}
        <div>
          <Reveal>
            <Eyebrow>The Insight</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
              Why hasn&rsquo;t someone already solved wellness in India?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
              The Indian market is flooded with supplements making massive health
              promises. Yet metabolic disorders continue to climb. When I spoke
              directly to consumers, I realised they weren&rsquo;t suffering from
              a shortage of health products.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate">
              They were suffering from a complete lack of transparency, education,
              and validation. They didn&rsquo;t know what to believe.
            </p>
          </Reveal>

          {/* Pull-quote */}
          <Reveal delay={0.28}>
            <div className="quote-border mt-8 pl-5">
              <p className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                &ldquo;The gap wasn&rsquo;t a product gap.
                <br />
                It was a credibility gap.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[11px] text-slate">
                — Priyanshu Chauhan
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — signal cards */}
        <div ref={statsRef} className="grid gap-3">
          {SIGNALS.map((s, i) => (
            <motion.div
              key={s.label}
              className="group flex items-start gap-5 rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-petrol/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_-16px_rgb(var(--petrol)/0.2)] dark:bg-surface/35 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/60"
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Large glyph */}
              <span className="shrink-0 font-display text-3xl font-bold text-petrol/30 transition-colors duration-300 group-hover:text-petrol/60 dark:text-petrol/20 dark:group-hover:text-petrol/50">
                {s.stat}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {s.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate">{s.note}</p>
              </div>
            </motion.div>
          ))}

          {/* Bottom note */}
          <motion.p
            className="mt-1 font-mono text-[11px] text-slate"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Based on market research and direct consumer conversations.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}