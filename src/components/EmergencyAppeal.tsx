import React, { useState } from 'react';
import { AlertTriangle, Heart, Phone, MapPin, Clock, Users, DollarSign, ArrowRight, Camera, Image, Globe, Shield, BookOpen } from 'lucide-react';
import DonateButton from './DonateButton';
import { DESIGN_SYSTEM } from '../styles/designSystem';

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
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Emergency Response - Disaster Relief Operations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-normal mb-4">Emergency Response</h1>
            <p className="text-xl lg:text-2xl font-light max-w-2xl mx-auto">
              Rapid response and long-term recovery for communities in crisis
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
                Natural disasters and humanitarian crises in Uttarakhand leave communities devastated, 
                with families losing homes, livelihoods, and access to basic necessities. The mountainous 
                terrain and remote locations make emergency response challenging, requiring immediate 
                intervention to save lives and provide critical support.
              </p>
            </div>
          </div>
        </div>

        {/* Rapid Response Operations */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
            Rapid Response Operations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Rapid Response Team"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-6">Immediate Crisis Intervention</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our emergency response teams are trained to deploy within hours of a disaster, 
                providing immediate assistance to affected communities. We coordinate with local 
                authorities, conduct rapid needs assessments, and establish emergency relief operations 
                to ensure no community is left behind.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our rapid response includes search and rescue operations, emergency medical care, 
                immediate shelter provision, and distribution of essential supplies like food, water, 
                and emergency kits. We work around the clock to stabilize crisis situations and 
                prevent further loss of life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In 2024 alone, we responded to 112 emergency situations across 71 countries, 
                reaching over 23.8 million people in need. Our teams are equipped with the latest 
                emergency response technology and work in coordination with international relief networks.
              </p>
            </div>
          </div>
        </div>

        {/* Relief Distribution and Support */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
            Relief Distribution and Support
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Relief Distribution"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl font-normal text-gray-800 mb-6">Comprehensive Relief Operations</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our relief operations focus on providing comprehensive support to disaster-affected 
                communities. We establish distribution centers, coordinate with local partners, and 
                ensure that relief materials reach the most vulnerable populations, including children, 
                elderly, and people with disabilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We provide emergency shelter materials, food and clean drinking water, medical supplies 
                and first aid, clothing and blankets, and essential hygiene kits. Our relief packages 
                are designed to meet immediate needs while supporting dignity and safety of affected families.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our relief operations have successfully supported over 500 families in recent disasters, 
                providing immediate assistance and laying the foundation for long-term recovery and rehabilitation.
              </p>
            </div>
          </div>
        </div>

        {/* Long-term Recovery and Rehabilitation */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
            Long-term Recovery and Rehabilitation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Recovery and Rehabilitation"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-6">Building Resilient Communities</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Beyond immediate crisis response, we focus on long-term recovery and rehabilitation 
                to help communities rebuild stronger and more resilient. Our recovery programs include 
                infrastructure reconstruction, livelihood restoration, and community capacity building.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We work with communities to rebuild homes, restore essential services, rehabilitate 
                damaged infrastructure, and implement disaster preparedness programs. Our approach 
                emphasizes community participation and local ownership to ensure sustainable recovery.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our long-term recovery programs, we help communities not only rebuild what was lost, 
                but also develop better systems and infrastructure to withstand future disasters. 
                We're committed to staying with communities until they're fully recovered and resilient.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Images and Content */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 mb-8 text-center">
            Our Emergency Response in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Search and Rescue"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Medical Assistance"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Community Support"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our emergency response programs have transformed how communities in Uttarakhand 
                prepare for and recover from disasters. From immediate crisis intervention to 
                long-term rehabilitation, we provide comprehensive support that saves lives 
                and builds resilience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The impact goes beyond individual disaster responses - we're building a culture 
                of preparedness and resilience that will benefit communities for generations to come. 
                Our emergency response, relief distribution, and recovery programs work together 
                to create comprehensive disaster management solutions.
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
              <div className="text-4xl font-normal text-red-600 mb-2">112</div>
              <div className="text-gray-600">Emergency Responses</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl font-normal text-red-600 mb-2">23.8M</div>
              <div className="text-gray-600">People Reached</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl font-normal text-red-600 mb-2">71</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl font-normal text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-red-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-normal text-gray-800 mb-4">
              Support Our Emergency Response
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Your donation can help us provide immediate emergency relief, support long-term recovery, 
              and build disaster-resilient communities across Uttarakhand and beyond.
            </p>
            <DonateButton 
              text="Donate Now" 
              size="large" 
              variant="primary" 
              onClick={handleDonate}
            />
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-normal text-gray-800 mb-6">Emergency Relief Donation</h3>
            <form onSubmit={handleDonationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount (₹)
                </label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Donate
                </button>
                <button
                  type="button"
                  onClick={() => setShowDonationForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyAppeal;
