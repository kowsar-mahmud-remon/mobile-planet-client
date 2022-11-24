import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
  const cardData = [
    {
      _id: 1,
      brandName: 'iPhone',
      logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      _id: 2,
      brandName: 'Samsung',
      logo: 'https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbXN1bmclMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      _id: 3,
      brandName: 'Xiaomi',
      logo: 'https://images.unsplash.com/photo-1662948100180-7bc43f6fcab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8WGlhb21pJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
  ];
  return (
    <div className=" my-20">
      <div className='text-center my-10'>
        <h2 className='text-4xl font-bold'>Buy used mobile phones at the best prices</h2>
      </div>

      <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          cardData.map(card => <CategoriesCard
            key={card._id}
            card={card}
          ></CategoriesCard>)
        }
      </div>
    </div>



  );
};

export default Categories;