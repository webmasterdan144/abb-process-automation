import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import ABBLogo from './ABBLogo';
import GrossAutomationLogo from './GrossAutomationLogo';
import { SITE_CONFIG, EXTERNAL_LINKS, CONTACT_INFO } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-abb-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-4">
              {/* ABB Logo */}
              <div className="flex items-center space-x-3">
                <ABBLogo width={100} height={32} className="filter brightness-0 invert" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">Process Automation</span>
                  <span className="text-abb-gray-400 text-xs">Solutions</span>
                </div>
              </div>

              {/* Gross Automation Logo */}
              <div className="flex items-center">
                <GrossAutomationLogo width={120} height={40} className="filter brightness-0 invert" />
              </div>
            </div>
            <p className="text-abb-gray-300 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}. Expert solutions including Freelance DCS,
              System 800xA, and Compact Control systems.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/freelance" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  ABB Freelance DCS
                </Link>
              </li>
              <li>
                <Link href="/products/800xa" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  System 800xA
                </Link>
              </li>
              <li>
                <Link href="/products/compact-control" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  Compact Control Builder
                </Link>
              </li>
              <li>
                <Link href="/products/controllers" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  Controllers
                </Link>
              </li>
              <li>
                <Link href="/products/io-systems" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  I/O Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/engineering" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  System Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/integration" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="/services/commissioning" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  Commissioning
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  Training & Support
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-abb-gray-300 text-sm">
                  <div>{CONTACT_INFO.address.street}</div>
                  <div>{CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`} className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  {SITE_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}?subject=ABBTOW%20Referral%20${SITE_CONFIG.name}`} className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={EXTERNAL_LINKS.mainSite} className="text-abb-gray-300 hover:text-white transition-colors text-sm">
                  {EXTERNAL_LINKS.mainSite.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-abb-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-abb-gray-400 text-sm">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-abb-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-abb-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <a href="/sitemap.xml" className="text-abb-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-abb-gray-500 text-xs">
              ABB and the ABB logo are trademarks of ABB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;