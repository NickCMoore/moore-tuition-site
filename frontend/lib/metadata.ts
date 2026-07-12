import type { Metadata } from "next";
import { defaultDescription, siteName, siteUrl } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const fullTitle =
    path === "/"
      ? `${siteName} | 7+, 11+, 13+ & KS1–KS3 Tutoring in Lymm, Cheshire`
      : title;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: path === "/" ? fullTitle : `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Moore Tuition classroom tutoring",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? fullTitle : `${title} | ${siteName}`,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

export { defaultDescription };
