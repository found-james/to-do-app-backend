const express = require("express");
const router = express.Router();
const { getTodos, createTodo, deleteTodo, updateTodo,showTodo } = require("../controllers/todoControllers.js")
const { asyncHandler } = require("../middleware/errorMiddleware.js");

//const Todo = require("../models/TodoSchema.js");

router.get("/", asyncHandler( getTodos ));

router.post("/", asyncHandler( createTodo ));

router.delete("/:id", asyncHandler( deleteTodo ));

router.put("/:id", asyncHandler( updateTodo ));

router.get("/:id", asyncHandler( showTodo ));

module.exports = router;

// get - read 
// post - create
// delete - destroy
// put - update