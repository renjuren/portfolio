"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { statistics } from "@/lib/data";

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  // Initial state is the full target value for SSR, SEO, ATS parsers, and scrapers
  const [count, setCount] = useState<number>(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    if (!inView || hasAnimated) return;

    let startTimestamp: number | null = null;
    const duration = 1600; // ms
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(value * easeOut);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(value);
        setHasAnimated(true);
      }
    };

    // Begin count-up animation
    setCount(0);
    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, value, hasAnimated]);

  return (
    <>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden="true">
        {count}
        {suffix}
      </span>
    </>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-6 md:pt-8 pb-20 md:pb-28 lg:pb-32 relative z-10">
      <div className="container-max" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center md:text-left ${
                index < statistics.length - 1
                  ? "md:border-r md:border-border-default"
                  : ""
              } md:px-6 first:md:pl-0 last:md:pr-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-3"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <p className="text-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
