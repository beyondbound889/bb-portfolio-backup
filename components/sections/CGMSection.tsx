"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlucoseChart } from "@/components/ui/GlucoseChart";

/**
 * CGMSection — Enhanced with richer layout and supporting context.
 */
export function CGMSection() {
  return (
    <Section id="cgm-data" tint>
      <Reveal>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-petrol">
              The proof behind the product
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
              What the glucose monitor showed.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">
              Two seasons of self-observation wearing a continuous glucose monitor —
              the same meals, the only variable changing is the formulation. This is
              the data the brand was built on.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl border border-petrol/20 bg-petrol/5 p-6 text-center dark:bg-petrol/10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-petrol">Now active</p>
            <p className="mt-1 font-display text-3xl font-bold text-petrol">Season 2</p>
            <p className="mt-1 text-xs text-slate">CGM self-observation</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10">
          <GlucoseChart />
        </div>
      </Reveal>

      <Reveal delay={0.22}>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Protocol", val: "Same meals" },
            { label: "Variable", val: "Formulation only" },
            { label: "Device", val: "CGM worn daily" },
            { label: "Source", val: "Founder-first" },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-line bg-surface p-4 dark:bg-surface/50"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate">{f.label}</p>
              <p className="mt-1 font-display text-sm font-semibold text-ink">{f.val}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.28}>
        <p className="mt-6 font-mono text-[11px] text-slate">
          Self-Observation Season 2 currently active. All data is from the
          founder&rsquo;s own CGM sessions — not sourced from third-party studies.
          This is not a medical claim.
        </p>
      </Reveal>
    </Section>
  );
}