const express = require("express");
const mongoose = require("mongoose");
const memoRoutes = require("./memo-routes");
const bodyParser = require("body-parser");

const app = express();

mongoose
  .connect(
    "mongodb+srv://stevan:Stevan.1@cluster0.lsmdj.mongodb.net/memo?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection to the database failed");
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res, next) {
  res.send("Server started");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.use("/memos", memoRoutes);

module.exports = app;
