import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-800 py-4 px-8 flex justify-between items-center shadow-lg font-poppins">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="H20 Logo" className="h-12 w-12 mr-4" />
      </Link>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>
      </div>

      {/* Full Navigation for desktop */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-500 transition duration-300">Accueil</Link>
        <Link to="/services" className="hover:text-gray-500 transition duration-300">Services</Link>
        <Link to="/realisations" className="hover:text-gray-500 transition duration-300">Nos Réalisations</Link>
        <Link to="/contact" className="hover:text-gray-500 transition duration-300">Contact</Link>
      </nav>

      {/* Fullscreen menu for mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col items-center space-y-6">
          <Link to="/" onClick={toggleMenu} className="text-white text-2xl">Accueil</Link>
          <Link to="/services" onClick={toggleMenu} className="text-white text-2xl">Services</Link>
          <Link to="/realisations" onClick={toggleMenu} className="text-white text-2xl">Nos Réalisations</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-white text-2xl">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
