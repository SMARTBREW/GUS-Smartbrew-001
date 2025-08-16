import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-gray-300" />
              <div className="text-xl font-bold">
                <span className="text-gray-300">G.U.S.</span>
                <span className="text-gray-400 text-sm block -mt-1">Gramin Utthan Samity</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Working for the Better Future of Mother and Child. Serving rural communities in the Northern Kumaon Himalaya since 1979.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Education Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Healthcare Access
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Environmental Conservation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Livelihood Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors duration-200">
                  Community Empowerment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    GRAMIN UTTHAN SAMITY<br />
                    P.O. and Village Kapkote<br />
                    Bageshwar District 263642<br />
                    U.P. India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300 flex-shrink-0" />
                <a href="tel:+9159633046" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm">
                  Kapkote (05963) 3046
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300 flex-shrink-0" />
                <a href="tel:+9159633043" className="text-gray-300 hover:text-gray-200 transition-colors duration-200 text-sm">
                  (05963) 3043
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Gramin Utthan Samity (G.U.S.). All rights reserved.
         </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
