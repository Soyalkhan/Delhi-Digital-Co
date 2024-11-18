import React, { useState } from 'react';
import ddcLogo from '../assets/ddc logo 2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header className="pb-6 bg-white lg:pb-0">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* lg+ */}
    <nav className="flex items-center justify-between h-16 lg:h-20">
      <div className="flex-shrink-0">
       
          <Link to="/">
          <img
            className="w-40 sm:w-48 lg:w-72" // Adjusted sizes for different screen sizes
            src={ddcLogo}
            alt="Logo"/>
      </Link>
      </div>

      <button
        type="button"
        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
        )}
      </button>

      <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
        
        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Services</a>
        <a href="https://in.linkedin.com/company/delhidigitalco" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Brands</a>
      </div>
      <Link to="https://wa.me/919205110208">
      <p
        href="#"
        className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-blue-600 transition-all duration-600 border border-blue-600 lg:inline-flex hover:bg-blue-700 hover:text-white hover:focus:text-white"
      >
        Let's Talk
      </p>
      </Link>
    </nav>

    {/* xs to lg */}
    {isMenuOpen && (
      <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
        <div className="flow-root">
          <div className="flex flex-col px-6 -my-2 space-y-1">
            <a href="#" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Features</a>
            <a href="#" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Services</a>
            <a href="#" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
            <a href="#brands" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Brands</a>
          </div>
        </div>

        <div className="px-6 mt-6">
          <a
            href="#"
            className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
          >
            Get started now
          </a>
        </div>
      </nav>
    )}
  </div>
</header>

  );
};

export default Header;
