import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-serif",
});

const siteUrl = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: { google: "LusECXWOEFOpUUlx8jGXswetRBHqh9kqADs9tC_lKDY" },
  title: {
    default: "Groveport Madison Band Boosters | Supporting GM Bands",
    template: "%s | GM Band Boosters",
  },
  description: SITE.description,
  keywords: [
    "Groveport Madison Band Boosters",
    "band boosters",
    "Groveport Madison",
    "school band",
    "nonprofit",
    "501c3",
    "music education",
    "band fundraising",
    "Groveport Ohio",
    "marching band",
    "school music program",
  ],
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Groveport Madison Band Boosters",
    description:
      "A 501(c)(3) nonprofit providing moral and financial support to students in the Groveport Madison band programs.",
    url: siteUrl,
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1875,
        height: 625,
        alt: "Groveport Madison Band Boosters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groveport Madison Band Boosters",
    description:
      "A 501(c)(3) nonprofit supporting the Groveport Madison band programs.",
    images: ["/images/hero-banner.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description: SITE.description,
  sameAs: [SITE.facebook],
  nonprofitStatus: "Nonprofit501c3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:font-bold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-[64px] sm:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
