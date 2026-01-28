import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABB Freelance vs System 800xA: Which DCS is Right for You? | Gross Automation',
  description: 'Detailed comparison of ABB Freelance DCS vs System 800xA. Learn the differences in architecture, I/O capacity, cost, and applications to choose the right platform.',
  keywords: 'Freelance vs 800xA, ABB DCS comparison, Freelance or 800xA, ABB Freelance comparison, System 800xA comparison, which ABB DCS',
  openGraph: {
    title: 'ABB Freelance vs System 800xA: Complete Comparison',
    description: 'Side-by-side comparison to help you choose between ABB Freelance and System 800xA for your process automation project.',
    url: `${SITE_CONFIG.url}/guides/freelance-vs-800xa`,
    type: 'article',
  },
};

export default function FreelanceVs800xA() {
  const comparisonData = [
    {
      category: 'Target Application',
      freelance: 'Small to medium plants, OEM packages, standalone systems',
      xa: 'Medium to large facilities, enterprise integration, complex operations',
    },
    {
      category: 'Typical I/O Range',
      freelance: '50 – 5,000+ I/O points',
      xa: '1,000 – 100,000+ I/O points',
    },
    {
      category: 'Controller Family',
      freelance: 'AC700F, AC800F, AC900F (F-line)',
      xa: 'AC800M (M-line)',
    },
    {
      category: 'Engineering Software',
      freelance: 'Control Builder F (integrated)',
      xa: 'Compact Control Builder or 800xA Engineering Workspace',
    },
    {
      category: 'Operator Interface',
      freelance: 'DigiVis (included)',
      xa: '800xA Operations / PGP (Plant Graphics Portal)',
    },
    {
      category: 'Architecture',
      freelance: 'Self-contained DCS with integrated components',
      xa: 'Modular, highly customizable enterprise platform',
    },
    {
      category: 'Redundancy',
      freelance: 'Optional controller and network redundancy',
      xa: 'Full redundancy options at all levels',
    },
    {
      category: 'Third-Party Integration',
      freelance: 'Fieldbus protocols, OPC, Modbus',
      xa: 'Extensive: OPC UA, MES, ERP, historians, third-party PLCs',
    },
    {
      category: 'Relative Cost',
      freelance: 'Lower initial cost, faster ROI for smaller projects',
      xa: 'Higher initial cost, justified for large/complex systems',
    },
    {
      category: 'Engineering Complexity',
      freelance: 'Simpler, faster to learn and deploy',
      xa: 'More complex, greater flexibility and capability',
    },
  ];

  return (
    <article className="min-h-screen pt-20">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            'headline': 'ABB Freelance vs System 800xA: Which DCS is Right for You?',
            'description': 'Detailed comparison of ABB Freelance DCS vs System 800xA to help you choose the right platform.',
            'author': { '@type': 'Organization', 'name': 'Gross Automation' },
            'publisher': { '@type': 'Organization', 'name': 'Gross Automation', 'url': SITE_CONFIG.url },
            'mainEntityOfPage': `${SITE_CONFIG.url}/guides/freelance-vs-800xa`,
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
              <span>Comparisons</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              ABB Freelance vs System 800xA
            </h1>

            <p className="text-xl text-abb-gray-600 mb-8">
              Both are industry-leading DCS platforms from ABB, but they serve different needs.
              This guide helps you understand when to choose Freelance versus System 800xA.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-8 bg-abb-blue/5 border-y border-abb-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-abb-gray-900 mb-4">The Short Answer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border border-abb-gray-200">
                <h3 className="font-semibold text-primary mb-2">Choose Freelance if:</h3>
                <ul className="space-y-2 text-sm text-abb-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    Your plant has &lt;5,000 I/O points
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    You need a self-contained, integrated system
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    Budget and time-to-deploy are priorities
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    You want simpler engineering/maintenance
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5 border border-abb-gray-200">
                <h3 className="font-semibold text-abb-blue mb-2">Choose 800xA if:</h3>
                <ul className="space-y-2 text-sm text-abb-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    Your plant has &gt;5,000 I/O or will grow significantly
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    You need deep integration with MES/ERP/historians
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    You have multiple plants needing enterprise visibility
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-0.5 flex-shrink-0" />
                    Maximum flexibility and future-proofing are critical
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-6">Detailed Comparison</h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border border-abb-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-abb-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-abb-gray-700 w-1/4">Aspect</th>
                    <th className="px-4 py-3 text-left font-semibold text-primary w-[37.5%]">ABB Freelance</th>
                    <th className="px-4 py-3 text-left font-semibold text-abb-blue w-[37.5%]">ABB System 800xA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-abb-gray-100">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-abb-gray-50/50' : ''}>
                      <td className="px-4 py-3 text-abb-gray-700 font-medium">{row.category}</td>
                      <td className="px-4 py-3 text-abb-gray-600">{row.freelance}</td>
                      <td className="px-4 py-3 text-abb-gray-600">{row.xa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Important: They&apos;re Parallel, Not Replacements</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-abb-gray-700 mb-2">
                    A common misconception is that System 800xA &quot;replaced&quot; Freelance. <strong>This is incorrect.</strong>
                  </p>
                  <p className="text-abb-gray-700">
                    Freelance and 800xA are <strong>parallel product lines</strong> actively developed and supported by ABB.
                    They serve different market segments and application sizes. Freelance remains the right choice for
                    many applications, while 800xA serves those needing enterprise-scale capabilities.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Controller Differences</h2>
            <p className="text-abb-gray-700 mb-4">
              Each platform uses different controller hardware:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-abb-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-primary mb-3">Freelance Controllers (F-Line)</h3>
                <ul className="space-y-2 text-sm text-abb-gray-600">
                  <li><strong>AC700F</strong> — Entry-level, compact (~300 I/O)</li>
                  <li><strong>AC800F</strong> — Mid-range, modular (~1,000 I/O)</li>
                  <li><strong>AC900F</strong> — High-end, maximum I/O (~1,500 I/O)</li>
                </ul>
                <p className="text-xs text-abb-gray-500 mt-3">
                  All use Control Builder F for programming.
                </p>
              </div>
              <div className="border border-abb-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-abb-blue mb-3">800xA Controllers (M-Line)</h3>
                <ul className="space-y-2 text-sm text-abb-gray-600">
                  <li><strong>AC800M</strong> — Modular, scalable architecture</li>
                  <li>Can be configured with Compact Control Builder or 800xA Engineering</li>
                  <li>Supports massive I/O counts and enterprise integration</li>
                </ul>
                <p className="text-xs text-abb-gray-500 mt-3">
                  Note: AC800M superseded the older AC450 (Advant Master), not the F-line.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Application Examples</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-abb-gray-900 mb-3">Freelance is Ideal For:</h3>
                <ul className="space-y-2 text-abb-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Municipal water/wastewater plants
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Food & beverage batch operations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Pharmaceutical manufacturing suites
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    OEM skid packages
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Small chemical plants
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-abb-gray-900 mb-3">800xA is Ideal For:</h3>
                <ul className="space-y-2 text-abb-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Large petrochemical refineries
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Power generation plants
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Mining operations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Multi-site enterprise operations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-abb-green mt-1 flex-shrink-0" />
                    Facilities requiring MES/ERP integration
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">Cost Considerations</h2>
            <p className="text-abb-gray-700 mb-4">
              While specific pricing depends on project scope, here are general considerations:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">$</span>
                <div>
                  <strong className="text-abb-gray-900">Freelance</strong> typically has lower hardware, software, and engineering costs
                  for smaller systems. Faster deployment means quicker ROI.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-abb-blue/10 text-abb-blue rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">$$</span>
                <div>
                  <strong className="text-abb-gray-900">800xA</strong> has higher initial costs but provides greater value for large,
                  complex systems where its advanced features are fully utilized.
                </div>
              </li>
            </ul>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 abb-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Not Sure Which Platform to Choose?
            </h2>
            <p className="text-white/80 mb-8">
              Our engineers have implemented hundreds of both Freelance and 800xA systems.
              Let us help you evaluate your requirements and recommend the right solution.
            </p>
            <a
              href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
            >
              Get Expert Advice
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
                'name': 'What is the difference between ABB Freelance and System 800xA?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Freelance is designed for small to medium applications (50-5,000+ I/O) with integrated engineering tools and lower complexity. System 800xA is an enterprise-level DCS for medium to large operations (1,000-100,000+ I/O) with extensive integration capabilities, MES/ERP connectivity, and maximum flexibility. They are parallel product lines serving different market segments.',
                },
              },
              {
                '@type': 'Question',
                'name': 'Did System 800xA replace Freelance?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'No. Freelance and System 800xA are parallel product lines, both actively developed and supported by ABB. They serve different application sizes and requirements. Freelance remains the right choice for many small to medium applications. The AC800M controller (used in 800xA) superseded the older AC450 (Advant Master), not the Freelance F-line controllers.',
                },
              },
              {
                '@type': 'Question',
                'name': 'Which ABB DCS is more cost-effective?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'For smaller systems under 5,000 I/O, Freelance typically has lower total cost of ownership due to simpler engineering, integrated components, and faster deployment. For large, complex systems requiring enterprise integration, 800xA provides better value despite higher initial costs because its advanced features are fully utilized.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
