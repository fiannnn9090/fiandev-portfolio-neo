import type { Metadata } from "next";
import { WorkCard } from "@/components/WorkCard";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work of Alham Maesanjaya — a blockchain e-voting research system, an Android personal finance tracker, and an offline-first Flutter puzzle engine.",
  openGraph: {
    title: "Work — FIANDEV",
    description: "System architectures and production case studies.",
  },
};

export default function WorkIndexPage() {
  return (
    <section className="w-full px-5 py-20 md:px-12 lg:py-28" aria-labelledby="work-heading">
      {/* page header */}
      <div className="mb-12 flex flex-col gap-6 border-b-2 border-on-surface pb-8 md:mb-16">
        <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest text-primary">
          03 // INDEX <span className="text-line" aria-hidden="true">/</span>
          <span className="font-normal text-secondary">SELECTED WORK</span>
        </div>
        <h1
          id="work-heading"
          className="font-display text-display-xl font-bold tracking-tighter text-on-surface uppercase"
        >
          SYSTEMS <span className="text-primary">BUILT.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-secondary">
          Three case studies in architecture, constraint, and shipping. Each one is documented with
          the problem it solved, the decisions behind it, and the state it reached.
        </p>
      </div>

      <SectionHeader
        index="INDEX"
        label="ALL PROJECTS"
        meta={`${projects.length} CASE STUDIES`}
      />

      <div className="space-y-12">
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
