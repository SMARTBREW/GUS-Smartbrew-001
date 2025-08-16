import React from 'react';
import { Heart, Users, Leaf, BookOpen, Target, MapPin, Calendar, Award } from 'lucide-react';

const Stories = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-800">Our </span>
            <span className="text-red-600">Stories</span>
          </h2>
                      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real stories from the villages we serve, showcasing the impact of our work and the resilience of the communities in the Northern Kumaon Himalaya.
            </p>
        </div>

        {/* Village Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Village Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Khaljhuni Village</h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                In Khaljhuni Village, the women have formed a group called "Mahila Milan Kendra Khaljhuni" which meets once a month to share their ideas and discuss village development.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-800 mb-2">Impact:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Monthly women's group meetings</li>
                  <li>• Collective decision-making</li>
                  <li>• Community problem-solving</li>
                  <li>• Enhanced social position</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Bhanar Village</h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A newly constructed workshop for the local underprivileged in Bhanar Village, along with a dedicated Health Center serving the remote mountainous area.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-800 mb-2">Services:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Health center with trained pharmacist</li>
                  <li>• Daily village rounds</li>
                  <li>• Basic health care training</li>
                  <li>• Traditional medicine integration</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Kalpata Village</h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Kalpata Village and Health Center serves as a model for integrated community development, combining education and healthcare services.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-800 mb-2">Programs:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Balwatikas (Child Education Centers)</li>
                  <li>• Health center coordination</li>
                  <li>• Community health awareness</li>
                  <li>• Integrated development approach</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Women's Strength Day</h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                G.U.S. observes "Women Strength Day" each year on the anniversary of the death of Kasturba Gandhi. Such events greatly aid to increase the self-respect of the local women.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <h5 className="font-semibold text-gray-800 mb-2">Impact:</h5>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Increased self-respect</li>
                  <li>• Community recognition</li>
                  <li>• Cultural preservation</li>
                  <li>• Women's empowerment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Community Development Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Community Development Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Low-Cost Housing</h4>
              <p className="text-gray-600 text-sm">Construction of low-cost housing for the poorest communities, providing safe and sustainable shelter.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Tree Planting</h4>
              <p className="text-gray-600 text-sm">Tree planting and forest management initiatives to address fuel wood shortage and environmental conservation.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Clean Water</h4>
              <p className="text-gray-600 text-sm">Piping in of clean drinking water to ensure access to safe water for all community members.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Infrastructure</h4>
              <p className="text-gray-600 text-sm">Construction of toilets, rebuilding of footpaths, and repair and conservation of temples.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Market Coordination</h4>
              <p className="text-gray-600 text-sm">G.U.S. has helped to co-ordinate a market for the goods produced, bringing direct economic benefit.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Traditional Crafts</h4>
              <p className="text-gray-600 text-sm">Training in ringal (bamboo) craft work, shawl and blanket weaving, and rug and carpet production.</p>
            </div>
          </div>
        </div>

        {/* Women's Role Story */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">The Role of Rural Kumaoni Women</h3>
              <p className="text-lg mb-6 leading-relaxed">
                The rural Kumaoni women fulfill a multiplicity of roles. Apart from attending to the children and households, their responsibilities include all farm activities and food production, along with water, fuel and fodder collection.
              </p>
              <p className="text-lg leading-relaxed">
                This involves travelling long distances carrying heavy loads in mountainous terrain. Eighty percent of G.U.S. workers are women, and one of their primary aims is to motivate and empower the women folk to organise themselves.
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Women's Responsibilities:</h4>
              <ul className="space-y-2 text-gray-100">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Childcare and household management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>All farm activities and food production</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Water, fuel and fodder collection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Long-distance travel with heavy loads</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Community decision-making roles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Future Plans</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Youth Development</h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                G.U.S. recognises the problems and frustrations facing the young men of this rural community in an increasingly materialistic world. Future plans include the setting up of programs to help the local youth to recognise the importance of their surroundings and culture.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With this aim, G.U.S. plans to create opportunities within the community for craft industry, house building and agriculture. Economic autonomy would help instill a strong sense of purpose and encourage greater participation in the community.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Development</h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                G.U.S. recognises the importance of reforestation in an area with fuel wood shortage. This has led to the plantation of native trees and shrubs as well as the cultivation of medicinal plants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Traditional knowledge of plants and their uses provides opportunity for future economic benefits while preserving the cultural heritage of the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
