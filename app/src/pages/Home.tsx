import React from 'react';

import HomeHeader from '../components/home/HomeHeader';
import HomeCategories from '../components/home/HomeCategories';
import HowItWorksSection from '../components/home/HowItWorksSection';

type Prop = {}

const Home = (_: Prop): React.ReactElement => {
  return (
    <div className='relative'>
      <HomeHeader />
      <HomeCategories />
      <HowItWorksSection />
    </div>
  );
}

export default Home;
