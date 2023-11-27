import React, { useContext } from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ClassEnrolled = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const course_id = useParams();

  /* get enrolled user data */
  const { data: enrolledUsers = [], refetch } = useQuery({
    queryKey: ["course", course_id],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/course/enrolled/${course_id.id}`);
      return res.data;
    },
  });
console.log(enrolledUsers);
  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <DashboardHeader title={"Enrolled Student "} />
      {enrolledUsers.length}
    </div>
  );
};

export default ClassEnrolled;