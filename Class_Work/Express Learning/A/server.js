const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.text());

app.use(function(req, res, next) {
    // console.log(req.body);
    
    const date = new Date().toISOString();
    const log = `⁠new log - ${date} | Method - ${req.method} | URL - ${req.url} | Body - ${req.body}\n`;
    fs.appendFile("LogFile.txt", log, 'utf-8', (err) => {
        if(err) throw err;
        console.log("Log Added!");        
    })
    next();
})

app.get("/sum/:a/:b", (req,res) => {
    const a = req.params.a;
    const b = req.params.b;
    
    res.send(parseInt(a)+parseInt(b));
})

app.post("/sum", (req,res) => {
    
    const {a, b} = req.body;
    // const msg = req.body;
    
    res.json({"sum": a+b});
    // res.send(msg);
});

app.listen(3000, () => {
    console.log("Server running on PORT=3000");
    
});