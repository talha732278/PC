import React from 'react';
import { Link } from 'react-router-dom';
import VehicleModal from './VehicleModal';
import { Eye, Heart, Calendar, Gauge, Fuel, Users } from 'lucide-react';

const FeaturedVehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = React.useState<typeof featuredVehicles[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const featuredVehicles = [
    {
      id: 1,
      image: 'data:image/jpeg;base64,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',
      brand: 'Porsche',
      model: '911 Turbo S',
      year: 2023,
      price: 'AED 850,000',
      mileage: '2,500 km',
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: 2,
      isNew: true,
      featured: true
    },
    {
      id: 2,
      image: 'data:image/jpeg;base64,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',
      brand: 'Aston Martin',
      model: 'DB11',
      year: 2022,
      price: 'AED 1,200,000',
      mileage: '8,500 km',
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: 4,
      isNew: false,
      featured: true
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
      brand: 'Bentley',
      model: 'Continental GT',
      year: 2023,
      price: 'AED 950,000',
      mileage: '1,200 km',
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: 4,
      isNew: true,
      featured: true
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYo7Y3slRsdKzD990PiDsc7zaWdIaY6a8MtA&s',
      brand: 'Ferrari',
      model: 'F8 Tributo',
      year: 2022,
      price: 'AED 1,650,000',
      mileage: '3,800 km',
      fuel: 'Petrol',
      transmission: 'Automatic',
      seats: 2,
      isNew: false,
      featured: true
    }
  ];

  const handleViewDetails = (vehicle: typeof featuredVehicles[0]) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  return (
    <section id="inventory" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-yellow-500">Collection</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Discover our handpicked selection of premium vehicles, each representing the pinnacle of automotive excellence and luxury craftsmanship.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-black rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 shadow-2xl">
              {/* Vehicle Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
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
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-black/70 text-white p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-black/70 text-white p-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-yellow-500">{vehicle.price}</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <p className="text-zinc-400 font-medium">{vehicle.year}</p>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-zinc-300">
                    <Gauge className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-300">
                    <Fuel className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-300">
                    <Calendar className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-300">
                    <Users className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{vehicle.seats} Seats</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleViewDetails(vehicle)}
                    className="flex-1 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    View Details
                  </button>
                  <button className="flex-1 border border-zinc-600 text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors">
                    Schedule Test Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/inventory"
            className="inline-block bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-black transition-colors"
          >
            View Complete Inventory
          </Link>
        </div>
      </div>

    
    </section>
  );
};

export default FeaturedVehicles;