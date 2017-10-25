const db = require('../db/config')

const Todo = {}

Todo.findAll = () => {
  db.query('SELECT * FROM todo_table')
}





//
module.exports = Todo
