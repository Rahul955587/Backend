const express = require('express');
const app = express();
const noteModal = require("./models/notes.model");

app.use(express.json());

app.post("/notes", async (req, res) => {
    const data = req.body
    await noteModal.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "Note Created"
    })
});
app.get("/notes", async (req, res) => {
    const notes = await noteModal.find()//return array
    // find=> [{},{}] or [](empty array)
    // findOne=> {} or null

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
});
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    await noteModal.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "deleted"
    })
});
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    await noteModal.findOneAndUpdate({ _id: id }, { description: description })
    res.status(200).json({
        message:"Note update successfully"
    })
})


module.exports = app;