import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

const getUserData = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  return {
    userId: user?.user_id,
    token
  };
};
  // =============================
  // GET WISHLIST
  // =============================
const fetchWishlist = async () => {

  const { userId, token } = getUserData();

  if (!userId || !token) return;

  try {
    const res = await axios.get(
      `http://localhost:5000/api/wishlist/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setWishlist(res.data);

  } catch (error) {
    console.log("Wishlist fetch error:", error);
  }
};


  // =============================
  // ADD TO WISHLIST
  // =============================

const addWishlist = async (productId) => {

  const { userId, token } = getUserData();

  if (!userId || !token) {
    alert("Please login first");
     navigate("/login"); 
    
    return;
  }

  try {
    await axios.post(
      "http://localhost:5000/api/wishlist/add",
      {
        user_id: userId,
        product_id: productId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    fetchWishlist();

  } catch (error) {
    console.log("Add wishlist error:", error);
  }
};


  // =============================
  // REMOVE FROM WISHLIST
  // =============================

const removeWishlist = async (wishlistId) => {

  const { token } = getUserData();

  try {
    await axios.delete(
      `http://localhost:5000/api/wishlist/${wishlistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setWishlist(prev =>
      prev.filter(item => item.wishlist_id !== wishlistId)
    );

  } catch (error) {
    console.log("Remove wishlist error:", error);
  }
};


  // =============================
  // LOAD WISHLIST ON PAGE LOAD
  // =============================
useEffect(() => {
  fetchWishlist();
}, []);


  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        addWishlist,
        removeWishlist
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

};


// CUSTOM HOOK

export const useWishlist = () => useContext(WishlistContext);