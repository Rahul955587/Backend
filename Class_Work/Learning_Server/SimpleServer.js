const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const user={
        name: "Rahul",
        age: 18,
        friend:"Abhinav",
    }

    if (url == '/' && method== 'GET'){
        res.end("khatam");
    }
    else if (url == '/users' && method == 'GET') { 
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    }
    else if (method == "POST" && url == "/data") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk+"\n";
        });
        req.on("end", () => {
            fs.appendFile("Class_Work/Learning_Server/file.txt", body, () => {
                res.writeHead(201, "Data save successfully");
                res.end();
            })
        })
    }
});
server.listen(3000, () => { console.log("Run suffesfully") });