import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WebPageSchema from "@/components/WebPageSchema";
import AnimatedBackground from "@/components/AnimatedBackground";
import Script from "next/script";
import { SITE_CONFIG, ANALYTICS } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABB Process Automation | Shop DCS & SCADA Systems | Gross Automation",
  description: "Shop ABB process automation systems at Gross Automation. DCS platforms, controllers, I/O modules, and instrumentation with expert integration services nationwide.",
  keywords: "ABB process automation, ABB DCS, ABB SCADA, Freelance DCS, System 800xA, ABB controllers, process control systems, industrial automation, DCS integration",
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "ABB Process Automation | Shop DCS & SCADA Systems | Gross Automation",
    description: "Shop ABB process automation systems at Gross Automation. DCS platforms, controllers, I/O modules, and instrumentation with expert integration services nationwide.",
    url: SITE_CONFIG.url,
    siteName: "Gross Automation - ABB Process Automation Experts",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ABB Process Automation - DCS and SCADA Systems - Gross Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GrossAutomation",
    title: "ABB Process Automation | Shop DCS & SCADA Systems",
    description: "Shop ABB process automation systems. DCS platforms, controllers, and instrumentation with expert integration services.",
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  verification: {
    google: "verification-code-here",
  },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "DC.title": "ABB Process Automation - DCS and SCADA Systems",
    "DC.creator": SITE_CONFIG.name,
    "DC.subject": "ABB automation, DCS, SCADA, process control",
    "DC.description": "Shop ABB process automation systems nationwide",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Critical CSS Inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: system-ui, -apple-system, sans-serif; }
            .abb-text-gradient { background: linear-gradient(135deg, #FF000F 0%, #CC000C 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          `
        }} />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${ANALYTICS.gtmId}');
            `,
          }}
        />

        {/* Structured Data - Organization & Local Business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "LocalBusiness"],
                "name": "Gross Automation",
                "alternateName": ["ABB Process Automation Solutions", "Gross Automation Inc"],
                "url": SITE_CONFIG.url,
                "logo": `${SITE_CONFIG.url}/logo.svg`,
                "image": `${SITE_CONFIG.url}/og-image.jpg`,
                "foundingDate": "1998",
                "numberOfEmployees": "10-50",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-262-252-1600",
                    "contactType": "sales",
                    "areaServed": ["US", "Wisconsin", "Illinois", "Minnesota", "Iowa", "Michigan", "Indiana"],
                    "availableLanguage": "en",
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    }
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-262-252-1600",
                    "contactType": "customer service",
                    "areaServed": "US",
                    "availableLanguage": "en"
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-262-252-1600",
                    "contactType": "technical support",
                    "areaServed": "US",
                    "availableLanguage": "en",
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    }
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3680 N. 126th St.",
                  "addressLocality": "Brookfield",
                  "addressRegion": "WI",
                  "postalCode": "53005",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "43.0642",
                  "longitude": "-88.1834"
                },
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Wisconsin"
                  },
                  {
                    "@type": "State",
                    "name": "Illinois"
                  },
                  {
                    "@type": "State",
                    "name": "Minnesota"
                  },
                  {
                    "@type": "State",
                    "name": "Iowa"
                  },
                  {
                    "@type": "State",
                    "name": "Michigan"
                  },
                  {
                    "@type": "State",
                    "name": "Indiana"
                  }
                ],
                "sameAs": [
                  "https://grossautomation.com"
                ],
                "description": "Expert ABB process automation solutions including Freelance DCS, System 800xA, and Compact Control systems. Serving Wisconsin, Illinois, and the greater Midwest with 35+ years of experience.",
                "knowsAbout": [
                  "ABB Freelance DCS",
                  "ABB System 800xA",
                  "ABB Compact Control Builder",
                  "Process Automation",
                  "Industrial Control Systems",
                  "SCADA Systems",
                  "DCS Implementation",
                  "System Integration",
                  "Control System Engineering",
                  "ABB Ability Symphony Plus",
                  "ABB Measurement & Analytics",
                  "ABB Genix",
                  "Digital Twin",
                  "IEC 62443 Cybersecurity"
                ],
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "43.0642",
                    "longitude": "-88.1834"
                  },
                  "geoRadius": "500000"
                },
                "hasCredential": [
                  "ABB Authorized Distributor (as reported by Gross Automation)",
                  "ISO 9001:2015 (as reported by Gross Automation)",
                  "OSHA Safety Training (as reported by Gross Automation)"
                ],
                "memberOf": [
                  {
                    "@type": "Organization",
                    "name": "Control System Integrators Association",
                    "alternateName": "CSIA"
                  }
                ],
              }
            ])
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AnimatedBackground />
        <WebPageSchema />
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />

        <Script
          src="/ga-microsite.js"
          data-site-id="ga_db84fc8a8d0483420059420b54f7255ef571b0e2978ac6d983a30337dae8"
          data-auth-key="6bd72d0f7013d056a3a53977576b10cb6026bb4eb96dcd7190d514362cbcd96bafa0b15ed5f9ba57ddc1375681a0fdf1199da96b73ad15e1a9e38d85b4b5f74b"
          data-admin-url="https://admin.grossautomation.com"
          data-manufacturer-code="ABBTOW"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
