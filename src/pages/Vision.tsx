import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VisionPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Vision, Mission & </span>
              <span className="text-red-600">Goals</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Our guiding principles that drive our work in rural development and community empowerment.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white mb-8">
                <h2 className="text-2xl sm:text-3xl font-normal mb-4">Our Vision</h2>
                <p className="text-lg leading-relaxed">
                  To create self-sustaining, empowered rural communities where every individual has access to 
                  opportunities for growth, education, and dignified livelihoods while preserving the rich 
                  cultural heritage and natural resources of the Kumaon region.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  G.U.S. takes a holistic approach to development work, focusing on the people's ecological, 
                  social, cultural and economic needs. We help local communities identify their problems and 
                  work together, mobilizing local resources to achieve their goals and take control of their lives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-normal text-gray-800 mb-3">Community Empowerment</h3>
                    <p className="text-gray-600">
                      Supporting Village and Women's Groups to bring villagers together to discuss problems 
                      and work collectively.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-normal text-gray-800 mb-3">Sustainable Development</h3>
                    <p className="text-gray-600">
                      Creating integrated village development plans that make communities self-aware and self-sustaining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Our Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Women Leadership</h3>
                  <p className="text-gray-600">
                    Empower women as leaders of their villages and catalysts of change in rural Kumaon.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Livelihood Creation</h3>
                  <p className="text-gray-600">
                    Provide employment opportunities and sustainable livelihoods for rural communities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏔️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Resource Conservation</h3>
                  <p className="text-gray-600">
                    Preserve and sustainably manage natural resources and cultural heritage.
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

export default VisionPage;
