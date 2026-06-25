"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PremiumCursor — replaces the system cursor on fine-pointer devices with a
 * lagged outer ring + instant inner dot, à la Linear/Raycast. Expands on
 * hover over interactive elements. Disabled under prefers-reduced-motion
 * and on touch devices. Form fields keep the native caret — see the
 * `cursor: auto` override in globals.css for inputs/textareas/selects, so
 * typing and text-selection are never compromised.
 */
export function PremiumCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-active");

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.18);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.18);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    const selector = 'a, button, [role="button"], summary, [data-cursor-hover]';
    const onEnter = () => ringRef.current?.classList.add("is-hovering");
    const onLeave = () => ringRef.current?.classList.remove("is-hovering");
    const onDown = () => ringRef.current?.classList.add("is-clicking");
    const onUp = () => ringRef.current?.classList.remove("is-clicking");

    const attach = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Re-attach when new interactive elements mount (route content, modals, etc.)
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      mo.disconnect();
      document.documentElement.classList.remove("cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
