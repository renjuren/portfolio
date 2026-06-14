"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedText from "@/components/ui/AnimatedText";

export default function DesignSystemCaseStudy() {
  return (
    <>
      <Header lightOnTransparent={true} />
      <main className="bg-bg-light min-h-screen">
        {/* 1. HERO (Dark Background Section) */}
        <section className="bg-bg-dark text-text-light pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-max">
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase tracking-widest text-text-muted block mb-4">
                DESIGN SYSTEM · 2025–2026
              </span>
            </ScrollReveal>
            
            <h1 className="text-display-sm text-white mb-6 font-light max-w-4xl leading-tight">
              Enterprise Design System 2026
            </h1>
            
            <p className="text-body-lg text-text-light/80 max-w-3xl mb-12 font-light leading-relaxed">
              A ground-up rebuild of IDP's global design system. 1,519 component variants reduced to 112, MCP-connected to code, serving 50+ engineers across four cities.
            </p>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-dark mb-12">
              <div>
                <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Client</span>
                <span className="text-sm font-medium text-white">IDP Education</span>
              </div>
              <div>
                <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Role</span>
                <span className="text-sm font-medium text-white">UX Designer · Design System Owner</span>
              </div>
              <div>
                <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Year</span>
                <span className="text-sm font-medium text-white">2025 – 2026</span>
              </div>
              <div>
                <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Scope</span>
                <span className="text-sm font-medium text-white">Cross-product, cross-geography</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-3">Deliverables</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Token Architecture",
                  "Component Library",
                  "MCP Integration",
                  "Migration Strategy",
                  "Cross-Geography Adoption"
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

        <section className="container-max py-12 md:py-16 -mt-10 md:-mt-16 flex justify-center">
          <ScrollReveal delay={0.2}>
            <div className="relative w-[1024px] max-w-full aspect-[1024/448] overflow-hidden">
              <Image
                src="/images/eds-case-study-1.png"
                alt="Case Study: IDP Design System 2026 - Variant count reduction"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 3. CONTEXT section */}
        <section className="container-max py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [01] Context
              </span>
              <h2 className="text-heading text-text-primary">
                Where this started
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  IDP Education is a global study-abroad and IELTS examination organization headquartered in Melbourne, with partner universities across the world and offices in Chennai, London, Melbourne, and Taipei. Internally, the product organization is split across three domains: a Partner Portal (the B2B platform our university partners use to manage marketing campaigns, landing pages, and student orders), a Student Portal (the B2C platform for student recruitment), and IELTS (a separately-governed product with its own design system, outside the scope of this work).
                </p>
                <p>
                  I work primarily on the Partner Portal and its sub-products. The design system I built spans Partner Portal and Student Portal — every IDP-owned product except IELTS. That's 12 designers across four cities and 50+ engineers consuming the system globally.
                </p>
                <p>
                  Three years ago, when IDP migrated from XD and Sketch to Figma, the team needed a design system fast. I built the first version — but under time pressure, we customized on top of a purchased third-party base rather than building from scratch. It shipped. It served us. And over three years, I watched exactly how it broke down.
                </p>
                <p>
                  Designers in Chennai, London, and Melbourne diverged on color usage. The engineering team started maintaining a parallel CSS library to work around inconsistencies. Frame load times in Figma crept up as the component count ballooned past 1,500 variants. The system became increasingly incompatible with the AI tooling the org started experimenting with in 2024.
                </p>
                <p>
                  By early 2025, the cracks were no longer ignorable. The Head of UX flagged the inconsistency. I'd already been mapping the failure modes for months. I proposed rebuilding from scratch — owned end-to-end this time, not customized over a purchased base — designed for AI-readability and engineering parity from day one. Leadership approved in January 2025. Build began in November 2025, after ten months of research and stakeholder alignment across the four geographies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE PROBLEM section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [02] Analysis
              </span>
              <h2 className="text-heading text-text-primary">
                Five failures, compounding
              </h2>
              <p className="text-sm text-text-secondary mt-4 max-w-sm">
                The old system wasn't broken in one obvious way. It was broken in five quiet ways that compounded.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-12">
                
                {/* Failure 1 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-start gap-3">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm">01</span>
                    Variant sprawl that had become unmaintainable
                  </h3>
                  <p>
                    The button component alone had over 100 variants — combinations of primary/secondary/outlined × normal/focused/hover/pressed × with-icon/without-icon, with no shared structure. Across the full system, we'd accumulated 1,519 component variants. Changing an icon inside a button required remembering the icon name and selecting a different variant entirely — there was no component-swap property. Frame loading on complex screens took 40–50 seconds.
                  </p>
                </div>

                {/* Failure 2 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-start gap-3">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm">02</span>
                    A flat color palette masquerading as a token system
                  </h3>
                  <p>
                    Colors existed as a primitive palette only — IDP-Blue-400, IDP-Blue-500, and so on — with no semantic layer telling designers where each color should be used. There were no surface tokens, no text tokens, no border tokens. Each designer made their own interpretation. Light and dark themes didn't exist.
                  </p>
                </div>

                {/* Failure 3 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-start gap-3">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm">03</span>
                    WCAG failures across the palette
                  </h3>
                  <p>
                    Because the primitives were defined for brand fidelity rather than accessibility, several color combinations the system implicitly allowed didn't pass contrast checks. Designers and engineers were unintentionally shipping inaccessible UI.
                  </p>
                </div>

                {/* Failure 4 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-start gap-3">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm">04</span>
                    A growing gap between design and engineering
                  </h3>
                  <p>
                    The Figma design system and the engineering CSS library used different naming conventions for everything — including colors. Design sign-off became a debugging session. The engineering team had effectively stopped relying on the Figma system as a source of truth and was maintaining their own parallel reference.
                  </p>
                </div>

                {/* Failure 5 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-start gap-3">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm">05</span>
                    Cross-geography divergence
                  </h3>
                  <p>
                    Without a strong semantic layer, regional teams improvised. The Partner Portal team in Chennai used numerical tokens (IDP-Blue-400, 500, 600). The Student Portal team used named tokens (IDP-Blue-Light, Dark, Darkest). Neither approach told a designer where to use which color. As a result, the same brand color appeared in completely different contexts across products, and the IDP visual identity fragmented.
                  </p>
                </div>

                <div className="pt-6 border-t border-border-light text-text-secondary italic">
                  The Head of UX raised the inconsistency concern. I'd been tracking the failures for months. I took the initiative, mapped the gaps end-to-end, and proposed a full rebuild.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-max py-8 md:py-12 flex justify-center">
          <ScrollReveal delay={0.1}>
            <div className="relative w-[1024px] max-w-full aspect-[1024/576] overflow-hidden">
              <Image
                src="/images/eds-case-study-2.png"
                alt="92% fewer variants. Same coverage."
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 6. WHY THIS WAS HARD section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [03] Constraints
              </span>
              <h2 className="text-heading text-text-primary">
                Why this was hard
              </h2>
              <p className="text-sm text-text-secondary mt-4 max-w-sm">
                A design system rebuild for a single product team is a known problem. This was harder for four reasons.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-8">
                
                {/* Reason 1 */}
                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">1. Cross-geography buy-in</h4>
                  <p>
                    12 designers in four cities, each with their own working habits and (in some cases) their own ad-hoc component libraries built to work around the shared system. A new system without their buy-in would simply become a sixth ad-hoc library in the org.
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">2. Cross-domain governance</h4>
                  <p>
                    The Partner Portal and Student Portal serve fundamentally different audiences (B2B partners vs. B2C students). The Student Portal team initially argued for visual differentiation through color — a reasonable instinct, but one that, in practice, had produced fragmentation rather than differentiation. The case for a unified system had to be made on technical and accessibility grounds, not just visual ones.
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">3. No mandate to break things</h4>
                  <p>
                    Leadership approved the rebuild but didn't authorize a hard cutover. Existing products were mid-sprint, integrated with each other, and couldn't absorb a forced migration. The new system had to coexist with the old one and earn adoption product by product.
                  </p>
                </div>

                {/* Reason 4 */}
                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">4. An AI-readiness target with no internal precedent</h4>
                  <p>
                    No one had built a design system at IDP that was AI-tool-compatible, MCP-connected, or designed to stay in sync with code repositories. I researched how Atlassian, IBM, and Microsoft structured theirs and worked out my own architecture from that base.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 7. THE APPROACH section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [04] Strategy
              </span>
              <h2 className="text-heading text-text-primary">
                The approach
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-8">
                <p className="text-body-lg font-light text-text-primary">
                  I structured the work in four sequential layers, starting from extensive research up to AI integration pipelines.
                </p>

                <div className="space-y-6 mt-8">
                  {/* Layer 1 */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary font-mono">
                      Layer 1 — Research & Alignment
                    </h4>
                    <p>
                      Ten months before building, I spent time understanding three things: how each regional team was actually using (or working around) the existing system; what the engineering team needed for the design-to-code sync to function; and how mature design systems at IBM, Atlassian, and Microsoft structured primitive and semantic tokens. Figma's advancements in variables and modes during 2024 became the technical foundation.
                    </p>
                  </div>

                  {/* Layer 2 */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary font-mono">
                      Layer 2 — Token Architecture
                    </h4>
                    <p>
                      I built a two-tier token taxonomy. Primitives — raw color values, raw spacing values, raw type sizes — are only accessible to design system admins and managers. Semantics — Surface/Default, Surface/Subtle, Text/Primary, Border/Strong, Action/Primary — are what every designer and engineer actually uses.
                    </p>
                    <p className="text-text-secondary italic">
                      The reason this matters: when primitives are exposed to consumers, people pick colors by what looks right. When semantics are exposed, people pick colors by what they mean — and meaning enforces consistency. Light and dark themes became one-click swaps because the semantic layer already encoded where each color belonged. Accessibility became the default rather than the exception.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="container-max py-8 flex justify-center">
          <ScrollReveal delay={0.1}>
            <div className="relative w-[1024px] max-w-full aspect-[1024/755] overflow-hidden">
              <Image
                src="/images/eds-case-study-3.png"
                alt="Two-tier Token Architecture - Primitives mapped to Semantics"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 9. Component Redesign Section */}
        <section className="container-max py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [05] Architecture
              </span>
              <h2 className="text-heading text-text-primary">
                Layer 3 — Components
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  I rebuilt the base components — buttons, inputs, icons, spacing primitives — from scratch using Figma's current best practices: boolean properties, component-swap for icons, variant structures that collapse combinatorial explosion into composable properties. The button went from 100+ variants to a structured set with boolean toggles for icon, state, and size. Total system variant count dropped from 1,519 to 112.
                </p>
                <p>
                  Regional design teams now build their own product-specific components on top of this base. I review every contribution to keep naming and structure aligned with engineering conventions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-max py-8 flex justify-center">
          <ScrollReveal delay={0.1}>
            <div className="relative w-[1024px] max-w-full aspect-[1024/691] overflow-hidden">
              <Image
                src="/images/eds-case-study-4.png"
                alt="Component simplification: Button variants before and after"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 11. AI AND CODE INTEGRATION section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [06] Tooling
              </span>
              <h2 className="text-heading text-text-primary">
                Layer 4 — AI & Code Integration
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  This is the layer that made the system genuinely different from what existed before. Working with engineering, I established an MCP (Model Context Protocol) connection between the Figma file and the code repository. When tokens or components update in Figma, the AI tooling detects the change and surfaces it to the relevant engineering team. I used Claude AI to accelerate generating Angular component scaffolding from the Figma source; engineering reviewed and refined the generated code, and now owns it as a shipped component library.
                </p>
                <p>
                  The result: a designer updates a semantic token, and that change can propagate to the code repository through a chain that humans review but no longer have to manually translate. Production-ready code from AI tools now respects the IDP design system as a constraint, because the system is structured to be machine-readable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. IMAGE — MCP architecture visual (image 06 - Custom CSS Diagram) */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-[#FAF9F5] border border-border-light rounded-lg p-8 md:p-12 shadow-lg">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-text-secondary font-mono">INTEGRATION PIPELINE</span>
                <h4 className="text-lg font-medium text-text-primary mt-1">Model Context Protocol Sync Schematic</h4>
              </div>

              {/* Node Schematic Workflow */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {/* Figma Node */}
                <div className="bg-white p-5 border border-border-light rounded flex flex-col items-center text-center z-10 shadow-sm">
                  <div className="w-10 h-10 bg-[#FF7262]/10 text-[#FF7262] rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0-.83.67-1.5 1.5-1.5h1.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H14.5c-.83 0-1.5-.67-1.5-1.5zM7.5 11c-.83 0-1.5-.67-1.5-1.5V7.75C6 6.92 6.67 6.25 7.5 6.25S9 6.92 9 7.75v1.75c0 .83-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5V7.75c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.75c0 .83-.67 1.5-1.5 1.5z" /></svg>
                  </div>
                  <h5 className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary">Figma Variables</h5>
                  <p className="text-[10px] text-text-secondary mt-1">Design tokens & component schemas in Figma</p>
                </div>

                {/* Arrow 1 */}
                <div className="hidden md:flex items-center justify-center text-text-secondary">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </div>

                {/* MCP Connector Node */}
                <div className="bg-bg-dark text-text-light p-5 rounded flex flex-col items-center text-center z-10 shadow-md border border-border-dark">
                  <div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
                  </div>
                  <h5 className="text-xs font-mono font-bold tracking-wider uppercase text-white">MCP Bridge</h5>
                  <p className="text-[10px] text-text-muted mt-1">Detects variables updates and parses token JSON</p>
                </div>

                {/* Arrow 2 */}
                <div className="hidden md:flex items-center justify-center text-text-secondary">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </div>

                {/* Code Repo Node */}
                <div className="bg-white p-5 border border-border-light rounded flex flex-col items-center text-center z-10 shadow-sm">
                  <div className="w-10 h-10 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                  </div>
                  <h5 className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary">Angular Library</h5>
                  <p className="text-[10px] text-text-secondary mt-1">Tokens compiled into SCSS variables & components in Git</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-light flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="text-xs text-text-secondary">
                  <strong className="text-text-primary">Automatic Sync:</strong> Token pushes in Figma auto-trigger style sheet compiling, keeping codebases 100% matched.
                </div>
                <span className="text-[10px] uppercase font-mono bg-green-100 text-green-800 px-3 py-1 rounded">Active Connection</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 11. THE HARDEST DECISION section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [07] Trade-offs
              </span>
              <h2 className="text-heading text-text-primary">
                The hardest decision
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  The hardest call wasn't technical. It was the migration strategy.
                </p>
                <p>
                  <strong>Option A</strong> was a hard cutover — deprecate the old system on a fixed date, require every team to migrate within a quarter. Fast, clean, painful, and likely to fail given mid-sprint integrations and the cross-product dependencies.
                </p>
                <p>
                  <strong>Option B</strong> was indefinite backward compatibility — let teams adopt at their own pace. Safe, low-friction, and likely to result in a half-migrated system that never reached consolidation.
                </p>
                <p>
                  I chose a <strong>third path</strong>: gradual migration, sequenced by product readiness, with a six-month soft deadline. When a product team had upcoming sprint bandwidth, we used that window to migrate them. Sequencing was decided by integration complexity — tightly coupled products were migrated together; standalone products went first to build confidence. Within six months, almost all products were on the new system.
                </p>
                <p className="italic text-text-secondary">
                  What I gave up: speed, and the cleanliness of a single cutover date. What I gained: actual adoption. The old system isn't dead today, but it's no longer the source of truth for any active product.
                </p>
                <p>
                  A separate trade-off worth naming: the color palette itself. IDP has a dedicated branding team that owns brand color decisions. I raised UX concerns about visual homogeneity across some contexts, but the branding decision wasn't mine to make. I worked within the palette I was given, and where I could push, I added UI action colors that the brand team hadn't originally specified — by demonstrating the UX cost of not having them. Design systems are partly a negotiation; this one was.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-max py-8 flex justify-center">
          <ScrollReveal delay={0.1}>
            <div className="relative w-[1024px] max-w-full aspect-[1024/486] overflow-hidden">
              <Image
                src="/images/eds-case-study-5.png"
                alt="One-click light and dark mode swap display"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 13. OUTCOMES section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [08] Impact
              </span>
              <h2 className="text-heading text-text-primary">
                What changed
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-8">
                
                {/* Metric 1 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-text-primary">Adoption</h4>
                  <p className="text-sm">
                    The new system is now used by all 12 designers across Chennai, London, Melbourne, and Taipei, and by 50+ engineers globally consuming the system through the MCP-connected code pipeline.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-text-primary">Complexity Reduction</h4>
                  <p className="text-sm">
                    Component variants reduced from 1,519 to 112 — a 92% reduction. The button alone went from 100+ variants to a structured boolean-driven set. Icon swapping moved from name-based variant lookup to true component-swap property.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-text-primary">Performance Boost</h4>
                  <p className="text-sm">
                    Complex frames (data tables, dense dashboards) that previously took 40–50 seconds to load now load in under 10 seconds. This is the observed difference on the screens our team builds most often.
                  </p>
                </div>

                {/* Metric 4 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-text-primary">Engineering Velocity</h4>
                  <p className="text-sm">
                    The engineering manager I work most closely with estimated, based on her team's workload tracking, a 30–40% reduction in implementation time — driven by the design-to-code naming alignment and the MCP-propagated component sync.
                  </p>
                </div>

                {/* Metric 5 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-text-primary">Design Velocity with AI</h4>
                  <p className="text-sm">
                    Designers using Figma Make and Google Stitch with the new design system as a constraint now generate production-ready output rather than ideation-only output. The team's qualitative estimate is that the design-to-handoff process is 30–50% faster for screens that fit the existing component set.
                  </p>
                </div>

                {/* Metric 6 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-text-primary">Accessibility Conformance</h4>
                  <p className="text-sm">
                    Semantic tokens are designed to meet WCAG AA contrast standards by default; a subset meet AAA. Designers and AI tools consuming the system now produce accessible-by-default output instead of accessible-by-accident output.
                  </p>
                </div>

                {/* Metric 7 */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-text-primary">Visual Consistency</h4>
                  <p className="text-sm">
                    Visual divergence between Partner Portal and Student Portal — previously a recurring complaint — is no longer a recurring complaint. Designers don't detach components in working files because the slots and variant structure now accommodate the variations they used to detach for.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 14. IMAGE — Outcomes metrics visual (image 07 - Custom CSS Metrics Dashboard) */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white border border-border-light rounded-lg p-6 md:p-12 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Stat Block 1 */}
              <div className="flex flex-col justify-between p-6 bg-bg-light/40 border border-border-light/60 rounded">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">COMPLEXITY</span>
                  <h5 className="text-sm font-medium text-text-primary mt-1">Component Variants</h5>
                </div>
                <div className="my-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-light text-text-primary">112</span>
                    <span className="text-sm text-text-secondary line-through">1,519</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-green-700 bg-green-100/50 px-2 py-0.5 rounded mt-2 inline-block">-92% reduction</span>
                </div>
                <div className="w-full bg-border-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-text-primary h-full rounded-full" style={{ width: "8%" }} />
                </div>
              </div>

              {/* Stat Block 2 */}
              <div className="flex flex-col justify-between p-6 bg-bg-light/40 border border-border-light/60 rounded">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">PERFORMANCE</span>
                  <h5 className="text-sm font-medium text-text-primary mt-1">Figma Frame Load Time</h5>
                </div>
                <div className="my-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-light text-text-primary">&lt;10s</span>
                    <span className="text-sm text-text-secondary line-through">45s</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-green-700 bg-green-100/50 px-2 py-0.5 rounded mt-2 inline-block">80% faster load</span>
                </div>
                <div className="w-full bg-border-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-text-primary h-full rounded-full" style={{ width: "20%" }} />
                </div>
              </div>

              {/* Stat Block 3 */}
              <div className="flex flex-col justify-between p-6 bg-bg-light/40 border border-border-light/60 rounded">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">VELOCITY</span>
                  <h5 className="text-sm font-medium text-text-primary mt-1">Engineering Dev Time</h5>
                </div>
                <div className="my-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-light text-text-primary">-35%</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-green-700 bg-green-100/50 px-2 py-0.5 rounded mt-2 inline-block">Workload reduction</span>
                </div>
                <div className="w-full bg-border-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-text-primary h-full rounded-full" style={{ width: "65%" }} />
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* 15. WHAT I'D DO DIFFERENTLY section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [09] Retrospective
              </span>
              <h2 className="text-heading text-text-primary">
                What I'd do differently
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Two things stand out in hindsight.
                </p>
                <p>
                  <strong>I'd build in Storybook in parallel with the Figma work</strong>, using Code Connect from day one. I built the Figma side first and the code side later. That sequence worked, but it added a translation layer that didn't need to exist. If Storybook and Code Connect were live from the first component, design-to-code parity would have been a property of the system, not a goal to retrofit.
                </p>
                <p>
                  <strong>I'd build sub-brand-aware components from the start.</strong> The current system serves the unified IDP brand cleanly, but as IDP evolves toward more sub-brand-differentiated products, I'm now retrofitting variation into components that were designed for uniformity.
                </p>
                <p>
                  <strong>I'd also document the architecture research more formally.</strong> I read deeply into IBM Carbon, Atlassian, and Microsoft Fluent, but I didn't write down my synthesis. When new team members ask why we structured tokens the way we did, the answer lives in my head. That's a single point of failure I'd remove.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 16. WHAT'S NEXT section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [10] Future
              </span>
              <h2 className="text-heading text-text-primary">
                What's next
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  The current system serves IDP's non-IELTS products with a single brand. My longer-term vision is a unified IDP design system that includes both the in-house products and IELTS — with sub-brand modes that let a single component library produce IDP-branded and IELTS-branded surfaces with a single appearance swap, the same way light and dark themes work today.
                </p>
                <p>
                  That requires alignment beyond the design team — IELTS has different governance — but the technical foundation is now in place to support it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 17. NEXT PROJECT LINK AT THE BOTTOM */}
        <section className="bg-bg-dark text-text-light py-20 md:py-28 border-t border-border-dark">
          <div className="container-max text-center">
            <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
              NEXT CASE STUDY
            </span>
            <Link
              href="https://renjujoseph.framer.website/projects/smat-social-sync-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <h2 className="text-3xl md:text-5xl font-light hover:text-white transition-colors duration-300 mb-6 group-hover:translate-x-1 inline-flex items-center gap-4">
                <span>SMAT: Social Sync Platform</span>
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
