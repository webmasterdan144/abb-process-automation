import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Download, Cpu, Settings, Zap, Network, Wrench, Shield } from 'lucide-react';

export const metadata = {
  title: 'ABB Compact Control Builder Solutions by Gross Automation | 35+ Years Experience',
  description: 'Expert ABB Compact Control Builder implementation by Gross Automation - 35+ years experience with AC 800M controllers, drive integration, and complete automation programming solutions.',
  keywords: 'ABB Compact Control Builder, AC 800M, engineering tool, control solutions, drive integration, motor starters, automation programming, Gross Automation'
};

const CompactControlPage = () => {
  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Integrated Engineering',
      description: 'Single engineering environment for controllers, drives, and motor starters with unified configuration.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AC 800M Controllers',
      description: 'Full support for AC 800M controller family with advanced programming and diagnostic capabilities.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Drive Integration',
      description: 'Seamless integration with ABB drives including configuration, monitoring, and control functions.'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Flexible Connectivity',
      description: 'Multiple communication protocols and network options for diverse automation requirements.'
    }
  ];

  const controllerOptions = [
    {
      model: 'AC 800M',
      description: 'High-performance controller for demanding automation applications',
      capabilities: [
        'Up to 12,000 I/O points',
        'Multiple communication protocols',
        'Real-time performance',
        'Hot-swappable modules',
        'Redundancy support',
        'Safety integration'
      ],
      applications: ['Process Control', 'Manufacturing', 'Building Automation', 'Infrastructure']
    }
  ];

  const driveIntegration = [
    'ACS580 Series - General Purpose Drives',
    'ACS880 Series - Industrial Drives',
    'ACS550 Series - HVAC Drives',
    'DCS800 Series - DC Drives',
    'ACSM1 Series - Modular Drives',
    'Motor Starters and Contactors'
  ];

  const programmingLanguages = [
    {
      language: 'Ladder Diagram (LD)',
      description: 'Traditional relay logic programming for discrete control applications'
    },
    {
      language: 'Function Block Diagram (FBD)',
      description: 'Graphical programming using interconnected function blocks'
    },
    {
      language: 'Structured Text (ST)',
      description: 'High-level programming language for complex algorithms'
    },
    {
      language: 'Sequential Function Chart (SFC)',
      description: 'Step-based programming for sequential processes'
    },
    {
      language: 'Continuous Function Chart (CFC)',
      description: 'Graphical programming for continuous control applications'
    }
  ];

  const systemFeatures = [
    {
      category: 'Engineering Features',
      items: [
        'Object-oriented programming',
        'Reusable function blocks',
        'Version control integration',
        'Multi-user engineering',
        'Simulation capabilities',
        'Comprehensive diagnostics'
      ]
    },
    {
      category: 'Runtime Features',
      items: [
        'Hot configuration download',
        'Online debugging',
        'Recipe management',
        'Alarm and event handling',
        'Data logging',
        'Web-based monitoring'
      ]
    },
    {
      category: 'Integration Features',
      items: [
        'OPC connectivity',
        'Database integration',
        'Third-party device support',
        'Custom protocol implementation',
        'SCADA integration',
        'MES connectivity'
      ]
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
            "name": "ABB Compact Control Builder",
            "description": "ABB Compact Control Builder engineering tool for AC 800M controllers with integrated drive and motor starter functionality, professionally implemented by Gross Automation with 35+ years of expertise.",
            "brand": {
              "@type": "Brand",
              "name": "ABB"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "ABB"
            },
            "category": "Engineering Software Tools",
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
              "ratingValue": "4.7",
              "reviewCount": "12",
              "bestRating": "5"
            },
            "features": [
              "Integrated Engineering Environment",
              "AC 800M Controller Support",
              "Drive Integration",
              "Motor Starter Functionality",
              "Flexible Connectivity",
              "Windows-based Platform",
              "Unified Configuration",
              "Advanced Programming"
            ],
            "applicationCategory": [
              "Process Control",
              "Manufacturing Automation",
              "Building Automation",
              "Infrastructure Control",
              "Drive Control Systems",
              "Motor Control Applications"
            ],
            "operatingSystem": "Windows",
            "isRelatedTo": [
              {
                "@type": "Product",
                "name": "ABB AC 800M Controllers"
              },
              {
                "@type": "Product",
                "name": "ABB System 800xA"
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
                  <span className="bg-abb-green/10 text-abb-green px-4 py-2 rounded-full text-sm font-medium">
                    ABB Compact Control Builder
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Advanced Control
                  <span className="text-abb-green block">Engineering Platform</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB Compact Control Builder is a Windows-based engineering tool for creating
                  comprehensive control solutions with AC 800M controllers, including seamless
                  integration of ABB drives and motor starters.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-abb-green text-white px-8 py-4 rounded-md hover:bg-abb-green/90 transition-colors font-medium"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <button className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-abb-green hover:text-abb-green transition-colors font-medium">
                  <Download className="mr-2 w-5 h-5" />
                  Download Datasheet
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-abb-gray-800 mb-6">Platform Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-abb-gray-50 rounded-lg">
                  <span className="text-abb-gray-700">Programming Languages</span>
                  <span className="font-semibold text-abb-green">5 IEC 61131-3</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-abb-gray-50 rounded-lg">
                  <span className="text-abb-gray-700">Controller Support</span>
                  <span className="font-semibold text-abb-green">AC 800M Series</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-abb-gray-50 rounded-lg">
                  <span className="text-abb-gray-700">Drive Integration</span>
                  <span className="font-semibold text-abb-green">Native Support</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-abb-gray-50 rounded-lg">
                  <span className="text-abb-gray-700">Engineering</span>
                  <span className="font-semibold text-abb-green">Windows-based</span>
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
              Compact Control Builder provides a comprehensive engineering environment
              for developing sophisticated automation solutions with integrated drive control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="abb-card text-center">
                <div className="w-16 h-16 bg-abb-green/10 rounded-lg flex items-center justify-center text-abb-green mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{feature.title}</h3>
                <p className="text-abb-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              IEC 61131-3 Programming Languages
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Support for all five IEC 61131-3 programming languages provides flexibility
              to choose the best approach for each control application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-abb-gray-900">{lang.language}</h3>
                  <p className="text-abb-gray-600">{lang.description}</p>
                  <div className="pt-4 border-t border-abb-gray-200">
                    <span className="text-sm text-abb-green font-medium">✓ Fully Supported</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC 800M Controllers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  AC 800M Controller Platform
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  The AC 800M controller family provides high-performance automation
                  control with exceptional flexibility and scalability for diverse applications.
                </p>
              </div>

              {controllerOptions.map((controller, index) => (
                <div key={index} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-abb-gray-900 mb-2">{controller.model}</h3>
                    <p className="text-abb-gray-600 mb-4">{controller.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-abb-gray-800 mb-3">Key Capabilities:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {controller.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-abb-gray-700">
                          <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                          <span className="text-sm">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-abb-gray-800 mb-3">Typical Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {controller.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-abb-green/10 text-abb-green px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-abb-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Drive Integration</h3>
              <p className="text-abb-gray-600 mb-6">
                Seamlessly integrate and control ABB drives directly from your control application:
              </p>
              <div className="space-y-3">
                {driveIntegration.map((drive, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                    <Zap className="w-5 h-5 text-abb-green mr-3 flex-shrink-0" />
                    <span className="text-abb-gray-700 text-sm">{drive}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Comprehensive Feature Set
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Compact Control Builder provides all the tools needed for efficient
              engineering, deployment, and maintenance of automation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemFeatures.map((category, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-abb-green/10 rounded-lg flex items-center justify-center">
                      {index === 0 ? <Wrench className="w-5 h-5 text-abb-green" /> :
                       index === 1 ? <Cpu className="w-5 h-5 text-abb-green" /> :
                       <Network className="w-5 h-5 text-abb-green" />}
                    </div>
                    <h3 className="text-xl font-semibold text-abb-gray-900">{category.category}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-abb-gray-700">
                        <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Compact Control Builder and AC 800M controllers are deployed across
              various industries for critical automation applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'Manufacturing',
                applications: ['Production Lines', 'Material Handling', 'Quality Control', 'Packaging Systems']
              },
              {
                industry: 'Infrastructure',
                applications: ['Water Treatment', 'HVAC Systems', 'Building Automation', 'Energy Management']
              },
              {
                industry: 'Process Industries',
                applications: ['Batch Control', 'Continuous Processes', 'Safety Systems', 'Utilities Management']
              },
              {
                industry: 'Marine & Offshore',
                applications: ['Ship Automation', 'Offshore Platforms', 'Port Operations', 'Cargo Handling']
              },
              {
                industry: 'Mining',
                applications: ['Conveyor Systems', 'Processing Plants', 'Material Transport', 'Safety Systems']
              },
              {
                industry: 'Metals',
                applications: ['Steel Production', 'Rolling Mills', 'Heat Treatment', 'Material Handling']
              }
            ].map((item, index) => (
              <div key={index} className="abb-card">
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{item.industry}</h3>
                <ul className="space-y-2">
                  {item.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center text-abb-gray-700">
                      <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                      <span className="text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
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
              Ready to Implement Compact Control Solutions?
            </h2>
            <p className="text-xl text-white/90">
              Our certified engineers can help you design and implement
              comprehensive automation solutions using Compact Control Builder and AC 800M controllers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-abb-green px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Schedule Consultation
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

export default CompactControlPage;