// 66. JSON - Basics
const express = require("express");
const app = express();
const port = 5000;
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(port, (req, res) => {
  console.log(`Server is listening ${port}`);
});
