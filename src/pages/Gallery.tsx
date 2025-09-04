import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Health');

  const galleryData = {
    Health: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Mobile Health Clinic",
        description: "Mobile health clinic providing healthcare services to remote villages"
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Health Check-up",
        description: "Community health check-up and vaccination drive"
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Health Awareness Workshop",
        description: "Community health awareness and education program"
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Medical Camp",
        description: "Free medical camp for rural communities"
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Child Vaccination",
        description: "Child vaccination program in rural areas"
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Health Education",
        description: "Health education and awareness session"
      }
    ],
    Education: [
      {
        id: 7,
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Digital Literacy Training",
        description: "Computer training and digital literacy program for rural youth"
      },
      {
        id: 8,
        src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "School Infrastructure",
        description: "School building and infrastructure development"
      },
      {
        id: 9,
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Youth Leadership Program",
        description: "Youth leadership development and community engagement"
      },
      {
        id: 10,
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Computer Lab",
        description: "Students learning in the computer laboratory"
      },
      {
        id: 11,
        src: "https://images.unsplash.com/photo-1523240798131-8c6c2a8c3c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Library Setup",
        description: "School library and reading corner setup"
      },
      {
        id: 12,
        src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Leadership Workshop",
        description: "Leadership skills development workshop for youth"
      }
    ],
    "Menstrual Hygiene Campaign": [
      {
        id: 13,
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Hygiene Awareness",
        description: "Menstrual hygiene awareness campaign for women and girls"
      },
      {
        id: 14,
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Women's Health Workshop",
        description: "Women's health and hygiene education workshop"
      },
      {
        id: 15,
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Community Meeting",
        description: "Community meeting on menstrual health awareness"
      },
      {
        id: 16,
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Health Education",
        description: "Health education session for adolescent girls"
      },
      {
        id: 17,
        src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Sanitation Facilities",
        description: "Improved sanitation facilities in schools and communities"
      },
      {
        id: 18,
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Women's Empowerment",
        description: "Women's empowerment through health education"
      }
    ],
    "Emergency Response": [
      {
        id: 19,
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Emergency Relief",
        description: "Emergency relief distribution during natural disasters"
      },
      {
        id: 20,
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Disaster Response",
        description: "Rapid response team during emergency situations"
      },
      {
        id: 21,
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Community Support",
        description: "Community support and assistance during crises"
      },
      {
        id: 22,
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Relief Camp",
        description: "Emergency relief camp setup for affected families"
      },
      {
        id: 23,
        src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Recovery Efforts",
        description: "Post-disaster recovery and rehabilitation work"
      },
      {
        id: 24,
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Emergency Team",
        description: "Emergency response team in action"
      }
    ]
  };

  const tabs = ['Health', 'Education', 'Menstrual Hygiene Campaign', 'Emergency Response'];

  return (
    <PageLayout>
      <SEOHead
        title="Gallery - Our Work in Action"
        description="Explore our gallery showcasing the impact of Gramin Utthan Samiti's programs in Health, Education, Menstrual Hygiene, and Emergency Response across rural Uttarakhand."
        keywords="gallery, health programs, education programs, menstrual hygiene, emergency response, rural development, Gramin Utthan Samiti, Uttarakhand"
        canonicalUrl="/gallery"
      />
      
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-normal mb-6">
              <span className="text-gray-800">Memories</span>
              <br />
              <span className="text-red-600">Gallery</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Explore our work through images that capture the impact of our programs across rural communities in Uttarakhand
            </p>
          </div>
        </div>

        {/* Gallery Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData[activeTab as keyof typeof galleryData]?.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-4">
                Capturing Our Impact
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
                Each image in our gallery tells a story of transformation, hope, and community development. 
                From healthcare initiatives to educational programs, from menstrual hygiene awareness to emergency response efforts, 
                these photographs document the real impact of our work across rural Uttarakhand.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our gallery showcases the faces behind our programs - the children learning new skills, 
                the women gaining confidence, the communities coming together, and the volunteers making it all possible. 
                These memories inspire us to continue our mission of rural development and women empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Gallery;
