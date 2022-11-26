import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ card }) => {
  const { _id, brandName, logo } = card;

  return (
    // <div className='card text-white p-6 lg:card-side shadow-xl'>

    <div className="card shadow-xl">
      <figure><img className=' h-72 w-full' src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <div className="card-actions justify-center">
          <Link to={`/category/${_id}`}><button className="btn btn-primary">{brandName}</button></Link>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default CategoriesCard;