import React from 'react';
import PageLayout from '../components/PageLayout';
import EmergencyAppeal from '../components/EmergencyAppeal';
import SEOHead from '../components/SEOHead';

const EmergencyAppealPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Emergency Response - Help Disaster Relief in Uttarakhand"
        description="Urgent help needed for disaster relief in Uttarakhand. Support Gramin Utthan Samiti's emergency response efforts. Donate now to help families affected by natural disasters."
        keywords="emergency relief Uttarakhand, disaster relief donation, cloudburst relief, emergency response NGO, disaster relief fund, Uttarakhand emergency"
        canonicalUrl="/emergency"
      />
      <EmergencyAppeal />
    </PageLayout>
  );
};

export default EmergencyAppealPage;
