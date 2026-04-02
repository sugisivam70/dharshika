import React from "react";
import {
  Phone,
  Mail,
  MapPin,
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
              <span className="text-primary">DARSHIKA</span> FAB TECH
            </h3>
            <p className="text-gray-400 mb-4">
              Industrial fabrication partner for heavy and medium engineering
              works, including machine enclosures, ducts, tanks, trolleys, and
              custom metal assemblies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/17wp8Xp8ox/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-transform"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/919886610766?text=Hi%20Darshika%20Fab%20Tech%2C%20I%20need%20a%20fabrication%20quote."
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
                    href="tel:9886610766"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    +91 9886610766
                  </a>
                  <a
                    href="tel:7760639977"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    +91 7760639977
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:darshikafabtech.uv@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    darshikafabtech.uv@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  No. 128, Shed No. 5, 4th Phase,
                  <br />
                  Near 9th Bus Depot, Peenya Industrial Area,
                  <br />
                  Peenya 2nd Stage, Bengaluru - 560058
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Darshika Fab Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
