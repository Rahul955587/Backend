const express = require('express');
const app = express();

app.use(express.json());

let todos = [];
let id = 1;

app.get('/todos', (req,res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    const newtodo = {
        id: id++,
        task: task
    };
      todos.push(newtodo);
      res.send(newtodo);
});

app.listen(3000, () => {
    console.log("server is Runnning")
});