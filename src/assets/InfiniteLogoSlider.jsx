import React from 'react';
import img1 from './images/c1.jpg';
import img2 from './images/c2.jpg';
import img3 from './images/c3.jpg';
import img4 from './images/c4.jpg';
import img5 from './images/c5.png';
import img6 from './images/c6.jpeg';

const InfiniteLogoSlider = () => {
  const logos = [ img1, img2, img3, img4, img5, img6 ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-36">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 text-center text-sm font-semibold mb-2">OUR</h2>
          <h1 className="text-gray-900 text-center text-2xl md:text-4xl font-bold mb-12">PARTNER</h1>
        </div>
      </div>
      <div className="flex bg-gray-100 items-center justify-center">
        <div className="relative w-full h-[100px] overflow-hidden bg-gray-100">
          <div className="absolute top-0 left-0 w-[200px] h-full z-10 bg-gradient-to-r from-gray-100 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[200px] h-full z-10 bg-gradient-to-l from-gray-100 to-transparent"></div>
          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="w-[250px] h-[100px] flex-shrink-0 bg-gray-100">
                <img 
                  src={logo} 
                  alt="" 
                  className={`w-full h-full object-contain ${index % logos.length === 2 ? 'brightness-110 sepia-[.20] hue-rotate-[350deg] saturate-[2000%]' : ''}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteLogoSlider;
