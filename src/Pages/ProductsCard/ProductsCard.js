import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import BookingModal from './BookingModal';



const ProductsCard = ({ product, setBooking }) => {
  const { user } = useContext(AuthContext);
  const { img, name, resale_price, original_price, years_of_use, posted_time, seller_name, condition_type, mobile_number, location, product_category, description, Year_of_purchase } = product;

  return (

    <div className="card border border-gray-300 bg-base-200 shadow-xl">
      <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className='text-lg'>Product Category: {product_category}</p>
        <p className='text-lg'>Resale Price: ${resale_price}</p>
        <p className='text-lg'>Original Price: ${original_price}</p>
        <p className='text-lg'>Condition Type: {condition_type}</p>
        <p className='text-lg'>Years of use: {years_of_use}</p>
        <p className='text-lg'>Years of purchase: {Year_of_purchase}</p>
        <p className='text-lg'>Description: {description}</p>
        <div className=" ">
          <h4 className='text-xl font-bold'>Seller Information</h4>
          <p>Name: {seller_name}</p>
          <p>Mobile: {mobile_number}</p>
          <p>Location: {location}</p>
        </div>
        <br />
        <p className='text-lg'>Post Time: {posted_time}</p>

        <div className="card-actions mt-5">
          <label
            htmlFor="mobile-planet"
            className="btn btn-primary"
            onClick={() => setBooking(product)}
          >Book Now</label>
        </div>

      </div>
    </div>
  );
};

export default ProductsCard;