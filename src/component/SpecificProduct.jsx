import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import img1 from '../assets/images/cc5.webp';
import img2 from '../assets/images/cc10.jpeg';
import img3 from '../assets/images/cc0.jpg';
import img4 from '../assets/images/cc9.jpeg';

import img5 from '../assets/images/cc6.webp';
import img6 from '../assets/images/d2.jpg';
import img7 from '../assets/images/d3.jpg';
import img8 from '../assets/images/d14.jpeg';

import img9 from '../assets/images/l1.webp';
import img10 from '../assets/images/l3.jpeg';
import img11 from '../assets/images/l4.jpeg';
import img12 from '../assets/images/l2.jpeg';

import { useParams } from 'react-router-dom';

const products = [
    {
        name: 'calcite', title: "CALCITE / CALCIUM CARBONATE", image: [img1, img3, img4, img2],
        description: 'Calcite, also known as calcium carbonate (CaCO₃), is the most abundant mineral on Earth. We at Divyafinechem are a leading manufacturer and supplier of high-quality calcite powder in India. This versatile mineral plays a crucial role in various industries due to its unique properties. Divyafinechem is a leading manufacturer and supplier of high-quality calcite powder in India.At Divyafinechem, we are committed to providing our customers with premium limestone powder that meets the highest quality standards. Our extensive experience and dedication to innovation ensure consistent performance and reliable supply.',
        table: [
            { label: 'SiO2', value: '0.25 to 3.00' },
            { label: 'Al2O3', value: '0.40 to 0.60' },
            { label: 'Fe2O3', value: '0.010 to 0.20' },
            { label: 'TiO2', value: 'Trece' },
            { label: 'CaO', value: '52.00 to 55.5' },
            { label: 'MgO', value: '0.60 to 2.00' },
            { label: 'Na2O', value: '0.10 to 0.30' },
            { label: 'K2O', value: '0.10 to 0.15' },
            { label: 'LoI', value: '40.00 to 45.00' },
            { label: 'CaCO3', value: '93.00 to 98.00' },
            { label: 'Whitener', value: '92.00 to 97.00' },
            { label: 'Brightener', value: '89.00 to 95.00' },
        ],
        uses: [
            "Paints & Coatings (filler, pigment extender)",
            "Paper & Printing (filler, brightness enhancer)",
            "Pipes & PVC products (filler, reinforcement)",
            "Calcium Carbonate for Cables (filler, flame retardant)",
            "Calcium Carbonate for Film (filler, opacity enhancer)",
            "Calcium Carbonate for Non-Woven fabrics (filler, bulking agent)",
            "Calcium Carbonate for Adhesives (filler, viscosity control)",
            "Calcium Carbonate for Rubber (filler, reinforcing agent)",
            "Oil & Gas Drilling (fluid additive, wellbore control)",
            "Calcium Carbonate for Talc Powder/Talcum Powder (bulking agent, anti-caking agent)",
            "Calcium Carbonate for Masterbatch (filler, color carrier)",
            "Calcium Carbonate for Glass (fluxing agent, strength enhancer)",
        ]
    },
    {
        name: 'dolomite', title: "DOLOMITE", image: [img5, img6, img7, img8],
        description: 'Dolomite is Carbonate of Calcium and Magnesium “CaMg(CO3)2”. We are recognized as one of the prominent Dolomite Rock Powder Manufacturers and Suppliers in India. The Dolomite Powder is extensively used in Iron & Steel Industries due to its strength and compatibility in process of purifying Iron & Steel.At Divyafinechem, we are committed to providing our customers with the highest quality dolomite powder to meet their specific needs. Our expertise and dedication ensure consistent performance and reliable supply.',
        table: [
            { label: 'SiO2', value: '0.25 to 2.00' },
            { label: 'Al2O3', value: '0.30 to 0.50' },
            { label: 'Fe2O3', value: '0.030 to 0.09' },
            { label: 'CaO', value: '30.00 to 33.00' },
            { label: 'MgO', value: '20.00 to 22.00' },
            { label: 'K2O', value: '0.06 to 0.070' },
            { label: 'Na2O', value: '0.05 to 0.060' },
            { label: 'LoI', value: '43.00 to 45.00' },
            { label: 'Whitener', value: '92.00 to 98.00' },
            { label: 'Brightener', value: '89.00 to 95.00' },
        ],
        uses: [
            "Construction Materials (e.g., cement, bricks)",
            "Glass & Ceramics (improves heat resistance)",
            "Agriculture (soil amendment, magnesium source)",
            "Refractories (high-temperature applications)",
            "Flux in Metal Refining (removes impurities)",
            "Pharmaceuticals & Cosmetics (filler, bulking agent)",
            "Environmental Remediation (neutralizes acidity)",
            "Rubber & Plastics (reinforcing agent, filler)",
            "Paints & Coatings (extender pigment)",
            "Fire Retardants (improves flame resistance)",
        ]
    },
    {
        name: 'limestone', title: "LIMESTONE", image: [img9, img10, img11, img12],
        description: 'Limestone, a naturally occurring sedimentary rock composed primarily of calcium carbonate (CaCO3), is a vital resource for numerous industries. By choosing Divyafinechem as your limestone powder supplier, you can be assured of consistent quality, reliable supply, and technical expertise to meet your specific needs.',
        table: [
            { label: 'SiO2', value: '0.50 to 2.00' },
            { label: 'Al2O3', value: '0.02 to 0.10' },
            { label: 'Fe2O3', value: '0.01 to 0.20' },
            { label: 'CaO', value: '53.00 to 56.00' },
            { label: 'MgO', value: '0.50 to 1.50' },
            { label: 'LoI', value: '42.00 to 45.00' },
            { label: 'CaCO3', value: '95.00 to 98.50' },
            { label: 'MgCO3', value: '0.70 to 1.50' },
            { label: 'Whitener', value: '65.00 to 80.00' },
            { label: 'Brightener', value: '63.00 to 78.00' },
        ],
        uses: [
            "Construction Materials (cement, concrete, etc.)",
            "Paints & Coatings (as a filler and extender)",
            "Paper & Printing (as a filler and coating material)",
            "Agriculture (as a soil amendment to adjust pH)",
            "Plastics (as a filler and reinforcing agent)",
            "Glass & Ceramics (as a fluxing agent)",
            "Rubber & Adhesives (as a filler and extender)",
            "Water Treatment (as a filtering and neutralizing agent)",
            "Livestock Feed (as a calcium supplement)",
        ]
    },
];

