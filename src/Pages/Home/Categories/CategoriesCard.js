import React from 'react';

const CategoriesCard = ({ card }) => {
  const { brandName, logo } = card;

  return (
    // <div className='card text-white p-6 lg:card-side shadow-xl'>

    <div className="card shadow-xl">
      <figure><img className=' h-72 w-full' src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <div className="card-actions justify-center">
          <button className="btn btn-primary">{brandName}</button>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default CategoriesCard;