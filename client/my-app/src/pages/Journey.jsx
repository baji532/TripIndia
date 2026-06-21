import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Journey() {
  const { destination } = useParams();
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState('');
  const [detecting, setDetecting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [journey, setJourney] = useState(null);
  const [error, setError] = useState('');

  const destName = destination.charAt(0).toUpperCase() + destination.slice(1);

  // Auto detect location
  const handleDetectLocation = () => {
    setDetecting(true);
    if (!navigator.geolocation) {
      setError('Geolocation not supported by your browser');
      setDetecting(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const city = data.address.city ||
                       data.address.town ||
                       data.address.village ||
                       data.address.county ||
                       'Unknown location';
          setFromCity(city);
        } catch (err) {
          setError('Could not detect location. Please enter manually.');
        } finally {
          setDetecting(false);
        }
      },
      (err) => {
        setError('Location access denied. Please enter your city manually.');
        setDetecting(false);
      }
    );
  };

  const handlePlanJourney = async () => {
    if (!fromCity.trim()) {
      setError('Please enter your city first');
      return;
    }

    setLoading(true);
    setError('');
    setJourney(null);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/itinerary/journey`, {
        fromCity: fromCity.trim(),
        toCity: destName
      });
      setJourney(res.data.journey);
    } catch (err) {
      setError('Failed to plan journey. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 pt-24 pb-12 px-6 text-center">
        <button
          onClick={() => navigate(`/destination/${destination}`)}
          className="text-white bg-white/20 px-4 py-2 rounded-full text-sm mb-4 inline-block hover:bg-white/30 transition"
        >
          ← Back to {destName}
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Journey Planner 🗺️
        </h1>
        <p className="text-blue-100 text-lg">
          Step by step guide to reach {destName}
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          {/* From - To Visual */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 bg-blue-50 rounded-2xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">FROM</p>
              <p className="font-bold text-blue-600 text-lg">
                {fromCity || 'Your City'}
              </p>
            </div>
            <div className="text-3xl">✈️</div>
            <div className="flex-1 bg-orange-50 rounded-2xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">TO</p>
              <p className="font-bold text-orange-600 text-lg">{destName}</p>
            </div>
          </div>

          {/* City Input */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Current City
              </label>
              <input
                type="text"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                placeholder="e.g. Guduru, Hyderabad, Chennai..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
            </div>

            {/* Auto Detect Button */}
            <button
              onClick={handleDetectLocation}
              disabled={detecting}
              className="w-full border-2 border-blue-400 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              {detecting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Detecting location...
                </>
              ) : (
                <>📍 Auto-detect My Location</>
              )}
            </button>

            {/* Plan Button */}
            <button
              onClick={handlePlanJourney}
              disabled={loading || !fromCity.trim()}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Planning your journey...
                </span>
              ) : (
                '🚀 Plan My Journey'
              )}
            </button>

            {error && (
              <p className="text-red-500 text-center text-sm">{error}</p>
            )}
          </div>
        </div>

        {/* Journey Result */}
        {journey && (
          <div className="space-y-6">

            {/* Overview */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                🗺️ Journey Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {journey.overview}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl mb-1">⏱️</p>
                  <p className="text-xs text-gray-500">Total Time</p>
                  <p className="font-bold text-blue-600">{journey.totalTime}</p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl mb-1">💰</p>
                  <p className="text-xs text-gray-500">Est. Cost</p>
                  <p className="font-bold text-orange-600">{journey.estimatedCost}</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl mb-1">📍</p>
                  <p className="text-xs text-gray-500">Distance</p>
                  <p className="font-bold text-green-600">{journey.distance}</p>
                </div>
              </div>
            </div>

            {/* Best Route */}
            {journey.bestRoute && (
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  ⭐ Recommended Route
                </h2>
                <div className="space-y-4">
                  {journey.bestRoute.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {i + 1}
                        </div>
                        {i < journey.bestRoute.length - 1 && (
                          <div className="w-0.5 h-8 bg-blue-200 mt-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-bold text-gray-800">{step.action}</p>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{step.details}</p>
                        {step.cost && (
                          <p className="text-orange-600 text-sm font-medium mt-1">
                            Cost: {step.cost}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Transport Options */}
            {journey.transportOptions && (
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  🚌 All Transport Options
                </h2>
                <div className="space-y-4">
                  {journey.transportOptions.map((option, i) => (
                    <div key={i} className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{option.icon}</span>
                          <p className="font-bold text-gray-800">{option.mode}</p>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          i === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {i === 0 ? '⭐ Best' : `Option ${i + 1}`}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <div>
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="font-semibold text-gray-700 text-sm">{option.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Cost</p>
                          <p className="font-semibold text-orange-600 text-sm">{option.cost}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Availability</p>
                          <p className="font-semibold text-gray-700 text-sm">{option.availability}</p>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mt-3">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Travel Tips */}
            {journey.tips && (
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  💡 Journey Tips
                </h2>
                <div className="space-y-3">
                  {journey.tips.map((tip, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-orange-500 font-bold mt-0.5">•</span>
                      <p className="text-gray-600">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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

export default Journey;