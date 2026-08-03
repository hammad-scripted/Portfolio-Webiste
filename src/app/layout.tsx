import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Editorial display serif — used for all headings.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: `${site.doctorName} — ${site.title}`,
  description: `${site.doctorName}, ${site.credentials}. ${site.tagline} Book a consultation for general medicine and Ayurvedic care.`,
  keywords: [
    "BAMS doctor",
    "Ayurvedic doctor",
    "general physician",
    "Ayurveda",
    site.doctorName,
    "wellness clinic",
  ],
  openGraph: {
    title: `${site.doctorName} — ${site.title}`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
