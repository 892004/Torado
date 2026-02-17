const express = require("express");
const cors = require("cors");
const db = require('./Config/db');
const userRoutes = require('./Routes/userRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes)


module.exports = app;
