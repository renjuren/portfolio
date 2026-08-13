"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NetroconCaseStudy() {
  return (
    <>
      <Header lightOnTransparent={true} />
      <main className="bg-bg-light min-h-screen">
        {/* 1. HERO (Dark Background Section) */}
        <section className="bg-bg-dark text-text-light pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-max">
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
                AGENCY PLATFORM · 2022
              </span>
            </ScrollReveal>
            
            <h1 className="text-display-sm text-white mb-6 font-light max-w-4xl leading-tight">
              Netrocon Digital
            </h1>
            
            <p className="text-body-lg text-text-light/80 max-w-3xl mb-12 font-light leading-relaxed">
              Redesigning a multi-vertical digital agency platform to let four distinct service branches speak to different audiences under a single, cohesive visual system.
            </p>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-dark mb-12">
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Role</span>
                <span className="text-base font-medium text-white">UX Designer · Sole Strategist & Researcher</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Timeline</span>
                <span className="text-base font-medium text-white">2 Weeks (Q2 2022)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Results</span>
                <span className="text-base font-medium text-white">+48% Conversion Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Live Site</span>
                <Link
                  href="https://netrocon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white hover:text-text-muted underline decoration-1 underline-offset-4 transition-colors"
                >
                  netrocon.com
                </Link>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-3 font-mono">Deliverables</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Brand Strategy",
                  "Web Design",
                  "UX Research",
                  "Design System"
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

        {/* 2. COVER IMAGE */}
        <section className="container-max py-12 md:py-16 -mt-10 md:-mt-16 flex justify-center">
          <ScrollReveal delay={0.2}>
            <div className="relative w-[1024px] max-w-full aspect-[1024/576] overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/images/netrocon-home.png"
                alt="Case Study: Netrocon Digital Agency Redesign"
                fill
                priority
                className="object-cover"
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
                [01] · Context
              </span>
              <h2 className="text-heading text-text-primary">
                Four agencies, one roof
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Netrocon Digital is not a standard single-service agency. Instead, it operates as four distinct micro-agencies bundled under one umbrella:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li><strong>Marketing:</strong> Direct response performance marketing, PPC, SEO, and content.</li>
                  <li><strong>Branding:</strong> Identity design, brand strategy, and storytelling.</li>
                  <li><strong>Studio (ND Studios):</strong> In-house eCommerce product photography and visual assets.</li>
                  <li><strong>Tech Hiring:</strong> Global tech staffing and offshore recruitment solutions.</li>
                </ul>
                <p>
                  Each vertical targets a completely different buyer. A nonprofit director looking for marketing has different needs than a DTC founder looking for photography or a CTO needing offshore developers. The challenge was to design a single platform that establishes authority for all four departments without reading as disconnected microsites or diluting Netrocon's core brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. STRATEGY section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [02] · Strategy
              </span>
              <h2 className="text-heading text-text-primary">
                Positioning wedge
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p className="text-body-lg font-light text-text-primary">
                  "Movement, Cultural, and Social Purpose Marketing"
                </p>
                <p>
                  Boutique businesses, startups, and non-profits cannot compete with enterprise ad budgets. My positioning strategy centered Netrocon as the champion of these purpose-led brands. Instead of outspending, Netrocon helps them out-storytell. By aligning campaigns with values their audiences already believe in, they build organic reach and loyalty.
                </p>
                <p>
                  This audience positioning was key. The site explicitly targets small-to-medium businesses and non-profits, but borrows high-level trust signals (grayscale logos, pricing transparency, and guarantees) to establish immediate enterprise-grade credibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ARCHITECTURE section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [03] · Architecture
              </span>
              <h2 className="text-heading text-text-primary">
                Repeatable flow structure
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  To keep the development scope lean and the user experience predictable, we established a single, highly repeatable page template structure across all four service verticals:
                </p>
                <div className="bg-white border border-border-light p-6 rounded-sm space-y-4 font-mono text-xs text-text-primary">
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-dark text-white px-2 py-0.5 rounded-sm">01</span>
                    <span>Hero Section (Headline with red Highlighter accent + CTAs)</span>
                  </div>
                  <div className="text-text-muted pl-8">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-dark text-white px-2 py-0.5 rounded-sm">02</span>
                    <span>Grayscale Client Trust Logo Row</span>
                  </div>
                  <div className="text-text-muted pl-8">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-dark text-white px-2 py-0.5 rounded-sm">03</span>
                    <span>Intro / Value Proposition narrative block</span>
                  </div>
                  <div className="text-text-muted pl-8">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-dark text-white px-2 py-0.5 rounded-sm">04</span>
                    <span>Benefit / Service details blocks</span>
                  </div>
                  <div className="text-text-muted pl-8">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-dark text-white px-2 py-0.5 rounded-sm">05</span>
                    <span>Tiered SaaS-style Pricing Comparison Grid</span>
                  </div>
                  <div className="text-text-muted pl-8">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-dark text-white px-2 py-0.5 rounded-sm">06</span>
                    <span>Our Work Process (3-step visual checklist)</span>
                  </div>
                  <div className="text-text-muted pl-8">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-dark text-white px-2 py-0.5 rounded-sm">07</span>
                    <span>Testimonials Block & footer CTA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DESIGN SYSTEM section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [04] · Design System
              </span>
              <h2 className="text-heading text-text-primary">
                High contrast editorial feel
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-12">
                
                {/* 1. Palette & Typography */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-primary">Colors & Typography</h3>
                  <p>
                    The visual styling relies on Helvetica and Arial system stack layouts, emphasizing large, heavy headlines. The color tokens are stripped back to absolute core values:
                  </p>
                  <div className="grid grid-cols-4 gap-4 py-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-black border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#000000</span>
                      <span className="text-[10px] text-text-muted">Primary</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-white border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#FFFFFF</span>
                      <span className="text-[10px] text-text-muted">Background</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-[#FB1D24] border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#FB1D24</span>
                      <span className="text-[10px] text-text-muted">Highlighter Red</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-[#212529] border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#212529</span>
                      <span className="text-[10px] text-text-muted">Body Text</span>
                    </div>
                  </div>
                </div>

                {/* 2. Signature highlighter motif */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-primary">Signature UI highlighter</h3>
                  <p>
                    On every single page, a key phrase in the main headline sits inside a solid red rectangle with white text. This simulates a high-impact highlighter pen. This visual device instantly ties the four different agency divisions into a single brand:
                  </p>
                  
                  {/* Highlighter visual mockup */}
                  <div className="bg-bg-dark p-8 rounded-sm text-center border border-border-dark my-4">
                    <h4 className="text-2xl md:text-3xl font-bold text-white max-w-md mx-auto leading-tight">
                      Helping Noble-Minded Brands <span className="bg-[#FB1D24] text-white px-2 py-0.5 inline-block">Survive & Thrive</span>
                    </h4>
                  </div>
                </div>

                {/* 3. Section Rhythm & Photography */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-primary">Alternating rhythms & color pop</h3>
                  <p>
                    Long scroll layouts alternate between dark and light full-bleed sections, divided by a thin red divider strip to pace reading. Photography remains completely desaturated, letting the solid red highlighter block provide the sole color accent on the screen.
                  </p>
                </div>

                {/* 4. Trust bar and Pricing */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-primary">Trust bars & tiered pricing</h3>
                  <p>
                    A grayscale trust logo grid (reusing logos from clear credibility partners like Asurion, Blackstone, and Broadridge) anchors the top of page views. Tiered SaaS-style pricing matrices on marketing, branding, and studios qualify leads directly on the page, bypassing lengthy sales cycles.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 7. WALKTHROUGH section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [05] · Page Walkthrough
              </span>
              <h2 className="text-heading text-text-primary">
                The core screens
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-16">
                
                {/* Home */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Homepage</h3>
                  <p>
                    The entryway establishes the core value statement: "Helping Noble-Minded Brands Survive & Thrive". Below the fold, a clean 4-card grid introduces each of the micro-agencies, leading into value testimonials and the different section CTA.
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded-sm overflow-hidden mt-4 shadow-sm">
                    <Image
                      src="/images/netrocon-home.png"
                      alt="Netrocon Digital Homepage Redesign Screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Marketing Vertical</h3>
                  <p>
                    Focuses on cost-effective digital marketing for Education, Healthcare, eCommerce, and Non-Profits. Details PPC, Content, and SEO plans alongside the core purpose-marketing strategy and a 3-tier pricing comparison table.
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded-sm overflow-hidden mt-4 shadow-sm">
                    <Image
                      src="/images/netrocon-marketing.png"
                      alt="Netrocon Digital Marketing Service Page Screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

                {/* Branding */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Branding Vertical</h3>
                  <p>
                    Anchored on the statistics-driven value prop: 89% of shoppers stay loyal to values-aligned brands. It documents stand-out strategies, visual identity packages, and displays a transparent 4-tier pricing model.
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded-sm overflow-hidden mt-4 shadow-sm">
                    <Image
                      src="/images/netrocon-branding.png"
                      alt="Netrocon Digital Branding Service Page Screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

                {/* Studio */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">ND Studios</h3>
                  <p>
                    Presents high-fidelity product imagery packages. Highlights benefits like reducing return rates and boosting sales, offering structured photography bundles (Amazon Bundle, Bulk On White, A La Carte).
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded-sm overflow-hidden mt-4 shadow-sm">
                    <Image
                      src="/images/netrocon-studio.png"
                      alt="Netrocon Digital ND Studios Page Screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

                {/* Tech Hiring */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Tech Hiring Solutions</h3>
                  <p>
                    Outlines offshore developer recruiting. Promotes up to one-third US developer cost savings, high retention metrics, a zero-risk 2-week guarantee, and a simple 3-step placement workflow.
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded-sm overflow-hidden mt-4 shadow-sm">
                    <Image
                      src="/images/netrocon-offshore-hiring.png"
                      alt="Netrocon Digital Tech Talent Hiring Page Screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Contact & Routing</h3>
                  <p>
                    Includes a custom dropdown selector to route incoming business requests directly to the correct department (Marketing, Branding, Studio, or staffing). Lists coordinates for their three offices and publishes an anti-fraud security notice.
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded-sm overflow-hidden mt-4 shadow-sm">
                    <Image
                      src="/images/netrocon-contact.png"
                      alt="Netrocon Digital Contact Page Screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 8. MOBILE & RESPONSIVE section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [06] · Responsive Design
              </span>
              <h2 className="text-heading text-text-primary">
                Responsive adaptation
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  To accommodate mobile visitors, the large, bold headlines stack vertically on small screens, shifting from horizontal layouts into vertical streams above desaturated image backgrounds. 
                </p>
                <p>
                  The desktop navigation bar collapses into a touch-target hamburger menu that slides out to present navigation links. Pricing tables adapt into swipeable cards so users can compare packages.
                </p>
                
                {/* Mobile screenshots row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                  <div className="relative aspect-[375/812] bg-white border border-border-light rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src="/images/netrocon-home-mobile.png"
                      alt="Netrocon Home Mobile View Screenshot"
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>
                  <div className="relative aspect-[375/812] bg-white border border-border-light rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src="/images/netrocon-marketing-mobile.png"
                      alt="Netrocon Marketing Mobile View Screenshot"
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>
                  <div className="relative aspect-[375/812] bg-white border border-border-light rounded-sm overflow-hidden shadow-sm hidden sm:block">
                    <Image
                      src="/images/netrocon-branding-mobile.png"
                      alt="Netrocon Branding Mobile View Screenshot"
                      fill
                      className="object-cover"
                      sizes="250px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. RETROSPECTIVE / REFLECTION section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [07] · Reflection
              </span>
              <h2 className="text-heading text-text-primary">
                Designer notes
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Structuring four distinct verticals under a single domain demanded a strict template layout. Designing the verticals around a single repeatable grid template ensured we could build, ship, and test the entire site in a tight two-week window.
                </p>
                <p>
                  The red highlighter visual motif proved to be the magic component that unified the pages. It bound visual photography portfolios, complex staffing forms, and SaaS pricing grids into a single, cohesive brand voice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. NEXT PROJECT LINK AT THE BOTTOM */}
        <section className="bg-bg-dark text-text-light py-20 md:py-28 border-t border-border-dark">
          <div className="container-max text-center">
            <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
              NEXT CASE STUDY
            </span>
            <Link
              href="/projects/idp-partner-portal-rbac"
              className="inline-block group"
            >
              <h2 className="text-3xl md:text-5xl font-light hover:text-white transition-colors duration-300 mb-6 group-hover:translate-x-1 inline-flex items-center gap-4">
                <span>Access Management (RBAC)</span>
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
