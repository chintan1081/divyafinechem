import React from 'react';
import img1 from '../assets/images/p1.jpg';
import img2 from '../assets/images/p2.jpg';
import img3 from '../assets/images/p3.jpg';
import img4 from '../assets/images/p4.jpg';
import img5 from '../assets/images/p5.jpg';
import img6 from '../assets/images/p6.jpg';
import img7 from '../assets/images/p7.jpg';
import img8 from '../assets/images/p8.jpg';
import img9 from '../assets/images/p9.jpg';
import img10 from '../assets/images/p10.jpg';
import img11 from '../assets/images/p11.jpg';
import img12 from '../assets/images/p12.jpg';
import img13 from '../assets/images/p13.jpg';
import img14 from '../assets/images/p14.jpg';
import img15 from '../assets/images/p15.jpg';
import img16 from '../assets/images/p16.jpg';
import img17 from '../assets/images/p17.jpg';
import img18 from '../assets/images/p18.jpg';
import img19 from '../assets/images/p19.jpg';
import img20 from '../assets/images/p20.jpg';
import img21 from '../assets/images/p21.jpg';
import img22 from '../assets/images/p22.jpg';
import img23 from '../assets/images/p23.jpg';
import img24 from '../assets/images/p24.jpg';



const ton1 = [img1, img2, img3, img4, img5, img6];
const ton125 = [img7, img8, img9, img10, img11, img12];
const kgs50 = [img13, img14, img15, img16, img17, img18];
const kgs25 = [img19, img20, img21, img22, img23, img24];
const Packaging = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-2xl text-center md:text-2xl font-bold text-black-600">
                OUR PACKAGING
            </h1>
            <div className="text-center mb-12">
                <h1 className="text-orange-500 text-center text-2xl md:text-4xl font-bold mb-12 mt-8">1.25-Ton Packaging</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:mx-28  md:ml-36">
                {ton125.map((img, index) => (

                    <img key={index} src={img} alt={img} className="my-4 rounded-lg md:w-64 w-64 h-48 " />


                ))}
            </div>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            <div className="text-center mb-12">
                <h1 className="text-orange-500 text-center text-2xl md:text-4xl font-bold mb-12 mt-12">1-Ton Packaging</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:mx-28  md:ml-36">
                {ton1.map((img, index) => (

                    <img key={index} src={img} alt={img} className="my-4 rounded-lg md:w-64 w-64 h-48 " />


                ))}
            </div>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            <div className="text-center mb-12">
                <h1 className="text-orange-500 text-center text-2xl md:text-4xl font-bold mb-12 mt-12">50-Kgs Packaging</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:mx-28  md:ml-36">
                {kgs50.map((img, index) => (

                    <img key={index} src={img} alt={img} className="my-4 rounded-lg md:w-64 w-64 h-48 " />


                ))}
            </div>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            <div className="text-center mb-12">
                <h1 className="text-orange-500 text-center text-2xl md:text-4xl font-bold mb-12 mt-12">25-Kgs Packaging</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:mx-28  md:ml-36">
                {kgs25.map((img, index) => (

                    <img key={index} src={img} alt={img} className="my-4 rounded-lg md:w-64 w-64 h-48 " />


                ))}
            </div>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Packaging;