"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-24 md:pt-32"
    >
      {/* Hero Text */}
      <motion.div
        className="container-max text-center mb-20 md:mb-28"
        style={{ opacity: textOpacity }}
      >
        <h1 className="text-display mb-10 md:mb-12">
          <AnimatedText text="Design — Impact" />
        </h1>
        <ScrollReveal delay={0.4}>
          <p className="text-body-lg max-w-2xl mx-auto uppercase tracking-widest text-text-secondary">
            Senior Product Designer building enterprise SaaS for data-dense,
            complex workflows.
          </p>
        </ScrollReveal>
      </motion.div>

      {/* Hero Image with Parallax */}
      <ScrollReveal delay={0.6} className="container-max">
        <div className="relative w-full aspect-video overflow-hidden rounded-sm">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY, scale: imageScale }}
          >
            <Image
              src="/images/project-design-system-v5.png"
              alt="Enterprise Design System scaling — featured key project by Renju Joseph"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) calc(100vw - 6rem), (max-width: 1440px) calc(100vw - 8rem), 1312px"
            />
          </motion.div>

          {/* View Project Overlay Button */}
          <Link
            href="/projects/idp-design-system-2026"
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <motion.span
              className="bg-white/90 backdrop-blur-sm text-text-primary px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="hero-view-project"
            >
              <span>View Project</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </Link>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-light/30 to-transparent" />
        </div>
      </ScrollReveal>
    </section>
  );
}
