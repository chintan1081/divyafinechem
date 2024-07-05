// import React from 'react'

// const Product = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Product

// import React from 'react';
// import img1 from './images/img1.jpg';
// import img2 from './images/img2.jpg';
// import img3 from './images/img3.jpg';
// import img4 from './images/img4.jpg';

// const values = [
//   {
//     imageUrl: img1,
//     title: 'Innovation',
//     description: 'Innovative tech startup pushing boundaries, creativity, and revolutionizing industries through forward-thinking ideas.',
//   },
//   {
//     imageUrl: img1,
//     title: 'Agility',
//     description: 'Agile tech startup committed to rapid adaptation, flexibility, and problem-solving in the ever-changing tech landscape.',
//   },
//   {
//     imageUrl: img1,
//     title: 'Passionate',
//     description: 'Passionate tech startup dedicated to innovating and disrupting industries through cutting-edge technology and bold ideas.',
//   },
//   {
//     imageUrl: img1,
//     title: 'Collaboration',
//     description: 'Collaborative tech startup fostering partnerships, and synergy to drive collective success and deliver impactful solutions.',
//   },

// ];

// const OurValues = () => {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h2 className="text-center text-4xl font-bold text-orange-500 mb-8">WHY CHOOSE US</h2>
//       <h2 className="text-center text-4xl font-bold mb-12">Our Values</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {values.map((value, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform transition duration-500 ease-in hover:scale-105"
//           >
//             <div className="flex justify-center items-center w-30 h-30 mb-4 mx-auto">
//               <img src={value.imageUrl} alt={value.title} className=" h-full w-full object-cover" />
//             </div>
//             <h3 className="text-xl font-semibold text-center mb-2">{value.title}</h3>
//             <p className="text-gray-600 text-center mb-4">{value.description}</p>
//             <div className="text-center">
//               <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurValues;


import React from 'react';
import img1 from '../assets/images/cc5.webp';
import img2 from '../assets/images/cc6.webp';
import img3 from '../assets/images/cropped-l1.webp';


const values = [
  {
    imageUrl: img1,
    title: 'CALCITE / CALCIUM CARBONATE',
    description: 'Innovative tech startup pushing boundaries, creativity, and revolutionizing industries through forward-thinking ideas.',
    link: '/products/calcite'
  },
  {
    imageUrl: img2,
    title: 'DOLOMITE',
    description: 'Agile tech startup committed to rapid adaptation, flexibility, and problem-solving in the ever-changing tech landscape.',
    link: '/products/dolomite'
  },
  {
    imageUrl: img3,
    title: 'LIMESTONE',
    description: 'Passionate tech startup dedicated to innovating and disrupting industries through cutting-edge technology and bold ideas.',
    link: '/products/limestone'
  },
];

const OurValues = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-gray-500 text-center text-lg font-semibold mb-2">Products</h2>
      <h1 className="text-orange-500 text-center text-2xl md:text-4xl font-bold mb-12">EXPLORE OUR PRODUCTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform transition duration-500 ease-in hover:scale-105 ${
              index === 3 ? 'md:col-start-2 lg:col-start-auto' : ''
            }`}
            onClick={() => window.location.href = value.link}
          >
            <div className="flex justify-center items-center w-30 h-30 mb-4 mx-auto">
              <img src={value.imageUrl} alt={value.title} className="h-full w-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{value.title}</h3>
            {/* <p className="text-gray-600 text-center mb-4">{value.description}</p> */}
            <div className="text-center">
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = value.link;
                }}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;