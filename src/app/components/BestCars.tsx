'use client';

import Image from 'next/image';

const BestCars = () => {
  const cars = [
    {
      name: 'Mercedes-Benz S-Class',
      type: 'Luxury',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1622200758689-95430e8728b8?q=80&w=1000',
    },
    {
      name: 'Audi A7',
      type: 'Premium',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1000',
    }
  ];

  const offers = [
    { code: 'AYP2009', bgColor: 'bg-blue-900' },
    { code: 'AYP2021', bgColor: 'bg-yellow-500' },
    { code: 'AYP2020', bgColor: 'bg-blue-900' },
  ];

  return (
    <>
      {/* Best Cars Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-900 text-lg font-medium mb-2">EXPLORE OUR CARS</h3>
            <h2 className="text-3xl font-bold">The Best Cars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-[300px]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white p-4">
                  <p className="text-sm opacity-80">{car.type} | {car.year}</p>
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Offers Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-900 text-lg font-medium mb-2">OFFERS</h3>
            <h2 className="text-3xl font-bold">Our Trending Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div 
                key={index} 
                className={`${offer.bgColor} rounded-lg p-6 text-white flex items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Use Code:</p>
                    <p className="text-xl font-bold">{offer.code}</p>
                  </div>
                </div>
                <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors duration-200">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestCars; 