'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import home1 from '../assets/home-1.svg';
import car1 from '../assets/car1.svg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    dropDate: '',
  });

  const slides = [
    {
      title: "Get the Best",
      subtitle: "CAR FOR RENT!",
      description: "Drive your dreams with the largest global car rental service. Experience luxury and comfort at your pace.",
      image: car1,
      alt: "Mercedes Luxury Car"
    },
    {
      title: "Premium Fleet",
      subtitle: "LUXURY CARS",
      description: "Choose from our exclusive collection of premium vehicles. Experience unmatched comfort and style.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
      alt: "Luxury Sports Car"
    },
    {
      title: "Best Deals",
      subtitle: "SPECIAL OFFERS",
      description: "Get amazing deals on luxury car rentals. Book now and save big on your next adventure.",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000",
      alt: "Premium Car"
    }
  ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative"  style={{
      backgroundImage: `url(${home1.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left section - Text content */}
          <div className="md:col-span-6 z-10 pt-8">
            <div className="transition-all duration-500 transform">
              <h1 className="text-5xl font-bold text-blue-900 mb-2">
                {slides[currentSlide].title}
              </h1>
              <h1 className="text-7xl font-bold text-blue-900 mb-4">
                {slides[currentSlide].subtitle}
              </h1>
              <p className="text-gray-600 mb-8 max-w-md">
                {slides[currentSlide].description}
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 flex items-center space-x-2 text-lg font-medium">
                <span>Book Now</span>
                <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center ml-2">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
            
            {/* Pagination dots */}
            <div className="flex mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-900 scale-110' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right section - Car image with offer */}
          <div className="md:col-span-6 relative">
            <div className="relative h-[400px] md:h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ))}
              
              {/* 10% OFF tag */}
              <div className="absolute top-0 right-0 bg-blue-900 text-center py-4 px-6">
                <p className="text-lg font-bold text-yellow-400">Get 10%</p>
                <p className="text-4xl font-bold text-yellow-400 leading-tight">OFF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-xl p-8 mt-8 -mb-24 relative z-20">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Pick Up Location</label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                placeholder="Enter city or airport"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Drop Location</label>
              <input
                type="text"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                placeholder="Enter city or airport"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Pick Up Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero; 