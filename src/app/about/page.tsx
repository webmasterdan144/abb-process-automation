import React from 'react';
import Link from 'next/link';
import { Users, Award, Target, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import GrossAutomationLogo from '@/components/GrossAutomationLogo';

export const metadata = {
  title: 'About Gross Automation - ABB Process Automation Experts',
  description: 'Learn about Gross Automation, your trusted partner for ABB process automation solutions. 35+ years of experience in system integration and engineering.',
  keywords: 'Gross Automation, ABB partner, process automation experts, system integration, industrial automation'
};

const AboutPage = () => {
  const stats = [
    { number: '35+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: 'High', label: 'System Availability' },
    { number: 'M-F', label: 'Business Hours Support' }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Our Mission',
      description: 'To provide customers with turnkey automation solutions including full engineering, design, and build capabilities from a single source.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Our certified engineers and technicians have decades of combined experience in ABB automation systems and industrial processes.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Focus',
      description: 'We maintain the highest standards in system design, implementation, and support to ensure reliable, long-term operation.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Proven Results',
      description: 'Over 35 years of successful project delivery across multiple industries with a track record of on-time, on-budget completion.'
    }
  ];

  const services = [
    'System Engineering & Design',
    'Project Management',
    'System Integration',
    'Panel Design & Build',
    'Field Installation & Commissioning',
    'Training & Documentation',
    'Ongoing Support & Maintenance',
    'System Upgrades & Migrations',
    'Digital Transformation Services'
  ];

  const certifications = [
    'ABB Authorized Distributor',
    'ISO 9001:2015 (as reported by Gross Automation)',
    'OSHA Safety Training (as reported by Gross Automation)'
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
                    About Gross Automation
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  Your Trusted ABB
                  <span className="abb-text-gradient block">Automation Partner</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  For over 35 years, Gross Automation has been providing comprehensive
                  ABB process automation solutions, specializing in engineering, system
                  integration, and lifecycle support services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  View Our Solutions
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="abb-card text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-abb-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Credibility Partner Logo */}
              <div className="abb-card">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                  <div className="text-center lg:text-left">
                    <div className="text-sm font-medium text-abb-gray-700 mb-2">Trusted Partnership</div>
                    <div className="text-xs text-abb-gray-500">Celebrating 35+ Years of Service</div>
                  </div>
                  <div className="flex-shrink-0">
                    <GrossAutomationLogo width={140} height={45} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              We are committed to delivering exceptional automation solutions that drive
              operational excellence and long-term value for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="abb-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{value.title}</h3>
                <p className="text-abb-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Our Story
                </h2>
                <p className="text-lg text-abb-gray-600 leading-relaxed">
                  Established in 1998, Gross Automation began with a simple mission: to provide
                  industrial customers with reliable, comprehensive automation solutions that
                  drive operational excellence.
                </p>
                <p className="text-lg text-abb-gray-600 leading-relaxed">
                  Today, we are recognized as a leading ABB system integrator, having successfully
                  completed over 500 projects across diverse industries including oil & gas,
                  chemical processing, power generation, food & beverage, and manufacturing.
                </p>
                <p className="text-lg text-abb-gray-600 leading-relaxed">
                  Our team of certified engineers and technicians brings decades of combined
                  experience to every project, ensuring that our customers receive solutions
                  that are not only technically excellent but also commercially viable.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Single Source Solution</h4>
                  <p className="text-abb-gray-600 text-sm">Complete project delivery from initial design through commissioning and ongoing support.</p>
                </div>
                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Industry Expertise</h4>
                  <p className="text-abb-gray-600 text-sm">Deep understanding of process requirements across multiple industrial sectors.</p>
                </div>
                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Long-term Partnership</h4>
                  <p className="text-abb-gray-600 text-sm">Ongoing support and maintenance to ensure optimal system performance throughout its lifecycle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Comprehensive Services
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  We offer complete lifecycle support for your automation systems,
                  from initial concept through ongoing maintenance and optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-abb-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-abb-green flex-shrink-0" />
                    <span className="text-abb-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Certifications & Partnerships
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Our certifications and industry partnerships ensure that you receive
                  the highest quality solutions and support.
                </p>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-abb-gray-50 rounded-lg">
                    <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-abb-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="abb-card">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-3 text-abb-gray-600">
                      <div><strong>Address:</strong> 3680 N. 126th St., Brookfield, WI 53005</div>
                      <div><strong>Phone:</strong> <a href="tel:+12622521600" className="text-primary hover:text-primary-dark transition-colors">+1 (262) 252-1600</a></div>
                      <div><strong>Email:</strong> sales@grossautomation.com</div>
                      <div><strong>Website:</strong> grossautomation.com</div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-center lg:text-right">
                    <div className="text-xs text-abb-gray-500 mb-3">Established 1998</div>
                    <GrossAutomationLogo width={120} height={40} />
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/90">
              Contact us today to discuss your automation requirements and discover
              how we can help you achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Contact Us Today
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

export default AboutPage;