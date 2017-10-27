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

todoController.edit = (req,res) =>{
  Todo.findById(req.params.id)
  .then(todo => {
    res.status(200).render('todo-views/todo-edit', {
      data:todo
    });
  }).catch(err => {
    console.log(err)
    res.status(500).json({error:err});
  });
};

todoController.update = (req, res) => {
  Todo.update({
    task: req.body.task,
    category: req.body.category,
    info: req.body.info,
    status: req.body.status,
  }, req.params.id)
  .then( todo => {
    res.redirect(`/todo-views/${todo.id}`)
  }).catch(err => {
    console.log(err)
    res.status(500).json({error:err})
  })
}

todoController.delete = (req, res) => {
  Todo.destroy(req.params.id)
  .then(()=> {
    res.redirect('/todo/index')
  }).catch(err => {
    res.status(500).json({error:err})
  })
}





//
module.exports = todoController
