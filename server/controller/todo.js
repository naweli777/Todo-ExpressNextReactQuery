//Controllers help us maintain a cleaner code base where each task is placed into its own function.

const Todo = require("../model/todos")
//Get todo
 const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

//Create todo
 const postCreateTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch(error) {
    res.status(400).json({ success: false, error });
  }
};

//Update todo
 const updateTodo = async (req, res) => {
    const allowedOptions =['title', 'description', 'date'];
    const selectedOption = Object.keys(req.body);
    const doesExist = selectedOption.every(option=>allowedOptions.includes(option))
    if(!doesExist){
        return res.status(400).json({success:false,error})
    }
    try{
        const todo = await Todo.findById({_id:req.params.id})
        selectedOption.forEach(option=>todo[option]= req.body[option]);
        todo.save(); 
        res.status(200).json(todo);

    }catch(error){
      res.status(400).json({success:false,error})
    }
}


//Delete todo
 const deleteTodo = async(req,res)=>{

    try{
        const todo = await Todo.findOneAndDelete({_id:req.params.id})
        res.status(200).json("Todo is deleted");
    }catch(error){
        res.status(400).json({success:false,error})
    }
   
}

module.exports ={getAllTodo, postCreateTodo, updateTodo,deleteTodo}