import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useCartlist } from "../../Context/CartContext";

const CartSidebar = ({ isOpen, setIsOpen }) => {

  const { cart, removeCart } = useCartlist();

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
        className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50 shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <IoCloseOutline
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Cart Items */}
        <div className="p-5 space-y-5 overflow-y-auto h-[85%]">

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.cart_id} className="flex gap-4 items-center">

                <img
                  src={item.image}
                  className="w-16 h-16 object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium">
                    {item.product_name}
                  </h3>

                  <p>${item.price}</p>
                </div>

                <button
                  onClick={() => removeCart(item.cart_id)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>
            ))
          )}

        </div>
      </div>
    </>
  );
};

export default CartSidebar;