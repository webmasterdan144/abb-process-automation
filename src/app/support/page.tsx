import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Phone, Mail, Headphones, Wrench, BookOpen, Users, Shield, Download, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'ABB Automation Support Services | Gross Automation',
  description: 'Professional ABB automation support services including maintenance, troubleshooting, training, and lifecycle management during business hours. Expert support for all ABB systems.',
  keywords: 'ABB support, automation maintenance, troubleshooting, training, lifecycle services, technical support'
};

const SupportPage = () => {
  const supportServices = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Technical Support Services',
      description: 'Professional technical support for system issues and maintenance during business hours.',
      features: ['Expert Technical Assistance', 'Remote Diagnostics', 'On-site Support', 'Spare Parts'],
      responseTime: 'Same Day'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Preventive Maintenance',
      description: 'Scheduled maintenance programs to ensure optimal system performance and reliability.',
      features: ['System Health Checks', 'Performance Analysis', 'Predictive Maintenance', 'Documentation'],
      responseTime: 'Scheduled'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Training & Documentation',
      description: 'Comprehensive training programs and documentation for operators and maintenance staff.',
      features: ['Operator Training', 'Maintenance Training', 'System Documentation', 'Best Practices'],
      responseTime: 'On-demand'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cybersecurity Services',
      description: 'Industrial cybersecurity assessments, updates, and ongoing monitoring services.',
      features: ['Security Assessments', 'Patch Management', 'Monitoring', 'Incident Response'],
      responseTime: 'Next Business Day'
    }
  ];

  const supportLevels = [
    {
      level: 'Basic Support',
      price: 'Included',
      description: 'Standard support included with all systems',
      features: [
        'Business hours phone support',
        'Email technical support',
        'Online documentation access',
        'Software updates',
        'Basic troubleshooting'
      ]
    },
    {
      level: 'Professional Support',
      price: 'Contact Us',
      description: 'Enhanced support for mission-critical systems',
      features: [
        'Extended hours phone support',
        'Priority response times',
        'Remote diagnostic access',
        'Quarterly health checks',
        'Performance optimization'
      ]
    },
    {
      level: 'Professional Plus Support',
      price: 'Contact Us',
      description: 'Comprehensive support with guaranteed response',
      features: [
        'Priority technical support',
        'Dedicated support engineer',
        'On-site support included',
        'Predictive maintenance',
        'Custom training programs'
      ]
    }
  ];

  const resources = [
    {
      icon: <Download className="w-5 h-5" />,
      title: 'Software Downloads',
      description: 'Latest software versions, patches, and updates'
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Documentation Library',
      description: 'User manuals, installation guides, and technical notes'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Training Catalog',
      description: 'Available training courses and certification programs'
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: 'Spare Parts',
      description: 'Genuine ABB spare parts and component catalog'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What support services does Gross Automation provide for ABB systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gross Automation provides comprehensive support services including professional technical support, preventive maintenance, training programs, cybersecurity services, system upgrades, and lifecycle management for all ABB automation systems during business hours."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can Gross Automation respond to technical issues?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For technical support, Gross Automation provides same-day response for critical system issues during business hours. We offer professional support with remote diagnostics and on-site support capabilities."
                }
              },
              {
                "@type": "Question",
                "name": "Does Gross Automation provide training for ABB automation systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide comprehensive training programs for operators and maintenance staff covering ABB Freelance DCS, System 800xA, Compact Control Builder, and other ABB automation systems. Training can be conducted on-site or at our Wisconsin facility."
                }
              },
              {
                "@type": "Question",
                "name": "What preventive maintenance services are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our preventive maintenance services include system health checks, performance analysis, predictive maintenance, documentation updates, and scheduled maintenance programs to ensure optimal system performance and reliability."
                }
              },
              {
                "@type": "Question",
                "name": "Does Gross Automation provide cybersecurity services for industrial systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide industrial cybersecurity services including security assessments, patch management, monitoring, and incident response specifically for ABB automation systems and industrial control networks."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get support for my ABB automation system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact Gross Automation support by calling +1 (262) 252-1600, emailing engineering@grossautomation.com, or through our online support portal. Support is available Monday - Friday, 8:00 AM - 5:00 PM CST."
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
                    Support Services
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Expert ABB Automation
                  <span className="abb-text-gradient block">Support & Maintenance</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Maximize your system uptime and performance with our comprehensive
                  support services, from expert technical assistance to planned maintenance
                  and optimization programs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Get Support Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <a
                  href="tel:+12622521600"
                  className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 (262) 252-1600
                </a>
              </div>
            </div>

            {/* Emergency Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-abb-gray-900">Technical Support</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="text-lg font-semibold text-primary mb-2">Support Contact</div>
                  <a href="tel:+12622521600" className="text-2xl font-bold text-abb-gray-900 hover:text-primary transition-colors">+1 (262) 252-1600</a>
                  <div className="text-sm text-abb-gray-600 mt-1">Monday - Friday, 8:00 AM - 5:00 PM CST</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-abb-green" />
                    <span className="text-abb-gray-700">Expert technical assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-abb-green" />
                    <span className="text-abb-gray-700">Remote diagnostic capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-abb-green" />
                    <span className="text-abb-gray-700">On-site support available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Comprehensive Support Services
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Our support services are designed to keep your automation systems
              running at peak performance throughout their entire lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {service.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-abb-gray-900">{service.title}</h3>
                    <p className="text-abb-gray-600 text-sm leading-relaxed">{service.description}</p>

                    <div>
                      <h4 className="font-semibold text-abb-gray-800 mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-abb-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-abb-gray-200">
                      <div className="text-xs text-abb-gray-500">Response Time:</div>
                      <div className="text-sm font-semibold text-primary">{service.responseTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Support Service Levels
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Choose the support level that best fits your operational requirements
              and budget. All plans can be customized to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className={`abb-card ${index === 1 ? 'border-2 border-primary' : ''}`}>
                <div className="space-y-6">
                  {index === 1 && (
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium text-center">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-abb-gray-900 mb-2">{level.level}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{level.price}</div>
                    <p className="text-abb-gray-600">{level.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-abb-gray-700">
                        <CheckCircle className="w-5 h-5 text-abb-green mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                    className={`block text-center py-3 px-6 rounded-md font-medium transition-colors ${
                      index === 1
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'border-2 border-abb-gray-300 text-abb-gray-700 hover:border-primary hover:text-primary'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Multiple Ways to Get Support
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  We offer multiple channels to ensure you get the help you need,
                  when you need it, through your preferred communication method.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-abb-gray-50 rounded-lg">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-1">Phone Support</h3>
                    <p className="text-abb-gray-600 text-sm mb-2">Direct access to our technical experts</p>
                    <a href="tel:+12622521600" className="text-primary font-semibold hover:text-primary-dark transition-colors">+1 (262) 252-1600</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-abb-gray-50 rounded-lg">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-1">Email Support</h3>
                    <p className="text-abb-gray-600 text-sm mb-2">Detailed technical inquiries and documentation</p>
                    <div className="text-primary font-semibold">engineering@grossautomation.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-abb-gray-50 rounded-lg">
                  <Headphones className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-1">Remote Support</h3>
                    <p className="text-abb-gray-600 text-sm mb-2">Secure remote diagnostic and troubleshooting</p>
                    <div className="text-primary font-semibold">Business Hours Available</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-abb-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 mb-1">On-site Support</h3>
                    <p className="text-abb-gray-600 text-sm mb-2">Field service engineers for complex issues</p>
                    <div className="text-primary font-semibold">Scheduled Appointments</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Self-Service Resources
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Access our comprehensive library of resources for immediate
                  assistance and system optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="abb-card text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-abb-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-abb-gray-600 text-sm">{resource.description}</p>
                  </div>
                ))}
              </div>

              <div className="abb-card">
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">Support Hours</h3>
                <div className="space-y-3 text-abb-gray-600">
                  <div className="flex justify-between">
                    <span>Technical Support:</span>
                    <span className="font-semibold text-primary">Mon-Fri 8AM-5PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone Support:</span>
                    <span className="font-semibold">Mon-Fri 8AM-6PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Support:</span>
                    <span className="font-semibold">Mon-Fri 8AM-5PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>On-site Service:</span>
                    <span className="font-semibold">By Appointment</span>
                  </div>
                </div>
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
              Need Support Right Now?
            </h2>
            <p className="text-xl text-white/90">
              Our support team is standing by to help you resolve any issues
              and get your systems back to optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12622521600"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Support Line
              </a>
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors font-medium"
              >
                Submit Support Request
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;