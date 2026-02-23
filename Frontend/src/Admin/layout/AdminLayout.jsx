import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";

function AdminLayout() {
  return (
    <section className="adminLayout h-auto min-h-screen w-full bg-[#c8f0d2] flex">
        <div className="left-layout  min-h-auto w-[16%]  bg-[#aceca1]">
          <Sidebar />
        </div>

        <div className="right-layout min-h-full w-[84%] overflow-hidden">
          <div className="navbar sticky top-0    w-full bg-[#88cf7d] text-white">
          <Navbar />
          </div>

          <div className="content min-h-auto bg-[#c9f2c7] overflow-x-hidden">
          <Content />
          </div>
        </div>
    </section>
  );
}

export default AdminLayout;
