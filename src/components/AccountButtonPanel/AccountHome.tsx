import React from 'react';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Account from '../../pages/Account';
import HomeLine from './HomeLine';

function AccountHome() {
  const email = useSelector((state:any) => state.user.email);

  return (
    <Account>
      <HomeLine
        email={email}
        name="Email adress"
      />
    </Account>
  );
}

export default AccountHome;
