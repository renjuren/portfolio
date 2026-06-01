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

export default function Clients() {
  return (
    <section className="section-padding border-t border-border-light">
      <div className="container-max">
        <ScrollReveal>
          <p className="text-label text-text-secondary text-center mb-16">
            Skills & Capabilities
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border-light">
          {services.map((service, index) => (
            <motion.div
              key={service}
              className="bg-bg-light flex items-center justify-center py-10 md:py-14 px-6 group cursor-default"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <span className="text-sm md:text-base font-medium tracking-wider text-text-secondary/40 group-hover:text-text-primary transition-all duration-500 select-none text-center uppercase">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
