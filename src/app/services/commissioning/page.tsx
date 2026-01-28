import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Play, FileCheck, Users, Clock, Shield, Zap } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Get ABB Commissioning Services | DCS Startup & Testing | Gross Automation',
  description: 'Get ABB commissioning services from Gross Automation. Expert DCS and SCADA startup, testing, and validation with 35+ years experience.',
  keywords: 'ABB commissioning, DCS commissioning, system startup, control system testing'
};

const CommissioningPage = () => {
  const commissioningServices = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Pre-Commissioning Activities',
      description: 'Comprehensive preparation and documentation review',
      features: ['Design verification', 'Documentation review', 'Equipment inspection', 'Safety assessments']
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: 'System Startup',
      description: 'Systematic startup and initial testing procedures',
      features: ['Power-up sequences', 'Communication testing', 'Basic functionality checks', 'Safety system verification']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Testing',
      description: 'Comprehensive testing of system performance',
      features: ['Functional testing', 'Performance validation', 'Load testing', 'Stress testing']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Operator Training',
      description: 'Training and knowledge transfer to operations team',
      features: ['System operation training', 'Troubleshooting procedures', 'Maintenance training', 'Documentation handover']
    }
  ];

  const commissioningPhases = [
    {
      phase: '1',
      title: 'Pre-Commissioning',
      description: 'Preparation and verification before system startup',
      duration: '1-2 weeks',
      activities: [
        'Design document review',
        'Installation verification',
        'Safety system checks',
        'Pre-commissioning testing'
      ]
    },
    {
      phase: '2',
      title: 'Cold Commissioning',
      description: 'System testing without process materials',
      duration: '2-3 weeks',
      activities: [
        'Power and communication testing',
        'Control logic verification',
        'HMI functionality testing',
        'Alarm and interlock testing'
      ]
    },
    {
      phase: '3',
      title: 'Hot Commissioning',
      description: 'Testing with actual process conditions',
      duration: '1-2 weeks',
      activities: [
        'Process startup support',
        'Control tuning',
        'Performance optimization',
        'Final acceptance testing'
      ]
    },
    {
      phase: '4',
      title: 'Performance Validation',
      description: 'Final validation and documentation',
      duration: '1 week',
      activities: [
        'Performance validation',
        'Documentation completion',
        'Training delivery',
        'Project closeout'
      ]
    }
  ];

  const testingTypes = [
    {
      type: 'Factory Acceptance Testing (FAT)',
      description: 'Pre-delivery testing at manufacturing facility',
      benefits: ['Early issue identification', 'Reduced site commissioning time', 'Quality assurance']
    },
    {
      type: 'Site Acceptance Testing (SAT)',
      description: 'On-site testing and validation',
      benefits: ['Real environment testing', 'Integration verification', 'Performance validation']
    },
    {
      type: 'Integrated System Testing',
      description: 'End-to-end system functionality testing',
      benefits: ['Complete system validation', 'Process verification', 'Operational readiness']
    }
  ];

  const safetyStandards = [
    'IEC 61511 (SIS)',
    'IEC 61508 (Functional Safety)',
    'NFPA 85 (Boiler/Combustion)',
    'API 14C (Offshore Safety)',
    'ISA-84 (Safety Instrumented Systems)',
    'OSHA Process Safety Management'
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
                    Commissioning Services
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Professional ABB System
                  <span className="abb-text-gradient block">Commissioning Services</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Comprehensive commissioning services ensuring your ABB automation systems
                  start up safely, operate efficiently, and meet all performance requirements.
                  35+ years of proven commissioning expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Schedule Commissioning
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
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Commissioning Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">ABB Freelance DCS Commissioning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">System 800xA Startup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Safety System Validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Performance Testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Operator Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Regulatory Compliance</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-abb-gray-50 rounded-lg">
                <div className="text-sm font-medium text-abb-gray-700 mb-2">Typical Project Timeline</div>
                <div className="text-lg font-bold text-primary">4-8 weeks</div>
                <div className="text-sm text-abb-gray-600">From pre-commissioning to final validation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioning Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Complete Commissioning Solutions
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              From initial startup through final acceptance, we ensure your automation
              systems operate safely and efficiently from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commissioningServices.map((service, index) => (
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

      {/* Commissioning Phases */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Commissioning Process
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring safe, efficient, and successful system startup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commissioningPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-2">{phase.title}</h3>
                <p className="text-abb-gray-600 text-sm mb-3">{phase.description}</p>
                <div className="text-xs font-medium text-primary mb-4">Duration: {phase.duration}</div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-abb-gray-500 uppercase tracking-wide">Key Activities</div>
                  {phase.activities.map((activity, aIndex) => (
                    <div key={aIndex} className="text-xs text-abb-gray-600">• {activity}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Testing & Validation
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Comprehensive testing protocols ensuring system reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testingTypes.map((test, index) => (
              <div key={index} className="abb-card text-center">
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{test.type}</h3>
                <p className="text-abb-gray-600 mb-6">{test.description}</p>
                <div className="space-y-3">
                  {test.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center space-x-3 justify-center">
                      <CheckCircle className="w-4 h-4 text-abb-green flex-shrink-0" />
                      <span className="text-abb-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Safety & Compliance
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Our commissioning processes adhere to industry safety standards
                  and regulatory requirements, ensuring compliant and safe operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safetyStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Shield className="w-5 h-5 text-abb-green flex-shrink-0" />
                    <span className="text-abb-gray-700 font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Commissioning Benefits</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Faster Startup</h4>
                  <p className="text-abb-gray-600 text-sm">Systematic approach reduces commissioning time by 30-40%</p>
                </div>
                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Reduced Risk</h4>
                  <p className="text-abb-gray-600 text-sm">Comprehensive testing minimizes operational risks</p>
                </div>
                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Optimal Performance</h4>
                  <p className="text-abb-gray-600 text-sm">Fine-tuning ensures maximum system efficiency</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Knowledge Transfer</h4>
                  <p className="text-abb-gray-600 text-sm">Comprehensive training for operations staff</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-abb-gray-800">Commissioning Support</span>
                </div>
                <p className="text-sm text-abb-gray-600">24/7 support available during critical commissioning phases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default CommissioningPage;