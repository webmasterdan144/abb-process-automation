import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Download, Network, Shield, Zap, Cpu } from 'lucide-react';

export const metadata = {
  title: 'ABB Freelance DCS Solutions by Gross Automation | Authorized Distributor',
  description: 'Expert ABB Freelance DCS implementation by Gross Automation - Authorized Distributor with AC 700F, AC 800F, and AC 900F controllers, Foundation Fieldbus support, and complete system integration.',
  keywords: 'ABB Freelance DCS, AC 700F, AC 800F, AC 900F, distributed control system, Foundation Fieldbus, Control Builder F, Gross Automation'
};

const FreelancePage = () => {
  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Distributed Architecture",
      description: "Scalable system architecture supporting 1 to multiple controllers with various I/O configurations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Redundant Design",
      description: "High availability with redundant controllers and communication paths for critical applications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Foundation Fieldbus",
      description: "Native support for Foundation Fieldbus with advanced diagnostics and device management"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Control Builder F",
      description: "Powerful engineering tool for configuration, programming, and maintenance of all controllers"
    }
  ];

  const controllers = [
    {
      model: "AC 700F",
      description: "Compact controller for small to medium applications",
      specs: ["Up to 4000 I/O points", "Ethernet communication", "Web server functionality", "Compact design"]
    },
    {
      model: "AC 800F",
      description: "High-performance controller for demanding applications",
      specs: ["Up to 12000 I/O points", "Redundant configuration", "Hot standby capability", "Advanced diagnostics"]
    },
    {
      model: "AC 900F",
      description: "Premium controller for large-scale process control",
      specs: ["Up to 20000 I/O points", "Multiple communication protocols", "Safety functionality", "High-speed processing"]
    }
  ];

  const applications = [
    "Oil & Gas Processing",
    "Chemical & Petrochemical",
    "Power Generation",
    "Water & Wastewater",
    "Food & Beverage",
    "Pharmaceutical",
    "Pulp & Paper",
    "Mining & Metals"
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
            "name": "ABB Freelance DCS",
            "description": "ABB Freelance distributed control system combining DCS functionality with PLC advantages for optimal process control, implemented by Gross Automation with 35+ years experience.",
            "brand": {
              "@type": "Brand",
              "name": "ABB"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "ABB"
            },
            "category": "Industrial Automation Systems",
            "features": [
              "Distributed Architecture",
              "Redundant Design",
              "Foundation Fieldbus Support",
              "Control Builder F Engineering Tool",
              "Up to 20,000 I/O Points"
            ],
            "applicationCategory": [
              "Oil & Gas Processing",
              "Chemical & Petrochemical",
              "Power Generation",
              "Water & Wastewater",
              "Food & Beverage",
              "Pharmaceutical"
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is ABB Freelance DCS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ABB Freelance DCS is a distributed control system that combines the functionality of a DCS with the flexibility of a PLC. It uses AC 700F, AC 800F, and AC 900F controllers with the Control Builder F engineering tool. Freelance is used in process industries including chemical, oil and gas, power, water, and food and beverage."
                }
              },
              {
                "@type": "Question",
                "name": "How can I order ABB Freelance DCS products?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gross Automation is an authorized distributor of ABB Process Automation products including Freelance DCS. Contact Gross Automation at +1 (262) 252-1600 or search the product catalog at grossautomation.com for specific Freelance components and part numbers."
                }
              },
              {
                "@type": "Question",
                "name": "What industries use ABB Freelance DCS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ABB Freelance DCS is deployed across oil and gas, chemical and petrochemical, power generation, water and wastewater, food and beverage, pharmaceutical, pulp and paper, and mining industries."
                }
              },
              {
                "@type": "Question",
                "name": "Does Freelance DCS support batch management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. ABB offers 800xA Batch Management for Freelance, which provides ISA-88 compliant batch control functionality integrated with the Freelance DCS platform."
                }
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
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    ABB Freelance DCS
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  ABB Freelance DCS Solutions
                  <span className="abb-text-gradient block">by Gross Automation</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  The ABB Freelance distributed control system combines the advantages of
                  both DCS and PLC technologies. Gross Automation delivers expert implementation
                  with decades of experience in process automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <a
                  href="https://gross-automation-prod.s3.amazonaws.com/manufacturers/1731614295267file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-abb-gray-800 mb-6">System Capabilities</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-abb-gray-50 rounded-lg">
                  <span className="text-abb-gray-700">I/O Points</span>
                  <span className="font-semibold text-primary">Up to 20,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-abb-gray-50 rounded-lg">
                  <span className="text-abb-gray-700">Controllers</span>
                  <span className="font-semibold text-primary">1 to Multiple</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-abb-gray-50 rounded-lg">
                  <span className="text-abb-gray-700">Engineering Tool</span>
                  <span className="font-semibold text-primary">Control Builder F</span>
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
              Key Features & Benefits
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Freelance DCS delivers proven performance with advanced features designed
              for modern process automation requirements, expertly implemented by Gross Automation.
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

      {/* Controllers */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Controller Portfolio
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Gross Automation helps you choose from ABB&apos;s range of Freelance controllers
              designed to meet various application requirements and system sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {controllers.map((controller, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{controller.model}</h3>
                    <p className="text-abb-gray-600">{controller.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {controller.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center text-abb-gray-700">
                        <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Industry Applications
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB Freelance DCS is trusted across industries for critical process
                  control applications. Gross Automation&apos;s extensive experience supports reliable
                  and performance implementation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-abb-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-abb-green flex-shrink-0" />
                    <span className="text-abb-gray-700 font-medium">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-abb-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Why Choose Freelance DCS?</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Proven Technology</h4>
                  <p className="text-abb-gray-600 text-sm">Over 20 years of field-proven performance in critical applications worldwide.</p>
                </div>
                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Scalable Architecture</h4>
                  <p className="text-abb-gray-600 text-sm">Easily scales from small to large applications with consistent engineering tools.</p>
                </div>
                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Future-Ready</h4>
                  <p className="text-abb-gray-600 text-sm">Modern connectivity and cybersecurity features for Industry 4.0 readiness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Products */}
      <section className="py-12 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.grossautomation.com/products?s=ABB+Freelance+DCS&manufacturers=ABBTOW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              Find Freelance DCS Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 abb-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Implement ABB Freelance DCS?
            </h2>
            <p className="text-xl text-white/90">
              Gross Automation&apos;s certified engineers are ready to help you design, implement,
              and commission your Freelance DCS solution with extensive expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Get Expert Consultation
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

export default FreelancePage;