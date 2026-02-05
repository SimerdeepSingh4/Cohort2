const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteModel = require('./models/note.model')
const path = require('path');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

app.post("/api/notes", async(req, res) => {
    const { title, description } = req.body

    const notes = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: "Note created successfully",
        notes
    })
})

app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Note fetched successfully",
        notes
    })
})

app.delete("/api/notes/:id", async(req,res)=>{
    const id = req.params.id;
    const note = await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "Note fetched successfully",
        note
    })
})

app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id;
    const {description} = req.body;
    const note = await noteModel.findByIdAndUpdate(id, {description})
    res.status(200).json({
        message: "Note description updated successfully",
        description
    })
})

app.get('*name',(req,res)=>{
    res.sendFile(path.join(__dirname, "..","/public/404.html"))
})




module.exports = app;