import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hook';
import { checkAuth } from './store/slices/authSlice';
import NewMain from './components/NewMainDesign/NewMain';
import MainPosts from './components/Home/MainPosts';
import NewProfile from './components/NewProfile/NewProfile';
import Layout from './components/Layout';
import NewPostCreator from './pages/NewPostCreator';
import NewAuthwall from './pages/NewAuthwall';
import {
  setUser,
} from './store/slices/userSlice';
import Preloader from './preloader';
import instance, { BASE_URL } from './http';
import Post from './pages/Post';
import LoginMain from './components/NewLogin/LoginMain';
import RegisterMain from './components/NewRegister/RegisterMain';
import ScrollToTop from './components/ScrollToTop';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const BoxStyle = {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '9999',
  top: '0',
  left: '0',
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
};

function App() {
  const [areImagesLoaded, setAreImagesLoaded] = React.useState(false);

<<<<<<< HEAD
  const dispatch = useAppDispatch();
  const {
    isLoading, isAuth, user, profileImageUrl,
  } = useAppSelector((state: any) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    backgroundImage: state.auth.isLoading,
    profileImageUrl: state.auth.profileImageUrl,
  }));
  const {
    userImage, userId, backgroundImage,
  } = useAppSelector(
    (state: any) => ({
      userImage: state.user.image,
      userId: state.user.id,
      backgroundImage: state.user.backgroundImage,
    }),
  );

  const [selectedImage, setSelectedImage] = React.useState(userImage);
  const [selectedBackgroundImage, setSelectedBackgroundImage] = React.useState(backgroundImage);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  useEffect(() => {
    const images = [selectedImage, selectedBackgroundImage];
    let loadedCount = 0;
    images.forEach((image) => {
      if (image === '') {
        loadedCount += 1;
      } else {
        const img = new Image();
        img.onloadeddata = () => {
          loadedCount += 1;
=======
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
>>>>>>> master
        };
        img.src = image;
      }
    });
    if (loadedCount === images.length) {
      setAreImagesLoaded(true);
    }
  }, [selectedImage, selectedBackgroundImage]);

  useEffect(() => {
    if (isAuth && user) {
      dispatch(
        setUser({
          id: user.id,
          firstName: user.name,
          secondName: user.surname,
          password: user.passwordHash,
          email: user.email,
          biography: user.biography,
          phoneNumber: user.tNumber,
          followers: user.followers,
        }),
      );
    }
  }, [isAuth, user]);

  useEffect(() => {
    instance
      .get(`${BASE_URL}/get-user-image`)
      .then((res) => {
        setSelectedImage(res.data);
      });

    instance
      .get(`${BASE_URL}/get-user-backimage`)
      .then((res) => {
        setSelectedBackgroundImage(res.data);
      });
  }, []);

  if (isLoading || !areImagesLoaded) {
    return <Preloader boxStyle={BoxStyle} />;
  }

  if (isAuth) {
    // Loader Auth
    return (
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={(
                <NewMain
                  // isLoadingPage={isLoadingPage}
                  selectedImage={selectedImage}
                />
              )}
            >
              <Route path="/" element={<MainPosts />} />

              <Route
                path="profile"
                element={(
                  <NewProfile
                    selectedImage={selectedImage}
                    userId={userId}
                    setSelectedImage={setSelectedImage}
                    selectedBackgroundImage={selectedBackgroundImage}
                    setSelectedBackgroundImage={setSelectedBackgroundImage}
                  />
                )}
              />
              <Route path="post/:postId" element={<Post />} />
            </Route>
            <Route
              path="create-post"
              element={<NewPostCreator userId={userId} />}
            />
          </Route>
          <Route path="*" element={<div>404... not found </div>} />
        </Routes>
      </Container>

    );
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/auth" element={<NewAuthwall />}>
          <Route path="login" element={<LoginMain />} />
          <Route path="register" element={<RegisterMain />} />

        </Route>
        <Route path="*" element={<div>404... not found </div>} />
      </Routes>
    </Container>
  );
}

export default App;
