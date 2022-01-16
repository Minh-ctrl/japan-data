var DataTypes = require("sequelize").DataTypes;
var _average_age_both_sexes = require("./average_age_both_sexes");
var _population_number_prefectures = require("./population_number_prefectures");

function initModels(sequelize) {
  var average_age_both_sexes = _average_age_both_sexes(sequelize, DataTypes);
  var population_number_prefectures = _population_number_prefectures(sequelize, DataTypes);
  return {
    average_age_both_sexes,
    population_number_prefectures,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
