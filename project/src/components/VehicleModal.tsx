import React from 'react';
import { X, Calendar, Gauge, Fuel, Users, MapPin, Star, Heart, Share2, Phone } from 'lucide-react';

interface Vehicle {
  id: number;
  images: string[];
  make: string;
  model: string;
  year: number;
  price: number;
  originalPrice?: number;
  mileage: number;
  fuel: string;
  transmission: string;
  bodyType: string;
  seats: number;
  engine: string;
  power: string;
  location: string;
  condition: string;
  features: string[];
  isNew: boolean;
  featured: boolean;
  rating: number;
  views: number;
}

interface VehicleModalProps {
  vehicle: Vehicle;
  isOpen: boolean;
  onClose: () => void;
}

const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return `AED ${price.toLocaleString()}`;
  };

  const formatMileage = (mileage: number) => {
    return `${mileage.toLocaleString()} km`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {vehicle.make} {vehicle.model}
            </h2>
            <p className="text-zinc-400">{vehicle.year} • {vehicle.condition}</p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.make} ${vehicle.model}`}
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {vehicle.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </span>
                )}
                {vehicle.featured && (
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-black/70 text-white p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="bg-black/70 text-white p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Thumbnails */}
            {vehicle.images.length > 1 && (
              <div className="flex space-x-2">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-yellow-500' : 'border-zinc-700'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${vehicle.make} ${vehicle.model} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Details */}
          <div>
            {/* Price */}
            <div className="mb-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">
                {formatPrice(vehicle.price)}
              </div>
              {vehicle.originalPrice && vehicle.originalPrice > vehicle.price && (
                <div className="text-lg text-zinc-400 line-through">
                  {formatPrice(vehicle.originalPrice)}
                </div>
              )}
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-white font-semibold">{vehicle.rating}</span>
                </div>
                <span className="text-zinc-400">({vehicle.views} views)</span>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-black rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Year</div>
                    <div className="text-white font-semibold">{vehicle.year}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Mileage</div>
                    <div className="text-white font-semibold">{formatMileage(vehicle.mileage)}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Fuel Type</div>
                    <div className="text-white font-semibold">{vehicle.fuel}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Seats</div>
                    <div className="text-white font-semibold">{vehicle.seats}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <span className="text-zinc-400 text-sm">Engine: </span>
                    <span className="text-white font-semibold">{vehicle.engine}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">Power: </span>
                    <span className="text-white font-semibold">{vehicle.power}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-sm">Transmission: </span>
                    <span className="text-white font-semibold">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    <span className="text-zinc-400 text-sm">Location: </span>
                    <span className="text-white font-semibold">{vehicle.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-yellow-500 text-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact Seller</span>
              </button>
              <button className="w-full border-2 border-yellow-500 text-yellow-500 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-black transition-colors">
                Schedule Test Drive
              </button>
              <button className="w-full bg-zinc-800 text-white py-3 rounded-lg font-semibold hover:bg-zinc-700 transition-colors">
                Request Financing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;