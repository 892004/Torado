import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "../../../../src/assets/Images/Logo/logo.svg";
import "../../Components/Navbar/navbar.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import Wishlist from "../../Pages/Wishlist";
import { useWishlist } from "../../Context/WishlistContext";
import CartSidebar from "../CartSideBar/CartSideBar";
import { useCartlist } from "../../Context/CartContext";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCartlist();

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
  const [openCart, setOpenCart] = useState(false);

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
          <Link to="Register">
            <p className="flex items-center justify-center gap-2 cursor-pointer">
              <span>
                <FaRegUser />
              </span>
              My Account
            </p>
          </Link>

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
              <Link to="/" className="flex items-center justify-center">
                Home
              </Link>

              <div className="shop-wrapper">
                <Link className="shop flex items-center justify-center gap-1">
                  Shop <FaAngleDown />
                </Link>
                {/* Shop DropDown */}
                <div className="shop-dropdown h-90 w-[98%] shadow-2xl bg-white absolute left-2 rounded-xl top-20 flex items-center justify-around invisible">
                  <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                    <li>Shop default</li>
                    <li>Shop Left Sidebar</li>
                    <li>Shop Right Sidebar</li>
                    <li>Shop Banner</li>
                    <li>Shop Grid 2 column</li>
                    <li>Shop Grid 3 column</li>
                  </div>
                  <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                    <li>Shop Grid 4 column</li>
                    <li>Shop Grid 5 column</li>
                    <li>Shop List View</li>
                    <li>Shop Without Sidebar</li>
                    <li>Product Default</li>
                    <li>Product PreOrders</li>
                  </div>
                  <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                    <li>Product Gallary Thumbnail</li>
                    <li>Product Bottom Thumbnail</li>
                    <li>Product Left Thumbnail</li>
                    <li>Product Right Thumbnail</li>
                    <li>Product Drawer Sidebar</li>
                    <li>Product Countdown</li>
                  </div>
                  <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Check Out</li>
                    <li>Track My Order</li>
                    <li>Find A Store</li>
                    <li></li>
                  </div>
                </div>
              </div>

              <Link
                to="/categories"
                className="flex items-center justify-center"
              >
                Category
              </Link>

              <div className="page-wrapper">
                  <Link className="flex items-center justify-center gap-1">
                Pages <FaAngleDown />
              </Link>

              {/* Page dropdown */}
              <div className="  page-dropdown h-105 w-55 absolute top-20 rounded-xl shadow-2xl  bg-white flex items-center justify-center">
                     <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                    <Link to = '/about-us'>About us</Link>
                    <Link to = '/gallary'>Gallary</Link>
                    <li>FAQ</li>
                    <li>My Account</li>
                    <li>Tearms & Conditions</li>
                    <li>Refund Policy</li>
                    <li>Privacy Policy</li>
                    <li>404 Error</li>
                  </div>
              </div>
              </div>
              
              <div className="blog-wrapper">
              <Link className="flex items-center justify-center gap-1">
                Blog <FaAngleDown />
              </Link>

              <div className="blog-dropdown absolute h-105 w-55 flex items-center justify-center bg-white shadow-2xl rounded-xl">

                      <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                    <li>Standard</li>
                    <li>Blog Grid</li>
                    <li>Blog Grid Mix</li>
                    <li>Right Sidebar</li>
                    <li>Left Sidebar</li>
                    <li>List View</li>

                    <div className="other-wrapper">
                          <li className="flex items-center ">Others <FaAngleDown  className="absolute right-2 text-sm"/></li>

                          <div className="other-dropdown absolute -left-50 bottom-10 h-60 w-45 rounded-xl shadow-2xl bg-white flex items-center  justify-start px-10">
                                <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                                  <li>Author</li>
                                  <li>Category</li>
                                  <li>tags</li>
                                  <li>Dates</li>
                                </div>
                          </div>
                    </div>


                    <div className="single-wrapper">
                    <li className="flex items-center ">Single post <FaAngleDown  className="absolute right-2 text-sm"/></li>
                       <div className="single-dropdown absolute -left-50 bottom-10 h-50 w-50 rounded-xl shadow-2xl bg-white flex items-center  justify-start px-10">
                                <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                                  <li>Without Sidebar</li>
                                  <li>Right Sidebar</li>
                                  <li>Left Sidebar</li>
                                </div>
                          </div>
                    </div>
                    
                  </div>
              </div>
              </div>


              <Link to="/contact" className="flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-8 text-xl">
            <FiSearch className="cursor-pointer" />

            <div className="relative">
              <Link to="/Wishlist">
                <FiHeart className="cursor-pointer" />
                <span className="absolute -top-2 -right-2 text-xs bg-[#c58f74] text-white rounded-full px-1">
                  {wishlist.length}
                </span>
              </Link>
            </div>

            <div className="relative">
              <FiShoppingBag
                className="cursor-pointer"
                onClick={() => setOpenCart(true)}
              />
              <span className="absolute -top-2 -right-2 text-xs bg-[#c58f74] text-white rounded-full px-1">
                {cart.length}
              </span>
            </div>

            <BsGrid3X3GapFill className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* CART SIDEBAR */}
      <CartSidebar isOpen={openCart} setIsOpen={setOpenCart} />
    </div>
  );
};

export default Navbar;
