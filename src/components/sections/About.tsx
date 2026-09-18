"use client";

import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container-max">
        {/* Part 1: Portrait + text side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left column: Portrait photo with B&W to color hover */}
          <ScrollReveal>
            <div className="relative w-full group/portrait cursor-pointer">
              {/* Color version (revealed on hover) */}
              <Image
                src="/images/profile-color.png"
                alt="Renju Joseph, Senior Product Designer"
                width={1160}
                height={1404}
                priority
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* B&W version (shown by default, fades out on hover) */}
              <div className="absolute inset-0 transition-opacity duration-700 ease-out group-hover/portrait:opacity-0">
                <Image
                  src="/images/profile-bw.png"
                  alt=""
                  width={1160}
                  height={1404}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  aria-hidden="true"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: Section label, heading, body paragraphs, and button */}
          <div>
            <SectionLabel number="01" title="About Me" />

            <ScrollReveal delay={0.1}>
              <h2 className="text-heading mb-6">
                Building Scalable Systems
                <br className="hidden sm:inline" />
                for Complex Platforms
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body mb-4">
                I build scalable systems for complex enterprise platforms. I
                bridge the gap between complex engineering constraints and
                intuitive user needs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-body mb-8">
                I work at the intersection of design systems and AI tooling. My
                recent rebuild of IDP Education&apos;s global design system
                reduced 1,519 component variants to 112 and connected the system
                to code via MCP, the first AI-readable design system at IDP.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <PillButton href="#expertise" variant="secondary">
                Get to Know Me
              </PillButton>
            </ScrollReveal>
          </div>
        </div>

        {/* Part 2: Case study thumbnail at full width */}
        <ScrollReveal delay={0.2} className="mt-16 md:mt-20 lg:mt-24">
          <Link
            href="/projects/idp-design-system-2026"
            className="group block relative w-full overflow-hidden rounded-2xl glass-card p-1 transition-all duration-500 hover:border-white/15"
            aria-label="View IDP Education Design System Case Study"
          >
            <Image
              src="/images/project-eds.png"
              alt="Enterprise Design System, cutting variants from 1,519 to 112"
              width={2400}
              height={1800}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
