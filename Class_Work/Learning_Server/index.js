const http = require('http');
const server = http.createServer((req, res) => {
    console.log('hi');
    const url = req.url;
    const method = req.method;
    // console.log(url, method);
    if (url =="/" && method =="GET") {
        res.end("Abhay123");
    }
    else if (url == "/home" && method == "GET") {
        res.end("<h1>Hello Sir</h1>")
    }
});

server.listen(3000, () => {"successfully run" });