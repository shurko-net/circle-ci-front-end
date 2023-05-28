import React, { useEffect, useState } from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import NavBar from './components/NavBar';
import styled from 'styled-components';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
// import OurStory from './pages/OurStory';
import { userAuth, setUserImage } from './store/slices/userSlice';
import { IUser } from './types';
import AccountAbout from './components/AccountButtonPanel/AccountAbout';
import AccountHome from './components/AccountButtonPanel/AccountHome';
import Saved from './pages/Saved';
import PostCreator from './pages/PostCreator';
import Post from './pages/Post';
// import NavBar from './components/NavBar';
import GlobalStyle from './globalStyles';
import NewMain from './components/NewMainDesign/NewMain';
import About from './pages/About';
import Layout from './components/Layout';
// import NewPost from './components/NewPost/NewPost';
import MainPosts from './components/Home/MainPosts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');

  if (userEmail && userPassword) {
    axios.post('https://localhost:44353/auth/Login', {
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
        axios.get(`https://localhost:44353/api/UserImage/${userObj.id}`).then((res: any) => {
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
      .post('https://localhost:44353/api/UserImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    axios.get(`https://localhost:44353/api/UserImage/${userId}`)
      .then((res) => {
        dispatch(setUserImage(res.data));
      });
  };

  return (

    <Container>
      <GlobalStyle />

      {/* <NavBar isLogged={isLogged} userImageLoad={userImageLoad} /> */}
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<NewMain />}>
            <Route path="/" element={<MainPosts />} />
          </Route>
          <Route path="account" element={<Home />} />
          <Route path="posts" element={<Home />} />
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
          {/* <Route path="about" element={<OurStory />} /> */}
        </Route>
      </Routes>
    </Container>

  );
}

export default App;
