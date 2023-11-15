import React, { useContext } from "react";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import EmptyData from "../../../components/EmptyData/EmptyData";

const ManageUsers = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  /* get all user data */
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.emial}`);
      console.log(res.data);

      return res.data;
    },
  });
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <DashboardHeader title={"Users List"} />
        {users && Array.isArray(users) && users.length > 0 ? (
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    SL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="border-gray-300">
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
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user?.image}
                        alt="Jese image"
                      />
                      <div className="ps-3">
                        <div className="">{user.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user?.address}</td>
                    <td className="px-6 py-4">{!user.role ? "Student":user.role}</td>
                    <td className="px-6 py-4">
                      <button
                        /*  onClick={() => handleMakeAdmin(user)} */
                        className="btn btn-sm btn-success border-0 text-white me-2"
                      >
                        Admin
                      </button>
                      <button
                        /* onClick={() => handleDelete(user)} */
                        className="btn btn-warning border-0 text-white btn-sm"
                      >
                        Instructor
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyData message={"No User Data Found"} />
        )}
      </div>
    </>
  );
};

export default ManageUsers;
