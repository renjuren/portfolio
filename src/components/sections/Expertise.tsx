"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { expertiseItems } from "@/lib/data";

export default function Expertise() {
  const [activeId, setActiveId] = useState<string>(expertiseItems[0].id);

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? "" : id);
  };

  return (
    <section id="expertise" className="section-padding">
      <div className="container-max">
        <SectionLabel number="03" title="Our Expertise" />

        <div className="mt-12 md:mt-16">
          {expertiseItems.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div className="border-b border-border-light">
                  {/* Accordion Header */}
                  <button
                    onClick={() => handleToggle(item.id)}
                    className="w-full py-8 md:py-10 flex items-center justify-between gap-4 group cursor-pointer"
                    id={`expertise-${item.id}`}
                    aria-expanded={isActive}
                  >
                    <h3
                      className={`text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-left transition-colors duration-300 ${
                        isActive
                          ? "text-text-primary"
                          : "text-text-secondary group-hover:text-text-primary"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <motion.span
                      className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-border-light flex items-center justify-center text-text-secondary group-hover:border-text-primary group-hover:text-text-primary transition-colors duration-300"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 4V16M4 10H16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                          opacity: { duration: 0.3, delay: 0.1 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                          {/* Left - Image */}
                          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>

                          {/* Right - Description & List */}
                          <div className="flex flex-col justify-center">
                            <p className="text-body-lg mb-6">
                              {item.description}
                            </p>
                            <ul className="space-y-3">
                              {item.services.map((service) => (
                                <li
                                  key={service}
                                  className="flex items-start gap-3 text-sm text-text-secondary"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-1.5 flex-shrink-0" />
                                  {service}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
