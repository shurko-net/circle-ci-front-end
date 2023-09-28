import React, { useEffect } from 'react';
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
import LoginMain from './components/NewLogin/LoginMain';
import RegisterMain from './components/NewRegister/RegisterMain';
import Post from './pages/Post';
import UserProfile from './pages/UserProfile';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const [areImagesLoaded, setAreImagesLoaded] = React.useState(false);

  const dispatch = useAppDispatch();
  const {
    isLoading, isAuth, user,
  } = useAppSelector((state: any) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    isLoading: state.auth.isLoading,
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

  console.log('userId', userId !== undefined ? userId : 'Loading...');

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
      console.log('good');
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
  // voice:.idea/1695888496747.wav
  useEffect(() => {
    if (isAuth) {
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
    }
  }, [isAuth]);

  if (isLoading || !areImagesLoaded) {
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
                <NewMain
                  selectedImage={selectedImage}
                />
              )}
            >
              <Route path="/" element={<MainPosts userId={userId} />} />

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
              <Route path="profile/:userId" element={<UserProfile />} />
            </Route>
            <Route
              path="create-post"
              element={<NewPostCreator />}
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
