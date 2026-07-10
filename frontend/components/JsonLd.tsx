const siteUrl = "https://mooretuition.com";

/** LocalBusiness + EducationalOrganization: facts only from the live site. */
export const mooreTuitionJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": `${siteUrl}/#organization`,
  name: "Moore Tuition",
  url: siteUrl,
  telephone: "+447782216304",
  image: `${siteUrl}/images/og-image.jpg`,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "1-to-1 English, Maths and Reasoning tutoring for 7+, 11+ and 13+ entrance exams, offered in person in Lymm, Cheshire or online across the UK.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lymm",
    addressRegion: "Cheshire",
    postalCode: "WA13 0SN",
    addressCountry: "GB",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Lymm",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Cheshire",
      },
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Entrance exam tutoring",
      description:
        "1-to-1 English, Maths and Reasoning tutoring for 7+, 11+ and 13+ entrance exams, in person in Lymm or online.",
      provider: {
        "@type": "LocalBusiness",
        name: "Moore Tuition",
      },
      areaServed: ["Lymm", "Cheshire", "United Kingdom"],
    },
  },
} as const;

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(mooreTuitionJsonLd),
      }}
    />
  );
}
