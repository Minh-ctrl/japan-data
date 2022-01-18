// const { DataTypes } = require('sequelize/dist');
const _ = require("underscore");
const initmodels = require("../models/init-models");
// const {Sequelize} = require('sequelize');
const sequelize = require("../utils/database");
// const average_age_both_sexes= require('../models/average_age_both_sexes')(sequelize, DataTypes);
let models = initmodels(sequelize);
exports.fetchAgeData = async (req, res) => {
  let age = await models.average_age_prefecture.findAll();
  const ageGrouped = _.groupBy(age, (prefecture) => prefecture.english_name);
  let obj;
  let ageData = [];
  for (const property in ageGrouped) {
    let newObj = {};
    for (let i = 0; i < ageGrouped[property].length; i++) {
      newObj[ageGrouped[property][i].year] =
        ageGrouped[property][i].avg_population;
    }
    obj = {
      description: {
        english_name: ageGrouped[property][0].english_name,
        japanese_name: ageGrouped[property][0].japanese_name,
      },
      data: newObj,
    };
    ageData.push(obj);
  }
  let population = await models.population_number_prefectures.findAll();
  let db = { ageData, population };
  res.json(db);
};
