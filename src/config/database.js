const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "survey_application",
  "postgres",
  "HuuHoang123",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
