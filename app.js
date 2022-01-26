// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8079;
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Separated Routes for each Resource
const usersRoutes = require("./routes/users");

// Mount all resource routes
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ get: "success" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
