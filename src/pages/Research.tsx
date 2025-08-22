import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResearchPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Research & </span>
              <span className="text-red-600">Publications</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Exploring innovative approaches to rural development through research, studies, and knowledge sharing.
            </p>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Research Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Rural Development */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏘️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Rural Development</h3>
                  <p className="text-gray-600">
                    Comprehensive studies on sustainable rural development models and community empowerment strategies.
                  </p>
                </div>

                {/* Women's Empowerment */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Women's Empowerment</h3>
                  <p className="text-gray-600">
                    Research on women's leadership development, economic empowerment, and social transformation.
                  </p>
                </div>

                {/* Education */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Education</h3>
                  <p className="text-gray-600">
                    Studies on rural education systems, adult literacy programs, and educational innovation.
                  </p>
                </div>

                {/* Livelihoods */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Sustainable Livelihoods</h3>
                  <p className="text-gray-600">
                    Research on agricultural development, entrepreneurship, and income generation strategies.
                  </p>
                </div>

                {/* Health */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Community Health</h3>
                  <p className="text-gray-600">
                    Studies on rural healthcare access, nutrition, and community health awareness programs.
                  </p>
                </div>

                {/* Environment */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Environmental Conservation</h3>
                  <p className="text-gray-600">
                    Research on sustainable practices, natural resource management, and environmental awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-6">Recent Publications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Research Papers</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• "Community-Led Rural Development Models"</li>
                      <li>• "Women's Leadership in Rural Communities"</li>
                      <li>• "Sustainable Agriculture Practices"</li>
                      <li>• "Education Access in Remote Areas"</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Policy Briefs</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• "Rural Development Policy Recommendations"</li>
                      <li>• "Women's Empowerment Framework"</li>
                      <li>• "Community Health Guidelines"</li>
                      <li>• "Environmental Conservation Strategies"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Ongoing Research Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-normal text-gray-800 mb-4">Impact Assessment Study</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive evaluation of our programs' long-term impact on rural communities.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Duration: 2 years</p>
                    <p>Status: In Progress</p>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-normal text-gray-800 mb-4">Women's Leadership Research</h3>
                  <p className="text-gray-600 mb-4">
                    Study on factors contributing to successful women's leadership in rural areas.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Duration: 18 months</p>
                    <p>Status: In Progress</p>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-normal text-gray-800 mb-4">Sustainable Agriculture Study</h3>
                  <p className="text-gray-600 mb-4">
                    Research on sustainable farming practices and their economic viability.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Duration: 1 year</p>
                    <p>Status: Planning Phase</p>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-normal text-gray-800 mb-4">Community Health Assessment</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive study of healthcare access and needs in rural communities.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Duration: 15 months</p>
                    <p>Status: In Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Opportunities */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-6 text-center">Research Collaboration</h2>
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    Interested in collaborating on research projects? We welcome partnerships with academic institutions, 
                    research organizations, and development practitioners.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                    Contact Research Team
                  </button>
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

export default ResearchPage;
