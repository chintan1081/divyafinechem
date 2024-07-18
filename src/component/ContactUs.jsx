import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaSkype } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_ww92qbd', // Replace with your EmailJS service ID
      'template_ad40caj', // Replace with your EmailJS template ID
      {
        ...formData,
      },
      'gWUfVvvs_OhNFzNbO' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Form submit successfully!');
      setFormData({firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    }, (error) => {
      console.log('FAILED...', error);
      toast.error('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-600 tracking-wide uppercase">Contact Us</h2>
          <h1 className="mt-2 text-3xl font-extrabold text-orange-500 sm:text-4xl">
          Please feel free to send us an enquiry. We are happy to help you!!!
          </h1>
        </div>

        <div className="mt-16 md:ml-20 rounded-lg h-full grid grid-cols-1 bg-gray-100 gap-0 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="grid bg-white rounded-t-lg  md:rounded-l-lg p-4 px-16 pt-20 pb-28 grid-cols-1 gap-y-6">
            <div className="grid border-black grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full border-1 border-light-black-500 bg-gray-100  shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full border-1 border-light-black-500 bg-gray-100  shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full border-1 border-light-black-500 bg-gray-100  shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full border-1 border-light-black-500 bg-gray-100  shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              required
            ></textarea>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
              
            </div>
          </form>

          <div className="bg-gray-900 rounded-b-lg  md:rounded-r-lg md:w-4/5 text-white pt-20 p-8">
            <h2 className="text-2xl font-bold mb-4">Contact details</h2>
            <p className="mb-8">Supplying India's Industries, Empowering Everyday Life.</p>

            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="mb-8">National Highway No. 14, At. Malana, Malana Road, PALANPUR. (B.K.) N. Guj.</p>

            <h4 className="text-lg font-semibold mb-2">Phone Number</h4>
            <p>+91 9427251077</p>
            <p className="mb-8">+91 9409321584</p>

            <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/kJ4nRgYejDEEkkio/?mibextid=qi2Omg" className="text-white hover:text-indigo-400 mx-2"><FaFacebookF /></a>
            <a href="https://www.instagram.com/divyafinechem?utm_source=qr&igsh=cXJiYXVrMjRkMjMw" className="text-white hover:text-indigo-400 mx-2"><FaInstagram /></a>
            <a href="https://x.com/Divyafinechem?t=0Wnzgybxqe_Pa1CCEx3_8w&s=08" className="text-white hover:text-indigo-400 mx-2"><FaTwitter /></a>
            <a href="/" className="text-white hover:text-indigo-400 mx-2"><FaSkype /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ContactUs;