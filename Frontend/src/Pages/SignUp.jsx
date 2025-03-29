import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        
        {/* Tab Navigation */}
        <div className="flex border-b">
          <Link to="/signin" className="w-1/2 py-2 font-medium text-gray-500 text-center">
            Sign In
          </Link>
          <button className="w-1/2 py-2 font-medium border-b-2 border-black">
            Sign Up
          </button>
        </div>

        {/* Sign Up Content */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-center">Create an Account</h2>
          <p className="text-center text-gray-600">Sign up to get started with Canteen</p>

          <form className="mt-4 space-y-4">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-10 border p-2 rounded"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 border p-2 rounded"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a password (min 6 chara)"
                  className="w-full pl-10 border p-2 rounded"
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Sign Up
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm mt-4">
            Already have an account? <Link to="/signin" className="text-blue-500">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;