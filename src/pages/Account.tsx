import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import ButtonAccount from '../components/ButtonAccount';
import AccountButton from '../components/AccountButtonPanel/AccountButton';

const Container = styled.div`
  /* top: 70px; */
  position: relative;
  max-width: 1336px;
  margin-top: 94px;
  margin-left:auto;
  margin-right:auto;
  display: block;
`;

const FlexContainer = styled.div`
  justify-content: space-evenly;
  flex-direction: row;
  display: flex;

`;

const Main = styled.div`
  min-width: 728px;
  max-width: 728px;
  flex: 1 1 auto;
  display: block;
  /* background-color: #2b2c28; */
  border-radius: 12px;
`;

const SideBar = styled.div`
  max-width: 368px;
  min-width: 368px;
  display: block;
  min-height: 100vh;
  padding-right: 24px;
  /* background-color: #2b2c28; */
  border-radius: 12px;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;
  display: flex;
`;

const MainBlock = styled.div`
  display: block;
`;

const MainUpFlex = styled.div`
  justify-content: center;
  display: flex;
`;

const MainUpMargin = styled.div`
  max-width: 680px;
  margin: 0 24px;
  min-width: 0;
  width: 100%;
`;

const MainUpInfoMargin = styled.div`
  margin: 52px 0px 48px;
  display: block;
`;

const MainUpUser = styled.div`
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
  display: flex;
`;

const MainUpNameFlex = styled.div`
  margin-right: 0px;
  justify-content: flex-start;
  flex: 1 1 auto;
  align-items: center;
  display: flex;
`;

const MainUpNameLeft = styled.div`
  align-items: center;
  display: flex;
`;

const MainUpLink = styled.a`
  margin: 0;
  padding: 0;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  border: inherit;
  font-size: inherit;
  color: inherit;
  fill: inherit;
`;

const MainUpUserName = styled.span`
  max-height: 52px;
  line-height: 52px;
  font-size: 42px;
  letter-spacing: 0px;
  color: rgb(25, 25, 25);
  font-weight: 500;
  overflow: hidden;
`;

const MainUpButtons = styled.div`
  height: 39px;
  position: relative;
  overflow: hidden;
  display: block;
  box-shadow: inset 0 -1px 0 rgb(230 230 230);
`;

const MainUpFlexButtons = styled.div`
  padding: 2px 0px;
  overflow-y: hidden;
  overflow-x: scroll;
  align-items: center;
  display: flex;
`;

const UpContainer = styled.div`
  flex: 1 0 auto;
  display: block;
`;

function Account({ children } : any) {
  const activeStyle = {
    textDecoration: 'none',
    borderBottom: '1px solid ',
  };
  const notActiveStyle = {
    textDecoration: 'none',
  };
  const setActive = ({ isActive } : any) => (isActive ? activeStyle : notActiveStyle);

  const userFullName = useSelector((state: any) => `${state.user.firstName} ${state.user.secondName}`);
  return (
    <Container>
      <FlexContainer>
        <Main>
          <MainContainer>
            <MainBlock>
              <MainUpFlex>
                <MainUpMargin>
                  <MainUpInfoMargin>
                    <MainUpUser>
                      <MainUpNameFlex>
                        <MainBlock>
                          <MainUpNameLeft>
                            <MainBlock>
                              <MainUpLink>
                                <MainUpUserName>{userFullName}</MainUpUserName>
                              </MainUpLink>
                            </MainBlock>
                          </MainUpNameLeft>
                        </MainBlock>
                      </MainUpNameFlex>
                    </MainUpUser>
                    <MainUpButtons>
                      <MainUpFlexButtons>
                        <NavLink
                          to="/profile/home"
                          style={setActive}
                        >
                          <AccountButton name="Home" />
                        </NavLink>
                        <NavLink to="/profile/about" style={setActive}>
                          <AccountButton name="About" />
                        </NavLink>
                      </MainUpFlexButtons>
                    </MainUpButtons>
                  </MainUpInfoMargin>
                </MainUpMargin>
              </MainUpFlex>
            </MainBlock>
            <UpContainer>
              {children}
            </UpContainer>
          </MainContainer>
        </Main>
        <SideBar>Side</SideBar>
      </FlexContainer>
    </Container>
  );
}

export default Account;
