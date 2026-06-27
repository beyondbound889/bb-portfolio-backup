"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SteadyLine } from "@/components/ui/SteadyLine";
import { efficacy } from "@/lib/content";

/**
 * FirstHandEfficacy — the founder "creed" beat.
 *
 * The site already says, in several places, that the founder tests on himself
 * first. This section turns that idea into one cinematic, human moment: the creed
 * line beside real self-observation footage. It deliberately does NOT show the
 * glucose data — that is the job of <CGMSection/>, which follows. Story here,
 * evidence there.
 *
 * Motion: house easing [0.16, 1, 0.3, 1] via the shared primitives, fully
 * reduced-motion-safe (no autoplay; poster shown). The muted, looping, inline
 * clips only play while the strip is on screen.
 */
export function FirstHandEfficacy() {
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [inView, setInView] = useState(false);

  // Track whether the footage strip is on screen.
  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Play only while visible; never autoplay under reduced-motion.
  useEffect(() => {
    if (reduce) return;
    for (const v of videoRefs.current) {
      if (!v) continue;
      if (inView) v.play().catch(() => {});
      else v.pause();
    }
  }, [inView, reduce]);

  return (
    <Section id="first-hand" tint>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — the creed */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{efficacy.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
              {efficacy.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="mt-6 rounded-2xl border border-petrol/20 bg-petrol/[0.06] p-6 dark:bg-petrol/10 sm:p-7">
              <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
                &ldquo;{efficacy.creed}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-petrol">
                {efficacy.creedBy}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate">
              {efficacy.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <SteadyLine className="mt-7 h-9 opacity-80" showSpike={false} />
          </Reveal>
        </div>

        {/* RIGHT — founder self-observation footage */}
        <div className="lg:col-span-7">
          <Reveal delay={0.12}>
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl border border-line bg-surface p-2 shadow-sm"
            >
              <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-line/60 bg-ink/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-paper backdrop-blur">
                {efficacy.badge}
              </div>

              <div
                ref={gridRef}
                className="grid grid-cols-3 gap-2 overflow-hidden rounded-[1.25rem] bg-ink/95 p-2"
              >
                {efficacy.clips.map((src, i) => (
                  <video
                    key={src}
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={src}
                    poster={efficacy.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    className="aspect-square w-full rounded-lg object-cover sm:rounded-xl"
                  />
                ))}
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-slate">
              {efficacy.caption}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
