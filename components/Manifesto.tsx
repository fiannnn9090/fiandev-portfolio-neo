import { StatusDot } from "./ui/SectionHeader";

export function Manifesto() {
  return (
    <section className="relative w-full overflow-hidden border-y border-line bg-surface-dim px-5 py-16 md:px-12 md:py-24">
      <div className="mb-8 h-1.5 w-12 bg-primary" aria-hidden="true" />
      <div className="max-w-5xl">
        <blockquote className="font-display text-3xl font-bold tracking-tight text-on-surface uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
          &ldquo;WILDNESS IS PRESERVATION OF THE WORLD, <br className="hidden sm:inline" />
          SO SEEK THE WORLD IN THYSELF.<br className="hidden sm:inline" />
          <span className="text-primary">METALLICA.&rdquo;</span>
        </blockquote>
      </div>

      <div className="mt-12 flex flex-col justify-between gap-6 border-t border-line pt-8 font-mono md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="flex size-8 items-center justify-center bg-on-surface font-bold text-xs text-surface">
            01
          </div>
          <div>
            <span className="block text-xs tracking-widest text-secondary uppercase">
              SYSTEM IDENTITY
            </span>
            <span className="text-sm font-bold tracking-wide text-on-surface uppercase">
              STUDENT + DEVELOPER + BUILDER
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 border border-line bg-surface px-4 py-2.5">
          <StatusDot pulse />
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
            <span className="text-secondary">CURRENT STATUS:</span>
            <span className="text-primary">STILL LEARNING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
