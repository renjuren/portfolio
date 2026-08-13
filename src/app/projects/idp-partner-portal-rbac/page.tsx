"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AccessManagementCaseStudy() {
  return (
    <>
      <Header lightOnTransparent={true} />
      <main className="bg-bg-light min-h-screen">
        {/* 1. HERO (Dark Background Section) */}
        <section className="bg-bg-dark text-text-light pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-max">
            <ScrollReveal delay={0}>
              <span className="text-xs uppercase tracking-widest text-text-muted block mb-4 font-mono">
                ACCESS MANAGEMENT · 2025
              </span>
            </ScrollReveal>
            
            <h1 className="text-display-sm text-white mb-6 font-light max-w-4xl leading-tight">
              Access Management (RBAC)
            </h1>
            
            <p className="text-body-lg text-text-light/80 max-w-3xl mb-12 font-light leading-relaxed">
              Designing a role-based access system that lets external university partners safely manage who on their team can do what, without a support ticket.
            </p>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-border-dark mb-12">
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Client</span>
                <span className="text-base font-medium text-white">IDP Education</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Role</span>
                <span className="text-base font-medium text-white">Product Designer · UX Architect</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Year</span>
                <span className="text-base font-medium text-white">2025</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-text-muted uppercase tracking-wider mb-1 font-mono">Scope</span>
                <span className="text-base font-medium text-white">B2B Enterprise Portal</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-3 font-mono">Deliverables</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Information Architecture",
                  "Access-Control Modeling",
                  "Interaction Design",
                  "Wireframes"
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
            <div className="relative w-[1024px] max-w-full aspect-[1024/576] overflow-hidden">
              <Image
                src="/images/rbac-cover.png"
                alt="Case Study: Access Management RBAC Cover"
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
                [01] · Context
              </span>
              <h2 className="text-heading text-text-primary">
                Where this started
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  The IDP Partner Portal is a high-stakes B2B dashboard connecting IDP's internal campaign and account managers with external university partners. University partners leverage this platform to publish advertising campaigns, monitor student conversion metrics, allocate scholarships, and analyze portal activity.
                </p>
                <p>
                  As portal features expanded, university clients faced a significant administrative hurdle: they had no self-serve mechanism to manage who on their team could perform specific tasks. Every minor authorization change required raising a manual support ticket with IDP support staff. Additionally, legacy portal permissions were heavily advert-centric, with no clean abstractions representing real Admissions, Marketing, or Scholarship operations teams.
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
                [02] · Analysis
              </span>
              <h2 className="text-heading text-text-primary">
                Four failures of legacy access
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-12">
                
                {/* Failure 1 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-center">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm mr-3">01</span>
                    <span>No partner-side access management</span>
                  </h3>
                  <p>
                    Universities had no autonomy to add teammates or scope their access. Without self-service tooling, basic tasks like onboarding a new marketer or removing a departed administrator required IDP manual intervention, increasing operational friction and support load.
                  </p>
                </div>

                {/* Failure 2 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-center">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm mr-3">02</span>
                    <span>Advert-centric, incomplete permission model</span>
                  </h3>
                  <p>
                    The original permissions only covered advert creation and approval. As the portal grew to include scholarships and detailed conversion reports, there was no logical place to map access for admissions officers or marketing directors.
                  </p>
                </div>

                {/* Failure 3 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-center">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm mr-3">03</span>
                    <span>Over-provisioning risk</span>
                  </h3>
                  <p>
                    Because permissions were broad and loosely defined, administrators routinely granted full administrative access to avoid workflow interruptions. This created a significant security risk for sensitive student recruitment and performance data.
                  </p>
                </div>

                {/* Failure 4 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary flex items-center">
                    <span className="font-mono text-xs text-text-secondary bg-white px-2 py-0.5 border border-border-light rounded-sm mr-3">04</span>
                    <span>Asymmetry between internal and external needs</span>
                  </h3>
                  <p>
                    Internal IDP admins require dense data layouts, comprehensive audit logs, and complex configurations. External university admins, however, need guided workflows and simple plain-language labels. Attempting to solve both with a single user experience resulted in usability issues on both sides.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. THE CORE MODEL section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [03] · Access Architecture
              </span>
              <h2 className="text-heading text-text-primary">
                The core model
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p className="text-body-lg font-light text-text-primary">
                  I anchored the system on a single, clean architectural chain:
                </p>
                <div className="flex flex-wrap items-center gap-2 py-4 text-sm font-mono font-semibold text-text-primary">
                  <span className="bg-white border border-border-light px-3 py-1.5 rounded">User</span>
                  <span className="text-text-muted">→</span>
                  <span className="bg-bg-dark text-text-light px-3 py-1.5 rounded">Group</span>
                  <span className="text-text-muted">→</span>
                  <span className="bg-white border border-border-light px-3 py-1.5 rounded">Role</span>
                  <span className="text-text-muted">→</span>
                  <span className="bg-white border border-border-light px-3 py-1.5 rounded">Permission</span>
                </div>
                <p>
                  To keep access predictable and auditable, a <strong>User</strong> never receives direct permission grants. They can only inherit access by being placed inside a <strong>Group</strong>.
                </p>
                <p>
                  A <strong>Group</strong> maps to one or more governed <strong>Roles</strong>. Each <strong>Role</strong> packages a functional matrix of <strong>Permissions</strong> (defining actions like Create, View, Edit, Delete, or Export across portal services).
                </p>
                <p className="text-text-secondary italic">
                  Why this matters: university administrators can customize and manage Groups on their own, but they cannot author new Roles. Roles are governed centrally by IDP. This structural boundaries prevent privilege creep while granting partners the autonomy they need to orchestrate their teams. When users belong to multiple groups, their combined access is evaluated as the union of those groups' roles.
                </p>
                <div className="relative w-full aspect-[16/7] bg-white border border-border-light rounded overflow-hidden mt-6">
                  <Image
                    src="/images/rbac-core-model.png"
                    alt="The Access Model: User to Group to Role to Permission"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 768px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. KEY DESIGN DECISIONS section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [04] · Decisions
              </span>
              <h2 className="text-heading text-text-primary">
                Key design decisions
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-8">
                
                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">1. Access only via group membership</h4>
                  <p>
                    By enforcing user-to-group membership as the sole access path, we keep the audit story clean and traceable. Direct user-level overrides are disabled.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">2. Compose, don't author</h4>
                  <p>
                    University admins compose their custom groups from a list of predefined roles. The ability to create or edit the underlying roles is restricted to the partner interface, preventing arbitrary permission configurations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">3. Legible roles & permissions before selection</h4>
                  <p>
                    All group and role selection surfaces display the active roles directly in the table, with on-demand info tooltips exposing the precise permissions. Administrators understand exactly what privileges are being extended without needing to navigate away.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">4. Combined access preview and over-provisioning warnings</h4>
                  <p>
                    When adding users to multiple groups, the interface displays a combined union of their access. If a selected combination yields high-privilege administrative access, the system highlights it with a warning.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">5. Friction by design for destructive actions</h4>
                  <p>
                    High-impact changes like deleting custom groups or assigning administrative privileges trigger confirmation screens. These display the impact (such as lists of orphaned users) and require explicit confirmations.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary">6. Contextual UI asymmetry</h4>
                  <p>
                    Internal IDP administrators use a dense audit log interface designed for speed, while external university administrators use progressive, plain-language setup screens.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 7. FLOWS & SCREENS section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [05] · Interaction Flows
              </span>
              <h2 className="text-heading text-text-primary">
                Flows & screens
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-16">
                
                {/* Flow 1 */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Add a user — method first</h4>
                  <p>
                    Clicking "Add user" opens a modal prompting the administrator to choose an onboarding method: single user setup, bulk upload via CSV, or bulk invite via email. This fork streamlines the data-entry steps early in the process.
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded overflow-hidden mt-4">
                    <Image
                      src="/images/add-user-method-modal.png"
                      alt="Flow: Add User Method modal selection"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

                {/* Flow 2 */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Guided "What they do"</h4>
                  <p>
                    Instead of forcing administrators to navigate technical role descriptions, they select the operational areas a user works in and specify permissions using a compact area × action checkbox grid.
                  </p>
                  <div className="relative w-full aspect-[16/10] bg-white border border-border-light rounded overflow-hidden mt-4">
                    <Image
                      src="/images/area-action-matrix.png"
                      alt="Flow: Area and Action permissions checkbox matrix"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 768px"
                    />
                  </div>
                </div>

                {/* Flow 3 */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Recommended groups</h4>
                  <p>
                    Based on selected permission profiles, the system suggests pre-configured groups, labeling the "best match" alongside detail summaries of what access the recommended groups provide.
                  </p>
                </div>

                {/* Flow 4 */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Direct group selection</h4>
                  <p>
                    Power users can select groups directly from a data table displaying role details and tooltips, while selected choices display as dismissible visual chips.
                  </p>
                </div>

                {/* Flow 5 */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Create your own group</h4>
                  <p>
                    A step-by-step setup wizard (Name → Add Roles → Assign People → Review) allows administrators to compose custom teams. The final review screen previews combined privileges and flags potential over-provisioning issues.
                  </p>
                </div>

                {/* Flow 6 */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Groups list, edit, and delete</h4>
                  <p>
                    The management surface keeps system-governed roles locked under safe defaults while allowing custom groups to be edited or deleted. The deletion flow lists which users will lose access and requires reassignment details.
                  </p>
                </div>

                {/* Flow 7 */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Escape hatch for outsiders</h4>
                  <p>
                    For external contractors and freelancers, a scoped path bypasses group placement. This path restricts access to read-only reporting and flags these accounts for audit tracking.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 8. EDGE CASES section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [06] · Edge Cases
              </span>
              <h2 className="text-heading text-text-primary">
                Designing for edge cases
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  In B2B portal interfaces, complex setups fail at the boundaries. I mapped and addressed several critical edge cases during flow modeling:
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Abandoned setups</strong>: When custom group flows are left incomplete, drafted roles are cached locally to prevent data loss.</li>
                  <li><strong>Orphaned members</strong>: Group deletion flows check if team members would be left without any access. Admins must reassign these users to a new group before finalizing deletion.</li>
                  <li><strong>Privilege escalation warnings</strong>: If an admin combines roles that stack into high-privilege permissions, the review step highlights the security override.</li>
                  <li><strong>System vs. Custom boundaries</strong>: Core system roles are locked under read-only templates to prevent accidental degradation of portal security defaults.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. STATUS & NEXT section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [07] · Status
              </span>
              <h2 className="text-heading text-text-primary">
                Status & next
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  The access management architecture is in active development. The underlying system models and interaction flows are finalized, and engineering has begun implementing the core role and token checks.
                </p>
                <p>
                  Next steps include designing detailed audit trails for internal admins, finalizing the CSV parse schemas for bulk invitations, and conducting validation sessions with university managers to test the guided configuration workflows.
                </p>
                {/* 
                TODO: Post-launch Metrics Placeholders
                - Support tickets related to access configuration: [Metric]
                - Average onboarding time for new university portal users: [Metric]
                - Custom group creation success rate: [Metric]
                */}
              </div>
            </div>
          </div>
        </section>

        {/* 10. REFLECTION section */}
        <section className="container-max py-12 md:py-20 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2 font-mono">
                [08] · Reflection
              </span>
              <h2 className="text-heading text-text-primary">
                Reflection
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="text-body max-w-2xl space-y-6">
                <p>
                  Designing access control systems is always a balance between security and autonomy. In this system, drawing a clean architectural boundary (letting partners compose groups, but governing roles centrally) resolved the friction. University administrators gained speed and flexibility, while IDP maintained central authority over the actual capabilities available on the platform.
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
