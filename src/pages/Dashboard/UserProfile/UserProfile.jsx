import React, { useContext, useEffect, useState } from "react";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import { AuthContext } from "../../../providers/AuthProvider";
import { getUser } from "../../../api/users";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      getUser(user.email).then((data) => {
        console.log("role: ", data);
        setUserData(data);
      });
    }
  }, [user]);
  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <DashboardHeader title={"User Profile"} />
      <div className="py-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <img className="max-w-sm md:max-w-md" src={userData?.image} alt="" />
        </div>
        <div>
          <div className="text-center text-xl font-bold text-amber-500 border-2 py-2">
            Personal Info
          </div>
          <table className="table text-base text-gray-600 font-semibold">
            <tr>
              <td>
                <span className="border-b-2 border-amber-300">Name:</span>
              </td>
              <td>{userData?.name}</td>
            </tr>
            <tr>
              <td>
                <span className="border-b-2 border-amber-300">Gender:</span>
              </td>
              <td>{userData?.gender}</td>
            </tr>
            <tr>
              <td>
                <span className="border-b-2 border-amber-300">Email:</span>
              </td>
              <td>{userData?.email}</td>
            </tr>
            <tr>
              <td>
                <span className="border-b-2 border-amber-300">Role:</span>
              </td>
              <td>{userData?.role}</td>
            </tr>
            <tr>
              <td>
                <span className="border-b-2 border-amber-300">Address:</span>
              </td>
              <td>{userData?.address}</td>
            </tr>
          </table>
          <div className="text-center py-4">
            <button className="btn custom-btn bg-amber-500  text-white custom-btn">
              Update Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;