import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className="bg-zinc-900 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-yellow-500" />
              <span>+971 4 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-yellow-500" />
              <span>info@prestigecars.ae</span>
            </div>
          </div>
          <div className="text-zinc-400">
            Dubai, UAE | Open 9AM - 9PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">PRESTIGE</span>
            <span className="text-yellow-500">CARS</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-500 transition-colors font-medium">Home</Link>
            <Link to="/inventory" className="text-white hover:text-yellow-500 transition-colors font-medium">Inventory</Link>
            <a href="#services" className="text-white hover:text-yellow-500 transition-colors font-medium">Services</a>
            <a href="#about" className="text-white hover:text-yellow-500 transition-colors font-medium">About</a>
            <a href="#contact" className="text-white hover:text-yellow-500 transition-colors font-medium">Contact</a>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-white hover:text-yellow-500 transition-colors">Home</Link>
              <Link to="/inventory" className="text-white hover:text-yellow-500 transition-colors">Inventory</Link>
              <a href="#services" className="text-white hover:text-yellow-500 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-yellow-500 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-yellow-500 transition-colors">Contact</a>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold w-full">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;