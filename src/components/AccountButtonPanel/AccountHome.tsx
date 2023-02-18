import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import AccountHomeModal from './AccountHomeModal';

import Account from '../../pages/Account';
import HomeLine from './HomeLine';

const Line = styled.div`
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  height: 0px;
  width: 100%;
  display: block;
`;

function AccountHome() {
  const email = useSelector((state:any) => state.user.email);
  const userFullName = useSelector((state: any) => `${state.user.firstName} ${state.user.secondName}`);

  return (
    <Account>
      {/* <AccountHomeModal> */}
      <HomeLine
        info={email}
        name="Email adress"
        downInfo=""
        img=""
        color=""
      />
      {/* </AccountHomeModal> */}
      <HomeLine
        info="@ytube.noobtv"
        name="Username and subdomain"
        downInfo=""
        img=""
        color=""
      />
      <HomeLine
        info={`${userFullName}`}
        name="Profile information"
        downInfo="Edit yout photo, name, bio, etc."
        img="Yaroslav.png"
        color=""
      />
      <Line />
      <HomeLine
        info=""
        name="Delete account"
        downInfo="Permanently delete your account and all of your content."
        img=""
        color="rgb(201, 74, 74)"
      />
    </Account>
  );
}

export default AccountHome;
