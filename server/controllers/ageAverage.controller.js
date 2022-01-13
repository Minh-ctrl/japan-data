// const { DataTypes } = require('sequelize/dist');
const initmodels= require('../models/init-models');
// const {Sequelize} = require('sequelize');
const sequelize = require('../utils/database');
// const average_age_both_sexes= require('../models/average_age_both_sexes')(sequelize, DataTypes);
let models = initmodels(sequelize);
exports.fetchData= async(req,res)=>{
    let data = await models.average_age_both_sexes.findAll();
    // res.json(data);
}

const testData= async (req,res) => {
    try{
        let data = await models.average_age_both_sexes.findAll();
        return data;
    }
    catch (err){
        console.log(err);
    }
};
testData();
