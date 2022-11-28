import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className=''>
      <Navbar></Navbar>

      <div className="flex justify-center my-5">
        <ul><li className='py-3 px-5 bg-primary mr-2 text-white rounded'><Link to='/dashboard/allsellers'>All Sellers</Link></li></ul>
        <ul><li className='py-3 px-5 bg-primary mr-2 text-white rounded'><Link to='/dashboard/allbuyers'>All Buyers</Link></li></ul>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;