'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FutureVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="future-vision-section"
      aria-label="Future Vision"
    >
      {/* Background layer */}
      <div className="fv-bg-wrapper" aria-hidden="true">
        <motion.div
          className="fv-bg-image"
          style={{ y }}
        />
        {/* Dark overlay — lighter in light mode, very light in dark */}
        <div className="fv-overlay" />
      </div>

      {/* Content */}
      <motion.div
        className="fv-content"
        style={{ opacity }}
      >
        <div className="fv-inner">
          <p className="fv-eyebrow">The Vision</p>

          <h2 className="fv-headline">
            What does<br />healthcare look like<br />in 2035?
          </h2>

          <ul className="fv-pillars" aria-label="Vision pillars">
            <li className="fv-pillar">
              <span className="fv-pillar-label">Proactive, not reactive.</span>
              <span className="fv-pillar-text">
                We stop waiting for a diagnosis before we start paying attention.
              </span>
            </li>
            <li className="fv-pillar">
              <span className="fv-pillar-label">Measured, not marketed.</span>
              <span className="fv-pillar-text">
                Wellness products will be expected to show their evidence.
                &ldquo;Natural&rdquo; will have to mean &ldquo;proven.&rdquo;
              </span>
            </li>
            <li className="fv-pillar">
              <span className="fv-pillar-label">Indian on its own terms.</span>
              <span className="fv-pillar-text">
                Traditional knowledge held to modern instruments — affordable and ordinary.
              </span>
            </li>
          </ul>

          <blockquote className="fv-quote">
            &ldquo;That&rsquo;s the India I&rsquo;m building Beyond Bound for.&rdquo;
            <footer className="fv-quote-footer">
              — Priyanshu Chauhan, Founder &amp; Director, Beyond Bound®
            </footer>
          </blockquote>

          <p className="fv-direction">The direction is fixed.</p>
        </div>
      </motion.div>

      <style jsx>{`
        /* ── Section shell ── */
        .future-vision-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
        }

        /* ── Background image ── */
        .fv-bg-wrapper {
          position: absolute;
          inset: -10% 0;
          z-index: 0;
        }
        .fv-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('/images/priyanshu-rooftop.png');
          background-size: cover;
          background-position: center 40%;
          /* Boost contrast so the image always reads */
          filter: contrast(1.15) brightness(0.55) saturate(1.1);
        }

        /* ── Overlay: semi-opaque gradient in both modes ── */
        .fv-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.72) 0%,
            rgba(0, 20, 15, 0.60) 55%,
            rgba(0, 0, 0, 0.75) 100%
          );
        }

        /* Dark-mode: slightly more transparent so image shows through */
        :global(.dark) .fv-overlay {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 20, 15, 0.45) 55%,
            rgba(0, 0, 0, 0.60) 100%
          );
        }

        /* ── Content ── */
        .fv-content {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 7rem 1.5rem;
        }
        .fv-inner {
          max-width: 780px;
          margin: 0 auto;
        }

        /* Eyebrow */
        .fv-eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 1.5rem;
        }

        /* Headline */
        .fv-headline {
          font-size: clamp(2.2rem, 5.5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
        }

        /* Pillars */
        .fv-pillars {
          list-style: none;
          padding: 0;
          margin: 0 0 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          border-left: 2px solid rgba(134, 239, 172, 0.45);
          padding-left: 1.5rem;
        }
        .fv-pillar {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .fv-pillar-label {
          font-size: 1.05rem;
          font-weight: 600;
          color: #86efac; /* soft green accent */
          letter-spacing: -0.01em;
        }
        .fv-pillar-text {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.80);
          line-height: 1.65;
        }

        /* Quote */
        .fv-quote {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-style: italic;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.92);
          border: none;
          padding: 0;
          margin: 0 0 1.8rem;
          line-height: 1.55;
        }
        .fv-quote-footer {
          display: block;
          margin-top: 0.75rem;
          font-size: 0.8rem;
          font-style: normal;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.04em;
        }

        /* Direction cue */
        .fv-direction {
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </section>
  );
}