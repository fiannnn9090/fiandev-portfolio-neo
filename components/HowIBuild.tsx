import { process } from "@/lib/site";
import { SectionHeader } from "./ui/SectionHeader";

function PhaseCard({
  phase,
  focus,
  title,
  body,
  accent,
}: {
  phase: string;
  focus: string;
  title: string;
  body: string;
  accent: boolean;
}) {
  const shell = accent
    ? "border-2 border-primary bg-surface p-7 text-center shadow-[8px_8px_0px_0px_#D9382B]"
    : "border-2 border-on-surface bg-surface p-6 shadow-[6px_6px_0px_0px_#111111]";

  return (
    <div className={`${shell} ${accent ? "max-w-xl mx-auto" : ""}`}>
      <div className={`mb-3 flex items-center justify-between font-mono text-xs ${accent ? "justify-center gap-3" : ""}`}>
        <span
          className={`px-2 py-0.5 font-bold text-white ${accent ? "bg-primary" : phase === "PHASE 01" || phase === "PHASE 05" ? "bg-primary" : "bg-on-surface"}`}
        >
          {phase}
        </span>
        <span className={`font-bold ${accent ? "text-primary" : "text-secondary"}`}>{focus}</span>
      </div>
      <h3
        className={`font-display font-bold text-on-surface uppercase ${accent ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
      >
        {title}
      </h3>
      <p className={`mt-2 leading-relaxed text-secondary ${accent ? "text-base" : "font-body text-sm"}`}>
        {body}
      </p>
    </div>
  );
}

function Vector({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 font-mono text-xs text-secondary">
      <div className="h-10 w-0.5 bg-on-surface" />
      {label ? (
        <span className="my-1 border border-line bg-surface px-3 py-1 text-[11px] font-bold text-on-surface">
          {label}
        </span>
      ) : null}
      <div className="h-10 w-0.5 bg-on-surface" />
    </div>
  );
}

export function HowIBuild() {
  const [p1, p2, p3, p4, p5] = process;

  return (
    <section
      id="process"
      className="w-full scroll-mt-20 border-t-2 border-on-surface bg-surface-dim px-5 py-24 md:px-12"
    >
      <SectionHeader
        index="04 // BLUEPRINT"
        label="HOW I BUILD."
        meta="5-STAGE ARCHITECTURAL PIPELINE"
        rule="border-line"
      />

      <div className="mx-auto max-w-5xl py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <PhaseCard {...p1} />
          <PhaseCard {...p2} />
        </div>

        <Vector label="SYNTHESIS & CONVERGENCE" />

        <PhaseCard {...p3} />

        <div className="flex flex-col items-center justify-center py-8 font-mono text-xs text-secondary">
          <div className="h-10 w-0.5 bg-on-surface" />
          <div className="h-0.5 w-1/2 bg-on-surface" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <PhaseCard {...p4} />
          <PhaseCard {...p5} />
        </div>
      </div>
    </section>
  );
}
