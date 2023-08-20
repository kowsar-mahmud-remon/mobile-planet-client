import React from 'react';
import hotDeals1 from '../../../assets/hotDeals1.jpeg';
import hotDeals2 from '../../../assets/hotDeals2.jpeg';
import hotDeals3 from '../../../assets/hotDeals3.jpeg';
import hotDeals4 from '../../../assets/hotDeals4.jpeg';
import { Link } from 'react-router-dom';

const HotDeals = () => {
  const data = [
    {
      id: 1,
      img: hotDeals1
    },
    {
      id: 2,
      img: hotDeals2
    },
    {
      id: 3,
      img: hotDeals3
    },
    {
      id: 4,
      img: hotDeals4
    }
  ];
  return (
    <div className=' grid gap-7 py-5  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 mx-5'>
      {
        data.map((image) => <Link to='/category/Samsung' key={image.id}>
          <div className="rounded cursor-pointer">
            <img className=' w-full' src={image.img} alt="" />
          </div>
        </Link>)
      }
    </div>
  );
};

export default HotDeals;