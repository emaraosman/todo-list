const Todo = require('../models/Todo')

const todoController = {}

todoController.index = (req, res) =>{
  Todo.findAll()
  .then( todo =>{
    res.render('todo-views/todo-index', {
      data: todo,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

todoController.show = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.render('todo-views/todo-single',{
        data: todo,
      })
    }).catch(err =>{
      console.log(err)
      res.status(500).json({error:err})
    })
  }

  todoController.create = (req, res) => {
    Todo.create({
      task: req.body.task,
      category: req.body.category,
      info: req.body.info,
      status: 'False',
    }).then(todo => {
      res.redirect(`/todo/${todo.id}`)
    }).catch(err=>{
      console.log(err)
      res.status(500).json({error: err})
    })
  }



//
module.exports = todoController
