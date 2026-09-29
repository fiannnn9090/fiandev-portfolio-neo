import { toolGroups } from "@/lib/site";
import { SectionHeader } from "./ui/SectionHeader";

export function ToolsStack() {
  return (
    <section id="tools" className="w-full scroll-mt-20 px-5 py-24 md:px-12">
      <SectionHeader
        index="05 // INVENTORY"
        label="TOOLS I USE."
        meta="NO ARBITRARY PERCENTAGE METERS"
      />

      <div className="grid grid-cols-4 items-start gap-12 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 space-y-4 md:col-span-8 lg:col-span-4">
          <h3 className="font-display text-3xl font-bold tracking-tight text-on-surface uppercase">
            EQUIPMENT &amp; STACK.
          </h3>
          <p className="text-base leading-relaxed text-secondary">
            Technologies are instruments chosen strictly based on operational latency, architectural
            ergonomics, determinism, and trade-offs.
          </p>
          <div className="mt-6 border border-line bg-surface-dim p-4 font-mono text-xs text-secondary">
            <span className="mb-1 block font-bold text-primary">BAUHAUS CRITERIA:</span>
            Purity of execution, zero extraneous runtime dependencies, clear boundaries.
          </div>
        </div>

        <div className="col-span-4 divide-y-2 divide-on-surface border-y-2 border-on-surface md:col-span-8 lg:col-span-8">
          {toolGroups.map((group) => (
            <div
              key={group.index}
              className="grid grid-cols-1 items-center gap-4 py-5 sm:grid-cols-12"
            >
              <div className="sm:col-span-3">
                <span className="font-mono text-xs font-bold tracking-wider text-primary uppercase">
                  {group.index} {"//"} {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs sm:col-span-9">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-line bg-surface-dim px-3 py-1 font-medium text-on-surface uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
