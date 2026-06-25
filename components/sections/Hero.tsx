"use client";

/**
 * HERO — Phase 6 cinematic rebuild
 * ────────────────────────────────────────────────────────────────────────
 * A full-viewport video hero that establishes "Founder · Builder · Operator"
 * in the first frame, then dissolves *into* the next section on scroll rather
 * than ending in a hard cut (the Sahil-Bloom / Seed "one continuous story"
 * feel asked for in Phases 4 & 5).
 *
 * How the seamless hand-off works (no plugins, pure Framer Motion):
 *   • The <section> is the scroll target. As it scrolls away, scrollYProgress
 *     drives four linked motion values:
 *       – the video gently scales up + drifts (parallax depth),
 *       – the copy lifts and fades,
 *       – a bottom gradient melts the video into the page's --paper colour,
 *     so the section below "emerges" instead of being revealed by a seam.
 *   • A separate, slow idle Ken-Burns zoom lives on an INNER element so it
 *     never fights the scroll-driven transform on the outer element.
 *
 * Accessibility / performance:
 *   • prefers-reduced-motion → we render the poster image (no autoplay, no
 *     parallax), which is also the kinder choice on battery + metered data.
 *   • The video is decorative (aria-hidden) with an always-present poster, so
 *     there is never a blank frame and no layout shift.
 *
 * Copy lives mostly in lib/content.ts (`hero`, `site`). The three presentation
 * constants below (positioning label, sub-headline, CTAs) are kept here and
 * documented so they're trivial to edit — see HANDOFF.md "Hero copy".
 */

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero, site } from "@/lib/content";

/* ── Editable hero copy ───────────────────────────────────────────────────
 * Founder framing the brief asked for. Kept truthful to Beyond Bound's real
 * positioning (healthcare, not "AI businesses"); swap freely if you prefer
 * different wording — see HANDOFF.md. */
const POSITIONING = ["Founder", "Builder", "Operator"] as const;
const SUBHEAD =
  "Founder & Director of Beyond Bound® — building evidence-led healthcare India can actually trust. Measured, not marketed.";
const PRIMARY_CTA = { label: "Explore the journey", href: "#journey" };
const SECONDARY_CTA = { label: "Work together", href: "#contact" };

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Some mobile browsers ignore the autoplay attribute until .play() is
   * called from JS; this nudges it and swallows the harmless rejection. */
  useEffect(() => {
    if (reduce) return;
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, [reduce]);

  /* Scroll-linked hand-off (see header comment). Hooks run unconditionally;
   * the values are simply not bound to style when motion is reduced. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      {/* ── Media layer ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale: videoScale, y: videoY }}
      >
        {reduce ? (
          // Reduced motion / data-saver: static poster only.
          <Image
            src="/video/hero-poster.jpg"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_top]"
          />
        ) : (
          // Idle Ken-Burns on the inner element so it doesn't fight the
          // scroll-driven transform above.
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.08] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover object-[center_top]"
              poster="/video/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            >
              <source src="/video/hero.webm" type="video/webm" />
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </motion.div>

      {/* ── Cinematic grades ────────────────────────────────────────── */}
      {/* Left-to-right + bottom darkening so copy always reads on any frame */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,20,19,0.78) 0%, rgba(8,20,19,0.45) 38%, rgba(8,20,19,0.12) 70%, rgba(8,20,19,0.05) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,20,19,0.45) 0%, transparent 30%, transparent 55%, rgba(8,20,19,0.85) 100%)",
        }}
      />
      {/* Seamless melt into the page background (kills the hard section cut) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28vh]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgb(var(--paper)))",
        }}
      />

      {/* ── Copy ────────────────────────────────────────────────────── */}
      <motion.div
        style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
        className="absolute inset-x-0 bottom-0 z-10 px-6 pb-[clamp(56px,9vh,120px)] sm:px-10"
      >
        <div className="mx-auto w-full max-w-shell">
          {/* Positioning label */}
          <motion.div
            {...rise(0.05)}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70"
          >
            <span className="h-px w-8 bg-sprout" />
            <span className="flex items-center gap-2">
              {POSITIONING.map((word, i) => (
                <span key={word} className="flex items-center gap-2">
                  {i > 0 && <span className="text-sprout/80">·</span>}
                  {word}
                </span>
              ))}
            </span>
          </motion.div>

          {/* Name — the centrepiece */}
          <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(2.9rem,8vw,7rem)] font-semibold leading-[0.96] tracking-tightest text-paper">
            <motion.span {...rise(0.12)} className="block">
              {site.name.split(" ")[0]}
            </motion.span>
            <motion.span {...rise(0.2)} className="block text-paper/90">
              {site.name.split(" ").slice(1).join(" ")}
            </motion.span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            {...rise(0.32)}
            className="mt-6 max-w-[34rem] text-base leading-relaxed text-paper/75 sm:text-lg"
          >
            {SUBHEAD}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...rise(0.42)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={PRIMARY_CTA.href}
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-12px_rgba(0,0,0,0.55)]"
            >
              {PRIMARY_CTA.label}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={SECONDARY_CTA.href}
              className="group inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/5 px-7 py-3.5 text-sm font-medium text-paper backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-paper/60 hover:bg-paper/10"
            >
              {SECONDARY_CTA.label}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Credibility chips — proof inside the first 5 seconds */}
          <motion.ul
            {...rise(0.54)}
            className="mt-9 hidden flex-wrap gap-2.5 sm:flex"
          >
            {hero.credentials.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-2 rounded-full border border-paper/15 bg-paper/8 px-4 py-2 text-[13px] text-paper/85 backdrop-blur-md transition-colors hover:border-paper/30 hover:bg-paper/15"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sprout" />
                <span className="font-medium">{c.label}</span>
                {c.sub ? (
                  <span className="font-mono text-[10px] text-paper/55">
                    {c.sub}
                  </span>
                ) : null}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* ── Scroll indicator ────────────────────────────────────────── */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-7 right-6 z-10 hidden flex-col items-center gap-2 sm:right-10 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
          Scroll
        </span>
        <div className="h-12 w-px overflow-hidden rounded-full bg-paper/20">
          <motion.div
            className="h-4 w-full bg-sprout"
            animate={reduce ? {} : { y: ["-110%", "320%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
