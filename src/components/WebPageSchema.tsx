'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';

interface WebPageSchemaProps {
  title?: string;
  description?: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'ProductPage' | 'ServicePage' | 'FAQPage';
  breadcrumbList?: Array<{ name: string; url: string }>;
}

const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  title,
  description,
  pageType = 'WebPage',
  breadcrumbList
}) => {
  const pathname = usePathname();
  const baseUrl = SITE_CONFIG.url;
  const currentUrl = `${baseUrl}${pathname}`;

  // Generate default breadcrumbs if not provided
  const generateBreadcrumbs = () => {
    if (breadcrumbList) return breadcrumbList;

    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [{ name: 'Home', url: baseUrl }];

    pathSegments.forEach((segment, index) => {
      const url = baseUrl + '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('800xa', '800xA')
        .replace('Abb', 'ABB');

      breadcrumbs.push({ name, url });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": title || 'ABB Process Automation Solutions',
    "description": description || 'Expert ABB process automation solutions by Gross Automation',
    "url": currentUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gross Automation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3680 N. 126th St.",
        "addressLocality": "Brookfield",
        "addressRegion": "WI",
        "postalCode": "53005",
        "addressCountry": "US"
      },
      "telephone": "+1-262-252-1600",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.svg`
    },
    "provider": {
      "@type": "Organization",
      "name": "Gross Automation"
    },
    "about": {
      "@type": "Thing",
      "name": "ABB Process Automation",
      "description": "Industrial automation solutions including Freelance DCS, System 800xA, and Compact Control systems"
    },
    "keywords": [
      "ABB automation",
      "process control",
      "industrial automation",
      "DCS systems",
      "Gross Automation",
      "Wisconsin automation",
      "Freelance DCS",
      "System 800xA"
    ],
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "ABB Process Automation Solutions by Gross Automation",
      "url": baseUrl
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageSchema)
      }}
    />
  );
};

export default WebPageSchema;