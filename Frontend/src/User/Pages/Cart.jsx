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
import '../Components/CartSideBar/cart.css'

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

      <div className="cart-content h-auto max-h-[100vh] max-w-[1200px] mx-auto px-4 lg:px-0">
        {cart.length === 0 ? (
          <div className="empty-cart text-center py-8">
            <p className="text-gray-500 text-center mb-4">Your cart is empty</p>
            <div className="btn">
              <Link
                to="/categories"
                className="continue-shopping-btn text-right flex items-center justify-end border px-5 py-3 mt-2 text-sm font-bold gap-2 mx-auto w-fit"
              >
                Continue Shopping <MdArrowOutward />
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* TABLE HEADER */}

            <div className="table-header hidden md:grid grid-cols-5 border-b pb-4 font-medium text-gray-700">
              <p className="text-left">Item</p>
              <p className="text-right">Price</p>
              <p className="text-center">Quantity</p>
              <p className="text-center">Total</p>
              <p className="text-center">Remove</p>
            </div>

            {/* WISHLIST ITEMS */}

            {cart.map((item) => (
              <div
                key={item.cart_id}
                className="cart-item border-b py-6 md:grid md:grid-cols-5 md:items-center"
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

                {/* QUANTITY SELECTOR */}

                <div className="quantity-selector mx-auto md:mx-20 mb-4 md:mb-0">
                  <div className="flex items-center justify-between px-2 w-32 md:w-25 py-1 border border-gray-200 bg-gray-100 text-xl">
                    <button
                      onClick={() =>
                        updateQty(item.cart_id, Math.max(1, (item.qty || 1) - 1))
                      }
                      className="px-2 hover:text-[#CB927A]"
                    >
                      -
                    </button>

                    <span className="font-normal text-lg px-2">{item.qty || 1}</span>

                    <button
                      onClick={() =>
                        updateQty(item.cart_id, (item.qty || 1) + 1)
                      }
                      className="px-2 hover:text-[#CB927A]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* TOTAL */}

                <p className="total text-center md:col-start-4">
                  ${item.discount_price * (item.qty || 1)}
                </p>

                {/* REMOVE */}

                <button
                  onClick={() => removeCart(item.cart_id)}
                  className="remove-btn flex items-center gap-2 text-red-500 md:mx-20 justify-center md:justify-start"
                >
                  <FiTrash2 />
                  <span className="hidden md:inline">Delete</span>
                </button>
              </div>
            ))}

            <Link
              to="/categories"
              className="continue-shopping-link text-right flex items-center justify-end mt-6"
            >
              Continue Shopping <MdArrowOutward />
            </Link>

            {/* CLEAR ALL BUTTON */}

            <div className="mt-8 text-center md:text-left">
              <button
                onClick={clearAll}
                className="clear-all-btn border px-6 py-2 hover:bg-gray-100 w-full md:w-auto"
              >
                Clear All Cart
              </button>
            </div>
          </>
        )}

        {/* Order Summary */}
        <div className="order-summary mt-8 md:mt-0 md:fixed md:right-8 md:top-40 w-full md:w-96 lg:w-122 bg-gray-100 p-6 lg:p-10">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Total Items</p>
              <span className="text-sm text-gray-500">{cart.length} items</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">SubTotal</p>
              <span className="text-sm font-medium">${total}.00</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Shipping</p>
              <span className="text-sm text-gray-500">$0.00</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-300">
              <p className="text-sm font-semibold">Payable Total</p>
              <span className="text-sm font-bold text-lg">${total}.00</span>
            </div>
          </div>

          <button 
            onClick={()=>{navigate('/checkout')}} 
            className="w-full mt-6 py-3 border bg-[#CB927A] text-white cursor-pointer hover:bg-[#B8826A] transition-colors"
          >
            Proceed To Checkout
          </button>

          <div className="flex flex-row gap-2 mt-4 text-xs">
            <input type="checkbox" className="mt-0.5" />
            <span>I accept to the <span className="text-[#CB927A]">Terms & Conditions</span> and <span className="text-[#CB927A]">Privacy Policy</span></span>
          </div>

          <h3 className="text-xl py-4 mt-4 border-t border-gray-300">Accepted Payment Methods</h3>

          <div className="payment-methods flex flex-wrap gap-3">
            <img src={maestro} className="h-6" alt="Maestro" />
            <img src={visa} className="h-6" alt="Visa" />
            <img src={paypal} className="h-6" alt="PayPal" />
            <img src={amex} className="h-6" alt="American Express" />
            <img src={discover} className="h-6" alt="Discover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
