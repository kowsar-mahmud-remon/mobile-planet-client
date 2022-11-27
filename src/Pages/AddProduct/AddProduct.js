import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  // const { img, name, resale_price, original_price, years_of_use, posted_time, seller_name, condition_type, mobile_number, location, product_category, description, Year_of_purchase } = product;


  const handleAddProduct = (data) => {
    console.log('data', data);
    console.log(data);


    const productDetails = {
      name: data.name,
      img: data.photoURL,
      resale_price: data.resale_price,
      original_price: data.original_price,
      years_of_use: data.years_of_use,
      posted_time: new Date(),
      seller_name: user.displayName,
      condition_type: data.condition_type,
      mobile_number: data.mobile_number,
      location: data.location,
      product_category: data.product_category,
      description: data.description,
      Year_of_purchase: data.Year_of_purchase,
      email: user.email
    };

    console.log("productDetails", productDetails);

    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log('addProduct', data);
        if (data.acknowledged) {
          toast.success('Product create successful');
          navigate('/myproducts');
        }
      });

  };



  return (
    <div className='flex justify-center items-center mb-16'>
      <div className='w-96 p-7'>
        <h2 className='text-3xl text-center text-primary my-5'>Add Product</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Product Name</span></label>
            <input type="text" {...register("name", {
              required: "Name is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs my-3 border border-stone-300 rounded-lg">
            <select {...register("condition_type", { required: true })}>
              <option value="">Condition Type</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
            {/* {errors.category && <p className='text-red-500'>{errors.category.message}</p>} */}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Photo URL</span></label>
            <input type="text" {...register("photoURL", {
              required: "photoURL is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.photoURL && <p className='text-red-500'>{errors.photoURL.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Resale Price</span></label>
            <input type="number" {...register("resale_price", {
              required: "resale_price is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.resale_price && <p className='text-red-500'>{errors.resale_price.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Original Price</span></label>
            <input type="number" {...register("original_price", {
              required: "original_price is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.original_price && <p className='text-red-500'>{errors.original_price.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Years of Use</span></label>
            <input type="number" {...register("years_of_use", {
              required: "years_of_use is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.years_of_use && <p className='text-red-500'>{errors.years_of_use.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Year of Purchase</span></label>
            <input type="number" {...register("Year_of_purchase", {
              required: "Year_of_purchase is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.Year_of_purchase && <p className='text-red-500'>{errors.Year_of_purchase.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs my-3 border border-stone-300 rounded-lg">
            <select {...register("product_category", { required: true })}>
              <option value="">Product Category</option>
              <option value="iPhone">iPhone</option>
              <option value="Samsung">Samsung</option>
              <option value="Xiaomi">Xiaomi</option>
            </select>
            {/* {errors.category && <p className='text-red-500'>{errors.category.message}</p>} */}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Mobile Number</span></label>
            <input type="number" {...register("mobile_number", {
              required: "mobile_number is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.mobile_number && <p className='text-red-500'>{errors.mobile_number.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Location</span></label>
            <input type="text" {...register("location", {
              required: "location is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Description</span></label>
            <input type="text" {...register("description", {
              required: "description is Required"
            })} className="input input-bordered w-full max-w-xs" />
            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
          </div>

          <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
          {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}

        </form>

      </div>
    </div>
  );
};

export default AddProduct;