import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PoliciesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Policies & </span>
              <span className="text-red-600">Guidelines</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Our organizational policies, procedures, and guidelines that ensure transparency, accountability, and effective governance.
            </p>
          </div>

          {/* Policy Categories */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-8 text-center">Policy Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Governance Policies */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Governance</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Board Governance Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Conflict of Interest Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Code of Conduct</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Whistleblower Policy</span>
                    </li>
                  </ul>
                </div>

                {/* Financial Policies */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Financial Management</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Financial Management Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Donation Acceptance Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Expense Reimbursement</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Asset Management</span>
                    </li>
                  </ul>
                </div>

                {/* Program Policies */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Program Management</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Program Development Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Monitoring & Evaluation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Community Engagement</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Partnership Guidelines</span>
                    </li>
                  </ul>
                </div>

                {/* HR Policies */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Human Resources</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Employment Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Equal Opportunity Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Harassment Prevention</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Volunteer Management</span>
                    </li>
                  </ul>
                </div>

                {/* Safety & Security */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Safety & Security</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Workplace Safety Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Child Protection Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Data Protection Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Emergency Response</span>
                    </li>
                  </ul>
                </div>

                {/* Communication */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📢</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-800 mb-3 text-center">Communication</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Media Relations Policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Social Media Guidelines</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Information Disclosure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span>Stakeholder Communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Implementation */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-normal mb-6">Policy Implementation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Our Approach</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• Regular policy reviews and updates</li>
                      <li>• Staff training and awareness programs</li>
                      <li>• Monitoring and compliance checks</li>
                      <li>• Stakeholder feedback integration</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-4">Compliance</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li>• Legal and regulatory compliance</li>
                      <li>• Donor requirements adherence</li>
                      <li>• Best practice implementation</li>
                      <li>• Continuous improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 shadow">
                <h2 className="text-2xl sm:text-3xl font-normal text-gray-800 mb-6 text-center">Policy Updates</h2>
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    Our policies are regularly reviewed and updated to ensure they remain current and effective. 
                    Subscribe to receive notifications about policy updates.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                    Subscribe to Updates
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

export default PoliciesPage;
