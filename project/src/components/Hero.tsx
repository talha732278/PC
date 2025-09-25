import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Search, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchPreferences, setSearchPreferences] = useState({
    search: '',
    priceRange: '',
    location: ''
  });
  const navigate = useNavigate();

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Lamborghini Huracán',
      subtitle: 'Performance Redefined',
      price: 'AED 1,200,000'
    },
    {
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Ferrari 488 GTB',
      subtitle: 'Italian Excellence',
      price: 'AED 1,800,000'
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'McLaren 720S',
      subtitle: 'Engineering Marvel',
      price: 'AED 1,500,000'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSearchChange = (field: string, value: string) => {
    setSearchPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    
    if (searchPreferences.search) {
      searchParams.set('search', searchPreferences.search);
    }
    if (searchPreferences.priceRange) {
      const [min, max] = searchPreferences.priceRange.split('-');
      if (min && min !== '0') searchParams.set('priceMin', min);
      if (max && max !== '+') searchParams.set('priceMax', max);
    }
    if (searchPreferences.location) {
      searchParams.set('location', searchPreferences.location);
    }
    
    navigate(`/inventory?${searchParams.toString()}`);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 mb-6">
                      {slide.subtitle}
                    </p>
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8">
                      {slide.price}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors">
                        View Details
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
                        Schedule Test Drive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Search Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3 bg-zinc-800 rounded-lg px-4 py-3">
                <Search className="w-5 h-5 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Make, Model, Year"
                  value={searchPreferences.search}
                  onChange={(e) => handleSearchChange('search', e.target.value)}
                  className="bg-transparent text-white placeholder-zinc-400 flex-1 outline-none"
                />
              </div>
              <div className="flex items-center space-x-3 bg-zinc-800 rounded-lg px-4 py-3">
                <Calendar className="w-5 h-5 text-zinc-400" />
                <select 
                  value={searchPreferences.priceRange}
                  onChange={(e) => handleSearchChange('priceRange', e.target.value)}
                  className="bg-transparent text-white flex-1 outline-none"
                >
                  <option value="">Price Range</option>
                  <option value="0-500000">AED 0 - 500K</option>
                  <option value="500000-1000000">AED 500K - 1M</option>
                  <option value="1000000-2000000">AED 1M - 2M</option>
                  <option value="2000000-+">AED 2M+</option>
                </select>
              </div>
              <div className="flex items-center space-x-3 bg-zinc-800 rounded-lg px-4 py-3">
                <MapPin className="w-5 h-5 text-zinc-400" />
                <select 
                  value={searchPreferences.location}
                  onChange={(e) => handleSearchChange('location', e.target.value)}
                  className="bg-transparent text-white flex-1 outline-none"
                >
                  <option value="">Location</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Sharjah">Sharjah</option>
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center"
              >
                Search Vehicles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;