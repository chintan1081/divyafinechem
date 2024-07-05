import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import img1 from './images/cc5.webp';
import img2 from './images/cc6.webp';
import img3 from './images/l1.webp';

const products = [
  { name: 'Calcite Powder(Calcium Carbonate Powder)', image: img1, link: '/products/calcite' },
  { name: 'Dolomite Powder', image: img2, link: '/products/dolomite' },
  { name: 'Limestone Powder', image: img3, link: '/products/limestone' }, 
  { name: 'Calcite Powder(Calcium Carbonate Powder)', image: img1, link: '/products/calcite' },
  { name: 'Dolomite Powder', image: img2, link: '/products/dolomite' },
  { name: 'Limestone Powder', image: img3, link: '/products/limestone' },
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-36">
        <div className="text-center mb-12">
        <h2 className="text-orange-500 text-center text-sm font-semibold mb-2">PRODUCTS</h2>
        <h1 className="text-gray-900 text-center text-2xl md:text-4xl font-bold mb-12">EXPLORE OUR PRODUCTS</h1>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="product-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform transition duration-500 ease-in hover:scale-105 ${
              index === 3 ? 'md:col-start-2 lg:col-start-auto' : ''
            }`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <a href={product.link} className="block">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-center font-semibold mb-2 ">
                    <a href={product.link} className="text-orange-500 hover:text-black transition-colors">
                      {product.name}
                    </a>
                  </h3>
                  <div className="text-right">
                    <a href={product.link} className="inline-block">
                      {/* Add your icon or button here */}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductShowcase;
