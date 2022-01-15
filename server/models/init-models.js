const DataTypes = require("sequelize").DataTypes;
const _average_age_both_sexes = require("./average_age_both_sexes");

function initModels(sequelize) {
  const average_age_both_sexes = _average_age_both_sexes(sequelize, DataTypes);
  return {
    average_age_both_sexes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;