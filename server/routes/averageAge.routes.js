const express = require('express');
const router = express.Router();
const fetchData = require('../controllers/controller');

router.get('/fetch-population', fetchData.fetchAgeData);
module.exports = router; 