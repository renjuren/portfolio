"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import { projects } from "@/lib/data";

// Scattered layout positions for each card
const cardLayouts = [
  {
    width: "w-[320px] md:w-[420px]",
    height: "h-[220px] md:h-[300px]",
    position: "self-start md:ml-[5%]",
    rotate: -3,
    origin: { x: -200, y: 0 },
    parallaxMultiplier: 0.05,
  },
  {
    width: "w-[280px] md:w-[380px]",
    height: "h-[320px] md:h-[440px]",
    position: "self-end md:mr-[8%] md:-mt-20",
    rotate: 2.5,
    origin: { x: 200, y: -50 },
    parallaxMultiplier: 0.08,
  },
  {
    width: "w-[300px] md:w-[400px]",
    height: "h-[200px] md:h-[280px]",
    position: "self-start md:ml-[15%] md:-mt-12",
    rotate: -1.5,
    origin: { x: -150, y: 80 },
    parallaxMultiplier: 0.04,
  },
  {
    width: "w-[260px] md:w-[350px]",
    height: "h-[300px] md:h-[400px]",
    position: "self-end md:mr-[3%] md:-mt-16",
    rotate: 4,
    origin: { x: 200, y: 0 },
    parallaxMultiplier: 0.07,
  },
  {
    width: "w-[300px] md:w-[380px]",
    height: "h-[240px] md:h-[320px]",
    position: "self-start md:ml-[2%] md:-mt-8",
    rotate: -2,
    origin: { x: -180, y: 50 },
    parallaxMultiplier: 0.06,
  },
  {
    width: "w-[280px] md:w-[360px]",
    height: "h-[260px] md:h-[350px]",
    position: "self-end md:mr-[12%] md:-mt-24",
    rotate: 1.5,
    origin: { x: 180, y: -30 },
    parallaxMultiplier: 0.05,
  },
  {
    width: "w-[320px] md:w-[400px]",
    height: "h-[220px] md:h-[300px]",
    position: "self-start md:ml-[10%]",
    rotate: -3.5,
    origin: { x: -160, y: 40 },
    parallaxMultiplier: 0.04,
  },
];

function ProjectCard({
  project,
  layout,
  index,
}: {
  project: (typeof projects)[0];
  layout: (typeof cardLayouts)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, layout.parallaxMultiplier * -100]
  );

  return (
    <motion.div
      ref={cardRef}
      className={`${layout.position} ${layout.width}`}
      style={{ y: parallaxY }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: layout.origin.x,
          y: layout.origin.y,
          rotate: layout.rotate * 2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: layout.rotate,
        }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.9,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Link href={project.href} className="block group">
          <motion.div
            className={`relative ${layout.height} overflow-hidden rounded-2xl glass-card cursor-pointer`}
            whileHover={{
              y: -8,
              scale: 1.03,
              borderColor: "rgba(255, 255, 255, 0.15)",
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 80vw, 420px"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[11px] uppercase tracking-[0.12em] text-text-muted font-medium block mb-1.5">
                {project.category}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                {project.title}
              </h3>
              <span className="text-xs text-text-muted mt-1 block">
                {project.year}
              </span>
            </div>
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_40px_rgba(232,130,12,0.15)]" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const visibleProjects = projects.filter((project) =>
    project.href.startsWith("/projects")
  );

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container-max">
        <SectionLabel number="02" title="Selected Work" />

        {/* Scattered layout — desktop */}
        <div className="mt-16 hidden md:flex flex-wrap justify-between gap-y-12">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              layout={cardLayouts[index % cardLayouts.length]}
              index={index}
            />
          ))}
        </div>

        {/* Mobile: single column stack */}
        <div className="mt-12 flex flex-col gap-8 md:hidden">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={project.href} className="block group">
                <div className="relative h-[240px] overflow-hidden rounded-2xl glass-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-text-muted font-medium block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs text-text-muted mt-1 block">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Rotating monogram */}
        <div className="flex justify-center my-16 md:my-24">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Dotted orbit */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-white/10"
              style={{ animation: "spin-slow 30s linear infinite" }}
            />
            {/* Monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-white/20 tracking-widest">
                RJ
              </span>
            </div>
          </div>
        </div>

        {/* Note and button */}
        <motion.p
          className="text-sm text-text-muted font-light italic text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          More case studies in progress.
        </motion.p>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <PillButton href="/projects" variant="secondary">
            View All Works
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
}
