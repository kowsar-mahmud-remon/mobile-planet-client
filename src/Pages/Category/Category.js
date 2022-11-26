import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import CategoriesCard from '../Home/Categories/CategoriesCard';
import ProductsCard from '../ProductsCard/ProductsCard';

const Category = () => {
  const products = useLoaderData();

  return (
    <div className=' my-12 mx-5'>
      <h2 className='text-4xl text-center mb-10'>Available Products: {products.length}</h2>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map(product => <ProductsCard
            key={product._id}
            product={product}
          ></ProductsCard>)
        }
      </div>

    </div>
  );
};

export default Category;