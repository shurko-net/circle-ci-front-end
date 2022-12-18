import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import OurStory from './pages/OurStory';

function App() {
  const isLogged = useSelector((state: any) => state.user.isLogged);

  return (
    <div className="App">
      <NavBar isLogged={isLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/saved" element={<Home />} />
        {!isLogged
        && (
        <>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </>
        )}
        <Route path="about" element={<OurStory />} />
      </Routes>

    </div>
  );
}

export default App;
