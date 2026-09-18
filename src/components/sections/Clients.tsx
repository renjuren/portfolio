"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  "UX/UI Design",
  "Interaction Design",
  "Product Strategy",
  "Rapid Prototyping",
  "Motion Design",
  "User Research",
  "Design Systems",
  "Growth Design",
  "Information Architecture",
  "Competitive Analysis",
  "High-Fidelity Prototyping",
  "CRO",
];

// Double the items for seamless infinite scroll
const doubledServices = [...services, ...services];

export default function Clients() {
  return (
    <section className="py-20 md:py-28 relative z-10 overflow-hidden">
      <div className="container-max mb-12">
        <ScrollReveal>
          <p className="text-label text-center">Skills & Capabilities</p>
        </ScrollReveal>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="group mb-4">
        <div
          className="flex gap-4 w-max hover:[animation-play-state:paused]"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {doubledServices.map((service, index) => (
            <motion.div
              key={`row1-${index}`}
              className="glass-card px-6 py-3.5 rounded-full whitespace-nowrap flex-shrink-0 cursor-default group/item"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-medium tracking-wider text-text-muted group-hover/item:text-white transition-colors duration-300 uppercase">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="group">
        <div
          className="flex gap-4 w-max hover:[animation-play-state:paused]"
          style={{ animation: "marquee-reverse 45s linear infinite" }}
        >
          {[...doubledServices].reverse().map((service, index) => (
            <motion.div
              key={`row2-${index}`}
              className="glass-card px-6 py-3.5 rounded-full whitespace-nowrap flex-shrink-0 cursor-default group/item"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-medium tracking-wider text-text-muted group-hover/item:text-white transition-colors duration-300 uppercase">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
