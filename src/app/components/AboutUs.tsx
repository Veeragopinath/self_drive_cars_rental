'use client';

import Image from 'next/image';

const AboutUs = () => {
  const features = [
    'Service with Passion',
    'Reliability and Quality',
    'We\'re Your Travel Companion'
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left image */}
          <div className="md:col-span-5">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000"
                alt="Luxury Car"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right content */}
          <div className="md:col-span-7">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                About Us
              </h2>
              <p className="text-gray-600 mb-6">
                Since our inception fueled by a passion for automobiles, we've been dedicated to delivering the best at every turn. 
                We prioritize understanding the needs and expectations of car enthusiasts.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-blue-900 rounded-sm flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-blue-900 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-sm font-medium">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 