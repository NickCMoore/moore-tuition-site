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

export const metadata: Metadata = {
  title: {
    default: "Moore Tuition | 11+ & 13+ Tutoring in Lymm, Cheshire",
    template: "%s | Moore Tuition",
  },
  description:
    "Moore Tuition offers 1-to-1 English, Maths and Reasoning tutoring for 11+ and 13+ entrance exams, in person in Lymm, Cheshire or online.",
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
