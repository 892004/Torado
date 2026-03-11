import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);

const user = JSON.parse(localStorage.getItem("user") || "null");
const userId = user?.user_id;
  const token = localStorage.getItem("token");

  // =============================
  // GET WISHLIST
  // =============================

  const fetchWishlist = async () => {

    try {

     const res = await axios.get(
  `http://localhost:5000/api/wishlist/${userId}`,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
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

    try {

await axios.post(
  "http://localhost:5000/api/wishlist/add",
  {
    user_id: userId,
    product_id: productId
  },
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
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

    try {

    await axios.delete(
  `http://localhost:5000/api/wishlist/${wishlistId}`,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
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

  if(userId && localStorage.getItem("token")){
    fetchWishlist();
  }

}, [userId]);


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