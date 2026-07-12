export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  /** Short intro paragraphs shown on the article page. */
  intro: string[];
};

export const resources: ResourceArticle[] = [
  {
    slug: "cem-vs-gl-11-plus",
    title: "CEM vs GL: what's the difference for 11+ parents?",
    description:
      "A short introduction to how CEM and GL 11+ assessments differ, and what that means when choosing practice papers.",
    publishedAt: "2026-07-12",
    intro: [
      "CEM and GL are two of the main providers of 11+ assessments used by grammar and independent schools across the UK, and they test similar skills in quite different ways.",
      "Understanding which board your target schools use helps you choose the right practice materials and avoid preparing for a style of paper your child will never sit.",
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((article) => article.slug === slug);
}