const SpecificProduct = () => {
    const { productId } = useParams();
    const product = products.find((item) => item.name === productId);

    return (
        <>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 md:px-36">
                    <div className="text-center mb-12">
                        <h2 className="text-gray-500 text-center text-sm font-semibold mb-2">PRODUCT</h2>
                        <h1 className="text-orange-500 text-center text-2xl md:text-4xl font-bold mb-12">EXPLORE OUR {product.title}</h1>
                    </div>
                    <div className='px-4 md:pl-8 md:pr-8 bg-gray-100'>
                        <div className="pb-6">
                            <p className="text-lg  mb-2 text-justify">{product.description}</p>
                        </div>
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
                        {product.image.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <div className="relative">
                                        <img src={img} alt={index} className="w-full h-64 object-cover" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <div className='pl-4 md:pl-60 bg-gray-100'>
                <h2 className="text-2xl font-bold inline-block border-b-4 rounded-sm border-gray-700 text-orange-500">Specifications of {product.title} </h2>
            </div>
            {/* ---- */}
            <div className='bg-gray-100'>
                <div className="max-w-4xl mx-auto p-4 bg-gary-100 shadow-lg rounded-lg">
                    <div className="overflow-x-auto bg-gary-100 ">
                        <table className="w-full border-collapse bg-gary-100 ">
                            <tbody>
                                {product.table.map((spec, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="py-2 px-4 border border-gray-200 font-medium">{spec.label}</td>
                                        <td className="py-2 px-4 border border-gray-200">{spec.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////////////////////////// */}
            <div className='pl-4 md:pl-60 bg-gray-100'>
                <h2 className="text-2xl font-bold inline-block border-b-4 rounded-sm border-gray-700 text-orange-500 mb-2">Uses of {product.title}</h2>
                <br />
                <div className="pb-6">
                    <ul className="list-disc pl-5 space-y-1">
                        {product.uses.map((uses, index) => (
                            <li key={index}>{uses}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='px-4 md:pl-60 md:pr-60 bg-gray-100'>
                <h2 className="text-2xl font-bold inline-block border-b-4 rounded-sm border-gray-700 text-orange-500 mb-4">Packing of {product.title} </h2>
                <br />
                <div className="pb-6">
                    <p className="text-lg  mb-2 text-justify">Available in 50kg, 1000kg(1ton), 1250 kg</p>
                </div>
            </div>
        </>
    );
};

export default SpecificProduct;

