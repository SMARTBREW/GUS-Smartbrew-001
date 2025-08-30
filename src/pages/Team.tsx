import React from 'react';
import PageLayout from '../components/PageLayout';
import Team from '../components/Team';
import SEOHead from '../components/SEOHead';

const TeamPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Our Team - Gramin Utthan Samiti Leadership"
        description="Meet the dedicated team behind Gramin Utthan Samiti's rural development work in Uttarakhand. Our experienced leaders drive women empowerment and village transformation programs."
        keywords="NGO team, rural development team, Gramin Utthan Samiti leadership, NGO founders, community development team, Uttarakhand NGO staff"
        canonicalUrl="/team"
      />
      <Team />
    </PageLayout>
  );
};

export default TeamPage;
