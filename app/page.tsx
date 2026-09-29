import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectPreviewCard } from "@/components/ProjectPreviewCard";
import { projects } from "@/lib/projects";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Selected work preview */}
      <section className="w-full px-5 pb-24 md:px-12 lg:py-32" aria-labelledby="preview-heading">
        <SectionHeader
          id="preview-heading"
          index="03 // INDEX"
          label="SELECTED WORK"
          meta="THREE CASE STUDIES"
        />

        <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
          {projects.map((project) => (
            <div key={project.slug} className="col-span-4 md:col-span-8 lg:col-span-4">
              <ProjectPreviewCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t-2 border-on-surface pt-8">
          <span className="font-mono text-xs tracking-widest text-secondary uppercase">
            ARCHIVE: 3 PROJECTS / 0 CLOSED SOURCE
          </span>
          <Link
            href="/work"
            className="group flex items-center gap-3 bg-on-surface px-7 py-3.5 font-mono text-xs font-semibold tracking-widest text-surface uppercase transition-colors duration-200 hover:bg-primary"
          >
            <span>VIEW ALL WORK</span>
            <Icon name="east" className="size-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
