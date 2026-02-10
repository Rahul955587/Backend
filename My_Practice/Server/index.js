const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log("New Request received" );
    res.end("<h1>Good Morning</h1>");
});

myserver.listen(8000, () => {
    console.log("server Started");
});


