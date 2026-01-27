import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Cpu, Settings, Zap, Shield, Clock, Users } from 'lucide-react';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = {
  title: 'ABB Controllers & PLCs | AC800M, AC500 Series | Gross Automation',
  description: 'Complete range of ABB controllers and PLCs including AC800M high-performance controllers, AC500 scalable PLCs, and PM864 process controllers. Expert integration by Gross Automation.',
  keywords: 'ABB controllers, ABB PLCs, AC800M, AC500 series, PM864, process controllers, automation controllers, industrial controllers, Gross Automation'
};

const ControllersPage = () => {
  const controllerSeries = [
    {
      name: 'AC800M High Performance',
      description: 'Powerful controllers for demanding process automation applications',
      features: [
        'High-speed processing capabilities',
        'Extensive I/O capacity',
        'Advanced control algorithms',
        'Hot-swappable modules'
      ],
      applications: ['Large process plants', 'Critical control systems', 'High-speed applications']
    },
    {
      name: 'AC500 Scalable PLCs',
      description: 'Flexible and scalable PLC family for diverse automation needs',
      features: [
        'Modular design',
        'Multiple communication protocols',
        'Integrated safety functions',
        'Energy efficient operation'
      ],
      applications: ['Manufacturing automation', 'Building automation', 'Machine control']
    },
    {
      name: 'PM864 Process Controllers',
      description: 'Dedicated process control with integrated I/O capabilities',
      features: [
        'Built-in process I/O',
        'Real-time control',
        'Compact design',
        'Easy configuration'
      ],
      applications: ['Process control', 'Small to medium plants', 'Standalone applications']
    }
  ];

  const keyFeatures = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'High Performance',
      description: 'Advanced processing power for complex automation tasks'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Flexible Configuration',
      description: 'Modular design allows customization for specific applications'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Response',
      description: 'Real-time control with minimal latency for critical processes'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Reliable Operation',
      description: 'Robust design ensures continuous operation in harsh environments'
    }
  ];

  const specifications = [
    {
      category: 'Processing Power',
      details: ['32-bit ARM processors', 'Up to 512 MB RAM', 'Flash memory storage', 'Real-time operating system']
    },
    {
      category: 'I/O Capabilities',
      details: ['Digital and analog I/O', 'Up to 8000 I/O points', 'Hot-swappable modules', 'Distributed I/O support']
    },
    {
      category: 'Communication',
      details: ['Ethernet TCP/IP', 'PROFIBUS DP', 'Modbus RTU/TCP', 'DeviceNet support']
    },
    {
      category: 'Programming',
      details: ['IEC 61131-3 languages', 'Function block diagram', 'Structured text', 'Ladder logic']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <WebPageSchema
        title="ABB Controllers & PLCs | AC800M, AC500 Series | Gross Automation"
        description="Complete range of ABB controllers and PLCs including AC800M high-performance controllers, AC500 scalable PLCs, and PM864 process controllers. Expert integration by Gross Automation."
        pageType="ProductPage"
      />

      {/* Schema for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ABB Controllers & PLCs",
            "description": "Complete range of ABB controllers and PLCs including AC800M, AC500 series, and PM864 process controllers for industrial automation applications.",
            "brand": {
              "@type": "Brand",
              "name": "ABB"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "ABB",
              "url": "https://www.abb.com"
            },
            "category": "Industrial Controllers",
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
                "name": "What ABB controllers are available through Gross Automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gross Automation distributes ABB controllers including AC800M high-performance process controllers, AC500 scalable PLCs, and PM864 dedicated process controllers. Contact Gross Automation at +1 (262) 252-1600 for specific controller selection."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between AC800M and AC500 controllers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The AC800M is a high-performance controller designed for process automation within ABB System 800xA and Compact Product Suite environments. The AC500 is a scalable PLC family designed for manufacturing automation, building automation, and machine control applications."
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
                    ABB Controllers & PLCs
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Advanced ABB
                  <span className="abb-text-gradient block">Controllers & PLCs</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Complete range of ABB controllers from high-performance AC800M systems
                  to scalable AC500 PLCs, engineered for reliability and precision in
                  demanding industrial applications.
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
                  href="tel:+12622521600"
                  className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  Call +1 (262) 252-1600
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="abb-card text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-abb-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-abb-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Controller Series */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              ABB Controller Series
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              From high-performance process controllers to scalable PLCs,
              ABB offers solutions for every automation requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {controllerSeries.map((series, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-abb-gray-900 mb-3">{series.name}</h3>
                    <p className="text-abb-gray-600">{series.description}</p>
                  </div>

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
                    <h4 className="font-semibold text-abb-gray-800 mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="text-xs bg-abb-blue/10 text-abb-blue px-2 py-1 rounded"
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

      {/* Technical Specifications */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Technical Specifications
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB controllers are built to the highest standards with advanced
                  specifications for reliable industrial operation.
                </p>
              </div>

              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-abb-gray-800 mb-2">{spec.category}</h3>
                    <ul className="space-y-1">
                      {spec.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-abb-gray-600 text-sm">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Why Choose ABB Controllers?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-abb-gray-800">Proven Reliability</div>
                      <div className="text-abb-gray-600 text-sm">Designed for high availability in industrial applications</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-abb-gray-800">Expert Support</div>
                      <div className="text-abb-gray-600 text-sm">Comprehensive support from Gross Automation</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Settings className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-abb-gray-800">Future-Ready</div>
                      <div className="text-abb-gray-600 text-sm">Scalable design for evolving requirements</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-abb-blue/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-abb-blue">25+</div>
                  <div className="text-abb-gray-600">Years Controller Experience</div>
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
              href="https://www.grossautomation.com/products?s=ABB+controller+AC800M&manufacturers=ABBTOW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              Find ABB Controllers
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
              Ready to Implement ABB Controllers?
            </h2>
            <p className="text-xl text-white/90">
              Contact Gross Automation today to discuss your controller requirements
              and discover the right ABB solution for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Get Controller Quote
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

export default ControllersPage;