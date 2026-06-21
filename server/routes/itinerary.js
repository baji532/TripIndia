const express = require('express');
const router = express.Router();
const { generateItinerary, planJourney } = require('../controllers/itineraryController');

router.post('/generate', generateItinerary);
router.post('/journey', planJourney);

module.exports = router;