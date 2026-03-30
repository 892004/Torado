import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import '../../Components/contactus/contact.css'

const Right = () => {
  return (
    <section className="right h-full w-[40%]  p-10 flex flex-col items-start">
      <h3 className="text-5xl">Contact Details</h3>

      <div className="address flex flex-col mt-10 gap-5">
        <span className="flex items-start justify-start gap-2 opacity-80">
          {" "}
          <SlLocationPin className="text-[#CC9078] opcity-100 mt-1" />
          94 East 84th Street, 9th Floor, New York, GA 30030 <br /> New York,
          USA
        </span>

        <span className="flex items-start justify-start  gap-2 opacity-80 ">
          <MdOutlineMailOutline className="text-[#CC9078] opcity-100 mt-1" />
          support@torado.com
        </span>

        <span className="flex items-start justify-start gap-2 opacity-80">
          <LuPhone className="text-[#CC9078] opcity-100 mt-1" />
          +01 947 847 4488
        </span>
      </div>


      <div className="flex flex-col items-start justify-start mt-10 gap-5 ">
        <h3 className="text-xl">Hours Of Opening</h3>
        <p className="opacity-80">Monday - Friday : 8:00AM - 8:00PM</p>
        <p className="opacity-80">Saturday : 9:00AM - 6:00PM</p>
        <p className="opacity-80">Sunday : 8:00AM - 3:00PM</p>
      </div>

    </section>
  );
};

export default Right;
