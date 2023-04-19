import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AccountMainUpContent from '../components/AccountComponent/AccountMainUpContent';
import Flex from '../components/Flex';

const Container = styled.div`
  position: relative;
  max-width: 780px;
  margin-top: 70px;
  margin-left:auto;
  margin-right:auto;
`;

const Main = styled.div`
  min-height: 100vh;
  flex: 1 1 auto;
  display: block;
  border-radius: 12px;
`;

const MainContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const UpContainer = styled.div`
  flex: 1 0 auto;
  display: block;
`;

function Account({ children, userImageLoad, user } :
{ children:any, userImageLoad?: string, user: boolean }) {
  // const dispatch = useDispatch();
  const userFullName = useSelector((state: any) => `${state.user.firstName} ${state.user.secondName}`);
  const subdomain = useSelector((state: any) => state.user.subdomain);

  return (
    <Container>
      <Flex
        justify="space-evenly"
        direction="row"
      >
        <Main>
          <MainContainer>
            <AccountMainUpContent
              user={user}
              userImageLoad={userImageLoad}
              firstUrl={`/${subdomain}/home`}
              secondUrl={`/${subdomain}/about`}
              text={userFullName}
              nameFirstButton="Дім"
              nameSecondButton="Біографія"
            />
            <UpContainer>
              {children}
            </UpContainer>
          </MainContainer>
        </Main>
      </Flex>
    </Container>
  );
}
export default Account;
