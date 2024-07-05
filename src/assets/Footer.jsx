import React, { useEffect, useState } from 'react';
import logo from './logo.ico';
import { FaFacebookF, FaInstagram, FaTwitter, FaSkype } from 'react-icons/fa';



const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    setCurrentYear(currentDate.getFullYear());
  }, [])
  const quicklinks = [
    { name: 'Home Page', href: 'https://divyafinechem.vercel.app/' },
    { name: 'About Us', href: 'https://divyafinechem.vercel.app/about' },
    { name: 'Products', href: 'https://divyafinechem.vercel.app/product' },
    { name: 'Contact Us', href: 'https://divyafinechem.vercel.app/contact' },
  ];

  const products = [
    { name: 'Calcite Powder', href: '/products/calcite' },
    { name: 'Dolomite Powder', href: '/products/dolomite' },
    { name: 'Limestone Powder', href: '/products/limestone' },
  ];


  return (
    <div className='bg-gray-900'>
      <div className="bg-gray-900 text-white md:mx-36 md:ml-80 ">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-2  md:grid-cols-2 md:grid-cols-3 justify-center">
            <div className='pl-16 md:pl-0 col-span-2 md:col-span-1'>
              <div className="md:mb-8 md:mr-16">
                <img src={logo} className='h-28 w-28' alt="Footer Logo" />
                <p className="mt-4 mb-2">Supplying India's Industries, Empowering Everyday Life.</p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <img src="https://assets-global.website-files.com/64869fe528368cc4e6d0795d/648834bc6cfd3cc8389a0db1_phone.svg" alt="Phone Number" />
                  <a href="tel:+919427251077" className="ml-2">+91 9427251077</a>
                </div>
                <div className="flex items-center">
                  <img src="https://assets-global.website-files.com/64869fe528368cc4e6d0795d/648834bdc8c231cb4c06c9d1_message.svg" alt="Email Address" />
                  <a href="mailto:divyafinechem@gmail.com" className="ml-2">divyafinechem@gmail.com</a>
                </div>
              </div>
            </div>
            {/* <div className='grid justify-between grid-cols-2'> */}
            <FooterLinks title="PRODUCTS" links={products} />
            <FooterLinks title="QUICK LINKS" links={quicklinks} />
            {/* </div> */}
          </div>
        </div>
        <div className='grid md:grid-cols-2 justify-center md:justify-start'>
          <div className="flex justify-center py-4 md:pb-2 bg-gray-900">
            <a href="/" className="text-white hover:text-indigo-400 mx-2"><FaFacebookF /></a>
            <a href="https://www.instagram.com/divyafinechem?utm_source=qr&igsh=cXJiYXVrMjRkMjMw" className="text-white hover:text-indigo-400 mx-2"><FaInstagram /></a>
            <a href="https://x.com/Divyafinechem?t=0Wnzgybxqe_Pa1CCEx3_8w&s=08" className="text-white hover:text-indigo-400 mx-2"><FaTwitter /></a>
            <a href="/" className="text-white hover:text-indigo-400 mx-2"><FaSkype /></a>
          </div>
          <p className='flex justify-center py-4'>©{currentYear} Divyafinechem. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

const FooterLinks = ({ title, links }) => {
  return (
    <div className='pl-16'>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-gray-400">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
