import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReportsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Reports & </span>
              <span className="text-red-600">Publications</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Access our comprehensive reports, impact assessments, and publications documenting our work in rural development.
            </p>
          </div>

          {/* Report Categories */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Report Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Annual Reports */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Annual Reports</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>2023 Annual Report</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>2022 Annual Report</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>2021 Annual Report</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>2020 Annual Report</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Reports */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Impact Reports</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Vidya Program Impact</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Pragati Program Impact</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Women's Empowerment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Community Development</span>
                    </li>
                  </ul>
                </div>

                {/* Financial Reports */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Financial Reports</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Audited Financial Statements</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Budget Reports</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Expenditure Reports</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Donor Reports</span>
                    </li>
                  </ul>
                </div>

                {/* Program Reports */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Program Reports</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Education Programs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Livelihood Programs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Health Programs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Infrastructure Projects</span>
                    </li>
                  </ul>
                </div>

                {/* Research Reports */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Research Reports</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Rural Development Studies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Women's Empowerment Research</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Community Impact Studies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Policy Recommendations</span>
                    </li>
                  </ul>
                </div>

                {/* Case Studies */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Case Studies</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Success Stories</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Community Transformations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Program Implementations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Best Practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Reports */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-6">Featured Reports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Latest Publications</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• 2023 Annual Report</li>
                      <li>• Vidya Program Impact Assessment</li>
                      <li>• Women's Leadership Development Study</li>
                      <li>• Community Infrastructure Report</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Download Options</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• PDF Format</li>
                      <li>• Executive Summaries</li>
                      <li>• Infographics</li>
                      <li>• Data Visualizations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Documented Case Studies</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Emergency Relief Case Study */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold">📋</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-gray-800">Emergency Relief Distribution</h3>
                      <p className="text-sm text-gray-600">Kapkot Constituency, Bageshwar District</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-normal text-gray-800 mb-2">Project Overview</h4>
                      <p className="text-sm text-gray-600">
                        Emergency relief distribution program conducted under the leadership of G.U.S., providing ration and job guarantee support to vulnerable families in the Kapkot constituency.
                      </p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4">
                      <h4 className="font-normal text-red-600 mb-2">Key Achievements</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Ration distributed to 58 families</li>
                        <li>• Job guarantee program implemented</li>
                        <li>• Personal leadership involvement by Umesh Joshi</li>
                        <li>• Multi-stakeholder collaboration achieved</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="font-normal text-blue-600 mb-2">Community Impact</h4>
                      <p className="text-sm text-gray-600">
                        Relief materials delivered across Kapkot constituency and various places in Bageshwar district, involving Nagar Panchayat presidents, former MLAs, and local residents.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Historical Housing Case Study */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold">🏠</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-gray-800">Khatta Village Housing Project</h3>
                      <p className="text-sm text-gray-600">1989 - Historical Milestone</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-normal text-gray-800 mb-2">Project Overview</h4>
                      <p className="text-sm text-gray-600">
                        Construction of eight houses in Khatta Gram Sabha of Khatta Thok for the most economically disadvantaged and vulnerable sections of society.
                      </p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4">
                      <h4 className="font-normal text-red-600 mb-2">Key Achievements</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 8 houses constructed for vulnerable families</li>
                        <li>• 40,000 people directly impacted</li>
                        <li>• Temple and community facilities built</li>
                        <li>• Sustainable community development model</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <h4 className="font-normal text-green-600 mb-2">Long-term Impact</h4>
                      <p className="text-sm text-gray-600">
                        Transformation from makeshift huts to proper homes, enabling dignified living and community development through integrated programs including employment, healthcare, and education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Report Request */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-6 text-center">Request Reports</h2>
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    Can't find what you're looking for? Contact us to request specific reports or publications.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                    Request Report
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

export default ReportsPage;
