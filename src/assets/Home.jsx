import React, { useState, useEffect } from 'react';
import f1 from './images/f1.jpg';
import f2 from './images/f2.jpg';
import f3 from './images/f3.jpg';
import f4 from './images/f4.jpg';
import f5 from './images/f5.jpg';
import f6 from './images/f6.jpg';
import f7 from './images/f7.jpg';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [ f1, f2, f3, f4, f5, f6, f7 ]
8
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-100">
    <div className="flex flex-col md:flex-row-reverse md:px-20 min-h-screen bg-gray-100 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-96 md:h-screen bg-gray-100">
        <img
          src={images[currentImageIndex]}
          alt="Digital Agency"
          className="object-cover md:rounded-lg w-full h-full md:w-3/4 md:h-3/4 absolute top-1/2 right-0 transform -translate-y-1/2 md:mr-10"
        />

        {/* Quote Section */}
        <div className="absolute mb-1 z-10 bottom-5 left-6 md:mb-10  md:bottom-24 md:left-26 mb-4 ml-0 bg-indigo-900 text-white p-4 md:p-5 rounded-lg max-w-sm">
          <p className="text-sm md:text-base mt-4">
          "Minerals of Precision, Excellence in Every Grain"
          </p>
          <p className="text-xs md:text-sm text-yellow-400 mt-2 ">
            - Divyafinechem
          </p>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full mt-5 md:w-1/2 relative p-4 md:p-0">
        <div className="md:absolute md:z-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-4/5 text-center md:text-left">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-600">
          WELCOME TO <br className="hidden md:inline" /> <p className="text-3xl md:text-6xl font-bold text-orange-500">Divyafinechem</p> 
          </h1>
          <p className="letter-spacing-tight text-lg px-4 md:text-xl text-gray-600 mt-4 md:mt-8 text-justify">
          The Legacy of 11 years in business, Divyafinechem has been supplying world class calcium carbonate powder (calcite powder), Dolomite powder and limestone powder and its variants to various industries in domestic market and hance having indirect presence in thousands of products we are using in our daily lives across all age groups. It is a matter of pleasure to observe this minor fact that our presence is touching almost every life.
<br /><br />
The company started in one small room with a very big vision of Mr. Nareshbhai Patel. It was his hard work and hunger for innovation and growth, the small room business, grew year after year. Our manufacturing facilities are situated at Palanpur, Gujarat, India. Annual Production Capacity – Approx. 1,10,000 MT of Calcium Carbonate, Dolomite Powder and Limestone Powder. It gives us immense delight to mention about our domestic footprints in the States: Gujarat, Maharashtra, Punjab, Rajasthan, Madhya Pradesh, Tamil Nadu, Uttarpradesh.
          </p>
          <button onClick={handleClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-full mt-4 md:mt-8">
            Get Started
          </button>
        </div>
        
        {/* Background for Left Side (visible only on larger screens) */}
        <div className="hidden md:block bg-gray-100 absolute top-0 left-0 w-full h-full"></div>
      </div>
    </div>
    </div>
  );
};

export default Home;