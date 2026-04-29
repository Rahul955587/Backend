const express = require("express");
const cors = require("cors");
const app = express();
app.use("/uploads", express.static("uploads"));
app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

module.exports = app;
