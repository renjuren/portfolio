"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Helper component for visual dashed-border placeholders
function ImagePlaceholder({
  title,
  aspect = "aspect-[16/10]",
  description
}: {
  title: string;
  aspect?: string;
  description?: string;
}) {
  return (
    <div className={`relative w-full ${aspect} bg-bg-light border border-dashed border-border-light rounded-sm flex flex-col items-center justify-center p-6 text-center shadow-sm transition-all duration-300 hover:border-text-primary/30`}>
      <svg className="w-8 h-8 text-text-muted mb-3" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <span className="text-sm font-medium text-text-primary mb-1">{title}</span>
      {description && <span className="text-xs text-text-muted max-w-sm mt-1">{description}</span>}
    </div>
  );
}

export default function BindrAICaseStudy() {
  return (
    <>
      <Header lightOnTransparent={true} />
      <main className="bg-bg-light min-h-screen text-[#18191F]">
        
        {/* 1. HERO (Dark Background Section) */}
        <section className="bg-bg-dark text-text-light pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-max">
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
                PRODUCT ARCHITECTURE · 2020
              </span>
            </ScrollReveal>
            
            <h1 className="text-display-sm text-white mb-6 font-light max-w-4xl leading-tight">
              Bindr.AI
            </h1>
            
            <p className="text-body-lg text-text-light/80 max-w-3xl mb-12 font-light leading-relaxed">
              Designing an all-in, not all-in-one operations hub that connects SaaS marketplaces and workflows for small business operators.
            </p>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-dark mb-12">
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Role</span>
                <span className="text-base font-medium text-white">Freelance Product Designer · Researcher & Designer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Timeline</span>
                <span className="text-base font-medium text-white">4 Weeks (2020)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Results</span>
                <span className="text-base font-medium text-white">10,000+ Conversions (1 Month)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Live Site</span>
                <Link
                  href="https://bindr.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white hover:text-text-muted underline decoration-1 underline-offset-4 transition-colors"
                >
                  bindr.ai
                </Link>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-3 font-mono">Deliverables</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product Design",
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

        {/* 2. FEATURED COVER IMAGE PLACEHOLDER */}
        <section className="container-max py-12 md:py-16 -mt-10 md:-mt-16 flex justify-center">
          <ScrollReveal delay={0.2} className="w-[1024px] max-w-full">
            <ImagePlaceholder
              title="hero-dashboard.png"
              aspect="aspect-[16/10]"
              description="Homepage hero dashboard mockup displaying task approval workflows, a people directory sidebar navigation, and a Watch a Demo CTA trigger overlay."
            />
          </ScrollReveal>
        </section>

        {/* 3. OVERVIEW Section */}
        <section className="container-max py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [01] · Overview
              </span>
              <h2 className="text-heading text-text-primary">
                All-in, not all-in-one
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Bindr.AI is a small-business operations platform designed to coordinate rather than replace existing applications. The platform acts as a unified marketplace and single sign-on layer, consolidating timesheets, task tracking, employee onboarding, digital forms, health kiosks, expenses, time-off, and payroll into one dashboard.
                </p>
                <p>
                  Our primary users are small business operators in healthcare, construction, warehouses, restaurants, and professional offices who are overwhelmed by managing multiple disconnected software utilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE PROBLEM Section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [02] · The Problem
              </span>
              <h2 className="text-heading text-text-primary">
                Software management fatigue
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Small business owners were spending more hours configuring and troubleshooting their software tools than running their operations. Fragile custom integrations, manual re-entry of employee profiles, and lack of central access created administrative backlogs.
                </p>
                <div className="border-l-2 border-[#F14C52] pl-6 my-6 italic text-text-secondary space-y-3">
                  <p>
                    "We spent hours handling trivial administrative logins instead of focusing on team performance."
                  </p>
                  <p>
                    "Our digital checklists grew, but our tools remained disconnected, draining our team's optimism."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. APPROACH Section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [03] · Design Process
              </span>
              <h2 className="text-heading text-text-primary">
                Unifying the flow
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  We structured the UX strategy around a single sign-on dashboard backed by an app marketplace. By letting businesses start with one simple utility (like timesheets) and add custom widgets (like HR onboarding) when ready, we removed the hurdle of major system updates.
                </p>
                <p>
                  To communicate this transformation on the landing page, we mapped a direct before-and-after interactive comparison table, illustrating how consolidating fragmented apps clears admin load.
                </p>
                <div className="pt-6">
                  <ImagePlaceholder
                    title="before-after.png"
                    aspect="aspect-[16/9]"
                    description="Before and after transformation table mapping legacy app overhead against Bindr.AI's unified workflow."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DESIGN SYSTEM Section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [04] · Design System
              </span>
              <h2 className="text-heading text-text-primary">
                The visual core
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-12">
                
                {/* Palette */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-primary">Palette Specimen</h3>
                  <div className="grid grid-cols-4 gap-4 py-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-[#F14C52] border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#F14C52</span>
                      <span className="text-[10px] text-text-muted">Coral Accent</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-[#18191F] border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#18191F</span>
                      <span className="text-[10px] text-text-muted">Charcoal Header</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-white border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#FFFFFF</span>
                      <span className="text-[10px] text-text-muted">Canvas White</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-sm bg-[#F0F0F0] border border-border-light mb-2"></div>
                      <span className="text-xs font-mono">#F0F0F0</span>
                      <span className="text-[10px] text-text-muted">Gray Section</span>
                    </div>
                  </div>
                </div>

                {/* Typography and Buttons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-primary">Typography & Buttons</h3>
                  <p>
                    Typography utilizes Poppins, emphasizing structured weight scales and loose line heights. Button UI components are strictly pill-shaped (50px borders) to create an editorial SaaS look:
                  </p>
                  
                  {/* Button visual specimens */}
                  <div className="flex flex-wrap gap-4 py-4 items-center">
                    <button className="bg-[#F14C52] text-white text-xs font-bold px-6 py-3 rounded-full cursor-default">
                      Primary Coral
                    </button>
                    <button className="bg-[#F0F0F0] text-[#18191F] text-xs font-bold px-6 py-3 rounded-full cursor-default">
                      Secondary Gray
                    </button>
                    <button className="border border-[#F14C52] text-[#F14C52] text-xs font-bold px-6 py-3 rounded-full cursor-default inline-flex items-center gap-2">
                      <span>Outline Play</span>
                      <span className="text-[10px]">▶</span>
                    </button>
                  </div>
                </div>

                {/* Layout and Icons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-primary">Grid & Illustrations</h3>
                  <p>
                    Worksheets and options utilize soft rounded cards with drop shadows. Standard icons sit inside light coral or pink tint chips to anchor scannable grids. The marketing narrative uses flat vector illustrations in the brand palette, contrasted with real screenshots for technical workflows.
                  </p>
                  <div className="pt-4">
                    <ImagePlaceholder
                      title="about-illustration.png"
                      aspect="aspect-[16/10]"
                      description="About page illustration of founders setting up operations, in the coral and gray brand color scheme."
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 7. SCEREENS Section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [05] · Interface Walkthrough
              </span>
              <h2 className="text-heading text-text-primary">
                Key screens
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-16">
                
                {/* Screen 1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Workflows & Tasks</h3>
                  <p>
                    The home dashboard organizes open tasks, pending document approvals, and timesheets into a single feed. Sidebar shortcuts group HR, organizational charts, and payroll tools.
                  </p>
                  <div className="pt-2">
                    <ImagePlaceholder
                      title="product-task-dashboard.png"
                      aspect="aspect-[16/10]"
                      description="In-app dashboard workspace showing timesheets approvals, member onboarding tasks, and team checklist status."
                    />
                  </div>
                </div>

                {/* Screen 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">How it works</h3>
                  <p>
                    A step-by-step interactive accordion walks operators through adding team members, setting up direct single sign-ons, selecting marketplace widgets, and assigning delegate duties.
                  </p>
                  <div className="pt-2">
                    <ImagePlaceholder
                      title="how-it-works-accordion.png"
                      aspect="aspect-[16/10]"
                      description="Step-by-step operational setup accordion showing the Single Sign-On configuration panel in an expanded view."
                    />
                  </div>
                </div>

                {/* Screen 3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">App Marketplace</h3>
                  <p>
                    The application marketplace lists widgets for timesheet tracking, e-signatures, safety checkins, expense logs, and payroll calculations.
                  </p>
                  <div className="pt-2">
                    <ImagePlaceholder
                      title="marketplace-grid.png"
                      aspect="aspect-[16/10]"
                      description="Grid view of the Bindr.AI app store, displaying cards and pink background icons for various operations tools."
                    />
                  </div>
                </div>

                {/* Screen 4 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Data Security</h3>
                  <p>
                    A dedicated security grid details advanced client data protection, role access authorization, and secure backups, instilling startup confidence.
                  </p>
                  <div className="pt-2">
                    <ImagePlaceholder
                      title="security-trust.png"
                      aspect="aspect-[16/9]"
                      description="Data protection and privacy panel displaying data encryption, secure login protocols, and safety badges."
                    />
                  </div>
                </div>

                {/* Screen 5 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Goals & OKRs</h3>
                  <p>
                    High-level trackers allow managers to publish team goals and lock sensitive performance reviews behind security scopes.
                  </p>
                  <div className="pt-2">
                    <ImagePlaceholder
                      title="product-goals.png"
                      aspect="aspect-[16/10]"
                      description="Goals and objectives tracker dashboard displaying OKR indicators and lock overlays on sensitive performance metrics."
                    />
                  </div>
                </div>

                {/* Screen 6 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Transparent Pricing</h3>
                  <p>
                    A clean 3-tier matrix outlines pricing options, letting businesses choose between the free tier, core utilities, or customized developer additions.
                  </p>
                  <div className="pt-2">
                    <ImagePlaceholder
                      title="pricing-tiers.png"
                      aspect="aspect-[16/10]"
                      description="Transparent subscription matrices displaying details and costs for Basic, Essential, and Advanced tiers."
                    />
                  </div>
                </div>

                {/* Screen 7 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-text-primary">Mobile Experience</h3>
                  <p>
                    Presents responsive screens for on-the-go managers. Timesheet details, onboarding tasks, and company structures align automatically to mobile dimensions.
                  </p>
                  <div className="pt-2">
                    <ImagePlaceholder
                      title="mobile-screens.png"
                      aspect="aspect-[16/10]"
                      description="Timesheets tracking, organization structure, and employee dashboard screens adapted to stacked smartphone interfaces."
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 8. REFLECTION Section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [06] · Reflection
              </span>
              <h2 className="text-heading text-text-primary">
                Outcomes & learnings
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  The redesign yielded over 10,000 lead conversions in the first month following rollout. By packaging diverse, complex operations into a modular marketplace, we lowered user onboarding friction.
                </p>
                <p>
                  <strong>Visual System Autonomy:</strong> The unified visual system allowed marketing visuals and application dashboards to share a single styling core. New widgets added by the team never felt bolted on.
                </p>
                <p className="text-text-secondary italic">
                  Retrospective: If redesigning today, I would increase content density in the core dashboard to reduce scroll depth and streamline the vector illustrations to match the styling of the operational grids.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. NEXT PROJECT LINK AT THE BOTTOM */}
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
