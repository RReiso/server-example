const db = require("../db/connection");

const create = (email, password) => {
  return db
    .query("INSERT INTO users (email, password) VALUES($1, $2) RETURNING *", [
      email,
      password,
    ])
    .then((result) => result.rows[0]);
};

const getAll = () => {
  return db.query("SELECT * FROM users").then((result) => result.rows);
};

module.exports = {
  create,
  getAll,
};
