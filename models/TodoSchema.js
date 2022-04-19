const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: { required: true, type: String},
    completed: {required: true, type: Boolean},
},
{ 
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema);