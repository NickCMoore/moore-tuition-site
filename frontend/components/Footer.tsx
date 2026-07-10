import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Moore Tuition · Lymm, Cheshire WA13 0SN · 07782 216304</p>
        <Link href="/contact" className="font-medium text-blue-deep no-underline hover:underline">
          Get in touch
        </Link>
      </div>
    </footer>
  );
}
