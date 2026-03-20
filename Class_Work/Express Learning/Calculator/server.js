const express = require('express');
const app = express();

app.use(express.json());

app.post("/sum", (req, res, next) => {
    console.log("request received on /sum");
    next();
} ,(req, res) => {
    // console.log(req.query);
    // const a = req.query.a;
    // const b = req.query.b;
    const {a , b} = req.body;
    res.send(parseInt(a) + parseInt(b));
});
app.post("/sub", (req, res) => {
  // console.log(req.query);
//   const a = req.query.a;
    //   const b = req.query.b;
    const { a, b } = req.body;
    res.send(parseInt(a) - parseInt(b));
});
app.post("/multiply", (req, res) => {
  // console.log(req.query);
//   const a = req.query.a;
    //   const b = req.query.b;
    const { a, b } = req.body;
  res.send(parseInt(a) * parseInt(b));
});
app.post("/div", (req, res) => {
  // console.log(req.query);
//   const a = req.query.a;
    //   const b = req.query.b;
    const { a, b } = req.body;
  res.send(parseInt(a) % parseInt(b));
});
app.post("/sqr", (req, res) => {
  // console.log(req.query);
//   const a = req.query.a;
    //   const b = req.query.b;
    const { a, b } = req.body;
  res.json([parseInt(a) * parseInt(a), parseInt(b) * parseInt(b)]);
});

app.listen(3000, () => {
    console.log("Server is Running");
});