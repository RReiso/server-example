const db = require("../db/connection");

const getUsers = (req, res) => {
  // All logic etc
  db.query(`SELECT * FROM users;`)
    .then((data) => {
      let users = data.rows;
      res.status(200).json(users);
      return;
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

const postUsers = (req, res) => {
  // All logic etc
  // db queries can be extracted to db/queries
  res.status(200).json("Saved!");
};

module.exports = {
  getUsers,
  postUsers,
};
