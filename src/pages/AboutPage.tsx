import React from 'react';
import { Target, Eye } from 'lucide-react';

const AboutPage: React.FC = () => {
  const missions = [
    {
      title: 'Mission 01',
      description: 'Deliver reliable heavy and medium fabrication with measurable quality, practical engineering support, and dependable on-time execution.'
    },
    {
      title: 'Mission 02',
      description: 'Build long-term partnerships by offering drawing-based custom fabrication, transparent communication, and continuous process improvement.'
    }
  ];

  const visions = [
    {
      title: 'Vision 01',
      description: 'Be a leading industrial fabrication partner known for precision, quality discipline, and strong engineering collaboration.'
    },
    {
      title: 'Vision 02',
      description: 'Scale responsibly with modern machinery and skilled teams to support complex fabrication projects across industries.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Darshika Fab Tech: ISO-focused heavy and medium fabrication specialists
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 gradient-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative slide-in-left">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/comercial-kitchen-3.jpg" 
                  alt="Darshika Fab Tech Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Dots */}
              <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-40">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 slide-in-right">
              <h2 className="text-5xl font-bold text-gray-900">
                ABOUT <span className="text-primary">DARSHIKA FAB TECH</span>
              </h2>
              <div className="h-1 w-24 bg-primary rounded"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Darshika Fab Tech</strong> was established in 2015 and is led by Mr. Venkatesh K R, a mechanical engineering graduate from VTU (2010 pass-out).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We manufacture heavy and medium fabrication works including machine enclosures, cabinets, brackets, ducts, conveyors, trolleys, storage racking systems, and PEB support structures.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">2015</div>
                  <p className="text-gray-600 font-medium">Founded</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">10,000</div>
                  <p className="text-gray-600 font-medium">Sq. Ft. Plant Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our <span className="text-primary">Expertise</span></h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
            <p className="section-subtitle">
              Practical manufacturing depth built on process control, calibrated inspection, and engineering ownership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Facility</h3>
              <p className="text-gray-700 leading-relaxed">
                Our Peenya facility includes dedicated inspection, fabrication, material handling, scrap, and raw material zones to maintain safe and efficient workflow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-700 leading-relaxed">
                We follow ISO 9001:2015 quality principles with incoming, in-process, and outgoing inspection, along with calibration-backed measuring instruments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Fabrication</h3>
              <p className="text-gray-700 leading-relaxed">
                Our engineers study new drawings, estimate cost, prepare process plans, and coordinate production to deliver precise custom jobs from prototype to batch.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  We support OEM and industrial customers with fabrication solutions that balance manufacturability, dimensional consistency, welding quality, and delivery commitments.
                </p>
                <ul className="space-y-3">
                  {[
                    'Machine Builders',
                    'Industrial Engineering Teams',
                    'Process Equipment Integrators',
                    'Automation and Conveyor Projects',
                    'Custom Metal Product Manufacturers',
                    'Infrastructure and Utility Fabrication'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">ISO</div>
                  <div className="text-sm text-white/80">9001:2015 Certified System</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">6k+4k</div>
                  <div className="text-sm text-white/80">Sq. Ft. Working Areas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-sm text-white/80">Skilled Workforce</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">2015</div>
                  <div className="text-sm text-white/80">Operational Since</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-gray-900 mb-4">MISSION</h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-white" size={32} />
                    <h3 className="text-2xl font-bold text-white">{mission.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed text-justify">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-gray-900 mb-4">VISION</h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visions.map((vision, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="text-primary" size={32} />
                    <h3 className="text-2xl font-bold text-primary">{vision.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {vision.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our <span className="text-primary">Values</span></h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💎', title: 'Quality', desc: 'Excellence in every product' },
              { icon: '🤝', title: 'Accountability', desc: 'Clear ownership from quote to dispatch' },
              { icon: '💡', title: 'Engineering', desc: 'Drawing-first, process-driven execution' },
              { icon: '📏', title: 'Precision', desc: 'Calibrated inspection and controlled output' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
