const express = require("express");
const morgan = require("morgan");
const session = require('express-session');
const methodOverride = require('method-override');
const port = process.env.PORT || '3000';
require('dotenv').config();

const app = express();

require("./config/database");
require('./config/passport');

const indexRouter = require("./routes/index");
const homeRouter = require("./routes/creatures");
const passport = require('passport');

// modules
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'CreatureFeature',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/home", homeRouter);

app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
  });
  