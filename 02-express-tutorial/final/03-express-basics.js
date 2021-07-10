// 61. Express Info
// 62. Express Basics

const express = require("express");
const app = express();
const port = 5000;

// home page
app.get("/", (req, res) => {
  console.log("user hit the resouerce");
  res.status(200).send("Home Page");
});

// about
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});

// app.get : Read Data
// app.post : insert data
// app.put : update data
// app.delete : delete data
// app.all :(get, post, put and delete)
// app.use
// app.listen
