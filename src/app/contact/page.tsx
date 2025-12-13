'use client';

import React, { useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    // Redirect to Gross Automation contact page with abbatow source after a brief delay
    const timer = setTimeout(() => {
      const grossAutomationUrl = 'https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect';
      window.location.href = grossAutomationUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualRedirect = () => {
    const grossAutomationUrl = 'https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect';
    window.location.href = grossAutomationUrl;
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-abb-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ExternalLink className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                Redirecting to Gross Automation
              </h1>
              <p className="text-xl text-abb-gray-600 leading-relaxed">
                You&apos;re being redirected to our main contact page to get in touch with our ABB automation experts.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-abb-gray-900">
                  Contact Gross Automation
                </h2>
                <p className="text-abb-gray-600">
                  Get expert consultation for your ABB process automation needs including
                  Freelance DCS, System 800xA, and Compact Control systems.
                </p>

                <button
                  onClick={handleManualRedirect}
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium w-full"
                >
                  Continue to Contact Form
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="text-sm text-abb-gray-500">
              If you&apos;re not redirected automatically, click the button above or call us directly at{' '}
              <a href="tel:+12622521600" className="text-primary hover:text-primary-dark">
                +1 (262) 252-1600
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}