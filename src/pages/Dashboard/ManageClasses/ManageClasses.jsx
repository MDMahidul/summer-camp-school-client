import React, { useContext } from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import EmptyData from '../../../components/EmptyData/EmptyData';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const ManageClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  /* get all user data */
  const { data: courses = [], refetch } = useQuery({
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses`);
      console.log(res.data);

      return res.data;
    },
  });


  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <DashboardHeader title={"Users List"} />
        {courses && Array.isArray(courses) && courses.length > 0 ? (
          <div className="overflow-x-auto mt-3">
            <table className="table">
              <thead className="text-base text-gray-700 dark:text-white">
                <tr>
                  <th> SL </th>
                  <th> Course </th>
                  <th> Instructor Name </th>
                  <th> Email </th>
                  <th> Seats </th>
                  <th> Price </th>
                  <th className="w-1/4"> Actions </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-white">
                {courses.map((course, index) => (
                  <tr key={user._id} className="border-gray-300">
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={course.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">{course.course_name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{course?.instructor_name}</td>
                    <td className="px-6 py-4">{course?.email}</td>
                    <td className="px-6 py-4">{course?.seats}</td>
                    <td className="px-6 py-4">{course?.price}</td>
                    <td className="px-6 py-4">
                      <button
                        className={`btn btn-sm hover:bg-green-600 hover:border-green-600 transition-all hover:scale-95 border-green-500 bg-green-500 text-white font-semibold me-2`}
                      >
                        Approved
                      </button>
                      <button
                        className={`btn btn-sm hover:bg-red-600 hover:border-red-600 transition-all hover:scale-95 border-red-500 bg-red-500 text-white font-semibold`}
                      >
                        Denied
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyData message={"No Course Data Found"} />
        )}
      </div>
    </>
  );
};

export default ManageClasses;