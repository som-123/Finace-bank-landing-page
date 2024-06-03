"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('');

  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentRoute(pathname);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Navbar w-full flex flex-wrap justify-between px-4 md:px-12 lg:px-32 py-6">
      <div className="NavLeft flex items-center justify-between w-full md:w-auto">
        <img src="/images/logo.png" alt="Logo" className="w-24 md:w-auto" />
        <ul className="hidden md:flex flex-row gap-4 mt-0 ml-6">
          <li className={`${currentRoute === '/' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={`${currentRoute === '/about' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={`${currentRoute === '/pricing' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/pricing'>Pricing</Link>
          </li>
          <li className={`${currentRoute === '/features' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/features'>Features</Link>
          </li>
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
          <li className={`${currentRoute === '/' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={`${currentRoute === '/about' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={`${currentRoute === '/pricing' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/pricing'>Pricing</Link>
          </li>
          <li className={`${currentRoute === '/features' ? 'text-[#ff5455] font-bold' : ''}`}>
            <Link href='/features'>Features</Link>
          </li>
        </ul>
        <div className="NavRight mt-4 md:mt-0 md:ml-6 ">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded" type="button">Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
