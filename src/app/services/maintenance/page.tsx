import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Wrench, Clock, Shield, BarChart3, AlertTriangle, Calendar } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Get ABB Maintenance Services | DCS & SCADA Support | Gross Automation',
  description: 'Get ABB maintenance services from Gross Automation. Preventive maintenance and troubleshooting for DCS and SCADA systems with 35+ years experience.',
  keywords: 'ABB maintenance, DCS maintenance, SCADA maintenance, automation support'
};

const MaintenancePage = () => {
  const maintenanceServices = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Preventive Maintenance',
      description: 'Scheduled maintenance programs to prevent failures and optimize performance',
      features: ['Regular system health checks', 'Component replacement scheduling', 'Performance trending', 'Maintenance documentation']
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Emergency Support',
      description: 'Rapid response for critical system issues and failures',
      features: ['Priority response during business hours', 'Remote diagnostics', 'Emergency parts supply', 'Expert troubleshooting']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Continuous improvement of system performance and efficiency',
      features: ['Performance analysis', 'System tuning', 'Bottleneck identification', 'Efficiency improvements']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Lifecycle Management',
      description: 'Long-term support throughout the system lifecycle',
      features: ['Technology roadmaps', 'Upgrade planning', 'End-of-life management', 'Migration strategies']
    }
  ];

  const maintenanceTypes = [
    {
      type: 'Basic Maintenance',
      description: 'Standard maintenance services included with support contracts',
      frequency: 'Quarterly',
      includes: [
        'System health monitoring',
        'Software updates',
        'Basic performance checks',
        'Documentation updates'
      ]
    },
    {
      type: 'Comprehensive Maintenance',
      description: 'Complete maintenance package for critical systems',
      frequency: 'Monthly',
      includes: [
        'Detailed system analysis',
        'Predictive maintenance',
        'Performance optimization',
        'Spare parts management'
      ]
    },
    {
      type: 'On-Demand Maintenance',
      description: 'Flexible maintenance services as needed',
      frequency: 'As required',
      includes: [
        'Emergency response',
        'Specific repairs',
        'System modifications',
        'Custom maintenance tasks'
      ]
    }
  ];

  const maintenanceChecklist = [
    {
      category: 'Hardware Maintenance',
      items: [
        'Power supply voltage checks',
        'Temperature monitoring',
        'Connection integrity',
        'Cabinet ventilation',
        'Battery backup systems',
        'Communication cables'
      ]
    },
    {
      category: 'Software Maintenance',
      items: [
        'Operating system updates',
        'Application software patches',
        'Database optimization',
        'Security updates',
        'Backup verification',
        'License management'
      ]
    },
    {
      category: 'Performance Monitoring',
      items: [
        'Response time analysis',
        'Memory usage monitoring',
        'Network performance',
        'Storage capacity',
        'Processing load',
        'System throughput'
      ]
    },
    {
      category: 'Safety Systems',
      items: [
        'Safety function tests',
        'Alarm system verification',
        'Emergency shutdown tests',
        'Interlock verification',
        'Fire suppression systems',
        'Safety compliance checks'
      ]
    }
  ];

  const maintenanceSchedule = [
    {
      interval: 'Daily',
      tasks: ['System status monitoring', 'Alarm review', 'Backup verification'],
      automated: true
    },
    {
      interval: 'Weekly',
      tasks: ['Performance trend analysis', 'Error log review', 'Communication checks'],
      automated: false
    },
    {
      interval: 'Monthly',
      tasks: ['Detailed system inspection', 'Software updates', 'Battery tests'],
      automated: false
    },
    {
      interval: 'Quarterly',
      tasks: ['Comprehensive health check', 'Calibration verification', 'Documentation update'],
      automated: false
    },
    {
      interval: 'Annually',
      tasks: ['Complete system validation', 'Safety system testing', 'Lifecycle assessment'],
      automated: false
    }
  ];

  const benefits = [
    {
      metric: '99.5%',
      title: 'System Uptime',
      description: 'Average uptime achieved with preventive maintenance programs'
    },
    {
      metric: '40%',
      title: 'Reduced Failures',
      description: 'Decrease in unplanned failures with regular maintenance'
    },
    {
      metric: '25%',
      title: 'Cost Savings',
      description: 'Reduction in total maintenance costs over system lifecycle'
    },
    {
      metric: '2 Hours',
      title: 'Response Time',
      description: 'Average response time for emergency support during business hours'
    }
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
                    Maintenance Services
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Professional ABB
                  <span className="abb-text-gradient block">Maintenance Services</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Comprehensive maintenance services to keep your ABB automation systems
                  running at peak performance. Preventive maintenance, emergency support,
                  and lifecycle management with 35+ years of proven expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Schedule Maintenance
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
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Maintenance Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">ABB Freelance DCS Maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">System 800xA Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Preventive Maintenance Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Emergency Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Performance Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Spare Parts Management</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-abb-gray-50 rounded-lg">
                <div className="text-sm font-medium text-abb-gray-700 mb-2">Support Hours</div>
                <div className="text-lg font-bold text-primary">Business Hours</div>
                <div className="text-sm text-abb-gray-600">Monday - Friday, 8:00 AM - 5:00 PM CST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Complete Maintenance Solutions
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              From preventive maintenance to emergency support, we provide comprehensive
              services to keep your automation systems operating at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
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

      {/* Maintenance Types */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Maintenance Programs
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Flexible maintenance programs tailored to your operational requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {maintenanceTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{type.type}</h3>
                <p className="text-abb-gray-600 mb-4">{type.description}</p>
                <div className="text-sm font-medium text-primary mb-6">Frequency: {type.frequency}</div>

                <div className="space-y-3">
                  <div className="text-sm font-medium text-abb-gray-700">Includes:</div>
                  {type.includes.map((item, iIndex) => (
                    <div key={iIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-abb-green flex-shrink-0" />
                      <span className="text-abb-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Checklist */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Comprehensive Maintenance Checklist
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures all critical system components are properly maintained.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceChecklist.map((category, index) => (
              <div key={index} className="abb-card">
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, iIndex) => (
                    <div key={iIndex} className="flex items-start space-x-3">
                      <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-abb-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Maintenance Schedule
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Structured maintenance intervals ensuring optimal system performance and reliability.
            </p>
          </div>

          <div className="space-y-6">
            {maintenanceSchedule.map((schedule, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-abb-gray-900">{schedule.interval}</h3>
                        <div className="text-sm text-abb-gray-600">
                          {schedule.automated ? 'Automated' : 'Manual'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {schedule.tasks.map((task, tIndex) => (
                        <div key={tIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-abb-green flex-shrink-0" />
                          <span className="text-abb-gray-700 text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              Maintenance Benefits
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Proven results from our maintenance programs across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-abb-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Maintenance Support
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Our maintenance services are backed by expert technical support
                  and comprehensive spare parts management during business hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Expert Technicians</h4>
                  <p className="text-abb-gray-600 text-sm">Certified ABB technicians with decades of experience</p>
                </div>
                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Genuine Parts</h4>
                  <p className="text-abb-gray-600 text-sm">Access to genuine ABB spare parts and components</p>
                </div>
                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Documentation</h4>
                  <p className="text-abb-gray-600 text-sm">Complete maintenance records and trending reports</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Business Hours Support</h4>
                  <p className="text-abb-gray-600 text-sm">Monday - Friday, 8:00 AM - 5:00 PM CST support coverage</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Maintenance Package Includes</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Scheduled maintenance visits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Emergency support response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Performance monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Software updates & patches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Spare parts management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Detailed maintenance reports</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-abb-gray-800">Emergency Contact</span>
                </div>
                <p className="text-sm text-abb-gray-600">Priority response during business hours for critical issues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default MaintenancePage;