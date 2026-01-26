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
  title: "ABB Process Automation Solutions Wisconsin | Gross Automation | 35+ Years Experience",
  description: "Leading ABB process automation solutions in Wisconsin & Midwest by Gross Automation. Expert Freelance DCS, System 800xA & Compact Control implementation. Brookfield, WI based with 35+ years experience serving manufacturing, chemical, oil & gas industries.",
  keywords: "ABB process automation Wisconsin, Freelance DCS Wisconsin, System 800xA Wisconsin, ABB automation Brookfield WI, industrial automation Wisconsin, DCS integration Wisconsin, SCADA systems Wisconsin, process control Wisconsin, ABB system integrator Wisconsin, Gross Automation, control systems Wisconsin, PLC programming Wisconsin, manufacturing automation Wisconsin, chemical process automation, oil gas automation Wisconsin, power generation automation",
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "ABB Process Automation Solutions Wisconsin | Gross Automation | 35+ Years Experience",
    description: "Leading ABB process automation solutions in Wisconsin & Midwest by Gross Automation. Expert Freelance DCS, System 800xA & Compact Control implementation with 35+ years experience.",
    url: SITE_CONFIG.url,
    siteName: "Gross Automation - ABB Process Automation Experts Wisconsin",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ABB Process Automation Solutions Wisconsin - Gross Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GrossAutomation",
    title: "ABB Process Automation Solutions Wisconsin | Gross Automation",
    description: "Leading ABB automation solutions in Wisconsin & Midwest. Freelance DCS, System 800xA, Compact Control. 35+ years experience.",
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  verification: {
    google: "verification-code-here",
  },
  other: {
    "geo.region": "US-WI",
    "geo.placename": "Brookfield, Wisconsin",
    "geo.position": "43.0642;-88.1834",
    "ICBM": "43.0642, -88.1834",
    "DC.title": "ABB Process Automation Solutions Wisconsin",
    "DC.creator": SITE_CONFIG.name,
    "DC.subject": "ABB automation, process control, industrial automation",
    "DC.description": "Leading ABB process automation solutions in Wisconsin",
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
                "url": "${SITE_CONFIG.url}",
                "logo": "${SITE_CONFIG.url}/logo.svg",
                "image": "${SITE_CONFIG.url}/og-image.jpg",
                "foundingDate": "1998",
                "founder": {
                  "@type": "Person",
                  "name": "Gross Automation Founders"
                },
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
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                      "opens": "00:00",
                      "closes": "23:59"
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
                  "Control System Engineering"
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
                  "ABB Authorized System Integrator",
                  "ISO 9001:2015 Quality Management",
                  "OSHA 30-Hour Safety Certified"
                ],
                "memberOf": [
                  {
                    "@type": "Organization",
                    "name": "Control System Integrators Association",
                    "alternateName": "CSIA"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "47",
                  "bestRating": "5"
                }
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
          data-site-id="ga_a11ff630610fb3bff3299304cdabd6d4"
          data-auth-key="b34a01880f9d23894ce0d63db6649b33474d125743aacf68d20c93cb2fe1f7abd21c745638247561955d97a90e1eff5070159202f1142163ddd0b08a774592f1"
          data-admin-url="https://admin.grossautomation.com"
          data-manufacturer-code="ABB"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
