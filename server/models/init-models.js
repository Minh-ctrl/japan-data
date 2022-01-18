const DataTypes = require("sequelize").DataTypes;
const _average_age_prefecture = require("./average_age_prefecture");
const _population_number_prefectures = require("./population_number_prefectures");

function initModels(sequelize) {
  const average_age_prefecture = _average_age_prefecture(sequelize, DataTypes);
  const population_number_prefectures = _population_number_prefectures(
    sequelize,
    DataTypes
  );

  return {
    average_age_prefecture,
    population_number_prefectures,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
