import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Experience from '../Experience/Experience';
import TryMobilePlanet from '../TryMobilePlanet/TryMobilePlanet';
import Testimonial from '../Testimonial/Testimonial';
import ContactPage from '../ContactPage/ContactPage';
import NewBanner from '../Banner/NewBanner';
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands';
import HotDeals from '../HotDeals/HotDeals';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Categories></Categories>
      <NewBanner></NewBanner>
      <FeaturedBrands></FeaturedBrands>
      <HotDeals></HotDeals>
      <Advertised></Advertised>
      <Experience></Experience>
      <Testimonial></Testimonial>
      <TryMobilePlanet></TryMobilePlanet>
      <ContactPage></ContactPage>
    </div>
  );
};

export default Home;