const express = require("express");
const mongodb = require("./mongodb/mongodb.connect");

const app = express();

mongodb.connect();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello world");
});
