import { profile, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-line bg-on-surface px-5 py-10 text-surface md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <span className="font-display block text-lg font-bold tracking-tight uppercase">
            {site.brand} — {profile.name.toUpperCase()}
          </span>
          <span className="font-mono text-xs tracking-wider text-secondary-bright uppercase">
            © {site.year} {site.brand} • ALL SYSTEMS FUNCTIONAL • {site.location.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href={`mailto:${profile.email}`}
            className="border-b border-surface pb-0.5 uppercase transition-colors hover:text-primary"
          >
            {profile.email}
          </a>
          <span className="font-bold text-primary">STATUS: OK</span>
          <a
            href="#top"
            className="flex items-center gap-1.5 border-b border-surface pb-0.5 uppercase transition-colors hover:text-primary"
          >
            <span>BACK TO TOP</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="square"
              aria-hidden="true"
              className="size-4"
            >
              <path d="M12 20V4m0 0 7 7m-7-7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
