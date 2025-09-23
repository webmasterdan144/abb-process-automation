'use client';

import React, { useEffect } from 'react';
import { ExternalLink, ArrowRight, FileText } from 'lucide-react';

export default function QuotePage() {
  useEffect(() => {
    // Redirect to Gross Automation contact page with quote-specific parameters
    const timer = setTimeout(() => {
      const grossAutomationUrl = 'https://www.grossautomation.com/contact?source=abbatow&utm_medium=website&utm_campaign=secure-redirect&inquiry_type=quote';
      window.location.href = grossAutomationUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualRedirect = () => {
    const grossAutomationUrl = 'https://www.grossautomation.com/contact?source=abbatow&utm_medium=website&utm_campaign=secure-redirect&inquiry_type=quote';
    window.location.href = grossAutomationUrl;
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-abb-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                Request Your ABB Automation Quote
              </h1>
              <p className="text-xl text-abb-gray-600 leading-relaxed">
                You're being redirected to request a custom quote for your ABB process automation project.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-abb-gray-900">
                  Get Your Custom Quote
                </h2>
                <p className="text-abb-gray-600">
                  Request detailed pricing for ABB automation solutions including Freelance DCS,
                  System 800xA, Compact Control Builder, and complete system integration services.
                </p>

                <div className="text-left space-y-2">
                  <div className="flex items-center text-sm text-abb-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Custom system design and engineering
                  </div>
                  <div className="flex items-center text-sm text-abb-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Hardware and software licensing
                  </div>
                  <div className="flex items-center text-sm text-abb-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Installation and commissioning services
                  </div>
                  <div className="flex items-center text-sm text-abb-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Training and ongoing support
                  </div>
                </div>

                <button
                  onClick={handleManualRedirect}
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium w-full"
                >
                  Continue to Quote Request
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="text-sm text-abb-gray-500">
              If you're not redirected automatically, click the button above or call us directly at{' '}
              <a href="tel:+12622521600" className="text-primary hover:text-primary-dark">
                +1 (262) 252-1600
              </a>
              {' '}for immediate assistance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}