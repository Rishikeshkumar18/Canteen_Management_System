import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Helmet } from "react-helmet";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getAuthToken = () => localStorage.getItem('token');

  const fetchUsers = (page = 1) => {
    const token = getAuthToken();

    axios.get("http://localhost:5000/users", {
      params: { page },
      headers: {
        'Authorization': Bearer ${token}
      }
    })
    .then((response) => {
      if (response.data.success) {
        setUsers(response.data.users);
        setTotalPages(response.data.totalPages);
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      if (error.response?.status === 401) {
        alert('Session expired. Please login again.');
      }
    });
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handleRemove = (userId) => {
    if (window.confirm("Are you sure you want to remove this user?")) {
      const token = getAuthToken();

      axios.delete(http://localhost:5000/users/${userId}, {
        headers: {
          'Authorization': Bearer ${token}
        }
      })
      .then((response) => {
        if (response.data.success) {
          fetchUsers(currentPage);
        } else {
          alert("Failed to remove user.");
        }
      })
      .catch((error) => {
        console.error("Error removing user:", error);
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Helmet>
        <title>Users Management</title>
      </Helmet>

      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Users Management</h1>
        <p className="text-gray-600 mb-6">List of registered users:</p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700">Full Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700">Email</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-indigo-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`transition-all duration-200 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-indigo-50`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.fullname}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-sm text-right">
                      <button
                        onClick={() => handleRemove(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 text-sm rounded-md hover:bg-gray-100 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page <span className="font-semibold">{currentPage}</span> of{" "}
              <span className="font-semibold">{totalPages}</span>
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 text-sm rounded-md hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;