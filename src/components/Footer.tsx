import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img
              src="https://static.wixstatic.com/media/1f0440_8079eb9700b94f4fb4723f053c171518~mv2.png"
              alt="Ravi Gajjar Logo"
              className="w-32"
            />
            <p className="text-gray-400">
              Creating timeless spaces that inspire and transform lives through
              innovative design and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-secondary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-secondary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Residential Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Commercial Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Hospitality Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Custom Furniture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Lighting Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>123 Design District</li>
              <li>Mumbai, Maharashtra 400001</li>
              <li>India</li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-secondary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ravigajjar.com"
                  className="hover:text-secondary transition-colors"
                >
                  info@ravigajjar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ravi Gajjar Interior & Architects. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
