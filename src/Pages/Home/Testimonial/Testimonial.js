import React from 'react';
import starImg from '../../../assets/Star 6.png';
// import data from './data';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/Arrow long right.png';
import { data } from './data';

const Testimonial = () => {
  return (
    <div className=' py-16 bg-[#E9F5F5]'>
      <h2 className='text-4xl font-bold text-[#192626] text-center mb-[48px]'>What People say about us</h2>

      <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mx-5">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center mx-auto w-full">
              <div className={`custom_shadow py-[20px] px-[28px] bg-white rounded-lg`}>
                <div className="flex items-center space-x-3">
                  <img className='w-20 h-20' src={item.img} alt="" />
                  <div className="">
                    <div className="flex items-center space-x-1">
                      <img src={starImg} alt="" />
                      <img src={starImg} alt="" />
                      <img src={starImg} alt="" />
                      <img src={starImg} alt="" />
                      <img src={starImg} alt="" />
                    </div>
                    <h2 className='font-bold text-[20px] text-[#313D3D] pt-2'>{item.name}</h2>
                    <p className='text-primary text-[12px]'>Ceo of Telecom</p>
                  </div>
                </div>

                <p className='text-[16px] text-gray-500 leading-[28px] py-5'>{item.description}</p>

                <div className="pt-4 pb-3">
                  <Link to='/' className='flex items-center'>
                    <button className='text-primary font-semibold text-[16px] mr-2'>View case study</button>
                    <img src={arrow} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
