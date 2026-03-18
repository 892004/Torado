import React from "react";
import "../Components/forgotpass/forgotpass.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <section className="forgot-pass h-200 w-full flex flex-col items-center justify-center ">
      <h3 className="text-5xl text-[#2A2826] mt-20">Reset Password</h3>
      <div className="flex flex-row items-center gap-1">
        <Link to="/" className="opacity-80">
          {" "}
          Home /
        </Link>
        <span className="text-[#CC9078]">Reset Password</span>
      </div>
      <div className="flex flex-col gap-5 mt-50">
        <h3 className="text-5xl opacity-90 text-left">Reset Password</h3>
        <p className="opacity-70">
          Enter your account email address. Instructions on how to reset your
          password will be sent
          <br /> to this address.
        </p>
        <input
          type="Email"
          className="border border-gray-300 py-3 px-3 text-gray-500"
          placeholder="gillies@torado.com"
          required
        />
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" className="h-3 w-3" />
          <span className="opacity-80">I'm not a robot</span>
        </div>

        <button className="px-5 w-44 py-3 relative bg-[#CB927A] text-white text-[15px] flex items-center gap-2 cursor-pointer ">
          Reset Password
          <MdArrowOutward className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default ForgotPass;
