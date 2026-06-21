import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get('http://localhost:5000/api/trips/my-trips', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTrips(res.data.trips);
  } catch (err) {
    console.error('Failed to fetch trips:', err);
    setError('Could not connect to server. Please check your connection and try again.');
  } finally {
    setLoading(false);
  }
};

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this trip?')) return;

    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/trips/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTrips(trips.filter(t => t.id !== id));
    } catch (err) {
      alert('Failed to delete trip');
    }
  };

  const handleView = (id) => {
    navigate(`/trip/${id}`);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar alwaysSolid/>

      <div className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Trips 🧳</h1>
        <p className="text-gray-500 mb-10">Your saved travel itineraries</p>

        {loading ? (
  <div className="text-center py-20">
    <p className="text-gray-400">Loading your trips...</p>
  </div>
) : error ? (
  <div className="text-center py-20 bg-white rounded-3xl shadow-md">
    <p className="text-5xl mb-4">⚠️</p>
    <p className="text-gray-600">{error}</p>
  </div>
) : trips.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-md">
            <p className="text-6xl mb-4">🗺️</p>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No trips saved yet</h2>
            <p className="text-gray-500 mb-6">Start planning your next adventure!</p>
            <button
              onClick={() => navigate('/home')}
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
            >
              Explore Destinations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">{trip.destination}</h3>
                  <p className="text-orange-100 text-sm mt-1">{trip.days} days trip</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                      {trip.budget}
                    </span>
                    <span className="text-xs text-gray-400">
                      Saved {formatDate(trip.created_at)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(trip.id)}
                      className="flex-1 bg-orange-600 text-white py-2 rounded-xl font-medium hover:bg-orange-700 transition"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(trip.id)}
                      className="px-4 bg-red-50 text-red-500 py-2 rounded-xl font-medium hover:bg-red-100 transition"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-2xl font-bold text-white mb-2">🧳 TripIndia</p>
        <p className="mb-4">Your AI-powered travel companion across India</p>
        <p className="text-sm">© 2026 TripIndia. Made with ❤️ for India</p>
      </footer>
    </div>
  );
}

export default MyTrips;