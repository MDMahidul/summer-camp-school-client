import React, {useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import rlogo from "../../../assets/logo/rlogo.png";
import { GrLogout } from "react-icons/gr";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { AuthContext } from "../../../providers/AuthProvider";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isActive, setActive] = useState("false");
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img className="w-14" src={rlogo} alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          {isActive ? (
            <RiMenuUnfoldLine className="h-5 w-5" />
          ) : (
            <RiMenuFoldLine className="h-5 w-5" />
          )}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-amber-200 dark:bg-gray-800 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition-all duration-300 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <h3 className="text-2xl font-bold bg-slate-100 px-4 py-2 rounded-md text-red-500">
                User Dashboard
              </h3>
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-20 h-20 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <>
                <label
                  htmlFor="Toggle3"
                  className="inline-flex w-full justify-center items-center px-2 rounded-md text-gray-800"
                >
                  <span className="px-4 py-1 rounded-md bg-gray-100">
                    Admin
                  </span>
                </label>
                <NavLink
                  to="manageusers"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive
                        ? "bg-gray-300  text-gray-700 dark:text-white"
                        : "text-gray-600 dark:text-white"
                    }`
                  }
                >
                  <FaUsersCog className="w-5 h-5" />

                  <span className="mx-4 font-medium">Manage Users</span>
                </NavLink>
              </>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;