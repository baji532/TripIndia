import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Itinerary() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState('Mid-Range');
  const [interests, setInterests] = useState('');
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
const [saved, setSaved] = useState(false);


  const destination = name.charAt(0).toUpperCase() + name.slice(1);

  const handleSaveTrip = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login to save trips');
    return;
  }

  setSaving(true);
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/trips/save`,
      {
        destination,
        days,
        budget,
        itineraryData: itinerary
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    setSaved(true);
  } catch (err) {
    alert('Failed to save trip. Please try again.');
  } finally {
    setSaving(false);
  }
};

  const handleGenerate = async () => {
  setLoading(true);
  setError('');
  setItinerary(null);

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/itinerary/generate`, {
      destination,
      days,
      budget,
      interests
    });
    console.log('Full response:', res.data);
    console.log('Itinerary object:', res.data.itinerary);
    console.log('itinerary.itinerary type:', typeof res.data.itinerary?.itinerary);
    setItinerary(res.data.itinerary);
  } catch (err) {
    console.error('Generate error:', err);
    setError('Failed to generate itinerary. Please try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar alwaysSolid/>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 pt-24 pb-12 px-6 text-center">
        <button
          onClick={() => navigate(`/destination/${name}`)}
          className="text-white bg-white/20 px-4 py-2 rounded-full text-sm mb-4 inline-block hover:bg-white/30 transition"
        >
          ← Back to {destination}
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          AI Itinerary for {destination} 🤖
        </h1>
        <p className="text-orange-100 text-lg">
          Personalized day-by-day travel plan powered by AI
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Customize Your Trip ✈️
          </h2>

          <div className="space-y-6">
            {/* Days */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Number of Days: <span className="text-orange-600">{days} days</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 day</span>
                <span>10 days</span>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Budget Level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Budget', 'Mid-Range', 'Luxury'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`py-3 rounded-xl font-medium transition border-2 ${
                      budget === b
                        ? 'bg-orange-600 text-white border-orange-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    {b === 'Budget' ? '💰 Budget' : b === 'Mid-Range' ? '💳 Mid-Range' : '👑 Luxury'}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Interests (optional)
              </label>
              <input
                type="text"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="e.g. adventure, temples, food, nature, photography..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Generating your itinerary...
                </span>
              ) : (
                '✨ Generate AI Itinerary'
              )}
            </button>

            {error && (
              <p className="text-red-500 text-center">{error}</p>
            )}
          </div>
        </div>

        {/* Generated Itinerary */}
        {itinerary && (
          <div className="space-y-6">

            {/* Overview */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                🗺️ Trip Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">{itinerary.overview}</p>

              {/* Tips */}
              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-3">💡 Travel Tips</h3>
                <div className="space-y-2">
                  {itinerary.tips?.map((tip, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-orange-500 font-bold">•</span>
                      <p className="text-gray-600 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day by Day */}
            {Array.isArray(itinerary?.itinerary) && itinerary.itinerary.map((day, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Day Header */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 px-8 py-5">
                  <h3 className="text-2xl font-bold text-white">
                    Day {day.day} — {day.title}
                  </h3>
                  <p className="text-orange-100 mt-1">Estimated cost: {day.estimatedCost}</p>
                </div>

                <div className="p-8 space-y-6">
                  {/* Timeline */}
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

                  {/* Food */}
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

                  {/* Hotel */}
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

            {/* Save Button */}
            <div className="text-center pb-10">
              <button
  onClick={handleSaveTrip}
  disabled={saving || saved}
  className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-lg disabled:opacity-60"
>
  {saved ? '✅ Saved!' : saving ? 'Saving...' : '💾 Save This Itinerary'}
</button>
            </div>
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

export default Itinerary;