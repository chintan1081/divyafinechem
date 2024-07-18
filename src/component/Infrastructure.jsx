import React from 'react';
import img1 from '../assets/images/i1.jpg';
import img2 from '../assets/images/i2.jpg';
import img3 from '../assets/images/i3.jpg';
import img5 from '../assets/images/i5.jpg';
import img6 from '../assets/images/i6.jpg';
import img7 from '../assets/images/i7.jpg';
import img9 from '../assets/images/i9.jpg';
import img10 from '../assets/images/i10.jpg';
import img16 from '../assets/images/i16.jpg';
import img18 from '../assets/images/i18.jpg';
import img19 from '../assets/images/i17.jpg';
import img20 from '../assets/images/i9.jpg';


const images = [img1, img2, img3, img5, img6, img7, img9, img10, img16, img18, img19, img20 ];

const Infrastructure = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-8">Our Infrastructure</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:mx-28  md:ml-36">
        {images.map((img, index) => (
         
              <img key={index} src={img} alt={img} className="my-4 rounded-lg md:w-64 w-64 h-56 " />
       
        
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;