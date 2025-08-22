import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VidyaPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Vidya </span>
              <span className="text-red-600">Program</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Empowering rural communities through education and knowledge sharing initiatives.
            </p>
          </div>

          {/* Program Overview */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white mb-8">
                <h2 className="text-2xl sm:text-3xl font-normal mb-4">Program Overview</h2>
                <p className="text-lg leading-relaxed">
                  The Vidya program focuses on educational development and capacity building in rural communities. 
                  We believe that education is the foundation for sustainable development and community empowerment.
                </p>
              </div>
            </div>
          </div>

          {/* Key Components */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Key Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Component 1 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Adult Literacy</h3>
                  <p className="text-gray-600">
                    Providing basic literacy and numeracy skills to adults in rural communities.
                  </p>
                </div>

                {/* Component 2 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👶</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Early Childhood Education</h3>
                  <p className="text-gray-600">
                    Supporting early childhood development and pre-primary education initiatives.
                  </p>
                </div>

                {/* Component 3 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Digital Literacy</h3>
                  <p className="text-gray-600">
                    Introducing basic computer skills and digital awareness to rural communities.
                  </p>
                </div>

                {/* Component 4 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Environmental Education</h3>
                  <p className="text-gray-600">
                    Teaching sustainable practices and environmental conservation awareness.
                  </p>
                </div>

                {/* Component 5 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Health Education</h3>
                  <p className="text-gray-600">
                    Providing knowledge about basic health, hygiene, and nutrition practices.
                  </p>
                </div>

                {/* Component 6 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Leadership Training</h3>
                  <p className="text-gray-600">
                    Developing leadership skills and community organizing capabilities.
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
                    <div className="text-3xl font-normal text-red-600 mb-2">500+</div>
                    <div className="text-gray-600">Adults Educated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-red-600 mb-2">200+</div>
                    <div className="text-gray-600">Children Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-red-600 mb-2">50+</div>
                    <div className="text-gray-600">Villages Reached</div>
                  </div>
                  <div>
                    <div className="text-3xl font-normal text-red-600 mb-2">25+</div>
                    <div className="text-gray-600">Teachers Trained</div>
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
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Community Transformation</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Through the Vidya program, entire communities have gained access to education, 
                      leading to improved livelihoods and better decision-making capabilities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Women Empowerment</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Women who participated in our literacy programs are now leading community 
                      initiatives and serving as role models for future generations.
                    </p>
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

export default VidyaPage;
