const sequelize = require('./utils/database');
const cors = require('cors');
const express = require ('express');

const app= express();
const port = process.env.PORT || 5000;

const sequelize= require('./utils/database');
const router = require('./routes/averageAge.routes');

app.use(cors());
app.use(body)

sequelize.sync({force: false}).then(
    ()=>{
        app.listen(port, () => console.log(`Listening on port ${port}`));
    }
);
