import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Network, Settings, Gauge, Activity, Cloud } from 'lucide-react';

const ProductsShowcase = () => {
  // Color mapping for Tailwind classes (dynamic classes don't work with Tailwind)
  const colorClasses = {
    primary: {
      bg: 'bg-primary/10',
      text: 'text-primary'
    },
    'abb-blue': {
      bg: 'bg-abb-blue/10',
      text: 'text-abb-blue'
    },
    'abb-green': {
      bg: 'bg-abb-green/10',
      text: 'text-abb-green'
    },
    secondary: {
      bg: 'bg-secondary/10',
      text: 'text-secondary'
    },
    'abb-orange': {
      bg: 'bg-orange-500/10',
      text: 'text-orange-500'
    },
    'purple': {
      bg: 'bg-purple-500/10',
      text: 'text-purple-500'
    },
    'cyan': {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-500'
    }
  } as const;

  const products = [
    {
      icon: <Network className="w-8 h-8" />,
      name: "ABB Freelance DCS",
      description: "Distributed control system combining DCS functionality with PLC advantages for optimal process control.",
      features: ["AC 700F/800F Controllers", "Foundation Fieldbus", "Redundant Architecture", "Control Builder F"],
      link: "/products/freelance",
      color: "primary" as const
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      name: "ABB Ability System 800xA",
      description: "Comprehensive automation platform integrating process, electrical, safety, and telecommunications.",
      features: ["Extended Automation", "System Platform", "Engineering Tools", "Information Management"],
      link: "/products/800xa",
      color: "abb-blue" as const
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      name: "ABB Ability Symphony Plus",
      description: "Total plant automation platform for power generation and water industries with backward compatibility from legacy ABB systems.",
      features: ["SDe Series Hardware", "HTML5 Web Tools", "OPC UA Connectivity", "Legacy Migration"],
      link: "/products/symphony-plus",
      color: "abb-orange" as const
    },
    {
      icon: <Settings className="w-8 h-8" />,
      name: "Compact Product Suite",
      description: "Engineering platform for AC 800M controllers covering process control, safety, HMI, and field interfaces.",
      features: ["AC 800M Controllers", "Safety Controllers", "Process Recorders", "Field Interfaces"],
      link: "/products/compact-control",
      color: "abb-green" as const
    },
    {
      icon: <Settings className="w-8 h-8" />,
      name: "I/O Systems",
      description: "Comprehensive range of input/output modules for seamless field device integration.",
      features: ["S800 I/O", "S900 I/O", "Fieldbus Integration", "Diagnostic Features"],
      link: "/products/io-systems",
      color: "secondary" as const
    },
    {
      icon: <Activity className="w-8 h-8" />,
      name: "Measurement & Analytics",
      description: "Flow meters, pressure transmitters, temperature sensors, level measurement, and analytical instruments.",
      features: ["Flow Measurement", "Pressure & Temperature", "Level & Analytical", "Valve Positioners"],
      link: "/products/measurement-analytics",
      color: "purple" as const
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "Digital Solutions",
      description: "ABB Ability Genix IIoT platform, digital twin, asset performance management, and cybersecurity solutions.",
      features: ["Genix IoT & AI", "Digital Twin Hub", "Cybersecurity (IEC 62443)", "Mobile Operations"],
      link: "/products/digital-solutions",
      color: "cyan" as const
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
            Complete ABB Automation Portfolio
            <span className="abb-text-gradient block text-2xl lg:text-3xl">by Gross Automation</span>
          </h2>
          <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
            From controllers to complete system solutions, Gross Automation provides everything you need
            for successful process automation implementation with decades of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="abb-card group hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg ${colorClasses[product.color].bg} flex items-center justify-center ${colorClasses[product.color].text} group-hover:scale-110 transition-transform`}>
                  {product.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-abb-gray-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-abb-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-abb-gray-500">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={product.link}
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;