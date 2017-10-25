DROP TABLE IF EXISTS todo_db;
CREATE TABLE IF NOT EXISTS todo_table(
  id SERIAL PRIMARY KEY,
  task VARCHAR,
  category VARCHAR,
  info TEXT,
  status BOOLEAN
);
