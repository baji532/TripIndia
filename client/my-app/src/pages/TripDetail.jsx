import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function TripDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrip();
  }, [id]);

  const fetchTrip = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`http://localhost:5000/api/trips/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTrip(res.data.trip);
    } catch (err) {
      console.error('Failed to fetch trip:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-orange-50">
        <Navbar />
        <div className="pt-32 text-center text-gray-400">Loading trip...</div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen bg-orange-50">
        <Navbar />
        <div className="pt-32 text-center text-gray-400">Trip not found</div>
      </div>
    );
  }

  const itinerary = trip.itinerary_data;

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar alwaysSolid/>

      <div className="bg-gradient-to-r from-orange-600 to-orange-400 pt-24 pb-12 px-6 text-center">
        <button
          onClick={() => navigate('/my-trips')}
          className="text-white bg-white/20 px-4 py-2 rounded-full text-sm mb-4 inline-block hover:bg-white/30 transition"
        >
          ← Back to My Trips
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {trip.destination} Trip
        </h1>
        <p className="text-orange-100 text-lg">
          {trip.days} days • {trip.budget}
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">🗺️ Trip Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{itinerary.overview}</p>

          {itinerary.tips && (
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 mb-3">💡 Travel Tips</h3>
              <div className="space-y-2">
                {itinerary.tips.map((tip, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-orange-500 font-bold">•</span>
                    <p className="text-gray-600 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {itinerary.itinerary?.map((day, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-400 px-8 py-5">
              <h3 className="text-2xl font-bold text-white">
                Day {day.day} — {day.title}
              </h3>
              <p className="text-orange-100 mt-1">Estimated cost: {day.estimatedCost}</p>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-4">
                {[
                  { time: '🌅 Morning', data: day.morning },
                  { time: '☀️ Afternoon', data: day.afternoon },
                  { time: '🌆 Evening', data: day.evening },
                ].map((slot, j) => (
                  slot.data && (
                    <div key={j} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-lg">
                          {slot.time.split(' ')[0]}
                        </div>
                        {j < 2 && <div className="w-0.5 h-full bg-orange-200 mt-1" />}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-bold text-gray-800">{slot.data.activity}</p>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                            {slot.data.duration}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{slot.data.description}</p>
                        <p className="text-orange-600 text-sm font-medium mt-1">Cost: {slot.data.cost}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {day.food && (
                <div className="bg-orange-50 rounded-2xl p-5">
                  <h4 className="font-bold text-gray-800 mb-3">🍽️ Food Recommendations</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>🌅 <strong>Breakfast:</strong> {day.food.breakfast}</p>
                    <p>☀️ <strong>Lunch:</strong> {day.food.lunch}</p>
                    <p>🌆 <strong>Dinner:</strong> {day.food.dinner}</p>
                  </div>
                </div>
              )}

              {day.hotel && (
                <div className="flex items-center gap-3 bg-blue-50 rounded-2xl p-4">
                  <span className="text-2xl">🏨</span>
                  <div>
                    <p className="text-xs text-gray-500">Stay tonight at</p>
                    <p className="font-semibold text-gray-800">{day.hotel}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-2xl font-bold text-white mb-2">🧳 TripIndia</p>
        <p className="mb-4">Your AI-powered travel companion across India</p>
        <p className="text-sm">© 2026 TripIndia. Made with ❤️ for India</p>
      </footer>
    </div>
  );
}

export default TripDetail;