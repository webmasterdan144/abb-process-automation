import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Layers, Zap, Network, Settings, Clock, Shield } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'System Integration Services - ABB Automation | Gross Automation',
  description: 'Expert ABB automation system integration services by Gross Automation. Seamless integration of DCS, SCADA, PLC, and industrial control systems with 35+ years experience.',
  keywords: 'system integration, ABB integration, DCS integration, SCADA integration, PLC integration, industrial automation integration'
};

const SystemIntegrationPage = () => {
  const integrationServices = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Multi-Platform Integration',
      description: 'Seamless integration of ABB systems with existing infrastructure',
      features: ['Legacy system migration', 'Multi-vendor compatibility', 'Protocol conversion', 'Data historians']
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Communication Networks',
      description: 'Industrial network design and implementation',
      features: ['Ethernet/IP networks', 'Foundation Fieldbus', 'HART communication', 'Wireless solutions']
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'System Configuration',
      description: 'Complete system setup and configuration',
      features: ['Controller programming', 'HMI configuration', 'Database setup', 'User management']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Implementation',
      description: 'Industrial cybersecurity and access control',
      features: ['Network segmentation', 'Firewall configuration', 'User authentication', 'Security monitoring']
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'System Assessment',
      description: 'Comprehensive evaluation of existing systems and infrastructure',
      activities: ['Current state analysis', 'Gap assessment', 'Risk evaluation', 'Integration planning']
    },
    {
      step: '2',
      title: 'Design & Planning',
      description: 'Detailed integration design and project planning',
      activities: ['Architecture design', 'Communication protocols', 'Migration strategy', 'Testing procedures']
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'System installation and configuration',
      activities: ['Hardware installation', 'Software configuration', 'Network setup', 'System testing']
    },
    {
      step: '4',
      title: 'Validation & Commissioning',
      description: 'Final testing and system commissioning',
      activities: ['Function testing', 'Performance validation', 'User training', 'Go-live support']
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Improved Efficiency',
      description: 'Streamlined operations through integrated automation systems',
      metric: 'Up to 25% improvement in operational efficiency'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Reduced Downtime',
      description: 'Minimized disruption during integration process',
      metric: 'Less than 4 hours planned downtime for most integrations'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Enhanced Connectivity',
      description: 'Seamless data flow between all system components',
      metric: '99.9% data integrity across integrated platforms'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Increased Security',
      description: 'Robust cybersecurity throughout integrated systems',
      metric: 'Zero security incidents in integrated systems'
    }
  ];

  const integrationTypes = [
    'DCS to SCADA Integration',
    'PLC to DCS Migration',
    'Legacy System Modernization',
    'Multi-Vendor System Integration',
    'Safety System Integration',
    'MES/ERP Connectivity',
    'Historian & Reporting Systems',
    'Mobile & Remote Access'
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
                    System Integration Services
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Seamless ABB System
                  <span className="abb-text-gradient block">Integration Services</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Expert integration of ABB automation systems with existing infrastructure.
                  Our proven methodology ensures minimal downtime and maximum operational
                  efficiency with 35+ years of integration experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Plan Your Integration
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
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Integration Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">ABB Freelance DCS Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">System 800xA Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Legacy System Migration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Multi-Vendor Compatibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Industrial Network Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Cybersecurity Implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Complete Integration Solutions
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              From simple device connections to complex multi-platform integrations,
              we deliver solutions that work seamlessly together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationServices.map((service, index) => (
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

      {/* Integration Process */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Our Integration Process
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              A proven methodology that minimizes risk and ensures successful integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-3">{step.title}</h3>
                <p className="text-abb-gray-600 text-sm mb-4">{step.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-abb-gray-500 uppercase tracking-wide">Key Activities</div>
                  {step.activities.map((activity, aIndex) => (
                    <div key={aIndex} className="text-xs text-abb-gray-600">• {activity}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Integration Benefits
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Proven results from our integration projects across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-abb-gray-600 mb-4">{benefit.description}</p>
                <div className="text-sm font-semibold text-primary">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Integration Types We Handle
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  From simple device integrations to complex enterprise-wide system
                  implementations, we have the expertise to handle any integration challenge.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrationTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-abb-green flex-shrink-0" />
                    <span className="text-abb-gray-700 font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Integration Guarantees</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Minimal Downtime</h4>
                  <p className="text-abb-gray-600 text-sm">Carefully planned integration with minimal disruption to operations</p>
                </div>
                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Data Integrity</h4>
                  <p className="text-abb-gray-600 text-sm">Guaranteed data consistency throughout the integration process</p>
                </div>
                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Performance Validation</h4>
                  <p className="text-abb-gray-600 text-sm">Comprehensive testing to ensure optimal system performance</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Ongoing Support</h4>
                  <p className="text-abb-gray-600 text-sm">Post-integration support during business hours</p>
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

export default SystemIntegrationPage;