const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("laiminh", "laiminh", "", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;
