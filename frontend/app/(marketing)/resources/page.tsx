import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { resources } from "@/lib/resources";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Guides and articles for parents on 11+, entrance exams, and tutoring — including CEM, GL and school-specific assessments.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        subtitle="Practical guides for parents navigating entrance exams and tutoring"
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          {resources.map((article) => (
            <article
              key={article.slug}
              className="rounded-card border border-line bg-surface p-6 shadow-soft"
            >
              <h2 className="font-head text-xl font-semibold text-ink">
                <Link
                  href={`/resources/${article.slug}`}
                  className="text-ink no-underline hover:text-blue-deep"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {article.description}
              </p>
              <Link
                href={`/resources/${article.slug}`}
                className="mt-4 inline-block font-medium text-blue-deep no-underline hover:underline"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
