"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import PillButton from "@/components/ui/PillButton";

export default function BottomCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/images/cta-bg.png"
          alt="Dramatic modern architectural atrium"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative container-max py-32 md:py-40 lg:py-52 text-center text-text-light">
        <h2 className="text-display-sm md:text-display mb-8">
          <AnimatedText text="Ready to Build Something Impactful" />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <PillButton href="#contact" variant="light">
            Let&apos;s Connect
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
}
