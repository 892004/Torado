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

const App = () => {
  return (
    <Routes>

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
