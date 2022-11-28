import React from 'react';

const Experience = () => {
  return (
    <div className='my-20'>
      <h2 className='text-4xl text-center mb-10 font-bold'>Our Success</h2>
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 flex-col lg:flex-row">

        <div className="text-center py-16 border rounded bg-base-300">
          <h2 className='text-5xl font-bold mb-4 text-primary'>10</h2>
          <p className=' text-xl'>Years of Success</p>
        </div>
        <div className="text-center py-16 border rounded bg-base-300">
          <h2 className='text-5xl font-bold mb-4 text-primary'>900+</h2>
          <p className=' text-xl'>Sellers</p>
        </div>
        <div className="text-center py-16 border rounded bg-base-300">
          <h2 className='text-5xl font-bold mb-4 text-primary'>8000+</h2>
          <p className=' text-xl'>Clients</p>
        </div>
        <div className="text-center py-16 border rounded bg-base-300">
          <h2 className='text-5xl font-bold mb-4 text-primary'>1200+</h2>
          <p className=' text-xl'>Products Sales</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;