import React from 'react';
import backgroundImg from '../../../assets/try.jpg';
import { Link } from 'react-router-dom';

const TryMobilePlanet = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`, // Use the imported image
    backgroundSize: 'cover', // Adjust the size as needed
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  return (
    <div className={` py-20 rounded`} style={backgroundImageStyle}>
      <h2 className="text-[50px] font-bold text-center text-white">
        Try Mobile Planet free for 14 days
      </h2>
      <p className="text-[18px] text-center pt-6 pb-9 text-white">
        Mobile Planet syncs with the apps you’re already used
      </p>
      <div className="flex justify-center">
        <Link to='/category/Samsung'>
          <button className="px-8 py-4 text-[16px] font-semibold text-primary bg-white rounded-lg">
            Start my free 14 days trial
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TryMobilePlanet;
