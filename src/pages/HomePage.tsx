import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const dahrshikaGallery = [
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.25.47 PM.jpeg',
    title: 'Industrial Assembly Build',
    description: 'Custom-fabricated assembly designed for dimensional stability and long production life.'
  },
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.26.00 PM.jpeg',
    title: 'Sheet Metal Execution',
    description: 'Precision cutting, bending, and fit-up workflow handled with controlled process checks.'
  },
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.26.10 PM.jpeg',
    title: 'Machine Support Fabrication',
    description: 'Heavy and medium fabrication support for load-bearing machine and utility structures.'
  },
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.26.18 PM.jpeg',
    title: 'Welded Structural Unit',
    description: 'Strong welded joints and clean finishing prepared for dependable shop-floor operation.'
  },
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.26.26 PM.jpeg',
    title: 'Process Equipment Frame',
    description: 'Fabricated frame engineered for easy installation, maintenance access, and durability.'
  },
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.26.54 PM.jpeg',
    title: 'Production-Ready Fabrication',
    description: 'Component manufactured with close attention to drawing intent and repeatable output quality.'
  },
  
 
  
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.31.44 PM.jpeg',
    title: 'Dispatch-Ready Job',
    description: 'Finalized unit prepared for delivery after dimensional and workmanship validation.'
  },
  {
    image: '/dahrshika-img/WhatsApp Image 2026-04-02 at 12.31.52 PM.jpeg',
    title: 'Custom Project Finish',
    description: 'Finished custom job supporting industrial operations with reliable structural performance.'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1920&q=80"
            alt="Professional industrial background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>

        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/70 to-primary-light/60">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-32 left-10 grid grid-cols-3 gap-2 opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                DARSHIKA
                <br />
                <span className="text-6xl md:text-8xl">FAB TECH</span>
                <br />
                <span className="text-5xl md:text-7xl">SOLUTIONS</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-xl">
                Precision heavy and medium fabrication for industrial engineering projects, machine enclosures, ducts, trolleys, racking systems, and custom assemblies.
              </p>
              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                From drawing study and cost estimation to fabrication, inspection, and dispatch, we deliver practical fabrication support for OEMs, plant teams, and infrastructure projects.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001:2015 QMS', '10,000 Sq. Ft. Facility', 'Custom Drawing-Based Work'].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/products" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                  View Products
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/10">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right Content - Image Circle */}
            <div className="relative scale-in">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative Circle */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                
                {/* Main Circle with Image */}
                <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={encodeURI('/public/commercial-kitchen.jpg')}
                    alt="Industrial factory workspace"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-light rounded-full opacity-50"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-dark rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Welcome to <span className="text-primary">Darshika Fab Tech</span></h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
            <p className="section-subtitle">
              Your trusted partner for industrial fabrication and engineered metal solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in-up">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Products</h3>
              <p className="text-gray-600">
                High-accuracy sheet metal and structural fabrication built for demanding industrial use
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in-up">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Fabrication tailored to drawings, load conditions, and site-specific installation requirements
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in-up">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">
                End-to-end support from costing and production planning to inspection and dispatch
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              Explore Our Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 gradient-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose <span className="text-primary">Darshika Fab Tech</span></h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
            <p className="section-subtitle">
              ISO-aligned fabrication partner with deep process control and practical engineering experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 slide-in-left">
              <h3 className="text-3xl font-bold text-gray-900">Comprehensive Fabrication Capabilities</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We undertake both mild steel and stainless-steel jobs including bases, ricer blocks, brackets, machine enclosures, cabinets, ducts, casings, tanks, and machine columns.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team supports industrial engineering fabrication with strong planning, quality checks, preventive maintenance, and process documentation across every stage.
              </p>
              <ul className="space-y-3">
                {[
                  'Machine Enclosures & Cabinets',
                  'Ducting, Casings, and Tanks',
                  'Material Handling Trolleys',
                  'Storage Racking Systems',
                  'PEB and Structural Fabrication'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 slide-in-right">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-gray-900 mb-2">Energy Efficient</h4>
                <p className="text-sm text-gray-600">Process-led production methods designed for efficient output and reduced waste</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-bold text-gray-900 mb-2">Durable Build</h4>
                <p className="text-sm text-gray-600">Fabrication strength that supports heavy-duty industrial operations</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="font-bold text-gray-900 mb-2">Safety Certified</h4>
                <p className="text-sm text-gray-600">ISO 9001:2015 quality management system implementation in core operations</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">Custom Design</h4>
                <p className="text-sm text-gray-600">Drawing-based fabrication with engineering review and practical manufacturability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-20 gradient-warm">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative slide-in-left">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/dahrshika-home-manufacturing.jpeg" 
                  alt="Darshika Fab Tech manufacturing process" 
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years in Business</div>
              </div>
            </div>

            <div className="space-y-6 slide-in-right">
              <h2 className="text-4xl font-bold text-gray-900">
                Manufacturing <span className="text-primary">Excellence</span>
              </h2>
              <div className="h-1 w-24 bg-primary rounded"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Darshika Fab Tech operates from Peenya Industrial Area, Bengaluru, with a total working space of around 10,000 sq. ft. built to support inspection, fabrication, raw material storage, and controlled process flow.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From drawing study and costing to in-process checks and final inspection, every job is monitored for quality, dimensional accuracy, and timely delivery.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team also supports production planning, material coordination, and process documentation so customers get predictable lead times and consistent output quality across repeat orders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on practical manufacturing results: controlled workmanship, traceable stages, and clear communication at every checkpoint from project kickoff to final handover.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-bold text-primary">2015</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-bold text-primary">10,000</div>
                  <div className="text-sm text-gray-600">Sq. Ft. Facility</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-bold text-primary">ISO</div>
                  <div className="text-sm text-gray-600">9001:2015 QMS</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Skilled Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dahrshika Image Gallery */}
      <section className="py-20 gradient-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Dahrshika <span className="text-primary">Project Gallery</span></h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
            <p className="section-subtitle max-w-4xl mx-auto">
              A complete visual showcase from the `dahrshika-img` collection, highlighting real fabrication outputs across structural builds, custom assemblies, process units, and dispatch-ready jobs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dahrshikaGallery.map((item, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={encodeURI(item.image)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 gradient-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured <span className="text-primary">Work Types</span></h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { img: '/burner-2.jpeg', name: 'Machine Base Fabrication' },
              { img: '/rack-3.jpeg', name: 'Storage and Handling Racks' },
             
              { img: '/burner-3.jpeg', name: 'Industrial Burner Fabrication' },
              { img: '/holder-1.jpeg', name: 'Custom Holder Components' }
            ].map((product, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default HomePage;
