const express = require("express");
const router = express.Router();
//const Todo = require("../models/TodoSchema.js");

router.get("/", (req, res) => {
    res.status(200).json({message: "get todos"})
})

router.post("/", (req, res) => {
    res.status(200).json({message: "new todo "})
})

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "delete todo"})
})

router.put("/:id", (req, res) => {    
    res.status(200).json({message: "update todo"})
});

router.get("/:id", (req, res) => {    
    res.status(200).json({message: "show todo"})
})

module.exports = router;