"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { expertiseItems } from "@/lib/data";

export default function Expertise() {
  const [activeId, setActiveId] = useState<string>(expertiseItems[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? "" : id);
  };

  const activeItem = expertiseItems.find((item) => item.id === activeId);

  return (
    <section id="expertise" className="section-padding relative z-10" ref={sectionRef}>
      <div className="container-max">
        <SectionLabel number="03" title="My Expertise" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Sticky image */}
          {!isMobile && (
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl glass-card p-1">
                  <AnimatePresence mode="wait">
                    {activeItem && (
                      <motion.div
                        key={activeItem.id}
                        className="absolute inset-1 rounded-xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Image
                          src={activeItem.image}
                          alt={activeItem.title}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!activeItem && (
                    <div className="absolute inset-1 rounded-xl bg-white/5 flex items-center justify-center">
                      <span className="text-text-muted text-sm">
                        Select an expertise
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Right: Accordion */}
          <div>
            {expertiseItems.map((item, index) => {
              const isActive = activeId === item.id;

              return (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <div className="border-b border-border-default">
                    {/* Accordion Header */}
                    <button
                      onClick={() => handleToggle(item.id)}
                      className="w-full py-8 md:py-10 flex items-center justify-between gap-4 group cursor-pointer"
                      id={`expertise-${item.id}`}
                      aria-expanded={isActive}
                    >
                      <div className="flex items-center gap-4">
                        {/* Orange accent border indicator */}
                        <div
                          className={`w-[3px] h-8 rounded-full transition-all duration-500 ${
                            isActive ? "bg-accent-orange" : "bg-transparent"
                          }`}
                        />
                        <h3
                          className={`text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-left transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-text-muted group-hover:text-white"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <motion.span
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-border-default flex items-center justify-center text-text-muted group-hover:border-white/20 group-hover:text-white transition-colors duration-300"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
                            height: {
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1],
                            },
                            opacity: { duration: 0.3, delay: 0.1 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 md:pb-14">
                            {/* Mobile: show image inline */}
                            {isMobile && (
                              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl glass-card p-1 mb-6">
                                <div className="absolute inset-1 rounded-xl overflow-hidden">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                  />
                                </div>
                              </div>
                            )}
                            <p className="text-body-lg mb-6 pl-[19px]">
                              {item.description}
                            </p>
                            <ul className="space-y-3 pl-[19px]">
                              {item.services.map((service) => (
                                <li
                                  key={service}
                                  className="flex items-start gap-3 text-sm text-text-muted"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-1.5 flex-shrink-0" />
                                  {service}
                                </li>
                              ))}
                            </ul>
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
      </div>
    </section>
  );
}
