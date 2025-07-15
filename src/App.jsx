import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Attractions from './pages/Attractions';
import Gallery from './pages/Gallery';
import Visit from './pages/Visit';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <nav className="p-4 text-center text-lg bg-gray-900 border-b border-red-600">
          <Link to="/" className="px-4 text-red-400 hover:text-red-600">Home</Link>
          <Link to="/attractions" className="px-4 text-red-400 hover:text-red-600">Attractions</Link>
          <Link to="/gallery" className="px-4 text-red-400 hover:text-red-600">Gallery</Link>
          <Link to="/visit" className="px-4 text-red-400 hover:text-red-600">Visit</Link>
          <Link to="/contact" className="px-4 text-red-400 hover:text-red-600">Contact</Link>
          <Link to="/about" className="px-4 text-red-400 hover:text-red-600">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

// Temporary home component
function Home() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-5xl text-red-500">Welcome to the Haunted Farm</h1>
    </div>
  );
}

export default App;