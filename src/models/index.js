"use strict";

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const models = {};

// Require all the files from the models folder and add the imported to a unique configuration object
const baseName = path.basename(__filename);

// connect to mongodb server witht the mongoose instance
require("../connectors/mongodb.connector")(mongoose);

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf(".") !== 0 && file !== baseName)
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose);
    const name = `${file}`;
    Object.assign(models, { [name]: model });
  });

module.exports = models;
