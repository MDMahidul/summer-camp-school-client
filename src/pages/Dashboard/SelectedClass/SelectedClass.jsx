import React from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import useCart from '../../../hooks/useCart';
import EmptyData from '../../../components/EmptyData/EmptyData';

const SelectedClass = () => {
  const [cart,refetch] = useCart();
    return (
      <>
        <div className="container mx-auto px-4 sm:px-8 py-8">
          <DashboardHeader title={"My Selected Classes"} />
          <>
            {cart && Array.isArray(cart) && cart.length > 0 ? (
              <div className="overflow-x-auto mt-3">
                <table className="table">
                  <thead className="text-base text-gray-700 dark:text-white">
                    <tr>
                      <th>SL</th>
                      <th>Name</th>
                      <th>Instructor</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-white">
                    {cart.map((item, index) => (
                      <tr key={item._id} className="border-gray-300">
                        <th>{index + 1}</th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold">
                                {item.courseName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">{item?.instructorName}</td>
                        <td className="px-6 py-4">{item?.price}</td>
                        <td className="px-6 py-4">
                          <button className="btn btn-sm btn-error transition-all duration-300 hover:bg-red-500 hover:scale-95 text-white">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyData message={"No cart data found"} />
            )}
          </>
        </div>
      </>
    );
};

export default SelectedClass;