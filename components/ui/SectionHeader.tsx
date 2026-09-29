import type { ReactNode } from "react";

/** Section header band: index numeral + label on the left, meta readout on the right. */
export function SectionHeader({
  index,
  label,
  meta,
  rule = "border-on-surface",
  id,
}: {
  index: string;
  label: string;
  meta?: string;
  rule?: "border-on-surface" | "border-line";
  id?: string;
}) {
  return (
    <div className={`mb-10 flex items-baseline justify-between gap-4 pb-4 md:mb-16 ${rule === "border-on-surface" ? "border-b-2 border-on-surface" : "border-b border-line"}`}>
      <div className="flex items-center gap-3 md:gap-4">
        <span className="font-mono text-xs font-bold text-primary tracking-widest md:text-sm">
          {index}
        </span>
        <span className="text-line" aria-hidden="true">
          /
        </span>
        <h2 id={id} className="font-display text-2xl font-bold tracking-tight text-on-surface uppercase sm:text-3xl">
          {label}
        </h2>
      </div>
      {meta ? (
        <span className="hidden font-mono text-xs tracking-widest whitespace-nowrap text-secondary uppercase md:inline">
          {meta}
        </span>
      ) : null}
    </div>
  );
}

/** Technical tag chip — 1px frame, surface-dim substrate, uppercase monospace. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-line bg-surface-dim px-2.5 py-1 font-mono text-xs tracking-wide text-on-surface uppercase">
      {children}
    </span>
  );
}

/** Square status glyph — vermilion when active, secondary ink when dormant. */
export function StatusDot({ tone = "active", pulse = false }: { tone?: "active" | "dormant"; pulse?: boolean }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {pulse ? (
        <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-75" />
      ) : null}
      <span className={`relative inline-flex h-2 w-2 ${tone === "active" ? "bg-primary" : "bg-secondary"}`} />
    </span>
  );
}
