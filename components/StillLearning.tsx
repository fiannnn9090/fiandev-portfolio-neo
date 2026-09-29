import { focusDomains, site } from "@/lib/site";
import { SectionHeader } from "./ui/SectionHeader";

export function StillLearning() {
  return (
    <section
      id="journey"
      className="w-full scroll-mt-20 border-t border-line bg-surface-dim px-5 py-24 md:px-12"
    >
      <SectionHeader
        index="06 // JOURNEY"
        label="STILL LEARNING."
        meta="INFORMATICS EDUCATION & ETHOS"
        rule="border-line"
      />

      <div className="grid grid-cols-4 items-start gap-12 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 flex flex-col justify-between md:col-span-8 lg:col-span-5">
          <div>
            <span className="font-display block text-6xl leading-none font-bold text-on-surface lg:text-7xl">
              2022
            </span>
            <span className="-mt-1 block text-5xl leading-none font-light text-primary">
              / {site.year}
            </span>
            <p className="pt-6 text-base leading-relaxed text-secondary">
              True software proficiency is earned through foundational comprehension rather than
              transient library hype.
            </p>
          </div>
          <div className="mt-8 border-2 border-on-surface bg-surface p-6 shadow-[6px_6px_0px_0px_#D9382B]">
            <span className="mb-1 block font-mono text-xs font-bold tracking-wider text-primary uppercase">
              PERSONAL ETHOS:
            </span>
            <p className="font-display text-xl leading-snug font-bold text-on-surface uppercase">
              &ldquo;Still learning. Still building. Still improving.&rdquo;
            </p>
          </div>
        </div>

        <div className="col-span-4 space-y-12 border-l-2 border-on-surface pl-8 md:col-span-8 lg:col-span-7">
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 block size-3 bg-primary" aria-hidden="true" />
            <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
              2022 — PRESENT (ACTIVE)
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold text-on-surface uppercase sm:text-3xl">
              INFORMATICS UNDERGRADUATE STUDENT
            </h3>
            <p className="mt-1 mb-4 font-mono text-xs tracking-wider text-secondary uppercase">
              BACHELOR OF COMPUTER SCIENCE CANDIDATE • INDONESIA
            </p>
            <p className="text-base leading-relaxed text-secondary">
              Academic grounding across core computing curricula, paired with hands-on development
              of production-grade prototypes and published research in electronic voting integrity.
            </p>

            <div className="grid grid-cols-1 gap-3 pt-6 font-mono text-xs sm:grid-cols-2">
              {focusDomains.map((domain) => (
                <div key={domain.title} className="border border-line bg-surface p-3">
                  <span className="mb-0.5 block font-bold text-primary">• {domain.title}</span>
                  <span className="text-[11px] text-secondary">{domain.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
