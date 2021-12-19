const express = require("express");
const mongodb = require("./mongodb/mongodb.connect");
const bodyParser = require("body-parser");
const app = express();

mongodb.connect();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.use(require("./routes/api"));

app.listen(3000, () => {
  console.log("working");
});

module.exports = app;
