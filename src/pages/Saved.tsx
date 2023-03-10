import React from 'react';
import styled from 'styled-components';
import AccountMain from '../components/AccountComponent/AccountMain';
import Flex from '../components/Flex';
import AccountSideBar from '../components/AccountComponent/AccountSideBar';

const Container = styled.div`
    max-width: 1336px;
    margin: auto;
    display: block;
    margin-top: 70px;
`;

function Saved() {
  return (
    <Container>
      <Flex
        justify="space-evenly"
        direction="row"
      >
        <AccountMain
          text="Your stories"
          nameFirstButton="Published"
          nameSecondButton="Responses"
          firstUrl="/me/save"
          secondUrl="/me/responses"
        />
        <AccountSideBar />
      </Flex>
    </Container>

  );
}

export default Saved;
