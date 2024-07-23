require("dotenv").config();
const express = require("express");

const sequelize = require("./db/connection");


const User = require("./users/model");

const port = process.env.PORT || 5001;


const syncTables = () => {
    User.sync({alter: true});
}


app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Server is listening on port ${port}`);
});