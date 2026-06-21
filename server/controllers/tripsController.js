const db = require('../config/db');

// Save a trip
exports.saveTrip = (req, res) => {
  const userId = req.userId;
  const { destination, days, budget, itineraryData } = req.body;

  if (!destination || !days || !itineraryData) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  db.query(
    'INSERT INTO saved_trips (user_id, destination, days, budget, itinerary_data) VALUES (?, ?, ?, ?, ?)',
    [userId, destination, days, budget, JSON.stringify(itineraryData)],
    (err, result) => {
      if (err) {
        console.error('Save trip error:', err);
        return res.status(500).json({ message: 'Failed to save trip' });
      }
      res.status(201).json({ message: 'Trip saved successfully', tripId: result.insertId });
    }
  );
};

// Get all trips for logged in user
exports.getMyTrips = (req, res) => {
  const userId = req.userId;

  db.query(
    'SELECT id, destination, days, budget, created_at FROM saved_trips WHERE user_id = ? ORDER BY created_at DESC',
    [userId],
    (err, results) => {
      if (err) {
        console.error('Get trips error:', err);
        return res.status(500).json({ message: 'Failed to fetch trips' });
      }
      res.json({ trips: results });
    }
  );
};

// Get single trip details
exports.getTripById = (req, res) => {
  const userId = req.userId;
  const { id } = req.params;

  console.log('Looking for trip id:', id, 'for user:', userId);

  db.query(
    'SELECT * FROM saved_trips WHERE id = ? AND user_id = ?',
    [id, userId],
    (err, results) => {
      if (err) {
        console.error('DB error:', err);
        return res.status(500).json({ message: 'Failed to fetch trip' });
      }
      console.log('Results found:', results.length);
      if (results.length === 0) {
        return res.status(404).json({ message: 'Trip not found' });
      }
      const trip = results[0];
      if (typeof trip.itinerary_data === 'string') {
  trip.itinerary_data = JSON.parse(trip.itinerary_data);
}
      res.json({ trip });
    }
  );
};

// Delete a trip
exports.deleteTrip = (req, res) => {
  const userId = req.userId;
  const { id } = req.params;

  db.query(
    'DELETE FROM saved_trips WHERE id = ? AND user_id = ?',
    [id, userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to delete trip' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Trip not found' });
      }
      res.json({ message: 'Trip deleted successfully' });
    }
  );
};