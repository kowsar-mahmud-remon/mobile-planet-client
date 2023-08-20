import React from 'react';
import facebook from '../../../assets/FacebookOctDenoiserBeauty_001 copy.png';
import pinterest from '../../../assets/3D Pinterest.png';
import twitter from '../../../assets/TwitterOctDenoiserBeauty_001 copy.png';
import youtube from '../../../assets/YoutubeOctDenoiserBeauty_001 copy (1).png';
import instagram from '../../../assets/InstagramOctDenoiserBeauty_001 copy.png';
import linkedin from '../../../assets/LinkedInOctDenoiserBeauty_001 copy.png';

const ContactPage = () => {
  return (
    <div className='py-[88px] bg-[#FFF9F2] '>
      <div className="lg:flex justify-center items-center lg:space-x-7">
        <h2 className='text-4xl text-[#192626] font-bold text-center'>Connect With Us</h2>
        <div className="flex justify-center mt-3 lg:mt-0">
          <div className="social-icon flex space-x-2 items-center">
            <img className='cursor-pointer' src={facebook} alt="Facebook" />
            <img className='cursor-pointer' src={pinterest} alt="Pinterest" />
            <img className='cursor-pointer' src={twitter} alt="Twitter" />
            <img className='cursor-pointer' src={youtube} alt="YouTube" />
            <img className='cursor-pointer' src={instagram} alt="Instagram" />
            <img className='cursor-pointer' src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
