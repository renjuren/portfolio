"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PillButton from "@/components/ui/PillButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        style={{ opacity: textOpacity, y: textY }}
      >
        {/* Name */}
        <motion.h1
          className="text-[clamp(3rem,10vw,6rem)] font-bold tracking-[-0.04em] leading-[1.05] text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          RENJU JOSEPH
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg md:text-xl text-text-muted font-medium tracking-[0.15em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Senior Product Designer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-[1.3] tracking-tight text-text-secondary max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Enterprise SaaS, designed for complexity.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Building data-dense workflows, design systems, and the tooling that
          connects them.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <PillButton href="#projects" variant="primary">
            View Selected Work
          </PillButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs text-text-muted tracking-[0.15em] uppercase">
          Scroll to explore
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-text-muted"
          style={{ animation: "bounce-arrow 2s ease-in-out infinite" }}
        >
          <path
            d="M10 4V16M10 16L5 11M10 16L15 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
