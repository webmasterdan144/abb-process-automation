import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, Zap, Droplets, Fuel, Wheat, PillBottle, TreePine, Pickaxe, Anchor, Building2, Package, Flame, Settings } from 'lucide-react';

export const metadata = {
  title: 'ABB Automation Solutions by Industry | Gross Automation',
  description: 'Comprehensive ABB process automation solutions tailored for oil & gas, chemical, power, water, food & beverage, pharmaceutical, and manufacturing industries.',
  keywords: 'ABB solutions, process automation, industrial automation, oil gas automation, chemical process control, power plant automation, life sciences automation, mining automation, aluminum smelter control, cement automation, data center automation, marine automation, ports terminals automation, refining automation, printing automation, metals processing automation'
};

const SolutionsPage = () => {
  const industries = [
    {
      icon: <Fuel className="w-8 h-8" />,
      title: 'Oil & Gas',
      description: 'Upstream production, refining, pipelines, and LNG facilities with proven reliability and safety.',
      solutions: ['Production Optimization', 'Pipeline Management', 'Refinery Automation', 'Safety Systems']
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Chemical & Petrochemical',
      description: 'Process control solutions for complex chemical manufacturing and specialty chemical production.',
      solutions: ['Batch Management', 'Continuous Processes', 'Safety Instrumented Systems', 'Advanced Control']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Generation',
      description: 'Automation solutions for conventional and renewable power generation facilities.',
      solutions: ['Turbine Control', 'Boiler Management', 'Grid Integration', 'Emissions Control']
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Water & Wastewater',
      description: 'Complete automation solutions for water treatment, distribution, and wastewater management.',
      solutions: ['Treatment Optimization', 'Distribution Control', 'SCADA Systems', 'Energy Management']
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: 'Food & Beverage',
      description: 'Hygienic automation solutions ensuring product quality, safety, and regulatory compliance.',
      solutions: ['Recipe Management', 'CIP/SIP Systems', 'Traceability', 'Quality Control']
    },
    {
      icon: <PillBottle className="w-8 h-8" />,
      title: 'Life Sciences',
      description: 'Validated automation systems meeting FDA and cGMP requirements for pharmaceutical and biotechnology production.',
      solutions: ['Batch Records', 'Clean Room Control', 'Validation Support', 'Audit Trails']
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Pulp & Paper',
      description: 'Automation solutions for pulp mills, paper machines, and converting operations.',
      solutions: ['Fiber Line Control', 'Paper Machine DCS', 'Quality Systems', 'Energy Optimization']
    },
    {
      icon: <Pickaxe className="w-8 h-8" />,
      title: 'Mining',
      description: 'Robust automation solutions for mining operations and mineral processing facilities.',
      solutions: ['Concentrator Control', 'Smelter Automation', 'Material Handling', 'Safety Systems']
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Aluminum',
      description: 'Automation for alumina refining, smelting, and casting operations requiring precise process control and energy management.',
      solutions: ['Smelter Control', 'Pot Line Automation', 'Casting Automation', 'Energy Optimization']
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Cement',
      description: 'Process automation for cement manufacturing including kiln control, grinding optimization, and emissions monitoring.',
      solutions: ['Kiln Control', 'Grinding Optimization', 'Quality Control', 'Emissions Monitoring']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Data Center Automation',
      description: 'Automation and power management solutions for data center operations ensuring uptime and energy efficiency.',
      solutions: ['Power Management', 'Cooling Optimization', 'UPS Integration', 'Energy Monitoring']
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Marine',
      description: 'Automation solutions for marine vessels and offshore platforms including propulsion control and power management.',
      solutions: ['Propulsion Control', 'Power Management', 'Vessel Automation', 'Safety Systems']
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Ports & Terminals',
      description: 'Automation for port operations including crane control, terminal management, and logistics optimization.',
      solutions: ['Crane Automation', 'Terminal Management', 'Logistics Control', 'Safety Systems']
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Refining',
      description: 'Downstream petroleum refining automation for distillation, catalytic cracking, and blending operations.',
      solutions: ['Distillation Control', 'Reactor Control', 'Blending Optimization', 'Safety Instrumented Systems']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Printing',
      description: 'Process control solutions for printing operations including web tension control, color management, and drying systems.',
      solutions: ['Web Control', 'Color Management', 'Drying Systems', 'Quality Monitoring']
    },
    {
      icon: <Pickaxe className="w-8 h-8" />,
      title: 'Metals Processing',
      description: 'Automation for metals processing including steel, copper, and specialty metals production and finishing.',
      solutions: ['Furnace Control', 'Rolling Mill Automation', 'Quality Systems', 'Energy Management']
    }
  ];

  const solutionTypes = [
    {
      title: 'Greenfield Projects',
      description: 'Complete automation solutions for new facilities from design through commissioning.',
      features: ['System Architecture Design', 'Technology Selection', 'Engineering & Programming', 'Installation & Commissioning']
    },
    {
      title: 'Brownfield Upgrades',
      description: 'Modernization of existing systems with minimal disruption to operations.',
      features: ['Legacy System Migration', 'Phased Implementation', 'Hot Cutover Support', 'Training & Documentation']
    },
    {
      title: 'System Integration',
      description: 'Integration of ABB systems with existing plant infrastructure and third-party systems.',
      features: ['Multi-vendor Integration', 'Data Historians', 'MES/ERP Connectivity', 'Custom Interfaces']
    },
    {
      title: 'Lifecycle Services',
      description: 'Ongoing support and optimization throughout the system lifecycle.',
      features: ['Preventive Maintenance', 'Performance Optimization', 'Cybersecurity Updates', 'Spare Parts Management']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "ABB Process Automation Solutions",
            "description": "Comprehensive ABB process automation solutions tailored for multiple industries including oil & gas, chemical, power generation, water treatment, food & beverage, pharmaceutical, and manufacturing by Gross Automation.",
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
              "telephone": "+1-262-252-1600",
              "url": "https://www.freelance800fsales.com"
            },
            "areaServed": [
              "Wisconsin",
              "Illinois",
              "Minnesota",
              "Iowa",
              "Michigan",
              "Indiana"
            ],
            "serviceType": [
              "Process Automation",
              "Industrial Control Systems",
              "DCS Implementation",
              "System Integration",
              "Engineering Services",
              "Commissioning",
              "Training",
              "Technical Support"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Industry Solutions
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6 leading-tight">
              Tailored ABB Automation
              <span className="abb-text-gradient block">Solutions by Industry</span>
            </h1>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              ABB automation solutions designed to optimize your operations
              and improve safety across a wide range of industries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              Discuss Your Requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Our solutions are tailored to meet the unique requirements and challenges
              of your specific industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="abb-card group hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-abb-gray-900">{industry.title}</h3>
                    <p className="text-abb-gray-600 text-sm leading-relaxed">{industry.description}</p>

                    <div>
                      <h4 className="font-semibold text-abb-gray-800 mb-2">Key Solutions:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-center text-xs text-abb-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Solution Approaches
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re building new facilities or upgrading existing systems,
              we have the right approach for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionTypes.map((solution, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-abb-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-abb-gray-600 mb-4">{solution.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-abb-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-abb-gray-700">
                          <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                          {feature}
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

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Why Choose Our Solutions?
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Our industry-focused approach ensures that you receive solutions
                  that are not only technically advanced but also commercially viable
                  and operationally effective.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-abb-gray-600">Deep understanding of industry processes, regulations, and best practices.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-2">Proven Technology</h3>
                    <p className="text-abb-gray-600">Field-proven ABB automation platforms with worldwide support infrastructure.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-2">Lifecycle Support</h3>
                    <p className="text-abb-gray-600">Comprehensive support from initial design through end-of-life system migration.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-abb-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Find ABB Products by Industry</h3>
              <div className="space-y-4">
                <a
                  href="https://www.grossautomation.com/products?s=ABB&manufacturers=ABBTOW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-abb-gray-700 font-medium">Search All ABB Products</span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://www.grossautomation.com/products?s=ABB+Freelance+DCS&manufacturers=ABBTOW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-abb-gray-700 font-medium">Freelance DCS Products</span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://www.grossautomation.com/products?s=ABB+800xA&manufacturers=ABBTOW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-abb-gray-700 font-medium">System 800xA Products</span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </a>
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
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-white/90">
              Contact our industry experts to discuss your specific automation
              requirements and discover how ABB automation can support your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Start Your Project
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

export default SolutionsPage;