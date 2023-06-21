import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
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
  setUserBackgroundImage,
  setUserImage,
} from './store/slices/userSlice';
import Preloader from './preloader';
import instance from './http';
import Post from './pages/Post';
import LoginMain from './components/NewLogin/LoginMain';
import RegisterMain from './components/NewRegister/RegisterMain';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const [isLoadingPage, setIsLoading] = React.useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = React.useState(false);

  const dispatch = useAppDispatch();
  const { isLoading, isAuth, user } = useAppSelector((state: any) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    isLoading: state.auth.isLoading,
  }));
  const { userImage, userId, backgroundImage } = useAppSelector(
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
      .get(`https://localhost:44353/api/get-user-image/${userId}`)
      .then((res) => {
        dispatch(setUserImage(res.data));
      });
    setSelectedImage(userImage);
    instance
      .get(`https://localhost:44353/api/get-background-image/${userId}`)
      .then((res) => {
        dispatch(setUserBackgroundImage(res.data));
        setIsLoading(false);
      });
    setSelectedBackgroundImage(backgroundImage);
  }, [userImage, backgroundImage]);

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
                  isLoadingPage={isLoadingPage}
                  selectedImage={selectedImage}
                />
              )}
            >
              <Route path="/" element={<MainPosts setIsLoading={setIsLoading} />} />

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
