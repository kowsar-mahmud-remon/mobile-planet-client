import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [counted, setCounted] = useState(false);
  const [years, setYears] = useState(0);
  const [sellers, setSellers] = useState(0);
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    if (!counted) {
      const interval = setInterval(() => {
        if (years < 10) {
          setYears((prevYears) => prevYears + 1);
        }
        if (sellers < 900) {
          setSellers((prevSellers) => prevSellers + 1);
        }
        if (clients < 8000) {
          setClients((prevClients) => prevClients + 1);
        }
        if (products < 1200) {
          setProducts((prevProducts) => prevProducts + 1);
        }

        if (years === 10 && sellers === 900 && clients === 8000 && products === 1200) {
          clearInterval(interval);
          setCounted(true);
        }
      }, 5);

      return () => clearInterval(interval);
    }
  }, [counted, years, sellers, clients, products]);

  return (
    <div className='my-10 mx-5'>
      <h2 className='text-4xl text-center mb-10 font-bold'>Our Success</h2>
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 flex-col lg:flex-row">

        <div className="relative overflow-hidden text-center py-16 border rounded-lg shadow-xl bg-gray-200">
          <h2 className='text-5xl font-bold mb-4 text-primary'>{years}+</h2>
          <p className=' text-xl'>Years of Success</p>

          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-25"></div>
        </div>

        <div className="relative overflow-hidden text-center py-16 border rounded-lg shadow-xl bg-gray-200">
          <h2 className='text-5xl font-bold mb-4 text-primary'>{sellers}+</h2>
          <p className=' text-xl'>Sellers</p>

          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-25"></div>
        </div>

        <div className="relative overflow-hidden text-center py-16 border rounded-lg shadow-xl bg-gray-200">
          <h2 className='text-5xl font-bold mb-4 text-primary'>{clients}+</h2>
          <p className=' text-xl'>Clients</p>

          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-25"></div>
        </div>

        <div className="relative overflow-hidden text-center py-16 border rounded-lg shadow-xl bg-gray-200">
          <h2 className='text-5xl font-bold mb-4 text-primary'>{products}+</h2>
          <p className=' text-xl'>Products Sales</p>

          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-25"></div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
