import { useQuery } from '@tanstack/react-query';
import CategoriesCard from './CategoriesCard';

const Categories = () => {

  const { data: mobileCategory = [] } = useQuery({
    queryKey: ['mobileCategory'],
    queryFn: () => fetch('http://localhost:5000/mobileCategory')
      .then(res => res.json())
  });

  return (
    <div className=" my-20">
      <div className='text-center my-10'>
        <h2 className='text-4xl font-bold'>Buy used mobile phones at the best prices</h2>
      </div>

      <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          mobileCategory?.map(card => <CategoriesCard
            key={card._id}
            card={card}
          ></CategoriesCard>)
        }
      </div>
    </div>



  );
};

export default Categories;