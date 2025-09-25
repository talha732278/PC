import React from 'react';
import { Award, Users, Globe, Clock, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Years Experience' },
    { icon: <Users className="w-8 h-8" />, number: '5000+', label: 'Happy Clients' },
    { icon: <Globe className="w-8 h-8" />, number: '50+', label: 'Countries Served' },
    { icon: <Star className="w-8 h-8" />, number: '4.9', label: 'Client Rating' }
  ];

  const team = [
    {
      name: 'Ahmed Al Rashid',
      position: 'Founder & CEO',
      image: 'data:image/jpeg;base64,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',
      experience: '20+ years in luxury automotive'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Import Specialist',
      image: 'data:image/jpeg;base64,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',
      experience: 'Expert in international trade'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Technical Director',
      image: 'data:image/jpeg;base64,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',
      experience: 'Certified automotive engineer'
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-500">Prestige Cars</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            For over 15 years, we've been the premier destination for luxury automotive excellence in the UAE, connecting discerning clients with the world's finest vehicles.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Founded in 2008 in the heart of Dubai, Prestige Cars began with a simple vision: to provide unparalleled access to the world's most exclusive vehicles while delivering exceptional service that exceeds expectations.
              </p>
              <p>
                Our journey started with a passion for automotive excellence and a deep understanding of the luxury market in the Middle East. Today, we've grown into the region's most trusted name in exotic vehicle sales and services.
              </p>
              <p>
                We specialize in sourcing, importing, and delivering premium vehicles from renowned manufacturers worldwide, ensuring each vehicle meets our rigorous standards of quality and authenticity.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-yellow-500">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">15+ Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Market Leadership</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Prestige Cars Showroom"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-black rounded-2xl p-6 hover:bg-zinc-800 transition-colors duration-300">
              <div className="text-yellow-500 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our <span className="text-yellow-500">Expert Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-yellow-500 font-semibold mb-2">{member.position}</p>
                    <p className="text-zinc-300 text-sm">{member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-black to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            To provide an unparalleled luxury automotive experience by offering the world's finest vehicles, 
            exceptional service, and comprehensive support that exceeds our clients' expectations at every touchpoint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;