import React from "react";
import { useCartlist } from "../Context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import maestro from '../../assets/Images/Payment/maestro.jpg'
import visa from '../../assets/Images/Payment/visa.jpg'
import  paypal from '../../assets/Images/Payment/paypal.jpg'
import amex from '../../assets/Images/Payment/american-express.jpg'
import discover from '../../assets/Images/Payment/discover.jpg'
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate =  useNavigate()
  const { cart, removeCart, updateQty } = useCartlist();

   const total = cart.reduce((sum, item) => {
    return sum + item.discount_price * item.qty;
  }, 0);

  const clearAll = () => {
    cart.forEach((item) => {
      removeCart(item.cart_id);
    });
  };

  return (
    <section className=" w-full py-20 flex flex-col items-center justify-center">
      <h3 className="text-5xl  mb-10 text-center mt-20 py-20 w-full bg-[#FFFCF9]">
        Cart
      </h3>
      <div className="flex flex-row items-center justify-center gap-2 text-[16px] -translate-y-30">
        <Link to="/" className="text-gray-500 ">
          Home
        </Link>
        /
        <Link to="/cart" className="text-[#CB927A]">
          Cart
        </Link>
      </div>

      <div className="Wislist h-auto max-h-[100vh] max-w-[1200px] mx-auto">
        {cart.length === 0 ? (
          <div>
            <p className="text-gray-500 text-center">Your cart is empty</p>
            <div className="btn">
              <Link
                to="/categories"
                className="text-right flex items-center justify-end border px-5 py-3 mt-2 text-sm font-bold gap-2"
              >
                Continue Shopping <MdArrowOutward />
              </Link>
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

            {cart.map((item) => (
              <div
                key={item.cart_id}
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

                <button className=" mx-20">
                  <div className="flex items-center justify-between px-2 w-25 py-1 border border-gray-200 bg-gray-100  text-xl ">
                    <button
                      onClick={() =>
                        updateQty(item.cart_id, (item.qty || 1) - 1)
                      }
                      className=""
                    >
                      -
                    </button>

                    <span className="font-normal' text-lg ">{item.qty}</span>

                    <button
                      onClick={() =>
                        updateQty(item.cart_id, (item.qty || 1) + 1)
                      }
                      className=""
                    >
                      +
                    </button>
                  </div>
                </button>

                {/* TOTAL */}

                <p className="text-center">
                  {" "}
                  ${item.discount_price * (item.qty || 1)}
                </p>

                {/* REMOVE */}

                <button
                  onClick={() => removeWishlist(item.cart_id)}
                  className="flex items-center gap-2 text-red-500 mx-20"
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            ))}

            <Link
              to="/categories"
              className="text-right flex items-center justify-end"
            >
              Continue Shopping Cart <MdArrowOutward />
            </Link>

            {/* CLEAR ALL BUTTON */}

            <div className="mt-8">
              <button
                onClick={clearAll}
                className="border px-6 py-2 hover:bg-gray-100"
              >
                Clear All Cart
              </button>
            </div>
          </>
        )}

        {/* Order Summary */}
        <div className="Order-Summary flex flex-col p-10 gap-2 absolute right-50 w-122 bg-gray-100">
          <h3 className="text-xl">Order Summary</h3>
          <div className="total flex flex-row items-center gap-20">
          <p className="text-sm text-gray-500">Total </p><span className="absolute right-4 text-sm text-gray-500">{cart.length} items</span>
          </div>

         <div className="total flex flex-row items-center gap-20">
          <p className="text-sm text-gray-500">SubTotal </p><span className="absolute right-4 text-sm ">${total}.00</span>
          </div> 

          <div className="total flex flex-row items-center gap-20">
          <p className="text-sm text-gray-500">Shipping</p><span className="absolute right-4 text-sm text-gray-500">$0.00</span>
          </div>

          <div className="total flex flex-row items-center gap-20">
          <p className="text-sm text-gray-500">payble total</p><span className="absolute right-4 text-sm ">${total}.00</span>
          </div>

          <button onClick={()=>{navigate('/checkout')}} className="py-3 border bg-[#CB927A] text-white cursor-pointer">Proceed To CheckOut</button>


<div className="flex flex-row gap-2">
          <input type="checkbox" />I accept to the <span className="text-[#CB927A]">Terms & Conditions</span>and<span className="text-[#CB927A]">Privacy Policy</span>
</div>

<h3 className="text-xl py-2">Accepted payment method</h3>

 <div className="payment-methods flex flex-row gap-3">
            <img src={maestro}  className="h-6"/>
            <img src={visa}  className="h-6"/>
            <img src={paypal}  className="h-6"/>
            <img src={amex}  className="h-6"/>
            <img src={discover}  className="h-6"/>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
