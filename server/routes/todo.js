const express = require('express');
const router = express.Router();



const {getAllTodo, postCreateTodo, updateTodo,deleteTodo} = require("../controller/todo")
router.get("/",getAllTodo);
router.post("/",postCreateTodo);
router.patch("/:id", updateTodo);
router.delete("/:id",deleteTodo);

module.exports=router