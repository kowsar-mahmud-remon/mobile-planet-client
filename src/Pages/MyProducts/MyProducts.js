import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);


  const url = `https://mobile-planet-server.vercel.app/products?email=${user?.email}`;

  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ['products', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  });

  return (
    <div className=' my-12 mx-5'>
      <h2 className='text-4xl text-center mb-10'>My Products: {products.length}</h2>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map(product => <MyProductsCard
            key={product._id}
            product={product}
            isLoading={isLoading}
            refetch={refetch}
          ></MyProductsCard>)
        }
      </div>

    </div>
  );
};

export default MyProducts;