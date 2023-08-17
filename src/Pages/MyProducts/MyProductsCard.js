import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyProductsCard = ({ product, isLoading, refetch }) => {
  const { img, name, resale_price, original_price, years_of_use, posted_time, seller_name, condition_type, mobile_number, location, product_category, description, Year_of_purchase } = product;

  const navigate = useNavigate();

  const handleAdvertised = () => {
    const AdvertiseItemDetails = {
      img, name, resale_price, original_price, years_of_use, posted_time, seller_name, condition_type, mobile_number, location, product_category, description, Year_of_purchase
    };

    fetch('https://mobile-planet-server.vercel.app/advertised', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(AdvertiseItemDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log('advertisedUser', data);
        if (data.acknowledged) {
          toast.success('Advertise Successful');
          navigate('/');
        }
      });

  };

  const handleDelete = (product) => {
    const proceed = window.confirm('Are you sure, you delete Seller?');
    if (proceed) {
      fetch(`https://mobile-planet-server.vercel.app/products/${product?._id}`, {
        method: 'DELETE'

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success(`Product Deleted Successfully`);
          }
        });
    }

  };

  if (isLoading) {
    return <div className='text-center my-20'>
      <button className="btn btn-square btn-outline border-0 loading text-success"></button>
    </div>;
  }

  return (
    <div className="card bg-gray-200 shadow-xl">
      <figure><img className='w-full h-60' src={img} alt="Mobile" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className='text-lg'>Product Category: {product_category}</p>
        <p className='text-lg'>Resale Price: ${resale_price}</p>
        <p className='text-lg'>Original Price: ${original_price}</p>
        <p className='text-lg'>Condition Type: {condition_type}</p>
        <p className='text-lg'>Years of use: {years_of_use}</p>
        <p className='text-lg'>Years of purchase: {Year_of_purchase}</p>
        <p className='text-lg'>Description: {description}</p>
        <p className='text-lg'>Post Time: {posted_time}</p>

        <div className="card-actions mt-5 justify-between">
          <button className="btn btn-primary">Available </button>
          <button onClick={handleAdvertised} className="btn btn-info">Advertise </button>
          <button onClick={() => handleDelete(product)} className="btn btn-error">Delete</button>
        </div>

      </div>
    </div>
  );
};

export default MyProductsCard;