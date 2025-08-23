import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmergencyAppeal from '../components/EmergencyAppeal';

const EmergencyAppealPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EmergencyAppeal />
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyAppealPage;
