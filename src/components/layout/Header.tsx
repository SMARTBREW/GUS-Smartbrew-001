import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown, AlertTriangle } from 'lucide-react';
import DonateButton from '../ui/DonateButton';

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
        { name: 'TEAM', href: '/team' },
      ]
    },
    {
      name: 'WHAT WE DO',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Education', href: '/education' },
        { name: 'Health', href: '/health' },
        { name: 'Emergency Response', href: '/emergency-appeal', isEmergency: true },
      ]
    },
    {
      name: 'IMPACT STORIES',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Success Stories', href: '/stories' },
        { name: 'Media/Press', href: '/media' },
      ]
    },
    { name: 'GALLERY', href: '/gallery', hasDropdown: false },
    { name: 'CERTIFICATES', href: '/certificates', hasDropdown: false },
    { name: 'CONTACT', href: '/contact', hasDropdown: false },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-[60] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-2 ml-0">
            <div className="flex items-center space-x-1">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
              <div className="text-lg sm:text-2xl font-normal">
                <span className="text-gray-800">G.U.S.</span>
                <span className="text-gray-600 text-xs sm:text-base block -mt-1 font-light">Gramin Utthan Samity</span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 ml-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`flex items-center space-x-1 transition-colors duration-200 font-bold text-xs uppercase tracking-wide py-2 font-['Outfit'] relative ${
                      location.pathname === item.href 
                        ? 'text-red-600' 
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 transition-colors duration-200 font-bold text-xs uppercase tracking-wide py-2 font-['Outfit'] relative ${
                      location.pathname === item.href 
                        ? 'text-red-600' 
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}

                {item.hasDropdown && activeDropdown === item.name && item.dropdownItems && (
                  <div className="absolute top-full -left-4 mt-0 w-64 bg-white border border-gray-300 shadow-lg z-50 rounded-lg">
                    <div className="py-1 relative">
                      <div className="absolute left-0 -top-8 w-1 bg-red-600 h-[calc(100%+2rem)]"></div>
                                             {item.dropdownItems.map((dropdownItem) => (
                         <Link
                           key={dropdownItem.name}
                           to={dropdownItem.href}
                           className={`block px-4 py-3 text-sm transition-colors duration-200 font-bold uppercase tracking-wide pl-8 ${
                             dropdownItem.isEmergency 
                               ? 'text-red-600 hover:bg-red-50' 
                               : 'text-gray-800 hover:bg-gray-50'
                           }`}
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

          <div className="flex items-center space-x-4">
            <DonateButton text="DONATE" size="small" variant="primary" className="font-['Outfit'] font-bold" />
            
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

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/emergency-appeal"
                className="block px-3 py-3 rounded-md bg-red-600 text-white font-bold text-sm uppercase tracking-wide font-['Outfit'] text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>EMERGENCY APPEAL</span>
                </div>
              </Link>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-bold text-sm uppercase tracking-wide font-['Outfit'] ${
                        location.pathname === item.href 
                          ? 'text-red-600 bg-red-50' 
                          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-bold text-sm uppercase tracking-wide font-['Outfit'] ${
                        location.pathname === item.href 
                          ? 'text-red-600 bg-red-50' 
                          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                  
                   {item.hasDropdown && activeDropdown === item.name && item.dropdownItems && (
                     <div className="ml-4 mt-1 space-y-1">
                                               {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              dropdownItem.isEmergency 
                                ? 'text-red-600 hover:bg-red-50 font-semibold' 
                                : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                            }`}
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