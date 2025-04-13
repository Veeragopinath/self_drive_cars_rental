'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              CarRent
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors duration-200 ${
                  index === 0 ? 'bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login/Register Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors duration-200"
            >
              Login/Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-blue-700 hover:bg-blue-50 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  index === 0
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block w-full text-center bg-blue-900 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-800 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 