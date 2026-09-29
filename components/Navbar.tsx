"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, profile, site } from "@/lib/site";
import { JakartaClock } from "./ui/JakartaClock";
import { StatusDot } from "./ui/SectionHeader";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-4 px-5 md:px-12">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="block h-3.5 w-3.5 bg-primary transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-display text-lg font-bold tracking-tight text-on-surface uppercase">
            {site.brand}
          </span>
          <span className="hidden border-l border-line pl-3 font-mono text-xs tracking-wider text-secondary sm:inline">
            ALIFFIAN ALHAM MAESANJAYA. / INFORMATICS
          </span>
        </Link>

        <nav className="flex items-center gap-1 font-mono text-xs tracking-wider">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "bg-on-surface px-3 py-1.5 font-semibold text-surface"
                    : "row-dim px-3 py-1.5 text-secondary hover:bg-surface-container hover:text-on-surface"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <div className="hidden items-center gap-2 border border-line bg-surface-dim px-2.5 py-1 font-mono text-[11px] text-secondary xl:flex">
            <StatusDot pulse />
            <span>AVAILABLE FOR RESEARCH</span>
          </div>
          <Link
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name} — ${profile.email}`}
            className="border border-line bg-surface-container px-2 py-1 font-mono text-xs font-semibold text-on-surface transition-colors hover:bg-primary hover:text-white"
          >
            <JakartaClock />
          </Link>
        </div>
      </div>
    </header>
  );
}
