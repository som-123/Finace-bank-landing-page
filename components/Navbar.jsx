"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Navbar w-full flex flex-wrap justify-between px-4 md:px-12 lg:px-32 py-6">
      <div className="NavLeft flex items-center justify-between w-full md:w-auto">
        <img src="/images/logo.png" alt="Logo" className="w-24 md:w-auto" />
        <ul className="hidden md:flex flex-row gap-4 mt-0 ml-6">
          <li className="text-[#ff5455] font-bold">Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:items-center w-full md:w-auto`}>
        <ul className="flex flex-col md:flex-row gap-2 md:hidden mt-4 md:mt-0 md:ml-6">
          <li className="text-[#ff5455] font-bold">Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
        <div className="NavRight mt-4 md:mt-0 md:ml-6">
          <button className="bg-black text-white px-8 py-3 rounded">Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
