// const { DataTypes } = require('sequelize/dist');
const initmodels= require('../models/init-models');
// const {Sequelize} = require('sequelize');
const sequelize = require('../utils/database');
// const average_age_both_sexes= require('../models/average_age_both_sexes')(sequelize, DataTypes);
let models = initmodels(sequelize);
exports.fetchAgeData= async(req,res)=>{
    let age = await models.average_age_both_sexes.findAll({
        attributes: 
        ['year1920', 'year1930', 'year1940', 'year1950', 'year1955', 'year1960', 'year1965', 'year1970',
        'year1975', 'year1980', 'year1985', 'year1990', 'year1995', 'year2000', 'year2005', 'year2010']
    });
    let ageName= await models.average_age_both_sexes.findAll({
        attributes: ['japanesename', 'englishname'],
    })

    let population= await models.population_number_prefectures.findAll()
    let db = {Age: {age, ageName}, Population: population}
    res.json(db);
};
