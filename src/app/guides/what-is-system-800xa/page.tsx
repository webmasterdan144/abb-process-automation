import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Building2, Layers, Network, Shield, Gauge, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is ABB System 800xA? Complete Enterprise DCS Guide | Gross Automation',
  description: 'Comprehensive guide to ABB System 800xA distributed control system. Learn about enterprise-level architecture, AC800M controllers, integration capabilities, and when to choose 800xA over Freelance.',
  keywords: 'ABB System 800xA, 800xA DCS, AC800M controller, enterprise DCS, ABB automation platform, industrial control system, process automation',
};

export default function WhatIsSystem800xAGuide() {
  const faqItems = [
    {
      question: 'What is ABB System 800xA?',
      answer: 'System 800xA is ABB\'s enterprise-level distributed control system (DCS) designed for large, complex industrial facilities. It provides integrated process control, electrical control, safety systems, and asset management in a single platform, supporting thousands of I/O points and multiple plant sites.',
    },
    {
      question: 'What controller does System 800xA use?',
      answer: 'System 800xA uses AC800M controllers, which are part of ABB\'s M-line (Master line). The AC800M superseded the AC450 controller from the Advant Master system. It supports high-speed processing, redundancy options, and extensive communication protocols.',
    },
    {
      question: 'What is the difference between System 800xA and Freelance?',
      answer: 'System 800xA is designed for large enterprise facilities requiring integration of process control, electrical systems, and safety in one platform. Freelance is optimized for small to mid-size process applications with simpler deployment. They are parallel product lines—neither replaces the other.',
    },
    {
      question: 'What industries use System 800xA?',
      answer: 'System 800xA is used in oil & gas, refining, petrochemicals, power generation, pulp & paper, metals & mining, and pharmaceuticals—any industry requiring enterprise-scale automation with integrated electrical and safety systems.',
    },
    {
      question: 'Can System 800xA integrate with third-party systems?',
      answer: 'Yes. System 800xA supports OPC, Modbus, PROFIBUS, PROFINET, FOUNDATION Fieldbus, HART, and many other protocols. Its open architecture allows integration with third-party PLCs, drives, analyzers, and business systems.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'What is ABB System 800xA? Complete Enterprise DCS Guide',
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
    mainEntityOfPage: `${SITE_CONFIG.url}/guides/what-is-system-800xa`,
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
              <span className="text-abb-gray-900">What is System 800xA?</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              What is ABB System 800xA?
            </h1>

            <p className="text-xl text-abb-gray-600 mb-8">
              The complete guide to ABB's enterprise-level distributed control system for large-scale industrial automation.
            </p>

            {/* Quick Answer Box */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h2 className="font-semibold text-abb-gray-900 mb-2">Quick Answer</h2>
              <p className="text-abb-gray-700">
                <strong>ABB System 800xA</strong> is an enterprise-level distributed control system (DCS) that integrates process control, electrical control, safety systems, and asset management into a unified platform. It uses <strong>AC800M controllers</strong> (M-line) and is designed for large, complex facilities in industries like oil & gas, power generation, and chemicals. System 800xA supports thousands of I/O points, multi-site operations, and comprehensive third-party integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Overview */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">System 800xA Overview</h2>
              <p className="text-abb-gray-600 mb-6">
                System 800xA represents ABB's flagship automation platform, introduced in 2004 as the evolution of the Advant OCS and Industrial IT platforms. The "xA" stands for "Extended Automation," reflecting its philosophy of integrating all aspects of plant automation—process control, electrical systems, safety, and telecommunications—into one cohesive system.
              </p>
              <p className="text-abb-gray-600 mb-6">
                Unlike traditional DCS platforms that focus solely on process control, System 800xA provides a single engineering environment for all automation disciplines. This integration reduces complexity, lowers lifecycle costs, and improves operational efficiency for large industrial facilities.
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Key Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Integrated Engineering</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Single engineering environment for process control, electrical systems, drives, instrumentation, and safety—eliminating integration gaps between disciplines.
                  </p>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Enterprise Scalability</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Supports facilities from hundreds to hundreds of thousands of I/O points, with multi-site coordination for enterprise-wide visibility and control.
                  </p>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Integrated Safety</h3>
                  <p className="text-abb-gray-600 text-sm">
                    SIL 2/3 certified safety system integrated with process control, providing unified operator interface for both normal operations and emergency response.
                  </p>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Asset Management</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Built-in asset optimization with predictive maintenance, device diagnostics, and performance monitoring across all connected equipment.
                  </p>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Open Connectivity</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Extensive protocol support: OPC, Modbus, PROFIBUS, PROFINET, FOUNDATION Fieldbus, HART, IEC 61850 for electrical integration.
                  </p>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-abb-gray-900 mb-2">Global Operations</h3>
                  <p className="text-abb-gray-600 text-sm">
                    Multi-site architecture enables centralized monitoring and management of geographically distributed facilities from a single control room.
                  </p>
                </div>
              </div>
            </div>

            {/* AC800M Controller */}
            <div className="bg-abb-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">The AC800M Controller</h2>
              <p className="text-abb-gray-600 mb-6">
                System 800xA is built around the <strong>AC800M controller</strong>, ABB's M-line (Master line) processor that superseded the AC450 from the Advant Master system. The "M" designates this as the enterprise/master controller family, distinct from the F-line (Freelance) controllers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-abb-gray-900 mb-3">AC800M Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>High-performance processing for complex control strategies</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Hot-swap redundancy for controllers and I/O</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Support for S800 I/O and third-party I/O systems</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>IEC 61131-3 programming languages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Native integration with ABB drives and motors</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-abb-gray-900 mb-3">Controller Variants</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PM860</strong> - Standard performance processor</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PM861</strong> - High performance processor</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PM864</strong> - Extended memory and performance</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PM866</strong> - Maximum performance variant</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-abb-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PM891</strong> - Redundancy-capable processors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* System Architecture */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">System Architecture</h2>
              <div className="bg-white border border-abb-gray-200 rounded-lg overflow-hidden">
                <div className="bg-abb-gray-900 text-white p-4 text-center font-semibold">
                  System 800xA Architecture Layers
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-1">Enterprise Level</h4>
                    <p className="text-sm text-blue-700">Business systems integration, MES, ERP connectivity, enterprise reporting</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-1">Operations Level</h4>
                    <p className="text-sm text-green-700">Operator workstations, engineering stations, historians, asset management</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-1">Control Level</h4>
                    <p className="text-sm text-yellow-700">AC800M controllers, safety controllers, connectivity servers</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-1">Field Level</h4>
                    <p className="text-sm text-orange-700">S800 I/O, PROFIBUS devices, FOUNDATION Fieldbus, HART instruments, drives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Choose 800xA */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">When to Choose System 800xA</h2>
              <p className="text-abb-gray-600 mb-6">
                System 800xA is the right choice when your facility requires enterprise-level capabilities that go beyond standalone process control:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white border border-abb-gray-200 rounded-lg p-5">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">Large I/O Count</h4>
                    <p className="text-sm text-abb-gray-600">Facilities with thousands to hundreds of thousands of I/O points requiring centralized management</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-abb-gray-200 rounded-lg p-5">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">Integrated Electrical Control</h4>
                    <p className="text-sm text-abb-gray-600">Need to integrate MV/LV switchgear, motor control centers, and power distribution with process control</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-abb-gray-200 rounded-lg p-5">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">Safety-Critical Applications</h4>
                    <p className="text-sm text-abb-gray-600">SIL 2/3 safety requirements with integrated safety and process control on one platform</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-abb-gray-200 rounded-lg p-5">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">Multi-Site Operations</h4>
                    <p className="text-sm text-abb-gray-600">Enterprise-wide visibility across multiple geographic locations from centralized control</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-abb-gray-200 rounded-lg p-5">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">Complex Integration Requirements</h4>
                    <p className="text-sm text-abb-gray-600">Need to integrate diverse systems: third-party PLCs, analyzers, drives, business systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Industries Using System 800xA</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: 'Oil & Gas', desc: 'Upstream, midstream, downstream operations' },
                  { name: 'Refining', desc: 'Petroleum refining and petrochemicals' },
                  { name: 'Power Generation', desc: 'Conventional and renewable power plants' },
                  { name: 'Pulp & Paper', desc: 'Integrated mill operations' },
                  { name: 'Metals & Mining', desc: 'Mineral processing and smelting' },
                  { name: 'Chemicals', desc: 'Specialty and bulk chemical production' },
                ].map((industry, index) => (
                  <div key={index} className="bg-white border border-abb-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-abb-gray-900 mb-1">{industry.name}</h4>
                    <p className="text-sm text-abb-gray-600">{industry.desc}</p>
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
                    <p className="text-sm text-abb-gray-600">Side-by-side comparison guide</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-abb-gray-400 group-hover:text-primary" />
                </Link>
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
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">
                Need Help with System 800xA?
              </h2>
              <p className="text-abb-gray-600 mb-6 max-w-2xl mx-auto">
                With 35+ years of ABB automation experience, Gross Automation provides System 800xA components,
                engineering support, and migration services for enterprise facilities nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Contact Our Engineers
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white border border-abb-gray-300 text-abb-gray-700 px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Browse 800xA Products
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
