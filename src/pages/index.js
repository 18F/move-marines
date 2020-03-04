import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
//import Tagline from '../components/tagline';
import Highlights from '../components/highlights';
import ServiceBranches from '../components/service-branches';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Highlights />
    <ServiceBranches />
  </Layout>
);

export default IndexPage;
