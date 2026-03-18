import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Signup from "../Components/Signup/Signup";




const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
    <Navbar /> 
      <main className="flex-1">
        <Outlet />
      </main>
 <Signup />
 <Footer />
    </div>
  );
};

export default UserLayout;