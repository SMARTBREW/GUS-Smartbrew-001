import React from 'react';
import Header from '../components/Header';
import Programs from '../components/Programs';
import Footer from '../components/Footer';
import GetInvolved from '../components/GetInvolved';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Programs />
       <GetInvolved />
      <Footer />
    </div>
  );
};

export default ProgramsPage;
