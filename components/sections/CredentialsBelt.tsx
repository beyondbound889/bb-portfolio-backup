'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * CredentialsBelt — Premium redesign
 * Clean timeline-pill layout replacing old grid with 1px border hack.
 * Stats section is a rich editorial counter layout.
 */

interface CredItem {
  icon: string;
  label: string;
  sub: string;
  year?: string;
}

const CREDENTIALS: CredItem[] = [
  { icon: '🌱', label: 'B.Sc Agriculture', sub: 'MJP Rohilkhand University', year: "'16" },
  { icon: '🏛️', label: 'MBA Healthcare', sub: 'K J Somaiya, Mumbai', year: "'20" },
  { icon: '🔬', label: 'Corporate Execution', sub: 'Patanjali · Allied Research', year: "'18" },
  { icon: '📦', label: 'Glycomics™', sub: 'Live on Amazon.in', year: "'23" },
  { icon: '📈', label: 'CGM Self-Observation', sub: '2 Seasons of Data', year: "'24" },
  { icon: '🏆', label: 'BIRAC · CHEMTECH', sub: 'Industry Showcase', year: "'25" },
  { icon: '🩺', label: 'AIIA Engagement', sub: 'All India Institute of Ayurveda', year: "'24" },
  { icon: '🌿', label: 'Beyond Bound®', sub: 'Registered Brand · India', year: "'23" },
];

const STATS = [
  { value: 1, suffix: '', label: 'Flagship product', sub: 'Glycomics™', color: 'petrol' },
  { value: 2, suffix: '', label: 'CGM observation seasons', sub: 'Self-tracked data', color: 'sprout' },
  { value: 60, suffix: '', label: 'Capsules per pack', sub: 'One full month', color: 'petrol' },
  { value: 1, suffix: '', label: 'Industry showcase', sub: 'BIRAC · CHEMTECH', color: 'sprout' },
];

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function StatCard({
  value, suffix, label, sub, color, delay, inView,
}: {
  value: number; suffix: string; label: string; sub: string;
  color: string; delay: number; inView: boolean;
}) {
  const count = useCountUp(value, inView);
  return (
    <motion.div
      className={`stat-card stat-card--${color}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="stat-num">{count}{suffix}</span>
      <span className="stat-primary">{label}</span>
      <span className="stat-secondary">{sub}</span>
    </motion.div>
  );
}

export default function CredentialsBelt() {
  const beltRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isBeltInView = useInView(beltRef, { once: true, margin: '-8%' });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-8%' });

  return (
    <>
      {/* ── Credentials pills ── */}
      <section
        ref={beltRef}
        className="creds-section"
        aria-label="Credentials and milestones"
      >
        <div className="creds-inner">
          <motion.p
            className="creds-eyebrow"
            initial={{ opacity: 0 }}
            animate={isBeltInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            The record so far
          </motion.p>
          <div className="creds-pills">
            {CREDENTIALS.map((item, i) => (
              <motion.div
                key={item.label}
                className="cred-pill"
                initial={{ opacity: 0, y: 14, scale: 0.95 }}
                animate={isBeltInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="cred-pill-icon" aria-hidden="true">{item.icon}</span>
                <div className="cred-pill-text">
                  <span className="cred-pill-label">{item.label}</span>
                  <span className="cred-pill-sub">{item.sub}</span>
                </div>
                {item.year && (
                  <span className="cred-pill-year" aria-hidden="true">{item.year}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats counter ── */}
      <section
        ref={statsRef}
        className="stats-section"
        aria-label="Key numbers"
      >
        <div className="stats-inner">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <StatCard
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                sub={s.sub}
                color={s.color}
                delay={i * 0.09}
                inView={isStatsInView}
              />
            ))}
          </div>
          <p className="stats-note">All figures are verified and reflect real business activity.</p>
        </div>
      </section>

      <style jsx>{`
        /* ── Credentials section ── */
        .creds-section {
          padding: 4rem 1.5rem 3.5rem;
          background: var(--card, #f9fafb);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        :global(.dark) .creds-section {
          background: rgba(255,255,255,0.025);
        }
        .creds-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .creds-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin-bottom: 2rem;
          text-align: center;
        }
        .creds-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        /* ── Individual pill ── */
        .cred-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1rem 0.55rem 0.75rem;
          border: 1px solid var(--border);
          border-radius: 100px;
          background: var(--background);
          transition: border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .cred-pill:hover {
          border-color: rgba(14, 92, 87, 0.3);
          box-shadow: 0 4px 16px -6px rgba(14, 92, 87, 0.15);
          transform: translateY(-1px);
        }
        :global(.dark) .cred-pill {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
        }
        :global(.dark) .cred-pill:hover {
          border-color: rgba(90, 196, 184, 0.25);
          background: rgba(255,255,255,0.07);
        }
        .cred-pill-icon {
          font-size: 1rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .cred-pill-text {
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
        }
        .cred-pill-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--foreground);
          line-height: 1.2;
          white-space: nowrap;
        }
        .cred-pill-sub {
          font-size: 0.7rem;
          color: var(--muted-foreground);
          white-space: nowrap;
        }
        .cred-pill-year {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--muted-foreground);
          opacity: 0.55;
          margin-left: 0.2rem;
        }

        /* ── Stats section ── */
        .stats-section {
          padding: 4rem 1.5rem 2rem;
          background: var(--background);
        }
        .stats-inner {
          max-width: 1000px;
          margin: 0 auto;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: 1fr 1fr; }
        }

        /* ── Stat card ── */
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.2rem 1.2rem;
          border-right: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          transition: background 0.2s;
        }
        .stat-card:last-child { border-right: none; }
        .stat-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 2px;
          border-radius: 2px;
          opacity: 0;
          transform: scaleX(0);
          transition: opacity 0.3s, transform 0.3s;
        }
        .stat-card--petrol::after { background: linear-gradient(90deg, rgb(var(--petrol)), rgb(var(--sprout))); }
        .stat-card--sprout::after { background: linear-gradient(90deg, rgb(var(--sprout)), rgb(var(--petrol))); }
        .stat-card:hover::after { opacity: 1; transform: scaleX(1); }
        @media (max-width: 700px) {
          .stat-card:nth-child(2) { border-right: none; }
          .stat-card:nth-child(3) { border-right: 1px solid var(--border); }
          .stat-card:nth-child(3),
          .stat-card:nth-child(4) { border-top: 1px solid var(--border); }
        }

        .stat-num {
          font-size: clamp(2.8rem, 5.5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          color: var(--foreground);
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .stat-card--petrol .stat-num { color: rgb(var(--petrol)); }
        .stat-card--sprout .stat-num { color: rgb(var(--sprout)); }

        .stat-primary {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--foreground);
          line-height: 1.3;
        }
        .stat-secondary {
          margin-top: 0.2rem;
          font-size: 0.72rem;
          color: var(--muted-foreground);
          font-variant-numeric: tabular-nums;
        }

        .stats-note {
          text-align: center;
          font-size: 0.68rem;
          letter-spacing: 0.04em;
          color: var(--muted-foreground);
          margin-top: 2rem;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}