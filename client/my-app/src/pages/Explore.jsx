import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import destinations from '../data/destinations';

function Explore() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const allDestinations = Object.keys(destinations).map((key) => ({
    key,
    ...destinations[key]
  }));

  const filtered = allDestinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar alwaysSolid />

      <div className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Explore All Destinations 🗺️</h1>
        <p className="text-gray-500 mb-8">{allDestinations.length} amazing places across India waiting for you</p>

        {/* Search */}
        <div className="mb-10 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by destination or state..."
            className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          />
        </div>

        {/* (map removed) */}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-500">No destinations found for "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest) => (
              <div
                key={dest.key}
                onClick={() => navigate(`/destination/${dest.key}`)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-44 object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80'; }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">{dest.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{dest.state}</p>
                  <p className="text-orange-600 text-sm font-medium mt-3">Explore →</p>
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

export default Explore;