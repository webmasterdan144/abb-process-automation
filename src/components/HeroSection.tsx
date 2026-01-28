'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  ABB Process Automation Solutions
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-abb-gray-900 leading-tight">
                Complete ABB Process Automation Portfolio
                <span className="abb-text-gradient block">Solutions by Gross Automation</span>
              </h1>

              <p className="text-xl text-abb-gray-600 leading-relaxed">
                Gross Automation is an authorized distributor of ABB Process Automation products. The portfolio includes three DCS platforms, full instrumentation, controllers, I/O systems, and digital solutions for industrial operations.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-abb-green" />
                <span className="text-abb-gray-700">Complete turnkey solutions from design to commissioning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-abb-green" />
                <span className="text-abb-gray-700">Expert system integration and engineering services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-abb-green" />
                <span className="text-abb-gray-700">Support and maintenance services (Monday - Friday, 8:00 AM - 5:00 PM CST)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium group"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://www.grossautomation.com/products?s=ABB&manufacturers=ABB+-+Process+Automation"
                className="inline-flex items-center justify-center border-2 border-abb-gray-300 text-abb-gray-700 px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors font-medium"
              >
                <Search className="mr-2 w-5 h-5" />
                Search Products
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-abb-gray-500 mb-4">Trusted Globally by Industry Leaders</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-abb-gray-400">ABB</div>
                <div className="text-lg font-semibold text-abb-gray-400">Gross Automation</div>
                <div className="text-sm text-abb-gray-400">35+ Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl p-8">
              {/* Process Control Diagram */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-abb-gray-800 mb-4">Process Control Architecture</h3>
                </div>

                {/* Control Layers */}
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-primary font-semibold">Level 3: Plant Management</div>
                    <div className="text-sm text-abb-gray-600 mt-1">800xA System Platform</div>
                  </div>

                  <div className="bg-abb-blue/10 rounded-lg p-4 text-center">
                    <div className="text-abb-blue font-semibold">Level 2: Process Control</div>
                    <div className="text-sm text-abb-gray-600 mt-1">Freelance DCS Controllers</div>
                  </div>

                  <div className="bg-abb-green/10 rounded-lg p-4 text-center">
                    <div className="text-abb-green font-semibold">Level 1: Field Devices</div>
                    <div className="text-sm text-abb-gray-600 mt-1">S800 I/O & Field Instruments</div>
                  </div>

                  <div className="bg-abb-gray-200 rounded-lg p-4 text-center">
                    <div className="text-abb-gray-700 font-semibold">Digital Layer</div>
                    <div className="text-sm text-abb-gray-600 mt-1">Genix IIoT & Analytics</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-abb-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-abb-gray-600">DCS Platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Full</div>
                    <div className="text-sm text-abb-gray-600">Instrumentation Line</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center" aria-hidden="true">
              <div className="w-10 h-10 bg-primary rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-abb-blue/10 rounded-full flex items-center justify-center" aria-hidden="true">
              <div className="w-8 h-8 bg-abb-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
};

export default HeroSection;