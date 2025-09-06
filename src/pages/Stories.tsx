import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Stories from '../components/sections/Stories';
import SEOHead from '../components/seo/SEOHead';

const StoriesPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Success Stories - Rural Transformation by Gramin Utthan Samiti"
        description="Read inspiring success stories of rural transformation by Gramin Utthan Samiti. Discover how our programs have empowered women and developed villages across Uttarakhand."
        keywords="NGO success stories, rural transformation stories, women empowerment stories, village development impact, Gramin Utthan Samiti achievements, Uttarakhand development"
        canonicalUrl="/stories"
      />
      <Stories />
    </PageLayout>
  );
};

export default StoriesPage;
