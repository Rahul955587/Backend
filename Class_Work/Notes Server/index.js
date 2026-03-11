const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url == '/notes' && method == 'GET') {
        fs.readFile("notes.json", utf8, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error occurs while reading notes");
                return;
            }
            else {
                res.writeHead(200, { "Content-type": "application/json" });
                res.end(data);
            }
        })
    }
});
server.listen(3000, () => { console.log("Port 3000") });