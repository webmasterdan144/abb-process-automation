import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Cog,
  Users,
  Shield,
  BookOpen,
  Headphones,
  Cloud,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Cog className="w-6 h-6" />,
      title: "System Engineering",
      description: "Complete system design and engineering services from concept to commissioning.",
      highlights: ["Process Design", "System Architecture", "Safety Integration"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "System Integration",
      description: "Seamless integration of ABB automation systems with existing infrastructure.",
      highlights: ["PLC Integration", "SCADA Systems", "Network Configuration"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Commissioning",
      description: "Professional commissioning services ensuring optimal system performance.",
      highlights: ["Factory Testing", "Site Commissioning", "Performance Validation"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing technical support.",
      highlights: ["Operator Training", "Technical Documentation", "Remote Support"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maintenance",
      description: "Preventive maintenance and lifecycle support for maximum uptime.",
      highlights: ["Preventive Maintenance", "Spare Parts", "Upgrades"]
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Technical Support",
      description: "Professional technical support for critical operations.",
      highlights: ["Expert Assistance", "Remote Diagnostics", "On-site Service"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "IIoT connectivity, data analytics, and digital twin solutions for operational optimization.",
      highlights: ["Genix IIoT Platform", "Asset Performance", "Cybersecurity"]
    }
  ];

  return (
    <section className="py-20 bg-abb-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Our Services
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                Complete Lifecycle
                <span className="abb-text-gradient block">Support Services</span>
              </h2>

              <p className="text-lg text-abb-gray-600 leading-relaxed">
                From initial system design to ongoing maintenance, we provide comprehensive
                services to ensure your ABB automation systems deliver maximum value
                throughout their operational life.
              </p>
            </div>

            {/* Key Value Props */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-abb-green mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-abb-gray-800">Certified ABB Partners</div>
                  <div className="text-abb-gray-600 text-sm">Official ABB system integrators with extensive experience</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-abb-green mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-abb-gray-800">35+ Years Experience</div>
                  <div className="text-abb-gray-600 text-sm">Over three decades of expertise in process automation solutions by Gross Automation</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-abb-green mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-abb-gray-800">Turnkey Solutions</div>
                  <div className="text-abb-gray-600 text-sm">Complete project delivery from design to commissioning</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <a
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
              >
                Get Consultation
              </a>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-2">{service.title}</h3>
                    <p className="text-abb-gray-600 text-sm mb-3">{service.description}</p>

                    <ul className="space-y-1">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-xs text-abb-gray-500">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;