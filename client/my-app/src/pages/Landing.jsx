import {Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const popularDestinations = [
  { name: 'Munnar', state: 'Kerala', emoji: '🌿', desc: 'Tea gardens & misty hills', bg: 'from-green-400 to-green-700' },
  { name: 'Jaipur', state: 'Rajasthan', emoji: '🏰', desc: 'Pink city & royal palaces', bg: 'from-pink-400 to-red-600' },
  { name: 'Goa', state: 'Goa', emoji: '🏖️', desc: 'Beaches & vibrant nightlife', bg: 'from-blue-400 to-cyan-600' },
  { name: 'Varanasi', state: 'Uttar Pradesh', emoji: '🪔', desc: 'Spiritual heart of India', bg: 'from-orange-400 to-yellow-600' },
  { name: 'Ladakh', state: 'J&K', emoji: '🏔️', desc: 'Mountains & monasteries', bg: 'from-indigo-400 to-blue-700' },
  { name: 'Coorg', state: 'Karnataka', emoji: '☕', desc: 'Coffee trails & waterfalls', bg: 'from-amber-500 to-green-600' },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-55" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-lg mb-3 tracking-widest uppercase">
            Your AI Travel Companion
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Explore the Soul<br />of <span className="text-orange-400">India</span>
          </h1>
          <p className="text-gray-200 text-xl mb-10 max-w-2xl mx-auto">
            Discover famous places, local transport, hotels, food and get a personalized AI itinerary — all in one place.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-full px-4 py-3 shadow-2xl max-w-2xl mx-auto">
            <span className="text-2xl">📍</span>
            <input
              type="text"
              placeholder="Where do you want to go? (e.g. Munnar, Goa, Jaipur...)"
              className="flex-1 outline-none text-gray-700 text-base bg-transparent w-full"
            />
            <button
              onClick={() => navigate('/home')}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition font-semibold whitespace-nowrap w-full sm:w-auto"
            >
              Explore Now
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce text-3xl">
          ↓
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-orange-600 text-white py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            { value: '500+', label: 'Destinations' },
            { value: '28', label: 'States Covered' },
            { value: 'AI', label: 'Itinerary Planner' },
            { value: '100%', label: 'Free to Use' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-orange-100 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold uppercase tracking-widest mb-2">Discover India</p>
          <h2 className="text-4xl font-bold text-gray-800">Popular Destinations</h2>
          <p className="text-gray-500 mt-3 text-lg">Hand-picked places loved by millions of travelers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((dest, i) => (
            <div
              key={i}
              onClick={() => navigate('/home')}
              className={`bg-gradient-to-br ${dest.bg} rounded-2xl p-8 text-white cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              <div className="text-5xl mb-4">{dest.emoji}</div>
              <h3 className="text-2xl font-bold">{dest.name}</h3>
              <p className="text-sm opacity-80 mb-1">{dest.state}</p>
              <p className="text-base opacity-90 mt-2">{dest.desc}</p>
              <button className="mt-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-sm px-4 py-2 rounded-full transition">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold uppercase tracking-widest mb-2">Why TripIndia?</p>
            <h2 className="text-4xl font-bold text-gray-800">Everything You Need</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: '🤖', title: 'AI Itinerary', desc: 'Get a personalized day-by-day travel plan generated by AI based on your budget and duration.' },
              { icon: '🗺️', title: 'Interactive Maps', desc: 'See all famous spots, hotels and restaurants pinned on a live map for easy navigation.' },
              { icon: '🚌', title: 'Transport Guide', desc: 'Know exactly how to reach your destination and get around locally — bus, train, auto and more.' },
              { icon: '🏨', title: 'Hotels & Food', desc: 'Curated budget to luxury stays and must-try local dishes for every destination.' },
              { icon: '📅', title: 'Save Your Trips', desc: 'Plan ahead and save multiple trips to revisit and share with friends and family.' },
              { icon: '🆓', title: 'Completely Free', desc: 'No hidden charges. TripIndia is free for every traveler across India.' },
            ].map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:shadow-lg transition">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-24 text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Explore India?
          </h2>
          <p className="text-gray-200 text-xl mb-8">Join thousands of travelers planning smarter trips</p>
          <button
            onClick={() => navigate('/register')}
            className="bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition shadow-xl"
          >
            Start Planning Free 🚀
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-2xl font-bold text-white mb-2">🧳 TripIndia</p>
        <p className="mb-4">Your AI-powered travel companion across India</p>
        <div className="flex justify-center gap-6 text-sm mb-6">
          <a href="/" className="hover:text-orange-400 transition">About</a>
          <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
          <Link to="/privacy" className="hover:text-orange-400 transition">Privacy</Link>
        </div>
        <p className="text-sm">© 2026 TripIndia. Made with ❤️ for India</p>
      </footer>
    </div>
  );
}

export default Landing;