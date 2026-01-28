import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Cpu } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABB Controller Selection Guide: AC700F vs AC800F vs AC900F | Gross Automation',
  description: 'How to choose between ABB Freelance controllers. Compare AC700F, AC800F, and AC900F specifications, applications, and recommendations for your process automation project.',
  keywords: 'ABB controller selection, AC700F, AC800F, AC900F, Freelance controller, ABB DCS controller, process controller comparison',
};

export default function ControllerSelectionGuide() {
  const faqItems = [
    {
      question: 'What is the difference between AC700F, AC800F, and AC900F?',
      answer: 'AC700F is the compact controller for small applications (up to ~500 I/O). AC800F is the mid-range controller for medium applications (up to ~2,000 I/O). AC900F is the latest generation with enhanced performance, cybersecurity, and edge computing capabilities for modern applications.',
    },
    {
      question: 'Which ABB controller should I choose for a new project?',
      answer: 'For new projects, the AC900F is generally recommended as the latest generation with best-in-class cybersecurity and future-proof capabilities. Choose AC800F for proven reliability in critical applications. AC700F suits small, cost-sensitive projects.',
    },
    {
      question: 'Can I mix different ABB controllers in one system?',
      answer: 'Yes. Freelance DCS architecture supports mixing AC700F, AC800F, and AC900F controllers on the same network. This allows you to choose the right controller for each area based on requirements and upgrade existing systems incrementally.',
    },
    {
      question: 'What is the difference between F-line and M-line controllers?',
      answer: 'F-line controllers (AC700F, AC800F, AC900F) are for Freelance DCS—designed for small to mid-size process applications. M-line controllers (AC800M) are for System 800xA—designed for enterprise-level facilities. They are parallel product families, not replacements for each other.',
    },
    {
      question: 'Is the AC700F being discontinued?',
      answer: 'No. All F-line controllers (AC700F, AC800F, AC900F) remain active products. ABB maintains long product lifecycles with extended support. The AC900F is the newest addition, but AC700F and AC800F continue to be manufactured and supported.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'ABB Controller Selection Guide: AC700F vs AC800F vs AC900F',
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
    mainEntityOfPage: `${SITE_CONFIG.url}/guides/controller-selection`,
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
              <span className="text-abb-gray-900">Controller Selection</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              ABB Controller Selection Guide
            </h1>

            <p className="text-xl text-abb-gray-600 mb-8">
              How to choose between AC700F, AC800F, and AC900F controllers for your Freelance DCS application.
            </p>

            {/* Quick Answer Box */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h2 className="font-semibold text-abb-gray-900 mb-2">Quick Recommendation</h2>
              <p className="text-abb-gray-700">
                <strong>New projects:</strong> Start with <strong>AC900F</strong> for best-in-class cybersecurity and future-proof capabilities. <strong>Cost-sensitive small projects:</strong> Consider <strong>AC700F</strong> for up to ~500 I/O. <strong>Existing AC800F systems:</strong> Continue with <strong>AC800F</strong> for consistency, or upgrade to AC900F for new areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Controller Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">ABB Freelance Controller Family</h2>
              <p className="text-abb-gray-600 mb-6">
                The Freelance DCS uses F-line controllers—the "F" designating the Freelance product family. All three generations remain active products with full ABB support. They share the same DigiVis engineering environment and can coexist on the same network.
              </p>

              {/* Controller Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-abb-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-abb-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-abb-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold text-abb-gray-900 mb-2">AC700F</h3>
                  <p className="text-sm text-abb-gray-500 mb-3">Compact Controller</p>
                  <p className="text-abb-gray-600 text-sm mb-4">
                    Entry-level controller for small process applications. Compact form factor with integrated I/O options.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between py-1 border-b border-abb-gray-100">
                      <span className="text-abb-gray-500">Typical I/O</span>
                      <span className="font-medium">Up to ~500</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-abb-gray-100">
                      <span className="text-abb-gray-500">Form Factor</span>
                      <span className="font-medium">Compact</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-abb-gray-500">Best For</span>
                      <span className="font-medium">Small plants</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-primary rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-abb-gray-900 mb-2">AC800F</h3>
                  <p className="text-sm text-primary mb-3">Mid-Range Controller</p>
                  <p className="text-abb-gray-600 text-sm mb-4">
                    Proven workhorse for medium process applications. Extensive installed base with excellent reliability record.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between py-1 border-b border-abb-gray-100">
                      <span className="text-abb-gray-500">Typical I/O</span>
                      <span className="font-medium">Up to ~2,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-abb-gray-100">
                      <span className="text-abb-gray-500">Redundancy</span>
                      <span className="font-medium">Available</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-abb-gray-500">Best For</span>
                      <span className="font-medium">Medium plants</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-abb-gray-200 rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    Latest Generation
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-abb-gray-900 mb-2">AC900F</h3>
                  <p className="text-sm text-green-600 mb-3">Next-Gen Controller</p>
                  <p className="text-abb-gray-600 text-sm mb-4">
                    Latest generation with enhanced cybersecurity, edge computing, and modern connectivity for Industry 4.0.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between py-1 border-b border-abb-gray-100">
                      <span className="text-abb-gray-500">Cybersecurity</span>
                      <span className="font-medium">IEC 62443</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-abb-gray-100">
                      <span className="text-abb-gray-500">Edge Computing</span>
                      <span className="font-medium">Built-in</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-abb-gray-500">Best For</span>
                      <span className="font-medium">New projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Comparison */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Detailed Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-abb-gray-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Feature</th>
                      <th className="px-4 py-3 text-center font-semibold">AC700F</th>
                      <th className="px-4 py-3 text-center font-semibold">AC800F</th>
                      <th className="px-4 py-3 text-center font-semibold">AC900F</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-abb-gray-200 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-medium text-abb-gray-900">Typical I/O Capacity</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">~500</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">~2,000</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">~2,500+</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-4 py-3 font-medium text-abb-gray-900">Controller Redundancy</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">No</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Yes</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Yes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-abb-gray-900">IEC 62443 Cybersecurity</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Limited</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Partial</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Full</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-4 py-3 font-medium text-abb-gray-900">Edge Computing</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">No</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">No</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Yes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-abb-gray-900">OPC UA Native</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Via gateway</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Via gateway</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Built-in</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-4 py-3 font-medium text-abb-gray-900">PROFINET Support</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Via CI867</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Via CI867</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Native</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-abb-gray-900">Form Factor</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Compact</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Modular</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">Modular</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-4 py-3 font-medium text-abb-gray-900">Relative Cost</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">$</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">$$</td>
                      <td className="px-4 py-3 text-center text-abb-gray-600">$$$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Selection Decision Tree */}
            <div className="bg-abb-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Selection Decision Tree</h2>
              <div className="space-y-6">
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Is this a new project or expanding an existing system?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 ml-10">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-1">New Project</h4>
                      <p className="text-sm text-green-700">Consider AC900F for latest capabilities and longest support horizon.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-800 mb-1">Existing System</h4>
                      <p className="text-sm text-blue-700">Match existing controllers for consistency, or upgrade new areas to AC900F.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    What is your I/O count and redundancy requirement?
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 ml-10">
                    <div className="bg-abb-gray-100 border border-abb-gray-300 rounded-lg p-4">
                      <h4 className="font-medium text-abb-gray-800 mb-1">&lt;500 I/O, No Redundancy</h4>
                      <p className="text-sm text-abb-gray-600">AC700F is cost-effective choice.</p>
                    </div>
                    <div className="bg-abb-gray-100 border border-abb-gray-300 rounded-lg p-4">
                      <h4 className="font-medium text-abb-gray-800 mb-1">500-2000 I/O or Redundancy</h4>
                      <p className="text-sm text-abb-gray-600">AC800F or AC900F recommended.</p>
                    </div>
                    <div className="bg-abb-gray-100 border border-abb-gray-300 rounded-lg p-4">
                      <h4 className="font-medium text-abb-gray-800 mb-1">&gt;2000 I/O</h4>
                      <p className="text-sm text-abb-gray-600">Multiple AC800F/AC900F or consider System 800xA.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    Are cybersecurity or edge computing critical requirements?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 ml-10">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-1">Yes - Critical</h4>
                      <p className="text-sm text-green-700">AC900F has IEC 62443 certification and native edge computing.</p>
                    </div>
                    <div className="bg-abb-gray-100 border border-abb-gray-300 rounded-lg p-4">
                      <h4 className="font-medium text-abb-gray-800 mb-1">No - Standard Security</h4>
                      <p className="text-sm text-abb-gray-600">AC700F or AC800F with network security measures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Examples */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Application Examples</h2>
              <div className="space-y-4">
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Small Water Treatment Plant</h3>
                  <p className="text-sm text-abb-gray-600 mb-3">200 I/O, basic process control, no redundancy required</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-abb-gray-100 text-abb-gray-700 px-3 py-1 rounded text-sm font-medium">Recommended: AC700F</span>
                    <span className="text-sm text-abb-gray-500">Cost-effective for small scope</span>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Chemical Batch Plant</h3>
                  <p className="text-sm text-abb-gray-600 mb-3">1,500 I/O, batch processing, redundancy required for critical reactors</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium">Recommended: AC800F</span>
                    <span className="text-sm text-abb-gray-500">Proven reliability, redundancy support</span>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Pharmaceutical Manufacturing</h3>
                  <p className="text-sm text-abb-gray-600 mb-3">1,000 I/O, strict cybersecurity requirements, cloud connectivity for analytics</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">Recommended: AC900F</span>
                    <span className="text-sm text-abb-gray-500">IEC 62443 security, edge computing</span>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Existing AC800F System Expansion</h3>
                  <p className="text-sm text-abb-gray-600 mb-3">Adding new production area to existing Freelance system</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium">Recommended: AC800F or AC900F</span>
                    <span className="text-sm text-abb-gray-500">Match existing or upgrade for new capabilities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* F-line vs M-line Clarification */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold text-abb-gray-900 mb-4">Important: F-line vs M-line Controllers</h2>
              <p className="text-abb-gray-700 mb-4">
                ABB maintains two parallel controller families for different market segments:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-abb-gray-900 mb-2">F-line (Freelance)</h3>
                  <p className="text-sm text-abb-gray-600 mb-2">AC700F, AC800F, AC900F</p>
                  <p className="text-sm text-abb-gray-600">Small to mid-size process applications</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-abb-gray-900 mb-2">M-line (System 800xA)</h3>
                  <p className="text-sm text-abb-gray-600 mb-2">AC800M (PM860, PM861, etc.)</p>
                  <p className="text-sm text-abb-gray-600">Enterprise-level facilities</p>
                </div>
              </div>
              <p className="text-sm text-abb-gray-600 mt-4">
                <strong>Note:</strong> M-line did NOT replace F-line. The AC800M superseded the AC450 (Advant Master), not F-line controllers. Both families remain actively developed.
              </p>
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
                  href="/guides/what-is-freelance-dcs"
                  className="flex items-center gap-3 bg-white border border-abb-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-abb-gray-900 group-hover:text-primary transition-colors">What is ABB Freelance DCS?</h4>
                    <p className="text-sm text-abb-gray-600">Complete Freelance guide</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-abb-gray-400 group-hover:text-primary" />
                </Link>
                <Link
                  href="/guides/freelance-vs-800xa"
                  className="flex items-center gap-3 bg-white border border-abb-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-abb-gray-900 group-hover:text-primary transition-colors">Freelance vs System 800xA</h4>
                    <p className="text-sm text-abb-gray-600">When to choose each platform</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-abb-gray-400 group-hover:text-primary" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">
                Need Help Selecting the Right Controller?
              </h2>
              <p className="text-abb-gray-600 mb-6 max-w-2xl mx-auto">
                With 35+ years of ABB Freelance experience, Gross Automation can help you choose the right controller
                for your application—and provide competitive pricing on all ABB process automation products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/products/controllers"
                  className="inline-flex items-center justify-center bg-white border border-abb-gray-300 text-abb-gray-700 px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Browse Controllers
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
