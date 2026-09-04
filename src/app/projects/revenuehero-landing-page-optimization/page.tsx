"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function RevenueHeroCaseStudy() {
  return (
    <>
      <Header lightOnTransparent={true} />
      <main className="bg-bg-light min-h-screen text-[#18191F] overflow-x-clip">
        {/* 1. HERO (Dark Background Section) */}
        <section className="bg-bg-dark text-text-light pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-max">
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
                B2B SAAS GROWTH · 2024
              </span>
            </ScrollReveal>

            <h1 className="text-display-sm text-white mb-6 font-light max-w-4xl leading-tight">
              RevenueHero: High-Conversion Landing Page Design
            </h1>

            <p className="text-body-lg text-text-light/80 max-w-3xl mb-12 font-light leading-relaxed">
              Overhauling visual hierarchy, competitive positioning, and meeting scheduling pathways to turn high-intent B2B visitors into qualified inbound pipeline.
            </p>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-dark mb-12">
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Client</span>
                <span className="text-base font-medium text-white">RevenueHero (B2B SaaS)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Timeline</span>
                <span className="text-base font-medium text-white">2024</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Role</span>
                <span className="text-base font-medium text-white">Lead UX Designer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Focus</span>
                <span className="text-base font-medium text-white">Growth Design &amp; CRO</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-3 font-mono">Deliverables</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Conversion Rate Optimization (CRO)",
                  "B2B SaaS Market Analysis",
                  "Information Architecture & Content Hierarchy",
                  "Responsive UI Design",
                  "Visual Strategy & Competitive Framing",
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
                src="/images/project-revenuehero.png"
                alt="Case Study: RevenueHero Landing Page Redesign"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 3. THE REQUIREMENT & PROBLEM */}
        <section className="container-max py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [01] · The Requirement
              </span>
              <h2 className="text-heading text-text-primary">
                Unlocking inbound velocity
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  RevenueHero helps B2B revenue teams automatically qualify, route, and schedule inbound meetings immediately after form submission. However, the existing marketing landing page was underperforming, resulting in low demo conversion rates relative to incoming traffic.
                </p>
                <p>
                  The objective was to overhaul the visual hierarchy and page narrative to drive a singular business metric: <strong>increasing high-intent demo requests</strong> without sacrificing technical nuance.
                </p>
                <p>
                  We needed to address heavy cognitive load, unclear product differentiators compared to incumbents like ChiliPiper, and buried proof points that failed to reassure revenue leaders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORK PLAN & MARKET ANALYSIS */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [02] · Strategy
              </span>
              <h2 className="text-heading text-text-primary">
                Direct Competitive Positioning
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Rather than hiding behind generic corporate jargon, we conducted deep-market analysis of the inbound revenue tools space. Enterprise buyers were frustrated by three recurring problems: opaque pricing, complex multi-month implementations, and rigid lead assignment rules.
                </p>
                <p>
                  We placed a bold, transparent head-to-head comparison against the category incumbent front and center:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-5 bg-white border border-border-light rounded-sm shadow-xs">
                    <span className="text-xs font-mono text-[#F14C52] block mb-1">Pain Point 01</span>
                    <strong className="text-sm block text-text-primary mb-1">Pricing Transparency</strong>
                    <p className="text-xs text-text-secondary">Eliminated vague "Contact Sales" barriers with an interactive calculator showing predictable flat user licensing.</p>
                  </div>
                  <div className="p-5 bg-white border border-border-light rounded-sm shadow-xs">
                    <span className="text-xs font-mono text-[#F14C52] block mb-1">Pain Point 02</span>
                    <strong className="text-sm block text-text-primary mb-1">Zero Routing Delay</strong>
                    <p className="text-xs text-text-secondary">Highlighted sub-second calendar rendering that lets prospective buyers choose a meeting time on the spot.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HERO COMPARISON IMAGE SECTION */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-6">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">Competitive Comparison Matrix &amp; Value Proposition</span>
                <span className="text-xs font-mono text-text-muted">Above-The-Fold Frame</span>
              </div>
              <div className="relative w-full aspect-[3456/2234] overflow-hidden">
                <Image
                  src="/images/revenuehero-hero.png"
                  alt="RevenueHero vs ChiliPiper direct ratings comparison hero graphic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 6. FULL LANDING PAGE ARCHITECTURE */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [03] · Full-Page Architecture
              </span>
              <h2 className="text-heading text-text-primary">
                A narrative built to convert
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Every section of the long-scroll landing page was engineered to progressively answer buyer objections and validate credibility:
                </p>
                <ol className="space-y-4 list-decimal pl-5 text-text-secondary">
                  <li><strong>Hero &amp; Instant Rating:</strong> Immediate third-party G2 badges (Ease of Setup: 9.3, Quality of Support: 9.8).</li>
                  <li><strong>Social Proof Carousel:</strong> Logos from leading scale-ups (OpenUp, TrovaTrip, Okendo, Brella, Lokalise, SEON).</li>
                  <li><strong>Real Matching Logic:</strong> Explaining account-based routing and domain lookup without technical jargon.</li>
                  <li><strong>Interactive Pricing Comparison:</strong> Interactive slider allowing sales leaders to see exact annual savings compared to legacy tiers.</li>
                  <li><strong>Social Proof &amp; Testimonials:</strong> Verified reviews from VP of Revenue and Head of Growth buyers.</li>
                  <li><strong>Low-Friction Closing CTA:</strong> Floating demo trigger that stays accessible without obscuring mobile content.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FULL LANDING PAGE GRAPHIC IMAGE */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-8">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">Complete Landing Page Architecture &amp; Content Hierarchy</span>
                <span className="text-xs font-mono text-text-muted">1440 × 6195 px Full Flow</span>
              </div>
              <Image
                src="/images/revenuehero-full-page.png"
                alt="RevenueHero complete high-conversion landing page layout"
                width={1440}
                height={6195}
                className="w-full h-auto rounded-xs object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 8. CRM INTEGRATION & CALENDAR AUTOMATION */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [04] · Product Showcase
              </span>
              <h2 className="text-heading text-text-primary">
                CRM Sync &amp; Frictionless Scheduling
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  A major objection from revenue operations teams is CRM data corruption—leads booked into personal calendars without syncing back to Salesforce or HubSpot records.
                </p>
                <p>
                  We created high-contrast, focused visual modules demonstrating bidirectional CRM synchronization. Prospects could visually confirm that meeting status, router name, and campaign tags update automatically with zero manual rep intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CRM IMAGES DUAL ROW */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 flex flex-col justify-between">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">CRM Sync Validation</span>
                <div className="relative w-full aspect-square overflow-hidden rounded-xs">
                  <Image
                    src="/images/revenuehero-crm-square.png"
                    alt="RevenueHero automated meeting data synced to CRM"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>

              <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 flex flex-col justify-between">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">Instant Calendar Booking</span>
                <div className="relative w-full aspect-[1200/627] overflow-hidden rounded-xs my-auto">
                  <Image
                    src="/images/revenuehero-meeting-details.png"
                    alt="RevenueHero instant meeting details calendar widget"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 10. IMPACT & REFLECTION */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [05] · Outcomes
              </span>
              <h2 className="text-heading text-text-primary">
                CRO Results &amp; Takeaways
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  By restructuring the landing page around high-intent buyer pain points—transparent pricing, proof of CRM stability, and instant calendar booking—the redesigned experience achieved significant conversion uplift across organic and paid campaign traffic.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
                  <div className="p-4 bg-white border border-border-light rounded-sm">
                    <span className="text-2xl font-light text-text-primary block mb-1">42%</span>
                    <span className="text-xs text-text-secondary">Lift in Demo Requests</span>
                  </div>
                  <div className="p-4 bg-white border border-border-light rounded-sm">
                    <span className="text-2xl font-light text-text-primary block mb-1">1.8s</span>
                    <span className="text-xs text-text-secondary">Average Page Load Time</span>
                  </div>
                  <div className="p-4 bg-white border border-border-light rounded-sm">
                    <span className="text-2xl font-light text-text-primary block mb-1">0%</span>
                    <span className="text-xs text-text-secondary">Drop-off on Pricing Tier</span>
                  </div>
                </div>
                <p>
                  The redesign proved that B2B buyers respond eagerly to clarity, speed, and upfront pricing rather than convoluted lead qualification hurdles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. NEXT PROJECT LINK AT THE BOTTOM */}
        <section className="bg-bg-dark text-text-light py-20 md:py-28 border-t border-border-dark">
          <div className="container-max text-center">
            <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
              NEXT CASE STUDY
            </span>
            <Link
              href="/projects/idp-design-system-2026"
              className="inline-block group"
            >
              <h2 className="text-3xl md:text-5xl font-light hover:text-white transition-colors duration-300 mb-6 group-hover:translate-x-1 inline-flex items-center gap-4">
                <span>Enterprise Design System</span>
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
