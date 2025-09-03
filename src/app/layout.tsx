import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ContactModalContext";
import PageTransition from "@/components/PageTransition";

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
        {/* Favicon and PWA Support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-title" content="julie.design" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#161616" />
        
        {/* iOS PWA Splash Screen */}
        <script src="https://unpkg.com/ios-pwa-splash@1.0.0/cdn.min.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `iosPWASplash('/apple-touch-icon.png', '#161616');`
        }} />
        
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
          <PageTransition>
            {children}
          </PageTransition>
        </ContactModalProvider>
        
        {/* Console Message */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const messages = [
                  'My design is clean.',
                  'My code is dirty.',
                  'Nice to see you here.',
                  'My name is Julie.'
                ];
                
                const colors = [
                  // My design is clean. (18 chars)
                  '#e55922', '#e66225', '#e66c28', '#e7752a', '#e77e2d', '#e88730', '#e89133', '#e99a36', '#e9a338', '#eaac3b', '#eab63e', '#ebbf41', '#ebc844', '#ecd146', '#ecdb49', '#ede44c', '#e4e555', '#dbe55e', '#d2e666',
                  // My code is dirty. (16 chars)
                  '#c8e66f', '#bfe778', '#b6e781', '#ade88a', '#a4e992', '#9be99b', '#92eaa4', '#88eaad', '#7febb5', '#76ebbe', '#6decc7', '#6ce8ca', '#6ae5cc', '#69e1cf', '#68ded2', '#67dad4', '#65d7d7',
                  // Nice to see you here. (19 chars)
                  '#64d3da', '#63d0dc', '#62ccdf', '#60c9e2', '#5fc5e4', '#5ec2e7', '#5dbeea', '#5bbbec', '#5ab7ef', '#61b3ef', '#69aff0', '#70acf0', '#77a8f1', '#7fa4f1', '#86a0f2', '#8e9df2', '#9599f2', '#9c95f3', '#a491f3', '#ab8df4', '#b28af4',
                  // My name is Julie. (16 chars)
                  '#ba86f5', '#c182f5', '#c583f6', '#c884f6', '#cc84f7', '#d085f8', '#d386f8', '#d787f9', '#db88fa', '#de88fa', '#e289fb', '#e68afc', '#e98bfc', '#ed8cfd', '#f18cfe', '#f48dfe', '#f88eff'
                ];
                
                let colorIndex = 0;
                
                messages.forEach((message, lineIndex) => {
                  let coloredMessage = '';
                  for (let i = 0; i < message.length; i++) {
                    const color = colors[colorIndex % colors.length];
                    coloredMessage += '%c' + message[i];
                    colorIndex++;
                  }
                  console.log(coloredMessage, ...Array.from({length: message.length}, (_, i) => 
                    'color: ' + colors[(colorIndex - message.length + i) % colors.length] + '; font-weight: normal; font-size: 14px;'
                  ));
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
