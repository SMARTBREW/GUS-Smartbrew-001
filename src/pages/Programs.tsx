import React from 'react';
import PageLayout from '../components/PageLayout';
import Programs from '../components/Programs';
import SEOHead from '../components/SEOHead';

const ProgramsPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Our Programs - Rural Development & Women Empowerment"
        description="Explore Gramin Utthan Samiti's comprehensive rural development programs in Uttarakhand. Education, healthcare, women empowerment, and sustainable development initiatives."
        keywords="rural development programs, women empowerment programs, education programs, healthcare initiatives, village development, Gramin Utthan Samiti programs, Uttarakhand development"
        canonicalUrl="/programs"
      />
      <Programs />
    </PageLayout>
  );
};

export default ProgramsPage;
