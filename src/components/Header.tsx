import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/stories' },
    { name: 'Our Team', href: '/team' },
    { name: 'Programs', href: '/programs' },
    { name: 'Volunteering', href: '/internship' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Heart className="h-8 w-8 text-red-600" />
              <div className="text-xl font-bold">
                <span className="text-gray-800">G.U.S.</span>
                <span className="text-gray-600 text-sm block -mt-1">Gramin Utthan Samity</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.href 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-600 hover:text-red-600 hover:border-b-2 hover:border-red-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md">
              Donate
            </button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? 'text-red-600 bg-red-50' 
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;