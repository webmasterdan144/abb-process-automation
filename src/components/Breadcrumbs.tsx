'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { ChevronRight, Home } from 'lucide-react';
import TrustIndicators from './TrustIndicators';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customItems }) => {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;

    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');

      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('800xa', '800xA')
        .replace('Abb', 'ABB')
        .replace('Dcs', 'DCS');

      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  // Generate JSON-LD structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `${SITE_CONFIG.url}${item.href}`
    }))
  };

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="abb-gradient py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;

                return (
                  <li key={item.href} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="w-4 h-4 text-white/60 mx-2" />
                    )}

                    {isLast ? (
                      <span
                        className="text-white font-medium"
                        aria-current="page"
                      >
                        {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="hidden md:block">
              <TrustIndicators variant="onRed" compact={true} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;