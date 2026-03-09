import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Logo from '../../../../src/assets/Images/Logo/logo.svg'
import "../../Components/Navbar/navbar.css";
import { BsGrid3X3GapFill } from "react-icons/bs";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Languages = ["Eng", "简体", "Spa", "Rus"];
  const [Lang, setLang] = useState(["Eng"]);
  const [openLang, setopenLang] = useState(false);

  const SelectLang = (item) => {
    setLang(item);
    setopenLang(false);
  };
  return (
    <div className="w-full z-50 absolute top-0 left-0">
      {/* ===== TOP BAR ===== */}
      <div
        className={`w-full bg-[#CC9078] text-white text-sm px-6 py-3 flex justify-center gap-100 transition-all duration-300
        ${scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        <p className="social-icons flex items-center justify-center gap-5 text-[16px]">
          Follow us:{" "}
          <span className="cursor-pointer">
            <FaFacebookF />
          </span>{" "}
          <span className="cursor-pointer">
            <AiFillInstagram />
          </span>{" "}
          <span className="cursor-pointer">
            <FaTwitter />
          </span>
          <span className="cursor-pointer">
            <FaYoutube />
          </span>
        </p>
        <p className="font-medium">Free shipping on all orders over $50</p>

        <div className="flex items-center justify-center gap-10">
          <p className="flex items-center justify-center gap-2 cursor-pointer">
            {" "}
            <span>
              <FaRegUser />
            </span>
            My Account
          </p>

          <div className="relative">
            <p
              onClick={() => setopenLang(!openLang)}
              className="flex items-center gap-1 cursor-pointer"
            >
              {Lang}
              <FaAngleDown className="text-[12px]" />
            </p>

            {openLang && (
              <div className="absolute -right-12 mt-3 bg-white text-black shadow-xl rounded">
                {Languages.map((item, index) => (
                  <p
                    key={index}
                    onClick={() => SelectLang(item)}
                    className="w-40 h-10 z-[-999] opacity-100 flex items-center justify-start px-5 font-medium py-1 cursor-pointer border-b border-gray-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <div
        className={`w-full transition-all duration-300
        ${
          scrolled
            ? "fixed top-0 bg-white shadow-md"
            : "absolute top-[40px] left-0 bg-transparent"
        }`}
      >
        <div className="w-auto max-w-full mx-auto flex items-center justify-between px-10 py-8">

          <div className="flex items-center gap-20">

          {/* LOGO */}
          <img src={Logo} className="text-2xl font-semibold"></img>

          {/* MENU */}
          <div className="hidden md:flex gap-8 text-[16px]">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop </Link>
            <Link to="/categories">Category</Link>
            <Link to="/pages">Pages</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          </div>
          {/* ICONS */}
          <div className="flex items-center gap-8 text-xl">
            <FiSearch className="cursor-pointer  "/>

            <div className="relative">
              <FiHeart className="cursor-pointer  "/>
              <span className="absolute -top-2 -right-2 text-xs bg-[#c58f74] text-white rounded-full px-1">
                2
              </span>
            </div>

            <div className="relative">
              <FiShoppingBag className="cursor-pointer  "/>
              <span className="absolute -top-2 -right-2 text-xs bg-[#c58f74] text-white rounded-full px-1">
                3
              </span>


            </div>
              <BsGrid3X3GapFill className="cursor-pointer  "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
