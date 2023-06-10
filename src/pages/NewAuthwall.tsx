import React from 'react';
import LoginHeader from '../components/NewLogin/LoginHeader';
import LoginFooter from '../components/NewLogin/LoginFooter';
import LoginMain from '../components/NewLogin/LoginMain';

// interface NewLoginProps {

// }

function NewAuthwall() {
  return (
    <>
      <LoginHeader />
      <LoginMain />
      <LoginFooter />
    </>
  );
}

export default NewAuthwall;
