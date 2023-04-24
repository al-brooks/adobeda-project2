// require dependencies
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");

// init express
const app = express();

// configure app settings
app.set("view engine", "ejs");
require("dotenv").config();
require("./config/database");

// mount middleware
app.use(logger("dev"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

// mount routes

// catch all route - 404

// listen for requests
app.listen(3000, () => {
  console.log("Express is listening on port:3000");
});
