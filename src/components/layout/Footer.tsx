import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300" />
              <div className="text-lg sm:text-xl font-normal">
                <span className="text-gray-300">G.U.S.</span>
                <span className="text-gray-400 text-xs sm:text-sm block -mt-1">Gramin Utthan Samity</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Working for the Better Future of Mother and Child. Serving rural communities in the Northern Kumaon Himalaya since 1979.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-normal mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  About
                </Link>
              </li>
                             <li>
                 <Link to="/stories" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                   Stories
                 </Link>
               </li>
               <li>
                 <Link to="/gallery" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                   Gallery
                 </Link>
               </li>
               <li>
                 <Link to="/certificates" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                   Certificates
                 </Link>
               </li>
               <li>
                             <Link to="/what-we-do" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
               What We Do
             </Link>
               </li>
            </ul>
          </div>

                      <div>
            <h3 className="text-base sm:text-lg font-normal mb-4 sm:mb-6 text-white">What We Do</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  Education Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  Healthcare Access
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  Environmental Conservation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  Livelihood Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  Community Empowerment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-normal mb-4 sm:mb-6 text-white">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    GRAMIN UTTHAN SAMITY<br />
                    P.O. and Village Kapkote<br />
                    Bageshwar District 263642<br />
                    U.P. India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 flex-shrink-0" />
                <a href="tel:+9159633046" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm">
                  Kapkote (05963) 3046
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 flex-shrink-0" />
                <a href="tel:+9159633043" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm">
                  (05963) 3043
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 flex-shrink-0" />
                <a href="mailto:contact@gusindia.org" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm">
                  contact@gusindia.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Gramin Utthan Samity (G.U.S.). All rights reserved.
         </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                Terms of Use
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
