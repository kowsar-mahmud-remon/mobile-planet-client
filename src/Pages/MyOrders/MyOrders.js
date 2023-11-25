import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);

  const url = `https://mobile-planet-server.vercel.app/orders?email=${user?.email}`;

  const { data: orders = [] } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  });

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
              <th>Avatar</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
              {/* <th>Payment</th> */}
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((order, i) => <tr
                className='hover'
                key={order?._id}
              >
                <th className='p-0 text-center'>{i + 1}</th>
                <td className='p-0'>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={order?.img} alt="" />
                    </div>
                  </div>
                </td>
                <td className='p-0'>{order?.item_name}</td>
                <td className='p-0'>{order?.price}</td>
                <td className='p-0'>
                  <label htmlFor="confirmation-modal" className="btn btn-sm btn-accent">Delete</label>
                </td>
                {/* <td className='p-0'>
                  <label htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Pay</label>
                </td> */}
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;