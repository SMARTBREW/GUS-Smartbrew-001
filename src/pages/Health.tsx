import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SEOHead from '../components/seo/SEOHead';
import DonateButton from '../components/ui/DonateButton';

const HealthPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Health Programs - Rural Healthcare & Medical Services"
        description="Discover Gramin Utthan Samiti's comprehensive healthcare programs in Uttarakhand. Mobile health clinics, mental health support, and community health awareness initiatives."
        keywords="healthcare programs, mobile health clinics, rural healthcare, mental health support, health awareness, Gramin Utthan Samiti health, Uttarakhand healthcare"
        canonicalUrl="/health"
      />
      
      <div className="bg-white">
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Health Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-normal mb-4">Health</h1>
              <p className="text-xl lg:text-2xl font-light max-w-2xl mx-auto">
                Bringing quality healthcare services to remote villages and communities
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Problem Statement
            </h2>
            <div className="bg-red-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Rural communities in Uttarakhand face severe healthcare challenges including limited access to medical facilities, 
                  lack of qualified healthcare professionals, inadequate maternal and child care, and poor health awareness. 
                  Many villagers have to travel long distances for basic medical care, leading to delayed treatment and preventable health issues.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Mobile Health Clinics
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mobile Health Clinic"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Bringing Healthcare to Your Doorstep</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our mobile health clinics are specially equipped medical units that travel to remote villages, 
                  ensuring that no community is left behind when it comes to essential healthcare services. 
                  These clinics bring medical professionals, equipment, and medicines directly to the people who need them most.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Each mobile clinic is staffed with qualified healthcare workers and equipped with essential medical equipment. 
                  We provide basic health check-ups and screenings, vaccination drives for children, maternal and child care services, 
                  emergency medical support, and medicine distribution.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Currently, we operate 10 mobile clinics that serve over 50 villages across Uttarakhand, 
                  reaching more than 15,000 people who otherwise would have limited or no access to healthcare services.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Mental Health Support
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mental Health Support"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Comprehensive Mental Health Care</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Mental health is a critical component of overall well-being, yet it's often overlooked in rural areas. 
                  Our mental health program provides comprehensive support services including individual counseling sessions, 
                  group therapy programs, family support services, and crisis intervention.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We work with trained counselors and mental health professionals who understand the unique challenges 
                  faced by rural communities. Our approach is culturally sensitive and community-oriented, ensuring that 
                  mental health support is accessible and effective for everyone who needs it.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To date, we've conducted over 2,000 mental health sessions, helping individuals and families 
                  overcome challenges and build resilience. We also conduct mental health awareness campaigns to 
                  reduce stigma and encourage people to seek help when needed.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Community Health Awareness
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Health Awareness"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-gray-800 mb-6">Building Healthier Communities</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Prevention is better than cure, and our health awareness programs focus on educating communities 
                  about preventive healthcare practices. We conduct regular workshops on hygiene and sanitation, 
                  disease prevention, nutrition and wellness, and first aid training.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our health educators work closely with community leaders, schools, and women's groups to ensure 
                  that health information reaches every household. We use interactive methods including demonstrations, 
                  workshops, and community meetings to make health education engaging and effective.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  These programs have led to significant improvements in community health practices, with reduced 
                  incidence of preventable diseases and better hygiene practices in the villages we serve.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Our Healthcare Impact in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Vaccination Drive"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Health Check-up"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Community Workshop"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our healthcare programs have transformed the health landscape in rural Uttarakhand. Villages that once 
                  had no access to medical care now receive regular health services, and communities that were unaware 
                  of basic health practices now practice preventive healthcare.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The impact goes beyond individual health improvements - we're building a culture of health consciousness 
                  that will benefit future generations. Our mobile clinics, mental health support, and health awareness 
                  programs work together to create comprehensive healthcare solutions for rural communities.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">15,000+</div>
                <div className="text-gray-600">People Served</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Villages Covered</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">10</div>
                <div className="text-gray-600">Mobile Clinics</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-normal text-red-600 mb-2">2,000+</div>
                <div className="text-gray-600">Mental Health Sessions</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-red-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-4">
                Support Our Health Programs
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Your donation can help us provide essential healthcare services, mental health support, and health awareness programs to more rural communities in Uttarakhand.
              </p>
              <DonateButton text="Donate Now" size="large" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HealthPage;
