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
);

Todo.update = (todo, id) => {
  return db.one(
    `UPDATE todo_table SET
    task = $1,
    category = $2,
    info = $3,
    status = $4
    WHERE id = $5
    RETURNING *`,
    [todo.task, todo.category, todo.info, todo.status, id]);
}

Todo.destroy = id => {
  return db.none(
    `DELETE FROM todo_table
    WHERE id = $1`, [id]);
};




//
module.exports = Todo
