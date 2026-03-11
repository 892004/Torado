import React from "react";
import { useWishlist } from "../Context/WishlistContext";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import '../Components/wishlist/wishlist.css'

const Wishlist = () => {
  const { wishlist, removeWishlist } = useWishlist();

  const clearAll = () => {
    wishlist.forEach((item) => {
      removeWishlist(item.wishlist_id);
    });
  };

  return (
    <section className=" w-full py-20 flex flex-col items-center justify-center">

      <h3 className="text-5xl  mb-10 text-center mt-20 py-20 w-full bg-[#FFFCF9]">My Wishlist</h3>
      <div className="flex flex-row items-center justify-center gap-2 text-[16px] -translate-y-30">
        <Link to="/" className="text-gray-500 ">
          Home
        </Link>
        /
        <Link to="/Wishlist" className="text-[#CB927A]">
          wishlist
        </Link>
      </div>

      <div className="Wislist h-auto max-h-[100vh] max-w-[1200px] mx-auto">
        {wishlist.length === 0 ? (
          <div>
          <p className="text-gray-500 text-center">Your wishlist is empty</p>
          <div className="btn">
          <Link to = "/categories" className="text-right flex items-center justify-end border px-5 py-3 mt-2 text-sm font-bold gap-2">Continue Shopping Cart < MdArrowOutward /></Link>
          </div>
          </div>
        ) : (
          <>
            {/* TABLE HEADER */}

            <div className="grid grid-cols-5 border-b pb-4 font-medium text-gray-700">
              <p className="text-left">Item</p>
              <p className="text-right">Price</p>
              <p className="text-center">Add</p>
              <p className="text-center">Total</p>
              <p className="text-center">Remove</p>
            </div>

            {/* WISHLIST ITEMS */}

            {wishlist.map((item) => (
              <div
                key={item.wishlist_id}
                className="grid grid-cols-5  items-center border-b py-6"
              >
                {/* PRODUCT */}

                <div className="flex items-center gap-4">
                  <img
                    src={`http://localhost:5000/uploads/${item.thumbnail}`}
                    className="w-30 h-30 object-cover bg-gray-100"
                  />

                  <h3 className="font-medium text-xl">{item.product_name}</h3>
                </div>

                {/* PRICE */}

                <p className="text-right">${item.discount_price}</p>

                {/* ADD TO CART */}

                <button className="bg-[#CB927A] text-white px-6 py-2 w-fit mx-12">
                  Add To Cart
                </button>

                {/* TOTAL */}

                <p className="text-center">₹{item.discount_price}</p>

                {/* REMOVE */}

                <button
                  onClick={() => removeWishlist(item.wishlist_id)}
                  className="flex items-center gap-2 text-red-500 mx-20"
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            ))}

          
            <Link to = "/categories" className="text-right flex items-center justify-end">Continue Shopping Cart < MdArrowOutward /></Link>

            {/* CLEAR ALL BUTTON */}

            <div className="mt-8">
              <button
                onClick={clearAll}
                className="border px-6 py-2 hover:bg-gray-100"
              >
                Clear All Wishlist 
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
