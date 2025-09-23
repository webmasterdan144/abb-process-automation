import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductsShowcase from '@/components/ProductsShowcase';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Review Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Organization",
                "name": "Gross Automation"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Mike Johnson"
              },
              "reviewBody": "Gross Automation delivered an outstanding ABB Freelance DCS implementation for our chemical processing facility. Their 35+ years of experience really showed throughout the project. Professional team, on-time delivery, and excellent ongoing support.",
              "datePublished": "2024-08-15"
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Organization",
                "name": "Gross Automation"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Sarah Mitchell"
              },
              "reviewBody": "We've worked with Gross Automation on multiple ABB System 800xA projects over the years. Their expertise in Wisconsin's manufacturing sector is unmatched. Highly recommend for any industrial automation needs.",
              "datePublished": "2024-07-22"
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Organization",
                "name": "Gross Automation"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "David Rodriguez"
              },
              "reviewBody": "Exceptional service from Gross Automation. Their local Wisconsin presence made all the difference for our power plant automation upgrade. Quick response times and deep ABB system knowledge.",
              "datePublished": "2024-06-10"
            }
          ])
        }}
      />

      <HeroSection />
      <ProductsShowcase />
      <ServicesSection />
      <CTASection />
    </main>
  );
}
