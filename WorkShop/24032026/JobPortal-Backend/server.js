const express = require("express");
const ConnectDB = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Server is Running" });
});

app.get("/api/jobs", (req, res) => {
  const jobs = [
    { id: 1, title: "abc", company: "Google", location: "Noida" },
    { id: 2, title: "def", company: "Amazon", location: "Delhi" },
  ];
  res.send(jobs);
});

ConnectDB();

app.listen(5000, () => {
  console.log("Server is Running http://localhost:5000");
});
