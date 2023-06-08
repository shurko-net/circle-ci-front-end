import React from 'react';

import styled from 'styled-components';

import './App.css';

import NewLogin from './pages/NewLogin';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (

    <Container>
      <NewLogin />
      {/* <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={isLogged
            ? <Layout />
            : <Navigate to="/login" replace />}
        >
          <Route path="/" element={<NewMain userImageLoad={userImageLoad} />}>
            <Route path="/" element={<MainPosts />} />
            <Route
              path="profile"
              element={<NewProfile userImageLoad={userImageLoad} onImageChange={onImageChange} />}
            />
          </Route>
          <Route path="create-post" element={<NewPostCreator />} />
          <Route
            path={`/${subdomain}/home`}
            element={(
              <AccountHome
                userImageLoad={userImageLoad}
                onImageChange={onImageChange}
              />
)}
          />
          <Route path={`/${subdomain}/about`} element={<AccountAbout />} />
          <Route path="posts" element={<Home />} />
          <Route path="/me/save" element={<Saved />} />
          <Route path="/me/responses" element={<Saved />} />
        </Route>
        <Route
          path="/register"
          element={isLogged ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/login" element={isLogged ? <Navigate replace to="/" /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}

    </Container>

  );
}

export default App;
