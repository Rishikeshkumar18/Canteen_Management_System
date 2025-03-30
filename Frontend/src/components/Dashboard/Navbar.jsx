import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Function to add item to cart (For demo purpose, increase count on click)
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo/Brand Name */}
      <Link to="/" className="text-2xl font-bold text-gray-800">
        Canteenhome
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link
          to="/menu"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Menu
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Contact
        </Link>
      </div>

      {/* Auth Buttons & Cart */}
      <div className="flex space-x-4 items-center">
        {/* Cart Icon */}
        <button onClick={addToCart} className="relative flex items-center">
          <FaShoppingCart className="text-gray-700 hover:text-blue-600 text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Sign In & Sign Up */}
        <Link
          to="/signin"
          className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;