import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginHeader from '../components/NewLogin/LoginHeader';
import LoginFooter from '../components/NewLogin/LoginFooter';
import LoginMain from '../components/NewLogin/LoginMain';

// interface NewLoginProps {

// }

function NewAuthwall() {
  return (
    <>
      <LoginHeader />
      <Outlet />
      <LoginFooter />
    </>
  );
}

export default NewAuthwall;
