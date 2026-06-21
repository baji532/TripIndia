import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const popularDestinations = [
  { name: 'Munnar', state: 'Kerala', emoji: '🌿', bg: 'from-green-400 to-green-700' },
  { name: 'Jaipur', state: 'Rajasthan', emoji: '🏰', bg: 'from-pink-400 to-red-600' },
  { name: 'Goa', state: 'Goa', emoji: '🏖️', bg: 'from-blue-400 to-cyan-600' },
  { name: 'Varanasi', state: 'Uttar Pradesh', emoji: '🪔', bg: 'from-orange-400 to-yellow-600' },
  { name: 'Ladakh', state: 'J&K', emoji: '🏔️', bg: 'from-indigo-400 to-blue-700' },
  { name: 'Coorg', state: 'Karnataka', emoji: '☕', bg: 'from-amber-500 to-green-600' },
  { name: 'Rishikesh', state: 'Uttarakhand', emoji: '🕉️', bg: 'from-teal-400 to-cyan-700' },
  { name: 'Mysore', state: 'Karnataka', emoji: '🏯', bg: 'from-purple-400 to-indigo-600' },
  { name: 'Andaman', state: 'Islands', emoji: '🌊', bg: 'from-cyan-400 to-blue-600' },
];

const categories = [
  { icon: '🏔️', label: 'Mountains' },
  { icon: '🏖️', label: 'Beaches' },
  { icon: '🏰', label: 'Heritage' },
  { icon: '🌿', label: 'Nature' },
  { icon: '🕌', label: 'Spiritual' },
  { icon: '🏙️', label: 'Cities' },
  { icon: '🌊', label: 'Islands' },
  { icon: '☕', label: 'Hill Stations' },
];

function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/destination/${search.trim().toLowerCase()}`);
    }
  };

  const handleDestinationClick = (name) => {
    navigate(`/destination/${name.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      {/* Hero Search Section */}
      <div
        className="relative pt-32 pb-20 px-6"
        style={{
          backgroundImage: `url('https://www.holidaymonk.com/wp-content/uploads/2025/06/India-Travel-Guide.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hello, {user?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-gray-200 text-xl mb-10">
            Where are you heading next?
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch}>
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-full px-4 py-3 shadow-2xl max-w-2xl mx-auto">
              <span className="text-2xl">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search any destination in India..."
                className="flex-1 outline-none text-gray-700 text-base bg-transparent w-full"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition font-semibold whitespace-nowrap w-full sm:w-auto"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="text-xs font-medium text-gray-600">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Popular Destinations</h2>
          <button
  onClick={() => navigate('/explore')}
  className="text-orange-600 font-medium hover:underline"
>
  View all →
</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map((dest, i) => (
            <div
              key={i}
              onClick={() => handleDestinationClick(dest.name)}
              className={`bg-gradient-to-br ${dest.bg} rounded-2xl p-7 text-white cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              <div className="text-5xl mb-3">{dest.emoji}</div>
              <h3 className="text-2xl font-bold">{dest.name}</h3>
              <p className="text-sm opacity-80 mb-3">{dest.state}</p>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-sm px-4 py-2 rounded-full transition">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-2xl font-bold text-white mb-2">🧳 TripIndia</p>
        <p className="mb-4">Your AI-powered travel companion across India</p>
        <p className="text-sm">© 2026 TripIndia. Made with ❤️ for India</p>
      </footer>
    </div>
  );
}

export default Home;