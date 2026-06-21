
const express = require('express');
const cors = require('cors');
const tripsRoutes = require('./routes/trips');
const contactRoutes = require('./routes/contact');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const itineraryRoutes = require('./routes/itinerary');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRoutes);


app.use('/api/auth', authRoutes);
app.use('/api/itinerary', itineraryRoutes);
app.use('/api/trips', tripsRoutes);

app.get('/', (req, res) => {
  res.send('TripIndia API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});