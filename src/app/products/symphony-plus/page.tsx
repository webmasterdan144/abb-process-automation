import React from 'react';
import { ArrowRight, CheckCircle, Download, Network, Shield, Layers, Monitor } from 'lucide-react';
import SearchLink from '@/components/SearchLink';

export const metadata = {
  title: 'Buy ABB Symphony Plus DCS | Power & Water Automation | Gross Automation',
  description: 'Buy ABB Symphony Plus DCS for power generation and water treatment. Backward compatible with Network 90, INFI 90, and Symphony Harmony systems.',
  keywords: 'buy ABB Symphony Plus, Symphony Plus DCS, power plant DCS, water treatment automation'
};

const SymphonyPlusPage = () => {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Total Plant Automation",
      description: "Unified platform integrating process control, electrical, and plant-wide optimization for power generation and water treatment facilities."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "HTML5 Web-Based Tools",
      description: "Modern web-based operation and engineering tools accessible from standard browsers without dedicated workstation software."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "OPC UA & Edge Connectivity",
      description: "Native OPC UA connection to edge computing and cloud platforms for data integration and analytics."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Backward Compatible",
      description: "Investment protection through compatibility with Network 90, INFI 90, INFI 90 OPEN, Symphony Harmony, Contronic, and Symphony Melody systems."
    }
  ];

  const hardwarePlatforms = [
    {
      name: "SDe Series",
      description: "Latest generation control and I/O hardware platform for Symphony Plus",
      specs: ["Modern control processors", "High-density I/O modules", "Ethernet-based communication", "Hot-swappable components"]
    },
    {
      name: "S+ Operations",
      description: "HTML5 web-based operator interface for plant monitoring and control",
      specs: ["Browser-based access", "Responsive displays", "Alarm management", "Trend visualization"]
    },
    {
      name: "S+ Engineering",
      description: "Configuration and programming environment for Symphony Plus systems",
      specs: ["Graphical programming", "Library management", "Version control", "Online modifications"]
    }
  ];

  const applications = [
    "Fossil fuel power plants",
    "Combined cycle power generation",
    "Hydroelectric power plants",
    "Waste-to-energy facilities",
    "Water treatment plants",
    "Wastewater treatment",
    "District heating and cooling",
    "Industrial steam generation"
  ];

  const migrationPaths = [
    { from: "Network 90", to: "Symphony Plus SDe" },
    { from: "INFI 90", to: "Symphony Plus SDe" },
    { from: "INFI 90 OPEN", to: "Symphony Plus SDe" },
    { from: "Symphony Harmony", to: "Symphony Plus SDe" },
    { from: "Contronic", to: "Symphony Plus SDe" },
    { from: "Symphony Melody", to: "Symphony Plus SDe" },
  ];

  const faqItems = [
    {
      question: "What is ABB Ability Symphony Plus?",
      answer: "ABB Ability Symphony Plus is a total plant automation platform designed primarily for power generation and water industries. It provides integrated process control, electrical control, and plant optimization capabilities. The platform includes the SDe Series hardware, HTML5 web-based operator and engineering tools, and OPC UA connectivity for edge and cloud integration."
    },
    {
      question: "What legacy systems is Symphony Plus backward compatible with?",
      answer: "Symphony Plus provides backward compatibility and migration paths from Network 90, INFI 90, INFI 90 OPEN, Symphony Harmony, Contronic, and Symphony Melody systems. This allows existing installations to upgrade to modern hardware and software while preserving prior engineering investments."
    },
    {
      question: "What industries use ABB Ability Symphony Plus?",
      answer: "Symphony Plus is deployed primarily in power generation (fossil fuel, combined cycle, hydroelectric, waste-to-energy) and water industries (treatment plants, wastewater, desalination). It is also used in district heating, industrial steam generation, and other process applications requiring total plant automation."
    },
    {
      question: "How can I order ABB Symphony Plus products through Gross Automation?",
      answer: "Gross Automation is an authorized distributor of ABB Process Automation products. You can request a quote by contacting Gross Automation at +1 (262) 252-1600 or through the contact form at grossautomation.com. You can also search for specific Symphony Plus components on the Gross Automation product catalog."
    },
    {
      question: "Does Symphony Plus support mobile operations?",
      answer: "Yes, ABB Ability Symphony Plus supports ABB Mobile Operations, allowing authorized personnel to access plant data and perform operational tasks from mobile devices. The HTML5 web-based interface enables access from standard browsers on tablets and smartphones."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ABB Ability Symphony Plus",
            "description": "Total plant automation platform for power generation and water industries. Backward compatible with Network 90, INFI 90, Symphony Harmony, and Contronic systems.",
            "brand": { "@type": "Brand", "name": "ABB" },
            "manufacturer": { "@type": "Organization", "name": "ABB" },
            "category": "Total Plant Automation Systems"
          })
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    ABB Ability Symphony Plus
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Buy ABB Symphony Plus
                  <span className="abb-text-gradient block">Power & Water DCS</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Buy ABB Symphony Plus DCS from Gross Automation. Symphony Plus provides total plant automation for power generation and water treatment with backward compatibility for Network 90, INFI 90, and Symphony Harmony systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SearchLink query="ABB Symphony Plus" label="Find Symphony Plus Products" />
                <a
                  href="https://gross-automation-prod.s3.amazonaws.com/manufacturers/1731614295267file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Product Catalog (PDF)
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-abb-gray-800 mb-6">System Architecture</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-primary font-semibold">Level 3: Plant Optimization</div>
                  <div className="text-sm text-abb-gray-600 mt-1">S+ Operations &amp; Analytics</div>
                </div>
                <div className="text-center p-4 bg-abb-blue/10 rounded-lg">
                  <div className="text-abb-blue font-semibold">Level 2: Process & Electrical Control</div>
                  <div className="text-sm text-abb-gray-600 mt-1">SDe Series Controllers</div>
                </div>
                <div className="text-center p-4 bg-abb-green/10 rounded-lg">
                  <div className="text-abb-green font-semibold">Level 1: Field I/O</div>
                  <div className="text-sm text-abb-gray-600 mt-1">SDe I/O Modules & Field Devices</div>
                </div>
                <div className="text-center p-4 bg-abb-gray-200 rounded-lg">
                  <div className="text-abb-gray-700 font-semibold">Connectivity</div>
                  <div className="text-sm text-abb-gray-600 mt-1">OPC UA, Edge, Cloud, Mobile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Symphony Plus delivers integrated automation for the complete plant lifecycle, from engineering through operations and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="abb-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{feature.title}</h3>
                <p className="text-abb-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware & Software */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Hardware & Software Platform
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Symphony Plus combines modern SDe Series hardware with web-based software tools for a complete automation solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwarePlatforms.map((platform, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{platform.name}</h3>
                    <p className="text-abb-gray-600">{platform.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {platform.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center text-abb-gray-700">
                        <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Paths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Legacy System Migration
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Symphony Plus provides documented migration paths from ABB legacy control systems. Plants running older ABB platforms can upgrade to modern Symphony Plus SDe hardware while preserving their existing control logic and engineering investment.
                </p>
              </div>

              <div className="space-y-3">
                {migrationPaths.map((path, index) => (
                  <div key={index} className="flex items-center p-3 bg-abb-gray-50 rounded-lg">
                    <span className="text-abb-gray-700 font-medium w-40">{path.from}</span>
                    <ArrowRight className="w-5 h-5 text-primary mx-4" />
                    <span className="text-primary font-semibold">{path.to}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-abb-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Industry Applications</h3>
                <div className="grid grid-cols-1 gap-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                      <CheckCircle className="w-5 h-5 text-abb-green flex-shrink-0" />
                      <span className="text-abb-gray-700 font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              <SearchLink query="ABB Symphony Plus" label="Search Symphony Plus Parts" variant="card" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="abb-card">
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-3">{faq.question}</h3>
                <p className="text-abb-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 abb-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Explore ABB Ability Symphony Plus
            </h2>
            <p className="text-xl text-white/90">
              Contact Gross Automation to discuss Symphony Plus solutions for your power generation or water treatment facility, or search our catalog for available components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+12622521600"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors font-medium"
              >
                Call +1 (262) 252-1600
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SymphonyPlusPage;
