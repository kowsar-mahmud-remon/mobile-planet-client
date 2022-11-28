import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import AllBuyers from '../../Pages/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/AllSellers/AllSellers';
import Blogs from '../../Pages/Blogs/Blogs';
import Category from '../../Pages/Category/Category';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyOrders from '../../Pages/MyOrders/MyOrders';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import SellerRoute from '../AdminRoute/SellerRoute';
import BuyerRoute from '../AdminRoute/BuyerRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/category/:product_category',
        element: <PrivateRoute><Category></Category></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.product_category}`)
      },
      {
        path: '/myorders',
        element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
      },
      {
        path: '/myproducts',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: '/addproduct',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: ('/dashboard/allsellers'),
        element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
      },
      {
        path: ('/dashboard/allbuyers'),
        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
      },
    ]
  }
]);

export default router;