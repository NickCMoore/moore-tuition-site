import {
  contactEmail,
  contactPhoneTel,
  contactPostcode,
  siteUrl,
} from "@/lib/site";

/** LocalBusiness + EducationalOrganization: facts only from the live site. */
export const mooreTuitionJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": `${siteUrl}/#organization`,
  name: "Moore Tuition",
  url: siteUrl,
  telephone: contactPhoneTel,
  email: contactEmail,
  image: `${siteUrl}/images/og-image.jpg`,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "1-to-1 English, Maths and Reasoning tutoring for 7+, 11+ and 13+ entrance exams, offered in person in Lymm, Cheshire or online across the UK.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lymm",
    addressRegion: "Cheshire",
    postalCode: contactPostcode,
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "£30-£50",
  makesOffer: [
    {
      "@type": "Offer",
      price: "30",
      priceCurrency: "GBP",
      name: "30-minute tutoring session",
      itemOffered: {
        "@type": "Service",
        name: "Entrance exam tutoring",
        description:
          "1-to-1 English, Maths and Reasoning tutoring for 7+, 11+ and 13+ entrance exams, in person in Lymm or online.",
      },
    },
    {
      "@type": "Offer",
      price: "40",
      priceCurrency: "GBP",
      name: "45-minute tutoring session",
      itemOffered: {
        "@type": "Service",
        name: "Entrance exam tutoring",
      },
    },
    {
      "@type": "Offer",
      price: "50",
      priceCurrency: "GBP",
      name: "60-minute tutoring session",
      itemOffered: {
        "@type": "Service",
        name: "Entrance exam tutoring",
      },
    },
  ],
};

export function JsonLd({ data }: { data?: Record<string, unknown> }) {
  const payload = data ?? mooreTuitionJsonLd;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
    />
  );
}
