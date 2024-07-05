import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from './logo.ico';

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', text: 'HOME' },
    { to: '/product', text: 'PRODUCTS' },
    { to: '/about', text: 'ABOUT' },
    { to: '/infrastructure', text: 'INFRASTRUCTURE' },
    { to: '/contact', text: 'CONTACT' },
  ];

  const NavItem = ({ to, text, mobile = false }) => (
    <NavLink
      to={to}
      onClick={mobile ? closeMenu : undefined}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out
        ${mobile ? 'block' : ''}
        ${isActive
          ? 'text-orange-500 bg-gray-800'
          : 'text-gray-100 hover:text-orange-500 hover:bg-gray-800'}`
      }
    >
      {text}
    </NavLink>
  );

  return (
    <nav className="bg-gray-900 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                <img className='h-14 bg-gray-900' src={logo} alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">Divyafinechem</span>
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {navLinks.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
          </div>
          <div className="hidden sm:flex sm:items-center">
            <button onClick={handleClick} className="bg-orange-500 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-orange-600 transition duration-150 ease-in-out">
              Get started
            </button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <NavItem key={link.to} {...link} mobile />
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="px-2">
            <button onClick={handleClick} className="w-full bg-orange-500 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-orange-600 transition duration-150 ease-in-out">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



