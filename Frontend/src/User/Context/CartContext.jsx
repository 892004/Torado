import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const userId = user?.user_id;
  const token = localStorage.getItem("token");

  // Get add to cart

  const fetchCartList = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setcart(res.data);
    } catch (error) {
      console.log("Cart fetch error :", error);
    }
  };

  // add to cart
  const addtoCart = async (productId) => {
    try {
      await axios.post(
        "http://localhost:5000/api/cart/add",
        {
          user_id: userId,
          product_id: productId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      fetchCartList();
    } catch (error) {
      console.log("Add to Cart error", error);
    }
  };

  // Remove From cart

  const removeCart = async (cartId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${cartId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setcart((prev) => prev.filter((item) => item.cart_id !== cartId));
    } catch (error) {
      console.log("Remove Cart Error", error);
    }
  };

  //  Load Cart On Page Load
  useEffect(() => {
    if (userId && localStorage.getItem("token")) {
      fetchCartList();
    }
  }, [userId]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addtoCart,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom Hooks
export const useCartlist = () => useContext(CartContext);
