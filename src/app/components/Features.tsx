'use client';

const Features = () => {
  const features = [
    {
      title: "Easy & Fast Booking",
      description: "Our aim is to provide seamless and quick booking experience, ensuring you get your dream car with just a few clicks.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-900"
    },
    {
      title: "Many Pickup Locations",
      description: "Our aim is to provide convenient pickup locations across the city, making it easier for you to start your journey.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-500"
    },
    {
      title: "Customer Satisfaction",
      description: "Our aim is to provide exceptional service and support, ensuring 100% customer satisfaction with every rental.",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-900"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '55px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: '#000000'
            }}
          >
            Why Choose Our Service?
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              fontSize: '20px',
              lineHeight: '34px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#808080'
            }}
          >
            Since our inception fueled by a passion for automobiles, we&apos;ve been dedicated to delivering
            the best at every turn. We prioritize understanding the needs and expectations of car enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bgColor} p-8 rounded-lg text-center group hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex justify-center mb-6">
                <div className={`w-14 h-14 ${feature.iconBg} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#000000'
                }}
                className="mb-4"
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 200,
                  fontSize: '16px',
                  lineHeight: '28px',
                  letterSpacing: '0%',
                  textAlign: 'justify',
                  color: '#000000'
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;