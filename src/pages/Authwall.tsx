import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginHeader from '../components/Login/LoginHeader';
import LoginFooter from '../components/Login/LoginFooter';

// interface NewLoginProps {

// }

function Authwall() {
  return (
    <>
      <LoginHeader />
      <Outlet />
      <LoginFooter />
    </>
  );
}

export default Authwall;
