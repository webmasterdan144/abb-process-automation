import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebPageSchema from '@/components/WebPageSchema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: 'Terms of service for Gross Automation\'s ABB Process Automation services. Learn about the terms and conditions for using our services.',
  openGraph: {
    title: `Terms of Service | ${SITE_CONFIG.name}`,
    description: 'Terms of service for Gross Automation\'s ABB Process Automation services.',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <>
      <WebPageSchema
        title="Terms of Service"
        description="Terms of service for Gross Automation's ABB Process Automation services"
      />

      <Breadcrumbs />

      <main className="min-h-screen bg-gradient-to-b from-abb-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-abb-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-abb-gray-700 mb-4">
                  By accessing and using this website and services provided by {SITE_CONFIG.name}, you accept and agree to be bound
                  by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">2. Services Description</h2>
                <p className="text-abb-gray-700 mb-4">
                  {SITE_CONFIG.name} provides ABB process automation solutions, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-abb-gray-700 space-y-2">
                  <li>Sales and distribution of ABB automation products</li>
                  <li>System integration and engineering services</li>
                  <li>Installation and commissioning services</li>
                  <li>Technical support and training</li>
                  <li>System upgrades and migrations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">3. Service Terms</h2>
                <p className="text-abb-gray-700 mb-4">
                  All services are subject to specific terms and conditions that will be provided in written quotes and contracts.
                  Service agreements supersede these general terms where applicable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="text-abb-gray-700 mb-4">
                  All content on this website, including text, graphics, logos, and software, is the property of {SITE_CONFIG.name},
                  ABB Ltd., or their respective owners and is protected by copyright and trademark laws.
                </p>
                <p className="text-abb-gray-700 mb-4">
                  ABB and related trademarks are the property of ABB Ltd. or its affiliated companies.
                  {SITE_CONFIG.name} is an authorized ABB solution provider.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">5. Product Information and Availability</h2>
                <p className="text-abb-gray-700 mb-4">
                  We strive to provide accurate product information and specifications. However:
                </p>
                <ul className="list-disc pl-6 text-abb-gray-700 space-y-2">
                  <li>Product specifications are subject to change without notice</li>
                  <li>Product availability may vary</li>
                  <li>Prices are subject to change and will be confirmed in written quotes</li>
                  <li>We reserve the right to discontinue products or services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">6. Warranty and Liability</h2>
                <p className="text-abb-gray-700 mb-4">
                  Products and services are covered by manufacturer warranties and our service agreements. Specific warranty
                  terms will be provided with product documentation and service contracts.
                </p>
                <p className="text-abb-gray-700 mb-4">
                  {SITE_CONFIG.name} shall not be liable for indirect, incidental, special, or consequential damages arising
                  from the use or inability to use our products or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">7. Technical Information</h2>
                <p className="text-abb-gray-700 mb-4">
                  Technical information provided on this website is for informational purposes only and should not be used
                  as the sole basis for system design or implementation. Always consult with our technical team for
                  project-specific recommendations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">8. User Conduct</h2>
                <p className="text-abb-gray-700 mb-4">
                  When using our website, you agree not to:
                </p>
                <ul className="list-disc pl-6 text-abb-gray-700 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful code or malware</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">9. Links to Third-Party Sites</h2>
                <p className="text-abb-gray-700 mb-4">
                  Our website may contain links to third-party websites, including ABB&apos;s official website. We are not responsible
                  for the content, privacy policies, or practices of these external sites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">10. Termination</h2>
                <p className="text-abb-gray-700 mb-4">
                  We reserve the right to terminate or suspend access to our website and services at any time, without notice,
                  for conduct that we believe violates these terms or is harmful to other users or our business.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-abb-gray-700 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the State of Illinois,
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="text-abb-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
                  on this page. Your continued use of our website and services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-abb-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
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

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-abb-gray-900 mb-4">14. Severability</h2>
                <p className="text-abb-gray-700 mb-4">
                  If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited
                  or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
