import React from 'react';
import styled from 'styled-components';
import Account from '../../pages/Account';

const Container = styled.button`
    background: blue;
    color: black;
    width: 100px;
    height: 100px;
    
`;

function AccountHome() {
  return (
    <Account>
      home
      <Container>Home</Container>
    </Account>
  );
}

export default AccountHome;
