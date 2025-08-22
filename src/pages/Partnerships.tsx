import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnershipsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Partnerships & </span>
              <span className="text-red-600">Collaborations</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Building strong partnerships to create lasting impact in rural development and community empowerment.
            </p>
          </div>

          {/* Partnership Overview */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white mb-8">
                <h2 className="text-2xl sm:text-3xl font-normal mb-4">Our Partnership Approach</h2>
                <p className="text-lg leading-relaxed">
                  We believe in the power of collaboration to create sustainable change. Our partnerships bring together 
                  diverse expertise, resources, and perspectives to address complex rural challenges effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Types */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Types of Partnerships</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Funding Partners */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Funding Partners</h3>
                  <p className="text-gray-600 mb-4">
                    Organizations that provide financial support for our programs and initiatives.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• World Bank</li>
                    <li>• Oxfam</li>
                    <li>• CAPART</li>
                    <li>• Government Agencies</li>
                  </ul>
                </div>

                {/* Technical Partners */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Technical Partners</h3>
                  <p className="text-gray-600 mb-4">
                    Organizations that provide expertise, training, and technical support.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Research Institutions</li>
                    <li>• Universities</li>
                    <li>• NGOs</li>
                    <li>• Consultants</li>
                  </ul>
                </div>

                {/* Community Partners */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Community Partners</h3>
                  <p className="text-gray-600 mb-4">
                    Local communities and grassroots organizations we work with.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Village Councils</li>
                    <li>• Women's Groups</li>
                    <li>• Self-Help Groups</li>
                    <li>• Local Leaders</li>
                  </ul>
                </div>

                {/* Government Partners */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Government Partners</h3>
                  <p className="text-gray-600 mb-4">
                    Government departments and agencies we collaborate with.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Rural Development</li>
                    <li>• Women & Child Welfare</li>
                    <li>• Education Department</li>
                    <li>• Health Department</li>
                  </ul>
                </div>

                {/* International Partners */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">International Partners</h3>
                  <p className="text-gray-600 mb-4">
                    International organizations and donors supporting our work.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Terre des Hommes</li>
                    <li>• Oxfam International</li>
                    <li>• UN Agencies</li>
                    <li>• International NGOs</li>
                  </ul>
                </div>

                {/* Academic Partners */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3">Academic Partners</h3>
                  <p className="text-gray-600 mb-4">
                    Educational institutions and research organizations.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Universities</li>
                    <li>• Research Centers</li>
                    <li>• Training Institutes</li>
                    <li>• Think Tanks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Benefits of Partnership</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-4">For Partners</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Access to rural communities</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Local expertise and knowledge</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Proven implementation models</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Impact measurement and reporting</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-4">For Communities</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Enhanced resources and support</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Access to new opportunities</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Capacity building and training</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span>Sustainable development solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-6">Partnership Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Current Opportunities</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• Rural Education Programs</li>
                      <li>• Women's Empowerment Initiatives</li>
                      <li>• Sustainable Agriculture Projects</li>
                      <li>• Community Health Programs</li>
                      <li>• Infrastructure Development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">How to Partner</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• Contact our partnership team</li>
                      <li>• Share your organization's goals</li>
                      <li>• Explore collaboration areas</li>
                      <li>• Develop joint proposals</li>
                      <li>• Implement together</li>
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

export default PartnershipsPage;
