import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Added imports
import Home from './pages/Home.jsx';
import Notes from './pages/Notes.jsx';
import Things from './pages/Things.jsx';
import Photos from './pages/Photos.jsx';
import './App.css';

function App() {

  return (
    <Router>
      <nav>
        <ul>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} /> {/* Add the route for Notes */}
        <Route path="/things" element={<Things />} /> {/* Add the route for Notes */}
        <Route path="/photos" element={<Photos />} /> {/* Add the route for Notes */}
      </Routes>
    </Router>
  );
}

export default App;
