"use client";

import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero } from "@/lib/content";
import { SteadyLine } from "@/components/ui/SteadyLine";
import { useEffect, useState } from "react";

const PHOTOS = [
  { src: "/images/priyanshu-portrait.png", alt: "Priyanshu Chauhan, Founder" },
  { src: "/images/priyanshu-window.png", alt: "Priyanshu Chauhan in thought" },
  { src: "/images/priyanshu-desk.png", alt: "Priyanshu with Beyond Bound products" },
  { src: "/images/priyanshu-office.png", alt: "Priyanshu at work" },
  { src: "/images/priyanshu-rooftop.png", alt: "Priyanshu looking ahead" },
];

const TYPEWRITER_WORDS = [
  "India can actually trust.",
  "earns trust through proof.",
  "measured by the founder first.",
  "built on real data, not claims.",
  "is science-led, not marketed.",
];

function TypewriterText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) { setDisplayed(words[0]); return; }
    const current = words[idx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 42);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2600);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words, reduce]);

  return (
    <span className="text-petrol">
      {displayed}
      <span className="animate-blink ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.05em] rounded-sm bg-petrol" />
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPhotoIdx((i) => (i + 1) % PHOTOS.length), 4200);
    return () => clearInterval(t);
  }, [reduce]);

  const rise = (delay: number) =>
    reduce ? {} : {
      initial: { opacity: 0, y: 22 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
    };

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-44">
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-petrol/5 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-shell items-center gap-14 lg:grid-cols-[1.18fr_0.82fr]">
        {/* LEFT: copy */}
        <div>
          <motion.div
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-petrol/30 bg-petrol/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-petrol"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-petrol opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-petrol" />
            </span>
            {hero.eyebrow}
          </motion.div>

          <h1 className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tightest text-ink sm:text-5xl lg:text-[3.4rem]">
            <motion.span {...rise(0.08)} className="block">
              Evidence-led healthcare
            </motion.span>
            <motion.span {...rise(0.15)} className="mt-1 block min-h-[1.2em]">
              <TypewriterText words={TYPEWRITER_WORDS} />
            </motion.span>
          </h1>

          <motion.div {...rise(0.26)} className="mt-7 max-w-xl">
            <SteadyLine className="h-9" />
          </motion.div>

          <motion.p {...rise(0.34)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
            {hero.sub}
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgb(var(--petrol)/0.5)]"
            >
              {hero.primaryCta.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-petrol hover:text-petrol hover:-translate-y-0.5"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.dl
            {...rise(0.52)}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
          >
            {hero.credentials.map((c) => (
              <div key={c.label} className="group bg-paper p-4 transition-colors duration-300 hover:bg-surface">
                <dt className="font-display text-sm font-semibold text-ink">{c.label}</dt>
                {c.sub ? <dd className="mt-0.5 font-mono text-[10px] text-slate">{c.sub}</dd> : null}
              </div>
            ))}
          </motion.dl>
        </div>

        {/* RIGHT: rotating photo stack */}
        <motion.div
          {...(reduce ? {} : {
            initial: { opacity: 0, scale: 0.96 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] },
          })}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5]">
            {/* Stack shadow cards */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-line bg-mist opacity-50" />
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl border border-line bg-surface opacity-70" />

            {/* Active photo with Ken Burns + crossfade */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line shadow-[0_32px_80px_-24px_rgb(var(--petrol)/0.22)]">
              <AnimatePresence mode="sync">
                <motion.div
                  key={photoIdx}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    animate={reduce ? {} : { scale: [1, 1.06] }}
                    transition={{ duration: 8, ease: "linear" }}
                  >
                    <Image
                      src={PHOTOS[photoIdx].src}
                      alt={PHOTOS[photoIdx].alt}
                      fill
                      priority={photoIdx === 0}
                      sizes="(max-width: 1024px) 90vw, 420px"
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/60 to-transparent" />

              {/* Photo dot indicators */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                {PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`View photo ${i + 1}`}
                    onClick={() => setPhotoIdx(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${i === photoIdx ? "w-6 bg-paper" : "w-1.5 bg-paper/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-5 -left-5 z-10 rounded-xl border border-line bg-surface/90 px-4 py-3 shadow-lg backdrop-blur-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Now building</p>
            <p className="mt-0.5 font-display text-sm font-semibold text-ink">Glycomics™ · metabolic wellness</p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-5 top-8 z-10 rounded-xl border border-petrol/30 bg-paper/90 px-4 py-3 shadow-lg backdrop-blur-md dark:bg-surface/80"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-petrol">Self-tested</p>
            <p className="mt-0.5 font-mono text-xs font-semibold text-ink">CGM verified ✓</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div {...rise(0.7)} className="mt-16 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-slate">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px overflow-hidden rounded-full bg-line">
            <motion.div
              className="h-3 w-full bg-petrol"
              animate={reduce ? {} : { y: ["-100%", "300%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}