"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { journey } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlucoseChart } from "@/components/ui/GlucoseChart";

export function Journey() {
  const railRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 65%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <Section id="journey" tint>
      <Reveal>
        <Eyebrow>Founder journey</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
          From the soil to a measured shelf.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate">
          Every step was necessary. Each one compounds into what Beyond Bound® is today.
        </p>
      </Reveal>

      {/* Timeline */}
      <ol
        ref={railRef}
        className="relative mt-14 space-y-0"
        style={{ paddingLeft: "2rem" }}
      >
        {/* Static rail */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-px bg-line"
          style={{ left: "6px" }}
        />

        {/* Animated fill overlay */}
        <motion.div
          aria-hidden="true"
          className="absolute top-0 w-px origin-top bg-gradient-to-b from-sprout via-petrol to-sprout/40"
          style={{
            left: "6px",
            scaleY: reduce ? 1 : fill,
            height: "100%",
          }}
        />

        {journey.map((s, i) => (
          <Reveal key={s.index} delay={Math.min(i * 0.05, 0.3)}>
            <li className="group relative pb-12 last:pb-0">
              {/* Timeline dot — precisely centered on the rail */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 h-3 w-3 rounded-full border-2 border-petrol bg-paper transition-all duration-300 group-hover:scale-125 group-hover:border-sprout group-hover:shadow-[0_0_0_4px_rgb(var(--petrol)/0.15)]"
                style={{ left: "0px" }}
              />

              {/* Card */}
              <div className="ml-8 rounded-xl border border-transparent px-4 py-3 transition-all duration-300 group-hover:border-line group-hover:bg-surface group-hover:shadow-[0_12px_36px_-16px_rgb(var(--petrol)/0.18)] dark:group-hover:bg-surface/60 dark:group-hover:backdrop-blur-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold text-petrol">{s.index}</span>
                  <span className="font-mono text-[11px] text-slate">{s.period}</span>
                </div>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-slate">{s.body}</p>
                {s.proof ? (
                  <p className="mt-3 inline-block rounded-full bg-surface px-3 py-1 font-mono text-[11px] text-petrol ring-1 ring-line transition-colors duration-300 group-hover:ring-petrol/40">
                    {s.proof}
                  </p>
                ) : null}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Glucose chart — the unique data story competitor lacks entirely */}
      <Reveal delay={0.2}>
        <div className="mt-16">
          <div className="mb-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-petrol">The proof behind the product</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
              What the glucose monitor showed.
            </h3>
            <p className="mt-2 max-w-xl text-slate">
              Two seasons of self-observation wearing a continuous glucose monitor — the same meals,
              the only variable changing is the formulation.
            </p>
          </div>
          <GlucoseChart />
        </div>
      </Reveal>
    </Section>
  );
}