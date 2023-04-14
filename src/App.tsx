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
import Saved from './pages/Saved';
import PostCreator from './pages/PostCreator';
import Post from './pages/Post';
import { getUserImage, userLogin } from './api/api';

function App() {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');

  if (userEmail && userPassword) {
    userLogin({
      email: userEmail,
      password: userPassword,
    })
      .then((data:any) => {
        const userObj: IUser = {
          id: data.idUser,
          firstName: data.name,
          secondName: data.surname,
          email: data.email,
          password: data.password,
          biography: data.biography,
          phoneNumber: data.tNumber,
          subscribed: data.subscribed,
        };
        dispatch(userAuth(userObj));
        getUserImage(userObj.id)
          .then((image: any) => {
            dispatch(setUserImage(image));
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
      .post('https://localhost:7297/api/UserImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    getUserImage(userId)
      .then((image) => {
        dispatch(setUserImage(image));
      });
  };

  return (
    <div className="App">
      <NavBar isLogged={isLogged} userImageLoad={userImageLoad} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/me/save" element={<Saved />} />
        <Route path="/me/responses" element={<Saved />} />
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
              <Route path="/create-post" element={<PostCreator />} />
              <Route path="post/:postId" element={<Post />} />
              {/* <Route path="/profile" element={<Account />} /> */}
            </>

          )}
        <Route path="about" element={<OurStory />} />
      </Routes>

    </div>
  );
}

export default App;
