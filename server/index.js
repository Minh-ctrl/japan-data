const sequelize = require("./utils/database");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const middlewareFilter = require("./middleware/response.filter");

const app = express();
const port = process.env.PORT || 5000;

const router = require("./routes/averageAge.routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(middlewareFilter);
app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
