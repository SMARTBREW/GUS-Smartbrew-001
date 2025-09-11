import React from 'react';
import { Award, Calendar, MapPin, Phone, BookOpen, Users } from 'lucide-react';

const FounderProfile = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-3 sm:mb-4">
            <span className="text-black">Meet Our </span>
            <span className="text-red-600">Founder</span>
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            A visionary leader who dedicated his life to rural development and social transformation in the Kumaon hills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/founder.jpg"
                  alt="Mr. Umesh Joshi - Founder & Secretary"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full opacity-50"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-2">
                MR. UMESH JOSHI
              </h2>
              <div className="flex items-center">
                <div className="w-px h-6 sm:h-8 bg-gray-400 mr-3 sm:mr-4"></div>
                <span className="text-lg sm:text-xl md:text-2xl font-normal text-red-600">FOUNDER & SECRETARY</span>
              </div>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Born on 10 May 1957 in the village of Kapkot, Mr. Umesh Joshi is the visionary founder of Gramin Utthan Samiti. 
                From a young age, he was deeply inclined toward social service and helping the underprivileged, dedicating his 
                life to transforming rural communities in the Kumaon hills.
              </p>
              
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Despite limited educational opportunities in his region, Mr. Joshi recognized that development was impossible 
                without proper education. This realization led him to establish the first modern school in Kapkot on 15 August 1982, 
                providing free education to underprivileged children with support from 25 local families.
              </p>
              
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                His early work as a postman, earning just ₹75 per month, didn't deter his commitment to social service. 
                On 23 June 1979, he founded the organization that would become the cornerstone of rural development in the region.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-red-600/20 rounded-lg p-3 sm:p-4">
                <h4 className="font-normal text-red-600 mb-1 text-sm sm:text-base">Awards & Recognition</h4>
                <p className="text-xs sm:text-sm text-gray-600">Bachpan Award, Dr. Bhairav Vats Medal</p>
              </div>
              <div className="bg-red-600/20 rounded-lg p-3 sm:p-4">
                <h4 className="font-normal text-red-600 mb-1 text-sm sm:text-base">Leadership</h4>
                <p className="text-xs sm:text-sm text-gray-600">Secretary & Coordinator since 1979</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">
            <span className="text-black">Life & </span>
            <span className="text-red-600">Contributions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-normal text-gray-800">Early Life & Education</h4>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Born on 10 May 1957 in Kapkot village</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Son of Mr. Nandlal Joshi and Mrs. Nandadevi Joshi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Completed schooling up to high school in Kapkot</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Worked as junior and postman in Kapkot post office</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-normal text-gray-800">Educational Revolution</h4>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Founded organization on 23 June 1979</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Established first modern school on 15 August 1982</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>Provided free education to poor children</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span>School still operational, charging ₹450 per student</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-normal text-gray-800">Social Impact & Achievements</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h5 className="font-normal text-red-600 mb-2 sm:mb-3 text-sm sm:text-base">Child Rights & Welfare</h5>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Advocated for child rights and education</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Rescued children from labor and domestic work</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Successfully enrolled them in schools</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Many are now successfully employed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-normal text-red-600 mb-2 sm:mb-3 text-sm sm:text-base">Social Reforms</h5>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Combated traditional child marriage practices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Conducted awareness programs in Brahmin families</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Significant decline in child marriage rates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Water conservation initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-normal text-gray-800">Awards & Recognition</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h5 className="font-normal text-red-600 mb-2 sm:mb-3 text-sm sm:text-base">Bachpan Award</h5>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Recognized for outstanding contributions in child welfare, education, and social development.
                </p>
                <div className="text-xs sm:text-sm text-gray-500">
                  <strong>Contributions in:</strong> Health, Women Empowerment, Child Welfare, Child Education, 
                  Anti-Tobacco Campaigns, Environmental Protection
                </div>
              </div>
              <div>
                <h5 className="font-normal text-red-600 mb-2 sm:mb-3 text-sm sm:text-base">Dr. Bhairav Vats Medal</h5>
                <p className="text-sm sm:text-base text-gray-600">
                  Prestigious recognition for exceptional service to rural development and social transformation 
                  in the Himalayan region.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-normal text-gray-800">Contact Information</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h5 className="font-normal text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Position</h5>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Secretary/Coordinator, Rural Development Committee</p>
                <h5 className="font-normal text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Location</h5>
                <p className="text-sm sm:text-base text-gray-600">Kapkot, Uttarakhand</p>
              </div>
              <div>
                <h5 className="font-normal text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Contact</h5>
                <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-600">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>+91 9412925990</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
