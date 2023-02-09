import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import OurStory from './pages/OurStory';
import Account from './pages/Account';
import { useAuth } from './utils/hook';

function App() {
  const auth = useAuth();
  // const isLogged = useSelector((state: any) => state.authorize.isLogged);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/saved" element={<Home />} />
        {!auth
        && (
        <>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </>
        )}
        <Route path="about" element={<OurStory />} />
        <Route path="/profile" element={<Account />} />
      </Routes>

    </div>
  );
}

export default App;
