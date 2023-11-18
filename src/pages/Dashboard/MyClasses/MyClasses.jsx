import React, { useContext } from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import EmptyData from '../../../components/EmptyData/EmptyData';

const MyClasses = () => {
  const {user,loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  /* get the courses */
  const {data:courses=[],refetch}=useQuery({
    queryKey:["courses",user?.email],
    enabled:!loading,
    queryFn:async()=>{
      const res = await axiosSecure.get(
        `/courses/${user?.email}`
      );
      console.log(res.data.length);
      return res.data;
    }
  })
    return (
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <DashboardHeader title={"My Classes"} />
        <>
          {courses && Array.isArray(courses) && courses.length > 0 ? (
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      SL
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Course Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Seats
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Enrolled
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={course._id} className="border-gray-300">
                      <th
                        scope="row"
                        className=" px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div>
                          <div className="">{course.course_name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{course.price} $</td>
                      <td className="px-6 py-4">{course?.seats}</td>
                      <td className="px-6 py-4">{course?.enrolled}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`${
                            course?.status === "Pending"
                              ? "bg-yellow-500 text-white px-3 py-1 font-semibold rounded"
                              : course?.status === "Approved"
                              ? "bg-green-500 text-white px-3 py-1 font-semibold rounded"
                              : course?.status === "Denied"
                              ? "bg-red-500 text-white px-3 py-1 font-semibold rounded"
                              : ""
                          }`}
                        >
                          {course?.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyData message={"No course data found"} />
          )}
        </>
      </div>
    );
};

export default MyClasses;