import React from 'react';
import Sidebar from '../pages/Shared/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
      <div className="relative min-h-screen md:flex">
        <Sidebar />
        <div className="flex-1  md:ml-64">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default DashBoard;