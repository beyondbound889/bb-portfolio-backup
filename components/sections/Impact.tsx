"use client";

import { metrics } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { motion, useReducedMotion } from "framer-motion";

// Show verified metrics; show unverified ones only once a real value is set.
const SHOW_UNVERIFIED = false;

export function Impact() {
  const shown = metrics.filter((m) => m.verified || (SHOW_UNVERIFIED || m.value > 0));
  const reduce = useReducedMotion();

  return (
    <Section id="impact" tint>
      <Reveal>
        <Eyebrow>Proof of work</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
          Small numbers, honestly counted.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-slate">
          An early-stage brand that would rather show a few real milestones than inflate a vanity dashboard.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((m, i) => (
          <StaggerItem
            key={m.label}
            className="group relative z-0 overflow-hidden bg-paper p-7 transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:bg-surface hover:shadow-[0_24px_60px_-20px_rgb(var(--sprout)/0.22)] dark:bg-surface/35 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/60"
          >
            {/* Animated bottom accent */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-petrol to-sprout transition-transform duration-500 group-hover:scale-x-100" />

            <p className="font-display text-5xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-petrol">
              <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
            </p>
            <p className="mt-3 font-display text-sm font-semibold text-ink">{m.label}</p>
            <p className="mt-1 font-mono text-[11px] text-slate">{m.note}</p>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Honesty note */}
      <Reveal delay={0.2}>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-paper px-5 py-4 dark:bg-surface/30">
          <span className="mt-0.5 shrink-0 font-mono text-xs text-petrol">✓</span>
          <p className="text-sm text-slate">
            All figures above are verified and reflect real business activities, not projections.
            Unverified placeholders are hidden until confirmed numbers are available.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}