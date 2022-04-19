const { globalAgent } = require("http");
const Todo = require("../models/TodoSchema.js");

const getTodos = async (req, res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
    }

const createTodo = async (req, res) => {

    if (!req.body.title) {
        res.status(400);
        throw new Error("Please add text");
    }

    const todo = await Todo.create({ title: req.body.title, completed: req.body.completed})
    res.status(200).json(todo)

}
    
const deleteTodo = async (req, res) => {

    const todo = await Todo.deleteOne(Todo.findById(req.params.id))

    if (!todo) {
        res.status(400);
        throw new Error("todo not found");
    }

    
    res.status(200).json({id: req.params.id })
}

const updateTodo = async (req, res) => {    
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        res.status(400);
        throw new Error("todo not found");
    }

    const updatedTodo = await Todo.findByIdAndUpdate( req.params.id, req.body, { new: true });
    res.status(200).json(updateTodo);
}

const showTodo = async (req, res) => {    
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        res.status(400);
        throw new Error("todo not found")

    }

    res.status(200).json(todo);
}

module.exports = { getTodos, createTodo, deleteTodo, updateTodo, showTodo }

