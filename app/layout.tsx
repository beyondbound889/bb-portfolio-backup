import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/nav/ScrollProgress";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://beyondbound.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Priyanshu Chauhan — Founder & Director, Beyond Bound®",
    template: "%s · Priyanshu Chauhan",
  },
  description:
    "Priyanshu Chauhan is a healthcare founder building evidence-driven, preventive-wellness products for India. Founder & Director of Beyond Bound® and creator of Glycomics™.",
  keywords: [
    "Priyanshu Chauhan",
    "Beyond Bound",
    "Glycomics",
    "preventive healthcare India",
    "metabolic wellness",
    "healthcare founder",
    "Ayurveda evidence-based",
  ],
  authors: [{ name: "Priyanshu Chauhan" }],
  creator: "Priyanshu Chauhan",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: "Priyanshu Chauhan — Founder & Director, Beyond Bound®",
    description:
      "Building preventive healthcare India can trust — measured, not marketed.",
    siteName: "Priyanshu Chauhan",
    images: [{ url: "/og/og.png", width: 1200, height: 630, alt: "Priyanshu Chauhan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Chauhan — Founder & Director, Beyond Bound®",
    description:
      "Building preventive healthcare India can trust — measured, not marketed.",
    images: ["/og/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1413" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Priyanshu Chauhan",
  jobTitle: "Founder & Director",
  worksFor: {
    "@type": "Organization",
    name: "Beyond Bound",
    brand: "Beyond Bound®",
    url: site.company,
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "K J Somaiya Institute of Management" },
    { "@type": "CollegeOrUniversity", name: "Mahatma Jyotiba Phule Rohilkhand University" },
  ],
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.company],
  knowsAbout: [
    "Preventive healthcare",
    "Metabolic wellness",
    "Product development",
    "Ayurveda",
    "Entrepreneurship",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable}`}
      style={
        {
          // expose Geist via the same var names tailwind expects
          "--font-geist": "var(--font-geist-sans)",
        } as React.CSSProperties
      }
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <AmbientBackground />
          <PremiumCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
