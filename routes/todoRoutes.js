const express = require("express");
const router = express.Router();
const { getTodos, createTodo, deleteTodo, updateTodo,showTodo } = require("../controllers/todoControllers.js")
//const Todo = require("../models/TodoSchema.js");

router.get("/", getTodos );

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

router.put("/:id", updateTodo);

router.get("/:id", showTodo);

module.exports = router;