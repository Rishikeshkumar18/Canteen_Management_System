import React from "react";

const UserOrders = () => {
  const orders = [
    { id: 1, item: "Burger", price: "$5.99", status: "Delivered" },
    { id: 2, item: "Pizza", price: "$9.99", status: "Processing" },
    { id: 3, item: "Pasta", price: "$7.50", status: "Delivered" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Item</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.item}</td>
              <td className="border p-2">{order.price}</td>
              <td className="border p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;
