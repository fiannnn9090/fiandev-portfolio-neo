import Image from "next/image";
import { aboutMetrics, profile, site, specSheet } from "@/lib/site";

function ProfileCard() {
  return (
    <figure className="relative border-2 border-on-surface bg-surface-dim">
      <div className="flex items-center justify-between border-b-2 border-on-surface px-5 py-3">
        <span className="font-mono text-xs font-bold tracking-wider text-on-surface uppercase">
          SUBJECT // 01
        </span>
        <span className="block size-3 bg-primary" aria-hidden="true" />
      </div>
      <Image
        src={profile.photo}
        alt={`Portrait of ${profile.name}, informatics undergraduate and developer`}
        width={737}
        height={921}
        sizes="(min-width: 1024px) 38vw, (min-width: 768px) 45vw, 100vw"
        className="aspect-4/5 w-full object-cover contrast-[1.05] grayscale sepia-[0.08]"
      />
      <figcaption className="flex items-center justify-between border-t-2 border-on-surface px-5 py-3 font-mono text-[11px] text-secondary">
        <span>{profile.name.toUpperCase()}</span>
        <span className="font-semibold text-primary">FIG. 01</span>
      </figcaption>
    </figure>
  );
}

function SpecSheet() {
  return (
    <div className="relative border-2 border-on-surface bg-surface-dim p-7 sm:p-9">
      <div className="flex items-center justify-between border-b-2 border-on-surface pb-3">
        <span className="font-mono text-xs font-bold tracking-wider text-on-surface uppercase">
          SYSTEM SPECIFICATION SHEET
        </span>
        <span className="block size-3 bg-primary" aria-hidden="true" />
      </div>

      <dl className="mt-3 divide-y divide-line font-mono text-xs">
        {specSheet.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-2 py-3">
            <dt className="text-secondary uppercase">{row.label}:</dt>
            <dd
              className={`text-right uppercase ${
                row.accent ? "font-bold text-primary" : "font-semibold text-on-surface"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] text-secondary">
        <span>KERNEL: {site.kernel}</span>
        <span className="font-semibold text-primary">ALL PARAMETERS NOMINAL</span>
      </div>
    </div>
  );
}

export function Dossier() {
  return (
    <section id="about" className="relative w-full scroll-mt-20 px-5 py-20 md:px-12 lg:py-28">
      <div className="mb-12 flex items-baseline justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold tracking-widest text-primary">02 // DOSSIER</span>
          <span className="text-line" aria-hidden="true">
            /
          </span>
          <span className="font-mono text-xs tracking-widest text-secondary uppercase">
            ABOUT THE DEVELOPER
          </span>
        </div>
        <span className="hidden font-mono text-xs tracking-widest text-secondary uppercase sm:inline">
          {profile.name.toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-4 items-start gap-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-16">
        {/* Editorial column */}
        <div className="col-span-4 flex flex-col gap-6 md:col-span-8 lg:col-span-7">
          <h2 className="font-display text-4xl font-bold tracking-tight text-on-surface uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
            A STUDENT WHO BUILDS SYSTEMS.
          </h2>

          <div className="space-y-4 pt-2 text-lg leading-relaxed text-secondary">
            <p>
              I am an undergraduate student in Informatics immersed in deterministic computation,
              append-only ledgers, reactive state machines, and the discipline of reliable data
              systems.
            </p>
            <p>
              I do not see code merely as syntax to satisfy requirements; I view it as an
              architectural blueprint where boundary constraints, time complexity, and ergonomic
              simplicity govern every module.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 border-t-2 border-on-surface pt-6">
            {aboutMetrics.map((metric) => (
              <div key={metric.label}>
                <span
                  className={`font-display block text-3xl font-bold sm:text-4xl ${
                    metric.accent ? "text-primary" : "text-on-surface"
                  }`}
                >
                  {metric.value}
                </span>
                <span className="mt-1 block font-mono text-xs tracking-wider text-secondary uppercase">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: profile photo stacked above the specification sheet */}
        <div className="col-span-4 flex flex-col gap-6 md:col-span-8 lg:col-span-5">
          <ProfileCard />
          <SpecSheet />
        </div>
      </div>
    </section>
  );
}
