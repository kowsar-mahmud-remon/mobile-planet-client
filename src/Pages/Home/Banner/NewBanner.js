import React from 'react';
import img from "../../../assets/Desktop_iP14promax256.jpg";
import { Link } from 'react-router-dom';
// import './Banner.css';


const NewBanner = () => {
  return (
    <div class="mx-5 my-20">
      <Link to='/category/iPhone'>
        <div class="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
          <img
            src={img}
            class="w-full rounded h-32 lg:h-48"
            alt="mobile" />
          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-25"></div>
        </div>
      </Link>
    </div>
  );
};

export default NewBanner;