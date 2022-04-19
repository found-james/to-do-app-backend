const getTodos = (req, res) => {
        res.status(200).json({message: "get todos"})
    }

const createTodo = (req, res) => {
    res.status(200).json({message: "new todo "})
}
    
const deleteTodo = (req, res) => {
    res.status(200).json({message: "delete todo"})
}

const updateTodo = (req, res) => {    
    res.status(200).json({message: "update todo"})
}
const showTodo = (req, res) => {    
    res.status(200).json({message: "show todo"})
}

module.exports = { getTodos, createTodo, deleteTodo, updateTodo, showTodo }

