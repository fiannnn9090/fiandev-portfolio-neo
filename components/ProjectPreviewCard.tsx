import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Icon } from "./ui/Icon";

/** Compact card used on the home page preview strip. */
export function ProjectPreviewCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col border-2 border-on-surface bg-surface">
      <Link
        href={`/work/${project.slug}`}
        className="flex flex-1 flex-col focus-visible:outline-offset-4"
      >
        <span className="flex items-center justify-between border-b-2 border-on-surface px-5 py-3">
          <span className="font-mono text-[11px] font-bold tracking-wider text-on-surface uppercase">
            {project.id} / {project.category}
          </span>
          <span className="block size-3 bg-primary" aria-hidden="true" />
        </span>

        <span className="block">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
            className="aspect-4/3 w-full border-b-2 border-on-surface object-cover"
          />
        </span>

        <span className="flex flex-1 flex-col gap-3 p-5">
          <span className="flex items-start gap-4">
            <span
              className={`font-display text-5xl leading-none font-bold select-none ${
                project.accent ? "text-primary" : "text-surface-container-high"
              }`}
              aria-hidden="true"
            >
              {project.index}
            </span>
            <span className="min-w-0">
              <span className="font-display block text-xl font-bold tracking-tight text-on-surface uppercase transition-colors group-hover:text-primary">
                {project.title}
              </span>
              <span className="font-mono text-[11px] tracking-wider text-secondary uppercase">
                {project.year} · {project.subtitle}
              </span>
            </span>
          </span>

          <span className="flex flex-wrap gap-2">
            {project.featuredStack.map((item) => (
              <span
                key={item}
                className="border border-line bg-surface-dim px-2.5 py-1 font-mono text-[11px] text-on-surface uppercase"
              >
                {item}
              </span>
            ))}
          </span>

          <span className="mt-auto inline-flex items-center gap-3 border-t border-line pt-4 font-mono text-[11px] font-bold tracking-widest text-on-surface uppercase transition-colors group-hover:text-primary">
            <span>OPEN CASE STUDY</span>
            <Icon name="arrow_forward" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </span>
      </Link>
    </article>
  );
}
