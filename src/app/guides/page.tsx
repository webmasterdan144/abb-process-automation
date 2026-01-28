import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Cpu, GitCompare, HelpCircle, Route, Settings } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABB Automation Guides & Knowledge Base | Gross Automation',
  description: 'Comprehensive guides to ABB process automation: Freelance DCS, System 800xA, controller selection, DCS vs PLC, migration strategies. Expert knowledge from 35+ years of implementation experience.',
  keywords: 'ABB automation guides, Freelance DCS guide, System 800xA guide, DCS vs PLC, ABB controller selection, process automation knowledge base',
};

export default function GuidesIndex() {
  const guides = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'What is ABB Freelance DCS?',
      description: 'Complete guide to the Freelance distributed control system — architecture, components, and applications.',
      href: '/guides/what-is-freelance-dcs',
      category: 'Fundamentals',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'What is ABB System 800xA?',
      description: 'Enterprise-level DCS explained — capabilities, architecture, and when to choose 800xA.',
      href: '/guides/what-is-system-800xa',
      category: 'Fundamentals',
    },
    {
      icon: <GitCompare className="w-6 h-6" />,
      title: 'Freelance vs System 800xA',
      description: 'Side-by-side comparison to help you choose the right ABB DCS for your application.',
      href: '/guides/freelance-vs-800xa',
      category: 'Comparisons',
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: 'DCS vs PLC: What\'s the Difference?',
      description: 'Understand when to use a DCS versus a PLC for your process automation needs.',
      href: '/guides/dcs-vs-plc',
      category: 'Fundamentals',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'ABB Controller Selection Guide',
      description: 'How to choose between AC700F, AC800F, AC900F, and AC800M controllers.',
      href: '/guides/controller-selection',
      category: 'Selection',
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: 'DCS Migration Guide',
      description: 'Strategies for migrating legacy control systems to modern ABB platforms.',
      href: '/guides/dcs-migration',
      category: 'Implementation',
    },
  ];

  const categories = ['Fundamentals', 'Comparisons', 'Selection', 'Implementation'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-abb-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Knowledge Base
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 mb-6">
              ABB Automation Guides
            </h1>

            <p className="text-xl text-abb-gray-600">
              Expert knowledge from 35+ years of ABB process automation implementation.
              Learn about DCS systems, controller selection, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {categories.map(category => {
              const categoryGuides = guides.filter(g => g.category === category);
              if (categoryGuides.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <h2 className="text-xl font-semibold text-abb-gray-900 mb-6 border-b border-abb-gray-200 pb-2">
                    {category}
                  </h2>
                  <div className="grid gap-4">
                    {categoryGuides.map((guide, index) => (
                      <Link
                        key={index}
                        href={guide.href}
                        className="flex items-start gap-4 bg-white border border-abb-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          {guide.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-abb-gray-900 group-hover:text-primary transition-colors mb-1">
                            {guide.title}
                          </h3>
                          <p className="text-abb-gray-600">{guide.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-abb-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-abb-gray-900 mb-4">
              Have a Specific Question?
            </h2>
            <p className="text-abb-gray-600 mb-8">
              Our automation experts are ready to help you navigate ABB products and find the right solution for your application.
            </p>
            <a
              href="https://www.grossautomation.com/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              Contact Our Engineers
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
