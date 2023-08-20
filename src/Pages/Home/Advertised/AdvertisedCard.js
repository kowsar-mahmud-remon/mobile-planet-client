import React from 'react';

const AdvertisedCard = ({ card }) => {
  const { img, name, resale_price, original_price, years_of_use, posted_time, seller_name, condition_type, mobile_number, location, product_category, description, Year_of_purchase } = card;

  return (
    <div className="card bg-gray-200 shadow-xl">
      <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className='text-lg'>Product Category: {product_category}</p>
        <p className='text-lg'>Resale Price: ${resale_price}</p>
        <p className='text-lg'>Original Price: ${original_price}</p>
        <p className='text-lg'>Condition Type: {condition_type}</p>
        {/* <p className='text-lg'>Years of use: {years_of_use}</p>
        <p className='text-lg'>Years of purchase: {Year_of_purchase}</p>
        <p className='text-lg'>Description: {description}</p>
        <p className='text-lg'>Post Time: {posted_time}</p> */}

        {/* <div className="card-actions mt-5 justify-between">
          <button className="btn btn-primary">Available </button>
          <button onClick={handleAdvertised} className="btn btn-info">Advertise </button>
          <button className="btn btn-error">Delete </button>
        </div> */}

      </div>
    </div>
  );
};

export default AdvertisedCard;