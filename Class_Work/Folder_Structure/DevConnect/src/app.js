const express = require("express");
const postRouter=require("./routes/postsRoutes")
const cors = require("cors");
const app = express();


app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from server!");
});
// app.get("/posts", (req, res) => {
//   res.send("ye lele")
// })
// app.post("/posts", (req, res) => {
//   res.send("Kar diya");
// });
// app.post("/posts/:id", (req, res) => {
//   res.send("ye lo  ye walla")
// })
app.use("/posts", postRouter);
module.exports = app;
