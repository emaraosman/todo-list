const express = require('express')

const todoRoutes = express.Router()
const todoController = require('../controllers/todo-Controller')

todoRoutes.get('/index', todoController.index)





//
module.exports = todoRoutes
