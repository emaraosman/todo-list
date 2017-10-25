const Todo = require('../models/Todo')

const todoController = {}

todoController.index = (req, res) =>{
  Todo.findAll()
  .then((todo)=>{
    console.log(todo)
    res.json({
      data: {
      todo:todo,
    },
    })
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
};






//
module.exports = todoController
