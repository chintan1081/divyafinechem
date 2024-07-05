import React from 'react';
import img1 from './images/f6.jpg';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
  };

  const values = [
    { icon: '💡', title: 'Timely Deliveries', description: 'Innovative tech startup pushing boundaries, creativity, and revolutionizing industries through forward-thinking ideas.' },
    { icon: '⚡', title: 'Quality Products', description: 'Agile tech startup committed to rapid adaptation, flexibility, and problem-solving in the ever-changing tech landscape.' },
    { icon: '🔍', title: 'Strong Infrastructure', description: 'Passionate tech startup dedicated to innovating and disrupting industries through cutting-edge technology and bold ideas.' },
    { icon: '🤝', title: 'Reasonable Prices', description: 'Collaborative tech startup fostering partnerships, and synergy to drive collective success and deliver impactful solutions.' },
    { icon: '👥', title: 'Talented Team', description: 'Customer-centric tech startup prioritizing user needs, building lasting relationships through exceptional service.' },
    { icon: '🔓', title: 'Professionals Works', description: 'Transparent tech startup committed to openness, honesty, and accountability, ensuring trust and integrity in all our operations.' },
  ];
  
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row-reverse md:px-20 min-h-screen bg-gray-100 overflow-hidden">
        {/* Text Content */}
        <div className="w-full mt-5 md:w-1/2 relative p-4 md:p-0 order-1 md:order-2">
          <div className="md:absolute md:z-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-4/5 text-center md:text-left">
            <h1 className="text-2xl md:text-2xl font-bold text-gray-500">
              About Us<br className="hidden md:inline" /> 
              <p className="text-3xl md:text-6xl font-bold text-orange-500">About our company</p>
            </h1>
            <p className="text-lg px-4 md:text-xl text-gray-600 mt-4 md:mt-8 text-justify">
            Divyafinechem, in business for 11 years, supplies high-quality calcium carbonate, dolomite, and limestone powders to various industries in India. Our products indirectly touch countless lives through their presence in everyday items. Founded by Mr. Nareshbhai Patel in a small room, the company has grown significantly due to his vision and innovation. Our manufacturing facilities in Palanpur, Gujarat, have an annual production capacity of approximately 110,000 MT. We proudly serve customers across several Indian states, including Gujarat, Maharashtra, Punjab, Rajasthan, Madhya Pradesh, Tamil Nadu, and Uttar Pradesh.
            </p>
            <button onClick={handleClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-full mt-4 md:mt-8">
              Get Started
            </button>
          </div>

          {/* Background for Left Side (visible only on larger screens) */}
          <div className="hidden md:block bg-gray-100 absolute top-0 left-0 w-full h-full"></div>
        </div>

        {/* Image Section */}
        <div className="relative rounded-lg  w-full md:w-1/2 h-96 md:h-screen bg-gray-100 order-2 md:order-1 mt-8 md:mt-0">
          <img
            src={img1}
            alt="Digital Agency"
            className="object-cover rounded-lg w-full h-full md:w-3/4 md:h-3/4 absolute top-1/2 right-0 transform -translate-y-1/2 md:mr-10"
          />
          
          {/* Quote Section */}
          <div className="absolute bottom-3 left-20 md:bottom-32 md:left-36 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex space-x-8">
            <div>
              <p className="text-3xl font-bold dark:text-white">11+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Years of experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold dark:text-white">75+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-16 md:px-28">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">WHY CHOOSE US</h2>
        <p className="text-gray-600 mt-4">Our efficient client service and commitment to transparency have made us a leader in the market.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} 
               className="bg-white p-4 rounded-lg shadow-md hover:bg-orange-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <div className="flex justify-center items-center w-16 h-16 bg-purple-200 rounded-full mb-6 mx-auto">
              <span className="text-3xl">{value.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 ">{value.title}</h3>
            {/* <p className="text-gray-600 text-center hover:text-white">{value.description}</p> */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AboutUs;




