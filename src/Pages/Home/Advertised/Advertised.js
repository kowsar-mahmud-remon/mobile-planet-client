import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedCard from './AdvertisedCard';

const Advertised = () => {

  const { data: advertised = [] } = useQuery({
    queryKey: ['advertised'],
    queryFn: () => fetch('https://mobile-planet-server.vercel.app/advertised')
      .then(res => res.json())
  });

  return (
    <div className="px-5 py-5 bg-[#E9F5F5]">

      {
        advertised?.length &&
        <div className='mt-10 mb-20'>
          <div className='text-center my-10'>
            <h2 className='text-4xl font-bold'>Advertise Product</h2>
          </div>

          <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
              advertised?.map(card => <AdvertisedCard
                key={card._id}
                card={card}
              ></AdvertisedCard>)
            }
          </div>
        </div>
      }

    </div>
  );
};

export default Advertised;