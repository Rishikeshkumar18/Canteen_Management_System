import React from "react";
import Sidebar from "./Sidebar";

const Settings = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-4">Adjust your settings here...</p>
      </div>
    </div>
  );
};

export default Settings;