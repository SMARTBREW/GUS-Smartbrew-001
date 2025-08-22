import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RecognitionPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Awards & </span>
              <span className="text-red-600">Recognition</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Celebrating our achievements and the impact we've made in rural development and community empowerment.
            </p>
          </div>

          {/* Awards Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Our Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Award 1 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-gray-800">Excellence in Rural Development</h3>
                      <p className="text-gray-600">2020</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Recognized for outstanding contribution to rural development and community empowerment 
                    in the Kumaon region.
                  </p>
                </div>

                {/* Award 2 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-gray-800">Women Empowerment Award</h3>
                      <p className="text-gray-600">2019</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Honored for our innovative approach to women's leadership development and community mobilization.
                  </p>
                </div>

                {/* Award 3 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-gray-800">Sustainable Development Award</h3>
                      <p className="text-gray-600">2018</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Acknowledged for our commitment to sustainable development practices and environmental conservation.
                  </p>
                </div>

                {/* Award 4 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-gray-800">Community Partnership Award</h3>
                      <p className="text-gray-600">2017</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Celebrated for our collaborative approach and strong partnerships with local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-8 text-center">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-normal mb-2">150+</div>
                    <div className="text-gray-200">Villages Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal mb-2">40+</div>
                    <div className="text-gray-200">Years of Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal mb-2">80%</div>
                    <div className="text-gray-200">Women Workers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal mb-2">1000+</div>
                    <div className="text-gray-200">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Recognition */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Media Recognition</h2>
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-4">Featured Stories</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Rural Development Success Stories</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Women Empowerment Initiatives</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Community-Led Development</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-4">Publications</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Research Papers & Reports</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Case Studies</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Annual Reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RecognitionPage;
