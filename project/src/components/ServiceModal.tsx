import React from 'react';
import { X, CheckCircle, Clock, Users, Award } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  images: string[];
  process: string[];
  benefits: string[];
  timeline: string;
  pricing: string;
}

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 text-black p-3 rounded-xl">
              {service.icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Service Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {service.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${service.title} ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Process */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-yellow-500" />
                <span>Our Process</span>
              </h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-zinc-300 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <span>Key Benefits</span>
              </h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Service Details */}
              <div className="mt-8 bg-black rounded-xl p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="text-zinc-400 text-sm">Timeline</div>
                      <div className="text-white font-semibold">{service.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="text-zinc-400 text-sm">Starting From</div>
                      <div className="text-white font-semibold">{service.pricing}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-black mb-2">Ready to Get Started?</h3>
            <p className="text-black/80 mb-4">Contact our experts for a personalized consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;