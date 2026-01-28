import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Network, Zap, Shield, Settings, Database, Cpu } from 'lucide-react';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = {
  title: 'ABB I/O Systems | S800, S900 Distributed I/O | Gross Automation',
  description: 'Complete range of ABB I/O systems including S800 distributed I/O, S900 remote I/O, and field-mounted I/O modules. Expert integration and support by Gross Automation.',
  keywords: 'ABB I/O systems, S800 I/O, S900 I/O, distributed I/O, remote I/O, field I/O, process I/O, digital I/O, analog I/O, Gross Automation'
};

const IOSystemsPage = () => {
  const ioSeries = [
    {
      name: 'S800 Distributed I/O',
      description: 'Flexible distributed I/O system for process and hybrid applications',
      features: [
        'Hot-swappable modules',
        'Advanced diagnostics',
        'Flexible mounting options',
        'Wide temperature range'
      ],
      specifications: [
        'Digital and analog I/O',
        'Up to 8000 I/O points per cluster',
        'Redundant communication',
        'Intrinsically safe options'
      ],
      applications: ['Process control', 'Safety systems', 'Motor control', 'Field devices']
    },
    {
      name: 'S900 Remote I/O',
      description: 'Robust remote I/O system for harsh industrial environments',
      features: [
        'IP67 field housing',
        'Extreme temperature tolerance',
        'Vibration resistant',
        'Easy maintenance'
      ],
      specifications: [
        'Field-mounted design',
        'Multi-protocol support',
        'Power and signal modules',
        'Explosion-proof variants'
      ],
      applications: ['Remote locations', 'Outdoor installations', 'Mobile equipment', 'Hazardous areas']
    }
  ];

  const moduleTypes = [
    {
      type: 'Digital Input',
      icon: <Database className="w-6 h-6" />,
      description: 'High-density digital input modules',
      features: ['24V DC inputs', 'Isolated channels', 'LED diagnostics', 'Fast response']
    },
    {
      type: 'Digital Output',
      icon: <Zap className="w-6 h-6" />,
      description: 'Reliable digital output modules',
      features: ['Relay and transistor outputs', 'Short circuit protection', 'Status indication', 'High switching capacity']
    },
    {
      type: 'Analog Input',
      icon: <Settings className="w-6 h-6" />,
      description: 'High-precision analog input modules',
      features: ['16-bit resolution', 'Multiple signal types', 'HART communication', 'Temperature compensation']
    },
    {
      type: 'Analog Output',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Accurate analog output modules',
      features: ['4-20mA outputs', 'HART support', 'Valve control', 'Position feedback']
    }
  ];

  const keyAdvantages = [
    {
      title: 'Flexible Architecture',
      description: 'Modular design allows optimal configuration for any application'
    },
    {
      title: 'Hot-Swappable',
      description: 'Replace modules without shutting down the system'
    },
    {
      title: 'Advanced Diagnostics',
      description: 'Comprehensive diagnostics for proactive maintenance'
    },
    {
      title: 'Harsh Environment',
      description: 'Designed for extreme industrial conditions'
    }
  ];

  const communicationProtocols = [
    'PROFIBUS DP',
    'Ethernet/IP',
    'Modbus TCP',
    'DeviceNet',
    'Foundation Fieldbus',
    'HART Protocol'
  ];

  return (
    <div className="min-h-screen pt-20">
      <WebPageSchema
        title="ABB I/O Systems | S800, S900 Distributed I/O | Gross Automation"
        description="Complete range of ABB I/O systems including S800 distributed I/O, S900 remote I/O, and field-mounted I/O modules. Expert integration and support by Gross Automation."
        pageType="ProductPage"
      />

      {/* Schema for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ABB I/O Systems",
            "description": "Complete range of ABB I/O systems including S800 distributed I/O, S900 remote I/O, and field-mounted I/O modules for industrial automation applications.",
            "brand": {
              "@type": "Brand",
              "name": "ABB"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "ABB",
              "url": "https://www.abb.com"
            },
            "category": "Industrial I/O Systems",
            "provider": {
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
            }
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
                "name": "What ABB I/O systems are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ABB offers S800 distributed I/O for process and hybrid applications and S900 remote I/O for harsh industrial environments. Both systems support hot-swappable modules, advanced diagnostics, and multiple communication protocols. Available through Gross Automation."
                }
              },
              {
                "@type": "Question",
                "name": "Are ABB S800 I/O modules hot-swappable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. ABB S800 I/O modules are designed for hot-swap capability, allowing module replacement without shutting down the system. This supports continuous plant operation during maintenance activities."
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
                    ABB I/O Systems
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Advanced ABB
                  <span className="abb-text-gradient block">I/O Systems</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Comprehensive range of ABB I/O systems including S800 distributed I/O
                  and S900 remote I/O solutions. Engineered for reliability and precision
                  in the most demanding industrial environments.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {keyAdvantages.map((advantage, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold text-abb-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-sm text-abb-gray-600">{advantage.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Request I/O Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <a
                  href="tel:+12622521600"
                  className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Call +1 (262) 252-1600
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Communication Protocols</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {communicationProtocols.map((protocol, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-abb-green" />
                    <span className="text-abb-gray-700 text-sm">{protocol}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-abb-blue/10 rounded-lg text-center">
                <div className="text-2xl font-bold text-abb-blue">8000+</div>
                <div className="text-abb-gray-600">I/O Points per Cluster</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I/O Series */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              ABB I/O Series
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              From distributed I/O for process control to ruggedized remote I/O
              for harsh environments, ABB offers complete I/O solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ioSeries.map((series, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-abb-gray-900 mb-3">{series.name}</h3>
                    <p className="text-abb-gray-600">{series.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-abb-gray-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {series.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-abb-gray-700">
                            <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-abb-gray-800 mb-3">Specifications</h4>
                      <ul className="space-y-2">
                        {series.specifications.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-center text-abb-gray-700">
                            <Shield className="w-4 h-4 text-abb-blue mr-3 flex-shrink-0" />
                            <span className="text-sm">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-abb-gray-800 mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="text-xs bg-abb-green/10 text-abb-green px-2 py-1 rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Types */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              I/O Module Types
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Comprehensive range of I/O modules for digital and analog signals,
              designed for reliability and precision in industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moduleTypes.map((module, index) => (
              <div key={index} className="abb-card text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto">
                    {module.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-abb-gray-900 mb-2">{module.type}</h3>
                    <p className="text-abb-gray-600 text-sm mb-4">{module.description}</p>
                  </div>

                  <div className="text-left">
                    <ul className="space-y-1">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-abb-gray-700">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Why Choose ABB I/O Systems?
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB I/O systems provide the flexibility, reliability, and performance
                  required for modern industrial automation applications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Network className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Distributed Architecture</div>
                    <div className="text-abb-gray-600">Flexible distribution of I/O close to field devices</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Robust Design</div>
                    <div className="text-abb-gray-600">Engineered for harsh industrial environments</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Settings className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Easy Maintenance</div>
                    <div className="text-abb-gray-600">Hot-swappable modules and comprehensive diagnostics</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">High Performance</div>
                    <div className="text-abb-gray-600">Fast response times and high-density configurations</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Technical Specifications</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Operating Conditions</h4>
                  <p className="text-abb-gray-600 text-sm">-40°C to +70°C, humidity resistant, vibration tolerant</p>
                </div>

                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Safety Certifications</h4>
                  <p className="text-abb-gray-600 text-sm">SIL 2/3, ATEX, IECEx, FM, CSA certified options</p>
                </div>

                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Communication Speed</h4>
                  <p className="text-abb-gray-600 text-sm">Up to 100 Mbps Ethernet, 12 Mbps PROFIBUS</p>
                </div>

                <div className="border-l-4 border-abb-orange pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Power Options</h4>
                  <p className="text-abb-gray-600 text-sm">24V DC, 115/230V AC, redundant power supplies</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-abb-gray-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-abb-gray-900">High</div>
                <div className="text-abb-gray-600">System Availability</div>
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
              href="https://www.grossautomation.com/products?s=ABB+S800+IO&manufacturers=ABB+-+Process+Automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              Find ABB I/O Systems
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
              Ready to Implement ABB I/O Systems?
            </h2>
            <p className="text-xl text-white/90">
              Contact Gross Automation today to discuss your I/O requirements
              and discover the optimal ABB I/O solution for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Get I/O System Quote
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

export default IOSystemsPage;