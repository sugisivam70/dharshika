import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const mapAddress =
    'No. 128, Shed No. 5, 4th Phase, Near 9th Bus Depot, Peenya Industrial Area, Peenya 2nd Stage, Bengaluru, Karnataka 560058';
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Connect with Darshika Fab Tech for heavy and medium fabrication inquiries
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 gradient-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <p className="text-gray-600 mb-8">
                  We are ready to support your project with fabrication planning, technical coordination, and production execution.
                  Reach us directly through the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors">
                    <Phone className="text-primary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:9886610766" className="text-gray-600 hover:text-primary transition-colors block">
                      +91 9886610766
                    </a>
                    <a href="tel:7760639977" className="text-gray-600 hover:text-primary transition-colors block">
                      +91 7760639977
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors">
                    <Mail className="text-primary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:darshikafabtech.uv@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                      darshikafabtech.uv@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors">
                    <MapPin className="text-primary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      No. 128, Shed No. 5, 4th Phase,<br />
                      Near 9th Bus Depot, Peenya Industrial Area,<br />
                      Peenya 2nd Stage, Bengaluru,<br />
                      Karnataka 560058
                    </p>
                    <a 
                      href={mapsLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors">
                    <Clock className="text-primary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="text-primary font-semibold">Follow Us</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/bplequipments?igsh=MWtuYnA0eGo1ZjVsbw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg hover:scale-110 transition-transform"
                    >
                      <Instagram className="text-white" size={24} />
                    </a>
                    <a 
                      href="https://www.facebook.com/share/17wp8Xp8ox/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-lg hover:scale-110 transition-transform"
                    >
                      <Facebook className="text-white" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg slide-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="product">Fabrication Requirement</option>
                    <option value="support">Technical Clarification</option>
                    <option value="partnership">Vendor / Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Share drawing details, quantity, material (MS/SS), and target delivery date..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-warm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Find <span className="text-primary">Us</span></h2>
            <div className="h-1 w-24 bg-primary rounded mx-auto mb-6"></div>
            <p className="section-subtitle">
              Visit our fabrication unit in Peenya Industrial Area
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src={mapEmbedSrc}
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Darshika Fab Tech Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
