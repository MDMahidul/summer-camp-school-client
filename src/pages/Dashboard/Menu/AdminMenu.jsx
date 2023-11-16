import React from 'react';
import { FaUsersCog } from 'react-icons/fa';
import { HiViewGridAdd } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
      <div>
        <NavLink
          to="manageusers"
          className={({ isActive }) =>
            `sidebar ${
              isActive ? "sidebar-active" : "text-gray-600 dark:text-white"
            }`
          }
        >
          <FaUsersCog className="w-5 h-5" />

          <span className="mx-4 font-medium">Manage Users</span>
        </NavLink>
        <NavLink
          to="manageclasses"
          className={({ isActive }) =>
            `sidebar ${
              isActive ? "sidebar-active" : "text-gray-600 dark:text-white"
            }`
          }
        >
          <HiViewGridAdd className="w-5 h-5" />

          <span className="mx-4 font-medium">Manage Classes</span>
        </NavLink>
      </div>
    );
};

export default AdminMenu;