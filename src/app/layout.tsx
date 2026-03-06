import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "BAALVION – Global B2B Trade Platform | AI & Compliance Ready",
    template: "%s | BAALVION"
  },
  description: "BAALVION is a next-gen global B2B trade platform offering AI-driven trade intelligence, secure payments, vendor scoring, and compliance automation for businesses worldwide.",
  keywords: "global B2B platform, cross-border trade, trade compliance, trade finance, vendor scoring, AI trade intelligence, logistics optimization",
  metadataBase: new URL('https://baalvion.industries'),
  openGraph: {
    title: "BAALVION – The Global Operating System for Trade",
    description: "Connecting 198+ countries through intelligent trade infrastructure.",
    url: "https://baalvion.industries",
    siteName: "BAALVION",
    images: [
      {
        url: "https://picsum.photos/seed/baalvion-og/1200/630",
        width: 1200,
        height: 630,
        alt: "BAALVION Global Trade Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAALVION | Global B2B Trade Infrastructure",
    description: "Next-gen AI and Compliance for global trade.",
    images: ["https://picsum.photos/seed/baalvion-twitter/1200/630"],
    creator: "@baalvion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BAALVION Industries Pvt. Ltd.",
    "url": "https://baalvion.industries",
    "logo": "https://picsum.photos/seed/baalvion-logo/200/200",
    "foundingDate": "2025",
    "description": "Global B2B trade platform connecting 198+ countries with AI and Compliance.",
    "sameAs": [
      "https://twitter.com/baalvion",
      "https://linkedin.com/company/baalvion"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@baalvion.industries",
      "areaServed": "Global"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    }
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BAALVION Platform",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-[#111827]`}>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
