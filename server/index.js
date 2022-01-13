const sequelize = require('./utils/database');
const cors = require('cors');
const express = require ('express');

const app= express();
const port = process.env.PORT || 5000;

sequelize.sync({force: false}).then(
    ()=>{
        app.listen(port, () => console.log(`Listening on port ${port}`));
    }
);
