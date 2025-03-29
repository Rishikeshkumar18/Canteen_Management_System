import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

import AdminLogin from "../components/Admin/AdminLogin";// Make sure the path is correct
import AdminDashboard from "../components/Admin/AdminDashboard";
import Settings from "../components/Admin/Settings";
import Orders from "../components/Admin/Orders";
import Users from "../components/Admin/Users";
import Sidebar from "../components/Admin/Sidebar";


import UserDashboard from "../components/Dashboard/UserDashboard";
import UserOrders from "../components/Dashboard/UserOrders";
import UserProfile from "../components/Dashboard/UserProfile";
import UserSettings from "../components/Dashboard/UserSettings";



const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/sidebar" element={<Sidebar />} />
        <Route path="/Dashboard" element={<UserDashboard />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="/user/orders" element={<UserOrders/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
