"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { philosophy } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const PULL_QUOTES = [
  "From agriculture, I learned that living systems reward patience.",
  "If it can't be measured on the founder first, it has no business being sold.",
  "India's wellness market needed transparency — not more products.",
];

export function Philosophy() {
  const reduce = useReducedMotion();

  return (
    <Section id="philosophy">
      <div className="grid gap-14 lg:grid-cols-[0.82fr_1fr]">
        {/* Left: sticky image + pull quotes */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>{philosophy.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
              {philosophy.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-[0_24px_60px_-20px_rgb(var(--petrol)/0.15)]">
              <Image
                src="/images/priyanshu-window.png"
                alt="Priyanshu Chauhan in thought"
                fill
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover"
              />
              {/* Quote overlay on image */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-5 py-6">
                <p className="font-display text-[13px] font-medium italic leading-snug text-paper/90">
                  &ldquo;Health isn&apos;t something you can shortcut. You either earn it, or you fake it.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* Animated pull-quote pills */}
          <div className="mt-6 space-y-2">
            {PULL_QUOTES.map((q, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-surface/60 px-4 py-3 dark:bg-surface/40">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />
                  <p className="text-sm leading-snug text-slate">{q}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: body paragraphs + big quote */}
        <div className="space-y-6">
          {philosophy.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-slate first:text-xl first:text-ink">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="mt-4 overflow-hidden rounded-2xl border border-petrol/20 bg-petrol/5 dark:bg-petrol/10">
              <div className="border-b border-petrol/10 px-6 pt-6 pb-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-petrol">
                  Founding principle
                </p>
                <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                  &ldquo;If a product can't hold up to being measured on the founder first,
                  it has no business being sold to anyone.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 px-6 py-4">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-line">
                  <Image
                    src="/images/priyanshu-portrait.png"
                    alt="Priyanshu Chauhan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Priyanshu Chauhan</p>
                  <p className="font-mono text-[10px] text-slate">Founder & Director, Beyond Bound®</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Three principle cards */}
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Measure", icon: "📊", desc: "Every claim earns its place by surviving a glucose monitor." },
              { label: "Prove", icon: "🔬", desc: "Self-observation first, then product. Trust by transparency." },
              { label: "Build", icon: "🌱", desc: "Slow, systemic change. The body's own rhythm, respected." },
            ].map((c, i) => (
              <Reveal key={c.label} delay={0.35 + i * 0.08}>
                <div className="group rounded-xl border border-line bg-paper p-4 transition-all duration-300 hover:border-petrol/40 hover:bg-surface hover:shadow-[0_12px_32px_-12px_rgb(var(--petrol)/0.18)] dark:bg-surface/30 dark:hover:bg-surface/60">
                  <span className="text-xl">{c.icon}</span>
                  <p className="mt-2 font-display text-sm font-semibold text-ink">{c.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}