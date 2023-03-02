import React, { useEffect, useState } from 'react';
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
import { userAuth, setUserImage } from './store/slices/userSlice';
import { IUser } from './types';
import AccountAbout from './components/AccountButtonPanel/AccountAbout';
import AccountHome from './components/AccountButtonPanel/AccountHome';

function App() {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');

  if (userEmail && userPassword) {
    axios.post('https://localhost:7297/auth/Login', {
      email: userEmail,
      password: userPassword,
    })
      .then((response) => {
        const userObj: IUser = {
          id: response.data.idUser,
          firstName: response.data.name,
          secondName: response.data.surname,
          email: response.data.email,
          password: response.data.password,
          biography: response.data.biography,
          phoneNumber: response.data.tNumber,
          subscribed: response.data.subscribed,
        };
        dispatch(userAuth(userObj));
        axios.get(`https://localhost:7297/api/Image/${userObj.id}`).then((res: any) => {
          dispatch(setUserImage(res.data));
        });
      }).catch((err) => {
        console.log(err.response.data);
      });
  }

  const {
    isLogged, subdomain, userId, userImage,
  } = useSelector((state: any) => ({
    isLogged: state.user.isLogged,
    subdomain: state.user.subdomain,
    userId: state.user.id,
    userImage: state.user.image,
  }));

  const [userImageLoad, setUserImageLoad] = useState<any>(userImage);
  useEffect(() => {
    setUserImageLoad(userImage);
  }, [userImage]);

  const onImageChange = (e: any) => {
    if (!e.target.files[0]) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setUserImageLoad(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);

    const formData = new FormData();
    formData.append('id', userId);
    formData.append('file', e.target.files[0]);
    axios
      .post('https://localhost:7297/api/Image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    axios.get(`https://localhost:7297/api/Image/${userId}`)
      .then((res) => {
        dispatch(setUserImage(res.data));
      });
  };

  return (
    <div className="App">
      <NavBar isLogged={isLogged} userImageLoad={userImageLoad} />
      <Routes>
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/saved" element={<Home />} />
        {!isLogged
          ? (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )
          : (
            <>
              <Route path={`/${subdomain}/home`} element={<AccountHome userImageLoad={userImageLoad} onImageChange={onImageChange} />} />
              <Route path={`/${subdomain}/about`} element={<AccountAbout />} />
              {/* <Route path="/profile" element={<Account />} /> */}
            </>

          )}
        <Route path="about" element={<OurStory />} />
      </Routes>

    </div>
  );
}

export default App;
