import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/404.jpg';

const ErrorPage = () => {
  return (
    <div className='text-center'>
      <img className=' w-96 h-96 mx-auto' src={img} alt="" />
      <h2 className='text-3xl text-red-500'>This Route is Not Exist</h2>
      <Link to='/home'><button className='mt-5 px-4 py-2 rounded bg-primary text-white font-bold'>Go Back to Home Page</button></Link>
    </div>
  );
};

export default ErrorPage;