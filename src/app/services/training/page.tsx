import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BookOpen, Users, Monitor, Award, Clock, FileText } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Training & Support Services - ABB Automation | Gross Automation',
  description: 'Professional ABB automation training and support services by Gross Automation. Operator training, maintenance training, and technical support with 35+ years experience.',
  keywords: 'ABB training, automation training, operator training, maintenance training, technical support, DCS training'
};

const TrainingPage = () => {
  const trainingPrograms = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Operator Training',
      description: 'Comprehensive training for system operators and production staff',
      features: ['System operation procedures', 'HMI navigation', 'Alarm management', 'Emergency procedures']
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Maintenance Training',
      description: 'Technical training for maintenance and engineering personnel',
      features: ['System diagnostics', 'Troubleshooting procedures', 'Preventive maintenance', 'Spare parts management']
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Engineering Training',
      description: 'Advanced training for control system engineers',
      features: ['System configuration', 'Programming techniques', 'Advanced diagnostics', 'System optimization']
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certification Programs',
      description: 'ABB-recognized certification training programs',
      features: ['Official ABB certification', 'Industry recognition', 'Continuing education', 'Professional development']
    }
  ];

  const trainingFormats = [
    {
      format: 'On-Site Training',
      description: 'Training delivered at your facility using your actual systems',
      benefits: ['Real system training', 'Customized content', 'Team building', 'Minimal travel costs'],
      duration: '1-5 days',
      participants: '5-15 people'
    },
    {
      format: 'Classroom Training',
      description: 'Traditional classroom-style training at our facility',
      benefits: ['Focused environment', 'Hands-on simulators', 'Networking opportunities', 'Comprehensive materials'],
      duration: '2-5 days',
      participants: '8-20 people'
    },
    {
      format: 'Virtual Training',
      description: 'Interactive online training sessions with expert instructors',
      benefits: ['Remote accessibility', 'Flexible scheduling', 'Cost effective', 'Recorded sessions'],
      duration: '4-8 hours',
      participants: '5-25 people'
    }
  ];

  const curriculumTopics = [
    {
      category: 'Basic Operations',
      topics: [
        'System Overview & Architecture',
        'HMI Navigation & Controls',
        'Process Monitoring',
        'Basic Troubleshooting'
      ]
    },
    {
      category: 'Advanced Operations',
      topics: [
        'Advanced Control Strategies',
        'Batch & Recipe Management',
        'Performance Optimization',
        'Safety System Operations'
      ]
    },
    {
      category: 'Maintenance',
      topics: [
        'System Diagnostics',
        'Hardware Maintenance',
        'Software Updates',
        'Backup & Recovery'
      ]
    },
    {
      category: 'Engineering',
      topics: [
        'System Configuration',
        'Programming & Logic',
        'Network Management',
        'System Integration'
      ]
    }
  ];

  const supportServices = [
    {
      service: 'Technical Support',
      description: 'Phone and email support during business hours',
      responseTime: 'Same day',
      coverage: 'Monday - Friday, 8:00 AM - 5:00 PM CST'
    },
    {
      service: 'Remote Diagnostics',
      description: 'Remote system analysis and troubleshooting',
      responseTime: '4 hours',
      coverage: 'Business hours with emergency support'
    },
    {
      service: 'On-Site Support',
      description: 'Field service and technical assistance',
      responseTime: '24-48 hours',
      coverage: 'Scheduled visits and emergency calls'
    },
    {
      service: 'Documentation Support',
      description: 'System documentation and procedure updates',
      responseTime: '1-2 weeks',
      coverage: 'As-needed basis with annual reviews'
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
                    Training & Support Services
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  ABB Automation Training
                  <span className="abb-text-gradient block">& Support Services</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Comprehensive training programs and ongoing support services to maximize
                  the performance of your ABB automation systems. Expert knowledge transfer
                  with 35+ years of proven experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Schedule Training
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
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Training Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">ABB Freelance DCS Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">System 800xA Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Safety System Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Custom Training Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Ongoing Technical Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Documentation & Procedures</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-abb-gray-50 rounded-lg">
                <div className="text-sm font-medium text-abb-gray-700 mb-2">Certified Instructors</div>
                <div className="text-lg font-bold text-primary">ABB Certified</div>
                <div className="text-sm text-abb-gray-600">All training delivered by certified professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Comprehensive Training Programs
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Tailored training programs designed to meet the specific needs of your team
              and maximize the value of your automation investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="abb-card">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{program.title}</h3>
                <p className="text-abb-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
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

      {/* Training Formats */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Flexible Training Formats
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Choose the training format that best fits your schedule, budget, and learning objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainingFormats.map((format, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{format.format}</h3>
                <p className="text-abb-gray-600 mb-6">{format.description}</p>

                <div className="space-y-4 mb-6">
                  {format.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-abb-green flex-shrink-0" />
                      <span className="text-abb-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-abb-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-medium text-abb-gray-500 uppercase tracking-wide">Duration</div>
                      <div className="text-sm font-semibold text-abb-gray-800">{format.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-abb-gray-500 uppercase tracking-wide">Participants</div>
                      <div className="text-sm font-semibold text-abb-gray-800">{format.participants}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Training Curriculum
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Structured curriculum covering all aspects of ABB automation systems
              from basic operations to advanced engineering topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumTopics.map((curriculum, index) => (
              <div key={index} className="abb-card">
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-4">{curriculum.category}</h3>
                <div className="space-y-3">
                  {curriculum.topics.map((topic, tIndex) => (
                    <div key={tIndex} className="flex items-start space-x-3">
                      <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-abb-gray-700 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Ongoing Support Services
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure optimal system performance
              and maximize your training investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((support, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-abb-gray-900 mb-4">{support.service}</h3>
                <p className="text-abb-gray-600 mb-6">{support.description}</p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-3 bg-abb-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-abb-gray-700">Response Time</span>
                    <span className="text-sm font-semibold text-primary">{support.responseTime}</span>
                  </div>
                  <div className="p-3 bg-abb-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-abb-gray-700 mb-1">Coverage</div>
                    <div className="text-sm text-abb-gray-600">{support.coverage}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Training Benefits
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Professional training delivers measurable benefits including improved
                  productivity, reduced downtime, and enhanced safety performance.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Improved Productivity</h4>
                  <p className="text-abb-gray-600 text-sm">Well-trained operators can increase productivity by 15-25%</p>
                </div>
                <div className="border-l-4 border-abb-blue pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Reduced Downtime</h4>
                  <p className="text-abb-gray-600 text-sm">Proper maintenance training reduces unplanned downtime by 30%</p>
                </div>
                <div className="border-l-4 border-abb-green pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Enhanced Safety</h4>
                  <p className="text-abb-gray-600 text-sm">Comprehensive safety training prevents incidents and ensures compliance</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-abb-gray-800">Cost Savings</h4>
                  <p className="text-abb-gray-600 text-sm">Training investment typically pays for itself within 6-12 months</p>
                </div>
              </div>
            </div>

            <div className="bg-abb-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Training Package Includes</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Customized training materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Hands-on practical exercises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">System-specific procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Digital reference materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Completion certificates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-abb-green" />
                  <span className="text-abb-gray-700">Post-training support</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-abb-gray-800">Training Support</span>
                </div>
                <p className="text-sm text-abb-gray-600">30 days of follow-up support included with all training programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default TrainingPage;