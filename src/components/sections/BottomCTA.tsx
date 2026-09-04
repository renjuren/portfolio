export default function BottomCTA() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-max">
        <div className="max-w-[800px]">
          {/* Small section label */}
          <div className="text-[13px] uppercase tracking-[0.1em] text-text-muted font-medium mb-8">
            [04] · WORK WITH ME
          </div>

          {/* Primary statement */}
          <h2 className="text-[32px] md:text-[44px] text-text-primary font-normal leading-[1.15] tracking-tight mb-8">
            Looking for enterprise SaaS teams where design decisions carry weight
            and design systems are treated as products.
          </h2>

          {/* Sub-statement */}
          <p className="text-[18px] md:text-[20px] text-text-secondary leading-[1.5] mb-8">
            If that sounds like your team, I&apos;d like to hear from you.
          </p>

          {/* Contact line */}
          <div>
            <a
              href="mailto:renjujoseph6@outlook.com"
              className="text-[17px] text-text-primary hover:underline underline-offset-4"
            >
              renjujoseph6@outlook.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
