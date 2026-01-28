import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, Clock, Shield, Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DCS Migration Guide: Legacy to ABB Freelance & 800xA | Gross Automation',
  description: 'Strategies for migrating legacy control systems to modern ABB platforms. Learn about migration approaches, planning considerations, and best practices for DCS upgrades.',
  keywords: 'DCS migration, legacy control system upgrade, ABB migration, Freelance migration, 800xA migration, control system modernization',
};

export default function DCSMigrationGuide() {
  const faqItems = [
    {
      question: 'Why should I migrate my legacy DCS?',
      answer: 'Legacy DCS systems face increasing risks: obsolete spare parts, lack of vendor support, cybersecurity vulnerabilities, inability to integrate with modern systems, and difficulty finding engineers with legacy expertise. Migration reduces these risks while enabling modern capabilities.',
    },
    {
      question: 'What migration approaches are available?',
      answer: 'Three main approaches: (1) Rip-and-replace: complete system replacement during a shutdown; (2) Hot cutover: parallel installation with live switchover minimizing downtime; (3) Phased migration: gradual replacement area by area over time. The best approach depends on process criticality, budget, and operational constraints.',
    },
    {
      question: 'How long does a DCS migration take?',
      answer: 'Migration timeline varies significantly based on system size, complexity, and approach. A small system rip-and-replace might complete in weeks; a large phased migration can span years. Planning and engineering typically take 3-12 months before any field work begins.',
    },
    {
      question: 'Can I keep my existing I/O wiring during migration?',
      answer: 'Often yes. ABB offers I/O marshalling solutions that can connect to existing field wiring, avoiding expensive rewiring. This is especially valuable for hot cutover migrations where the new system parallels the old before switchover.',
    },
    {
      question: 'What legacy systems can migrate to ABB Freelance or 800xA?',
      answer: 'ABB has migration paths from most major legacy platforms including: older ABB systems (Advant, MOD 300, Symphony), Honeywell TDC/Experion, Emerson DeltaV/Ovation, Yokogawa CENTUM, Foxboro I/A, Bailey INFI 90, and many others. Contact us for your specific legacy system.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'DCS Migration Guide: Legacy to ABB Freelance & 800xA',
    description: metadata.description,
    author: {
      '@type': 'Organization',
      name: 'Gross Automation',
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gross Automation',
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: `${SITE_CONFIG.url}/guides/dcs-migration`,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-abb-gray-500 mb-6">
              <Link href="/guides" className="hover:text-primary">Guides</Link>
              <span className="mx-2">/</span>
              <span className="text-abb-gray-900">DCS Migration</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              DCS Migration Guide
            </h1>

            <p className="text-xl text-abb-gray-600 mb-8">
              Strategies for migrating legacy control systems to modern ABB Freelance and System 800xA platforms.
            </p>

            {/* Quick Answer Box */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h2 className="font-semibold text-abb-gray-900 mb-2">Quick Overview</h2>
              <p className="text-abb-gray-700">
                <strong>DCS migration</strong> is the process of replacing an aging or obsolete control system with a modern platform. ABB offers migration paths to Freelance (small-medium facilities) or System 800xA (enterprise facilities) from most legacy DCS vendors. Key decisions include migration approach (rip-and-replace, hot cutover, or phased), scope, timing, and whether to reuse existing field wiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Why Migrate */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Why Migrate Your Legacy DCS?</h2>
              <p className="text-abb-gray-600 mb-6">
                Control systems have finite lifecycles. As systems age, organizations face mounting challenges that eventually make migration necessary:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-abb-gray-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-abb-gray-900 mb-1">Obsolete Parts</h4>
                      <p className="text-sm text-abb-gray-600">Spare parts become unavailable or prohibitively expensive as vendors discontinue production.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-abb-gray-900 mb-1">Cybersecurity Risks</h4>
                      <p className="text-sm text-abb-gray-600">Legacy systems lack modern security features and no longer receive patches or updates.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-abb-gray-900 mb-1">Vendor Support Ends</h4>
                      <p className="text-sm text-abb-gray-600">Technical support, documentation, and engineering expertise become unavailable.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-abb-gray-900 mb-1">Limited Integration</h4>
                      <p className="text-sm text-abb-gray-600">Legacy systems cannot integrate with modern analytics, cloud platforms, or IT systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Migration Approaches */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Migration Approaches</h2>
              <div className="space-y-6">

                <div className="bg-white border border-abb-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-abb-gray-900 text-white px-6 py-4">
                    <h3 className="font-semibold text-lg">1. Rip-and-Replace</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-abb-gray-600 mb-4">
                      Complete removal of the legacy system and installation of the new system during a planned shutdown.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Advantages</h4>
                        <ul className="space-y-1 text-sm text-abb-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Clean installation, no legacy remnants</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Lower total project cost</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Simpler project management</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Disadvantages</h4>
                        <ul className="space-y-1 text-sm text-abb-gray-600">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Extended downtime required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Higher startup risk</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Requires shutdown window</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-abb-gray-50 rounded-lg p-4">
                      <p className="text-sm text-abb-gray-600"><strong>Best for:</strong> Facilities with planned turnarounds, smaller systems, or processes that can tolerate extended downtime.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-abb-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-primary text-white px-6 py-4">
                    <h3 className="font-semibold text-lg">2. Hot Cutover</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-abb-gray-600 mb-4">
                      New system installed in parallel with the legacy system, then switched over with minimal production interruption.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Advantages</h4>
                        <ul className="space-y-1 text-sm text-abb-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Minimal production loss</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Lower startup risk—can test before cutover</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Rollback possible if issues arise</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Disadvantages</h4>
                        <ul className="space-y-1 text-sm text-abb-gray-600">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Higher project cost (parallel systems)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>More complex project execution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Requires space for temporary equipment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-abb-gray-600"><strong>Best for:</strong> Continuous processes where downtime is extremely costly, critical facilities, or risk-averse organizations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-abb-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-green-700 text-white px-6 py-4">
                    <h3 className="font-semibold text-lg">3. Phased Migration</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-abb-gray-600 mb-4">
                      Gradual replacement of the legacy system area by area or unit by unit over an extended period.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Advantages</h4>
                        <ul className="space-y-1 text-sm text-abb-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Spread capital investment over time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Learn and improve with each phase</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Align with maintenance windows</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Disadvantages</h4>
                        <ul className="space-y-1 text-sm text-abb-gray-600">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Longer total project duration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Must maintain two systems simultaneously</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>Integration between old and new required</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-abb-gray-600"><strong>Best for:</strong> Large facilities, limited capital budgets, or when migration can align with planned expansions or unit turnarounds.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Planning Considerations */}
            <div className="bg-abb-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Planning Considerations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-abb-gray-900 mb-3">1. Documentation Assessment</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Evaluate existing documentation: P&IDs, loop sheets, control narratives, graphics. Poor documentation increases engineering effort and risk. Consider as-built documentation projects before migration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-abb-gray-900 mb-3">2. I/O and Field Device Inventory</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Catalog all I/O points, field devices, and communication protocols. Identify devices that need replacement versus those that can interface with the new system. Plan for instrument calibration and testing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-abb-gray-900 mb-3">3. Control Strategy Review</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Migration is an opportunity to optimize control strategies. Review PID tuning, batch sequences, and interlocks. Consider which logic to replicate exactly versus which to improve.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-abb-gray-900 mb-3">4. Operator Training</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Plan comprehensive operator training on the new system. Consider simulation-based training before cutover. Involve operators early to capture process knowledge and build buy-in.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-abb-gray-900 mb-3">5. Spare Parts Strategy</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Establish spare parts inventory for the new system. Consider ABB's lifecycle services and spare parts programs. Plan for disposal of legacy spare parts.
                  </p>
                </div>
              </div>
            </div>

            {/* ABB Migration Solutions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">ABB Migration Solutions</h2>
              <p className="text-abb-gray-600 mb-6">
                ABB provides migration tools and methodologies for transitioning from various legacy platforms:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-3">To ABB Freelance</h3>
                  <p className="text-sm text-abb-gray-600 mb-4">
                    Ideal for small to mid-size facilities seeking an efficient, cost-effective DCS with modern capabilities.
                  </p>
                  <ul className="space-y-2 text-sm text-abb-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>DigiVis engineering environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>AC700F/AC800F/AC900F controllers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Integrated HMI and historian</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-3">To ABB System 800xA</h3>
                  <p className="text-sm text-abb-gray-600 mb-4">
                    For enterprise facilities requiring integrated process, electrical, and safety control.
                  </p>
                  <ul className="space-y-2 text-sm text-abb-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>AC800M high-performance controllers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Electrical integration (IEC 61850)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Integrated safety systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legacy Systems */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Common Legacy Systems</h2>
              <p className="text-abb-gray-600 mb-4">
                ABB has migration experience from most major legacy DCS platforms:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'ABB Advant',
                  'ABB MOD 300',
                  'ABB Symphony',
                  'Bailey INFI 90',
                  'Honeywell TDC',
                  'Honeywell Experion',
                  'Emerson DeltaV',
                  'Emerson Ovation',
                  'Yokogawa CENTUM',
                  'Foxboro I/A',
                  'Siemens PCS 7',
                  'Fisher PROVOX',
                ].map((system, index) => (
                  <div key={index} className="bg-white border border-abb-gray-200 rounded-lg px-4 py-3 text-sm text-abb-gray-700 text-center">
                    {system}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white border border-abb-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-abb-gray-900 mb-2">{item.question}</h3>
                    <p className="text-abb-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Guides */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/guides/freelance-vs-800xa"
                  className="flex items-center gap-3 bg-white border border-abb-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-abb-gray-900 group-hover:text-primary transition-colors">Freelance vs System 800xA</h4>
                    <p className="text-sm text-abb-gray-600">Choose the right target platform</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-abb-gray-400 group-hover:text-primary" />
                </Link>
                <Link
                  href="/guides/controller-selection"
                  className="flex items-center gap-3 bg-white border border-abb-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-abb-gray-900 group-hover:text-primary transition-colors">ABB Controller Selection Guide</h4>
                    <p className="text-sm text-abb-gray-600">Choose the right controller</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-abb-gray-400 group-hover:text-primary" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">
                Planning a DCS Migration?
              </h2>
              <p className="text-abb-gray-600 mb-6 max-w-2xl mx-auto">
                With 35+ years of ABB automation experience, Gross Automation can help you plan and execute
                your migration to modern ABB Freelance or System 800xA—and provide competitive pricing on all components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Discuss Your Migration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white border border-abb-gray-300 text-abb-gray-700 px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Browse ABB Products
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
