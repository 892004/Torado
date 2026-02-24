import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";




const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
    <Navbar /> 
      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
};

export default UserLayout;