import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useCartlist } from "../../Context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { cart, removeCart, updateQty } = useCartlist();

  console.log(cart);

  const total = cart.reduce((sum, item) => {
    return sum + item.discount_price * item.qty;
  }, 0);
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white z-50 shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5">
          <h3 className="text-xl">Shopping Cart</h3>
          <IoCloseOutline
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Cart Items */}
        <div className="p-5  overflow-y-auto h-[85%] ">
          {cart.length === 0 ? (
            <div className="py-40">
              <p className="flex items-center justify-center">
                Your cart is empty
              </p>
              <div className="btn flex items-center justify-center">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/categories");
                  }}
                  className="flex items-center justify-center border px-10 font-medium gap-2 py-3 mt-2 text-sm bg-[#CC9078] text-white"
                >
                  Continue Shopping <MdArrowOutward />
                </button>
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.cart_id} className="flex flex-col items-start">
                <div className="flex flex-row gap-5 border-b w-full border-gray-200 p-2 relative">
                  <img
                    src={`http://localhost:5000/uploads/${item.thumbnail}`}
                    className="w-30 h-30 object-cover"
                  />

                  <div className="flex flex-col gap-2 py-2">
                    <h3 className="text-[16px]">{item.product_name}</h3>
                    <p className="font-light">
                      ${item.discount_price * (item.qty || 1)}
                    </p>

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
                  </div>

                  <button
                    onClick={() => removeCart(item.cart_id)}
                    className="text-red-500 absolute right-5 bottom-8 text-xl"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="Sub-Total absolute bottom-0 w-90 bg-white scroll-auto p-5 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-lg">Subtotal</h3>
              <h3>${total}.00</h3>
            </div>

            <button onClick={()=> {setIsOpen(false) ; navigate("/checkout"); }} className="px-20 py-3 border border-gray-200 flex items-center justify-center gap-2 cursor-pointer bg-[#CC9078] text-white">
              Checkout <MdOutlineArrowOutward  />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/cart");
              }}
              className="px-20 py-3 border border-gray-200 flex items-center justify-center gap-2 cursor-pointer "
            >
              View Cart <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;

//

//
