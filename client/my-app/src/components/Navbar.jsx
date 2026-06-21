import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const alwaysSolid = true;
  const [scrolled, setScrolled] = useState(alwaysSolid);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
  if (alwaysSolid) return;
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [alwaysSolid]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className={`text-2xl font-bold tracking-wide ${
          scrolled ? 'text-orange-600' : 'text-white'
        }`}>
          🧳 TripIndia
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-medium hover:text-orange-400 transition ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}>Home</Link>
          <Link to="/explore" className={`font-medium hover:text-orange-400 transition ${
  scrolled ? 'text-gray-700' : 'text-white'
}`}>Explore</Link>
          {user && (
  <Link to="/my-trips" className={`font-medium hover:text-orange-400 transition ${
    scrolled ? 'text-gray-700' : 'text-white'
  }`}>My Trips</Link>
  
)}

          {user ? (
            <>
              <span className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Hi, {user.name} 👋
              </span>
              <button
                onClick={handleLogout}
                className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={`font-medium hover:text-orange-400 transition ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>Login</Link>
              <Link to="/register"
                className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition font-medium"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
    <Link to="/" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to="/home" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Explore</Link>
    {user && (
      <Link to="/my-trips" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>My Trips</Link>
    )}
    {user ? (
      <>
        <p className="text-gray-700 font-medium border-t pt-4">Hi, {user.name} 👋</p>
        <button
          onClick={() => { handleLogout(); setMenuOpen(false); }}
          className="bg-orange-600 text-white px-5 py-2 rounded-full"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link to="/login" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/register" className="bg-orange-600 text-white px-5 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>Get Started</Link>
      </>
    )}
  </div>
)}
    </nav>
  );
}

export default Navbar;