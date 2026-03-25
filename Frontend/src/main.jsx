import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from "./User/Context/WishlistContext";
import { CartProvider } from "./User/Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
 
  <BrowserRouter>
    <WishlistProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </WishlistProvider>
  </BrowserRouter>,

);
