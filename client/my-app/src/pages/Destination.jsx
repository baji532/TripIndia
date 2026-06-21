import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import destinations from '../data/destinations';


const getDestinationData = (name) => {
  const key = name.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
  if (destinations[key]) return destinations[key];

  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    state: 'India',
    description: `${name.charAt(0).toUpperCase() + name.slice(1)} is a beautiful destination in India with rich culture, stunning landscapes and warm hospitality waiting to be explored.`,
    bestTime: 'October to March',
    temperature: '15°C - 30°C',
    language: 'Hindi',
    currency: 'INR',
    image: `https://source.unsplash.com/1600x900/?${name},india,travel`,
    places: [
      { name: 'City Center', desc: 'Main hub with local culture and markets', emoji: '🏙️', img: `https://source.unsplash.com/400x300/?${name},city` },
      { name: 'Local Market', desc: 'Experience authentic local shopping and culture', emoji: '🛍️', img: 'https://source.unsplash.com/400x300/?market,india' },
      { name: 'Nature Park', desc: 'Beautiful natural surroundings to explore', emoji: '🌿', img: 'https://source.unsplash.com/400x300/?nature,park,india' },
    ],
    hotels: [
      { name: 'Luxury Hotel', type: 'Luxury', price: '₹8,000/night', rating: '⭐ 4.7', img: 'https://source.unsplash.com/400x300/?luxury,hotel' },
      { name: 'Mid Range Hotel', type: 'Mid Range', price: '₹3,000/night', rating: '⭐ 4.3', img: 'https://source.unsplash.com/400x300/?hotel' },
      { name: 'Budget Stay', type: 'Budget', price: '₹800/night', rating: '⭐ 4.0', img: 'https://source.unsplash.com/400x300/?hostel' },
    ],
    food: [
      { name: 'Local Thali', desc: 'Traditional regional meal with variety of dishes', emoji: '🍛' },
      { name: 'Street Food', desc: 'Popular local street snacks and drinks', emoji: '🥘' },
      { name: 'Regional Sweets', desc: 'Traditional local desserts and sweets', emoji: '🍮' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Check nearest airport', time: 'Varies by origin city' },
        { mode: '🚂 Train', detail: 'Check nearest railway station', time: 'Varies by origin city' },
        { mode: '🚌 Bus', detail: 'State bus services available', time: 'Varies by origin city' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Available at city center' },
        { mode: '🛺 Auto', detail: 'Affordable for short distances' },
        { mode: '🚌 Local Bus', detail: 'Budget option for getting around' },
      ]
    }
  };
};

const tabs = ['Places', 'Hotels', 'Food', 'Transport'];

function Destination() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Places');
  const dest = getDestinationData(name);

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      {/* Hero */}
      <div
        className="relative flex items-end"
        style={{
          backgroundImage: `url('${dest.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '450px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 p-8 w-full max-w-7xl mx-auto">
          <button onClick={() => navigate('/home')} className="text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm mb-4 inline-block transition">
            ← Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-bold text-white">{dest.name}</h1>
          <p className="text-orange-300 text-xl mt-1">{dest.state}, India</p>
        </div>
      </div>

      {/* Quick Info */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: '🌤️', label: 'Best Time', value: dest.bestTime },
            { icon: '🌡️', label: 'Temperature', value: dest.temperature },
            { icon: '🗣️', label: 'Language', value: dest.language },
            { icon: '💰', label: 'Currency', value: dest.currency },
          ].map((info, i) => (
            <div key={i}>
              <p className="text-2xl">{info.icon}</p>
              <p className="text-xs text-gray-500 mt-1">{info.label}</p>
              <p className="font-semibold text-gray-800 text-sm">{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{dest.description}</p>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-2 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold text-sm transition border-b-2 ${
                activeTab === tab ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Places */}
        {activeTab === 'Places' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {dest.places.map((place, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img
  src={place.img}
  alt={place.name}
  className="w-full h-48 object-cover"
  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80'; }}
/>
                <div className="p-5">
                  <div className="text-3xl mb-2">{place.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-800">{place.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hotels */}
        {activeTab === 'Hotels' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {dest.hotels.map((hotel, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
  src={hotel.img}
  alt={hotel.name}
  className="w-full h-48 object-cover"
  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80'; }}
/>
                <div className="p-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${hotel.type === 'Luxury' ? 'bg-yellow-100 text-yellow-700' : hotel.type === 'Mid Range' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {hotel.type}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mt-3">{hotel.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-orange-600 font-bold">{hotel.price}</p>
                    <p className="text-sm">{hotel.rating}</p>
                  </div>
                  <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition font-medium">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Food */}
        {activeTab === 'Food' && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
    {dest.food.map((item, i) => (
      <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <img
  src={item.img}
  alt={item.name}
  className="w-full h-40 object-cover"
  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80'; }}
/>
        <div className="p-5 flex gap-4 items-start">
          <span className="text-4xl">{item.emoji}</span>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

        {/* Transport */}
        {activeTab === 'Transport' && (
          <div className="pb-12 space-y-8">
              {/* Journey Planner Button */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-2">
        🗺️ Plan Your Journey to {dest.name}
      </h3>
      <p className="text-blue-100 mb-6">
        Enter your city and get a complete step-by-step travel guide
      </p>
      <button
        onClick={() => navigate(`/journey/${name}`)}
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition"
      >
        Plan My Journey 🚀
      </button>
    </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">🚀 How to Reach {dest.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dest.transport.reach.map((t, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-md">
                    <p className="text-2xl mb-2">{t.mode}</p>
                    <p className="text-gray-700 font-medium">{t.detail}</p>
                    <p className="text-orange-600 text-sm mt-2">⏱ {t.time}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">🗺️ Getting Around {dest.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dest.transport.local.map((t, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-md flex gap-4 items-center">
                    <span className="text-3xl">{t.mode.split(' ')[0]}</span>
                    <div>
                      <p className="font-semibold text-gray-800">{t.mode.split(' ').slice(1).join(' ')}</p>
                      <p className="text-gray-500 text-sm">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-3">Want a Personalized Itinerary? 🤖</h2>
        <p className="text-orange-100 text-lg mb-8">Let AI plan your perfect {dest.name} trip day by day</p>
        <button onClick={() => navigate(`/itinerary/${name}`)} className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transition">
          Generate AI Itinerary ✨
        </button>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-2xl font-bold text-white mb-2">🧳 TripIndia</p>
        <p className="mb-4">Your AI-powered travel companion across India</p>
        <p className="text-sm">© 2026 TripIndia. Made with ❤️ for India</p>
      </footer>
    </div>
  );
}

export default Destination;