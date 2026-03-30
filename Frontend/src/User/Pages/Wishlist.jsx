import React from "react";
import { useWishlist } from "../Context/WishlistContext";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import '../Components/wishlist/wishlist.css'
import { useCartlist } from "../Context/CartContext";


const Wishlist = () => {
  const { addtoCart } = useCartlist();
  const { wishlist, removeWishlist } = useWishlist();

  const clearAll = () => {
    wishlist.forEach((item) => {
      removeWishlist(item.wishlist_id);
    });
  };

  return (
    <section className="Wishlist  w-full py-20 flex flex-col items-center justify-center">

      <h3 className="wishlist-title text-5xl mb-10 text-center mt-20 py-20 w-full bg-[#FFFCF9]">My Wishlist</h3>
      <div className="flex flex-row items-center justify-center gap-2 text-[16px] -translate-y-30">
        <Link to="/" className="text-gray-500 ">
          Home
        </Link>
        /
        <Link to="/Wishlist" className="text-[#CB927A]">
          wishlist
        </Link>
      </div>

      <div className="wishlist-content  max-w-[1200px] mx-auto px-4">
        {wishlist.length === 0 ? (
          <div className="empty-wishlist text-center py-8">
          <p className="text-gray-500 text-center mb-4">Your wishlist is empty</p>
          <div className="btn">
          <Link to = "/categories" className="continue-shopping-btn text-right flex items-center justify-end border px-5 py-3 mt-2 text-sm font-bold gap-2 mx-auto w-fit">Continue Shopping < MdArrowOutward /></Link>
          </div>
          </div>
        ) : (
          <>
            {/* TABLE HEADER */}

            <div className="table-header hidden md:grid grid-cols-5 border-b pb-4 font-medium text-gray-700">
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
                className="wishlist-item border-b py-6 md:grid md:grid-cols-5 md:items-center"
              >
                {/* PRODUCT */}

                <div className="product-info flex items-center gap-4 mb-4 md:mb-0">
                  <img
                    src={`http://localhost:5000/uploads/${item.thumbnail}`}
                    className="w-20 h-20 md:w-30 md:h-30 object-cover bg-gray-100"
                  />

                  <h3 className="font-medium text-lg md:text-xl">{item.product_name}</h3>
                </div>

                {/* PRICE */}

                <p className="price text-right md:col-start-2">${item.discount_price}</p>

                {/* ADD TO CART */}

              <button
  onClick={() => addtoCart(item.product_id)}
  className="add-to-cart-btn bg-[#CB927A] text-white px-4 py-2 md:px-6 md:py-2 w-full md:w-fit md:mx-12 mb-4 md:mb-0"
>
  Add To Cart
</button>
                {/* TOTAL */}

                <p className="total text-center md:col-start-4">₹{item.discount_price}</p>

                {/* REMOVE */}

                <button
                  onClick={() => removeWishlist(item.wishlist_id)}
                  className="remove-btn flex items-center gap-2 text-red-500 md:mx-20 justify-center md:justify-start"
                >
                  <FiTrash2 />
                  <span className="hidden md:inline">Delete</span>
                </button>
              </div>
            ))}

          
            <Link to = "/categories" className="continue-shopping-link text-right flex items-center justify-end mt-6">Continue Shopping < MdArrowOutward /></Link>

            {/* CLEAR ALL BUTTON */}

            <div className="mt-8 text-center md:text-left">
              <button
                onClick={clearAll}
                className="clear-all-btn border px-6 py-2 hover:bg-gray-100 w-full md:w-auto"
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
