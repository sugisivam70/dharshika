import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo2.jpeg"
              alt="Darshika Fab Tech"
              className="h-11 w-auto"
            />
            <div className="leading-tight">
              <div className="text-lg md:text-xl font-bold tracking-wide">
                <span className="text-primary">DARSHIKA</span>
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-700">
                FAB TECH
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative group ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary">
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 text-center btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
