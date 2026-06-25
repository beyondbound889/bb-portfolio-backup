"use client";

import { motion, useReducedMotion } from "framer-motion";
import { values, media } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ArrowUpRight } from "lucide-react";

export function Values() {
  return (
    <Section id="values" tint>
      <Reveal>
        <Eyebrow>Operating principles</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
          How we make decisions at Beyond Bound®.
        </h2>
        <p className="mt-3 max-w-xl text-lg text-slate">
          These aren't aspirational. They're constraints.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <StaggerItem
            key={v.title}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-petrol/30 hover:shadow-[0_24px_60px_-20px_rgb(var(--petrol)/0.2)] dark:bg-surface/35 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/60"
          >
            {/* Number watermark */}
            <span className="pointer-events-none absolute right-4 top-3 font-display text-6xl font-bold text-line transition-colors duration-300 group-hover:text-petrol/10 dark:text-petrol/5">
              0{i + 1}
            </span>

            <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol transition-colors duration-300 group-hover:bg-petrol group-hover:text-paper">
              <Icon name={v.icon} />
            </span>
            <h3 className="relative mt-5 font-display text-lg font-semibold text-ink">{v.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-slate">{v.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function Media() {
  return (
    <Section id="media">
      <Reveal>
        <Eyebrow>Milestones & presence</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
          Places the work has taken us.
        </h2>
        <p className="mt-3 max-w-xl text-lg text-slate">
          Building a healthcare brand means showing up where ideas are challenged and assumptions are tested.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
        {media.map((m) => (
          <StaggerItem key={m.title}>
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-petrol/30 hover:shadow-[0_24px_60px_-20px_rgb(var(--petrol)/0.18)] dark:bg-surface/35 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/60">
              {/* Category badge */}
              <span className="inline-block rounded-full border border-line bg-mist px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate transition-colors duration-300 group-hover:border-petrol/30 group-hover:text-petrol">
                {m.kind}
              </span>

              <h3 className="mt-4 font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-petrol">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{m.context}</p>

              {m.href ? (
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-petrol transition-colors hover:text-ink"
                >
                  Learn more <ArrowUpRight size={12} />
                </a>
              ) : null}

              {/* Subtle gradient on hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-petrol to-sprout transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}