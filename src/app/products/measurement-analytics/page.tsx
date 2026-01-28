import React from 'react';
import { ArrowRight, CheckCircle, Droplets, Gauge, Thermometer, Radio, Activity, Wrench } from 'lucide-react';
import SearchLink from '@/components/SearchLink';

export const metadata = {
  title: 'ABB Measurement & Analytics | Flow, Pressure, Temperature, Level | Gross Automation',
  description: 'ABB Measurement & Analytics instrumentation including flow meters, pressure transmitters, temperature sensors, level measurement, and analytical instruments. Available through Gross Automation.',
  keywords: 'ABB flow meter, ABB pressure transmitter, ABB temperature sensor, ABB level measurement, ABB analytical instruments, ABB measurement, Coriolis flow meter, electromagnetic flow meter, Gross Automation',
};

const MeasurementAnalyticsPage = () => {
  const categories = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Flow Measurement",
      description: "ABB provides electromagnetic, Coriolis, vortex, differential pressure, and thermal mass flow measurement technologies for liquids, gases, and steam applications.",
      products: ["Electromagnetic flowmeters", "Coriolis mass flowmeters", "Vortex flowmeters", "Differential pressure flowmeters", "Thermal mass flowmeters"],
      searchQuery: "ABB flow meter"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Pressure Measurement",
      description: "Pressure transmitters, gauges, and switches for process pressure monitoring and control across industrial applications.",
      products: ["Pressure transmitters", "Pressure gauges", "Pressure switches", "Differential pressure transmitters", "Multivariable transmitters"],
      searchQuery: "ABB pressure transmitter"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Temperature Measurement",
      description: "Temperature sensors, transmitters, RTDs, and thermocouples for accurate temperature measurement in process environments.",
      products: ["Temperature transmitters", "RTD sensors", "Thermocouple assemblies", "Temperature switches", "Multipoint sensors"],
      searchQuery: "ABB temperature sensor"
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Level Measurement",
      description: "Radar, ultrasonic, capacitance, and differential pressure level measurement for tanks, silos, and open channel applications.",
      products: ["Radar level transmitters", "Ultrasonic level sensors", "Capacitance level switches", "DP level transmitters", "Guided wave radar"],
      searchQuery: "ABB level measurement"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Analytical Measurement",
      description: "Gas analyzers, liquid analyzers, and integrated analytical systems for emissions monitoring, water quality, and process analysis.",
      products: ["Gas analyzers", "Liquid analyzers", "pH/ORP analyzers", "Dissolved oxygen analyzers", "Conductivity analyzers"],
      searchQuery: "ABB analyzer"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Valve Automation & Positioners",
      description: "Digital valve positioners, actuators, and valve automation solutions for precise control of process valves.",
      products: ["Digital positioners", "Pneumatic actuators", "Electric actuators", "Valve controllers", "Limit switches"],
      searchQuery: "ABB valve positioner"
    }
  ];

  const digitalSolutions = [
    {
      name: "ABB Ability SmartMaster",
      description: "Asset performance management for measurement devices. SmartMaster provides verification and monitoring of flowmeter health without process interruption."
    },
    {
      name: "Device Management",
      description: "Centralized configuration and monitoring of field instruments using HART, PROFIBUS, and Foundation Fieldbus protocols."
    }
  ];

  const faqItems = [
    {
      question: "What types of flow meters does ABB manufacture?",
      answer: "ABB manufactures electromagnetic flowmeters, Coriolis mass flowmeters, vortex flowmeters, differential pressure flowmeters, and thermal mass flowmeters. Each technology is suited to different fluid types, pipe sizes, and process conditions. Electromagnetic flowmeters are used for conductive liquids, while Coriolis meters provide mass flow and density measurement."
    },
    {
      question: "How can I select the right ABB measurement instrument for my application?",
      answer: "Selection depends on the process variable (flow, pressure, temperature, level, or analytical), the medium characteristics, operating conditions, accuracy requirements, and communication protocol needs. Gross Automation can assist with instrument selection based on your specific application requirements."
    },
    {
      question: "Can I order ABB measurement instruments through Gross Automation?",
      answer: "Yes. Gross Automation is an authorized distributor of ABB Process Automation products including measurement and analytical instruments. Contact Gross Automation at +1 (262) 252-1600 or search the online catalog at grossautomation.com for specific part numbers and availability."
    },
    {
      question: "What is ABB Ability SmartMaster?",
      answer: "ABB Ability SmartMaster is an asset performance management tool for ABB flowmeters. It provides in-situ verification of flowmeter performance without removing the device from the process, helping maintain measurement accuracy and comply with audit requirements."
    },
    {
      question: "Does ABB offer calibration and support for measurement instruments?",
      answer: "ABB provides calibration services, technical support, and lifecycle management for its measurement instruments. Gross Automation can coordinate service and support requests for ABB instrumentation installed in your facility."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ABB Measurement & Analytics",
            "description": "Complete range of ABB measurement and analytical instrumentation including flow meters, pressure transmitters, temperature sensors, level measurement, and analytical instruments.",
            "brand": { "@type": "Brand", "name": "ABB" },
            "manufacturer": { "@type": "Organization", "name": "ABB" },
            "category": "Industrial Instrumentation"
          })
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
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
                  <span className="bg-abb-blue/10 text-abb-blue px-4 py-2 rounded-full text-sm font-medium">
                    ABB Measurement & Analytics
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-abb-gray-900 leading-tight">
                  ABB Measurement
                  <span className="text-abb-blue block">& Analytics</span>
                </h1>

                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB Measurement & Analytics provides a complete range of instrumentation for flow, pressure, temperature, level, and analytical measurement. These instruments serve process industries from oil and gas to water treatment and food production. Gross Automation is an authorized distributor of ABB measurement products.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SearchLink query="ABB flow meter" label="Browse Flow Meters" />
                <SearchLink query="ABB pressure transmitter" label="Browse Transmitters" variant="secondary" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-abb-gray-800 mb-6">Measurement Technologies</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-primary font-semibold">Flow Measurement</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Electromagnetic, Coriolis, Vortex, DP, Thermal</div>
                </div>
                <div className="text-center p-4 bg-abb-blue/10 rounded-lg">
                  <div className="text-abb-blue font-semibold">Pressure & Temperature</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Transmitters, Sensors, Switches, Gauges</div>
                </div>
                <div className="text-center p-4 bg-abb-green/10 rounded-lg">
                  <div className="text-abb-green font-semibold">Level & Analytical</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Radar, Ultrasonic, Analyzers, pH/ORP</div>
                </div>
                <div className="text-center p-4 bg-abb-gray-200 rounded-lg">
                  <div className="text-abb-gray-700 font-semibold">Valve Automation</div>
                  <div className="text-sm text-abb-gray-600 mt-1">Positioners, Actuators, Controllers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Instrumentation Portfolio
            </h2>
            <p className="text-xl text-abb-gray-600 max-w-3xl mx-auto">
              ABB offers measurement solutions for every process variable, with instruments designed for accuracy, reliability, and long service life in industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="abb-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-abb-blue/10 rounded-lg flex items-center justify-center text-abb-blue">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-abb-gray-900 mb-3">{category.title}</h3>
                    <p className="text-abb-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {category.products.map((product, prodIndex) => (
                      <li key={prodIndex} className="flex items-center text-abb-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-abb-green mr-3 flex-shrink-0" />
                        {product}
                      </li>
                    ))}
                  </ul>
                  <SearchLink query={category.searchQuery} label={`Find ${category.title}`} variant="inline" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Solutions */}
      <section className="py-20 bg-abb-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900">
                  Digital Instrument Management
                </h2>
                <p className="text-xl text-abb-gray-600 leading-relaxed">
                  ABB provides digital tools for managing measurement instrument health, calibration status, and performance verification across the installed base.
                </p>
              </div>

              <div className="space-y-6">
                {digitalSolutions.map((solution, index) => (
                  <div key={index} className="border-l-4 border-abb-blue pl-4">
                    <h3 className="font-semibold text-abb-gray-800 mb-2">{solution.name}</h3>
                    <p className="text-abb-gray-600 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <SearchLink query="ABB flow meter" label="Search Flow Meters" variant="card" />
              <SearchLink query="ABB pressure transmitter" label="Search Pressure Transmitters" variant="card" />
              <SearchLink query="ABB temperature sensor" label="Search Temperature Sensors" variant="card" />
              <SearchLink query="ABB level measurement" label="Search Level Instruments" variant="card" />
              <SearchLink query="ABB analyzer" label="Search Analytical Instruments" variant="card" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-abb-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="abb-card">
                <h3 className="text-lg font-semibold text-abb-gray-900 mb-3">{faq.question}</h3>
                <p className="text-abb-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-abb-blue to-abb-blue/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Find ABB Measurement Instruments
            </h2>
            <p className="text-xl text-white/90">
              Search the Gross Automation catalog for ABB flow meters, pressure transmitters, temperature sensors, and analytical instruments, or contact us for application assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.grossautomation.com/products?s=ABB+measurement&manufacturers=ABB+-+Process+Automation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-abb-blue px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Search All Instruments
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
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

export default MeasurementAnalyticsPage;
