const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const date = new Date().toISOString();
    const logdata = `${ date } | ${ method} | ${url }\n`;
    fs.appendFile("./Class_Work/Learning_Server/log.txt", logdata, (err) => {
        if (err) {
            console.log("errr", err);
            res.writeHead(200, { "Content-type": "text/plain" });
            res.end("request logged");
        }
    });
    
});
server.listen(3000, () => { console.log("Done") });