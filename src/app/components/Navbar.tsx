'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#features', id: 'features' }, // Assuming Features acts as Services
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' }, // Assuming HowItWorks can be FAQ/How
    { name: 'Best Cars', href: '#best-cars', id: 'best-cars' } // Assuming Best Cars section exists
    // Add Contact Us section later if needed
  ];

  // Function for smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 80; // Adjust offset for sticky navbar height (h-20)
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      window.history.pushState(null, "", `#${targetId}`);
      setActiveSection(targetId);
      setIsOpen(false); // Close mobile menu on click
    }
  };

  // Effect to update active section on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      let currentSection = 'home';
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section top is near the navbar bottom
          if (rect.top >= 80 && rect.top <= window.innerHeight / 2) {
             currentSection = item.id;
          // If no section is near the top, check if it's at the very top
          } else if (item.id === 'home' && window.pageYOffset < window.innerHeight / 3) {
             currentSection = 'home';
          }
        }
      });
      // Fallback if scrolled past everything
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
          const lastItem = navItems[navItems.length -1];
          if(document.getElementById(lastItem.id)) currentSection = lastItem.id;
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    handleScrollEvent(); // Set initial active section

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  return (
    <nav className="bg-white py-0 fixed top-0 left-0 right-0 z-50 shadow-sm h-20 flex items-center w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-3xl font-bold text-blue-900">
              Rento
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 h-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={`flex items-center justify-center px-5 py-2 text-lg font-medium transition-all duration-200 relative h-14 rounded-xl ${
                    isActive
                      ? 'bg-blue-900 text-white border-b-4 border-yellow-500' // Blue bg, white text, rounded, yellow bottom border
                      : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50' // Standard hover
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Login/Register Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login" // Keep as page link or change to #login if it's a section
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
          className={`md:hidden transition-all duration-300 ease-in-out absolute top-full left-0 right-0 bg-white shadow-md ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-blue-900 text-white' // Simple active style for mobile
                      : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
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