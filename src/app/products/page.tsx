import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Layers, Cpu, Network, Settings, Gauge, Cloud } from 'lucide-react';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = {
  title: 'ABB Process Automation Products | DCS, Controllers, I/O | Gross Automation',
  description: 'Complete portfolio of ABB process automation products including Freelance DCS, System 800xA, AC800M controllers, AC500 PLCs, and distributed I/O systems. Expert integration by Gross Automation.',
  keywords: 'ABB products, process automation, Freelance DCS, System 800xA, ABB controllers, ABB PLCs, I/O systems, Compact Control Builder, Gross Automation'
};

const ProductsPage = () => {
  const productCategories = [
    {
      title: 'Distributed Control Systems',
      description: 'Comprehensive DCS platforms for process automation',
      icon: <Layers className="w-8 h-8" />,
      products: [
        {
          name: 'ABB Freelance DCS',
          description: 'Scalable and flexible distributed control system',
          link: '/products/freelance',
          features: ['Process control', 'Safety systems', 'Asset optimization']
        },
        {
          name: 'System 800xA',
          description: 'Extended automation platform for large enterprises',
          link: '/products/800xa',
          features: ['Plant-wide control', 'Information management', 'Advanced applications']
        },
        {
          name: 'ABB Ability Symphony Plus',
          description: 'Total plant automation for power and water industries',
          link: '/products/symphony-plus',
          features: ['Power generation', 'Water treatment', 'Legacy migration']
        }
      ]
    },
    {
      title: 'Engineering Tools',
      description: 'Advanced engineering and configuration software',
      icon: <Settings className="w-8 h-8" />,
      products: [
        {
          name: 'Compact Product Suite',
          description: 'AC 800M controllers, safety controllers, process recorders, and field interfaces',
          link: '/products/compact-control',
          features: ['Integrated development', 'Multi-language support', 'Advanced diagnostics']
        }
      ]
    },
    {
      title: 'Controllers & PLCs',
      description: 'High-performance automation controllers',
      icon: <Cpu className="w-8 h-8" />,
      products: [
        {
          name: 'ABB Controllers',
          description: 'AC800M, AC500 series and process controllers',
          link: '/products/controllers',
          features: ['High performance', 'Modular design', 'Real-time control']
        }
      ]
    },
    {
      title: 'I/O Systems',
      description: 'Distributed and remote I/O solutions',
      icon: <Network className="w-8 h-8" />,
      products: [
        {
          name: 'I/O Systems',
          description: 'S800, S900 and distributed I/O modules',
          link: '/products/io-systems',
          features: ['Flexible configuration', 'Hot-swappable', 'Advanced diagnostics']
        }
      ]
    },
    {
      title: 'Instrumentation',
      description: 'Measurement and analytical instruments',
      icon: <Gauge className="w-8 h-8" />,
      products: [
        {
          name: 'Measurement & Analytics',
          description: 'Flow, pressure, temperature, level, and analytical instruments',
          link: '/products/measurement-analytics',
          features: ['Flow meters', 'Pressure transmitters', 'Analyzers']
        }
      ]
    },
    {
      title: 'Digital Solutions',
      description: 'IIoT, analytics, and cybersecurity',
      icon: <Cloud className="w-8 h-8" />,
      products: [
        {
          name: 'Digital Solutions',
          description: 'Genix IIoT, digital twin, asset management, and cybersecurity',
          link: '/products/digital-solutions',
          features: ['Genix IoT', 'Digital Twin', 'Cybersecurity']
        }
      ]
    }
  ];

  const keyBenefits = [
    {
      title: 'Complete Integration',
      description: 'Seamlessly integrated product portfolio for unified automation solutions'
    },
    {
      title: 'Scalable Architecture',
      description: 'From small machines to large process plants with consistent technology'
    },
    {
      title: 'Future-Ready',
      description: 'Built on modern standards with support for Industry 4.0 initiatives'
    },
    {
      title: 'Expert Support',
      description: 'Comprehensive support from Gross Automation throughout the product lifecycle'
    }
  ];

  const industries = [
    'Oil & Gas',
    'Chemical Processing',
    'Power Generation',
    'Food & Beverage',
    'Pharmaceutical',
    'Pulp & Paper',
    'Water Treatment',
    'Manufacturing'
  ];

  return (
    <div className="min-h-screen pt-20">
      <WebPageSchema
        title="ABB Process Automation Products | DCS, Controllers, I/O | Gross Automation"
        description="Complete portfolio of ABB process automation products including Freelance DCS, System 800xA, AC800M controllers, AC500 PLCs, and distributed I/O systems. Expert integration by Gross Automation."
        pageType="ProductPage"
      />

      {/* Schema for Product Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ABB Process Automation Products",
            "description": "Complete portfolio of ABB process automation products including DCS systems, controllers, PLCs, and I/O systems for industrial automation applications.",
            "brand": {
              "@type": "Brand",
              "name": "ABB"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "ABB",
              "url": "https://www.abb.com"
            },
            "category": "Process Automation Systems",
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    ABB Product Portfolio
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Complete ABB
                  <span className="abb-text-gradient block">Automation Portfolio</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Comprehensive range of ABB process automation products from distributed
                  control systems to controllers, I/O, and engineering tools. Integrated
                  solutions by Gross Automation for optimal performance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="font-semibold text-abb-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-abb-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Explore Solutions
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
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Industries Served</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-abb-green" />
                    <span className="text-abb-gray-700 text-sm">{industry}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-abb-blue/10 rounded-lg text-center">
                <div className="text-2xl font-bold text-abb-blue">500+</div>
                <div className="text-abb-gray-600">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              ABB Product Categories
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of ABB automation products,
              each designed to deliver superior performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-abb-gray-900">{category.title}</h3>
                      <p className="text-abb-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="p-4 bg-abb-gray-50 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-abb-gray-900">{product.name}</h4>
                            <p className="text-sm text-abb-gray-600">{product.description}</p>
                          </div>
                          <Link
                            href={product.link}
                            className="text-primary hover:text-primary-dark transition-colors"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ABB */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Why Choose ABB Products?
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB&apos;s automation portfolio represents decades of innovation and
                  real-world experience in process automation applications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Global Standard</div>
                    <div className="text-abb-gray-600">Proven technology deployed in thousands of installations worldwide</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Integrated Platform</div>
                    <div className="text-abb-gray-600">Seamless integration across all automation layers</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Future-Proof Investment</div>
                    <div className="text-abb-gray-600">Built on open standards with long-term support</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Expert Implementation</div>
                    <div className="text-abb-gray-600">Professional integration and support by Gross Automation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Product Highlights</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Freelance DCS</h4>
                  <p className="text-abb-gray-600 text-sm">Flexible distributed control system</p>
                </div>

                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">ABB Ability System 800xA</h4>
                  <p className="text-abb-gray-600 text-sm">Extended automation platform for enterprise-wide control</p>
                </div>

                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">AC800M Controllers</h4>
                  <p className="text-abb-gray-600 text-sm">High-performance controllers for critical applications</p>
                </div>

                <div className="border-l-4 border-abb-orange pl-4">
                  <h4 className="font-semibold text-abb-gray-800">I/O Systems</h4>
                  <p className="text-abb-gray-600 text-sm">Comprehensive I/O portfolio for all applications</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-primary hover:text-primary-dark"
                >
                  View Application Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 abb-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Explore ABB Products?
            </h2>
            <p className="text-xl text-white/90">
              Contact Gross Automation today to discuss your automation requirements
              and discover the right ABB products for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Request Product Information
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

export default ProductsPage;