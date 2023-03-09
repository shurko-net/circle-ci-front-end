import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AccountMainUpContent from '../components/AccountComponent/AccountMainUpContent';
import Flex from '../components/Flex';

const Container = styled.div`
  position: relative;
  max-width: 1336px;
  margin-top: 70px;
  margin-left:auto;
  margin-right:auto;
  display: block;
`;

const Main = styled.div`
  min-width: 728px;
  max-width: 728px;
  flex: 1 1 auto;
  display: block;
  border-radius: 12px;
`;

const SideBar = styled.div`
  max-width: 368px;
  min-width: 368px;
  display: block;
  min-height: 100vh;
  padding-right: 24px;
  border-radius: 12px;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;
  display: flex;
`;

const UpContainer = styled.div`
  flex: 1 0 auto;
  display: block;
`;

const SideBarContainer = styled.div`
  height: 100%;
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SideBarSticky = styled.div`
  top: 57px;
  position: sticky;
  display: block;
`;

const SideBarFlex = styled.div`
  display: flex;
  min-height: calc(100vh - 0px);
  flex-direction: column;
`;

const SideBarBlock = styled.div`
  flex: 1 0 auto;
  display: block;
`;

const SideBarUserBlock = styled.div`
  margin-top: 40px;
  border-bottom: none;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
`;

const SideBarUserDiv = styled.div`
  margin-top: 16px;
  display: block;
`;

const SideBarUserH2 = styled.h2`
  letter-spacing: 0;
  font-weight: 500;
  font-size: 16px;
  color: rgba(41, 41, 41, 1);
  line-height: 20px;
`;

const ButtonImg = styled.img`
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display:block;
  width: 88px;
  height: 88px;
  background-size: 100%;
  border: none;
`;

const BioDiv = styled.div`
  margin-top: 12px;
  display: block;
`;

const BioP = styled.p`
  color: rgba(117, 117, 117, 1);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const BioSpan = styled.span`
  word-break: break-word;
`;

function Account({ children, userImageLoad, user } : {
  children:any, userImageLoad?: string, user?: boolean }) {
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
              firstUrl={`/${subdomain}/home`}
              secondUrl={`/${subdomain}/about`}
              text={userFullName}
              nameFirstButton="Home"
              nameSecondButton="About"
            />
            <UpContainer>
              {children}
            </UpContainer>
          </MainContainer>
        </Main>
        <SideBar>
          <SideBarContainer>
            <SideBarSticky>
              <SideBarFlex>
                <SideBarBlock>
                  <SideBarUserBlock>
                    {user
                      ? (
                        <>
                          <ButtonImg
                            style={{ backgroundImage: `url(${userImageLoad})` }}
                          />
                          <SideBarUserDiv>
                            <SideBarUserH2>
                              {userFullName}
                            </SideBarUserH2>
                          </SideBarUserDiv>
                          <BioDiv>
                            <BioP>
                              <BioSpan>
                                hello
                              </BioSpan>
                            </BioP>
                          </BioDiv>
                        </>
                      )
                      : null}

                  </SideBarUserBlock>
                </SideBarBlock>
              </SideBarFlex>
            </SideBarSticky>
          </SideBarContainer>
        </SideBar>
      </Flex>
    </Container>
  );
}
export default Account;
