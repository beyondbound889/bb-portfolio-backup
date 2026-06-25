'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * InstagramVideoSection — UPGRADED
 * Larger video, centered editorial layout, cinematic feel.
 * Video takes the hero position; text acts as caption context.
 */
export default function InstagramVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!isInView) return;
    if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
      // @ts-ignore
      if (window.instgrm) window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.instgrm) window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="igv-section"
      aria-label="Founder in the field"
    >
      {/* Top editorial header */}
      <motion.div
        className="igv-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="igv-eyebrow">In the field</span>
        <div className="igv-header-content">
          <h2 className="igv-headline">
            The build happens in public.
          </h2>
          <p className="igv-body">
            Priyanshu doesn&rsquo;t just theorise about metabolic wellness —
            he tests it on himself first, tracks every variable, and documents
            what the data actually shows. No polished claims. Just the work.
          </p>
        </div>
        <a
          href="https://www.instagram.com/reel/DUNpGpFjFYv/"
          target="_blank"
          rel="noopener noreferrer"
          className="igv-cta"
          aria-label="Watch full reel on Instagram"
        >
          <svg className="igv-cta-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Watch on Instagram
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M7.5 1.5L13 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>

      {/* Full-width embed */}
      <motion.div
        className="igv-embed-outer"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="igv-embed-inner">
          <blockquote
            className="instagram-media igv-blockquote"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DUNpGpFjFYv/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: 'transparent',
              border: 0,
              borderRadius: 0,
              boxShadow: 'none',
              display: 'block',
              margin: '0 auto',
              padding: 0,
              width: '100%',
              maxWidth: '540px',
              minWidth: '326px',
            }}
          >
            {/* Placeholder while IG script loads */}
            <div className="igv-placeholder">
              <div className="igv-ph-ring" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <p className="igv-ph-text">Loading reel…</p>
            </div>
          </blockquote>
        </div>

        {/* Side annotation */}
        <div className="igv-side-note">
          <div className="igv-note-card">
            <p className="igv-note-label">CGM Season</p>
            <p className="igv-note-value">02</p>
            <p className="igv-note-desc">Active self-observation with continuous glucose monitor</p>
          </div>
          <div className="igv-note-card">
            <p className="igv-note-label">Method</p>
            <p className="igv-note-value">Founder-first</p>
            <p className="igv-note-desc">Same meals. Only variable: the formulation.</p>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        /* ── Section ── */
        .igv-section {
          padding: 7rem 1.5rem;
          background: var(--background);
          border-top: 1px solid var(--border, rgba(0,0,0,0.07));
          border-bottom: 1px solid var(--border, rgba(0,0,0,0.07));
        }

        /* ── Header row ── */
        .igv-header {
          max-width: 1100px;
          margin: 0 auto 4rem;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 2rem 3.5rem;
          align-items: start;
        }
        @media (max-width: 860px) {
          .igv-header { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        .igv-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          padding-top: 0.4rem;
          white-space: nowrap;
        }
        .igv-header-content { flex: 1; }
        .igv-headline {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: var(--foreground);
          margin: 0 0 0.8rem;
        }
        .igv-body {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted-foreground);
          margin: 0;
          max-width: 520px;
        }

        /* CTA */
        .igv-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--foreground);
          text-decoration: none;
          white-space: nowrap;
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 0.6rem 1.1rem;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          align-self: center;
        }
        .igv-cta:hover {
          border-color: var(--foreground);
          background: var(--foreground);
          color: var(--background);
        }
        .igv-cta-icon { width: 14px; height: 14px; }

        /* ── Embed area ── */
        .igv-embed-outer {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 860px) {
          .igv-embed-outer { grid-template-columns: 1fr; }
          .igv-side-note { display: none; }
        }

        .igv-embed-inner {
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px var(--border),
            0 8px 16px -4px rgba(0,0,0,0.08),
            0 32px 80px -20px rgba(0,0,0,0.16);
          background: var(--card);
          /* Tall enough for a 9:16 reel */
          min-height: 640px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Instagram blockquote resets */
        .igv-blockquote {
          display: block !important;
          min-height: 640px;
        }

        /* Placeholder */
        .igv-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 640px;
          gap: 1.2rem;
          color: var(--muted-foreground);
          background: var(--card);
          width: 100%;
        }
        .igv-ph-ring { opacity: 0.35; }
        .igv-ph-text { font-size: 0.85rem; opacity: 0.5; }

        /* ── Side annotation cards ── */
        .igv-side-note {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 190px;
          padding-top: 1rem;
        }
        .igv-note-card {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.2rem;
          background: var(--card);
        }
        :global(.dark) .igv-note-card {
          background: var(--surface);
        }
        .igv-note-label {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin: 0 0 0.3rem;
        }
        .igv-note-value {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--foreground);
          margin: 0 0 0.4rem;
        }
        .igv-note-desc {
          font-size: 0.78rem;
          line-height: 1.5;
          color: var(--muted-foreground);
          margin: 0;
        }
      `}</style>
    </section>
  );
}