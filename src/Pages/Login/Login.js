import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();


  const handleLogin = data => {
    console.log(data);


  };
  return (
    <div className='h-[600px] flex justify-center items-center'>
      <div className="w-96 p-7">
        <h2 className='text-3xl text-center text-primary'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Email</span>
            </label>
            <input {...register("email", { required: 'Email is required' })} type="email" className="input input-bordered w-full max-w-xs" />
            {errors?.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Password</span>
            </label>
            <input {...register("password", {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be 6 characters or longer' }
            })} type="password" className="input input-bordered w-full max-w-xs" />
            {errors?.password && <p className='text-red-600'>{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text-alt">Forget Password?</span>
            </label>
          </div>


          <input className='btn btn-primary w-full' value='Login' type="submit" />
          <div className="">
          </div>
        </form>
        <p>New to Mobile Planer <Link className='text-primary' to='/signup'>Create a new Account</Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;