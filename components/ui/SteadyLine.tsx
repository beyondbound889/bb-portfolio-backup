"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The signature element. A faint "spiky" reference curve sits behind a calm,
 * steady curve that draws itself in — the literal Glycomics promise:
 * "no sudden drop, no hypoglycemia, a stable post-meal pattern."
 */
export function SteadyLine({
  className,
  showSpike = true,
}: {
  className?: string;
  showSpike?: boolean;
}) {
  const reduce = useReducedMotion();
  const steady =
    "M0,46 C60,44 110,40 160,30 C210,20 250,26 300,30 C360,35 420,34 480,32 C540,30 600,31 660,30 C720,29 780,30 840,30";
  const spike =
    "M0,52 C60,50 100,48 150,18 C190,-4 220,6 260,40 C290,64 330,70 380,52 C430,36 470,44 520,40 C580,36 640,42 700,40 C760,38 800,40 840,40";

  return (
    <svg
      viewBox="0 0 840 80"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("steady-line w-full", className)}
    >
      {showSpike && (
        <path
          d={spike}
          stroke="rgb(var(--slate))"
          strokeOpacity="0.28"
          strokeWidth="1.25"
          strokeDasharray="4 5"
        />
      )}
      <motion.path
        d={steady}
        stroke="rgb(var(--sprout))"
        strokeWidth="2"
        strokeLinecap="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        r="3.5"
        fill="rgb(var(--sprout))"
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.4 }}
        cx="840"
        cy="30"
      />
    </svg>
  );
}
