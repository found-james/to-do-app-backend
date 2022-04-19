const express = require("express");
const api = express.Router();

const { asyncHandler } = require("../middleware/errorMiddleware.js");
const { getTodos, createTodo, deleteTodo, updateTodo,showTodo } = require("../controllers/todoControllers.js");

//const Todo = require("../models/TodoSchema.js");

api.get("/", asyncHandler( getTodos ));

api.post("/", asyncHandler( createTodo ));

api.delete("/:id", asyncHandler( deleteTodo ));

api.put("/:id", asyncHandler( updateTodo ));

api.get("/:id", asyncHandler( showTodo ));

module.exports = api;

// get - read 
// post - create
// delete - destroy
// put - update or create