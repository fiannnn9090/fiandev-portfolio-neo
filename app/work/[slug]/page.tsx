import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { artifacts } from "@/components/work/Artifacts";
import { getProject, getProjectSlugs, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Case study not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — FIANDEV`,
      description: project.summary,
      images: [{ url: project.image.src, width: project.image.width, height: project.image.height }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const Artifact = artifacts[project.artifact];
  const position = projects.findIndex((item) => item.slug === project.slug);
  const previous = position > 0 ? projects[position - 1] : null;
  const next = position < projects.length - 1 ? projects[position + 1] : null;

  return (
    <article className="w-full px-5 py-16 md:px-12 lg:py-24">
      {/* ── Masthead ─────────────────────────────────────────── */}
      <header className="border-b-2 border-on-surface pb-10">
        <Link
          href="/work"
          className="group mb-10 inline-flex items-center gap-3 font-mono text-xs tracking-widest text-secondary uppercase transition-colors hover:text-primary"
        >
          <Icon
            name="arrow_forward"
            className="size-4 rotate-180 transition-transform group-hover:-translate-x-1"
          />
          <span>BACK TO WORK INDEX</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest text-secondary uppercase">
          <span className="bg-on-surface px-2 py-0.5 font-bold text-surface">{project.id}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
          <span aria-hidden="true">/</span>
          <span>{project.year}</span>
          <span aria-hidden="true">/</span>
          <span className="font-bold text-primary">{project.status}</span>
        </div>

        <div className="mt-6 flex items-start gap-5 md:gap-8">
          <span
            className={`font-display text-6xl leading-none font-bold select-none lg:text-8xl ${
              project.accent ? "text-primary" : "text-surface-container-high"
            }`}
            aria-hidden="true"
          >
            {project.index}
          </span>
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tighter text-on-surface uppercase sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-2 font-mono text-xs font-bold tracking-wider text-primary uppercase">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-secondary">{project.intro}</p>
      </header>

      {/* ── Figure ───────────────────────────────────────────── */}
      <figure className="mt-12">
        <div className="border-2 border-on-surface bg-plane p-3 sm:p-5">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 60vw, (min-width: 768px) 90vw, 94vw"
            className="aspect-4/3 w-full border border-line object-cover"
            priority
          />
        </div>
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3 font-mono text-[11px] tracking-wider text-secondary uppercase">
          <span>
            FIG. {project.index} {"//"} {project.title} — SYSTEM OVERVIEW
          </span>
          <span>{project.year} {"//"} {project.category}</span>
        </figcaption>
      </figure>

      {/* ── Narrative sections ───────────────────────────────── */}
      <div className="mt-16 grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12 lg:gap-16">
        <div className="col-span-4 space-y-12 md:col-span-8 lg:col-span-7">
          {project.sections.map((section, i) => (
            <section key={section.heading}>
              <div className="flex items-baseline gap-4 border-b-2 border-on-surface pb-3">
                <span className="font-mono text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface uppercase sm:text-3xl">
                  {section.heading}
                </h2>
              </div>
              <p className="pt-5 text-lg leading-relaxed text-secondary">{section.body}</p>
            </section>
          ))}

          {/* links */}
          <section>
            <div className="flex items-baseline gap-4 border-b-2 border-on-surface pb-3">
              <span className="font-mono text-xs font-bold text-primary">
                {String(project.sections.length + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface uppercase sm:text-3xl">
                REPOSITORY &amp; ACCESS
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 pt-5">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-primary px-7 py-3.5 font-mono text-xs font-semibold tracking-widest text-white uppercase transition-colors duration-200 hover:bg-on-surface"
                >
                  <span className="block size-2 bg-white" aria-hidden="true" />
                  <span>LIVE DEMO</span>
                  <Icon name="east" className="size-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              ) : null}

              {project.links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-on-surface px-7 py-3.5 font-mono text-xs font-semibold tracking-widest text-surface uppercase transition-colors duration-200 hover:bg-primary"
                >
                  <span>{link.label}</span>
                  <Icon
                    name="arrow_forward"
                    className="size-4 transition-transform group-hover:translate-x-1.5"
                  />
                </a>
              ))}
            </div>

            {project.links.length === 0 ? (
              <p className="pt-4 font-mono text-[11px] leading-relaxed text-secondary">
                Repository untuk {project.title} sedang disiapkan dan belum dipublikasikan.
                Hubungi saya lewat email bila butuh akses lebih awal.
              </p>
            ) : null}
          </section>
        </div>

        {/* ── Aside: stack + diagram ────────────────────────── */}
        <aside className="col-span-4 md:col-span-8 lg:col-span-5">
          <div className="border-2 border-on-surface bg-surface-dim p-6 sm:p-7">
            <div className="flex items-center justify-between border-b-2 border-on-surface pb-3">
              <span className="font-mono text-xs font-bold tracking-wider text-on-surface uppercase">
                TECH STACK // {project.stack.length}
              </span>
              <span className="block size-3 bg-primary" aria-hidden="true" />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-surface px-2.5 py-1 font-mono text-xs text-on-surface uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
            <dl className="mt-6 divide-y divide-line border-t border-line pt-1 font-mono text-xs">
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-secondary uppercase">YEAR</dt>
                <dd className="text-right font-semibold text-on-surface">{project.year}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-secondary uppercase">STATUS</dt>
                <dd className="text-right font-semibold text-primary">{project.status}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-secondary uppercase">REPOSITORY</dt>
                <dd className="text-right font-semibold text-on-surface">{project.links.length}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-secondary uppercase">LIVE DEMO</dt>
                <dd
                  className={`text-right font-semibold ${
                    project.liveUrl ? "text-primary" : "text-secondary"
                  }`}
                >
                  {project.liveUrl ? "AVAILABLE" : "NOT PUBLISHED"}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <Artifact />
          </div>
        </aside>
      </div>

      {/* ── Prev / next ──────────────────────────────────────── */}
      <nav
        aria-label="Case study navigation"
        className="mt-20 grid grid-cols-1 gap-px border-2 border-on-surface bg-line sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={`/work/${previous.slug}`}
            className="row-dim group flex flex-col gap-2 bg-surface p-6 hover:bg-surface-dim"
          >
            <span className="font-mono text-[11px] tracking-wider text-secondary uppercase">
              ← PREVIOUS CASE
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-on-surface uppercase transition-colors group-hover:text-primary">
              {previous.title}
            </span>
          </Link>
        ) : (
          <span className="bg-surface p-6" aria-hidden="true" />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="row-dim group flex flex-col items-end gap-2 bg-surface p-6 text-right hover:bg-surface-dim"
          >
            <span className="font-mono text-[11px] tracking-wider text-secondary uppercase">
              NEXT CASE →
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-on-surface uppercase transition-colors group-hover:text-primary">
              {next.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/work"
            className="row-dim group flex flex-col items-end gap-2 bg-surface p-6 text-right hover:bg-surface-dim"
          >
            <span className="font-mono text-[11px] tracking-wider text-secondary uppercase">
              RETURN →
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-on-surface uppercase transition-colors group-hover:text-primary">
              WORK INDEX
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
