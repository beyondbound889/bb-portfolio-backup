"use client";

import { ArrowUpRight, Check, Leaf } from "lucide-react";
import { beyondBound } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SteadyLine } from "@/components/ui/SteadyLine";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { motion, useReducedMotion } from "framer-motion";

export function BeyondBound() {
  const b = beyondBound;
  const reduce = useReducedMotion();

  return (
    <Section id="beyond-bound" tint>
      <Reveal>
        <Eyebrow>{b.eyebrow}</Eyebrow>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold tracking-tightest text-ink sm:text-5xl">
            {b.title}
          </h2>
          <a
            href={b.product.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-petrol transition-colors hover:text-ink"
          >
            {b.product.cta.label}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">{b.lede}</p>
      </Reveal>

      {/* Brand logo badge */}
      <Reveal delay={0.05}>
        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-3 dark:bg-surface/50 dark:backdrop-blur-md">
          <Leaf size={18} className="text-petrol" />
          <span className="font-display text-sm font-semibold text-ink">Beyond Bound®</span>
          <span className="h-4 w-px bg-line" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-petrol">Registered Brand · India</span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Left column: mission/vision/approach */}
        <Reveal className="grid gap-4">
          {[
            { label: "Mission", text: b.mission },
            { label: "Vision", text: b.vision },
          ].map((card) => (
            <div
              key={card.label}
              className="group rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-petrol/30 hover:shadow-[0_16px_40px_-16px_rgb(var(--petrol)/0.18)] dark:bg-surface/50 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/65"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-petrol" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-petrol">{card.label}</p>
              </div>
              <p className="mt-3 text-lg leading-relaxed text-ink">{card.text}</p>
            </div>
          ))}

          {/* Approach checklist */}
          <div className="rounded-2xl border border-line bg-surface p-7 dark:bg-surface/50 dark:backdrop-blur-xl dark:backdrop-saturate-150">
            <p className="font-display text-base font-semibold text-ink">{b.approachTitle}</p>
            <ul className="mt-4 space-y-3">
              {b.approach.map((a, i) => (
                <motion.li
                  key={a}
                  className="flex gap-3 text-sm leading-relaxed text-slate"
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-sprout" />
                  {a}
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right column: product photo + product card */}
        <Reveal delay={0.1} className="flex flex-col gap-5">
          <ParallaxImage
            src="/images/priyanshu-desk.png"
            alt="Priyanshu Chauhan working alongside Beyond Bound products"
            sizes="(max-width: 1024px) 90vw, 560px"
            strength={26}
            wrapperClassName="aspect-[16/11] rounded-2xl border border-line overflow-hidden"
          />

          {/* Glycomics product card */}
          <div className="rounded-2xl border border-line bg-ink p-7 text-paper transition-shadow duration-300 hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-2xl font-semibold">{b.product.name}</p>
                <p className="mt-1 font-mono text-xs text-paper/55">{b.product.type}</p>
              </div>
              <span className="shrink-0 rounded-full bg-sprout/15 px-3 py-1 font-mono text-[11px] text-sprout">
                Live on Amazon.in
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-paper/80">{b.product.desc}</p>

            <div className="mt-6 rounded-xl bg-paper/5 p-4 ring-1 ring-paper/10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-sprout">
                Founder self-observation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/85">{b.product.observation}</p>
              <div className="mt-3">
                <SteadyLine className="h-8" showSpike />
              </div>
            </div>

            <a
              href={b.product.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:bg-paper/10"
            >
              {b.product.cta.label}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-slate">{b.disclaimer}</p>
      </Reveal>
    </Section>
  );
}