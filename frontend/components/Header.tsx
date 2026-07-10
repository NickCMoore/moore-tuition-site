"use client";

import Image from "next/image";
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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/images/logo.jpg"
            alt="Moore Tuition"
            width={160}
            height={56}
            className="h-11 w-auto"
            priority
          />
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
