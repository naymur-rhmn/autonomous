import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeatureOne from '../../components/FeatureOne/FeatureOne';
import FeatureTwo from '../../components/FeatureTwo/FeatureTwo';
import Feedback from '../../components/Feedback/Feedback';
import Hero from '../../components/Hero/Hero';
import ShopBanner from '../../components/ShopBanner/ShopBanner';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeatureOne></FeatureOne>
      <Banner></Banner>
      <FeatureTwo></FeatureTwo>
      <ShopBanner></ShopBanner>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;