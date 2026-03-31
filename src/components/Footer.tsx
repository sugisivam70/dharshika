import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">BPL</span> EQUIPMENTS
            </h3>
            <p className="text-gray-400 mb-4">
              Leading provider of commercial kitchen equipment solutions for
              hotels, restaurants, cafes, and industrial kitchens.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bplequipments?igsh=MWtuYnA0eGo1ZjVsbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/17wp8Xp8ox/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-transform"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/917676962769?text=Hi%20BPL%20I%27m%20interested%20in%20your%20product"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-lg hover:scale-110 transition-transform"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:7676962769"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    +91 7676962769
                  </a>
                  <a
                    href="tel:8970599544"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    +91 8970599544
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:bplequipments@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    bplequipments@gmail.com
                  </a>
                  <a
                    href="mailto:Latheesh_nc@yahoo.com"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    Latheesh_nc@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Peenya, Bengaluru,
                  <br />
                  Karnataka 560058
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} BPL Equipments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
