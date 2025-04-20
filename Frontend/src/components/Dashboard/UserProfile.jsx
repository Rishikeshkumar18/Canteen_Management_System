import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const Profile = () => {
  const [user, setUser] = useState({
    fullname: "John Doe",
    email: "john.doe@example.com",
    joinDate: "Member since January 2023"
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user data from localStorage and update the state
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Update the state with the user data from localStorage
    }
  }, []); // This runs only once when the component mounts

  const handleChangePassword = () => {
    navigate("/changepassword");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-teal-200 flex items-center justify-center">
      <div className="max-w-lg p-8 bg-white rounded-3xl shadow-xl">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white text-4xl font-bold mb-6 transform transition-all hover:scale-110">
            {user.fullname.charAt(0)}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{user.fullname}</h2>
          <p className="text-gray-400 text-sm mt-2">{user.joinDate}</p>
        </div>

        {/* Profile Details */}
        <div className="space-y-6">
          <div className="flex items-center p-4 bg-gray-50 rounded-xl shadow-md">
            <FiUser className="text-gray-500 mr-4 text-2xl" />
            <div>
              <p className="text-gray-500 text-xs">FULL NAME</p>
              <p className="text-gray-800 font-medium">{user.fullname}</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-xl shadow-md">
            <FiMail className="text-gray-500 mr-4 text-2xl" />
            <div>
              <p className="text-gray-500 text-xs">EMAIL ADDRESS</p>
              <p className="text-gray-800 font-medium">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Change Password Button */}
        <div className="mt-8">
          <button
            onClick={handleChangePassword}
            className="w-full py-3 px-6 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FiLock className="inline-block mr-2" size={20} />
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;