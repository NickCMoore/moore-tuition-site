"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const toggle = toggleRef.current;
    if (!panel || !toggle) return;

    const focusables = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggle?.focus();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="relative z-10 flex items-center no-underline">
          <Image
            src="/images/logo.png"
            alt="Moore Tuition logo"
            width={228}
            height={158}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
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

        <div className="relative z-10 flex items-center gap-2 md:hidden">
          <a
            href="tel:07782216304"
            className="inline-flex h-11 items-center rounded-btn bg-blue px-3 text-sm font-semibold text-white no-underline"
            aria-label={`Call ${"07782 216304"}`}
          >
            Call
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-line bg-surface text-ink"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-ink transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          className="border-t border-line bg-surface md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="mx-auto flex max-w-5xl flex-col px-4 py-3">
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-btn px-3 py-3 text-base font-medium no-underline ${
                        active
                          ? "bg-soft text-blue-deep"
                          : "text-ink hover:bg-soft/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="tel:07782216304"
                  className="mt-2 block rounded-btn bg-blue px-3 py-3 text-center text-base font-semibold text-white no-underline"
                >
                  Call 07782 216304
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
