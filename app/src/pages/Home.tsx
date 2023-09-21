import React from 'react';

import HomeHeader from '../components/home/HomeHeader';

type Prop = {}

const Home = (_: Prop): React.ReactElement => {
  return (
    <div className='relative'>
      <HomeHeader />
    </div>
  );
}

export default Home;
