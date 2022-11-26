import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price } = booking;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSaveBooking = (data) => {
    console.log('data', data);

    const bookingUserInfo = {
      name: data.name,
      email: data.email,
      item_name: data.item_name,
      price: data.price,
      user_location: data.user_location,
      user_phone: data.user_phone,
    };

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingUserInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log('addUserInfo', data);
      });

  };

  return (
    <div>

      <input type="checkbox" id="mobile-planet" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Book Now</h3>

          <form onSubmit={handleSubmit(handleSaveBooking)}>

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
  );
};

export default BookingModal;