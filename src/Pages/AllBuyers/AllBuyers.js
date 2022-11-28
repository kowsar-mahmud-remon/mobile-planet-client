import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AllBuyers = () => {
  const { user } = useContext(AuthContext);

  const url = `https://mobile-planet-server.vercel.app/users?category=Buyer`;

  const { data: allsellers = [], isLoading, refetch } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  });

  const handleDelete = (allseller) => {
    const proceed = window.confirm('Are you sure, you delete Buyer?');
    if (proceed) {
      fetch(`https://mobile-planet-server.vercel.app/users/${allseller?._id}`, {
        method: 'DELETE'

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success(`Buyer Deleted Successfully`);
          }
        });
    }

  };

  if (isLoading) {
    return <div className='text-center my-20'>
      <button className="btn btn-square btn-outline border-0 loading text-success"></button>
    </div>;
  }

  return (
    <div className='mx-5 mt-10 mb-28'>
      <h2 className="text-3xl">
        {/* Manage orders: {orders?.length} */}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allsellers?.map((allseller, i) => <tr
                className='hover'
                key={allseller._id}
              >
                <th className=' text-center'>{i + 1}</th>
                <td className=''>{allseller?.name}</td>
                <td className=''>{allseller?.email}</td>
                <td className=''>{allseller?.category}</td>
                <td className=''>
                  <button onClick={() => handleDelete(allseller)} className="btn btn-sm btn-error">X</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;