// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-bold">Vedic Technologies</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#services" className="hover:text-gray-200">Services</a>
          <a href="#timeline" className="hover:text-gray-200">Timeline</a>
          <a href="#pricing" className="hover:text-gray-200">Pricing</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-blue-700">
          <a href="#services" className="block px-4 py-2 hover:bg-blue-800">Services</a>
          <a href="#timeline" className="block px-4 py-2 hover:bg-blue-800">Timeline</a>
          <a href="#pricing" className="block px-4 py-2 hover:bg-blue-800">Pricing</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-800">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
