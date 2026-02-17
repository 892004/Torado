const express = require("express");
const cors = require("cors");
const db = require('./Config/db');
const userRoutes = require('./Routes/userRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes)
app.use("/api/category", categoryRoutes)


module.exports = app;
