import React from "react";
import Sidebar from "./Sidebar";
import { FaUsers, FaBox, FaChartBar } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaUsers className="text-blue-700 text-3xl" />
            <div>
              <h2 className="text-xl font-bold">150</h2>
              <p className="text-gray-500">Total Users</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaBox className="text-green-600 text-3xl" />
            <div>
              <h2 className="text-xl font-bold">230</h2>
              <p className="text-gray-500">Orders Placed</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaChartBar className="text-yellow-500 text-3xl" />
            <div>
              <h2 className="text-xl font-bold">$10,500</h2>
              <p className="text-gray-500">Total Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
