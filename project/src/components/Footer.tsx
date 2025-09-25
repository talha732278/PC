import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
    { name: 'Financing', path: '#' },
    { name: 'Trade-In', path: '#' },
    { name: 'Warranty', path: '#' }
  ];

  const services = [
    'Custom Clearance',
    'Vehicle Import',
    'Documentation',
    'Port Pickup',
    'Delivery Service',
    'Maintenance',
    'Insurance',
    'Registration'
  ];

  const vehicleTypes = [
    'Luxury Cars',
    'Sports Cars',
    'SUVs',
    'Supercars',
    'Classic Cars',
    'Electric Vehicles',
    'Hybrid Vehicles',
    'Commercial Vehicles'
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-white">PRESTIGE</span>
                <span className="text-yellow-500">CARS</span>
              </h3>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              The UAE's premier destination for luxury vehicles. We specialize in importing, selling, and servicing the world's finest automobiles with unmatched expertise and dedication.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Sheikh Zayed Road, Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>info@prestigecars.ae</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>Mon-Sat: 9AM-9PM, Sun: 10AM-8PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-zinc-800 text-zinc-400 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Types */}
          <div>
            <h4 className="text-white font-semibold mb-6">Vehicle Types</h4>
            <ul className="space-y-3">
              {vehicleTypes.map((type, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-zinc-400">
                Subscribe to our newsletter for the latest arrivals, exclusive offers, and automotive insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
              />
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
            <div>
              © 2024 Prestige Cars UAE. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;