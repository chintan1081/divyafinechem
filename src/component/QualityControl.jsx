import React from 'react';
import img1 from '../assets/images/x1.jpeg';
import img2 from '../assets/images/x2.jpeg';
import img3 from '../assets/images/x3.webp';

const images = [img1, img2, img3 ];

const QualityControl = () => {
    return (
        <>
            <div className="container mx-auto px-4 pt-12 pb-8 bg-gray-100">
                <div className="text-center">
                    <h1 className="text-orange-500 text-center text-2xl md:text-4xl font-bold ">Quality Control</h1>
                </div>
            </div>
            <div className='px-6 md:px-60 bg-gray-100'>
                <div >
                    <p className="text-lg md:text-justify mb-4">DivyaFinechem is committed to delivering superior quality minerals that consistently meet and exceed customer expectations.
                        Our unwavering dedication to excellence is reflected in our rigorous quality control processes, which encompass every stage of production, from sourcing raw materials to the final product.</p>
                    <p className="text-lg  md:text-justify">To ensure the highest product integrity, we have invested in world-class testing equipment and laboratories. Our skilled quality control team employs advanced analytical techniques to conduct comprehensive evaluations.</p>

                </div>
            </div>
            <div className='px-4 md:px-60 bg-gray-100'>
                <br />
                <div className="pb-6">
                    <h2 className="text-lg md:text-2xl font-bold inline-block border-b-4 rounded-sm border-gray-700 text-orange-500 mb-2">Comprehensive Quality Control Measures</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <span className="font-bold text-lg text-gray-900 dark:text-white">Stringent Raw Material Selection: </span>
                            We meticulously source our raw materials from trusted suppliers, subjecting them to stringent quality checks to guarantee purity and consistency.
                        </li>
                        <li>
                            <span className="font-bold text-lg text-gray-900 dark:text-white">In-Process Quality Monitoring: </span>
                            Our production processes are closely monitored through rigorous quality control checkpoints to prevent defects and deviations from specifications.


                        </li>
                        <li>
                            <span className="font-bold text-lg text-gray-900 dark:text-white">Advanced Quality Testing: </span><br />
                            We perform a wide array of tests, including but not limited to:
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Particle Size Analysis</li>
                                <li>Oil Absorption</li>
                                <li>ph & Bulk Density</li>
                                <li>Chemical Analysis</li>
                                <li>Whiteness & Brightness</li>
                                <li>Uniformity of Coating</li>
                                <li>Moisture Analysis</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="pb-6">
                    <h2 className="text-lg md:text-2xl font-bold inline-block border-b-4 rounded-sm border-gray-700 text-orange-500 mb-2">Customer Focus</h2>
                    <p className="text-lg md:text-justify">Our commitment to customer satisfaction drives our quality initiatives. We collaborate closely with our clients to understand their unique needs and deliver products that perfectly align with their specifications.

By adhering to the highest quality standards and employing cutting-edge testing methodologies, DivyaFinechem reaffirms its position as a trusted provider of premium mineral products.</p>
           </div>
            </div>

            <div className="container mx-auto px-4  md:px-60 bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center w-auto h-30 mb-4 mx-auto">
              <img src={img} alt="Cdscsdc" className=" h-full w-full object-cover" />
            </div>
        ))}
      </div>
    </div>

        </>
    );
};

export default QualityControl;



