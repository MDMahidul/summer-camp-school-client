import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { MdLibraryAddCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const StudentMenu = () => {
  const [cart] = useCart();
    return (
      <div>
        <NavLink
          to="selectedclasses"
          className={({ isActive }) =>
            `sidebar ${
              isActive ? "sidebar-active" : "text-gray-600 dark:text-white"
            }`
          }
        >
          <HiShoppingCart className="w-5 h-5" />

          <span className="mx-4 font-medium">Selected Classes</span>
          <span className="font-medium bg-white px-1.5 rounded-md text-amber-500">{cart.length}</span>
        </NavLink>
        <NavLink
          to="enrolledclasses"
          className={({ isActive }) =>
            `sidebar ${
              isActive ? "sidebar-active" : "text-gray-600 dark:text-white"
            }`
          }
        >
          <MdLibraryAddCheck className="w-5 h-5" />

          <span className="mx-4 font-medium">Enrolled Classes</span>
        </NavLink>
      </div>
    );
};

export default StudentMenu;