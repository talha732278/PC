import React from 'react';
import Hero from '../components/Hero';
import FeaturedVehicles from '../components/FeaturedVehicles';
import Services from '../components/Services';
import About from '../components/About';


const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedVehicles />
      <Services />
      <About />
      
    </>
  );
};

export default HomePage;