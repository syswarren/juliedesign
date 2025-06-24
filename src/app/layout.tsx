import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ContactModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julie Chabin — Product Designer & Early-Stage Partner",
  description: "Product designer helping early-stage startups launch smarter. Branding, product, and tools—with a clear, fast, no-fluff approach.",
  keywords: "Julie Chabin, Product Designer, Freelance Product Designer, Startup Design Partner, UI/UX Designer, MVP Design, Brand Identity, Web Design, Product Strategy, Digital Design, France, Product Hunt Designer, AI Product Design, Early-Stage Product Design, Designing First Version, Figma, Webflow",
  authors: [{ name: "Julie Chabin" }],
  creator: "Julie Chabin",
  publisher: "Julie Chabin",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://juliechabin.com',
    title: 'Julie Chabin — Product Designer & Early-Stage Partner',
    description: 'I help startups shape thoughtful products, fast. Design, brand, strategy. Formerly Head of Product Design at Product Hunt.',
    siteName: 'Julie Chabin',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Julie Chabin - Product Designer & Early-Stage Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julie Chabin — Product Designer & Early-Stage Partner',
    description: 'I help startups shape thoughtful products, fast. Design, brand, strategy. Formerly Head of Product Design at Product Hunt.',
    images: ['/og-image.jpg'],
    creator: '@juliechabin',
  },
  alternates: {
    canonical: 'https://juliechabin.com',
  },
  metadataBase: new URL('https://juliechabin.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jacquard+12&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=manrope@200,400,600&display=swap" rel="stylesheet" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Julie Chabin",
              "jobTitle": "Product Designer & Early-Stage Partner",
              "description": "Product designer helping early-stage startups launch smarter. Branding, product, and tools—with a clear, fast, no-fluff approach.",
              "url": "https://julie.design",
              "sameAs": [
                "https://twitter.com/syswarren",
                "https://linkedin.com/in/juliechabin"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Product Hunt"
              },
              "knowsAbout": [
                "Product Design",
                "UI/UX Design",
                "Startup Design",
                "Brand Identity",
                "Product Strategy",
                "AI Product Design"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <ContactModalProvider>
          {children}
        </ContactModalProvider>
      </body>
    </html>
  );
}
