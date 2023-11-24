import React, { useContext, useState } from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import EmptyData from '../../../components/EmptyData/EmptyData';
import MyClassesRow from './MyClassesRow';

const MyClasses = () => {
  const {user,loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
                    <th>Price</th>
                    <th>Total Seats</th>
                    <th>Enrolled</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th className="w-48">Feedback</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-white">
                  {courses.map((course, index) => (
                    <MyClassesRow key={course._id} refetch={refetch} course={course} index={index}/>
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