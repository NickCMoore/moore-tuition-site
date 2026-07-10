"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/subjects", label: "Subjects" },
  { href: "/cv", label: "CV" },
  { href: "/rates", label: "Rates" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link href="/" className="font-head text-xl font-semibold text-ink no-underline">
          Moore <span className="text-blue">Tuition</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-btn px-2.5 py-1.5 text-sm font-medium no-underline transition-colors ${
                      active
                        ? "bg-soft text-blue-deep"
                        : "text-muted hover:bg-soft/70 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
