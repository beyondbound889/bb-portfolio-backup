'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/**
 * EnhancedJourneySection — Cinematic alternating editorial layout.
 * Each chapter is a full-bleed text moment, no numbered-step blocks.
 * Design: staggered left/right alternating layout with large typographic
 * year labels, thin accent lines, and smooth scroll reveals.
 */

interface Chapter {
  year: string;
  tag: string;
  headline: string;
  body: string;
  meta: string;
  accent: string;
}

const CHAPTERS: Chapter[] = [
  {
    year: "'16",
    tag: 'Roots',
    headline: 'B.Sc Agriculture — Learning from the soil.',
    body: 'Trained at Mahatma Jyotiba Phule Rohilkhand University, where the first principle was simple: living systems reward patience and punish shortcuts. Agriculture taught me that health starts at the molecular level — in the food we grow and the nutrition we consume.',
    meta: 'MJP Rohilkhand University',
    accent: 'The foundation',
  },
  {
    year: "'18",
    tag: 'Corporate',
    headline: 'Industry & market research at scale.',
    body: 'Hands-on exposure at Patanjali Ayurved and Allied Market Research showed me how India actually buys wellness — and how often it is sold a promise no one ever measured. Distribution channels, pharma pipeline data, consumer behavior: strategy is meaningless without execution.',
    meta: 'Patanjali Ayurved · Allied Market Research',
    accent: 'Commercial scale',
  },
  {
    year: "'20",
    tag: 'MBA',
    headline: 'K J Somaiya — turning instinct into discipline.',
    body: 'An MBA from K J Somaiya Institute of Management, Mumbai. The more I studied healthcare systems, the more I noticed the gap: the industry was designed to manage sickness, not to build health. We were waiting for people to become patients before giving them guidance.',
    meta: 'K J Somaiya Institute of Management, Mumbai',
    accent: 'Systems thinking',
  },
  {
    year: "'22",
    tag: 'The Gap',
    headline: 'The problem wasn\'t products. It was clarity.',
    body: 'Reviewing market data and speaking to consumers showed me that wellness brands were trying to solve everything. Few focused deeply on metabolism. People were overwhelmed by conflicting advice, with no trusted destination for metabolic health.',
    meta: 'Market research · Consumer interviews',
    accent: 'The insight',
  },
  {
    year: "'23",
    tag: 'Founding',
    headline: 'Beyond Bound® — registered and built on evidence.',
    body: 'Started Beyond Bound on one belief: people deserve health solutions they can verify. A registered brand focused entirely on metabolic health for everyday Indian life. Before asking anyone to trust it, I spent months wearing a continuous glucose monitor — my own glucose curve, openly tracked.',
    meta: 'Beyond Bound® — Registered Brand · India',
    accent: 'The build',
  },
  {
    year: "'24",
    tag: 'Product',
    headline: 'Glycomics™ — from formulation to self-observation.',
    body: 'Developed Glycomics, a natural glucose-metabolism support formulation. Rather than building another generic wellness brand, I focused entirely on metabolic health. The formulation was tested on the founder first using a CGM — now running Self-Observation Season 2.',
    meta: 'Live on Amazon.in · Self-Observation Season 2',
    accent: 'From thesis to shelf',
  },
  {
    year: "'25",
    tag: 'Stage',
    headline: 'BIRAC · CHEMTECH — into a serious research room.',
    body: 'Presented at the Biotechnology Industry Research Assistance Council stall at CHEMTECH — putting an early-stage Indian wellness product into an industry-and-research room. Connected with the All India Institute of Ayurveda.',
    meta: 'BIRAC · CHEMTECH · AIIA',
    accent: 'Public proof',
  },
  {
    year: "Now",
    tag: 'Vision',
    headline: 'Deepening evidence. Widening the vision.',
    body: 'The goal isn\'t to build another supplement company. I want Beyond Bound to become a health brand where trust comes before marketing, evidence comes before claims, and people can turn to it for absolute clarity about their metabolic health. The direction is fixed.',
    meta: 'Beyond Bound® — the next decade',
    accent: 'What\'s next',
  },
];

