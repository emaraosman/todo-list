const db = require('../db/config')

const Todo = {}

Todo.findAll = () => db.query('SELECT * FROM todo_table')

Todo.findById = id => db.one ('SELECT * FROM todo_table WHERE id = $1',[id])

Todo.create = todo => db.one(`
  INSERT INTO todo_table (
    task,
    category,
    info,
    status
  ) VALUES (
    $/task/,
    $/category/,
    $/info/,
    $/status/
  )
  RETURNING *`,
  todo
)




//
module.exports = Todo
