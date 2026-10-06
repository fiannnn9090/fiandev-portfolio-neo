import type { Metadata } from "next";
import { CertificateCard } from "@/components/CertificateCard";
import { certificates } from "@/lib/certificates";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Verified coursework of Alham Maesanjaya — IBM Data Science, Google Project Management, and Google AI, completed on Coursera.",
  openGraph: {
    title: "Certificates — FIANDEV",
    description: "Certifications in data, project management, and AI.",
  },
};

export default function CertificatesPage() {
  return (
    <section
      className="w-full px-5 py-20 md:px-12 lg:py-28"
      aria-labelledby="certificates-heading"
    >
      {/* page header */}
      <div className="mb-12 flex flex-col gap-6 border-b-2 border-on-surface pb-8 md:mb-16">
        <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest text-primary">
          05 // ARCHIVE <span className="text-line" aria-hidden="true">/</span>
          <span className="font-normal text-secondary">VERIFIED COURSEWORK</span>
        </div>
        <h1
          id="certificates-heading"
          className="font-display text-display-xl font-bold tracking-tighter text-on-surface uppercase"
        >
          CERTIFICATES
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-secondary">
          Formal programs completed outside the repository — coursework in data science, project
          management, and AI, each backed by a credential that can be verified.
        </p>
      </div>

      <SectionHeader
        index="INDEX"
        label="ALL CREDENTIALS"
        meta={`${certificates.length} CERTIFICATES`}
      />

      <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
        {certificates.map((certificate, index) => (
          <div key={certificate.id} className="col-span-4 md:col-span-8 lg:col-span-4">
            <CertificateCard certificate={certificate} priority={index < 3} />
          </div>
        ))}
      </div>
    </section>
  );
}
