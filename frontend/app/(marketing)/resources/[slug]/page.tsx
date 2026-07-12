import { Button } from "@/components/Button";
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
    title: article.metaTitle ?? article.title,
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
          <article className="mt-8 space-y-6">
            {article.body.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`heading-${index}`}
                    className="font-head text-2xl font-semibold text-ink"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "cta") {
                return (
                  <div key={`cta-${index}`} className="pt-2">
                    <Button href={block.href}>{block.label}</Button>
                  </div>
                );
              }

              return (
                <p
                  key={`paragraph-${index}`}
                  className="text-lg leading-relaxed text-muted"
                >
                  {block.text}
                </p>
              );
            })}
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
