import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebPageSchema from '@/components/WebPageSchema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: 'Privacy policy for Gross Automation\'s ABB Process Automation services. Learn how we collect, use, and protect your information.',
  openGraph: {
    title: `Privacy Policy | ${SITE_CONFIG.name}`,
    description: 'Privacy policy for Gross Automation\'s ABB Process Automation services.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <WebPageSchema
        title="Privacy Policy"
        description="Privacy policy for Gross Automation's ABB Process Automation services"
      />

      <Breadcrumbs />

      <main className="min-h-screen bg-gradient-to-b from-abb-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-abb-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-abb-gray-700 mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 text-abb-gray-700 space-y-2">
                  <li>Contact us through forms on our website</li>
                  <li>Request quotes or information about our services</li>
                  <li>Subscribe to our newsletters or updates</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-abb-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-abb-gray-700 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process your requests for quotes and services</li>
                  <li>Send you technical updates and marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-abb-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-abb-gray-700 space-y-2">
                  <li>Service providers who assist us in operating our website and conducting our business</li>
                  <li>ABB and authorized partners when necessary to fulfill service requests</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">4. Cookies and Tracking</h2>
                <p className="text-abb-gray-700 mb-4">
                  We use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic.
                  We use Google Tag Manager for analytics purposes. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">5. Data Security</h2>
                <p className="text-abb-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-abb-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-abb-gray-700 space-y-2">
                  <li>Access and review the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">7. Children's Privacy</h2>
                <p className="text-abb-gray-700 mb-4">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">8. Changes to This Policy</h2>
                <p className="text-abb-gray-700 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting
                  the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-abb-gray-700 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-abb-gray-50 p-6 rounded-lg">
                  <p className="text-abb-gray-700 mb-2">
                    <strong>{SITE_CONFIG.name}</strong>
                  </p>
                  <p className="text-abb-gray-700 mb-2">
                    Phone: <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary hover:text-primary-dark">{SITE_CONFIG.phone}</a>
                  </p>
                  <p className="text-abb-gray-700">
                    Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:text-primary-dark">{SITE_CONFIG.email}</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
