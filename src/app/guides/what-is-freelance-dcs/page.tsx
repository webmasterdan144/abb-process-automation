import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BookOpen, Cpu, Network, Shield, Zap, Settings } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is ABB Freelance DCS? Complete Guide | Gross Automation',
  description: 'Comprehensive guide to ABB Freelance DCS - the scalable distributed control system for process automation. Learn about architecture, components, applications, and why Freelance is trusted worldwide.',
  keywords: 'ABB Freelance DCS, what is Freelance DCS, Freelance distributed control system, ABB DCS, process automation, AC700F, AC800F, AC900F, DigiVis, Control Builder F',
  openGraph: {
    title: 'What is ABB Freelance DCS? Complete Guide',
    description: 'Everything you need to know about ABB Freelance DCS - architecture, components, applications, and implementation.',
    url: `${SITE_CONFIG.url}/guides/what-is-freelance-dcs`,
    type: 'article',
  },
};

export default function FreelanceGuide() {
  return (
    <article className="min-h-screen pt-20">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            'headline': 'What is ABB Freelance DCS? Complete Guide',
            'description': 'Comprehensive guide to ABB Freelance DCS distributed control system for process automation',
            'author': {
              '@type': 'Organization',
              'name': 'Gross Automation',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Gross Automation',
              'url': SITE_CONFIG.url,
            },
            'mainEntityOfPage': `${SITE_CONFIG.url}/guides/what-is-freelance-dcs`,
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-abb-gray-500 mb-4">
              <Link href="/guides" className="hover:text-primary">Guides</Link>
              <span>/</span>
              <span>ABB Freelance DCS</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              What is ABB Freelance DCS?
            </h1>

            <p className="text-xl text-abb-gray-600 mb-8">
              ABB Freelance is a scalable Distributed Control System (DCS) designed for process automation
              in small to medium-sized applications. It combines powerful control capabilities with
              intuitive engineering tools, making it one of the most trusted platforms in the industry.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products/freelance"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                Explore Freelance Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center border-2 border-abb-gray-300 text-abb-gray-700 px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-8 bg-abb-blue/5 border-y border-abb-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-abb-gray-900 mb-2">Quick Answer</h2>
                <p className="text-abb-gray-700">
                  <strong>ABB Freelance DCS</strong> is a distributed control system that provides integrated
                  control, I/O, and operator interface for process plants. It uses AC700F, AC800F, or AC900F
                  controllers with DigiVis operator stations and Control Builder F engineering software.
                  Freelance is ideal for applications requiring 50 to 5,000+ I/O points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">What Does DCS Stand For?</h2>
            <p className="text-abb-gray-700 mb-6">
              DCS stands for <strong>Distributed Control System</strong>. Unlike centralized control architectures,
              a DCS distributes control functions across multiple controllers throughout a plant. This provides:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-abb-green mt-1 flex-shrink-0" />
                <span><strong>Improved reliability</strong> — failure of one controller doesn&apos;t stop the entire plant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-abb-green mt-1 flex-shrink-0" />
                <span><strong>Scalability</strong> — add controllers as your plant grows</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-abb-green mt-1 flex-shrink-0" />
                <span><strong>Faster response</strong> — control logic runs close to the process</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-abb-green mt-1 flex-shrink-0" />
                <span><strong>Easier maintenance</strong> — troubleshoot individual sections independently</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Freelance System Architecture</h2>
            <p className="text-abb-gray-700 mb-6">
              ABB Freelance consists of three main layers:
            </p>

            <div className="grid gap-6 mb-8">
              <div className="bg-abb-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  1. Control Layer (Controllers)
                </h3>
                <p className="text-abb-gray-700 mb-3">
                  The AC700F, AC800F, and AC900F controllers execute control logic and manage I/O:
                </p>
                <ul className="text-sm text-abb-gray-600 space-y-1 ml-7">
                  <li><strong>AC700F</strong> — Compact controller for small applications (up to ~300 I/O)</li>
                  <li><strong>AC800F</strong> — Mid-range with modular I/O and optional redundancy (~1,000 I/O)</li>
                  <li><strong>AC900F</strong> — High-performance for larger applications (up to ~1,500 I/O)</li>
                </ul>
              </div>

              <div className="bg-abb-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  2. Operator Layer (DigiVis)
                </h3>
                <p className="text-abb-gray-700">
                  DigiVis is the Human-Machine Interface (HMI) software that provides operator displays,
                  trending, alarming, and reporting. It runs on standard Windows PCs and communicates
                  with controllers over Ethernet.
                </p>
              </div>

              <div className="bg-abb-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-2 flex items-center gap-2">
                  <Network className="w-5 h-5 text-primary" />
                  3. Engineering Layer (Control Builder F)
                </h3>
                <p className="text-abb-gray-700">
                  Control Builder F is the integrated engineering environment for configuring controllers,
                  creating control logic (IEC 61131-3), designing operator graphics, and managing the
                  entire system from a single tool.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Key Features of ABB Freelance</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-abb-gray-200 rounded-lg p-4">
                <Zap className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-abb-gray-900">Integrated Platform</h4>
                <p className="text-sm text-abb-gray-600">Single engineering tool for control, HMI, and I/O configuration</p>
              </div>
              <div className="border border-abb-gray-200 rounded-lg p-4">
                <Shield className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-abb-gray-900">Optional Redundancy</h4>
                <p className="text-sm text-abb-gray-600">Controller, network, and power supply redundancy available</p>
              </div>
              <div className="border border-abb-gray-200 rounded-lg p-4">
                <Network className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-abb-gray-900">Fieldbus Support</h4>
                <p className="text-sm text-abb-gray-600">PROFIBUS, HART, Modbus, Foundation Fieldbus integration</p>
              </div>
              <div className="border border-abb-gray-200 rounded-lg p-4">
                <Settings className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-abb-gray-900">IEC 61131-3</h4>
                <p className="text-sm text-abb-gray-600">Standard programming languages: FBD, LD, ST, SFC</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Common Applications</h2>
            <p className="text-abb-gray-700 mb-4">
              ABB Freelance is deployed across a wide range of industries:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 mb-8">
              {[
                'Water & Wastewater Treatment',
                'Food & Beverage Processing',
                'Pharmaceutical Manufacturing',
                'Chemical Processing',
                'Oil & Gas (upstream/midstream)',
                'Mining & Minerals',
                'Pulp & Paper',
                'Power Generation (auxiliaries)',
              ].map((app, i) => (
                <li key={i} className="flex items-center gap-2 text-abb-gray-700">
                  <CheckCircle className="w-4 h-4 text-abb-green" />
                  {app}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Freelance vs. System 800xA</h2>
            <p className="text-abb-gray-700 mb-4">
              Both are ABB DCS platforms, but they serve different market segments:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-abb-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-abb-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-abb-gray-700">Aspect</th>
                    <th className="px-4 py-3 text-left font-semibold text-abb-gray-700">Freelance</th>
                    <th className="px-4 py-3 text-left font-semibold text-abb-gray-700">System 800xA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-abb-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-abb-gray-700">Target Size</td>
                    <td className="px-4 py-3 text-abb-gray-600">Small to medium plants</td>
                    <td className="px-4 py-3 text-abb-gray-600">Medium to large/enterprise</td>
                  </tr>
                  <tr className="bg-abb-gray-50/50">
                    <td className="px-4 py-3 text-abb-gray-700">I/O Range</td>
                    <td className="px-4 py-3 text-abb-gray-600">50 – 5,000+</td>
                    <td className="px-4 py-3 text-abb-gray-600">1,000 – 100,000+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-abb-gray-700">Engineering Tool</td>
                    <td className="px-4 py-3 text-abb-gray-600">Control Builder F</td>
                    <td className="px-4 py-3 text-abb-gray-600">800xA Engineering / CCB</td>
                  </tr>
                  <tr className="bg-abb-gray-50/50">
                    <td className="px-4 py-3 text-abb-gray-700">Best For</td>
                    <td className="px-4 py-3 text-abb-gray-600">Standalone plants, OEM packages</td>
                    <td className="px-4 py-3 text-abb-gray-600">Enterprise integration, complex operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-abb-gray-900 mb-2">Need Help Choosing?</h3>
              <p className="text-abb-gray-700 mb-4">
                Our engineers can help you determine whether Freelance or System 800xA is the right fit
                for your application. We&apos;ve implemented hundreds of both systems across various industries.
              </p>
              <Link
                href="/guides/freelance-vs-800xa"
                className="text-primary hover:underline font-medium"
              >
                Read our detailed comparison guide →
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Getting Started with Freelance</h2>
            <p className="text-abb-gray-700 mb-6">
              Implementing ABB Freelance typically involves these steps:
            </p>
            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <strong className="text-abb-gray-900">Requirements Definition</strong>
                  <p className="text-sm text-abb-gray-600">Define I/O count, control strategies, integration needs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <strong className="text-abb-gray-900">System Architecture</strong>
                  <p className="text-sm text-abb-gray-600">Select controllers, I/O modules, network topology</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <strong className="text-abb-gray-900">Engineering & Configuration</strong>
                  <p className="text-sm text-abb-gray-600">Develop control logic and operator displays in Control Builder F</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <strong className="text-abb-gray-900">FAT & Commissioning</strong>
                  <p className="text-sm text-abb-gray-600">Factory acceptance testing, installation, and startup</p>
                </div>
              </li>
            </ol>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 abb-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement ABB Freelance?
            </h2>
            <p className="text-white/80 mb-8">
              Our team has 35+ years of experience implementing ABB Freelance systems.
              Contact us for system design, integration, and support.
            </p>
            <a
              href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
            >
              Get a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'What is ABB Freelance DCS?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'ABB Freelance is a scalable Distributed Control System (DCS) for process automation. It uses AC700F, AC800F, or AC900F controllers with DigiVis operator interface and Control Builder F engineering software. It\'s designed for small to medium applications from 50 to 5,000+ I/O points.',
                },
              },
              {
                '@type': 'Question',
                'name': 'What is the difference between Freelance and System 800xA?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Freelance is designed for small to medium plants (50-5,000+ I/O) with integrated engineering tools. System 800xA is an enterprise-level DCS for medium to large operations (1,000-100,000+ I/O) with extensive integration capabilities. They are parallel product lines, not replacements for each other.',
                },
              },
              {
                '@type': 'Question',
                'name': 'What industries use ABB Freelance?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'ABB Freelance is used in water/wastewater treatment, food & beverage, pharmaceutical, chemical processing, oil & gas, mining, pulp & paper, and power generation industries.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
