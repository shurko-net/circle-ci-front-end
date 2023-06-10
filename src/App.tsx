import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import {
  Route, Routes,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hook';
import { checkAuth } from './store/slices/authSlice';
import NewMain from './components/NewMainDesign/NewMain';
import MainPosts from './components/Home/MainPosts';
import NewProfile from './components/NewProfile/NewProfile';
import Layout from './components/Layout';
import NewPostCreator from './pages/NewPostCreator';
import NewAuthwall from './pages/NewAuthwall';
import { setUser } from './store/slices/userSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const { isLoading, isAuth, user } = useAppSelector((state: any) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    isLoading: state.auth.isLoading,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  useEffect(() => {
    if (isAuth && user) {
      dispatch(setUser({
        id: user.id,
        firstName: user.name,
        secondName: user.surname,
        password: user.passwordHash,
        email: user.email,
        biography: user.biography,
        phoneNumber: user.tNumber,
        followers: user.followers,
      }));
      // debugger;
    }
  }, [isAuth, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return (
      <Container>
        <NewAuthwall />
      </Container>
    );
  }

  return (
    <Container>
      {/* {isAuth && ( */}
      <Routes>

        <Route
          path="/"
          element={
            <Layout />
             }
        >

          <Route path="/" element={<NewMain />}>
            <Route path="/" element={<MainPosts />} />
            <Route
              path="profile"
              element={<NewProfile />}
            />

          </Route>
          <Route path="create-post" element={<NewPostCreator />} />
        </Route>
        <Route path="*" element={<div>404... not found </div>} />
      </Routes>
      {/* )} */}
    </Container>
  );
}

export default App;
