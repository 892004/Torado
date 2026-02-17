const express = require("express");
const cors = require("cors");
const db = require('./Config/db');
const userRoutes = require('./Routes/userRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')
const productRoutes = require('./Routes/productRoutes')

const app = express();

app.use(cors());
app.use(express.json());

// users
app.use("/api/users", userRoutes)

// category
app.use("/api/category", categoryRoutes)

// products
app.use("/api/product" , productRoutes)


module.exports = app;
