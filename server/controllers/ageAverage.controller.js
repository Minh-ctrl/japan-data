// const { DataTypes } = require('sequelize/dist');
const initmodels= require('../models/init-models');
// const {Sequelize} = require('sequelize');
const sequelize = require('../utils/database');
// const average_age_both_sexes= require('../models/average_age_both_sexes')(sequelize, DataTypes);
let models = initmodels(sequelize);
exports.fetchAgeData= async(req,res)=>{
    let data = await models.average_age_both_sexes.findAll()
    res.json(data);
};