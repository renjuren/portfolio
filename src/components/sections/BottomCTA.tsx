"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";

export default function BottomCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 py-20">
      <div className="container-max text-center max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          className="text-[13px] uppercase tracking-[0.15em] text-text-muted font-medium mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          [04] · WORK WITH ME
        </motion.div>

        {/* Primary statement */}
        <ScrollReveal>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] text-white font-semibold leading-[1.2] tracking-tight mb-8">
            Looking for enterprise SaaS teams where design decisions carry weight
            and design systems are treated as products.
          </h2>
        </ScrollReveal>

        {/* Sub-statement */}
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
            If that sounds like your team, I&apos;d like to hear from you.
          </p>
        </ScrollReveal>

        {/* Contact card */}
        <ScrollReveal delay={0.2}>
          <div className="inline-block glass-card px-10 py-8 rounded-2xl mb-10">
            <a
              href="mailto:renjujoseph6@outlook.com"
              className="text-lg md:text-xl text-white hover:text-accent-orange transition-colors duration-300 flex items-center gap-3"
            >
              <span>renjujoseph6@outlook.com</span>
              <span
                className="inline-block w-[2px] h-5 bg-accent-orange"
                style={{ animation: "typing-cursor 1s ease-in-out infinite" }}
              />
            </a>
          </div>
        </ScrollReveal>

        {/* CTA button */}
        <ScrollReveal delay={0.3}>
          <div>
            <PillButton
              href="mailto:renjujoseph6@outlook.com"
              variant="primary"
            >
              Get in Touch
            </PillButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
