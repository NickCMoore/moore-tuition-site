import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="font-head text-sm font-semibold uppercase tracking-wide text-blue">
          404
        </p>
        <h1 className="mt-3 font-head text-4xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
          That page doesn&apos;t exist or may have moved. Head home, or get in
          touch if you were looking for tutoring information.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Link
            href="/contact"
            className="rounded-btn border border-line bg-surface px-5 py-3 font-head text-lg font-semibold text-ink no-underline hover:bg-soft/70"
          >
            Get in touch
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
