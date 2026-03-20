const express = require('express');

const app = express();

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    res.send("Hello Bhai");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});