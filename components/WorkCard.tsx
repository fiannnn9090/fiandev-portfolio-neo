import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Icon } from "./ui/Icon";

/**
 * Full-width "Selected Work" card used on /work.
 * The frame is the link target; hover flips the row substrate to surface-dim.
 * External links live in a sibling action row (never nested inside the card <Link>).
 */
export function WorkCard({ project }: { project: Project }) {
  const hasLiveDemo = Boolean(project.liveUrl);
  const hasActions = hasLiveDemo || project.links.length > 0;

  return (
    <article className="group flex flex-col border-2 border-on-surface bg-surface transition-colors hover:bg-surface-dim">
      <Link href={`/work/${project.slug}`} className="flex flex-1 flex-col">
        {/* technical header bar */}
        <span className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-on-surface px-5 py-3 font-mono text-[11px] text-secondary sm:px-7">
          <span className="flex items-center gap-3">
            <span className="bg-on-surface px-2 py-0.5 font-bold text-surface">{project.id}</span>
            <span aria-hidden="true">/</span>
            <span className="tracking-wider uppercase">{project.category}</span>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="uppercase">{project.status}</span>
            <span className="block size-3 bg-primary" aria-hidden="true" />
          </span>
        </span>

        <div className="grid grid-cols-4 gap-8 p-5 sm:p-7 lg:grid-cols-12 lg:gap-12">
          {/* narrative column */}
          <div className="col-span-4 flex flex-col gap-5 md:col-span-8 lg:col-span-5">
            <span className="flex items-start gap-5">
              <span
                className={`font-display text-6xl leading-none font-bold select-none lg:text-7xl ${
                  project.accent ? "text-primary" : "text-surface-container-high"
                }`}
                aria-hidden="true"
              >
                {project.index}
              </span>
              <span className="min-w-0">
                <span className="font-display block text-3xl font-bold tracking-tight text-on-surface uppercase sm:text-4xl">
                  {project.title}
                </span>
                <span className="mt-1 block font-mono text-xs font-bold tracking-wider text-primary uppercase">
                  {project.subtitle}
                </span>
              </span>
            </span>

            <span className="block text-base leading-relaxed text-secondary">{project.summary}</span>

            <span className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.featuredStack.map((item) => (
                <span
                  key={item}
                  className="border border-line bg-surface px-2.5 py-1 font-mono text-xs text-on-surface uppercase"
                >
                  {item}
                </span>
              ))}
              <span className="px-2.5 py-1 font-mono text-xs text-secondary uppercase">
                +{project.stack.length - project.featuredStack.length} MORE
              </span>
            </span>
          </div>

          {/* image column */}
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <div className="relative border border-line bg-plane p-3">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1024px) 55vw, (min-width: 768px) 80vw, 92vw"
                className="aspect-4/3 w-full border border-line object-cover"
              />
              <span className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-wider text-secondary uppercase">
                <span>
                  FIG. {project.index} {"//"} {project.title}
                </span>
                <span className="flex items-center gap-2 font-bold text-on-surface">
                  OPEN CASE STUDY
                  <Icon
                    name="arrow_forward"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* ── Action row: external links only render when they actually exist ── */}
      {hasActions ? (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t-2 border-on-surface px-5 py-4 font-mono text-[11px] sm:px-7">
          {hasLiveDemo ? (
            <a
              href={project.liveUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold tracking-widest text-primary uppercase transition-colors hover:text-on-surface"
            >
              <span className="block size-2 bg-primary" aria-hidden="true" />
              <span>LIVE DEMO</span>
              <Icon name="east" className="size-3.5" />
            </a>
          ) : null}

          {project.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 tracking-widest text-secondary uppercase transition-colors hover:text-primary"
            >
              <span>{link.label}</span>
              <Icon name="arrow_forward" className="size-3.5" />
            </a>
          ))}

          <span className="ml-auto tracking-wider text-secondary uppercase">
            {hasLiveDemo ? "WEB BUILD AVAILABLE" : "NO PUBLIC WEB BUILD"}
          </span>
        </div>
      ) : null}
    </article>
  );
}
