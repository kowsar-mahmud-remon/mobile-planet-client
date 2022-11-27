import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Category from '../../Pages/Category/Category';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyOrders from '../../Pages/MyOrders/MyOrders';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
        path: '/category/:id',
        element: <PrivateRoute><Category></Category></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/myorders',
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
      },
      {
        path: '/myproducts',
        element: <MyProducts></MyProducts>
      }
    ]
  }
]);

export default router;