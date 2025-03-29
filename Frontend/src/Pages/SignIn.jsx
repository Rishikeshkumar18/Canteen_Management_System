import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        
        {/* Tab Navigation */}
        <div className="flex border-b">
          <button className="w-1/2 py-2 font-medium border-b-2 border-black">
            Sign In
          </button>
          <Link to="/signup" className="w-1/2 py-2 font-medium text-gray-500 text-center">
            Sign Up
          </Link>
        </div>

        {/* Sign In Content */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-center text-gray-600">Sign in to continue to your account</p>

          <form className="mt-4 space-y-4">
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
                  placeholder="Enter your password"
                  className="w-full pl-10 border p-2 rounded"
                />
              </div>
              
              {/* Navigate to Forgot Password Page */}
              <p 
                className="text-sm text-blue-500 float-right mt-1 cursor-pointer"
                onClick={() => navigate("/ForgotPassword")}
              >
                Forgot Password?
              </p>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
