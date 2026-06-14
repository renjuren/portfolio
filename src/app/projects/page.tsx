"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/data";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
  "All",
  "Product Design",
  "Design Systems",
  "User Research",
  "Growth & CRO",
];

export default function ProjectsArchive() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.tags.includes(selectedCategory));

  return (
    <>
      <Header />
      <main
        className="bg-bg-light text-text-primary min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative"
        onMouseMove={handleMouseMove}
      >
        <div className="container-max">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 md:mb-20">
            <h1 className="text-display text-text-primary mb-4">
              <AnimatedText text="Selected Work." />
            </h1>
            <ScrollReveal delay={0.3}>
              <p className="text-body-lg text-text-secondary">
                A curated archive of platforms, design systems, and growth experiments.
              </p>
            </ScrollReveal>
          </div>

          {/* Category Filter Tabs */}
          <ScrollReveal delay={0.4} className="mb-12 md:mb-16">
            <div className="flex flex-wrap gap-2 pb-4 border-b border-border-light">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setHoveredIndex(null); // Reset hover state to avoid wrong references
                    }}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-text-primary/20 ${
                      isActive
                        ? "text-bg-light font-medium"
                        : "text-text-secondary hover:text-text-primary font-normal"
                    }`}
                  >
                    <span className="relative z-10">{category}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-text-primary rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Filtered Project List */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isExternal = project.href.startsWith("http");
                const isHovered = hoveredIndex === idx;
                const isAnyHovered = hoveredIndex !== null;

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      layout: { type: "spring", stiffness: 300, damping: 30 },
                    }}
                    className="border-b border-border-light"
                  >
                    <Link
                      href={project.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="py-8 md:py-10 cursor-pointer group block"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="flex items-center justify-between gap-4 animate-fade-in">
                        <div className="flex items-baseline gap-4 md:gap-8 flex-1">
                          <span
                            className={`text-label text-text-muted hidden md:block min-w-[60px] transition-opacity duration-500 ${
                              isAnyHovered && !isHovered ? "opacity-30" : "opacity-100"
                            }`}
                          >
                            {project.year}
                          </span>
                          <h3
                            className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight transition-opacity duration-500 text-text-primary ${
                              isAnyHovered && !isHovered ? "opacity-30" : "opacity-100"
                            }`}
                          >
                            {project.title}
                          </h3>
                        </div>
                        <span
                          className={`text-label text-text-muted transition-opacity duration-500 hidden sm:block ${
                            isAnyHovered && !isHovered ? "opacity-30" : "opacity-100"
                          }`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Floating Image that follows cursor */}
        <AnimatePresence>
          {hoveredIndex !== null && filteredProjects[hoveredIndex] && (
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
                src={filteredProjects[hoveredIndex].image}
                alt={filteredProjects[hoveredIndex].title}
                fill
                className="object-cover"
                sizes="400px"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
