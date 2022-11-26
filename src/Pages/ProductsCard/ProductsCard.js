import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';



const ProductsCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { img, name, resale_price, original_price, years_of_use, posted_time, seller_name, condition_type, mobile_number, location, product_category, description, Year_of_purchase } = product;

  const { register, handleSubmit, formState: { errors } } = useForm();


  const handleSignUp = (data) => {
    console.log('data', data);
  };


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

          <label htmlFor="mobile-planet" className="btn btn-primary">Book Now</label>

          <input type="checkbox" id="mobile-planet" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">Book Now</h3>

              <form onSubmit={handleSubmit(handleSignUp)}>

                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text">Name</span></label>
                  <input type="text" defaultValue={user.displayName} readOnly {...register("name")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text">Email</span></label>
                  <input type="email" defaultValue={user.email} readOnly {...register("email")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text">Item Name</span></label>
                  <input type="text" defaultValue={name} readOnly {...register("item_name")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text">Price</span></label>
                  <input type="text" defaultValue={resale_price} readOnly {...register("price")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text">Phone Number</span></label>
                  <input type="number" placeholder='give your phone number' {...register("user_phone", {
                    required: "Phone Number is Required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.user_phone && <p className='text-red-500'>{errors.user_phone.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label"> <span className="label-text">Location</span></label>
                  <input type="text" placeholder='give your location' {...register("user_location", {
                    required: "Location is Required"
                  })} className="input input-bordered w-full max-w-xs" />
                  {errors.user_location && <p className='text-red-500'>{errors.user_location.message}</p>}
                </div>

                <input className='btn btn-primary w-full mt-4' value="Submit " type="submit" />
              </form>

              <div className="modal-action justify-center">
                <label htmlFor="mobile-planet" className="btn text-sm">Cancel</label>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ProductsCard;