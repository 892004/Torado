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
import Categories from "./User/Pages/Categories";
import Wishlist from "./User/Pages/Wishlist";
import Register from "./User/Pages/Register";
import Login from "./User/Pages/Login";
import ForgotPass from "./User/Pages/ForgotPass";
import Cart from "./User/Pages/Cart";
import CheckOut from "./User/Pages/CheckOut";
import Aboutus from "./User/Pages/Aboutus";
import Gallary from "./User/Pages/Gallary";
import Faq from "./User/Pages/Faq";
import TermsAndCondition from "./User/Pages/TermsAndCondition";
import RefundPolicy from "./User/Pages/RefundPolicy";
import PrivacyPolicy from "./User/Pages/Policy";
import NotFound from "./User/Pages/NotFound";
import Contactus from "./User/Pages/Contactus";
import ProductDetails from "./User/Pages/ProductDetails";
import TrackOrder from "./User/Pages/TrackOrder";
import Blog from "./User/Pages/Blog";
import BlogDetails from "./User/Pages/BlogDetails";

const App = () => {
  return (
    <Routes>
      {/* User Side  */}

      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="forgot-pass" element={<ForgotPass />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="gallary" element={<Gallary />} />
        <Route path="faqs" element={<Faq />} />
        <Route path="terms&condition" element={<TermsAndCondition />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path='404' element={<NotFound />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="Product/:id" element={<ProductDetails />} />
        <Route path='track-order' element={<TrackOrder />} />
        <Route path="Blog" element={<Blog />}  />
        <Route path="blogdetails/:id" element={<BlogDetails />} />
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
