import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { StatusDot } from "@/components/ui/SectionHeader";
import { contactLinks, profile, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alham Maesanjaya (FIANDEV) — email, GitHub, and LinkedIn for collaborations, research, and data or software work.",
  openGraph: {
    title: "Contact — FIANDEV",
    description: "Open channel for research, collaboration, and engineering work.",
  },
};

export default function ContactPage() {
  return (
    <section className="relative w-full px-5 py-20 md:px-12 lg:py-28">
      <div
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 size-96 bg-[#EDE7DA]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 left-1/4 -z-10 h-full w-4 bg-primary/10"
        aria-hidden="true"
      />

      {/* ── Masthead ─────────────────────────────────────────── */}
      <div className="mb-16 flex flex-col gap-8">
        <div className="flex items-center gap-3 border-b-2 border-on-surface pb-4 font-mono text-xs tracking-widest uppercase">
          <span className="font-bold text-primary">04 // TRANSMISSION</span>
          <span className="text-line" aria-hidden="true">
            /
          </span>
          <span className="text-secondary">OPEN CHANNEL</span>
          <span className="ml-auto hidden text-secondary md:inline">COORDINATES &amp; INQUIRIES</span>
        </div>

        <div className="pb-16">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-on-surface uppercase leading-[0.9] sm:text-7xl lg:text-[7.5rem]">
            LET&apos;S BUILD <br />
            <span className="relative inline-block text-primary">
              SOMETHING.
              <span className="absolute -bottom-2 left-0 h-[8px] w-full bg-primary" aria-hidden="true" />
            </span>
          </h1>
          <p className="max-w-2xl pt-8 text-lg leading-relaxed text-secondary sm:text-xl">
            Whether you want to discuss data analysis pipelines, distributed ledger protocols, or are
            looking for an informatics collaborator: my inbox is open.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 border border-line bg-surface-dim px-4 py-2.5 font-mono text-xs tracking-wider uppercase">
            <StatusDot pulse />
            <span className="text-secondary">CURRENT STATUS:</span>
            <span className="font-semibold text-primary">OPEN TO OPPORTUNITIES</span>
          </div>
        </div>
      </div>

      {/* ── Contact rows ─────────────────────────────────────── */}
      <div className="divide-y-2 divide-on-surface border-y-2 border-on-surface font-mono">
        {contactLinks.map((link) => (
          <a
            key={link.index}
            href={link.href}
            {...("external" in link && link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="row-dim group flex items-center justify-between px-2 py-6 hover:bg-surface-dim sm:py-8"
          >
            <span className="flex items-baseline gap-6 sm:gap-12">
              <span className="text-sm font-bold text-primary sm:text-base">{link.index}</span>
              <span className="font-display text-xl font-bold text-on-surface uppercase transition-colors group-hover:text-primary sm:text-3xl">
                {link.label}
              </span>
              <span className="hidden text-xs text-secondary md:inline">{link.handle}</span>
            </span>
            <span className="flex items-center gap-2 text-on-surface transition-transform group-hover:translate-x-2">
              <span className="hidden text-xs font-bold tracking-widest uppercase sm:inline">
                {link.action}
              </span>
              <Icon name={link.icon} className="size-4 lg:size-5" />
            </span>
          </a>
        ))}
      </div>

      {/* ── Colophon ─────────────────────────────────────────── */}
      <div className="mt-16 grid grid-cols-4 gap-6 pt-8 font-mono text-xs text-secondary md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <span className="mb-1 block font-bold text-on-surface uppercase">SYSTEM SPECIFICATION:</span>
          <p>
            Typeset in Space Grotesk and Geist. Built with zero cosmetic blur and strict grid
            geometry.
          </p>
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <span className="mb-1 block font-bold text-on-surface uppercase">COORDINATES:</span>
          <p>
            {site.location} · {site.timezone} · {site.domain}
          </p>
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <span className="mb-1 block font-bold text-on-surface uppercase">AUTHORSHIP:</span>
          <p>
            {profile.name} ({site.brand}) • Informatics {site.year}. Form follows function.
          </p>
        </div>
      </div>
    </section>
  );
}
