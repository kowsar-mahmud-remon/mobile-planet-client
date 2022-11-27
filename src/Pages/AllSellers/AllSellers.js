import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AllSellers = () => {
  const { user } = useContext(AuthContext);


  // const url = `http://localhost:5000/users?email=${user?.email}`;
  // const { data: singleuser = [] } = useQuery({
  //   queryKey: ['users', user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     return data;
  //   }
  // });
  // console.log("singleuser", singleuser);

  const url = `http://localhost:5000/users?category=Seller`;

  const { data: allsellers = [] } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  });
  console.log('category', allsellers);


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
                  <button className="btn btn-sm btn-error">X</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;