import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PragatiPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Pragati </span>
              <span className="text-red-600">Program</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Advancing rural communities through sustainable development and economic empowerment initiatives.
            </p>
          </div>

          {/* Program Overview */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white mb-8">
                <h2 className="text-2xl sm:text-3xl font-normal mb-4">Program Overview</h2>
                <p className="text-lg leading-relaxed">
                  The Pragati program focuses on progressive development through sustainable livelihoods, 
                  infrastructure improvement, and community capacity building in rural areas.
                </p>
              </div>
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Key Initiatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Initiative 1 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Agricultural Development</h3>
                  <p className="text-gray-600">
                    Promoting sustainable farming practices and agricultural diversification.
                  </p>
                </div>

                {/* Initiative 2 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Small Scale Industries</h3>
                  <p className="text-gray-600">
                    Supporting local entrepreneurship and cottage industry development.
                  </p>
                </div>

                {/* Initiative 3 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Water Management</h3>
                  <p className="text-gray-600">
                    Implementing water conservation and management systems.
                  </p>
                </div>

                {/* Initiative 4 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Infrastructure Development</h3>
                  <p className="text-gray-600">
                    Improving basic infrastructure and community facilities.
                  </p>
                </div>

                {/* Initiative 5 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Microfinance</h3>
                  <p className="text-gray-600">
                    Providing financial support for small business development.
                  </p>
                </div>

                {/* Initiative 6 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Skill Development</h3>
                  <p className="text-gray-600">
                    Training programs for vocational skills and entrepreneurship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Program Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-normal text-red-600 mb-2">300+</div>
                    <div className="text-gray-600">Families Benefited</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-red-600 mb-2">50+</div>
                    <div className="text-gray-600">Small Businesses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-red-600 mb-2">75+</div>
                    <div className="text-gray-600">Villages Reached</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-red-600 mb-2">₹50L+</div>
                    <div className="text-gray-600">Economic Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Success Stories</h2>
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Economic Empowerment</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Through Pragati, communities have developed sustainable income sources, 
                      reducing dependency on seasonal migration and improving living standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Infrastructure Improvement</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Villages now have better access to water, roads, and community facilities, 
                      leading to improved quality of life and economic opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-6 text-center">Future Goals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-4">Expansion Plans</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Reach 200+ villages</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Create 100+ new businesses</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Improve infrastructure in 50 villages</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-4">Sustainability Focus</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Environmental conservation</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Community ownership</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Long-term impact</span>
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

export default PragatiPage;
