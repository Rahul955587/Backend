const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log("New Request received" );
    res.end("Hello from serve");
});

myserver.listen(8000, () => {
    console.log("server Started");
});


