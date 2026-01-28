'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import ABBLogo from './ABBLogo';
import GrossAutomationLogo from './GrossAutomationLogo';
import { EXTERNAL_LINKS } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4">
              <ABBLogo width={100} height={32} />
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex flex-col">
                  <span className="text-abb-gray-800 font-semibold text-sm">Process Automation</span>
                  <span className="text-abb-gray-600 text-xs">by Gross Automation</span>
                </div>
                <GrossAutomationLogo width={80} height={26} />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-abb-gray-700 hover:text-primary transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-abb-gray-700 hover:text-primary transition-colors"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-md shadow-lg border border-abb-gray-200 py-2"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <div className="px-4 py-1.5">
                    <span className="text-xs font-semibold text-abb-gray-400 uppercase tracking-wider">Control Systems</span>
                  </div>
                  <Link href="/products/freelance" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    ABB Freelance DCS
                  </Link>
                  <Link href="/products/800xa" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    ABB Ability System 800xA
                  </Link>
                  <Link href="/products/symphony-plus" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    ABB Ability Symphony Plus
                  </Link>
                  <Link href="/products/compact-control" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    Compact Product Suite
                  </Link>
                  <div className="border-t border-abb-gray-100 my-1"></div>
                  <div className="px-4 py-1.5">
                    <span className="text-xs font-semibold text-abb-gray-400 uppercase tracking-wider">Hardware</span>
                  </div>
                  <Link href="/products/controllers" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    Controllers & PLCs
                  </Link>
                  <Link href="/products/io-systems" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    I/O Systems
                  </Link>
                  <div className="border-t border-abb-gray-100 my-1"></div>
                  <div className="px-4 py-1.5">
                    <span className="text-xs font-semibold text-abb-gray-400 uppercase tracking-wider">Instrumentation</span>
                  </div>
                  <Link href="/products/measurement-analytics" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    Measurement & Analytics
                  </Link>
                  <div className="border-t border-abb-gray-100 my-1"></div>
                  <div className="px-4 py-1.5">
                    <span className="text-xs font-semibold text-abb-gray-400 uppercase tracking-wider">Digital</span>
                  </div>
                  <Link href="/products/digital-solutions" className="block px-4 py-2 text-abb-gray-700 hover:bg-abb-gray-50 hover:text-primary">
                    Digital Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link href="/solutions" className="text-abb-gray-700 hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/support" className="text-abb-gray-700 hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="/about" className="text-abb-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <a href={`${EXTERNAL_LINKS.mainSite}/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect`} className="text-abb-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`${EXTERNAL_LINKS.mainSite}/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect&inquiry_type=quote`}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-abb-gray-700 hover:text-primary"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-abb-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-abb-gray-700 hover:text-primary py-2">
                Home
              </Link>

              <div className="space-y-2">
                <span className="text-abb-gray-800 font-medium">Products</span>
                <div className="pl-4 space-y-2">
                  <Link href="/products/freelance" className="block text-abb-gray-600 hover:text-primary py-1">
                    ABB Freelance DCS
                  </Link>
                  <Link href="/products/800xa" className="block text-abb-gray-600 hover:text-primary py-1">
                    ABB Ability System 800xA
                  </Link>
                  <Link href="/products/symphony-plus" className="block text-abb-gray-600 hover:text-primary py-1">
                    ABB Ability Symphony Plus
                  </Link>
                  <Link href="/products/compact-control" className="block text-abb-gray-600 hover:text-primary py-1">
                    Compact Product Suite
                  </Link>
                  <Link href="/products/controllers" className="block text-abb-gray-600 hover:text-primary py-1">
                    Controllers & PLCs
                  </Link>
                  <Link href="/products/io-systems" className="block text-abb-gray-600 hover:text-primary py-1">
                    I/O Systems
                  </Link>
                  <Link href="/products/measurement-analytics" className="block text-abb-gray-600 hover:text-primary py-1">
                    Measurement & Analytics
                  </Link>
                  <Link href="/products/digital-solutions" className="block text-abb-gray-600 hover:text-primary py-1">
                    Digital Solutions
                  </Link>
                </div>
              </div>

              <Link href="/solutions" className="text-abb-gray-700 hover:text-primary py-2">
                Solutions
              </Link>
              <Link href="/support" className="text-abb-gray-700 hover:text-primary py-2">
                Support
              </Link>
              <Link href="/about" className="text-abb-gray-700 hover:text-primary py-2">
                About
              </Link>
              <a href={`${EXTERNAL_LINKS.mainSite}/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect`} className="text-abb-gray-700 hover:text-primary py-2">
                Contact
              </a>

              <a
                href={`${EXTERNAL_LINKS.mainSite}/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect&inquiry_type=quote`}
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors font-medium text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;