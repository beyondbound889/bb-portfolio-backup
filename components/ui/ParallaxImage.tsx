"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /**
   * Total vertical drift in pixels across the image's scroll-through (from
   * just-entering to just-leaving the viewport). Higher = more noticeable
   * depth. Kept subtle everywhere it's used today — "quiet premium," not a
   * parallax showcase. The handoff doc's hero Ken-Burns idea can reuse this
   * same primitive later with a larger `strength`.
   */
  strength?: number;
  /** Classes for the outer clipping wrapper — aspect ratio, radius, border, position. */
  wrapperClassName?: string;
  /** Classes for the <Image> itself — object-position, opacity, etc. */
  className?: string;
};

/**
 * A next/image wrapped in a slightly-oversized, scroll-linked translateY.
 * The wrapper clips overflow so the image never reveals its edges as it
 * drifts, and a static 1.18x scale gives the translate enough headroom.
 * Respects prefers-reduced-motion (locks to a static, centered image).
 *
 * Deliberately takes a narrow, explicit prop list rather than extending
 * next/image's own ImageProps — that type is a discriminated union (fill vs.
 * width/height) and Omit<> doesn't distribute over unions cleanly, which is
 * a common source of subtle TS breakage. This stays simple and type-safe.
 */
export function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  priority,
  strength = 40,
  wrapperClassName,
  className,
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", wrapperClassName)}>
      <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : y, scale: 1.18 }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", className)}
        />
      </motion.div>
    </div>
  );
}