const mongoose = require('mongoose')
const ToDoSchema = new mongoose.Schema({
    "title":String,
    "description" : String,
    "date" :String
});

const Todo = mongoose.model('todo', ToDoSchema);
module.exports=Todo;