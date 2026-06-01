"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import { projects } from "@/lib/data";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="projects"
      className="bg-bg-dark text-text-light section-padding relative"
      onMouseMove={handleMouseMove}
    >
      <div className="container-max">
        <SectionLabel number="02" title="Selected Work" light />

        <div className="mt-12 md:mt-16">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-border-dark py-8 md:py-10 cursor-pointer group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-4 md:gap-8 flex-1">
                  <span className="text-label text-text-muted hidden md:block min-w-[60px]">
                    {project.year}
                  </span>
                  <h3
                    className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight transition-all duration-500 ${
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "opacity-30"
                        : "opacity-100"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
                <span
                  className={`text-label text-text-muted transition-all duration-500 hidden sm:block ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-30"
                      : "opacity-100"
                  }`}
                >
                  {project.category}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Floating Image that follows cursor */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-72 h-48 md:w-96 md:h-64 overflow-hidden rounded-sm shadow-2xl hidden md:block"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 100,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={projects[hoveredIndex].image}
                alt={projects[hoveredIndex].title}
                fill
                className="object-cover"
                sizes="400px"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <PillButton
            href="https://renjujoseph.framer.website/projects"
            variant="light"
          >
            View All Works
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
}
