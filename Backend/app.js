const express = require("express");
const cors = require("cors");
const db = require('./Config/db');
const userRoutes = require('./Routes/userRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')
const productRoutes = require('./Routes/productRoutes')
const productImgRoutes = require('./Routes/ProductImgRoutes')
const wishlistRoutes = require('./Routes/WishlistRoutes')
const CartRoutes = require('./Routes/CartRoutes')
const OrderRoutes = require('./Routes/OrderRoutes')
const CheckRoutes = require('./Routes/CheckRoutes')
const AdminRoutes = require('./Routes/AdminRoutes')


const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// users
app.use("/api/users", userRoutes)

// category
app.use("/api/category", categoryRoutes)

// products
app.use("/api/product" , productRoutes)

// product-img
app.use("/api/product-img",productImgRoutes)

// wishlist
app.use("/api/wishlist" , wishlistRoutes)

// Cart
app.use("/api/cart" , CartRoutes)

// oreders
app.use("/api/order" , OrderRoutes)

// check out
app.use("/api/checkout" , CheckRoutes)

// admin dashboard
app.use("/api/admin" , AdminRoutes)
module.exports = app;
