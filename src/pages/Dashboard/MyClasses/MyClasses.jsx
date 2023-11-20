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
        `/course/${user?.email}`
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
              <table className="table">
                <thead className="text-base text-gray-700 dark:text-white">
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Course Price</th>
                    <th>Total Seats</th>
                    <th>Enrolled</th>
                    <th>Status</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-white">
                  {courses.map((course, index) => (
                    <tr key={course._id} className="border-gray-300">
                      <th
                        scope="row"
                        className=" px-6 py-4 text-gray-700 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td>
                        <div>
                          <div className="">{course.course_name}</div>
                        </div>
                      </td>
                      <td>{course.price} $</td>
                      <td>{course?.seats}</td>
                      <td>{course?.enrolled}</td>
                      <td>
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
                      <td>{course.feedback}</td>
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