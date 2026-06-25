"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientBackground — fixed, full-page layer behind all content: two
 * slow-drifting brand-coloured orbs + a faint mouse-reactive spotlight.
 * Pure transform/opacity (GPU-only), z-index -1, disabled entirely under
 * prefers-reduced-motion. Intentionally subtle — this is a "measured, not
 * marketed" brand, so the effect should read as quiet depth, not a light show.
 */
export function AmbientBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let targetX = 50;
    let targetY = 40;
    let x = 50;
    let y = 40;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const tick = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;
      wrapRef.current?.style.setProperty("--mx", `${x}%`);
      wrapRef.current?.style.setProperty("--my", `${y}%`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" className="ambient-bg">
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-spotlight" />
    </div>
  );
}
