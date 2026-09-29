import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./ui/Icon";
import { JakartaClock } from "./ui/JakartaClock";
import { StatusDot } from "./ui/SectionHeader";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex w-full flex-col justify-between overflow-hidden px-5 pt-16 pb-24 md:px-12 md:py-28 lg:min-h-[92vh]"
    >
      {/* Architectural planar background layers */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 hidden h-full w-1/3 bg-plane-hero lg:block lg:w-1/4" />
      <div className="pointer-events-none absolute -right-12 top-28 -z-10 hidden h-44 w-44 rotate-12 border-[16px] border-primary/20 lg:block" />
      <div className="pointer-events-none absolute bottom-12 left-1/3 -z-10 hidden h-28 w-28 bg-primary/10 lg:block" />

      {/* Monospace coordinate strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 font-mono text-xs tracking-widest text-secondary uppercase">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 font-semibold text-on-surface">
            <StatusDot />
            SYS: FORM + CODE + LOGIC
          </span>
          <span className="hidden text-line sm:inline" aria-hidden="true">
            |
          </span>
          <span className="hidden sm:inline">INDEX 2026 // ARCHIVAL</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">SYSTEM STATUS: 100% OPERATIONAL</span>
          <span className="hidden text-line md:inline" aria-hidden="true">
            |
          </span>
          <span className="font-semibold text-primary">
            <JakartaClock />
          </span>
        </div>
      </div>

      {/* Typographic & geometric core */}
      <div className="relative my-auto grid grid-cols-1 items-start gap-8 py-12 md:py-16 lg:grid-cols-12">
        <div className="relative z-10 flex flex-col gap-6 lg:col-span-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-primary px-2.5 py-0.5 font-mono text-xs font-bold tracking-wider text-white">
              {site.brand}
            </span>
            <span className="font-mono text-xs tracking-widest text-secondary uppercase">
              {site.author.toUpperCase()} — {site.role.toUpperCase()}
            </span>
          </div>

          <h1 id="hero-title" className="font-display text-display-xl font-bold tracking-tighter text-on-surface uppercase sm:text-[5.5rem] lg:text-[7.25rem] lg:leading-[0.88]">
            I BUILD <br />
            <span className="relative inline-block text-primary">
              DIGITAL
              <span className="absolute -bottom-2 left-0 h-[6px] w-full bg-primary" aria-hidden="true" />
            </span>
            <br />
            SYSTEMS.
          </h1>

          <p className="max-w-xl pt-3 text-lg leading-relaxed font-normal text-secondary md:text-xl">
            Translating mathematical rigor, distributed algorithms, and computational architecture into resilient, uncluttered digital software.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <Link
              href="/work"
              className="group flex items-center gap-3 bg-on-surface px-7 py-3.5 font-mono text-xs font-semibold tracking-widest text-surface uppercase transition-colors duration-200 hover:bg-primary"
            >
              <span>VIEW WORK</span>
              <Icon name="east" className="size-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-3 border-2 border-on-surface px-7 py-3.5 font-mono text-xs font-semibold tracking-widest text-on-surface uppercase transition-colors duration-200 hover:bg-on-surface hover:text-surface"
            >
              <span>ABOUT ME</span>
              <Icon name="south" className="size-4 transition-transform group-hover:translate-y-1.5" />
            </Link>
          </div>
        </div>

        {/* Constructed geometric plane composition */}
        <div className="relative flex h-full flex-col justify-between pt-4 lg:col-span-4 lg:pt-0">
          <div className="relative mx-auto flex aspect-square w-full max-w-[340px] flex-col justify-between overflow-hidden border border-on-surface bg-surface-dim p-6 shadow-[8px_8px_0px_0px_#111111] lg:ml-auto">
            <div className="absolute -right-10 -bottom-10 flex size-36 items-center justify-center bg-primary" aria-hidden="true">
              <div className="size-16 bg-surface-dim" />
            </div>
            <div
              className="pointer-events-none absolute top-0 right-14 h-full w-[1.5px] origin-top -rotate-45 bg-line-strong"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between border-b border-line pb-2 font-mono text-[11px] text-secondary">
              <span>CANVAS : FORM // 01</span>
              <span className="font-bold text-primary">DISCIPLINE</span>
            </div>
            <div className="z-10 space-y-1 py-6">
              <span className="font-display block text-4xl font-bold text-on-surface">FUNCTION</span>
              <span className="font-mono text-xs tracking-wider text-secondary uppercase">
                PREVAILS OVER ORNAMENT
              </span>
            </div>
            <div className="z-10 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] text-secondary uppercase">
              <span>X: 042.8 // Y: 109.4</span>
              <span className="block size-3 bg-on-surface" />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between px-1 font-mono text-xs text-secondary">
            <span>SPEC. {site.year}</span>
            <span>PROTOTYPE // PRODUCTION</span>
          </div>
        </div>
      </div>

      {/* Hero footnote */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 font-mono text-xs text-secondary">
        <div className="flex items-center gap-3">
          <span className="block size-2 bg-on-surface" />
          <span>RESEARCH &amp; SOFTWARE ARCHITECTURE</span>
        </div>
        <div>
          <Link href="/work" className="transition-colors hover:text-primary">
            SCROLL TO EXPLORE DOSSIER ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
