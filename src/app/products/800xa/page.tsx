import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Download, Monitor, Server, Shield, Layers, Network, Cpu } from 'lucide-react';

export const metadata = {
  title: 'ABB System 800xA Solutions by Gross Automation | 35+ Years Experience',
  description: 'Expert ABB System 800xA implementation by Gross Automation - 35+ years experience integrating process control, electrical systems, safety, and information management in comprehensive automation platforms.',
  keywords: 'ABB System 800xA, extended automation, DCS, electrical control, safety systems, information management, process automation, Gross Automation'
};

const System800xAPage = () => {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Integrated Platform",
      description: "Single system for process, electrical, safety, and information management functions"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Unified Workplace",
      description: "Consistent operator interface across all automation disciplines and systems"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Modular design supporting small installations to large enterprise-wide systems"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Built-in security features and compliance with industrial cybersecurity standards"
    }
  ];

  const subsystems = [
    {
      title: "Process Control",
      description: "Advanced process control with high-performance controllers and I/O systems",
      components: ["AC 800M Controllers", "S800 I/O", "Control Builder M", "Process Portal"]
    },
    {
      title: "Electrical Control",
      description: "Complete electrical system management and monitoring capabilities",
      components: ["Electrical Workspace", "Load Management", "Motor Control", "Protection Systems"]
    },
    {
      title: "Safety Systems",
      description: "Integrated safety instrumented systems (SIS) for process safety",
      components: ["AC 800M High Integrity", "Safety Builder", "Safety Workplace", "SIL 3 Certification"]
    },
    {
      title: "Information Management",
      description: "Enterprise-wide information integration and reporting capabilities",
      components: ["Information Manager", "Historian", "Reports", "Connectivity Server"]
    }
  ];

  const benefits = [
    {
      icon: <Network className="w-5 h-5" />,
      title: "Reduced Complexity",
      description: "Single system replaces multiple separate control systems"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Lower Total Cost",
      description: "Reduced engineering, training, and maintenance costs"
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Improved Efficiency",
      description: "Unified operations and maintenance procedures"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enhanced Security",
      description: "Consistent security policies across all subsystems"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Product Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ABB System 800xA",
            "description": "ABB System 800xA is the world&apos;s most comprehensive automation platform, integrating process control, electrical systems, safety, and telecommunications in one unified solution, expertly implemented by Gross Automation.",
            "brand": {
              "@type": "Brand",
              "name": "ABB"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "ABB"
            },
            "category": "Extended Automation Systems",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Gross Automation",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3680 N. 126th St.",
                  "addressLocality": "Brookfield",
                  "addressRegion": "WI",
                  "postalCode": "53005",
                  "addressCountry": "US"
                },
                "telephone": "+1-262-252-1600"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "Contact for Quote",
                "priceCurrency": "USD"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "18",
              "bestRating": "5"
            },
            "features": [
              "Integrated Platform",
              "Unified Workplace",
              "Scalable Architecture",
              "Built-in Cybersecurity",
              "Process Control Integration",
              "Electrical System Management",
              "Safety Instrumented Systems",
              "Information Management"
            ],
            "applicationCategory": [
              "Large-scale Process Control",
              "Electrical Systems",
              "Safety Systems",
              "Information Management",
              "Enterprise Integration",
              "Multi-discipline Automation"
            ],
            "isRelatedTo": [
              {
                "@type": "Product",
                "name": "ABB Freelance DCS"
              },
              {
                "@type": "Product",
                "name": "ABB Compact Control Builder"
              }
            ]
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
                  <span className="bg-abb-blue/10 text-abb-blue px-4 py-2 rounded-full text-sm font-medium">
                    ABB System 800xA
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  ABB System 800xA Solutions
                  <span className="text-abb-blue block">by Gross Automation</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB System 800xA is the world&apos;s most comprehensive automation platform,
                  integrating process control, electrical systems, safety, and telecommunications.
                  Gross Automation delivers expert implementation with 35+ years of proven experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-abb-blue text-white px-8 py-4 rounded-md hover:bg-abb-blue/90 transition-colors font-medium"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <button className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-abb-blue hover:text-abb-blue transition-colors font-medium">
                  <Download className="mr-2 w-5 h-5" />
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-abb-gray-800 mb-6">System Overview</h3>
              <div className="space-y-6">
                <div className="text-center p-4 bg-abb-blue/10 rounded-lg">
                  <div className="text-abb-blue font-semibold">Level 4: Enterprise</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Business Systems Integration</div>
                </div>

                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-primary font-semibold">Level 3: Plant Management</div>
                  <div className="text-sm text-abb-gray-600 mt-1">800xA Information Management</div>
                </div>

                <div className="text-center p-4 bg-abb-green/10 rounded-lg">
                  <div className="text-abb-green font-semibold">Level 2: Control Systems</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Process, Electrical & Safety</div>
                </div>

                <div className="text-center p-4 bg-abb-gray-200 rounded-lg">
                  <div className="text-abb-gray-700 font-semibold">Level 1: Field Devices</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Instruments & Actuators</div>
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
              Key Features & Capabilities
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              System 800xA delivers unprecedented integration and functionality
              for modern industrial automation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="abb-card text-center">
                <div className="w-16 h-16 bg-abb-blue/10 rounded-lg flex items-center justify-center text-abb-blue mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{feature.title}</h3>
                <p className="text-abb-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsystems */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Integrated Subsystems
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              All automation disciplines unified under one comprehensive platform
              for maximum efficiency and reduced complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subsystems.map((subsystem, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-abb-gray-900 mb-3">{subsystem.title}</h3>
                    <p className="text-abb-gray-600">{subsystem.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-abb-gray-800 mb-3">Key Components:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {subsystem.components.map((component, componentIndex) => (
                        <div key={componentIndex} className="flex items-center text-sm text-abb-gray-700">
                          <CheckCircle className="w-4 h-4 text-abb-green mr-2 flex-shrink-0" />
                          {component}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Business Benefits
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  System 800xA delivers significant operational and financial benefits
                  through its unified approach to automation.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-abb-blue/10 rounded-lg flex items-center justify-center text-abb-blue flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-abb-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-abb-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-abb-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">ROI Highlights</h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-abb-blue mb-2">30%</div>
                  <div className="text-abb-gray-600">Reduction in Engineering Time</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-abb-green mb-2">25%</div>
                  <div className="text-abb-gray-600">Lower Maintenance Costs</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-abb-gray-600">Faster Project Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              System 800xA is deployed across various industries for critical
              process and plant automation applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { industry: "Oil & Gas", applications: ["Upstream Production", "Refining", "Pipelines", "LNG Facilities"] },
              { industry: "Power Generation", applications: ["Coal Plants", "Gas Turbines", "Nuclear", "Renewable Energy"] },
              { industry: "Chemical & Petrochemical", applications: ["Process Plants", "Specialty Chemicals", "Polymers", "Fertilizers"] },
              { industry: "Pulp & Paper", applications: ["Pulp Mills", "Paper Machines", "Recovery Boilers", "Bleaching"] },
              { industry: "Metals & Mining", applications: ["Steel Production", "Aluminum", "Copper", "Processing Plants"] },
              { industry: "Water & Wastewater", applications: ["Treatment Plants", "Distribution", "Collection", "Desalination"] }
            ].map((item, index) => (
              <div key={index} className="abb-card">
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{item.industry}</h3>
                <ul className="space-y-2">
                  {item.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center text-abb-gray-700">
                      <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-abb-blue to-abb-blue/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Transform Your Operations with System 800xA
            </h2>
            <p className="text-xl text-white/90">
              Discover how System 800xA can unify your automation systems
              and deliver significant operational improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-abb-blue px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Schedule Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
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

export default System800xAPage;