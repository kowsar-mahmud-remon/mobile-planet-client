import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error));
  };


  const menuItems = <React.Fragment>
    <li className=''><Link to='/'>Home</Link></li>
    <li className=''><Link to='/blogs'>Blogs</Link></li>
    {
      isAdmin && <li className=''><Link to='/dashboard'>Dashboard</Link></li>
    }
    {
      isSeller && <>
        <li className=''><Link to='/myproducts'>My Product</Link></li>
        <li className=''><Link to='/addproduct'>Add A Product</Link></li>
      </>

    }
    {
      isBuyer && <li className=''><Link to='/myorders'>My Orders</Link></li>

    }

    {
      user?.uid ?
        <>
          <li className=''><button onClick={handleLogOut}>SignOut</button></li>
        </>
        :
        <li className=''><Link to='/login'>Login</Link></li>
    }
  </React.Fragment>;

  const navbarShadow = {
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.4)',
  };

  return (
    <div className='w-full bg-primary sticky top-0 z-10' style={navbarShadow}>
      <div className="max-w-[1440px] mx-auto navbar bg-primary text-white flex justify-between py-0" >
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="cursor-pointer normal-case text-xl pl-1 flex items-center">
            <img className='h-14' src={logo} alt="" />
            <h2 className='text-2xl'>Mobile Planet</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;