import React from 'react';
import facebook from '../../assets/FacebookOctDenoiserBeauty_001 copy.png';
import pinterest from '../../assets/3D Pinterest.png';
import twitter from '../../assets/TwitterOctDenoiserBeauty_001 copy.png';
import youtube from '../../assets/YoutubeOctDenoiserBeauty_001 copy (1).png';
import instagram from '../../assets/InstagramOctDenoiserBeauty_001 copy.png';
import linkedin from '../../assets/LinkedInOctDenoiserBeauty_001 copy.png';

const Contact = () => {
  return (
    <div className='py-[88px] bg-[#FFF9F2] '>
      <div className="flex justify-center items-center space-x-7">
        <h2 className='text-4xl text-[#192626] font-bold'>Connect With Us</h2>
        <div className="social-icon flex space-x-2 items-center">
          <img src={facebook} alt="Facebook" />
          <img src={pinterest} alt="Pinterest" />
          <img src={twitter} alt="Twitter" />
          <img src={youtube} alt="YouTube" />
          <img src={instagram} alt="Instagram" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
