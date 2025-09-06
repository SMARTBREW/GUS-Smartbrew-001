import { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SEOHead from '../components/seo/SEOHead';
import OptimizedGallery from '../components/ui/OptimizedGallery';
import LocomotiveScroll from '../components/scroll/LocomotiveScroll';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('Health');

  useEffect(() => {
    const updateScroll = () => {
      if (typeof window !== 'undefined' && (window as any).locomotiveScroll) {
        setTimeout(() => {
          (window as any).locomotiveScroll.update();
        }, 100);
      }
    };

    updateScroll();
  }, [activeTab]);

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
        src: "/img/ed1.jpeg",
        alt: "Classroom Learning",
        description: "Students engaged in classroom learning activities"
      },
      {
        id: 8,
        src: "/img/ed2.jpeg",
        alt: "Creative Learning Activities",
        description: "Students engaged in creative learning and classroom activities"
      },
      {
        id: 9,
        src: "/img/ed3.jpeg",
        alt: "School Infrastructure",
        description: "School building and infrastructure development"
      },
      {
        id: 10,
        src: "/img/ed4.jpeg",
        alt: "Environmental Education",
        description: "Tree planting and environmental education activities"
      },
      {
        id: 11,
        src: "/img/ed5.jpeg",
        alt: "Computer Lab",
        description: "Students learning in computer laboratory"
      },
      {
        id: 12,
        src: "/img/ed6.jpeg",
        alt: "Library Setup",
        description: "School library and reading corner"
      },
      {
        id: 13,
        src: "/img/ed7.jpeg",
        alt: "Leadership Workshop",
        description: "Leadership skills development workshop"
      },
      {
        id: 14,
        src: "/img/ed8.jpeg",
        alt: "Award Ceremony",
        description: "Students receiving recognition and awards"
      },
      {
        id: 15,
        src: "/img/ed9.jpeg",
        alt: "Community Assembly",
        description: "School assembly and community gathering"
      },
      {
        id: 16,
        src: "/img/ed10.jpeg",
        alt: "Tree Planting Activity",
        description: "Environmental education through tree planting"
      },
      {
        id: 17,
        src: "/img/ed11.jpeg",
        alt: "Cultural Performance",
        description: "Students performing traditional cultural activities"
      },
      {
        id: 18,
        src: "/img/ed12.jpeg",
        alt: "Teacher Instruction",
        description: "Teacher conducting classroom instruction"
      },
      {
        id: 19,
        src: "/img/ed13.jpeg",
        alt: "Student Activities",
        description: "Students participating in educational activities"
      },
      {
        id: 20,
        src: "/img/ed14.jpeg",
        alt: "School Prayer",
        description: "Morning assembly and prayer session"
      },
      {
        id: 21,
        src: "/img/ed15.jpeg",
        alt: "Classroom Environment",
        description: "Students learning in classroom environment"
      },
      {
        id: 22,
        src: "/img/ed16.jpeg",
        alt: "Educational Workshop",
        description: "Educational workshop and training session"
      },
      {
        id: 23,
        src: "/img/ed17.jpeg",
        alt: "Student Engagement",
        description: "Students actively engaged in learning"
      },
      {
        id: 24,
        src: "/img/ed18.jpeg",
        alt: "School Community",
        description: "School community and parent engagement"
      },
      {
        id: 25,
        src: "/img/ed19.jpeg",
        alt: "Learning Activities",
        description: "Various learning activities and programs"
      },
      {
        id: 26,
        src: "/img/ed20.jpeg",
        alt: "Educational Support",
        description: "Educational support and mentoring"
      },
      {
        id: 27,
        src: "/img/ed21.jpeg",
        alt: "Student Development",
        description: "Student development and skill building"
      },
      {
        id: 28,
        src: "/img/ed22.jpeg",
        alt: "Community Education",
        description: "Community education and awareness programs"
      },
      {
        id: 29,
        src: "/img/ed23.jpeg",
        alt: "Educational Resources",
        description: "Educational resources and materials"
      },
      {
        id: 30,
        src: "/img/ed24.jpeg",
        alt: "Learning Environment",
        description: "Conducive learning environment setup"
      },
      {
        id: 31,
        src: "/img/ed25.jpeg",
        alt: "Student Achievement",
        description: "Student achievement and recognition"
      },
      {
        id: 32,
        src: "/img/ed26.jpeg",
        alt: "Educational Programs",
        description: "Comprehensive educational programs"
      },
      {
        id: 33,
        src: "/img/ed27.jpeg",
        alt: "Youth Development",
        description: "Youth development and empowerment"
      },
      {
        id: 34,
        src: "/img/ed28.jpeg",
        alt: "Educational Impact",
        description: "Educational impact and transformation"
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
        src: "/img/emgc6.jpeg",
        alt: "Emergency Relief",
        description: "Emergency relief distribution during natural disasters"
      },
      {
        id: 20,
        src: "/img/emgc2.jpeg",
        alt: "Disaster Response",
        description: "Rapid response team during emergency situations"
      },
      {
        id: 21,
        src: "/img/emgc1.jpeg",
        alt: "Community Support",
        description: "Community support and assistance during crises"
      },
      {
        id: 22,
        src: "/img/emgc4.jpeg",
        alt: "Relief Camp",
        description: "Emergency relief camp setup for affected families"
      },
      {
        id: 23,
        src: "/img/emgc3.jpeg",
        alt: "Recovery Efforts",
        description: "Post-disaster recovery and rehabilitation work"
      },
      {
        id: 24,
        src: "/img/emgc5.jpeg",
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
      
      <div className="bg-white gallery-content">
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

          <LocomotiveScroll dataScroll="true" dataScrollSpeed="0.5">
            <OptimizedGallery 
              images={galleryData[activeTab as keyof typeof galleryData] || []}
              imagesPerLoad={9}
            />
          </LocomotiveScroll>

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
