import React from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';

const ManageUsers = () => {
    return (
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <DashboardHeader title={"Users List"} />
        <div className="overflow-x-auto">
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
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">1</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">01710611980</td>
                <td className="px-6 py-4">Dhaka</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">Student</div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="btn btn-sm me-2 btn-success text-white transition-all  hover:scale-95"
                  >
                    Admin
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-warning text-white transition-all hover:scale-95"
                  >
                    Instructor
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUsers;