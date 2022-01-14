const express = require('express');
const router = express.Router();
const fetchData = require('../controllers/ageAverage.controller');

router.get('/fetch-averageAge', fetchData.fetchAgeData);

module.exports = router; 