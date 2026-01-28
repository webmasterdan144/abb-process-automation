import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin, Phone, CheckCircle, Award, Clock, Users, Building2, Wrench, Shield } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { states, getStateBySlug, getAllStateSlugs } from '@/data/states';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ state: string }>;
}

// Generate static params for all states
export async function generateStaticParams() {
  return getAllStateSlugs()
    .filter(slug => slug !== 'wisconsin') // Wisconsin has its own dedicated page
    .map(slug => ({
      state: slug,
    }));
}

// Generate metadata for each state
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateData = getStateBySlug(stateSlug);

  if (!stateData || stateSlug === 'wisconsin') {
    return { title: 'Not Found' };
  }

  return {
    title: `ABB Process Automation ${stateData.name} | Gross Automation | DCS & Control Systems`,
    description: `Leading ABB process automation solutions in ${stateData.name}. Expert Freelance DCS, System 800xA, Symphony Plus, Measurement & Analytics implementation serving ${stateData.majorCities.slice(0, 3).join(', ')}. 35+ years experience.`,
    keywords: `ABB automation ${stateData.name}, process automation ${stateData.name}, DCS ${stateData.name}, Freelance DCS ${stateData.name}, System 800xA ${stateData.name}, industrial automation ${stateData.name}, SCADA ${stateData.name}, Gross Automation`,
    openGraph: {
      title: `ABB Process Automation ${stateData.name} | Gross Automation`,
      description: `Leading ABB automation solutions in ${stateData.name}. Serving ${stateData.majorCities.slice(0, 3).join(', ')} with 35+ years experience.`,
      url: `${SITE_CONFIG.url}/${stateData.slug}-abb-automation`,
    },
    other: {
      'geo.region': `US-${stateData.abbreviation}`,
      'geo.placename': stateData.name,
      'geo.position': stateData.geoPosition,
      'ICBM': stateData.geoPosition.replace(';', ', '),
    },
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const stateData = getStateBySlug(stateSlug);

  // Redirect Wisconsin to its dedicated page
  if (stateSlug === 'wisconsin') {
    notFound();
  }

  if (!stateData) {
    notFound();
  }

  const capabilities = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Complete DCS Solutions',
      description: 'Full-service Freelance DCS and System 800xA implementation, from engineering to commissioning.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'System Integration',
      description: 'Seamless integration with existing plant systems, SCADA, historians, and enterprise software.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Migration Services',
      description: 'Upgrade legacy control systems to modern ABB platforms with minimal downtime.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Training & Support',
      description: 'Comprehensive operator training and ongoing technical support for your team.',
    },
  ];

  const products = [
    { name: 'ABB Freelance DCS', href: '/products/freelance', description: 'Scalable distributed control for process automation' },
    { name: 'ABB System 800xA', href: '/products/800xa', description: 'Enterprise-level DCS for complex operations' },
    { name: 'ABB Symphony Plus', href: '/products/symphony-plus', description: 'Power generation and water industry specialist' },
    { name: 'Compact Product Suite', href: '/products/compact-control', description: 'Cost-effective automation for smaller applications' },
    { name: 'Measurement & Analytics', href: '/products/measurement-analytics', description: 'Precision instrumentation and analyzers' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Gross Automation - ABB Process Automation',
            'description': `ABB process automation solutions serving ${stateData.name}. ${stateData.description}`,
            'url': `${SITE_CONFIG.url}/${stateData.slug}-abb-automation`,
            'telephone': '+1-262-252-1600',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '3680 N. 126th St.',
              'addressLocality': 'Brookfield',
              'addressRegion': 'WI',
              'postalCode': '53005',
              'addressCountry': 'US',
            },
            'areaServed': {
              '@type': 'State',
              'name': stateData.name,
            },
            'serviceType': [
              'Process Automation',
              'DCS Implementation',
              'System Integration',
              'Control System Engineering',
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Serving {stateData.name}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              ABB Process Automation
              <span className="abb-text-gradient block">{stateData.name}</span>
            </h1>

            <p className="text-xl text-abb-gray-600 mb-6">
              {stateData.description}
            </p>

            <div className="bg-abb-blue/5 border border-abb-blue/20 rounded-lg p-4 mb-8 text-sm text-abb-gray-700">
              <strong>Nationwide Reach:</strong> Located just one hour from Chicago O&apos;Hare (ORD), with direct flights from both ORD and Milwaukee (MKE) to major cities, we&apos;re uniquely positioned to be your trusted automation partner anywhere in the U.S.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
              >
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+12622521600"
                className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
              >
                <Phone className="mr-2 w-5 h-5" />
                (262) 252-1600
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary mb-1">35+</div>
              <div className="text-sm text-abb-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-abb-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary mb-1">50</div>
              <div className="text-sm text-abb-gray-600">States Served</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-abb-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-abb-gray-900 mb-4 text-center">
              Industries We Serve in {stateData.name}
            </h2>
            <p className="text-abb-gray-600 text-center mb-10">
              Our ABB automation solutions are tailored for {stateData.name}&apos;s key industries
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stateData.industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-abb-gray-50 rounded-lg p-4 text-center hover:bg-primary/5 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-abb-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-16 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-abb-gray-900 mb-4 text-center">
              Serving {stateData.name}&apos;s Major Industrial Centers
            </h2>
            <p className="text-abb-gray-600 text-center mb-10">
              From our Wisconsin headquarters, we provide comprehensive automation services throughout {stateData.name}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stateData.majorCities.map((city, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="font-medium text-abb-gray-800">{city}</span>
                  <div className="text-xs text-abb-gray-500 mt-1">{stateData.abbreviation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-abb-gray-900 mb-4 text-center">
              Our Capabilities
            </h2>
            <p className="text-abb-gray-600 text-center mb-10">
              Comprehensive ABB automation services for {stateData.name} businesses
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-abb-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-abb-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-abb-gray-600">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-abb-gray-900 mb-4 text-center">
              ABB Automation Products
            </h2>
            <p className="text-abb-gray-600 text-center mb-10">
              Industry-leading control systems and instrumentation available in {stateData.name}
            </p>

            <div className="space-y-4">
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="flex items-center justify-between bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div>
                    <h3 className="font-semibold text-abb-gray-900 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-abb-gray-600">{product.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-abb-gray-400 group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 abb-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your {stateData.name} Facility?
            </h2>
            <p className="text-white/80 mb-8">
              Contact our team of ABB automation experts for a consultation. We serve all of {stateData.name} from our Wisconsin headquarters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+12622521600"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors font-medium"
              >
                <Phone className="mr-2 w-5 h-5" />
                (262) 252-1600
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for AI */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-abb-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-abb-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-abb-gray-900 mb-2">
                  Does Gross Automation serve {stateData.name}?
                </h3>
                <p className="text-abb-gray-600">
                  Yes. Gross Automation provides ABB process automation solutions throughout {stateData.name}, including {stateData.majorCities.slice(0, 3).join(', ')}, and surrounding areas. We handle projects nationwide from our Wisconsin headquarters.
                </p>
              </div>

              <div className="bg-abb-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-abb-gray-900 mb-2">
                  What ABB products are available in {stateData.name}?
                </h3>
                <p className="text-abb-gray-600">
                  We provide the full range of ABB process automation products in {stateData.name}: Freelance DCS, System 800xA, Symphony Plus, Compact Product Suite, and Measurement & Analytics instrumentation.
                </p>
              </div>

              <div className="bg-abb-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-abb-gray-900 mb-2">
                  What industries do you serve in {stateData.name}?
                </h3>
                <p className="text-abb-gray-600">
                  In {stateData.name}, we primarily serve {stateData.industries.join(', ')}. Our automation solutions are customized for each industry&apos;s specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': `Does Gross Automation serve ${stateData.name}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Yes. Gross Automation provides ABB process automation solutions throughout ${stateData.name}, including ${stateData.majorCities.slice(0, 3).join(', ')}, and surrounding areas. We handle projects nationwide from our Wisconsin headquarters.`,
                },
              },
              {
                '@type': 'Question',
                'name': `What ABB products are available in ${stateData.name}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `We provide the full range of ABB process automation products in ${stateData.name}: Freelance DCS, System 800xA, Symphony Plus, Compact Product Suite, and Measurement & Analytics instrumentation.`,
                },
              },
              {
                '@type': 'Question',
                'name': `What industries do you serve in ${stateData.name}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `In ${stateData.name}, we primarily serve ${stateData.industries.join(', ')}. Our automation solutions are customized for each industry's specific requirements.`,
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
