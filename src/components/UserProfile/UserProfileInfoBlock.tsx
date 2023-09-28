import React from 'react';
import styled from 'styled-components';

const UserCard = styled.section`
  @media screen and (min-width: 576px) {
    border-radius: 1.25rem 1.25rem ;
  }
  background: #ffffff;
  //border: 1px solid #cfcfcf;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
`;

function UserProfileInfoBlock({ children }:any) {
  return (
    <UserCard>
      {children}
    </UserCard>
  );
}

export default UserProfileInfoBlock;
