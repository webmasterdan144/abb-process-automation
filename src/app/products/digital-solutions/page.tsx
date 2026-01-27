import React from 'react';
import { ArrowRight, CheckCircle, Cloud, Shield, Cpu, BarChart3, Smartphone, Globe, Database, Brain } from 'lucide-react';
import SearchLink from '@/components/SearchLink';

export const metadata = {
  title: 'ABB Digital Solutions | Genix, IIoT, Digital Twin, Cybersecurity | Gross Automation',
  description: 'ABB digital transformation solutions including Genix Industrial IoT, Asset Performance Management, Digital Twin, emissions monitoring, OPC UA connectivity, and IEC 62443 cybersecurity. Available through Gross Automation.',
  keywords: 'ABB Genix, ABB digital twin, ABB IIoT, ABB cybersecurity, IEC 62443, ABB APM, ABB Datalyzer, OPC UA, edge computing, ABB mobile operations, Gross Automation',
};

const DigitalSolutionsPage = () => {
  const platforms = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "ABB Ability Genix Industrial IoT & AI Suite",
      description: "Enterprise platform for collecting, contextualizing, and analyzing industrial data. Genix integrates operational technology (OT) and information technology (IT) data to enable data-driven decision making across plant operations.",
      capabilities: ["Data collection and contextualization", "Machine learning analytics", "Prescriptive recommendations", "Enterprise integration"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Genix APM (Asset Performance Management)",
      description: "Predictive and prescriptive asset management that uses condition monitoring data and analytics to optimize maintenance strategies and reduce unplanned downtime.",
      capabilities: ["Condition-based monitoring", "Failure prediction", "Maintenance optimization", "Reliability analysis"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Genix Copilot",
      description: "AI-assisted operations interface that provides operators and engineers with contextual insights and recommendations based on real-time and historical plant data.",
      capabilities: ["Natural language queries", "Contextual recommendations", "Process insights", "Knowledge management"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Genix Digital Twin Hub",
      description: "Digital representation of physical assets and processes. Digital twins enable simulation, optimization, and what-if analysis without affecting live operations.",
      capabilities: ["Asset modeling", "Process simulation", "What-if scenarios", "Performance optimization"]
    }
  ];

  const additionalSolutions = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Genix Datalyzer CEMS",
      description: "Continuous emissions monitoring system for regulatory compliance. Datalyzer measures and reports emissions data from industrial processes to meet environmental reporting requirements."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "OPC UA & Edge Computing",
      description: "Standard-based connectivity using OPC UA for secure data exchange between control systems, edge devices, and cloud platforms. Edge computing enables local data processing and analytics."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Solutions (IEC 62443)",
      description: "Industrial cybersecurity services and solutions aligned with IEC 62443 standards. Includes network segmentation, access control, patch management, and security monitoring for industrial control systems."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "ABB Mobile Operations",
      description: "Mobile application enabling field operators to access plant data, acknowledge alarms, and perform operational tasks from tablets and smartphones with secure authentication."
    }
  ];

  const faqItems = [
    {
      question: "What is ABB Ability Genix?",
      answer: "ABB Ability Genix is an Industrial IoT and AI suite that collects, contextualizes, and analyzes data from industrial operations. The Genix platform includes modules for asset performance management (APM), AI-assisted operations (Copilot), digital twin simulation, and emissions monitoring (Datalyzer CEMS). It integrates OT and IT data to support data-driven operational decisions."
    },
    {
      question: "What cybersecurity standards does ABB support for industrial control systems?",
      answer: "ABB aligns its cybersecurity solutions with IEC 62443, the international standard for industrial automation and control system security. ABB provides cybersecurity assessments, network segmentation design, access control implementation, patch management, and security monitoring services for control system environments."
    },
    {
      question: "How does ABB support digital transformation for existing plants?",
      answer: "ABB provides a layered approach to digital transformation. OPC UA connectivity enables data extraction from existing control systems. Edge computing allows local data processing. The Genix platform provides cloud-based analytics and AI capabilities. This approach allows plants to adopt digital solutions incrementally without replacing existing automation systems."
    },
    {
      question: "Can I purchase ABB digital solutions through Gross Automation?",
      answer: "Gross Automation is an authorized distributor of ABB Process Automation products and can assist with digital solution requirements. Contact Gross Automation at +1 (262) 252-1600 or through grossautomation.com to discuss your digital transformation needs."
    },
    {
      question: "What is ABB Mobile Operations?",
      answer: "ABB Mobile Operations is a mobile application that allows field operators and engineers to securely access plant data, view process graphics, acknowledge alarms, and perform operational tasks from tablets and smartphones. It integrates with ABB control systems including Symphony Plus and System 800xA."
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
            "name": "ABB Digital Solutions",
            "description": "ABB digital transformation solutions including Genix Industrial IoT, Asset Performance Management, Digital Twin, cybersecurity, and mobile operations for industrial automation.",
            "brand": { "@type": "Brand", "name": "ABB" },
            "manufacturer": { "@type": "Organization", "name": "ABB" },
            "category": "Industrial Digital Solutions"
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
              "acceptedAnswer": { "@type": "Answer", "text": item.answer }
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
                  <span className="bg-abb-green/10 text-abb-green px-4 py-2 rounded-full text-sm font-medium">
                    ABB Digital Solutions
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  ABB Digital
                  <span className="text-abb-green block">Transformation Solutions</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB provides digital solutions that connect industrial operations to data analytics, artificial intelligence, and cloud platforms. The ABB Ability Genix suite enables Industrial IoT, asset performance management, digital twin simulation, and emissions monitoring. Gross Automation is an authorized distributor of ABB Process Automation products.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SearchLink query="ABB Genix" label="Find Genix Solutions" />
                <SearchLink query="ABB digital" label="Browse Digital Products" variant="secondary" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-abb-gray-800 mb-6">Digital Architecture</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-primary font-semibold">Cloud & Enterprise</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Genix IoT Platform, Analytics, AI</div>
                </div>
                <div className="text-center p-4 bg-abb-blue/10 rounded-lg">
                  <div className="text-abb-blue font-semibold">Edge Computing</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Local Data Processing & OPC UA Gateway</div>
                </div>
                <div className="text-center p-4 bg-abb-green/10 rounded-lg">
                  <div className="text-abb-green font-semibold">Control Systems</div>
                  <div className="text-sm text-abb-gray-600 mt-1">800xA, Symphony Plus, Freelance</div>
                </div>
                <div className="text-center p-4 bg-abb-gray-200 rounded-lg">
                  <div className="text-abb-gray-700 font-semibold">Cybersecurity Layer</div>
                  <div className="text-sm text-abb-gray-600 mt-1">IEC 62443 Compliant Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genix Platform */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              ABB Ability Genix Platform
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              The Genix Industrial IoT and AI suite provides modular capabilities for data analytics, asset management, AI-assisted operations, and digital twin simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-abb-green/10 rounded-lg flex items-center justify-center text-abb-green flex-shrink-0">
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-abb-gray-900 mb-2">{platform.title}</h3>
                      <p className="text-abb-gray-600 text-sm leading-relaxed">{platform.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {platform.capabilities.map((cap, capIndex) => (
                      <div key={capIndex} className="flex items-center text-sm text-abb-gray-700">
                        <CheckCircle className="w-4 h-4 text-abb-green mr-2 flex-shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Connectivity, Security & Mobility
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Foundation technologies that enable secure digital transformation of industrial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalSolutions.map((solution, index) => (
              <div key={index} className="abb-card text-center">
                <div className="w-16 h-16 bg-abb-green/10 rounded-lg flex items-center justify-center text-abb-green mx-auto mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-3">{solution.title}</h3>
                <p className="text-abb-gray-600 text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-br from-abb-green to-abb-green/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Start Your Digital Transformation
            </h2>
            <p className="text-xl text-white/90">
              Contact Gross Automation to discuss ABB digital solutions for your industrial operations, from IoT connectivity to AI-powered analytics and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-abb-green px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Discuss Digital Solutions
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

export default DigitalSolutionsPage;
