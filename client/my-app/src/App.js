import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Itinerary from './pages/Itinerary';
import ProtectedRoute from './components/ProtectedRoute';
import Journey from './pages/Journey';
import MyTrips from './pages/MyTrips';
import TripDetail from './pages/TripDetail';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/destination/:name"
          element={
            <ProtectedRoute>
              <Destination />
            </ProtectedRoute>
          }
        />
        <Route
          path="/itinerary/:name"
          element={
            <ProtectedRoute>
              <Itinerary />
            </ProtectedRoute>
          }
        />
        <Route
  path="/journey/:destination"
  element={
    <ProtectedRoute>
      <Journey />
    </ProtectedRoute>
  }
/>
  <Route
  path="/my-trips"
  element={
    <ProtectedRoute>
      <MyTrips />
    </ProtectedRoute>
  }
/>
<Route
  path="/trip/:id"
  element={
    <ProtectedRoute>
      <TripDetail />
    </ProtectedRoute>
  }
/>  
<Route
  path="/explore"
  element={
    <ProtectedRoute>
      <Explore />
    </ProtectedRoute>}/>
    <Route path="/contact" element={<Contact />} />
<Route path="/privacy" element={<Privacy />} />

      </Routes>
    </Router>
  );
}

export default App;