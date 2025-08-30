import React, { useState } from 'react';
import { AlertTriangle, Heart, Phone, MapPin, Clock, Users, DollarSign, ArrowRight, Camera, Image, Globe, Shield, BookOpen } from 'lucide-react';
import DonateButton from './DonateButton';

const EmergencyAppeal = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [showDonationForm, setShowDonationForm] = useState(false);

  const emergencyData = {
    title: "EMERGENCY RESPONSE",
    subtitle: "From Emergency Response to Long-Term Recovery",
    description: "Gramin Utthan Samity does whatever it takes to be there for communities in crisis. We work with communities to prepare for and mitigate the impact of disasters. We partner with governments and local organizations to provide immediate assistance when an emergency hits. In 2024, together, we responded to 112 emergency situations. Through our Children's Emergency Fund, we reached 23.8 million people – across 71 countries. Learn more about our history of emergency response.",
    stats: {
      emergencies: "112",
      peopleReached: "23.8M",
      countries: "71"
    },
    location: "Chamoli District, Uttarakhand",
    affectedPeople: "500+ families affected",
    casualties: "Several feared missing",
    urgency: "CRITICAL - Immediate response required",
    crisisDescription: "A devastating cloudburst has hit Chamoli district in Uttarakhand, causing widespread destruction. Multiple villages have been cut off, roads damaged, and several people are feared missing. The situation is critical and requires immediate humanitarian assistance.",
    needs: [
      "Emergency shelter and relief materials",
      "Food and clean drinking water",
      "Medical supplies and first aid",
      "Search and rescue operations",
      "Rehabilitation support for affected families"
    ],
    contactInfo: {
      phone: "+91-98765-43210",
      email: "contact@gusindia.org",
      address: "Gramin Utthan Samity, Emergency Response Unit"
    }
  };

  // Image data for the emergency appeal
  const images = {
    hero: "/3.jpeg", // Helicopter/disaster response image
    disaster: [
      "/2.jpeg", // Damaged infrastructure
      "/3.jpeg", // Flooded areas
      "/4.jpeg", // Rescue operations
    ],
    relief: [
      "/5.jpeg", // Relief distribution
      "/6.jpeg", // Medical assistance
    ],
    impact: [
      "/1.jpeg", // Before/after comparison
      "/2.jpeg", // Community impact
    ]
  };

  const protractedCrises = [
    {
      title: "The Global Hunger Crisis",
      description: "As conflicts escalate, the climate crisis deepens and global inequality widens, more and more children face the ever-growing threat of hunger.",
      image: "/1.jpeg",
      linkText: "LEARN MORE"
    },
    {
      title: "The Climate Crisis",
      description: "The threat posed to children and their rights by the climate crisis is real, and it is urgent. Its impacts are built into children's futures, even if we are able to curb global emissions.",
      image: "/2.jpeg",
      linkText: "LEARN MORE"
    },
    {
      title: "Afghanistan Humanitarian Crisis",
      description: "As the United States begins welcoming newly arriving Afghan refugees, Save the Children has mobilized to meet their most urgent needs. We stand committed to the Afghan people and our commitment to stay and deliver in Afghanistan, where we've been working since 1976.",
      image: "/3.jpeg",
      linkText: "LEARN MORE"
    }
  ];

  const currentEmergencies = [
    {
      title: "Chamoli Cloudburst Crisis",
      location: "Uttarakhand, India",
      description: "A devastating cloudburst has hit Chamoli district, causing widespread destruction and leaving hundreds of families in urgent need of assistance.",
      image: "/1.jpeg",
      status: "Active Response"
    },
    {
      title: "Flood Relief Operations",
      location: "Multiple States",
      description: "Heavy monsoon rains have caused severe flooding across multiple states, affecting thousands of families and requiring immediate humanitarian assistance.",
      image: "/2.jpeg",
      status: "Ongoing"
    },
    {
      title: "Cyclone Recovery",
      location: "Coastal Regions",
      description: "Post-cyclone recovery efforts continue as communities work to rebuild their lives and restore essential services.",
      image: "/3.jpeg",
      status: "Recovery Phase"
    }
  ];

  const handleDonate = () => {
    setShowDonationForm(true);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission logic here
    alert(`Thank you for your donation of ₹${donationAmount}. We will process this immediately for emergency relief.`);
    setShowDonationForm(false);
    setDonationAmount('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Like Save the Children */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img 
          src={images.hero} 
          alt="Emergency Response - Helicopter and Aid Workers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-8 left-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            {emergencyData.title}
          </h1>
        </div>
      </div>

      {/* Content Section - Description and Donate Button */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          {emergencyData.subtitle}
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
          {emergencyData.description}
        </p>
        <div className="text-center">
          <DonateButton 
            text="DONATE NOW" 
            size="large" 
            variant="primary" 
            onClick={handleDonate}
            className="font-bold"
          />
        </div>
      </div>

      {/* Responses to Protracted Humanitarian Crises */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Responses to Protracted Humanitarian Crises
        </h2>
        
        <div className="space-y-16">
          {protractedCrises.map((crisis, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{crisis.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{crisis.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 underline">
                  {crisis.linkText}
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={crisis.image} 
                  alt={crisis.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Emergency Responses */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Current Emergency Responses
        </h2>
        
        <div className="space-y-16">
          {currentEmergencies.map((emergency, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {emergency.status}
                  </span>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-red-600" />
                    {emergency.location}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{emergency.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{emergency.description}</p>
                <button className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-200 underline">
                  LEARN MORE →
                </button>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  src={emergency.image} 
                  alt={emergency.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* How We Help */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help in Emergencies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive emergency response approach ensures we can meet the immediate and long-term needs of affected communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Response</h3>
            <p className="text-gray-700">
              We provide emergency shelter, food, water, and medical care within hours of a disaster.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Recovery Support</h3>
            <p className="text-gray-700">
              We help communities rebuild their lives through long-term recovery programs and support.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Education & Protection</h3>
            <p className="text-gray-700">
              We ensure children continue their education and are protected during and after emergencies.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Support Makes a Difference</h2>
          <p className="text-xl mb-8 text-red-100">
            Every donation helps us respond quickly to emergencies and provide life-saving assistance to those in need.
          </p>
          
          {!showDonationForm ? (
            <DonateButton
              text="DONATE NOW"
              size="large"
              variant="secondary"
              onClick={handleDonate}
              className="font-bold mx-auto"
            />
          ) : (
            <form onSubmit={handleDonationSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-red-100 text-sm font-medium mb-2">
                  Donation Amount (₹)
                </label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Complete Donation
              </button>
              <button
                type="button"
                onClick={() => setShowDonationForm(false)}
                className="w-full text-red-100 hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">{emergencyData.contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">{emergencyData.contactInfo.address}</span>
              </div>
            </div>
            <div className="text-gray-700">
              <p className="mb-2">For media inquiries and emergency coordination:</p>
              <p className="font-semibold">{emergencyData.contactInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAppeal;
