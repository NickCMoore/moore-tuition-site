import type { Metadata } from "next";
import { Fredoka, Lexend } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { defaultDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | 7+, 11+, 13+ & KS1–KS3 Tutoring in Lymm, Cheshire`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: `${siteName} | 7+, 11+, 13+ & KS1–KS3 Tutoring in Lymm, Cheshire`,
    description: defaultDescription,
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
    title: `${siteName} | 7+, 11+, 13+ & KS1–KS3 Tutoring`,
    description: defaultDescription,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${fredoka.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink bg-ground">
        <a href="#main-content" className="sr-only skip-link">
          Skip to main content
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
