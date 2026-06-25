"use client";

/**
 * GlucoseChart — animated SVG visualization showing the Glycomics™ "steady curve" effect.
 * Draws two glucose-response curves: a typical spike vs. the measured, steadier response
 * the founder observed on Glycomics. Pure SVG + framer-motion, zero runtime dependencies.
 * This is a KEY differentiator vs. the competitor site — they have no data viz at all.
 */

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

// Glucose curve data points — time (x 0-100) vs. glucose level (y 0-100, inverted for SVG)
// Control curve: typical post-meal spike
const CONTROL_POINTS = [
  [0, 65], [8, 62], [16, 52], [24, 28], [32, 18], [40, 22], [48, 35],
  [56, 50], [64, 60], [72, 66], [80, 67], [88, 66], [100, 65],
];
// Glycomics curve: flatter, steadier response
const GLYCOMICS_POINTS = [
  [0, 65], [8, 63], [16, 57], [24, 44], [32, 38], [40, 40], [48, 46],
  [56, 54], [64, 60], [72, 63], [80, 65], [88, 65], [100, 65],
];

function pointsToPath(pts: number[][]): string {
  if (pts.length < 2) return "";
  const start = `M ${pts[0][0] * 5.6} ${pts[0][1] * 2.2}`;
  const curves = pts.slice(1).map((p, i) => {
    const prev = pts[i];
    const cpx = (prev[0] + p[0]) / 2;
    return `C ${cpx * 5.6} ${prev[1] * 2.2}, ${cpx * 5.6} ${p[1] * 2.2}, ${p[0] * 5.6} ${p[1] * 2.2}`;
  });
  return [start, ...curves].join(" ");
}

const CONTROL_PATH = pointsToPath(CONTROL_POINTS);
const GLYCOMICS_PATH = pointsToPath(GLYCOMICS_POINTS);

export function GlucoseChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface p-6 dark:bg-surface/40 dark:backdrop-blur-xl">
      {/* Legend */}
      <div className="mb-4 flex flex-wrap items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 rounded bg-slate/60" />
          <span className="font-mono text-[11px] text-slate">Typical response</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 rounded bg-petrol" />
          <span className="font-mono text-[11px] text-petrol">With Glycomics™</span>
        </div>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-slate/60">
          Founder self-observation · CGM data
        </span>
      </div>

      {/* Y-axis labels */}
      <div className="relative">
        <div className="absolute -left-1 top-0 flex h-full flex-col justify-between text-right">
          {["High", "", "Base"].map((l) => (
            <span key={l} className="font-mono text-[9px] text-slate/40">{l}</span>
          ))}
        </div>

        <svg
          ref={ref}
          viewBox="0 0 560 220"
          className="ml-4 w-full"
          aria-label="Glucose response comparison chart showing steadier curve with Glycomics"
          role="img"
        >
          {/* Grid lines */}
          {[55, 110, 165].map((y) => (
            <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="rgb(var(--line))" strokeWidth="1" />
          ))}

          {/* Meal marker */}
          <line x1="0" y1="0" x2="0" y2="220" stroke="rgb(var(--line))" strokeWidth="1" strokeDasharray="4 3" />
          <text x="4" y="12" className="font-mono" fontSize="8" fill="rgb(var(--slate))" opacity="0.6">
            Meal
          </text>

          {/* Control curve (gray) */}
          <motion.path
            d={CONTROL_PATH}
            fill="none"
            stroke="rgb(var(--slate))"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="2600"
            strokeDashoffset="2600"
            animate={reduce ? { strokeDashoffset: 0 } : inView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
          />

          {/* Glycomics curve (petrol) */}
          <motion.path
            d={GLYCOMICS_PATH}
            fill="none"
            stroke="rgb(var(--petrol))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="2600"
            strokeDashoffset="2600"
            animate={reduce ? { strokeDashoffset: 0 } : inView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Peak label on control — spike label */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
          >
            <line x1="179" y1="40" x2="179" y2="5" stroke="rgb(var(--slate))" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 2" />
            <text x="183" y="10" fontSize="8" fill="rgb(var(--slate))" opacity="0.6" className="font-mono">Peak spike</text>
          </motion.g>

          {/* Flatter label on glycomics */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2.2 }}
          >
            <text x="140" y="88" fontSize="8" fill="rgb(var(--petrol))" className="font-mono font-medium">Steadier</text>
            <text x="140" y="98" fontSize="8" fill="rgb(var(--petrol))" className="font-mono font-medium">response</text>
          </motion.g>

          {/* Time axis */}
          {["0h", "1h", "2h", "3h"].map((t, i) => (
            <text key={t} x={i * 186} y="214" fontSize="8" fill="rgb(var(--slate))" opacity="0.5" className="font-mono">
              {t}
            </text>
          ))}
        </svg>
      </div>

      <p className="mt-3 font-mono text-[10px] text-slate/50">
        Illustrative based on founder's continuous glucose monitor self-observation. Not a medical claim.
      </p>
    </div>
  );
}