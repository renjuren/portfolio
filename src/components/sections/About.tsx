"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionLabel number="01" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left side - Images (asymmetric overlapping) */}
          <div className="lg:col-span-7 relative">
            <ScrollReveal>
              <div className="relative">
                {/* Main image - Profile photo */}
                <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-sm">
                  <Image
                    src="/images/profile.jpg"
                    alt="Renju Joseph — Senior Product Designer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>

                {/* Overlapping smaller image - project work */}
                <ScrollReveal
                  delay={0.3}
                  direction="right"
                  className="hidden md:block absolute -bottom-12 -right-8 lg:right-0 xl:-right-8"
                >
                  <div className="relative w-64 lg:w-72 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                    <Image
                      src="/images/project-eds.png"
                      alt="Enterprise Design System — Featured project"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Text */}
          <div className="lg:col-span-5 lg:pt-16 xl:pt-24">
            <ScrollReveal delay={0.2}>
              <h2 className="text-heading mb-6">
                Building Scalable Systems
                <br />
                for Complex Platforms
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-body mb-4">
                I build scalable systems for complex enterprise platforms. I
                bridge the gap between complex engineering constraints and
                intuitive user needs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-body mb-8">
                With a background in motion and photography, I build
                high-fidelity prototypes that don&apos;t just look good — they
                validate business hypotheses and reduce development friction.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <PillButton href="#expertise" variant="dark">
                Get to Know Me
              </PillButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
