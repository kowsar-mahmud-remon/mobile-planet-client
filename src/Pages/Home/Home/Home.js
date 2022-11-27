import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <Categories></Categories>
      <Advertised></Advertised>
    </div>
  );
};

export default Home;