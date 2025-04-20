import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBox, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white p-6 h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaChartBar />
          <Link to="/admin">Dashboard</Link>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaUsers />
          <Link to="/admin/users">Users</Link>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaBox />
          <Link to="/admin/orders">Orders</Link>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaCog />
          <Link to="/admin/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;