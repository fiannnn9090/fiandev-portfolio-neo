import { getGitHubStats } from "@/lib/github";
import { profile } from "@/lib/site";
import { Icon } from "./ui/Icon";
import { SectionHeader } from "./ui/SectionHeader";

function Readout({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="border border-line bg-surface-dim p-4">
      <span className="block font-mono text-[10px] tracking-wider text-secondary uppercase">{label}</span>
      <span className="font-display mt-1 block text-3xl font-bold text-on-surface sm:text-4xl">
        {value}
      </span>
      <span className="font-mono text-[10px] text-secondary uppercase">{note}</span>
    </div>
  );
}

export async function GitHubStats() {
  const stats = await getGitHubStats();

  if (!stats) {
    return (
      <section id="github" className="w-full scroll-mt-20 px-5 py-24 md:px-12">
        <SectionHeader
          index="07 // REPOSITORY"
          label="GITHUB TELEMETRY."
          meta="LIVE API · GITHUB.COM/FIANNNN9090"
        />
        <div className="border-2 border-on-surface bg-surface-dim p-8 font-mono text-sm text-secondary">
          <span className="text-primary">CHANNEL UNAVAILABLE.</span> GitHub API did not respond —
          telemetry will refresh on the next request.
        </div>
      </section>
    );
  }

  const accountAge = new Date().getFullYear() - new Date(stats.profile.created_at).getFullYear();

  return (
    <section id="github" className="w-full scroll-mt-20 bg-surface-dim px-5 py-24 md:px-12">
      <SectionHeader
        index="07 // REPOSITORY"
        label="GITHUB TELEMETRY."
        meta="LIVE API · GITHUB.COM/FIANNNN9090"
        rule="border-line"
      />

      <div className="grid grid-cols-4 items-start gap-12 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <h3 className="font-display text-3xl font-bold tracking-tight text-on-surface uppercase">
            COMMIT LOG.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-secondary">
            Fetched server-side from the public GitHub REST API — every number below is the live
            state of the account, not a cached illustration.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 border-b-2 border-on-surface pb-1 font-mono text-xs font-bold tracking-widest text-on-surface uppercase transition-colors hover:text-primary"
          >
            <span>OPEN PROFILE</span>
            <Icon name="arrow_forward" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Readout label="PUBLIC REPOS" value={String(stats.profile.public_repos)} note="TRACKED" />
            <Readout label="TOTAL STARS" value={String(stats.totalStars)} note="RECEIVED" />
            <Readout label="FOLLOWERS" value={String(stats.profile.followers)} note="NETWORK" />
            <Readout label="ACCOUNT AGE" value={`${accountAge}Y`} note="SINCE 2022" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-line bg-surface-dim p-5">
              <span className="font-mono text-[10px] tracking-wider text-secondary uppercase">
                LANGUAGE DISTRIBUTION
              </span>
              <ul className="mt-3 space-y-3">
                {stats.languages.map((lang, i) => (
                  <li key={lang.name} className="font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-on-surface uppercase">{lang.name}</span>
                      <span className="text-secondary">
                        {String(i + 1).padStart(2, "0")} / {lang.count} REPO
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 w-full border border-line bg-surface">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${Math.max(lang.share, 4)}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-surface-dim p-5">
              <span className="font-mono text-[10px] tracking-wider text-secondary uppercase">
                RECENTLY PUSHED
              </span>
              <ul className="mt-3 divide-y divide-line font-mono text-xs">
                {stats.recentRepos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 py-2.5 transition-colors hover:text-primary"
                    >
                      <span className="truncate font-semibold text-on-surface uppercase">
                        {repo.name}
                      </span>
                      <span className="shrink-0 text-[10px] text-secondary uppercase">
                        {repo.language ?? "—"}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 font-mono text-[11px] text-secondary">
            <span>SOURCE: API.GITHUB.COM/USERS/{profile.githubHandle.toUpperCase()}</span>
            <span className="font-semibold text-primary">REVALIDATES EVERY 60 MIN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
