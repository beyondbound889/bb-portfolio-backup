"use client";

import { Mail, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react";
import { site, nav } from "@/lib/content";
import { SteadyLine } from "@/components/ui/SteadyLine";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-petrol/40 to-transparent" />

      {/* Main footer grid */}
      <div className="mx-auto w-full max-w-shell px-6 pt-14 pb-10">
        <div className="grid gap-12 sm:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-petrol">
                <path d="M12 22c0 0-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-[15px] font-semibold text-ink">{site.name}</span>
            </div>
            <p className="mt-1 font-mono text-xs text-slate">{site.role}</p>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-slate">
              Building preventive healthcare India can trust — measured, not marketed.
            </p>

            {/* Mini SteadyLine */}
            <div className="mt-5 max-w-[140px]">
              <SteadyLine className="h-6 opacity-60" />
            </div>

            {/* Contact links */}
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate transition-colors hover:text-petrol"
              >
                <Mail size={13} className="text-petrol" />
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate transition-colors hover:text-petrol"
              >
                <Linkedin size={13} className="text-petrol" />
                LinkedIn
                <ExternalLink size={10} className="opacity-50" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Navigate</p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate transition-colors hover:text-ink"
                  >
                    <span className="h-px w-3 bg-petrol/30 transition-all duration-300 group-hover:w-5 group-hover:bg-petrol" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Beyond Bound */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Beyond Bound®</p>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "Brand website", href: site.company },
                { label: "Glycomics™ on Amazon", href: site.product },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate transition-colors hover:text-ink"
                  >
                    {l.label}
                    <ArrowUpRight size={11} className="opacity-40" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-line bg-surface p-4 dark:bg-surface/40">
              <p className="font-mono text-[10px] uppercase tracking-widest text-petrol">Supplement note</p>
              <p className="mt-2 text-xs leading-relaxed text-slate">
                These statements have not been evaluated by any regulatory authority. Glycomics™ is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>

          {/* Quick CTA */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate">Connect</p>
            <p className="mt-5 text-sm leading-relaxed text-slate">
              Thinking about metabolic wellness, preventive health, or honest brand-building in India?
            </p>
            <a
              href="#contact"
              className="btn-shine mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgb(var(--petrol)/0.45)]"
            >
              Let&apos;s talk
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line px-6 py-5">
        <div className="mx-auto flex w-full max-w-shell flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-slate">
            © {new Date().getFullYear()} {site.name}. Beyond Bound® is a registered brand.
          </p>
          <p className="font-mono text-[11px] text-slate">
            Press{" "}
            <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink">
              ⌘K
            </kbd>{" "}
            to search
          </p>
        </div>
      </div>
    </footer>
  );
}