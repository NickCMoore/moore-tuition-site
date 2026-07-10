import type { Metadata } from "next";
import { Fredoka, Lexend } from "next/font/google";
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

const siteUrl = "https://mooretuition.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moore Tuition | 11+ & 13+ Tutoring in Lymm, Cheshire",
    template: "%s | Moore Tuition",
  },
  description:
    "1-to-1 English, Maths and Reasoning tutoring for 11+ and 13+ entrance exams, in person in Lymm, Cheshire or online across the UK.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Moore Tuition",
    title: "Moore Tuition | 11+ & 13+ Tutoring in Lymm, Cheshire",
    description:
      "1-to-1 English, Maths and Reasoning tutoring for 11+ and 13+ entrance exams, in person in Lymm or online.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moore Tuition — classroom tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moore Tuition | 11+ & 13+ Tutoring",
    description:
      "1-to-1 English, Maths and Reasoning tutoring for 11+ and 13+ entrance exams.",
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
      lang="en"
      className={`${fredoka.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink bg-ground">
        {children}
      </body>
    </html>
  );
}
