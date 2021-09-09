const createError = require("http-errors");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const errorHandler = require("./middleware/error.middleware");
const applyApiMiddleware = require("./api");
const { isDevelopment, env } = require("./config");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("env", env);

/**
 * Add here only development middlewares
 */
if (isDevelopment) {
  app.use(logger("dev"));
}

/**
 * Pass to our server instance middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// handle all system routes
applyApiMiddleware(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "page not found"));
});
// error handler
app.use(errorHandler);

module.exports = app;
