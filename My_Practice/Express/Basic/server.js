const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("This is Home Page");
});
app.get("/user", (req, res) => {
    res.send("This is User Page");
});
app.get("/about", (req, res) => {
    res.send("This is about Page");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});