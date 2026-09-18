"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { expertiseItems } from "@/lib/data";

export default function Expertise() {
  const item = expertiseItems[0];

  return (
    <section id="expertise" className="pt-0 pb-20 md:pb-28 lg:pb-32 relative z-10">
      <div className="container-max">
        <div className="max-w-3xl">
          <ScrollReveal>
            <h2 className="text-heading text-white mb-6">
              {item.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-text-secondary mb-8 leading-relaxed">
              {item.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ul className="space-y-3 text-text-muted text-sm md:text-base">
              {item.services.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
