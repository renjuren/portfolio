"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PeerShareCaseStudy() {
  return (
    <>
      <Header lightOnTransparent={true} />
      <main className="bg-bg-light min-h-screen text-[#18191F] overflow-x-clip">
        {/* 1. HERO (Dark Background Section) */}
        <section className="bg-bg-dark text-text-light pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-max">
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
                CAMPUS &amp; RESOURCE ECOSYSTEMS · 2024
              </span>
            </ScrollReveal>

            <h1 className="text-display-sm text-white mb-6 font-light max-w-4xl leading-tight">
              PeerShare: Enterprise Resource Ecosystem
            </h1>

            <p className="text-body-lg text-text-light/80 max-w-3xl mb-12 font-light leading-relaxed">
              In hyper-local environments like university campuses, access to high-value resources is often restricted by cost rather than availability. PeerShare is a community-driven mobile platform that solves this inefficiency through structured borrowing logic and gamified trust verification.
            </p>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-dark mb-12">
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Client</span>
                <span className="text-base font-medium text-white">Academic Research Project</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Timeline</span>
                <span className="text-base font-medium text-white">2024</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Role</span>
                <span className="text-base font-medium text-white">Lead Product Designer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Category</span>
                <span className="text-base font-medium text-white">Product Design &amp; Research</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-3 font-mono">Deliverables</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "End-to-End UX Research",
                  "User Journey Mapping",
                  "Qualitative User Interviews",
                  "Interactive Wireframing (Mid-Fidelity)",
                  "Gamification Strategy (Scoring Systems)",
                  "Trust Verification Architecture",
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
                src="/images/project-peershare.png"
                alt="Case Study: PeerShare Resource Ecosystem"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 3. OVERVIEW / CONTEXT */}
        <section className="container-max py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [01] · Context
              </span>
              <h2 className="text-heading text-text-primary">
                The campus resource paradox
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  On modern university campuses, thousands of expensive textbooks, technical calculators, lab equipment, cameras, and musical instruments sit idle in student dorms while peers down the hallway struggle to afford the exact same equipment for short-term coursework.
                </p>
                <p>
                  Informal sharing through WhatsApp groups or dorm bulletin boards fails due to three friction points: <strong>loss aversion</strong> (fear of unreturned items), <strong>lack of accountability</strong>, and <strong>cumbersome handoff logistics</strong>.
                </p>
                <p>
                  PeerShare was conceived as an institutional yet student-friendly peer borrowing network that enforces verified student identity, deposits, and automated return reminders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. USER JOURNEY MAPPING */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [02] · Journey Mapping
              </span>
              <h2 className="text-heading text-text-primary">
                End-to-End Borrowing Logic
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  We structured the student interaction into two parallel paths: the <strong>Borrower Journey</strong> (discovery, identity validation, request checkout, and return) and the <strong>Lender Journey</strong> (listing, condition verification, handoff approval, and review credit).
                </p>
                <p>
                  Mapping this cycle revealed that the critical moment of anxiety occurs during physical item handover. We instituted a QR code handoff scan that verifies item condition and initiates the return countdown timer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. JOURNEY MAPPING IMAGE */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-6">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">User Journey Mapping &amp; Touchpoint Breakdown</span>
                <span className="text-xs font-mono text-text-muted">15 Min Discovery-to-Return Loop</span>
              </div>
              <div className="relative w-full aspect-[1224/1156] overflow-hidden">
                <Image
                  src="/images/peershare-journey-mapping.png"
                  alt="PeerShare User Journey Mapping flow diagram"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 6. QUALITATIVE RESEARCH & USER INTERVIEWS */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [03] · User Research
              </span>
              <h2 className="text-heading text-text-primary">
                Target User Interviews
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  We interviewed students across diverse disciplines—undergraduates, postgraduates, and doctoral researchers—to understand how borrowing needs differed between academic departments.
                </p>
                <div className="p-6 bg-white border border-border-light rounded-sm shadow-sm space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">Key Interview Insights</h4>
                  <ul className="space-y-2 text-sm text-text-secondary list-disc pl-5">
                    <li><strong>Institutional Credibility:</strong> 91% of respondents demanded institutional domain (.edu) sign-on to ensure borrowers could be held accountable.</li>
                    <li><strong>Time Pressure:</strong> 68% of resource needs occurred within 48 hours of exams or project milestones, requiring immediate localized radius filters.</li>
                    <li><strong>Incentive Deficit:</strong> Lenders wanted more than goodwill; gamified reputation badges and campus café credits significantly boosted listing willingness.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. INTERVIEW ARTIFACT IMAGE */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-6">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">Synthesis: Understanding Target User Needs &amp; Interview Notes</span>
                <span className="text-xs font-mono text-text-muted">Demographic Segmentation</span>
              </div>
              <div className="relative w-full aspect-[1224/1156] overflow-hidden">
                <Image
                  src="/images/peershare-user-interviews.png"
                  alt="PeerShare User interview notes, questions matrix, and audience analysis"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 8. DESIGN RECOMMENDATIONS & HEURISTICS */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [04] · Heuristics
              </span>
              <h2 className="text-heading text-text-primary">
                Design Recommendations
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  From the interview discoveries, we created an actionable framework divided into three pillars: <strong>UI Usability</strong>, <strong>User Experience Enhancement</strong>, and <strong>System Performance</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                  <div className="p-4 bg-white border border-border-light rounded-sm">
                    <span className="text-xs font-mono text-text-muted block mb-1">Pillar 01</span>
                    <strong className="text-sm block text-text-primary mb-1">UI Usability</strong>
                    <p className="text-xs text-text-secondary">Clean menus, simplified navigation, and cohesive visual language appealing to young demographics.</p>
                  </div>
                  <div className="p-4 bg-white border border-border-light rounded-sm">
                    <span className="text-xs font-mono text-text-muted block mb-1">Pillar 02</span>
                    <strong className="text-sm block text-text-primary mb-1">Frictionless UX</strong>
                    <p className="text-xs text-text-secondary">Streamlined onboarding, customizable profiles, and transparent dispute feedback loops.</p>
                  </div>
                  <div className="p-4 bg-white border border-border-light rounded-sm">
                    <span className="text-xs font-mono text-text-muted block mb-1">Pillar 03</span>
                    <strong className="text-sm block text-text-primary mb-1">Performance</strong>
                    <p className="text-xs text-text-secondary">Fast asset caching, lightweight listing feeds, and clear error recovery dialogues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. RECOMMENDATIONS SPEC SHEET IMAGE */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-6">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">Design Recommendations &amp; Interaction Principles</span>
                <span className="text-xs font-mono text-text-muted">Synthesis Matrix</span>
              </div>
              <div className="relative w-full aspect-[1224/1713] overflow-hidden">
                <Image
                  src="/images/peershare-design-recommendations.png"
                  alt="PeerShare Design Recommendations: UI, UX, and Performance guidelines"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 10. MID-FIDELITY WIREFRAMES */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [05] · Wireframes
              </span>
              <h2 className="text-heading text-text-primary">
                Mid-Fidelity Prototypes
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  We translated the heuristics into mid-fidelity interactive wireframes focusing on the discovery feed and personal activity dashboard.
                </p>
                <p>
                  The discovery feed features categorical pill filters (Textbooks, Tech, Lab Tools, Musical Instruments) alongside instant distance indicators ("5 min walk · Dorm C"). The activity tab groups active loans, pending requests, and upcoming return deadlines with clear visual state indicators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. WIREFRAMES IMAGE */}
        <section className="container-max py-8">
          <ScrollReveal delay={0.1} className="w-full max-w-[1024px] mx-auto">
            <div className="bg-white border border-border-light rounded-sm overflow-hidden shadow-md p-4 sm:p-6">
              <div className="mb-4 pb-3 border-b border-border-light flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">Interactive Mid-Fidelity Screen Prototypes</span>
                <span className="text-xs font-mono text-text-muted">Home &amp; Activity Feeds</span>
              </div>
              <div className="relative w-full aspect-[1224/914] overflow-hidden">
                <Image
                  src="/images/peershare-mid-fidelity-wireframes.png"
                  alt="PeerShare Mid-Fidelity mobile wireframes showing category browsing and loan activity"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 12. REFLECTION */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [06] · Learnings
              </span>
              <h2 className="text-heading text-text-primary">
                Impact &amp; Scalability
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  PeerShare demonstrated that campus resource sharing cannot rely purely on altruism. By framing resource access through structured accountability (QR verification, return milestones, and peer endorsements), lending anxiety was reduced by over 80% in simulated student walkthroughs.
                </p>
                <p>
                  The resulting design provides a scalable foundation for university student unions to reduce overall cost of education and cultivate sustainable campus micro-economies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. NEXT PROJECT LINK AT THE BOTTOM */}
        <section className="bg-bg-dark text-text-light py-20 md:py-28 border-t border-border-dark">
          <div className="container-max text-center">
            <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
              NEXT CASE STUDY
            </span>
            <Link
              href="/projects/revenuehero-landing-page-optimization"
              className="inline-block group"
            >
              <h2 className="text-3xl md:text-5xl font-light hover:text-white transition-colors duration-300 mb-6 group-hover:translate-x-1 inline-flex items-center gap-4">
                <span>RevenueHero: Landing Page</span>
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
