const express = require("express");
const api = express.Router();
const { getTodos, createTodo, deleteTodo, updateTodo,showTodo } = require("../controllers/todoControllers.js")
const { asyncHandler } = require("../middleware/errorMiddleware.js");

//const Todo = require("../models/TodoSchema.js");

api.get("/todo", asyncHandler( getTodos ));

api.post("/todo", asyncHandler( createTodo ));

api.delete("todo/:id", asyncHandler( deleteTodo ));

api.put("todo/:id", asyncHandler( updateTodo ));

api.get("todo/:id", asyncHandler( showTodo ));

module.exports = api;

// get - read 
// post - create
// delete - destroy
// put - update or create