import React from 'react';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';
import DonateButton from '../components/DonateButton';

const EducationPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Education Programs - Rural Development & Youth Empowerment"
        description="Discover Gramin Utthan Samiti's comprehensive education programs in Uttarakhand. Digital literacy, school infrastructure, and youth leadership development initiatives."
        keywords="education programs, digital literacy, rural education, youth empowerment, school infrastructure, Gramin Utthan Samiti education, Uttarakhand education"
        canonicalUrl="/education"
      />
      
      <div className="bg-white">
        {/* Hero Image */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Education Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-normal mb-4">Education</h1>
              <p className="text-xl lg:text-2xl font-light max-w-2xl mx-auto">
                Empowering rural youth through quality education and digital literacy
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Problem Statement */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Problem Statement
            </h2>
            <div className="bg-red-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Rural areas in Uttarakhand face significant educational challenges including limited access to quality education, 
                  lack of digital literacy skills, inadequate school infrastructure, and limited opportunities for youth development. 
                  Many students drop out due to these barriers, limiting their future prospects and perpetuating the cycle of poverty.
                </p>
              </div>
            </div>
          </div>

          {/* How We're Solving - Digital Literacy */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Digital Literacy Training
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Literacy Training"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Bridging the Digital Divide</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our comprehensive digital literacy program addresses the critical gap between urban and rural digital access. 
                  We provide hands-on computer training, internet skills, and digital tools education to empower rural youth 
                  with the skills needed in today's technology-driven world.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The program includes computer training workshops, internet and social media skills development, 
                  digital tools and applications training, online safety and cybersecurity education, and comprehensive 
                  career guidance and placement support.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through this initiative, we've successfully trained over 5,000 youth, enabling them to access better 
                  educational and employment opportunities while building confidence in using modern technology.
                </p>
              </div>
            </div>
          </div>

          {/* School Infrastructure Development */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              School Infrastructure Development
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="School Infrastructure"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Building Better Learning Environments</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our infrastructure development program focuses on creating conducive learning environments in underserved areas. 
                  We've built and renovated over 25 schools, ensuring that students have access to proper classrooms, 
                  libraries, computer labs, and essential amenities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The program includes school building construction, classroom renovation, library and computer lab setup, 
                  sanitation facilities development, and playground creation. We believe that quality infrastructure is 
                  fundamental to providing quality education.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  These improvements have directly benefited over 10,000 students, with 85% of our infrastructure projects 
                  completed successfully. The enhanced facilities have led to improved attendance rates and better learning outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Youth Leadership Development */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Youth Leadership Development
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Youth Leadership"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Creating Future Community Leaders</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our leadership development program nurtures the potential of young people to become confident, 
                  capable community leaders. We focus on developing essential skills including communication, 
                  problem-solving, and civic engagement.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The program features leadership workshops and camps, public speaking training, community project planning, 
                  mentorship programs, and civic engagement activities. We believe that empowered youth are the key to 
                  sustainable community development.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over 1,500 young people have participated in our leadership programs, implementing more than 100 
                  community projects. Our mentors work closely with participants to ensure they develop the skills 
                  and confidence needed to lead their communities forward.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Images and Content */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Our Educational Impact in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students in Computer Lab"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1523240798131-8c6c2a8c3c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Library Setup"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Leadership Workshop"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our education programs have created a ripple effect across rural Uttarakhand. Students who once 
                  struggled with basic literacy are now confidently using computers, accessing online resources, 
                  and developing leadership skills that will serve them throughout their lives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The transformation goes beyond individual students - entire communities are benefiting from the 
                  improved educational infrastructure and the leadership skills our youth bring back to their villages. 
                  We're building a foundation for sustainable development that will impact generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Our Impact */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">5,000+</div>
                <div className="text-gray-600">Youth Trained in Digital Skills</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">25+</div>
                <div className="text-gray-600">Schools Built/Renovated</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">1,500+</div>
                <div className="text-gray-600">Leadership Program Participants</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">92%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-red-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-4">
                Support Our Education Programs
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Your donation can help us provide quality education, digital literacy, and leadership development opportunities to more rural youth in Uttarakhand.
              </p>
              <DonateButton text="Donate Now" size="large" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EducationPage;
