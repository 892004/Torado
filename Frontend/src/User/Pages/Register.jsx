import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import '../Components/Login/login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData,
      );
      alert("User Registered Succesfully");
      console.log(res.data);
      navigate("/Login");
    } catch (error) {
      console.log(error);
      alert("Registration Failed !!");
    }
  };
  return (
    <section className="Register h-screen w-full flex flex-col items-center justify-center translate-y-10 ">
      <h3 className="text-5xl text-[#2A2826]">Create Your Account</h3>
      <div className="flex flex-row items-center justify-center gap-2 py-2">
        <Link to="/">Home / </Link>{" "}
        <span className="text-[#CC9078]">My Account</span>
      </div>

      {/* create you account  */}
      <div className="create-Account">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="name flex flex-col gap-1 ">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="py-2 border border-gray-400 w-xl px-3 text-gray-500"
              placeholder="Thomas Gillies"
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="name flex flex-col gap-1 ">
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
          </div>

          <div className="name flex flex-col gap-1 ">
            <label>Phone</label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              className="py-2 border border-gray-400 w-xl px-3 text-gray-500"
              placeholder="+91 123456789"
              onChange={handleChange}
              required
            />
          </div>

          <button className="px-8 py-3 relative bg-[#CB927A] text-white text-[15px] flex items-center gap-2 cursor-pointer shadow-xl">
            Create An Account
            <MdArrowOutward className="text-xl" />
          </button>
        </form>
      </div>

      <p className="py-2 text-sm">If You have an Account ? <Link to = '/Login' className="text-blue-500">Login</Link></p>
    </section>
  );
};

export default Register;
