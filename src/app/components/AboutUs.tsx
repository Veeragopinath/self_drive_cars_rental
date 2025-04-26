'use client';

import Image from 'next/image';
import aboutCar from '../assets/about-car.svg';

const AboutUs = () => {
  const features = [
    'Service with Passion',
    'Reliability and Quality',
    "We're Your Travel Companion",
  ];

  return (
    <div className="py-10 mt-24 bg-white font-outfit">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch bg-gray-50 rounded-2xl overflow-hidden shadow-none">
          {/* Left image */}
          <div className="md:w-1/2 flex-shrink-0">
            <div className="relative h-72 md:h-full w-full">
              <Image
                src={aboutCar}
                alt="Luxury Car"
                fill
                className="object-cover h-full w-full"
                style={{ borderRadius: '20px 0 0 20px' }}
                priority
              />
            </div>
          </div>
          {/* Right content */}
          <div className="md:w-1/2 flex flex-col justify-center px-8 py-10 font-outfit">
            <div>
              <div className="flex items-center mb-6">
                <h2
                  className="mr-4"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 600,
                    fontSize: '36px',
                    lineHeight: '55px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#000000',
                  }}
                >
                  About Us
                </h2>
                <div className="h-1 w-16 bg-blue-900 rounded" />
              </div>
                <p
                className="mb-8 font-outfit"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 300,
                  fontSize: '20px',
                  lineHeight: '34px',
                  letterSpacing: '0%',
                  textAlign: 'justify',
                  color: '#000000',
                }}
                >
                Since our inception fueled by a passion for automobiles, we've been dedicated to delivering the best at every turn. <br />
                We prioritize understanding the needs and expectations of car enthusiasts,
                </p>
              <ul className="space-y-6 mb-8 font-outfit">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center font-outfit"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 300,
                      fontSize: '20px',
                      lineHeight: '40px',
                      letterSpacing: '0%',
                      textAlign: 'justify',
                      color: '#000000',
                    }}
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-blue-900 rounded-md mr-4">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-2 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-lg font-semibold shadow-none font-outfit">
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
