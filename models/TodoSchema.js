const { Schema, model }= require("../config/connection.js");

const todoSchema = Schema({
    title: { required: true, type: String},
    completed: {required: true, type: Boolean},
},
{ 
    timestamps: true
})

module.exports = model('Todo', todoSchema);