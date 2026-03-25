import axios from "axios";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData,
      );

      // ✅ SAFE ZONE
      console.log(res.data.user);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("User Logged in Successfully..");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Login Failed !!");
    }
  };

  return (
    <section className="Login flex flex-col items-center justify-center mt-50">
      <h3 className="text-6xl  text-[#2A2826]">Login</h3>
      <div className="links flex flex-row items-center gap-1 mt-2">
        <Link to="/" className="opacity-80">
          {" "}
          Home /
        </Link>
        <span className="text-[#CC9078]">Login</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4"
      >
        <div className="name flex flex-col gap-1 ">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="py-2 border border-gray-400 w-xl px-3 text-gray-500"
            placeholder="gillies@Torado.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="name flex flex-col gap-1 relative">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            className="py-2 border border-gray-400 w-xl px-3 text-gray-500"
            placeholder="****"
            onChange={handleChange}
            required
          />

          <Link
            to="/forgot-pass"
            className="text-right text-gray-500 text-sm underline"
          >
            Forgot Your Password?
          </Link>
        </div>

        <button className="px-8 py-3 relative bg-[#CB927A] text-white text-[15px] flex items-center gap-2 cursor-pointer shadow-xl">
          Log In
          <MdArrowOutward className="text-xl" />
        </button>
        <p className="py-2 text-sm">
          If You don't have an Account ?{" "}
          <Link to="/Register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
