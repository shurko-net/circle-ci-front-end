import React from 'react';
import { Outlet } from 'react-router-dom';
import NewHeader from './NewHeaderDesign/NewHeader';
import NewFooter from './NewFooterDesign/NewFooter';

function Layout() {
  return (
    <>
      <NewHeader />
      <Outlet />
      <NewFooter />
    </>
  );
}

export default Layout;
