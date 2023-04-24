// require dependencies
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const indexRoutes = require("./routes/index");

// init express
const app = express();

// configure app settings
app.set("view engine", "ejs");
require("dotenv").config();
require("./config/database");
require("./config/passport");

// mount middleware
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// mount routes
app.use("/", indexRoutes);

// catch all route - 404

// listen for requests
app.listen(3000, () => {
  console.log("Express is listening on port:3000");
});
