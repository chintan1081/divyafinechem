import React from 'react';

const industries = [
  { name: 'SOAP & DETERGENTS', icon: '🧼' },
  { name: 'AGRICULTURE', icon: '🌱' },
  { name: 'COSMETICS', icon: '💄' },
  { name: 'CONCRETE AND GENERAL', icon: '🏗️' },
  { name: 'CERAMICS & REFRACTORY', icon: '🏺' },
  { name: 'METALS', icon: '🔧' },
  { name: 'CHEMICAL INJECTION', icon: '💉' },
  { name: 'PETROLEUM & OIL DRILLING', icon: '🛢️' },
];

const IndustriesCatered = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 md:px-36">
        <h2 className="text-orange-500 text-center text-sm font-semibold mb-2">INDUSTRIES</h2>
        <h1 className="text-white text-center text-2xl md:text-4xl font-bold mb-12">INDUSTRIES WE CATER TO</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center relative">
              <div className="text-indigo-500 text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-white text-sm font-semibold">{industry.name}</h3>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500 transform rotate-45 translate-x-2 translate-y-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesCatered;