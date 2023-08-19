import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Experience from '../Experience/Experience';
import Contact from '../Contact/contact';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <Categories></Categories>
      <Advertised></Advertised>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
};

export default Home;