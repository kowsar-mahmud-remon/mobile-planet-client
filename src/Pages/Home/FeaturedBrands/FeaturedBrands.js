import React from 'react';
import amazon from '../../../assets/amazon.png';
import apple from '../../../assets/apple.png';
import google from '../../../assets/google.png';
import microsoft from '../../../assets/microsoft.png';
import oneplus from '../../../assets/oneplus.png';
import samsung from '../../../assets/samsung.png';
import { Link } from 'react-router-dom';

const FeaturedBrands = () => {
  const data = [
    {
      id: 1,
      title: "Amazon",
      img: amazon
    },
    {
      id: 2,
      title: "Apple",
      img: apple
    },
    {
      id: 3,
      title: "Google",
      img: google
    },
    {
      id: 4,
      title: "Microsoft",
      img: microsoft
    },
    {
      id: 5,
      title: "OnePlus",
      img: oneplus
    },
    {
      id: 6,
      title: "Samsung",
      img: samsung
    },
  ];
  return (
    <div className='my-20 mx-5'>
      <h2 className='text-4xl font-bold text-center'>Featured Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
        {
          data.map((brand) => <Link key={brand.id} to='category/Samsung'>
            <div className=" px-12 py-3 border border-gray-300 hover:border-primary rounded cursor-pointer">
              <div className="flex justify-center">
                <img className=' w-[60px] h-[60px]' src={brand.img} alt="" />
              </div>
              <h4 className='text-lg text-primary text-center mt-4'>{brand.title}</h4>
            </div>
          </Link>)
        }
      </div>
    </div>
  );
};

export default FeaturedBrands;