import React from "react";
import Sidebar from "./Sidebar";

const Orders = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Orders Management</h1>
        <p className="mt-4">List of orders...</p>
      </div>
    </div>
  );
};

export default Orders;