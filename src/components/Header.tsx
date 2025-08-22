import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown, Square } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'WHO WE ARE',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Vision, Mission, Goal', href: '/vision' },
        { name: 'Leadership Board', href: '/leadership' },
        { name: 'Partners', href: '/partners' },
        { name: 'Recognition', href: '/recognition' },
      ]
    },
    {
      name: 'OUR INTERVENTIONS',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Programs', href: '/programs' },
        { name: 'Stories', href: '/stories' },
        { name: 'Vidya', href: '/vidya' },
        { name: 'Pragati', href: '/pragati' },
      ]
    },
    {
      name: 'RESOURCES',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Information Desk', href: '/info-desk' },
        { name: 'Reports', href: '/reports' },
        { name: 'Research and Publications', href: '/research' },
        { name: 'Policies', href: '/policies' },
      ]
    },
    { name: 'PARTNERSHIPS', href: '/partnerships', hasDropdown: false },
    // { names: 'JOIN OUR TEAM', href: '/internship', hasDropdown: false },
    { name: 'TEAM', href: '/team', hasDropdown: false },
    { name: 'CONTACT US', href: '/contact', hasDropdown: false },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 ml-0">
            <div className="flex items-center space-x-1">
              <Heart className="h-8 w-8 text-red-600" />
              <div className="text-2xl font-normal">
                <span className="text-gray-800">G.U.S.</span>
                <span className="text-gray-600 text-base block -mt-1 font-light">Gramin Utthan Samity</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 ml-8">
            {navigationItems.map((item) => (
                            <div key={item.name} className="relative">
                                  <button
                    onClick={() => item.hasDropdown ? handleDropdownToggle(item.name) : null}
                    className={`flex items-center space-x-1 transition-colors duration-200 font-bold text-xs uppercase tracking-wide py-2 font-['Outfit'] relative ${
                      location.pathname === item.href 
                        ? 'text-red-600' 
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && item.dropdownItems && (
                  <div className="absolute top-full -left-4 mt-0 w-64 bg-white border border-gray-300 shadow-lg z-50 rounded-lg">
                    <div className="py-1 relative">
                      {/* Continuous red line from navigation button through dropdown */}
                      <div className="absolute left-0 -top-8 w-1 bg-red-600 h-[calc(100%+2rem)]"></div>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-200 font-bold uppercase tracking-wide pl-8"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition-colors duration-200 shadow-sm hover:shadow-md flex items-center space-x-2 font-['Outfit']">
              <span className="text-lg">♥︎</span>
              <span>DONATE</span>
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
                <div key={item.name}>
                  <button
                    onClick={() => item.hasDropdown ? handleDropdownToggle(item.name) : null}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-bold text-sm uppercase tracking-wide font-['Outfit'] ${
                      location.pathname === item.href 
                        ? 'text-red-600 bg-red-50' 
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </div>
                  </button>
                  
                                     {/* Mobile Dropdown */}
                   {item.hasDropdown && activeDropdown === item.name && item.dropdownItems && (
                     <div className="ml-4 mt-1 space-y-1">
                       {item.dropdownItems.map((dropdownItem) => (
                         <Link
                           key={dropdownItem.name}
                           to={dropdownItem.href}
                           className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                           onClick={() => setIsMenuOpen(false)}
                         >
                           {dropdownItem.name}
                         </Link>
                       ))}
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;