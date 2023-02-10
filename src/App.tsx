import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import OurStory from './pages/OurStory';
import Account from './pages/Account';
import { userAuth } from './store/slices/userSlice';
import { IUser } from './types';

function App() {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');

  if (userEmail && userPassword) {
    axios.post(`https://localhost:7297/auth/Login?email=${userEmail}&password=${userPassword}`)
      .then((response) => {
        const userObj: IUser = {
          firstName: response.data.name,
          secondName: response.data.surname,
          email: response.data.email,
          password: response.data.password,
          biography: response.data.biography,
          phoneNumber: response.data.tNumber,
          subscribed: response.data.subscribed,
        };

        dispatch(userAuth(userObj));
      }).catch((err) => {
        console.log(err.response.data);
      });
  }
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
        <Route path="/profile" element={<Account />} />
      </Routes>

    </div>
  );
}

export default App;
