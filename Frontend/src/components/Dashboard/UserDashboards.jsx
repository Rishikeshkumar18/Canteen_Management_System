import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser, FaBox, FaCog } from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:text-gray-300">
            <FaUser />
            <Link to="/user/profile">Profile</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300">
            <FaBox />
            <Link to="/user/orders">Orders</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300">
            <FaCog />
            <Link to="/user/settings">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content (Outlet will load nested pages) */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
