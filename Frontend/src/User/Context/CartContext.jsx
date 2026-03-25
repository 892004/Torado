import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
    const navigate = useNavigate();



const getUserData = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  return {
    userId: user?.user_id,
    token
  };
};

  const updateQty = async (cartId, qty) => {

if (qty < 1) return;

try {

await axios.put(`http://localhost:5000/api/cart/${cartId}`,
  { qty: qty},
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
}
);

fetchCartList();

} catch (error) {
console.log("Update Qty Error", error);
}

};

  // Get add to cart

  const fetchCartList = async () => {

    const {userId , token } = getUserData();

    if(!userId || !token) return;

    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setcart(res.data);
    } catch (error) {
      console.log("Cart fetch error :", error);
    }
  };

  // add to cart
  const addtoCart = async (productId) => {

    const {userId , token } = getUserData();

    if(!userId || !token){
       alert("Please login first");
       navigate("/login"); 
    return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/cart/add",
        {
          user_id: userId,
          product_id: productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

    const {token} =  getUserData();
    try {
      await axios.delete(`http://localhost:5000/api/cart/${cartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setcart((prev) => prev.filter((item) => item.cart_id !== cartId));
    } catch (error) {
      console.log("Remove Cart Error", error);
    }
  };

  //  Load Cart On Page Load
  useEffect(() => {
    fetchCartList();
  },);

  return (
    <CartContext.Provider
      value={{
        cart,
        addtoCart,
        removeCart,
        updateQty
      }}
    >
      {children}
    </CartContext.Provider>
  );

  
};

// custom Hooks
export const useCartlist = () => useContext(CartContext);
