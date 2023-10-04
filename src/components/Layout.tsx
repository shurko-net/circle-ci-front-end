import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './HeaderDesign/Header';
import Footer from './FooterDesign/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
