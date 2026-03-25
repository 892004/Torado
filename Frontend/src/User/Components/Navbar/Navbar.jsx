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
import { useNavigate } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCartlist();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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
  const [openicons, setopenicons] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const [openShop, setopenShop] = useState(false);
  const [openPage, setopenPage] = useState(false);
  const [openBlog, setopenBlog] = useState(false);
  const SelectLang = (item) => {
    setLang(item);
    setopenLang(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="main z-50 absolute top-0 left-0">
      {/* ===== TOP BAR ===== */}
      <div
        className={`top-bar fixed top-0 left-0 w-full z-50 bg-[#CC9078] text-white text-sm px-6 py-3 flex justify-center gap-100 transition-all duration-300
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

        {/* 🔥 UPDATED SECTION */}
        <div className="flex items-center justify-center gap-5">
          {user ? (
            <>
              <Link to="/account">
                <p className="flex items-center justify-center gap-2 cursor-pointer">
                  <span>
                    <FaRegUser />
                  </span>
                  {user.name}
                </p>
              </Link>

              <button
                onClick={handleLogout}
                className="text-[#CC9078] bg-white py-1 px-2 font-medium cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/Login">
                <p className="flex items-center justify-center gap-2 cursor-pointer">
                  <span>
                    <FaRegUser />
                  </span>
                  Login
                </p>
              </Link>

              <Link to="/Register">
                <p className="cursor-pointer">Register</p>
              </Link>
            </>
          )}

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
        className={`scroll w-full transition-all duration-300 z-40
  ${
    scrolled
      ? "fixed top-0 bg-white shadow-md"
      : "fixed top-[60px] bg-transparent"
  }`}
      >
        <div className="Navbar w-full flex items-center justify-center px-10 py-5 gap-50">
          <div className="flex items-center gap-20">
            {/* LOGO */}
            <img src={Logo} className="logo text-2xl font-semibold"></img>
            {/* MENU */}
            <div className="hidden md:flex gap-8 text-[16px]">
              <Link to="/" className="flex items-center justify-center">
                Home
              </Link>

              <div className="shop-wrapper">
                <Link
                  to="/"
                  className="shop flex items-center justify-center gap-1"
                >
                  Shop <FaAngleDown />
                </Link>

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

                <div className="page-dropdown h-105 w-55 absolute top-20 rounded-xl shadow-2xl bg-white flex items-center justify-center">
                  <div className="links-1 flex flex-col gap-7 list-none text-gray-600 font-medium cursor-pointer">
                    <Link to="/about-us">About us</Link>
                    <Link to="/gallary">Gallary</Link>
                    <Link to="/faqs">FAQ</Link>
                    <Link to="/login">My Account</Link>
                    <Link to="/terms&condition">Tearms & Conditions</Link>
                    <Link to="/refund-policy">Refund Policy</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/404">404 Error</Link>
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
                  </div>
                </div>
              </div>

              <Link
                to="/contact-us"
                className="flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ICONS */}
          <div className="responsive-icons flex items-center gap-4 invisible">
            <span
              className="text-xl relative cursor-pointer"
              onClick={() => setopenicons(!openicons)}
            >
              <HiDotsHorizontal />

              <div
                className={`absolute h-12 w-50 bg-white -bottom-15 -right-15 shadow flex items-center justify-center gap-8 rounded
    transition-all duration-300 origin-top
    ${
      openicons
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`}
              >
                <FiSearch />

                <div className="relative">
                  <Link to="/Wishlist">
                    <FiHeart />
                    <span className="absolute -top-2 -right-2 text-xs bg-[#c58f74] text-white rounded-full px-1">
                      {wishlist.length}
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <FiShoppingBag onClick={() => setOpenCart(true)} />
                  <span className="absolute -top-2 -right-2 text-xs bg-[#c58f74] text-white rounded-full px-1">
                    {cart.length}
                  </span>
                </div>

                <BsGrid3X3GapFill />
              </div>
            </span>

            {/* Open Responsive Menu */}
            <button
              className="text-2xl relative cursor"
              onClick={() => setopenMenu(!openMenu)}
            >
              {openMenu ? <RxCross2 /> : <RxHamburgerMenu />}

              <div
                className={`responsive-navbar absolute  w-[300px] -right-7 top-12  bg-white  shadow flex flex-col  items-start justify-start p-2 gap-4 rounded
    transition-all duration-300 origin-top
    ${
      openMenu
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`}
              >
                <Link
                  to="/"
                  className="flex items-center justify-center text-lg relative font-medium"
                >
                  Home
                </Link>

                <div className="w-full flex items-center justify-between text-lg cursor-pointer relative">
                  <span className="font-medium">Shop</span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setopenShop(!openShop);
                    }}
                  >
                    {openShop ? (
                      <FiMinus className="text-sm" />
                    ) : (
                      <FiPlus className="text-sm" />
                    )}
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openShop ? "max-h-[300px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="w-[290px] bg-white  flex flex-col items-start gap-2 text-sm max-h-[250px] overflow-y-auto">
                    <span>Shop Default</span>
                    <span>Shop Left Sidebar</span>
                    <span>Shop Right Sidebar</span>
                    <span>Shop Banner</span>
                    <span>Shop Grid 2 Columns</span>
                    <span>Shop Grid 3 Columns</span>
                    <span>Shop Grid 4 Columns</span>
                    <span>Shop Grid 5 Columns</span>
                    <span>Shop List View</span>
                    <span>Shop Without Sidebar</span>
                    <span>Product Default</span>
                    <span>Product PreOrders</span>
                    <span>Product Gallary Thumbnail</span>
                    <span>Product Bottom Thumbnail</span>
                    <span>Product Left Thumbnail</span>
                    <span>Product Right Thumbnail</span>
                    <span>Product Drawer Sidebar</span>
                    <span>Product Countdown</span>
                    <span>Cart</span>
                    <span>Wishlist</span>
                    <span>Check Out</span>
                    <span>Track My Order</span>
                    <span>Find A Store</span>
                  </div>
                </div>

                <Link
                  to="/categories"
                  className="flex items-center justify-center text-lg relative font-medium"
                >
                  Category
                </Link>

                <div className="flex items-center justify-center text-lg relative font-medium">
                  Pages
                  <div className="absolute -right-58">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setopenPage(!openPage);
                      }}
                    >
                      {openPage ? (
                        <FiMinus className="text-sm" />
                      ) : (
                        <FiPlus className="text-sm" />
                      )}
                    </button>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openPage ? "max-h-[300px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="w-[290px] bg-white  flex flex-col items-start gap-2 text-sm max-h-[250px] overflow-y-auto">
                    <Link to="/about-us">About us</Link>
                    <Link to="/gallary">Gallary</Link>
                    <Link to="/faqs">FAQ</Link>
                    <Link to="/login">My Account</Link>
                    <Link to="/terms&condition">Tearms & Conditions</Link>
                    <Link to="/refund-policy">Refund Policy</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/404">404 Error</Link>
                  </div>
                </div>

                <div className="flex items-center justify-center text-lg relative font-medium">
                  Blog
                  <div className="absolute -right-61">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setopenBlog(!openBlog);
                      }}
                    >
                      {openBlog ? (
                        <FiMinus className="text-sm" />
                      ) : (
                        <FiPlus className="text-sm" />
                      )}
                    </button>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openBlog ? "max-h-[300px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="w-[290px] bg-white  flex flex-col items-start gap-2 text-sm max-h-[250px] overflow-y-auto">
                    <li>Standard</li>
                    <li>Blog Grid</li>
                    <li>Blog Grid Mix</li>
                    <li>Right Sidebar</li>
                    <li>Left Sidebar</li>
                    <li>List View</li>
                  </div>
                </div>

                <Link
                  to="/contact-us"
                  className="flex items-center justify-center text-lg relative font-medium"
                >
                  Contact
                </Link>
                <hr />
              </div>
            </button>
          </div>

          <div className=" right-side-icons flex items-center gap-8 text-xl">
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
