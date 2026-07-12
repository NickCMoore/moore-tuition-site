import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import { getResourceBySlug, resources } from "@/lib/resources";
import Link from "next/link";
import { notFound } from "next/navigation";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
  });
}

export default async function ResourceArticlePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <PageHeader title={article.title} />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-muted">
            <Link
              href="/resources"
              className="text-blue-deep no-underline hover:underline"
            >
              Resources
            </Link>
          </p>
          <article className="mt-8 space-y-4">
            {article.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </article>
          <p className="mt-10">
            <Link
              href="/resources"
              className="font-medium text-blue-deep no-underline hover:underline"
            >
              ← Back to resources
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
