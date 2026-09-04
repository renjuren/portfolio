"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SMATCaseStudy() {
  return (
    <>
      <Header lightOnTransparent={true} />
      <main className="bg-bg-light min-h-screen text-[#18191F] overflow-x-clip">
        {/* 1. HERO (Dark Background Section) */}
        <section className="bg-bg-dark text-text-light pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-max">
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
                SOCIAL PLATFORMS · 2023
              </span>
            </ScrollReveal>

            <h1 className="text-display-sm text-white mb-6 font-light max-w-4xl leading-tight">
              SMAT: Real-Time Social Audio &amp; Journey Coordination
            </h1>

            <p className="text-body-lg text-text-light/80 max-w-3xl mb-12 font-light leading-relaxed">
              Designing a synchronized social ecosystem that eliminates location lag and delivers simultaneous, multi-device audio streaming with proactive travel coordination.
            </p>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-dark mb-12">
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Client</span>
                <span className="text-base font-medium text-white">Concept Lab / Tunerfix Studios</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Timeline</span>
                <span className="text-base font-medium text-white">2023</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Role</span>
                <span className="text-base font-medium text-white">Lead Product Designer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Category</span>
                <span className="text-base font-medium text-white">Mobile Product Design</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-3 font-mono">Deliverables</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Competitor Analysis",
                  "Interaction Design",
                  "Prototyping",
                  "Brand Systems",
                  "Audio-Sync Architecture",
                  "Mobile UI Design",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono border border-border-dark px-3 py-1.5 rounded-full text-text-light/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. FEATURED COVER IMAGE */}
        <section className="container-max py-12 md:py-16 -mt-10 md:-mt-16">
          <ScrollReveal delay={0.2} className="w-full max-w-[1024px] mx-auto">
            <div className="relative w-full aspect-[16/9] bg-white border border-border-light rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/project-smat.png"
                alt="Case Study: SMAT Social Audio Platform"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 3. OVERVIEW / PROBLEM & SOLUTION */}
        <section className="container-max py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [01] · Overview
              </span>
              <h2 className="text-heading text-text-primary">
                Connecting moments in real-time
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Social connection frequently suffers from <strong>location lag</strong> and shared-audio friction. When users travel or explore cities, status updates and check-ins are often delayed by 3 to 4 hours. By the time friends discover they were in the same neighborhood or en route to the same district, the opportunity to meet face-to-face has already slipped away.
                </p>
                <p>
                  Simultaneously, active friend groups and commuting teams lack a frictionless way to share and enjoy the same audio stream together without disturbing others in public transit or sacrificing stereo acoustics through external speakers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE INNOVATION / SOLUTION */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [02] · Innovation
              </span>
              <h2 className="text-heading text-text-primary">
                Audio-Sync &amp; Journey Intelligence
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  SMAT is designed around two core product capabilities that redefine group mobility and shared listening:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 bg-white border border-border-light rounded-sm shadow-sm space-y-3">
                    <span className="text-xs font-mono text-[#6C5DD3] uppercase tracking-wider font-semibold">
                      Feature 01
                    </span>
                    <h3 className="text-lg font-medium text-text-primary">
                      Proprietary Audio-Sync Engine
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Enables multiple users to stream identical high-fidelity audio tracks into separate individual headphones simultaneously, with millisecond latency compensation across cellular and Wi-Fi networks.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-border-light rounded-sm shadow-sm space-y-3">
                    <span className="text-xs font-mono text-[#6C5DD3] uppercase tracking-wider font-semibold">
                      Feature 02
                    </span>
                    <h3 className="text-lg font-medium text-text-primary">
                      Journey Intelligence Overlay
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      A proactive map and transit radar that recognizes overlapping travel vectors and alerts users in real time, making spontaneous meetups effortless before routes diverge.
                    </p>
                  </div>
                </div>

                <p>
                  Together, these features transform passive location sharing into an active, social experience centered on shared music and spontaneous gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DESIGN SYSTEM & FOUNDATIONS */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [03] · Design System
              </span>
              <h2 className="text-heading text-text-primary">
                Color &amp; Typography
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  The visual language balances energetic modern mobility with clean, accessible legibility. We established a rich violet primary palette (`#6C5DD3`) paired with soft tints for card backgrounds and high-contrast charcoal for typography.
                </p>

                {/* Palette Specimen */}
                <div className="p-6 bg-white border border-border-light rounded-sm shadow-sm space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">Brand Color Scale</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {[
                      { hex: "#6C5DD3", name: "Primary Violet" },
                      { hex: "#5B4EBC", name: "Deep Violet" },
                      { hex: "#897DDC", name: "Light Violet" },
                      { hex: "#C4BEED", name: "Soft Lilac" },
                      { hex: "#3F8CFF", name: "Accent Blue" },
                      { hex: "#FF754C", name: "Alert Coral" },
                    ].map((c) => (
                      <div key={c.hex} className="flex flex-col items-center text-center">
                        <div
                          className="w-10 h-10 rounded-sm border border-border-light mb-1.5 shadow-xs"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-[11px] font-mono text-text-primary">{c.hex}</span>
                        <span className="text-[9px] text-text-muted">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  The typography system uses <strong>Inter</strong> across display headlines and utility scales, ensuring crystal-clear readability when skimming dynamic track listings and transit waypoints on small mobile viewports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DESIGN SYSTEM SPEC SHEET IMAGE */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-8">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">Specimen Document · Design System Version 1.0</span>
                <span className="text-xs font-mono text-text-muted">1640 × 5434 px</span>
              </div>
              <Image
                src="/images/smat-color-typography.png"
                alt="SMAT Design System: Color tokens, typography scale, and component styles"
                width={1640}
                height={5434}
                className="w-full h-auto rounded-xs object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 7. INTERACTION ARCHITECTURE & WIREFRAMES */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [04] · User Flows
              </span>
              <h2 className="text-heading text-text-primary">
                Information Architecture &amp; Wireframes
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Before jumping into high fidelity, we mapped the key journey loops: onboarding authentication, mutual friend discovery, joining an active audio session, and responding to a Journey Radar notification.
                </p>
                <p>
                  Low-fidelity wireframing allowed us to rigorously test touch target spacing, audio scrubbing interactions while walking, and one-handed thumb-zone reachability on modern mobile devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WIREFRAME IMAGE SECTION */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-6">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">Wireframe Architecture &amp; Key Screens</span>
                <span className="text-xs font-mono text-text-muted">Flow Exploration</span>
              </div>
              <div className="relative w-full aspect-[1920/938] overflow-hidden">
                <Image
                  src="/images/smat-ui-screens.png"
                  alt="SMAT Wireframe user flows and low-fidelity screen exploration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 9. HIGH-FIDELITY INTERFACE WALKTHROUGH */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [05] · High-Fidelity Design
              </span>
              <h2 className="text-heading text-text-primary">
                Key Product Screens
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  The final production UI features soft elevation surfaces, glowing audio waveform indicators, and clear distinction between personal audio and synchronized group sessions.
                </p>
                <ul className="space-y-3 list-disc pl-5 text-text-secondary">
                  <li><strong>Active Session Room:</strong> Real-time member avatar stack displaying volume levels and track synchronization status.</li>
                  <li><strong>Journey Overlay:</strong> Ambient map showing ETA convergence points without revealing exact home addresses, preserving member privacy.</li>
                  <li><strong>Quick Switch Controls:</strong> Immediate tap to mute or break off from the shared stream if a phone call or notification arrives.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. HIGH-FIDELITY SHOWCASE IMAGE */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-6">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">High-Fidelity Interface Showcase</span>
                <span className="text-xs font-mono text-text-muted">Final Deliverable</span>
              </div>
              <div className="relative w-full aspect-[1920/2242] overflow-hidden">
                <Image
                  src="/images/smat-full-showcase.png"
                  alt="SMAT High-Fidelity UI Screens showcase on mobile devices"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 11. REFLECTION & OUTCOMES */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [06] · Reflection
              </span>
              <h2 className="text-heading text-text-primary">
                Outcomes &amp; Learnings
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Designing for synchronized audio across variable wireless connections forced us to prioritize latency perception. We introduced subtle visual buffering cues that prevented audio stuttering from feeling like a broken application.
                </p>
                <p>
                  For Journey Intelligence, privacy was the foremost usability concern. Rather than continuous GPS tracking, we established ephemeral session-based location sharing that automatically expires once journeys conclude, building deep user trust from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. NEXT PROJECT LINK AT THE BOTTOM */}
        <section className="bg-bg-dark text-text-light py-20 md:py-28 border-t border-border-dark">
          <div className="container-max text-center">
            <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
              NEXT CASE STUDY
            </span>
            <Link
              href="/projects/campus-resource-sharing-app"
              className="inline-block group"
            >
              <h2 className="text-3xl md:text-5xl font-light hover:text-white transition-colors duration-300 mb-6 group-hover:translate-x-1 inline-flex items-center gap-4">
                <span>PeerShare: Resource Ecosystem</span>
                <svg className="w-8 h-8 text-text-muted group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </h2>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
