import React from 'react';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import TrustIndicators from './TrustIndicators';
import { SITE_CONFIG, EXTERNAL_LINKS, CONTACT_INFO } from '@/lib/constants';

const CTASection = () => {
  return (
    <section className="py-20 abb-gradient text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Process Automation?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Get expert consultation on ABB automation solutions tailored to your specific needs.
                Gross Automation&apos;s team is ready to help you achieve operational excellence with decades of proven expertise.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="text-white/80 text-sm font-medium">WHAT YOU GET</div>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Custom solution design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Detailed project proposal
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-white/80 text-sm font-medium">OUR COMMITMENT</div>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    24-hour response time
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Certified ABB experts by Gross Automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Turnkey project delivery
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${EXTERNAL_LINKS.mainSite}/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect&inquiry_type=quote`}
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <a
                href={`${EXTERNAL_LINKS.mainSite}/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect`}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors font-medium"
              >
                Schedule Consultation
              </a>

              <a
                href="https://www.grossautomation.com/products?s=ABB&manufacturers=ABB+-+Process+Automation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors font-medium"
              >
                Search Products
              </a>
            </div>

            <TrustIndicators variant="onRed" />
          </div>

          {/* Right Content - Contact Options */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Us</div>
                    <div className="text-white/80">{SITE_CONFIG.phone}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=ABBTOW%20Referral%20${SITE_CONFIG.name}`}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-white/80">{SITE_CONFIG.email}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </a>

                {/* Contact Form */}
                <a
                  href={`${EXTERNAL_LINKS.mainSite}/contact?utm_source=abbatow&utm_medium=website&utm_campaign=secure-redirect`}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Contact Form</div>
                    <div className="text-white/80">Send us a message</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                </a>
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="text-white/80 text-sm">
                  <strong>Office Hours:</strong> {CONTACT_INFO.hours.weekdays}
                </div>
                <div className="text-white/80 text-sm mt-1">
                  <strong>Support Hours:</strong> {CONTACT_INFO.hours.weekdays}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
    </section>
  );
};

export default CTASection;