import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/saved" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
