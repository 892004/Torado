import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Admin/layout/AdminLayout";
import Dashboard from "./Admin/pages/Dashboard";
import Users from "./Admin/pages/Users";
import Products from "./Admin/pages/Products";
import Category from "./Admin/pages/Category";
import Orders from "./Admin/pages/Orders";
import AdminLogin from "./Admin/pages/AdminLogin";
import ProtectedRoutes from "./Admin/layout/ProtectedRoutes";
import UserLayout from "./User/Layout/UserLayout";
import HomePage from "./User/Pages/HomePage";
import Categories from './User/Pages/Categories'
import Wishlist from "./User/Pages/Wishlist";
import Register from "./User/Pages/Register";
import Login from "./User/Pages/Login";
import ForgotPass from "./User/Pages/ForgotPass";
import Cart from "./User/Pages/Cart";
import CheckOut from "./User/Pages/CheckOut";
import Aboutus from "./User/Pages/Aboutus";
import Gallary from "./User/Pages/Gallary";

const App = () => {
  return (
    <Routes>

      {/* User Side  */}

      <Route path="/" element={<UserLayout />} >
          <Route index element = {<HomePage /> } />
          <Route path="Categories" element ={<Categories />} />
          <Route path="Wishlist" element ={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="forgot-pass" element={<ForgotPass />} />
          <Route path='about-us' element={<Aboutus />} />
          <Route path='gallary' element={<Gallary />} />
       </Route>

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected Admin Layout */}
      <Route
        path="/admin"
        element={
          <ProtectedRoutes>
            <AdminLayout />
          </ProtectedRoutes>
        }
      >
        {/* 👇 CHILD ROUTES MUST BE INSIDE */}
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Category />} />
        <Route path="orders" element={<Orders />} />
      </Route>

   </Routes>
  );
};

export default App;
