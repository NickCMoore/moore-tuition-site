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
    "1-to-1 tutoring for 7+, 8+, 11+ and 13+ entrance exams, plus KS1–KS3 English and Maths support, offered in person in Lymm, Cheshire or online across the UK. Familiar with CEM, GL, ISEB and school-specific assessments.",
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
  knowsAbout: [
    "7+ entrance exams",
    "8+ entrance exams",
    "11+ entrance exams",
    "13+ entrance exams",
    "CEM",
    "GL Assessment",
    "ISEB",
    "English tutoring",
    "Maths tutoring",
    "Verbal Reasoning",
    "Non-Verbal Reasoning",
    "KS1 English and Maths",
    "KS2 English and Maths",
    "KS3 English and Maths",
    "Cello tuition",
    "Piano tuition",
    "Music theory",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      price: "30",
      priceCurrency: "GBP",
      name: "30-minute tutoring session",
      itemOffered: {
        "@type": "Service",
        name: "1-to-1 academic tutoring",
        description:
          "7+, 8+, 11+ and 13+ preparation (English, Maths and Reasoning as required), KS1–KS3 English and Maths support, and optional music tuition, in person in Lymm or online.",
      },
    },
    {
      "@type": "Offer",
      price: "40",
      priceCurrency: "GBP",
      name: "45-minute tutoring session",
      itemOffered: {
        "@type": "Service",
        name: "1-to-1 academic tutoring",
        description:
          "Entrance exam preparation and KS1–KS3 English and Maths support, in person in Lymm or online.",
      },
    },
    {
      "@type": "Offer",
      price: "50",
      priceCurrency: "GBP",
      name: "60-minute tutoring session",
      itemOffered: {
        "@type": "Service",
        name: "1-to-1 academic tutoring",
        description:
          "Entrance exam preparation and KS1–KS3 English and Maths support, in person in Lymm or online.",
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
