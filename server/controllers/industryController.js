const initmodels = require("../models/init-models");
const sequelize = require("../utils/database");
let models = initmodels(sequelize);
exports.fetchIndustryData = async (req, res) => {
    let industry = await models.industry_employment_population.findAll();
    let db= {industry};
    res.json(db);
}
