'use client';

import Image from 'next/image';
import { useState } from 'react';
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
    <div
      className="relative"
      style={{
        backgroundImage: `url(${home1.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left section - Text content */}
          <div className="md:col-span-6 z-10 pt-8">
            <div className="transition-all duration-500 transform">
              {/* Slide 1 Title & Subtitle */}
              {currentSlide === 0 ? (
                <>
                  <h2
                    className="text-3xl md:text-4xl font-normal mb-2 text-black"
                    style={{
                      fontFamily: 'Outfit',
                      fontWeight: 300,
                      fontSize: 30,
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#000000',
                    }}
                  >
                    Get the Best
                  </h2>
                  <div className="leading-none">
                    <span
                      className="block text-blue-900 font-bold"
                      style={{
                        fontFamily: 'Protest Riot',
                        fontWeight: 400,
                        fontSize: 60,
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#084282',
                      }}
                    >
                      CAR FOR
                    </span>
                    <span
                      className="block text-blue-900 font-bold"
                      style={{
                        fontFamily: 'Protest Riot',
                        fontWeight: 400,
                        fontSize: 160,
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#084282',
                      }}
                    >
                      RENT!
                    </span>
                  </div>
                  <div className="mt-4 mb-6">
                    <span
                      className="inline-block text-blue-900 font-semibold text-lg md:text-xl tracking-wide"
                      style={{
                        fontFamily: 'Outfit',
                        fontWeight: 500,
                        fontSize: 20,
                        lineHeight: '100%',
                        letterSpacing: '10%',
                        borderBottom: '4px solid #FFD700',
                        paddingBottom: '2px',
                      }}
                    >
                      Make your ride better!
                    </span>
                  </div>
                  <p
                    className="text-black text-lg mt-4 mb-8 max-w-xl"
                    style={{
                      fontFamily: 'Outfit',
                      fontWeight: 300,
                      fontSize: 20,
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      textAlign: 'justify',
                      color: '#000000',
                    }}
                  >
                    Donate Aid Society is the largest global crowdfunding community connecting nonprofits, largest globa
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-5xl font-bold text-blue-900 mb-2">
                    {slides[currentSlide].title}
                  </h1>
                  <h1 className="text-7xl font-bold text-blue-900 mb-4">
                    {slides[currentSlide].subtitle}
                  </h1>
                  <p className="text-gray-600 mb-8 max-w-md">
                    {slides[currentSlide].description}
                  </p>
                </>
              )}
              <button  style={{ backgroundColor: '#084282' }} className=" text-white px-8 py-3 rounded-full hover:bg-blue-800 flex items-center space-x-2 text-lg font-medium">
                <span
                  style={{
                    fontFamily: 'Outfit',
                    fontWeight: 500,
                    fontSize: 24,
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#FFFFFF',
                  }}
                >
                  Book Now
                </span>
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
                  type="button"
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
                    src={typeof slide.image === 'string' ? slide.image : slide.image.src}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ))}

              {/* 10% OFF tag */}
              <div
                className="absolute top-[-43px] right-[108px] text-center py-3 px-6 flex flex-col items-end"
                style={{ minWidth: '170px' }}
              >
                <span
                  className="text-white font-bold tracking-wide leading-none"
                  style={{
                    fontFamily: 'Rajdhani, Montserrat, Arial, sans-serif',
                    fontWeight: 700,
                    fontSize: '55px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  }}
                >
                  Get 10%
                </span>
                <span
                  className="text-yellow-400 font-extrabold"
                  style={{
                    fontFamily: 'Protest Strike, sans-serif',
                    fontWeight: 400,
                    fontSize: '120px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#F4BF2D',
                  }}
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-xl p-8 mt-8 -mb-24 relative z-20">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label
              className="block text-sm font-medium text-gray-700"
              style={{
                fontFamily: 'Outfit',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'justify',
                color: '#000000',
              }}
              >
              Pick Up Location
              </label>
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
              <label
              className="block text-sm font-medium text-gray-700"
              style={{
                fontFamily: 'Outfit',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'justify',
                color: '#000000',
              }}
              >
              Drop Location
              </label>
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
              <label
              className="block text-sm font-medium text-gray-700"
              style={{
                fontFamily: 'Outfit',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'justify',
                color: '#000000',
              }}
              >
              Pick Up Date
              </label>
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
                  className="w-full text-white px-6 py-2.5 rounded-lg transition-colors duration-200 font-medium"
                  style={{ backgroundColor: '#084282' }}
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