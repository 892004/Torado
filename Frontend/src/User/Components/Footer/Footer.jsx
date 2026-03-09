import React from "react";
import Logo from "../../../assets/Images/Logo/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import maestro from '../../../assets/Images/Payment/maestro.jpg'
import visa from '../../../assets/Images/Payment/visa.jpg'
import  paypal from '../../../assets/Images/Payment/paypal.jpg'
import amex from '../../../assets/Images/Payment/american-express.jpg'
import discover from '../../../assets/Images/Payment/discover.jpg'



import '../Footer/footer.css'

const Footer = () => {
  return (
    <section className="Footer h-100 w-full  p-10 flex flex-row items-start justify-center gap-30">
      {/* First Part */}
      <div className="logo flex flex-col items-start gap-5">
        <img src={Logo} />
        <p className="opacity-60">
          We provide the highest quality jewelry <br />
          to our customers.
        </p>

        <div className="social-icons flex items-center justify-center gap-5 text-[16px] text-[#CB927A]">
          <span className="cursor-pointer px-3 py-3 bg-[#F7F7F7] rounded-full">
            <FaFacebookF />
          </span>{" "}
          <span className="cursor-pointer px-3 py-3 bg-[#F7F7F7] rounded-full">
            <AiFillInstagram />
          </span>{" "}
          <span className="cursor-pointer px-3 py-3 bg-[#F7F7F7] rounded-full">
            <FaTwitter />
          </span>
          <span className="cursor-pointer px-3 py-3 bg-[#F7F7F7] rounded-full">
            <FaYoutube />
          </span>
        </div>
      </div>

      {/* second part */}
      <div className="QuickLink flex flex-col items-start">
        <h3 className="text-xl opacity-90">Quick Links</h3>

        <div className="flex flex-col items-start list-none mt-4 gap-1 opacity-70 cursor-pointer ">
            <li>About us</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </div>
      </div>

      {/* Third part */}
      <div className="UsefulLinks flex flex-col items-start">
        <h3  className="text-xl opacity-90">Useful Links</h3>

         <div className="flex flex-col items-start list-none mt-4 gap-1 opacity-70 cursor-pointer ">
            <li>Latest News</li>
            <li>View Cart</li>
            <li>Wishlist</li>
            <li>Checkout</li>
            <li>Store Locator</li>
        </div>
      </div>

      {/* forth path */}
     <div className="Categories flex flex-col items-start">
        <h3  className="text-xl opacity-90">Categories</h3>

         <div className="flex flex-col items-start list-none mt-4 gap-1 opacity-70 cursor-pointer ">
            <li>Ring</li>
            <li>Bracelet</li>
            <li>Earrings</li>
            <li>Necklace</li>
            <li>Locket</li>
        </div>
      </div>

      {/* fifth part */}
        <div className="Contact Info flex flex-col items-start gap-3">
          <h3  className="text-xl opacity-90">Contact Info</h3>
          <p className="flex items-start opacity-70 gap-2"><IoLocationOutline className="mt-1 text-[#CB927A] opacity-100"/> 94 East 84th Street, 9th Floor, <br/>New York, GA 30030 </p>
          <p className="flex items-center justify-center opacity-70 gap-2 cursor-pointer"><MdOutlineMailOutline className="text-[#CB927A] opacity-100 " />support@torado.com</p>
          <p className="flex items-center justify-center opacity-70 gap-2"><FiPhoneCall className="text-[#CB927A] opacity-100" />+01 947 847 4488</p>
      </div>
    

    <div className="bottom-bar absolute  h-20 w-full bottom-0 flex items-center justify-between p-10">
        <p className="mx-8 text-gray-500 text-sm">© Copyright <span className="text-[#CB927A]">Torado </span> All Rights Reserved by  <span className="text-[#CB927A] cursor-pointer">EnvyTheme</span></p>

        <div className="payment-methods flex flex-row gap-3">
            <span>We accept:</span>
            <img src={maestro}  className="h-8"/>
            <img src={visa}  className="h-8"/>
            <img src={paypal}  className="h-8"/>
            <img src={amex}  className="h-8"/>
            <img src={discover}  className="h-8"/>
        </div>
    </div>
    </section>
  );
};

export default Footer;