function Chapter({ chapter, index }: { chapter: Chapter; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8%' });
  const isRight = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className="journey-chapter"
      data-align={isRight ? 'right' : 'left'}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Year — large display */}
      <motion.div
        className="chapter-year"
        aria-hidden="true"
        initial={{ opacity: 0, x: isRight ? 20 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        {chapter.year}
      </motion.div>

      {/* Content */}
      <div className="chapter-body-wrap">
        <motion.div
          className="chapter-tags-row"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <span className="chapter-tag">{chapter.tag}</span>
          <span className="chapter-accent-pill">{chapter.accent}</span>
        </motion.div>

        <motion.h3
          className="chapter-headline"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          {chapter.headline}
        </motion.h3>

        <motion.p
          className="chapter-body-text"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.26 }}
        >
          {chapter.body}
        </motion.p>

        <motion.span
          className="chapter-meta-label"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.36 }}
        >
          {chapter.meta}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function EnhancedJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="journey" ref={sectionRef} className="journey-wrap" aria-label="Founder journey">
      {/* Header */}
      <div className="journey-intro">
        <div className="journey-intro-inner">
          <p className="journey-intro-eye">The Story</p>
          <h2 className="journey-intro-title">The Journey</h2>
          <p className="journey-intro-sub">
            Every step was necessary. Each one compounds into what Beyond Bound® is today.
          </p>
        </div>
      </div>

      {/* The thin centre spine */}
      <div className="journey-spine" aria-hidden="true" />

      {/* Chapters */}
      <div className="journey-chapters-grid">
        {CHAPTERS.map((ch, i) => (
          <Chapter key={ch.year} chapter={ch} index={i} />
        ))}
      </div>

      <style jsx>{`
        /* ─── Section ─── */
        .journey-wrap {
          background: var(--background);
          padding-bottom: 8rem;
          position: relative;
        }

        /* ─── Intro ─── */
        .journey-intro {
          padding: 7rem 1.5rem 4rem;
          border-bottom: 1px solid var(--border, rgba(0,0,0,0.06));
        }
        .journey-intro-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .journey-intro-eye {
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin: 0 0 1rem;
        }
        .journey-intro-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          color: var(--foreground);
          margin: 0 0 1rem;
          line-height: 1.05;
        }
        .journey-intro-sub {
          font-size: 1rem;
          color: var(--muted-foreground);
          margin: 0;
          max-width: 480px;
          line-height: 1.6;
        }

        /* ─── Spine line down centre ─── */
        .journey-spine {
          position: absolute;
          left: 50%;
          transform: translateX(-0.5px);
          top: 220px;
          bottom: 8rem;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--border, rgba(0,0,0,0.1)) 5%,
            var(--border, rgba(0,0,0,0.1)) 95%,
            transparent
          );
        }
        @media (max-width: 860px) {
          .journey-spine { display: none; }
        }

        /* ─── Chapter grid ─── */
        .journey-chapters-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ─── Individual chapter ─── */
        .journey-chapter {
          position: relative;
          display: grid;
          /* Single column on mobile, two columns on desktop */
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 3.5rem 0;
          border-bottom: 1px solid var(--border, rgba(0,0,0,0.05));
        }
        .journey-chapter:last-child { border-bottom: none; }

        @media (min-width: 860px) {
          /* Alternating left/right layout */
          .journey-chapter {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
            padding: 4.5rem 0;
          }

          /* Left-aligned: year left, content right */
          .journey-chapter[data-align='left'] .chapter-year {
            text-align: right;
            grid-column: 1;
            grid-row: 1;
          }
          .journey-chapter[data-align='left'] .chapter-body-wrap {
            grid-column: 2;
            grid-row: 1;
          }

          /* Right-aligned: content left, year right */
          .journey-chapter[data-align='right'] .chapter-year {
            text-align: left;
            grid-column: 2;
            grid-row: 1;
          }
          .journey-chapter[data-align='right'] .chapter-body-wrap {
            grid-column: 1;
            grid-row: 1;
            text-align: right;
          }
          .journey-chapter[data-align='right'] .chapter-tags-row {
            justify-content: flex-end;
          }
          .journey-chapter[data-align='right'] .chapter-meta-label {
            text-align: right;
          }
        }

        /* ─── Year display number ─── */
        .chapter-year {
          font-size: clamp(4rem, 9vw, 7rem);
          font-weight: 800;
          letter-spacing: -0.06em;
          line-height: 1;
          color: var(--border, rgba(0,0,0,0.07));
          user-select: none;
          transition: color 0.4s;
          padding-top: 0.05em;
          font-variant-numeric: tabular-nums;
        }
        .journey-chapter:hover .chapter-year {
          color: var(--muted-foreground, rgba(0,0,0,0.15));
        }
        :global(.dark) .chapter-year { color: rgba(255,255,255,0.06); }
        :global(.dark) .journey-chapter:hover .chapter-year { color: rgba(255,255,255,0.14); }

        /* ─── Tags row ─── */
        .chapter-tags-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.9rem;
          flex-wrap: wrap;
        }
        .chapter-tag {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted-foreground);
        }
        .chapter-accent-pill {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--foreground);
          background: var(--card, rgba(0,0,0,0.04));
          border: 1px solid var(--border);
          padding: 0.18rem 0.55rem;
          border-radius: 5px;
        }
        :global(.dark) .chapter-accent-pill {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.08);
        }

        /* ─── Headline ─── */
        .chapter-headline {
          font-size: clamp(1.25rem, 2.4vw, 1.65rem);
          font-weight: 700;
          letter-spacing: -0.022em;
          line-height: 1.25;
          color: var(--foreground);
          margin: 0 0 1rem;
        }

        /* ─── Body text ─── */
        .chapter-body-text {
          font-size: 0.97rem;
          line-height: 1.78;
          color: var(--muted-foreground);
          margin: 0 0 1rem;
          max-width: 520px;
        }
        .journey-chapter[data-align='right'] .chapter-body-text {
          margin-left: auto;
        }

        /* ─── Meta label ─── */
        .chapter-meta-label {
          display: inline-block;
          font-size: 0.71rem;
          letter-spacing: 0.08em;
          color: var(--muted-foreground);
          border-left: 2px solid var(--border);
          padding-left: 0.65rem;
        }
        .journey-chapter[data-align='right'] .chapter-meta-label {
          border-left: none;
          border-right: 2px solid var(--border);
          padding-left: 0;
          padding-right: 0.65rem;
        }

        @media (max-width: 859px) {
          .chapter-meta-label { border-right: none !important; padding-right: 0 !important; }
          .journey-chapter[data-align='right'] .chapter-body-wrap { text-align: left; }
          .journey-chapter[data-align='right'] .chapter-tags-row { justify-content: flex-start; }
          .journey-chapter[data-align='right'] .chapter-body-text { margin-left: 0; }
        }
      `}</style>
    </section>
  );
}