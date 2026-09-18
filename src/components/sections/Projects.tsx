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
          <div className={`relative ${layout.height} w-full overflow-hidden rounded-2xl glass-card`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 420px"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1 text-left">
            <span className="text-xs uppercase tracking-[0.12em] text-text-muted font-medium">
              {project.category}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {project.title}
            </h3>
            <span className="text-xs text-text-muted">
              {project.year}
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  // Visible projects on homepage: Enterprise Design System, Access Management (RBAC), RevenueHero Landing Page
  const allowedHrefs = [
    "/projects/idp-design-system-2026",
    "/projects/idp-partner-portal-rbac",
    "/projects/revenuehero-landing-page-optimization",
  ];

  const visibleProjects = projects.filter((project) =>
    allowedHrefs.includes(project.href)
  );

  return (
    <section id="projects" className="pt-0 pb-20 md:pb-28 lg:pb-32 relative z-10">
      <div className="container-max">
        <SectionLabel number="02" title="Selected Work" />

        {/* Scattered layout — desktop */}
        <div className="mt-8 hidden md:flex flex-wrap justify-between gap-y-12">
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
        <div className="mt-6 flex flex-col gap-8 md:hidden">
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
                <div className="relative h-[240px] w-full overflow-hidden rounded-2xl glass-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-1 text-left">
                  <span className="text-xs uppercase tracking-[0.12em] text-text-muted font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs text-text-muted">
                    {project.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note and button */}
        <motion.p
          className="mt-16 text-sm text-text-muted font-light italic text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          More case studies coming soon.
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
