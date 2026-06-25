"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";
import { insights } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const KIND_COLOR: Record<string, string> = {
  "Self-observation": "bg-petrol/10 text-petrol border-petrol/20",
  "Perspective": "bg-sprout/10 text-sprout border-sprout/20",
  "Field note": "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
};

export function Insights() {
  return (
    <Section id="insights" tint>
      <Reveal>
        <Eyebrow>Field notes & perspectives</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
            Thinking out loud, in public.
          </h2>
          <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 dark:bg-surface/40">
            <TrendingUp size={14} className="text-petrol" />
            <span className="font-mono text-[11px] text-slate">Updated on LinkedIn</span>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((ins) => (
          <StaggerItem key={ins.title}>
            <a
              href={ins.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-petrol/30 hover:shadow-[0_24px_60px_-20px_rgb(var(--petrol)/0.2)] dark:bg-surface/35 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/60"
            >
              {/* Kind badge */}
              <span className={`self-start rounded-full border px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider ${KIND_COLOR[ins.kind] ?? "bg-mist text-slate"}`}>
                {ins.kind}
              </span>

              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-petrol">
                {ins.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{ins.excerpt}</p>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-[10px] text-slate">{ins.source}</span>
                <ArrowUpRight
                  size={15}
                  className="text-slate transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-petrol"
                />
              </div>
            </a>
          </StaggerItem>
        ))}
      </Stagger>

      {/* LinkedIn CTA strip */}
      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-6 dark:bg-surface/30">
          <div>
            <p className="font-display text-base font-semibold text-ink">More on LinkedIn</p>
            <p className="mt-1 text-sm text-slate">
              Self-observation notes, market perspectives, and founder reflections — published regularly.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/priyanshu-chauhan-963981212/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgb(var(--petrol)/0.45)]"
          >
            Follow on LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}