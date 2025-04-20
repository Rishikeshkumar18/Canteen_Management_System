import React from "react";

const UserSettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
        Change Password
      </button>
    </div>
  );
};

export default UserSettings;