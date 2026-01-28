import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DCS vs PLC: What\'s the Difference? | Gross Automation',
  description: 'Understand the differences between DCS and PLC systems. Learn when to use a distributed control system versus a programmable logic controller for your process automation needs.',
  keywords: 'DCS vs PLC, distributed control system, programmable logic controller, process automation, industrial control, DCS PLC difference',
};

export default function DCSvsPLCGuide() {
  const faqItems = [
    {
      question: 'What is the main difference between DCS and PLC?',
      answer: 'A DCS (Distributed Control System) is designed for continuous process control with integrated operator interfaces, historians, and distributed architecture. A PLC (Programmable Logic Controller) is designed for discrete, sequential control of machines and processes. DCS excels at managing analog loops and complex processes; PLCs excel at high-speed discrete I/O and machine control.',
    },
    {
      question: 'When should I use a DCS instead of a PLC?',
      answer: 'Use a DCS when you have continuous processes with many analog control loops (temperature, pressure, flow), need integrated operator displays and trending, require distributed control across a facility, or are in industries like chemicals, oil & gas, or pharmaceuticals where process control is primary.',
    },
    {
      question: 'When should I use a PLC instead of a DCS?',
      answer: 'Use a PLC when you have discrete manufacturing (on/off, start/stop), need high-speed machine control, have a standalone machine or small system, require precise motion control, or are in industries like automotive, packaging, or material handling where discrete operations dominate.',
    },
    {
      question: 'Can a PLC do process control like a DCS?',
      answer: 'Modern PLCs with PID instructions can handle process control, but lack the integrated architecture of a DCS. You would need to add SCADA software, historians, and operator interfaces separately. For a few loops this works; for process-centric facilities with many loops, a DCS is more efficient.',
    },
    {
      question: 'Is ABB Freelance a DCS or a PLC?',
      answer: 'ABB Freelance is a DCS (Distributed Control System). It includes integrated operator interfaces, engineering tools, and historians designed for continuous process control. While it can handle discrete I/O, its architecture and design philosophy are DCS-oriented, not PLC-oriented.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'DCS vs PLC: What\'s the Difference?',
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
    mainEntityOfPage: `${SITE_CONFIG.url}/guides/dcs-vs-plc`,
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
              <span className="text-abb-gray-900">DCS vs PLC</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              DCS vs PLC: What's the Difference?
            </h1>

            <p className="text-xl text-abb-gray-600 mb-8">
              Understanding when to use a Distributed Control System versus a Programmable Logic Controller for your automation needs.
            </p>

            {/* Quick Answer Box */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h2 className="font-semibold text-abb-gray-900 mb-2">Quick Answer</h2>
              <p className="text-abb-gray-700">
                <strong>DCS (Distributed Control System)</strong> is designed for continuous process control with integrated operator interfaces—ideal for chemical plants, refineries, and water treatment. <strong>PLC (Programmable Logic Controller)</strong> is designed for discrete, sequential machine control—ideal for packaging, assembly, and material handling. The choice depends on whether your application is primarily process-oriented (many analog loops, continuous operation) or discrete-oriented (on/off control, high-speed sequences).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Definitions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-abb-gray-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-abb-gray-900 mb-4">What is a DCS?</h2>
                <p className="text-abb-gray-600 mb-4">
                  A <strong>Distributed Control System (DCS)</strong> is an automated control system that distributes control functions across multiple controllers throughout a facility, connected by a communications network with integrated operator interfaces.
                </p>
                <p className="text-abb-gray-600">
                  DCS platforms like ABB Freelance and System 800xA provide integrated HMI, historians, alarm management, and engineering tools as part of the core system.
                </p>
              </div>
              <div className="bg-white border border-abb-gray-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-abb-gray-900 mb-4">What is a PLC?</h2>
                <p className="text-abb-gray-600 mb-4">
                  A <strong>Programmable Logic Controller (PLC)</strong> is an industrial computer designed to control manufacturing processes—originally replacing relay logic for discrete control applications.
                </p>
                <p className="text-abb-gray-600">
                  PLCs like Allen-Bradley, Siemens, and ABB AC500 are standalone controllers that require separate SCADA/HMI software for operator interfaces.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">DCS vs PLC Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-abb-gray-900 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Characteristic</th>
                      <th className="px-6 py-4 text-left font-semibold">DCS</th>
                      <th className="px-6 py-4 text-left font-semibold">PLC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-abb-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Primary Application</td>
                      <td className="px-6 py-4 text-abb-gray-600">Continuous process control</td>
                      <td className="px-6 py-4 text-abb-gray-600">Discrete machine control</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Architecture</td>
                      <td className="px-6 py-4 text-abb-gray-600">Distributed across facility</td>
                      <td className="px-6 py-4 text-abb-gray-600">Centralized/standalone</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Operator Interface</td>
                      <td className="px-6 py-4 text-abb-gray-600">Integrated (included)</td>
                      <td className="px-6 py-4 text-abb-gray-600">Separate (add SCADA/HMI)</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Historian</td>
                      <td className="px-6 py-4 text-abb-gray-600">Integrated (included)</td>
                      <td className="px-6 py-4 text-abb-gray-600">Separate (add third-party)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Analog Control</td>
                      <td className="px-6 py-4 text-abb-gray-600">Core strength (optimized)</td>
                      <td className="px-6 py-4 text-abb-gray-600">Capable (add-on PID)</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Discrete Control</td>
                      <td className="px-6 py-4 text-abb-gray-600">Capable</td>
                      <td className="px-6 py-4 text-abb-gray-600">Core strength (optimized)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Scan Time</td>
                      <td className="px-6 py-4 text-abb-gray-600">100ms - 1s typical</td>
                      <td className="px-6 py-4 text-abb-gray-600">1ms - 10ms typical</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Redundancy</td>
                      <td className="px-6 py-4 text-abb-gray-600">Built-in options</td>
                      <td className="px-6 py-4 text-abb-gray-600">Available but complex</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-abb-gray-900">System Size</td>
                      <td className="px-6 py-4 text-abb-gray-600">100s to 100,000s of I/O</td>
                      <td className="px-6 py-4 text-abb-gray-600">10s to 10,000s of I/O</td>
                    </tr>
                    <tr className="bg-abb-gray-50">
                      <td className="px-6 py-4 font-medium text-abb-gray-900">Cost Model</td>
                      <td className="px-6 py-4 text-abb-gray-600">Higher base, lower per-loop</td>
                      <td className="px-6 py-4 text-abb-gray-600">Lower base, higher per-loop</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* When to Use Each */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-abb-gray-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-abb-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Choose DCS When...
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Continuous processes dominate (flow, level, temperature, pressure control)</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>You have many analog control loops (&gt;50-100)</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>You need integrated operator displays and trending</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Control is distributed across a facility</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Redundancy and high availability are required</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Industries: chemicals, oil & gas, water/wastewater, pharmaceuticals, power</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-abb-gray-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-abb-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Choose PLC When...
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Discrete operations dominate (on/off, start/stop, sequences)</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>High-speed machine control is required (&lt;10ms)</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>You have a standalone machine or small system</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Motion control or precise positioning is needed</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Initial cost must be minimized for small scope</span>
                  </li>
                  <li className="flex items-start gap-2 text-abb-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Industries: automotive, packaging, material handling, assembly</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hybrid Approach */}
            <div className="bg-abb-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                The Hybrid Approach
              </h2>
              <p className="text-abb-gray-600 mb-6">
                Many facilities use both DCS and PLC systems, each handling what it does best. A DCS manages continuous process control while PLCs handle discrete operations like packaging or material handling. The systems communicate via OPC, Modbus, or other protocols.
              </p>
              <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-abb-gray-900 mb-3">Example: Chemical Plant</h3>
                <ul className="space-y-2 text-sm text-abb-gray-600">
                  <li><strong>DCS (ABB Freelance):</strong> Reactor control, distillation, batch processing, tank farm</li>
                  <li><strong>PLC:</strong> Packaging line, drum filling, conveyor systems, loading dock</li>
                  <li><strong>Integration:</strong> OPC connection between DCS and PLC; unified SCADA display</li>
                </ul>
              </div>
            </div>

            {/* Common Misconceptions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Common Misconceptions</h2>
              <div className="space-y-4">
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-abb-gray-900 mb-1">"PLCs have replaced DCS"</h4>
                      <p className="text-abb-gray-600 text-sm">
                        While PLCs have grown more capable, DCS platforms continue to evolve with integrated functionality that would require extensive third-party software on a PLC. Both technologies remain actively developed for their respective strengths.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-abb-gray-900 mb-1">"DCS is only for large plants"</h4>
                      <p className="text-abb-gray-600 text-sm">
                        Modern DCS platforms like ABB Freelance scale down effectively. For process-centric applications with many analog loops, a small DCS can be more cost-effective than a PLC with add-on SCADA, historian, and alarm management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-abb-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-abb-gray-900 mb-1">"PLC is always cheaper"</h4>
                      <p className="text-abb-gray-600 text-sm">
                        PLC hardware is often cheaper upfront, but total system cost includes SCADA, historians, engineering time, and integration. For process applications, a DCS with integrated tools can have lower total cost of ownership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="bg-white border-2 border-primary/20 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Decision Framework</h2>
              <p className="text-abb-gray-600 mb-6">
                Answer these questions to help determine which platform fits your application:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">What percentage of your control is analog vs discrete?</h4>
                    <p className="text-sm text-abb-gray-600">&gt;60% analog loops → DCS | &gt;60% discrete I/O → PLC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">Do you need integrated operator displays and historical trending?</h4>
                    <p className="text-sm text-abb-gray-600">Yes, as core requirement → DCS | Nice to have, can add later → PLC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">What scan time do you require?</h4>
                    <p className="text-sm text-abb-gray-600">&gt;100ms acceptable → DCS | &lt;10ms required → PLC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-abb-gray-900">Is control distributed across a facility or localized to machines?</h4>
                    <p className="text-sm text-abb-gray-600">Distributed facility-wide → DCS | Localized to machines → PLC</p>
                  </div>
                </div>
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
                Need Help Choosing Between DCS and PLC?
              </h2>
              <p className="text-abb-gray-600 mb-6 max-w-2xl mx-auto">
                With 35+ years of automation experience across both DCS and PLC platforms, Gross Automation can help you
                select the right technology for your application—and provide the components and support you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Discuss Your Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white border border-abb-gray-300 text-abb-gray-700 px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Browse ABB DCS Products
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
