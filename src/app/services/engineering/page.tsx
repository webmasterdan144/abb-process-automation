import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Lightbulb, FileText, Cpu, Network, Shield } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Get ABB Engineering Services | DCS & SCADA Design | Gross Automation',
  description: 'Get ABB automation engineering services from Gross Automation. Expert DCS and SCADA design with 35+ years experience in industrial control systems.',
  keywords: 'ABB engineering services, DCS design, SCADA engineering, control system design'
};

const SystemEngineeringPage = () => {
  const engineeringServices = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'System Design & Architecture',
      description: 'Complete automation system design from concept to detailed engineering',
      features: ['Process flow analysis', 'Control philosophy development', 'System architecture design', 'Hardware selection']
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Engineering Documentation',
      description: 'Comprehensive documentation packages for regulatory compliance',
      features: ['P&ID development', 'Functional specifications', 'Installation drawings', 'Operations manuals']
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Control System Engineering',
      description: 'Detailed control system design and configuration',
      features: ['Controller programming', 'HMI development', 'Alarm management', 'Batch recipe development']
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Network & Communications',
      description: 'Industrial network design and communication protocols',
      features: ['Network topology design', 'Protocol selection', 'Cybersecurity implementation', 'Remote access solutions']
    }
  ];

  const projectPhases = [
    {
      phase: '1',
      title: 'Requirements Analysis',
      description: 'Comprehensive analysis of process requirements and operational objectives',
      deliverables: ['Functional requirements document', 'Process analysis report', 'Technology recommendations']
    },
    {
      phase: '2',
      title: 'System Design',
      description: 'Detailed system architecture and component selection',
      deliverables: ['System architecture drawings', 'Hardware specifications', 'Software requirements']
    },
    {
      phase: '3',
      title: 'Detailed Engineering',
      description: 'Complete engineering package development',
      deliverables: ['Control system configuration', 'HMI development', 'Documentation package']
    },
    {
      phase: '4',
      title: 'Testing & Validation',
      description: 'Factory acceptance testing and system validation',
      deliverables: ['FAT procedures', 'Test reports', 'System validation documentation']
    }
  ];

  const industries = [
    'Oil & Gas Processing',
    'Chemical & Petrochemical',
    'Power Generation',
    'Water & Wastewater',
    'Food & Beverage',
    'Pharmaceutical',
    'Pulp & Paper',
    'Manufacturing'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    System Engineering Services
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Expert ABB System
                  <span className="abb-text-gradient block">Engineering Services</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Comprehensive automation system engineering services from concept to
                  commissioning. Our expert team delivers reliable, scalable ABB automation
                  solutions with 35+ years of proven experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Start Your Project
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
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Engineering Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Safety Instrumented Systems (SIS)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Distributed Control Systems (DCS)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">SCADA & HMI Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Advanced Process Control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Batch & Recipe Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Industrial Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Comprehensive Engineering Services
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              From initial concept through detailed design, we provide complete engineering
              services for ABB automation systems across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringServices.map((service, index) => (
              <div key={index} className="abb-card">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{service.title}</h3>
                <p className="text-abb-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-abb-green flex-shrink-0" />
                      <span className="text-abb-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Our Engineering Process
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring project success from concept to commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-3">{phase.title}</h3>
                <p className="text-abb-gray-600 text-sm mb-4">{phase.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-abb-gray-500 uppercase tracking-wide">Deliverables</div>
                  {phase.deliverables.map((deliverable, dIndex) => (
                    <div key={dIndex} className="text-xs text-abb-gray-600">• {deliverable}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Industries We Serve
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Our engineering team has deep experience across diverse industries,
                  understanding the unique requirements and challenges of each sector.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-abb-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-abb-green flex-shrink-0" />
                    <span className="text-abb-gray-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-abb-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Why Choose Our Engineering Services?</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Expert Team</h4>
                  <p className="text-abb-gray-600 text-sm">Certified ABB engineers with 35+ years combined experience</p>
                </div>
                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Proven Methodology</h4>
                  <p className="text-abb-gray-600 text-sm">Structured approach ensuring on-time, on-budget delivery</p>
                </div>
                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Complete Lifecycle</h4>
                  <p className="text-abb-gray-600 text-sm">From concept through commissioning and ongoing support</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Industry Compliance</h4>
                  <p className="text-abb-gray-600 text-sm">Meeting all regulatory and safety standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default SystemEngineeringPage;