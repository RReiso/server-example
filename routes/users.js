const express = require("express");
const router = express.Router();
const { getUsers, postUsers } = require("../controllers/users");

// route to /users
router.route("/").get(getUsers).post(postUsers);

module.exports = router;
