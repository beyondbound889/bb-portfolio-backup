'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * PhilosophyQuoteSection
 *
 * A full-width editorial section that animates the founder's core philosophy
 * quote word by word — creating a typographic moment that resonates.
 *
 * Place between the Credentials Belt and the "Why I Started Building" section.
 */

const QUOTE_TEXT =
  '"Health advice is easy to give. Trust is harder to earn."';

const WORDS = QUOTE_TEXT.split(' ');

const INSIGHTS = [
  {
    num: '01',
    label: 'MBA Foundation',
    text: "The biggest market gaps aren't in products — they're in trust and dedication.",
  },
  {
    num: '02',
    label: 'Corporate Learning',
    text: "The market doesn't care about your strategy. It only responds to your execution.",
  },
  {
    num: '03',
    label: 'Entrepreneurship',
    text: 'A brand that does one thing and proves it will always outlast a brand that does everything.',
  },
];

export default function PhilosophyQuoteSection() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const insightRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-15%' });
  const isInsightInView = useInView(insightRef, { once: true, margin: '-10%' });

  return (
    <>
      {/* ── Animated quote ── */}
      <section
        ref={quoteRef}
        className="pq-section"
        aria-label="Founder philosophy"
      >
        <div className="pq-inner">
          <p className="pq-eyebrow">My Philosophy</p>
          <h2 className="pq-quote" aria-label={QUOTE_TEXT}>
            {WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="pq-word"
                initial={{ opacity: 0.1, y: 12 }}
                animate={isQuoteInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-hidden="true"
              >
                {word}{' '}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="pq-subtext"
            initial={{ opacity: 0 }}
            animate={isQuoteInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: WORDS.length * 0.055 + 0.2 }}
          >
            Sometimes the path changes before the destination does.
          </motion.p>
          <motion.p
            className="pq-sign"
            initial={{ opacity: 0 }}
            animate={isQuoteInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: WORDS.length * 0.055 + 0.4 }}
          >
            Priyanshu Chauhan — Founder &amp; CEO, Beyond Bound®
          </motion.p>
        </div>
      </section>

      {/* ── Lessons learned ── */}
      <section
        ref={insightRef}
        className="lessons-section"
        aria-label="Lessons learned"
      >
        <div className="lessons-inner">
          <p className="lessons-eyebrow">Key Insights</p>
          <h3 className="lessons-title">Lessons Learned</h3>
          <div className="lessons-grid">
            {INSIGHTS.map((item, i) => (
              <motion.div
                key={item.num}
                className="lesson-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="lesson-num" aria-hidden="true">{item.num}</span>
                <span className="lesson-label">{item.label}</span>
                <p className="lesson-text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Quote section ── */
        .pq-section {
          padding: 8rem 1.5rem;
          background: var(--background);
        }
        .pq-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .pq-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted-foreground, #9ca3af);
          margin-bottom: 2.5rem;
        }
        .pq-quote {
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: var(--foreground);
          margin: 0 0 2rem;
        }
        .pq-word {
          display: inline-block;
          /* Each word is a span, animates independently */
        }
        .pq-subtext {
          font-size: 1rem;
          color: var(--muted-foreground, #9ca3af);
          font-style: italic;
          margin: 0 0 0.8rem;
          line-height: 1.6;
        }
        .pq-sign {
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          color: var(--muted-foreground, #9ca3af);
          margin: 0;
        }

        /* ── Lessons section ── */
        .lessons-section {
          padding: 5rem 1.5rem 7rem;
          background: var(--card, #f9fafb);
          border-top: 1px solid var(--border, rgba(0,0,0,0.06));
        }
        :global(.dark) .lessons-section {
          background: rgba(255,255,255,0.02);
        }
        .lessons-inner {
          max-width: 960px;
          margin: 0 auto;
        }
        .lessons-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted-foreground, #9ca3af);
          margin-bottom: 0.6rem;
        }
        .lessons-title {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--foreground);
          margin: 0 0 3rem;
        }
        .lessons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .lesson-card {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 2rem 1.8rem;
          background: var(--background);
          border: 1px solid var(--border, rgba(0,0,0,0.07));
          border-radius: 16px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .lesson-card:hover {
          border-color: rgba(14, 92, 87, 0.25);
          box-shadow: 0 12px 40px -16px rgba(14, 92, 87, 0.18);
          transform: translateY(-2px);
        }
        :global(.dark) .lesson-card {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.07);
        }
        :global(.dark) .lesson-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(90, 196, 184, 0.2);
        }
        .lesson-num {
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          color: var(--muted-foreground, #9ca3af);
          font-variant-numeric: tabular-nums;
        }
        .lesson-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--foreground);
        }
        .lesson-text {
          font-size: 0.88rem;
          line-height: 1.7;
          color: var(--muted-foreground, #6b7280);
          margin: 0;
          font-style: italic;
        }
      `}</style>
    </>
  );
}