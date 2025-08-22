import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnersPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Our </span>
              <span className="text-red-600">Partners</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Collaborating with organizations and institutions to create lasting impact in rural communities.
            </p>
          </div>

          {/* Major Partners */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Major Supporters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Partner 1 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Uttarkhand Neva Sivi</h3>
                  <p className="text-gray-600 mb-4">India</p>
                  <p className="text-sm text-gray-500">
                    Supporting rural development initiatives and community empowerment programs.
                  </p>
                </div>

                {/* Partner 2 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">CAPART</h3>
                  <p className="text-gray-600 mb-4">India</p>
                  <p className="text-sm text-gray-500">
                    Council for Advancement of People's Action and Rural Technology.
                  </p>
                </div>

                {/* Partner 3 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Terre des Hommes</h3>
                  <p className="text-gray-600 mb-4">Germany</p>
                  <p className="text-sm text-gray-500">
                    International development organization supporting children's rights and rural development.
                  </p>
                </div>

                {/* Partner 4 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Oxfam</h3>
                  <p className="text-gray-600 mb-4">India and U.K.</p>
                  <p className="text-sm text-gray-500">
                    Global movement working to end poverty and inequality.
                  </p>
                </div>

                {/* Partner 5 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">World Bank</h3>
                  <p className="text-gray-600 mb-4">International</p>
                  <p className="text-sm text-gray-500">
                    Providing financial and technical assistance for development projects.
                  </p>
                </div>

                {/* Partner 6 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-2">Local Communities</h3>
                  <p className="text-gray-600 mb-4">Kumaon Region</p>
                  <p className="text-sm text-gray-500">
                    Our most important partners - the communities we serve and work with.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Approach */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-6">Our Partnership Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Collaborative Development</h3>
                    <p className="text-gray-200 leading-relaxed">
                      We believe in the power of partnerships to create sustainable change. Our collaborations 
                      bring together diverse expertise, resources, and perspectives to address complex rural challenges.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Community-Centered</h3>
                    <p className="text-gray-200 leading-relaxed">
                      All our partnerships prioritize community needs and local knowledge, ensuring that 
                      development initiatives are truly responsive to the people we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-6 text-center">Financial Support</h2>
                <div className="text-center">
                  <div className="text-3xl font-normal text-red-600 mb-2">₹30 Lakh Rupees</div>
                  <p className="text-gray-600 mb-4">Current Annual Budget</p>
                  <p className="text-sm text-gray-500">
                    Supported by our partners to implement rural development programs and community initiatives.
                  </p>
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

export default PartnersPage;
