import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hook';
import { checkAuth, setIsLoading } from './store/slices/authSlice';
import Main from './components/MainDesign/Main';
import MainPosts from './components/Home/MainPosts';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout';
import PostCreator from './pages/PostCreator';
import Authwall from './pages/Authwall';
import Preloader from './preloader';
import instance, { BASE_URL } from './http';
import LoginMain from './components/Login/LoginMain';
import RegisterMain from './components/Register/RegisterMain';
import Post from './pages/Post';
import UserProfile from './pages/UserProfile';
import Favorites from './pages/Favorites';
import ProfilePosts from './pages/ProfilePosts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  // const [areImagesLoaded, setAreImagesLoaded] = React.useState(false);
  const [sidebarImgLoad, setSidebarImgLoad] = useState(false);

  const dispatch = useAppDispatch();
  const {
    isLoading, isAuth, user,
  } = useAppSelector((state: any) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    isLoading: state.auth.isLoading,
  }));

  const [selectedImage, setSelectedImage] = React.useState(user.profileImageUrl);
  const [selectedBackgroundImage, setSelectedBackgroundImage] = React.useState(user
    .backgroundImageUrl);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  // voice:.idea/1695888496747.wav
  useEffect(() => {
    if (isAuth) {
      setSidebarImgLoad(true);
      instance
        .get(`${BASE_URL}/get-user-image`)
        .then((res) => {
          setSelectedImage(res.data);
        }).finally(() => {
          setSidebarImgLoad(false);
        });
      instance
        .get(`${BASE_URL}/get-user-backimage`)
        .then((res) => {
          setSelectedBackgroundImage(res.data);
        });
    }
  }, [isAuth]);

  if (localStorage.getItem('token') === null) {
    dispatch(setIsLoading(false));
  }

  if (isLoading) {
    return <Preloader />;
  }

  if (isAuth) {
    return (
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={(
                <Main
                  selectedImage={selectedImage}
                  sidebarImgLoad={sidebarImgLoad}
                />
              )}
            >
              <Route path="/" element={<MainPosts />} />

              <Route
                path="profile"
                element={(
                  <Profile
                    setSelectedImage={setSelectedImage}
                    setSelectedBackgroundImage={setSelectedBackgroundImage}
                  />
                )}
              />
              <Route path="post/:postId" element={<Post />} />
              <Route path="profile/:userId" element={<UserProfile />} />
              <Route
                path="profile/posts"
                element={(
                  <ProfilePosts
                    setSelectedImage={setSelectedImage}
                    setSelectedBackgroundImage={setSelectedBackgroundImage}
                  />
)}
              />
              <Route
                path="profile/favorites"
                element={(
                  <Favorites
                    setSelectedImage={setSelectedImage}
                    setSelectedBackgroundImage={setSelectedBackgroundImage}
                  />
)}
              />
            </Route>
            <Route
              path="create-post"
              element={<PostCreator />}
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
        <Route path="/auth" element={<Authwall />}>
          <Route path="login" element={<LoginMain />} />
          <Route path="register" element={<RegisterMain />} />
        </Route>
        <Route path="*" element={<div>404... not found </div>} />
      </Routes>
    </Container>
  );
}

export default App;
