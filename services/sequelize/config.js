const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports.development = {
  dialect: "mysql",
  seederStorage: "sequelize",
  url: process.env.DB_URL,
};

module.exports.production = {
  dialect: "mysql",
  url: process.env.DB_URL,
};
