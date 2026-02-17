const express = require("express");
const cors = require("cors");
const db = require('./Config/db');
const userRoutes = require('./Routes/userRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')
const productRoutes = require('./Routes/productRoutes')
const productImgRoutes = require('./Routes/ProductImgRoutes')

const app = express();

app.use(cors());
app.use(express.json());

// users
app.use("/api/users", userRoutes)

// category
app.use("/api/category", categoryRoutes)

// products
app.use("/api/product" , productRoutes)

// product-img
app.use("/api/product-img",productImgRoutes)


module.exports = app;
