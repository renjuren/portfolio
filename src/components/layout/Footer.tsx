"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { footerData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-bg-dark text-text-light">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo Column */}
          <ScrollReveal delay={0}>
            <div>
              <Link
                href="/"
                className="text-2xl font-semibold tracking-tight block mb-6"
              >
                RENJU JOSEPH.
              </Link>
              <p className="text-body text-text-muted max-w-xs">
                Senior Product Designer building enterprise SaaS for
                data-dense, complex workflows.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Column */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="text-label text-text-muted mb-6">Contact</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="block text-sm text-text-light/80 hover:text-white transition-colors duration-300"
                >
                  {footerData.contact.email}
                </a>
                <p className="text-sm text-text-light/60">
                  {footerData.contact.address}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation Column */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="text-label text-text-muted mb-6">Navigation</h4>
              <div className="space-y-3">
                {footerData.navigation.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-text-light/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Social Column (replaced Working Hours) */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="text-label text-text-muted mb-6">Social</h4>
              <div className="space-y-3">
                {footerData.social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-text-light/80 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {currentYear} Renju Joseph. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:renjujoseph6@outlook.com"
              className="text-xs text-text-muted hover:text-text-light transition-colors duration-300"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
