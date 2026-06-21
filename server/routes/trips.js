const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const { saveTrip, getMyTrips, getTripById, deleteTrip } = require('../controllers/tripsController');

router.post('/save', verifyToken, saveTrip);
router.get('/my-trips', verifyToken, getMyTrips);
router.get('/:id', verifyToken, getTripById);
router.delete('/:id', verifyToken, deleteTrip);

module.exports = router;