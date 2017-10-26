const express = require('express')

const todoRoutes = express.Router()
const todoController = require('../controllers/todo-Controller')

todoRoutes.get('/index', todoController.index)

todoRoutes.get('/todo-add',(req, res)=>{
  res.render('todo-views/todo-add')
});

todoRoutes.get('/:id', todoController.show)

todoRoutes.post('/', todoController.create)





//
module.exports = todoRoutes
