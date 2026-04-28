const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine","ejs");
const authRoutes=require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
app.get("/", (req, res) => {
  res.render("home");
});
app.use("/",authRoutes);
app.use("/todos",todoRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(() =>console.log("MongoDB Connected"))
.catch(err =>console.log(err));
app.listen(3000, () => {
console.log("Server running on port 3000");
});