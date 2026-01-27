import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle, Award, Clock, Users } from 'lucide-react';

export const metadata = {
  title: 'ABB Process Automation Wisconsin | Gross Automation Brookfield WI | Local DCS Experts',
  description: 'Leading ABB process automation solutions in Wisconsin. Gross Automation based in Brookfield WI serves Milwaukee, Madison, Green Bay with Freelance DCS, System 800xA, Symphony Plus, Measurement & Analytics, digital solutions implementation. 25+ years local experience.',
  keywords: 'ABB automation Wisconsin, process automation Wisconsin, DCS Wisconsin, Freelance DCS Wisconsin, System 800xA Wisconsin, ABB Brookfield WI, automation Milwaukee, automation Madison, industrial automation Wisconsin, SCADA Wisconsin, PLC Wisconsin, Gross Automation Wisconsin',
  openGraph: {
    title: 'ABB Process Automation Wisconsin | Gross Automation Brookfield WI',
    description: 'Leading ABB automation solutions in Wisconsin. Local expertise in Brookfield serving Milwaukee, Madison, Green Bay. 25+ years experience.',
    url: 'https://www.freelance800fsales.com/wisconsin-abb-automation',
  },
  other: {
    'geo.region': 'US-WI',
    'geo.placename': 'Wisconsin',
    'geo.position': '44.5000;-89.5000',
    'ICBM': '44.5000, -89.5000',
  },
};

const WisconsinABBAutomationPage = () => {
  const wisconsinCities = [
    { name: 'Milwaukee', industries: ['Manufacturing', 'Brewing', 'Food Processing'] },
    { name: 'Madison', industries: ['Biotechnology', 'Research', 'Government'] },
    { name: 'Green Bay', industries: ['Paper & Pulp', 'Food Processing', 'Manufacturing'] },
    { name: 'Appleton', industries: ['Paper Industry', 'Manufacturing', 'Healthcare'] },
    { name: 'Kenosha', industries: ['Automotive', 'Manufacturing', 'Logistics'] },
    { name: 'Racine', industries: ['Manufacturing', 'Industrial Equipment', 'Agriculture'] },
  ];

  const localProjects = [
    {
      location: 'Milwaukee Area',
      industry: 'Chemical Processing',
      system: 'ABB Freelance DCS',
      description: 'Complete DCS implementation for chemical processing facility'
    },
    {
      location: 'Madison Region',
      industry: 'Pharmaceutical',
      system: 'ABB System 800xA',
      description: 'Integrated automation platform for pharmaceutical manufacturing'
    },
    {
      location: 'Green Bay',
      industry: 'Paper & Pulp',
      system: 'ABB Compact Control',
      description: 'Process control upgrade for paper manufacturing plant'
    },
  ];

  const wisconsinServices = [
    'Local Wisconsin-based engineering team',
    'On-site commissioning and startup services',
    'Expert technical assistance throughout Wisconsin',
    'Training programs at Wisconsin facilities',
    'Maintenance contracts for Wisconsin plants',
    'System upgrades and migrations',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Local SEO Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Gross Automation - ABB Process Automation Wisconsin',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '3680 N. 126th St.',
              'addressLocality': 'Brookfield',
              'addressRegion': 'WI',
              'postalCode': '53005',
              'addressCountry': 'US'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '43.0642',
              'longitude': '-88.1834'
            },
            'telephone': '+1-262-252-1600',
            'url': 'https://www.freelance800fsales.com/wisconsin-abb-automation',
            'areaServed': [
              'Wisconsin', 'Milwaukee', 'Madison', 'Green Bay', 'Appleton', 'Kenosha', 'Racine', 'Oshkosh', 'Eau Claire', 'Wausau'
            ],
            'serviceType': [
              'ABB Process Automation',
              'Freelance DCS Implementation',
              'System 800xA Integration',
              'Industrial Control Systems',
              'SCADA Systems',
              'Process Control Engineering',
              'ABB Ability Symphony Plus',
              'ABB Measurement & Analytics',
              'ABB Digital Solutions'
            ],
            'description': 'Leading ABB process automation solutions in Wisconsin. Brookfield-based with 25+ years experience serving manufacturing and process industries throughout Wisconsin.'
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
                    Wisconsin ABB Automation Experts
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  ABB Process Automation
                  <span className="abb-text-gradient block">Solutions in Wisconsin</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  Gross Automation, based in Brookfield, Wisconsin, has been serving the state&apos;s
                  manufacturing and process industries for 25+ years with expert ABB automation
                  solutions including Freelance DCS, System 800xA, Symphony Plus, and Compact Control systems.
                </p>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-abb-blue/10 rounded-lg">
                <MapPin className="w-6 h-6 text-abb-blue" />
                <div>
                  <div className="font-semibold text-abb-gray-900">Local Wisconsin Office</div>
                  <div className="text-abb-gray-600">3680 N. 126th St., Brookfield, WI 53005</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Get Local Consultation
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

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-abb-gray-800 mb-6">Wisconsin Service Areas</h3>
              <div className="space-y-4">
                {wisconsinCities.map((city, index) => (
                  <div key={index} className="p-4 bg-abb-gray-50 rounded-lg">
                    <div className="font-semibold text-abb-gray-900 mb-2">{city.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {city.industries.map((industry, industryIndex) => (
                        <span
                          key={industryIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Recent Wisconsin Projects
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              Examples of our successful ABB automation implementations across Wisconsin&apos;s
              diverse industrial landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localProjects.map((project, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Award className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="font-semibold text-primary mb-1">{project.location}</div>
                    <h3 className="text-xl font-semibold text-abb-gray-900 mb-2">{project.industry}</h3>
                    <div className="text-sm text-abb-blue font-medium mb-2">{project.system}</div>
                    <p className="text-abb-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wisconsin Advantage */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Why Choose Local Wisconsin Expertise?
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  As a Wisconsin-based company, we understand the unique challenges and
                  requirements of local industries. Our proximity ensures faster response
                  times and personalized service.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Rapid Response Times</div>
                    <div className="text-abb-gray-600">Local presence means faster on-site support and prompt response (Monday - Friday, 8:00 AM - 5:00 PM CST)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Local Engineering Team</div>
                    <div className="text-abb-gray-600">Wisconsin-based engineers familiar with local industry requirements</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-abb-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-abb-gray-800">Industry Relationships</div>
                    <div className="text-abb-gray-600">Established partnerships with Wisconsin suppliers and contractors</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-abb-gray-900 mb-6">Wisconsin Services</h3>
              <div className="space-y-3">
                {wisconsinServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-abb-green flex-shrink-0" />
                    <span className="text-abb-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-abb-blue/10 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-abb-blue">25+</div>
                  <div className="text-abb-gray-600">Years Serving Wisconsin</div>
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
              Ready to Start Your Wisconsin ABB Project?
            </h2>
            <p className="text-xl text-white/90">
              Contact our Wisconsin team today for expert ABB automation solutions
              tailored to your local requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Contact Wisconsin Office
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+12622521600"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors font-medium"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 (262) 252-1600
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WisconsinABBAutomationPage;