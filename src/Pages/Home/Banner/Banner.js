import React from 'react';
import mobile from '../../../assets/bannerimg.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="hero bannerImg py-10 text-white mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={mobile} className="rounded-sm  lg:w-1/2" alt='' />
        <div>
          <h1 className="text-5xl font-bold">Mobile Phones At Best Price Only On Mobile Planet</h1>
          <p className="py-6">Buy used mobile phones at the best prices. Mobile Planet is the right platform for you to look for a mobile phone</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;