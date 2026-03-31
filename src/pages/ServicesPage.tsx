import React from 'react';
import { Wrench, Package, Headphones, Award, Shield, Zap } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Wrench size={40} />,
      title: 'Custom Fabrication Engineering',
      description: 'Drawing review, design interpretation, and fabrication planning to match your exact technical requirements.',
      features: ['Drawing study', 'Cost estimation', 'Process sheet planning', 'Custom fabrication']
    },
    {
      icon: <Package size={40} />,
      title: 'Heavy & Medium Fabrication',
      description: 'Manufacturing support for MS and SS structures, machine parts, enclosures, and handling systems.',
      features: ['Machine enclosures', 'Brackets and cabinets', 'Ducts and casings', 'Trolleys and racking']
    },
    {
      icon: <Headphones size={40} />,
      title: 'Production Coordination',
      description: 'End-to-end communication across procurement, production, and inspection for smoother delivery.',
      features: ['Job loading', 'Material coordination', 'Progress tracking', 'Dispatch support']
    },
    {
      icon: <Award size={40} />,
      title: 'Quality Assurance',
      description: 'Structured quality controls aligned with ISO 9001:2015 methods for reliable, repeatable output.',
      features: ['Incoming inspection', 'In-process checks', 'Final inspection', 'Corrective actions']
    },
    {
      icon: <Shield size={40} />,
      title: 'Standards & Compliance',
      description: 'Documented systems for process discipline, calibration control, and quality reporting.',
      features: ['Control plans', 'FMEA support', 'Gauge calibration', 'Audit readiness']
    },
    {
      icon: <Zap size={40} />,
      title: 'Machinery Capability',
      description: 'Modern fabrication infrastructure to handle complex parts with speed and dimensional accuracy.',
      features: ['Laser cutting', 'CNC bending', 'Welding stations', 'Drilling and finishing']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Industrial fabrication services from estimation to final inspection and delivery
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 gradient-light relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary"
              >
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-20 gradient-warm relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/commercial-kitchen-2.jpg" 
            alt="Commercial Kitchen" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Share your fabrication requirement and drawings. Our team will respond with a clear scope, timeline, and quote.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
