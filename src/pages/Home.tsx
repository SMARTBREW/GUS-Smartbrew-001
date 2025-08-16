import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Impact from '../components/Impact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - White Background */}
      <section className="bg-white">
        <Hero />
      </section>
      
      {/* CTA Section - White Background */}
      <section className="bg-gray-50">
        <CTA />
      </section>
      
      {/* Impact Section - Gray Background */}
      <section className="bg-white">
        <Impact />
      </section>

      
      <Footer />
    </div>
  );
};

export default Home;