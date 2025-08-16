import React from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Footer from '../components/Footer';

const StoriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Stories />
      <Footer />
    </div>
  );
};

export default StoriesPage;
